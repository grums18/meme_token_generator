// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract BadgeNFT is ERC721, ERC721Enumerable, AccessControl, ReentrancyGuard {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIdCounter;
    
    // Access control roles
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    
    enum BadgeType {
        TOKEN_CREATOR,
        LAUNCH_MASTER,
        VOLUME_KING,
        COMMUNITY_BUILDER,
        DIAMOND_HANDS,
        VIRAL_SENSATION,
        WHALE_CALLER,
        PERFECT_SHOT
    }
    
    struct Badge {
        BadgeType badgeType;
        address tokenAddress;
        uint256 mintTime;
        string metadata;
        uint256 achievementValue; // Store achievement metrics (volume, holders, etc.)
    }
    
    mapping(uint256 => Badge) public badges;
    mapping(address => uint256[]) public userBadges;
    mapping(address => mapping(BadgeType => bool)) public hasBadge;
    mapping(address => mapping(BadgeType => uint256)) public badgeProgress;
    
    // Badge requirements (can be updated by admin)
    mapping(BadgeType => uint256) public badgeRequirements;
    
    event BadgeMinted(
        address indexed recipient,
        uint256 indexed tokenId,
        BadgeType badgeType,
        address tokenAddress,
        uint256 achievementValue
    );
    
    event BadgeRequirementUpdated(
        BadgeType badgeType,
        uint256 oldRequirement,
        uint256 newRequirement
    );
    
    event MinterAdded(address indexed minter);
    event MinterRemoved(address indexed minter);
    
    constructor(address initialOwner) ERC721("MemeCoin Achievement Badges", "MCAB") {
        _grantRole(DEFAULT_ADMIN_ROLE, initialOwner);
        _grantRole(ADMIN_ROLE, initialOwner);
        _grantRole(MINTER_ROLE, initialOwner);
        
        // Set initial badge requirements
        _initializeBadgeRequirements();
    }
    
    function _initializeBadgeRequirements() private {
        badgeRequirements[BadgeType.TOKEN_CREATOR] = 1; // 1 token created
        badgeRequirements[BadgeType.LAUNCH_MASTER] = 1 ether; // 1 ETH liquidity
        badgeRequirements[BadgeType.VOLUME_KING] = 100000 ether; // $100K volume (in wei)
        badgeRequirements[BadgeType.COMMUNITY_BUILDER] = 1000; // 1000 holders
        badgeRequirements[BadgeType.DIAMOND_HANDS] = 180 days; // 6 months holding
        badgeRequirements[BadgeType.VIRAL_SENSATION] = 10000; // 10K social mentions
        badgeRequirements[BadgeType.WHALE_CALLER] = 10 ether; // 10 ETH whale investment
        badgeRequirements[BadgeType.PERFECT_SHOT] = 1000; // 1000x price increase
    }
    
    /**
     * @dev Mint a badge to a recipient (only callable by minters)
     * @param to Address to mint the badge to
     * @param badgeType Type of badge to mint
     * @param tokenAddress Associated token address
     * @param achievementValue The value that qualified for this badge
     */
    function mintBadge(
        address to,
        BadgeType badgeType,
        address tokenAddress,
        uint256 achievementValue
    ) external onlyRole(MINTER_ROLE) nonReentrant returns (uint256) {
        require(to != address(0), "Cannot mint to zero address");
        require(!hasBadge[to][badgeType], "Badge already earned");
        require(
            achievementValue >= badgeRequirements[badgeType],
            "Achievement value does not meet requirement"
        );
        
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        
        badges[tokenId] = Badge({
            badgeType: badgeType,
            tokenAddress: tokenAddress,
            mintTime: block.timestamp,
            metadata: "",
            achievementValue: achievementValue
        });
        
        userBadges[to].push(tokenId);
        hasBadge[to][badgeType] = true;
        
        _safeMint(to, tokenId);
        
        emit BadgeMinted(to, tokenId, badgeType, tokenAddress, achievementValue);
        
        return tokenId;
    }
    
    /**
     * @dev Batch mint multiple badges (only callable by minters)
     */
    function batchMintBadges(
        address[] calldata recipients,
        BadgeType[] calldata badgeTypes,
        address[] calldata tokenAddresses,
        uint256[] calldata achievementValues
    ) external onlyRole(MINTER_ROLE) nonReentrant {
        require(
            recipients.length == badgeTypes.length &&
            badgeTypes.length == tokenAddresses.length &&
            tokenAddresses.length == achievementValues.length,
            "Array lengths must match"
        );
        
        for (uint256 i = 0; i < recipients.length; i++) {
            if (!hasBadge[recipients[i]][badgeTypes[i]] && 
                achievementValues[i] >= badgeRequirements[badgeTypes[i]]) {
                mintBadge(recipients[i], badgeTypes[i], tokenAddresses[i], achievementValues[i]);
            }
        }
    }
    
    /**
     * @dev Update badge progress for tracking (only callable by minters)
     */
    function updateBadgeProgress(
        address user,
        BadgeType badgeType,
        uint256 progress
    ) external onlyRole(MINTER_ROLE) {
        badgeProgress[user][badgeType] = progress;
    }
    
    /**
     * @dev Add a new minter (only callable by admin)
     */
    function addMinter(address minter) external onlyRole(ADMIN_ROLE) {
        _grantRole(MINTER_ROLE, minter);
        emit MinterAdded(minter);
    }
    
    /**
     * @dev Remove a minter (only callable by admin)
     */
    function removeMinter(address minter) external onlyRole(ADMIN_ROLE) {
        _revokeRole(MINTER_ROLE, minter);
        emit MinterRemoved(minter);
    }
    
    /**
     * @dev Update badge requirement (only callable by admin)
     */
    function updateBadgeRequirement(
        BadgeType badgeType,
        uint256 newRequirement
    ) external onlyRole(ADMIN_ROLE) {
        uint256 oldRequirement = badgeRequirements[badgeType];
        badgeRequirements[badgeType] = newRequirement;
        emit BadgeRequirementUpdated(badgeType, oldRequirement, newRequirement);
    }
    
    /**
     * @dev Get all badges owned by an address
     */
    function getBadges(address owner) external view returns (uint256[] memory) {
        return userBadges[owner];
    }
    
    /**
     * @dev Get badge information
     */
    function getBadgeInfo(uint256 tokenId) external view returns (Badge memory) {
        require(_exists(tokenId), "Badge does not exist");
        return badges[tokenId];
    }
    
    /**
     * @dev Get user's progress for a specific badge type
     */
    function getUserBadgeProgress(
        address user,
        BadgeType badgeType
    ) external view returns (uint256 progress, uint256 requirement, bool earned) {
        progress = badgeProgress[user][badgeType];
        requirement = badgeRequirements[badgeType];
        earned = hasBadge[user][badgeType];
    }
    
    /**
     * @dev Check if user is eligible for a badge
     */
    function isEligibleForBadge(
        address user,
        BadgeType badgeType,
        uint256 achievementValue
    ) external view returns (bool) {
        return !hasBadge[user][badgeType] && 
               achievementValue >= badgeRequirements[badgeType];
    }
    
    /**
     * @dev Get total number of badges minted
     */
    function totalBadges() external view returns (uint256) {
        return _tokenIdCounter.current();
    }
    
    /**
     * @dev Override tokenURI to return metadata
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "Badge does not exist");
        
        Badge memory badge = badges[tokenId];
        
        // Return metadata URI based on badge type
        string memory baseURI = "https://api.memecoin-toolkit.com/badges/";
        return string(abi.encodePacked(
            baseURI, 
            _toString(uint256(badge.badgeType)),
            "/",
            _toString(tokenId)
        ));
    }
    
    /**
     * @dev Disable transfers to make badges soulbound (optional)
     * Uncomment if you want badges to be non-transferable
     */
    /*
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        require(from == address(0) || to == address(0), "Badges are soulbound");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }
    */
    
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }
    
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    
    function _toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}