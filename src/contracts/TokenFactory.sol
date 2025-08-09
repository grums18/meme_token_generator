// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MemeToken is ERC20, Ownable {
    uint256 public immutable INITIAL_SUPPLY;
    uint256 public immutable CREATION_TIME;
    
    constructor(
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        address creator
    ) ERC20(name, symbol) Ownable(creator) {
        INITIAL_SUPPLY = totalSupply;
        CREATION_TIME = block.timestamp;
        _mint(creator, totalSupply);
    }
}

// Import the HybridLiquidityPool contract
import "./HybridLiquidityPool.sol";

contract TokenFactory is ReentrancyGuard {
    uint256 public constant PLATFORM_FEE = 0.001 ether; // 0.001 ETH platform fee
    address public immutable PLATFORM_WALLET;
    address public immutable WETH_ADDRESS; // Base WETH address
    
    struct TokenInfo {
        address tokenAddress;
        address liquidityPool; // Add pool address
        string name;
        string symbol;
        uint256 totalSupply;
        uint256 initialLiquidity;
        uint256 lockPeriod;
        uint256 creationTime;
        address creator;
    }
    
    mapping(address => address[]) public createdTokens;
    mapping(address => TokenInfo) public tokenInfo;
    mapping(address => address) public tokenToPool; // Token -> Pool mapping
    
    event PlatformFeeCollected(address indexed creator, uint256 amount);
    
    event TokenCreated(
        address indexed creator,
        address indexed tokenAddress,
        address indexed liquidityPool,
        string name,
        string symbol,
        uint256 totalSupply,
        uint256 initialLiquidity,
        uint256 lockPeriod
    );
    
    constructor(address _platformWallet, address _wethAddress) {
        PLATFORM_WALLET = _platformWallet;
        WETH_ADDRESS = _wethAddress; // 0x4200000000000000000000000000000000000006 on Base
    }
    
    function createToken(
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        uint256 initialLiquidity,
        uint256 lockPeriod
    ) external payable nonReentrant returns (address tokenAddress, address poolAddress) {
        require(bytes(name).length > 0, "Name cannot be empty");
        require(bytes(symbol).length > 0, "Symbol cannot be empty");
        require(totalSupply > 0, "Total supply must be greater than 0");
        require(msg.value >= initialLiquidity + PLATFORM_FEE, "Insufficient ETH for liquidity + fee");
        require(lockPeriod >= 30 days, "Lock period must be at least 30 days");
        
        // Collect platform fee
        (bool feeSuccess, ) = PLATFORM_WALLET.call{value: PLATFORM_FEE}("");
        require(feeSuccess, "Platform fee transfer failed");
        emit PlatformFeeCollected(msg.sender, PLATFORM_FEE);
        
        // Deploy new token contract
        MemeToken token = new MemeToken(name, symbol, totalSupply, msg.sender);
        tokenAddress = address(token);
        
        // Deploy HybridLiquidityPool for this token
        HybridLiquidityPool pool = new HybridLiquidityPool(
            tokenAddress,                    // _token (the meme coin)
            WETH_ADDRESS,                   // _baseToken (WETH)
            string(abi.encodePacked(symbol, "-ETH LP")), // _name
            string(abi.encodePacked(symbol, "-ETH-LP")), // _symbol
            lockPeriod                      // _lockPeriod
        );
        poolAddress = address(pool);
        
        // Store token info with pool address
        tokenInfo[tokenAddress] = TokenInfo({
            tokenAddress: tokenAddress,
            liquidityPool: poolAddress,
            name: name,
            symbol: symbol,
            totalSupply: totalSupply,
            initialLiquidity: initialLiquidity,
            lockPeriod: lockPeriod,
            creationTime: block.timestamp,
            creator: msg.sender
        });
        
        // Add mappings
        createdTokens[msg.sender].push(tokenAddress);
        tokenToPool[tokenAddress] = poolAddress;
        
        // Transfer tokens to pool for initial liquidity
        token.transfer(poolAddress, totalSupply / 2); // 50% of tokens to pool
        
        // Add initial liquidity (remaining ETH after fee)
        uint256 liquidityETH = msg.value - PLATFORM_FEE;
        (bool liquiditySuccess, ) = poolAddress.call{value: liquidityETH}("");
        require(liquiditySuccess, "Initial liquidity failed");
        
        emit TokenCreated(
            msg.sender,
            tokenAddress,
            poolAddress,
            name,
            symbol,
            totalSupply,
            initialLiquidity,
            lockPeriod
        );
        
        return (tokenAddress, poolAddress);
    }
    
    function getCreatedTokens(address creator) external view returns (address[] memory) {
        return createdTokens[creator];
    }
    
    function getTokenInfo(address tokenAddress) external view returns (TokenInfo memory) {
        return tokenInfo[tokenAddress];
    }
    
    function getPoolAddress(address tokenAddress) external view returns (address) {
        return tokenToPool[tokenAddress];
    }
}