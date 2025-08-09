import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base, baseSepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'MemeCoin Creator Toolkit',
  projectId: 'bb446a962ee87cf67158e337332cc609', // Replace with your WalletConnect project ID
  chains: [base, baseSepolia],
  ssr: false,
});

// Smart Contract Addresses (Deploy these contracts first)
export const CONTRACTS = {
  TOKEN_FACTORY: '0x74B92925FE7898875A19aC7cB9a662eF14DAe41A', // Replace with deployed TokenFactory address
  BADGE_NFT: '0x9bfec6c79afd8b2db9a1cb5604868ac81f1013f9', // Replace with deployed BadgeNFT address
  WETH_ADDRESS: '0x4200000000000000000000000000000000000006', // Base WETH address
} as const;
// Token Factory ABI
export const TOKEN_FACTORY_ABI = [
	
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "CREATION_TIME",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "INITIAL_SUPPLY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}

] as const;
// ERC20 Token ABI
export const ERC20_ABI = [
  {
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  }
] as const;
// Badge NFT ABI
export const BADGE_NFT_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "initialOwner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AccessControlBadConfirmation",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "neededRole",
				"type": "bytes32"
			}
		],
		"name": "AccessControlUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ERC721EnumerableForbiddenBatchMint",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "ERC721OutOfBoundsIndex",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "badgeType",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "achievementValue",
				"type": "uint256"
			}
		],
		"name": "BadgeMinted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "badgeType",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldRequirement",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newRequirement",
				"type": "uint256"
			}
		],
		"name": "BadgeRequirementUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "minter",
				"type": "address"
			}
		],
		"name": "MinterAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "minter",
				"type": "address"
			}
		],
		"name": "MinterRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "previousAdminRole",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "newAdminRole",
				"type": "bytes32"
			}
		],
		"name": "RoleAdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DEFAULT_ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MINTER_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "minter",
				"type": "address"
			}
		],
		"name": "addMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "badgeProgress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "badgeRequirements",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "badges",
		"outputs": [
			{
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "badgeType",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "mintTime",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "metadata",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "achievementValue",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "recipients",
				"type": "address[]"
			},
			{
				"internalType": "enum BadgeNFT.BadgeType[]",
				"name": "badgeTypes",
				"type": "uint8[]"
			},
			{
				"internalType": "address[]",
				"name": "tokenAddresses",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "achievementValues",
				"type": "uint256[]"
			}
		],
		"name": "batchMintBadges",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getBadgeInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum BadgeNFT.BadgeType",
						"name": "badgeType",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "tokenAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "mintTime",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "metadata",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "achievementValue",
						"type": "uint256"
					}
				],
				"internalType": "struct BadgeNFT.Badge",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "getBadges",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleAdmin",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "badgeType",
				"type": "uint8"
			}
		],
		"name": "getUserBadgeProgress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "progress",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "requirement",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "earned",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "",
				"type": "uint8"
			}
		],
		"name": "hasBadge",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "hasRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "badgeType",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "achievementValue",
				"type": "uint256"
			}
		],
		"name": "isEligibleForBadge",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "badgeType",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "achievementValue",
				"type": "uint256"
			}
		],
		"name": "mintBadge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "minter",
				"type": "address"
			}
		],
		"name": "removeMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "callerConfirmation",
				"type": "address"
			}
		],
		"name": "renounceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBadges",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "badgeType",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "progress",
				"type": "uint256"
			}
		],
		"name": "updateBadgeProgress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum BadgeNFT.BadgeType",
				"name": "badgeType",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "newRequirement",
				"type": "uint256"
			}
		],
		"name": "updateBadgeRequirement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userBadges",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] as const;

// Contract Bytecode (for deployment verification)
export const CONTRACT_BYTECODE = {
  TOKEN_FACTORY: "60c060405234801561000f575f5ffd5b50604051611bbc380380611bbc8339818101604052810190610031919061063a565b808484816003908161004391906108dd565b50806004908161005391906108dd565b5050505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100c6575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100bd91906109bb565b60405180910390fd5b6100d5816100ff60201b60201c565b5081608081815250504260a081815250506100f681836101c260201b60201c565b50505050610a91565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610232575f6040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161022991906109bb565b60405180910390fd5b6102435f838361024760201b60201c565b5050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610297578060025f82825461028b9190610a01565b92505081905550610365565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610320578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161031793929190610a43565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036103ac578060025f82825403925050819055506103f6565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516104539190610a78565b60405180910390a3505050565b5f604051905090565b5f5ffd5b5f5ffd5b5f5ffd5b5f5ffd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6104bf82610479565b810181811067ffffffffffffffff821117156104de576104dd610489565b5b80604052505050565b5f6104f0610460565b90506104fc82826104b6565b919050565b5f67ffffffffffffffff82111561051b5761051a610489565b5b61052482610479565b9050602081019050919050565b8281835e5f83830152505050565b5f61055161054c84610501565b6104e7565b90508281526020810184848401111561056d5761056c610475565b5b610578848285610531565b509392505050565b5f82601f83011261059457610593610471565b5b81516105a484826020860161053f565b91505092915050565b5f819050919050565b6105bf816105ad565b81146105c9575f5ffd5b50565b5f815190506105da816105b6565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610609826105e0565b9050919050565b610619816105ff565b8114610623575f5ffd5b50565b5f8151905061063481610610565b92915050565b5f5f5f5f6080858703121561065257610651610469565b5b5f85015167ffffffffffffffff81111561066f5761066e61046d565b5b61067b87828801610580565b945050602085015167ffffffffffffffff81111561069c5761069b61046d565b5b6106a887828801610580565b93505060406106b9878288016105cc565b92505060606106ca87828801610626565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061072457607f821691505b602082108103610737576107366106e0565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026107997fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261075e565b6107a3868361075e565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6107de6107d96107d4846105ad565b6107bb565b6105ad565b9050919050565b5f819050919050565b6107f7836107c4565b61080b610803826107e5565b84845461076a565b825550505050565b5f5f905090565b610822610813565b61082d8184846107ee565b505050565b5b81811015610850576108455f8261081a565b600181019050610833565b5050565b601f821115610895576108668161073d565b61086f8461074f565b8101602085101561087e578190505b61089261088a8561074f565b830182610832565b50505b505050565b5f82821c905092915050565b5f6108b55f198460080261089a565b1980831691505092915050565b5f6108cd83836108a6565b9150826002028217905092915050565b6108e6826106d6565b67ffffffffffffffff8111156108ff576108fe610489565b5b610909825461070d565b610914828285610854565b5f60209050601f831160018114610945575f8415610933578287015190505b61093d85826108c2565b8655506109a4565b601f1984166109538661073d565b5f5b8281101561097a57848901518255600182019150602085019450602081019050610955565b868310156109975784890151610993601f8916826108a6565b8355505b6001600288020188555050505b505050505050565b6109b5816105ff565b82525050565b5f6020820190506109ce5f8301846109ac565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610a0b826105ad565b9150610a16836105ad565b9250828201905080821115610a2e57610a2d6109d4565b5b92915050565b610a3d816105ad565b82525050565b5f606082019050610a565f8301866109ac565b610a636020830185610a34565b610a706040830184610a34565b949350505050565b5f602082019050610a8b5f830184610a34565b92915050565b60805160a05161110a610ab25f395f61051d01525f6103bf015261110a5ff3fe608060405234801561000f575f5ffd5b50600436106100e8575f3560e01c8063715018a61161008a578063a9059cbb11610064578063a9059cbb1461023a578063b410da251461026a578063dd62ed3e14610288578063f2fde38b146102b8576100e8565b8063715018a6146101f45780638da5cb5b146101fe57806395d89b411461021c576100e8565b806323b872dd116100c657806323b872dd146101585780632ff2e9dc14610188578063313ce567146101a657806370a08231146101c4576100e8565b806306fdde03146100ec578063095ea7b31461010a57806318160ddd1461013a575b5f5ffd5b6100f46102d4565b6040516101019190610d83565b60405180910390f35b610124600480360381019061011f9190610e34565b610364565b6040516101319190610e8c565b60405180910390f35b610142610386565b60405161014f9190610eb4565b60405180910390f35b610172600480360381019061016d9190610ecd565b61038f565b60405161017f9190610e8c565b60405180910390f35b6101906103bd565b60405161019d9190610eb4565b60405180910390f35b6101ae6103e1565b6040516101bb9190610f38565b60405180910390f35b6101de60048036038101906101d99190610f51565b6103e9565b6040516101eb9190610eb4565b60405180910390f35b6101fc61042e565b005b610206610441565b6040516102139190610f8b565b60405180910390f35b610224610469565b6040516102319190610d83565b60405180910390f35b610254600480360381019061024f9190610e34565b6104f9565b6040516102619190610e8c565b60405180910390f35b61027261051b565b60405161027f9190610eb4565b60405180910390f35b6102a2600480360381019061029d9190610fa4565b61053f565b6040516102af9190610eb4565b60405180910390f35b6102d260048036038101906102cd9190610f51565b6105c1565b005b6060600380546102e39061100f565b80601f016020809104026020016040519081016040528092919081815260200182805461030f9061100f565b801561035a5780601f106103315761010080835404028352916020019161035a565b820191905f5260205f20905b81548152906001019060200180831161033d57829003601f168201915b5050505050905090565b5f5f61036e610645565b905061037b81858561064c565b600191505092915050565b5f600254905090565b5f5f610399610645565b90506103a685828561065e565b6103b18585856106f1565b60019150509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f6012905090565b5f5f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6104366107e1565b61043f5f610868565b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104789061100f565b80601f01602080910402602001604051908101604052809291908181526020018280546104a49061100f565b80156104ef5780601f106104c6576101008083540402835291602001916104ef565b820191905f5260205f20905b8154815290600101906020018083116104d257829003601f168201915b5050505050905090565b5f5f610503610645565b90506105108185856106f1565b600191505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f60015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905092915050565b6105c96107e1565b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610639575f6040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016106309190610f8b565b60405180910390fd5b61064281610868565b50565b5f33905090565b610659838383600161092b565b505050565b5f610669848461053f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8110156106eb57818110156106dc578281836040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526004016106d39392919061103f565b60405180910390fd5b6106ea84848484035f61092b565b5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610761575f6040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016107589190610f8b565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107d1575f6040517fec442f050000000000000000000000000000000000000000000000000000000081526004016107c89190610f8b565b60405180910390fd5b6107dc838383610afa565b505050565b6107e9610645565b73ffffffffffffffffffffffffffffffffffffffff16610807610441565b73ffffffffffffffffffffffffffffffffffffffff16146108665761082a610645565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161085d9190610f8b565b60405180910390fd5b565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b5f73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361099b575f6040517fe602df050000000000000000000000000000000000000000000000000000000081526004016109929190610f8b565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a0b575f6040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610a029190610f8b565b60405180910390fd5b8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508015610af4578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610aeb9190610eb4565b60405180910390a35b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b4a578060025f828254610b3e91906110a1565b92505081905550610c18565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054905081811015610bd3578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610bca9392919061103f565b60405180910390fd5b8181035f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c5f578060025f8282540392505081905550610ca9565b805f5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d069190610eb4565b60405180910390a3505050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610d5582610d13565b610d5f8185610d1d565b9350610d6f818560208601610d2d565b610d7881610d3b565b840191505092915050565b5f6020820190508181035f830152610d9b8184610d4b565b905092915050565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610dd082610da7565b9050919050565b610de081610dc6565b8114610dea575f5ffd5b50565b5f81359050610dfb81610dd7565b92915050565b5f819050919050565b610e1381610e01565b8114610e1d575f5ffd5b50565b5f81359050610e2e81610e0a565b92915050565b5f5f60408385031215610e4a57610e49610da3565b5b5f610e5785828601610ded565b9250506020610e6885828601610e20565b9150509250929050565b5f8115159050919050565b610e8681610e72565b82525050565b5f602082019050610e9f5f830184610e7d565b92915050565b610eae81610e01565b82525050565b5f602082019050610ec75f830184610ea5565b92915050565b5f5f5f60608486031215610ee457610ee3610da3565b5b5f610ef186828701610ded565b9350506020610f0286828701610ded565b9250506040610f1386828701610e20565b9150509250925092565b5f60ff82169050919050565b610f3281610f1d565b82525050565b5f602082019050610f4b5f830184610f29565b92915050565b5f60208284031215610f6657610f65610da3565b5b5f610f7384828501610ded565b91505092915050565b610f8581610dc6565b82525050565b5f602082019050610f9e5f830184610f7c565b92915050565b5f5f60408385031215610fba57610fb9610da3565b5b5f610fc785828601610ded565b9250506020610fd885828601610ded565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061102657607f821691505b60208210810361103957611038610fe2565b5b50919050565b5f6060820190506110525f830186610f7c565b61105f6020830185610ea5565b61106c6040830184610ea5565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6110ab82610e01565b91506110b683610e01565b92508282019050808211156110ce576110cd611074565b5b9291505056fea264697066735822122069d3600fae92230cce6231d8e506c794fa4deacfab621bbf82f32b02097f97c464736f6c634300081e0033", // Optional: for verification
  BADGE_NFT: "608060405234801561000f575f5ffd5b5060405161548e38038061548e8339818101604052810190610031919061050a565b6040518060400160405280601b81526020017f4d656d65436f696e20416368696576656d656e742042616467657300000000008152506040518060400160405280600481526020017f4d43414200000000000000000000000000000000000000000000000000000000815250815f90816100ab9190610772565b5080600190816100bb9190610772565b5050506001600b819055506100d85f5f1b8261014f60201b60201c565b506101097fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217758261014f60201b60201c565b5061013a7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68261014f60201b60201c565b5061014961024560201b60201c565b5061086e565b5f610160838361044160201b60201c565b61023b576001600a5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506101d86104a560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001905061023f565b5f90505b92915050565b600160115f5f600781111561025d5761025c610841565b5b600781111561026f5761026e610841565b5b81526020019081526020015f2081905550670de0b6b3a764000060115f600160078111156102a05761029f610841565b5b60078111156102b2576102b1610841565b5b81526020019081526020015f208190555069152d02c7e14af680000060115f600260078111156102e5576102e4610841565b5b60078111156102f7576102f6610841565b5b81526020019081526020015f20819055506103e860115f6003600781111561032257610321610841565b5b600781111561033457610333610841565b5b81526020019081526020015f208190555062ed4e0060115f600460078111156103605761035f610841565b5b600781111561037257610371610841565b5b81526020019081526020015f208190555061271060115f6005600781111561039d5761039c610841565b5b60078111156103af576103ae610841565b5b81526020019081526020015f2081905550678ac7230489e8000060115f600660078111156103e0576103df610841565b5b60078111156103f2576103f1610841565b5b81526020019081526020015f20819055506103e860115f60078081111561041c5761041b610841565b5b600781111561042e5761042d610841565b5b81526020019081526020015f2081905550565b5f600a5f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f33905090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6104d9826104b0565b9050919050565b6104e9816104cf565b81146104f3575f5ffd5b50565b5f81519050610504816104e0565b92915050565b5f6020828403121561051f5761051e6104ac565b5b5f61052c848285016104f6565b91505092915050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806105b057607f821691505b6020821081036105c3576105c261056c565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026106257fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105ea565b61062f86836105ea565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61067361066e61066984610647565b610650565b610647565b9050919050565b5f819050919050565b61068c83610659565b6106a06106988261067a565b8484546105f6565b825550505050565b5f5f905090565b6106b76106a8565b6106c2818484610683565b505050565b5b818110156106e5576106da5f826106af565b6001810190506106c8565b5050565b601f82111561072a576106fb816105c9565b610704846105db565b81016020851015610713578190505b61072761071f856105db565b8301826106c7565b50505b505050565b5f82821c905092915050565b5f61074a5f198460080261072f565b1980831691505092915050565b5f610762838361073b565b9150826002028217905092915050565b61077b82610535565b67ffffffffffffffff8111156107945761079361053f565b5b61079e8254610599565b6107a98282856106e9565b5f60209050601f8311600181146107da575f84156107c8578287015190505b6107d28582610757565b865550610839565b601f1984166107e8866105c9565b5f5b8281101561080f578489015182556001820191506020850194506020810190506107ea565b8683101561082c5784890151610828601f89168261073b565b8355505b6001600288020188555050505b505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b614c138061087b5f395ff3fe608060405234801561000f575f5ffd5b5060043610610246575f3560e01c806370a0823111610139578063a490a697116100b6578063d547741f1161007a578063d547741f14610772578063dbcd4cd81461078e578063df91cc23146107be578063e2045b5e146107ee578063e985e9c51461081e57610246565b8063a490a697146106ba578063ac90b87b146106d8578063b88d4fde14610708578063c87b56dd14610724578063d53913931461075457610246565b8063965e53b5116100fd578063965e53b514610600578063983b2d561461063057806398e36d8b1461064c578063a217fddf14610680578063a22cb4651461069e57610246565b806370a082311461054857806375b238fc146105785780637c6b4fc41461059657806391d14854146105b257806395d89b41146105e257610246565b80632f745c59116101c757806342842e0e1161018b57806342842e0e1461047e5780634431c4881461049a57806344b9d74b146104cc5780634f6ccce7146104e85780636352211e1461051857610246565b80632f745c59146103ca5780633092afd5146103fa57806333ad14131461041657806336568abe146104325780633af0c6881461044e57610246565b80631274664c1161020e5780631274664c1461031457806318160ddd1461034457806323b872dd14610362578063248a9ca31461037e5780632f2ff15d146103ae57610246565b806301ffc9a71461024a57806303828e451461027a57806306fdde03146102aa578063081812fc146102c8578063095ea7b3146102f8575b5f5ffd5b610264600480360381019061025f919061360d565b61084e565b6040516102719190613652565b60405180910390f35b610294600480360381019061028f91906136c5565b61085f565b6040516102a191906137b0565b60405180910390f35b6102b26108f2565b6040516102bf9190613840565b60405180910390f35b6102e260048036038101906102dd919061388a565b610981565b6040516102ef91906138c4565b60405180910390f35b610312600480360381019061030d91906138dd565b61099c565b005b61032e6004803603810190610329919061393e565b6109b2565b60405161033b9190613978565b60405180910390f35b61034c6109c7565b6040516103599190613978565b60405180910390f35b61037c60048036038101906103779190613991565b6109d3565b005b61039860048036038101906103939190613a14565b610ad2565b6040516103a59190613a4e565b60405180910390f35b6103c860048036038101906103c39190613a67565b610aef565b005b6103e460048036038101906103df91906138dd565b610b11565b6040516103f19190613978565b60405180910390f35b610414600480360381019061040f91906136c5565b610bb5565b005b610430600480360381019061042b9190613aa5565b610c51565b005b61044c60048036038101906104479190613a67565b610d2f565b005b61046860048036038101906104639190613ae3565b610daa565b6040516104759190613652565b60405180910390f35b61049860048036038101906104939190613991565b610dd4565b005b6104b460048036038101906104af9190613ae3565b610df3565b6040516104c393929190613b21565b60405180910390f35b6104e660048036038101906104e19190613b56565b610f27565b005b61050260048036038101906104fd919061388a565b610fcc565b60405161050f9190613978565b60405180910390f35b610532600480360381019061052d919061388a565b61103e565b60405161053f91906138c4565b60405180910390f35b610562600480360381019061055d91906136c5565b61104f565b60405161056f9190613978565b60405180910390f35b610580611105565b60405161058d9190613a4e565b60405180910390f35b6105b060048036038101906105ab9190613cb1565b611129565b005b6105cc60048036038101906105c79190613a67565b6113e4565b6040516105d99190613652565b60405180910390f35b6105ea611448565b6040516105f79190613840565b60405180910390f35b61061a60048036038101906106159190613ae3565b6114d8565b6040516106279190613978565b60405180910390f35b61064a600480360381019061064591906136c5565b6114f8565b005b6106666004803603810190610661919061388a565b611594565b604051610677959493929190613e08565b60405180910390f35b610688611677565b6040516106959190613a4e565b60405180910390f35b6106b860048036038101906106b39190613e8a565b61167d565b005b6106c2611693565b6040516106cf9190613978565b60405180910390f35b6106f260048036038101906106ed9190613b56565b6116a3565b6040516106ff9190613652565b60405180910390f35b610722600480360381019061071d9190613ff0565b61176c565b005b61073e6004803603810190610739919061388a565b611791565b60405161074b9190613840565b60405180910390f35b61075c61199a565b6040516107699190613a4e565b60405180910390f35b61078c60048036038101906107879190613a67565b6119be565b005b6107a860048036038101906107a39190614070565b6119e0565b6040516107b59190613978565b60405180910390f35b6107d860048036038101906107d391906138dd565b611e36565b6040516107e59190613978565b60405180910390f35b6108086004803603810190610803919061388a565b611e61565b60405161081591906141ad565b60405180910390f35b610838600480360381019061083391906141cd565b612006565b6040516108459190613652565b60405180910390f35b5f61085882612094565b9050919050565b6060600e5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208054806020026020016040519081016040528092919081815260200182805480156108e657602002820191905f5260205f20905b8154815260200190600101908083116108d2575b50505050509050919050565b60605f805461090090614238565b80601f016020809104026020016040519081016040528092919081815260200182805461092c90614238565b80156109775780601f1061094e57610100808354040283529160200191610977565b820191905f5260205f20905b81548152906001019060200180831161095a57829003601f168201915b5050505050905090565b5f61098b8261210d565b5061099582612193565b9050919050565b6109ae82826109a96121cc565b6121d3565b5050565b6011602052805f5260405f205f915090505481565b5f600880549050905090565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a43575f6040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610a3a91906138c4565b60405180910390fd5b5f610a568383610a516121cc565b6121e5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610acc578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610ac393929190614268565b60405180910390fd5b50505050565b5f600a5f8381526020019081526020015f20600101549050919050565b610af882610ad2565b610b01816121fa565b610b0b838361220e565b50505050565b5f610b1b8361104f565b8210610b605782826040517fa57d13dc000000000000000000000000000000000000000000000000000000008152600401610b5792919061429d565b60405180910390fd5b60065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f2054905092915050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610bdf816121fa565b610c097f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6836122f8565b508173ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a25050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610c7b816121fa565b5f60115f856007811115610c9257610c91613d95565b5b6007811115610ca457610ca3613d95565b5b81526020019081526020015f205490508260115f866007811115610ccb57610cca613d95565b5b6007811115610cdd57610cdc613d95565b5b81526020019081526020015f20819055507fae0f58a0506e4826330f44dd9b5b1966676c467952224b94fadeaa5f4f8b4e65848285604051610d21939291906142c4565b60405180910390a150505050565b610d376121cc565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d9b576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610da582826122f8565b505050565b600f602052815f5260405f20602052805f5260405f205f915091509054906101000a900460ff1681565b610dee83838360405180602001604052805f81525061176c565b505050565b5f5f5f60105f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f856007811115610e4757610e46613d95565b5b6007811115610e5957610e58613d95565b5b81526020019081526020015f2054925060115f856007811115610e7f57610e7e613d95565b5b6007811115610e9157610e90613d95565b5b81526020019081526020015f20549150600f5f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f856007811115610ef257610ef1613d95565b5b6007811115610f0457610f03613d95565b5b81526020019081526020015f205f9054906101000a900460ff1690509250925092565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610f51816121fa565b8160105f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f856007811115610fa357610fa2613d95565b5b6007811115610fb557610fb4613d95565b5b81526020019081526020015f208190555050505050565b5f610fd56109c7565b821061101a575f826040517fa57d13dc00000000000000000000000000000000000000000000000000000000815260040161101192919061429d565b60405180910390fd5b6008828154811061102e5761102d6142f9565b5b905f5260205f2001549050919050565b5f6110488261210d565b9050919050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110c0575f6040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016110b791906138c4565b60405180910390fd5b60035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6611153816121fa565b61115b6123e2565b868690508989905014801561117557508484905087879050145b801561118657508282905085859050145b6111c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111bc90614370565b60405180910390fd5b5f5f90505b898990508110156113d057600f5f8b8b848181106111eb576111ea6142f9565b5b905060200201602081019061120091906136c5565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f89898481811061124d5761124c6142f9565b5b9050602002016020810190611262919061393e565b600781111561127457611273613d95565b5b600781111561128657611285613d95565b5b81526020019081526020015f205f9054906101000a900460ff16158015611322575060115f8989848181106112be576112bd6142f9565b5b90506020020160208101906112d3919061393e565b60078111156112e5576112e4613d95565b5b60078111156112f7576112f6613d95565b5b81526020019081526020015f2054848483818110611318576113176142f9565b5b9050602002013510155b156113c3576113c18a8a8381811061133d5761133c6142f9565b5b905060200201602081019061135291906136c5565b898984818110611365576113646142f9565b5b905060200201602081019061137a919061393e565b88888581811061138d5761138c6142f9565b5b90506020020160208101906113a291906136c5565b8787868181106113b5576113b46142f9565b5b905060200201356119e0565b505b80806001019150506111ca565b506113d9612431565b505050505050505050565b5f600a5f8481526020019081526020015f205f015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b60606001805461145790614238565b80601f016020809104026020016040519081016040528092919081815260200182805461148390614238565b80156114ce5780601f106114a5576101008083540402835291602001916114ce565b820191905f5260205f20905b8154815290600101906020018083116114b157829003601f168201915b5050505050905090565b6010602052815f5260405f20602052805f5260405f205f91509150505481565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775611522816121fa565b61154c7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68361220e565b508173ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a25050565b600d602052805f5260405f205f91509050805f015f9054906101000a900460ff1690805f0160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020180546115f090614238565b80601f016020809104026020016040519081016040528092919081815260200182805461161c90614238565b80156116675780601f1061163e57610100808354040283529160200191611667565b820191905f5260205f20905b81548152906001019060200180831161164a57829003601f168201915b5050505050908060030154905085565b5f5f1b81565b61168f6116886121cc565b838361243b565b5050565b5f61169e600c6125a4565b905090565b5f600f5f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8460078111156116f5576116f4613d95565b5b600781111561170757611706613d95565b5b81526020019081526020015f205f9054906101000a900460ff16158015611763575060115f84600781111561173f5761173e613d95565b5b600781111561175157611750613d95565b5b81526020019081526020015f20548210155b90509392505050565b6117778484846109d3565b61178b6117826121cc565b858585856125b0565b50505050565b606061179c8261275c565b6117db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d2906143d8565b60405180910390fd5b5f600d5f8481526020019081526020015f206040518060a00160405290815f82015f9054906101000a900460ff16600781111561181b5761181a613d95565b5b600781111561182d5761182c613d95565b5b81526020015f820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820180546118a090614238565b80601f01602080910402602001604051908101604052809291908181526020018280546118cc90614238565b80156119175780601f106118ee57610100808354040283529160200191611917565b820191905f5260205f20905b8154815290600101906020018083116118fa57829003601f168201915b5050505050815260200160038201548152505090505f604051806060016040528060288152602001614bb660289139905080611967835f0151600781111561196257611961613d95565b5b6127a1565b611970866127a1565b6040516020016119829392919061447a565b60405160208183030381529060405292505050919050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6119c782610ad2565b6119d0816121fa565b6119da83836122f8565b50505050565b5f7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6611a0b816121fa565b611a136123e2565b5f73ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1603611a81576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a78906144ff565b60405180910390fd5b600f5f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f866007811115611ad257611ad1613d95565b5b6007811115611ae457611ae3613d95565b5b81526020019081526020015f205f9054906101000a900460ff1615611b3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b3590614567565b60405180910390fd5b60115f866007811115611b5457611b53613d95565b5b6007811115611b6657611b65613d95565b5b81526020019081526020015f2054831015611bb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bad906145f5565b60405180910390fd5b5f611bc1600c6125a4565b9050611bcd600c6128fa565b6040518060a00160405280876007811115611beb57611bea613d95565b5b81526020018673ffffffffffffffffffffffffffffffffffffffff16815260200142815260200160405180602001604052805f815250815260200185815250600d5f8381526020019081526020015f205f820151815f015f6101000a81548160ff02191690836007811115611c6357611c62613d95565b5b02179055506020820151815f0160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600101556060820151816002019081611ccd91906147b3565b5060808201518160030155905050600e5f8873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081908060018154018082558091505060019003905f5260205f20015f90919091909150556001600f5f8973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f886007811115611d8f57611d8e613d95565b5b6007811115611da157611da0613d95565b5b81526020019081526020015f205f6101000a81548160ff021916908315150217905550611dce878261290e565b808773ffffffffffffffffffffffffffffffffffffffff167ff8a377e55b987be4ff05a067b1edcb45461b4f791e9657741f46a7f29bac7fb3888888604051611e1993929190614882565b60405180910390a380925050611e2d612431565b50949350505050565b600e602052815f5260405f208181548110611e4f575f80fd5b905f5260205f20015f91509150505481565b611e69613554565b611e728261275c565b611eb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ea8906143d8565b60405180910390fd5b600d5f8381526020019081526020015f206040518060a00160405290815f82015f9054906101000a900460ff166007811115611ef057611eef613d95565b5b6007811115611f0257611f01613d95565b5b81526020015f820160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152602001600282018054611f7590614238565b80601f0160208091040260200160405190810160405280929190818152602001828054611fa190614238565b8015611fec5780601f10611fc357610100808354040283529160200191611fec565b820191905f5260205f20905b815481529060010190602001808311611fcf57829003601f168201915b505050505081526020016003820154815250509050919050565b5f60055f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff16905092915050565b5f7f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061210657506121058261292b565b5b9050919050565b5f5f612118836129a4565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361218a57826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016121819190613978565b60405180910390fd5b80915050919050565b5f60045f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b5f33905090565b6121e083838360016129dd565b505050565b5f6121f1848484612b9c565b90509392505050565b61220b816122066121cc565b612cb6565b50565b5f61221983836113e4565b6122ee576001600a5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff02191690831515021790555061228b6121cc565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506122f2565b5f90505b92915050565b5f61230383836113e4565b156123d8575f600a5f8581526020019081526020015f205f015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055506123756121cc565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a4600190506123dc565b5f90505b92915050565b6002600b5403612427576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161241e90614901565b60405180910390fd5b6002600b81905550565b6001600b81905550565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036124ab57816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016124a291906138c4565b60405180910390fd5b8060055f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516125979190613652565b60405180910390a3505050565b5f815f01549050919050565b5f8373ffffffffffffffffffffffffffffffffffffffff163b1115612755578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b815260040161260e9493929190614971565b6020604051808303815f875af192505050801561264957506040513d601f19601f8201168201806040525081019061264691906149cf565b60015b6126ca573d805f8114612677576040519150601f19603f3d011682016040523d82523d5f602084013e61267c565b606091505b505f8151036126c257836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016126b991906138c4565b60405180910390fd5b805160208201fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461275357836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161274a91906138c4565b60405180910390fd5b505b5050505050565b5f5f6127678361103e565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b60605f82036127e7576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506128f5565b5f8290505f5b5f82146128165780806127ff90614a27565b915050600a8261280f9190614a9b565b91506127ed565b5f8167ffffffffffffffff81111561283157612830613ecc565b5b6040519080825280601f01601f1916602001820160405280156128635781602001600182028036833780820191505090505b5090505b5f85146128ee5760018261287b9190614acb565b9150600a8561288a9190614afe565b60306128969190614b2e565b60f81b8183815181106128ac576128ab6142f9565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600a856128e79190614a9b565b9450612867565b8093505050505b919050565b6001815f015f828254019250508190555050565b612927828260405180602001604052805f815250612d07565b5050565b5f7f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061299d575061299c82612d2a565b5b9050919050565b5f60025f8381526020019081526020015f205f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080612a1557505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15612b47575f612a248461210d565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612a8e57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015612aa15750612a9f8184612006565b155b15612ae357826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401612ada91906138c4565b60405180910390fd5b8115612b4557838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b8360045f8581526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b5f5f612ba9858585612e0b565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603612bec57612be784613016565b612c2b565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612c2a57612c29818561305a565b5b5b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603612c6c57612c6784613131565b612cab565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612caa57612ca985856131f1565b5b5b809150509392505050565b612cc082826113e4565b612d035780826040517fe2517d3f000000000000000000000000000000000000000000000000000000008152600401612cfa929190614b61565b60405180910390fd5b5050565b612d118383613275565b612d25612d1c6121cc565b5f8585856125b0565b505050565b5f7f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480612df457507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80612e045750612e0382613368565b5b9050919050565b5f5f612e16846129a4565b90505f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614612e5757612e568184866133d1565b5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612ee257612e965f855f5f6129dd565b600160035f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825403925050819055505b5f73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614612f6157600160035f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825401925050819055505b8460025f8681526020019081526020015f205f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b60088054905060095f8381526020019081526020015f2081905550600881908060018154018082558091505060019003905f5260205f20015f909190919091505550565b5f6130648361104f565b90505f60075f8481526020019081526020015f205490505f60065f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f209050828214613103575f815f8581526020019081526020015f2054905080825f8581526020019081526020015f20819055508260075f8381526020019081526020015f2081905550505b60075f8581526020019081526020015f205f9055805f8481526020019081526020015f205f90555050505050565b5f60016008805490506131449190614acb565b90505f60095f8481526020019081526020015f205490505f600883815481106131705761316f6142f9565b5b905f5260205f200154905080600883815481106131905761318f6142f9565b5b905f5260205f2001819055508160095f8381526020019081526020015f208190555060095f8581526020019081526020015f205f905560088054806131d8576131d7614b88565b5b600190038181905f5260205f20015f9055905550505050565b5f60016131fd8461104f565b6132079190614acb565b90508160065f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8381526020019081526020015f20819055508060075f8481526020019081526020015f2081905550505050565b5f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036132e5575f6040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016132dc91906138c4565b60405180910390fd5b5f6132f183835f6121e5565b90505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614613363575f6040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161335a91906138c4565b60405180910390fd5b505050565b5f7f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6133dc838383613494565b61348f575f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361345057806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016134479190613978565b60405180910390fd5b81816040517f177e802f00000000000000000000000000000000000000000000000000000000815260040161348692919061429d565b60405180910390fd5b505050565b5f5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561354b57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061350c575061350b8484612006565b5b8061354a57508273ffffffffffffffffffffffffffffffffffffffff1661353283612193565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b6040518060a001604052805f600781111561357257613571613d95565b5b81526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f8152602001606081526020015f81525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f7fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6135ec816135b8565b81146135f6575f5ffd5b50565b5f81359050613607816135e3565b92915050565b5f60208284031215613622576136216135b0565b5b5f61362f848285016135f9565b91505092915050565b5f8115159050919050565b61364c81613638565b82525050565b5f6020820190506136655f830184613643565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6136948261366b565b9050919050565b6136a48161368a565b81146136ae575f5ffd5b50565b5f813590506136bf8161369b565b92915050565b5f602082840312156136da576136d96135b0565b5b5f6136e7848285016136b1565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f819050919050565b61372b81613719565b82525050565b5f61373c8383613722565b60208301905092915050565b5f602082019050919050565b5f61375e826136f0565b61376881856136fa565b93506137738361370a565b805f5b838110156137a357815161378a8882613731565b975061379583613748565b925050600181019050613776565b5085935050505092915050565b5f6020820190508181035f8301526137c88184613754565b905092915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f613812826137d0565b61381c81856137da565b935061382c8185602086016137ea565b613835816137f8565b840191505092915050565b5f6020820190508181035f8301526138588184613808565b905092915050565b61386981613719565b8114613873575f5ffd5b50565b5f8135905061388481613860565b92915050565b5f6020828403121561389f5761389e6135b0565b5b5f6138ac84828501613876565b91505092915050565b6138be8161368a565b82525050565b5f6020820190506138d75f8301846138b5565b92915050565b5f5f604083850312156138f3576138f26135b0565b5b5f613900858286016136b1565b925050602061391185828601613876565b9150509250929050565b60088110613927575f5ffd5b50565b5f813590506139388161391b565b92915050565b5f60208284031215613953576139526135b0565b5b5f6139608482850161392a565b91505092915050565b61397281613719565b82525050565b5f60208201905061398b5f830184613969565b92915050565b5f5f5f606084860312156139a8576139a76135b0565b5b5f6139b5868287016136b1565b93505060206139c6868287016136b1565b92505060406139d786828701613876565b9150509250925092565b5f819050919050565b6139f3816139e1565b81146139fd575f5ffd5b50565b5f81359050613a0e816139ea565b92915050565b5f60208284031215613a2957613a286135b0565b5b5f613a3684828501613a00565b91505092915050565b613a48816139e1565b82525050565b5f602082019050613a615f830184613a3f565b92915050565b5f5f60408385031215613a7d57613a7c6135b0565b5b5f613a8a85828601613a00565b9250506020613a9b858286016136b1565b9150509250929050565b5f5f60408385031215613abb57613aba6135b0565b5b5f613ac88582860161392a565b9250506020613ad985828601613876565b9150509250929050565b5f5f60408385031215613af957613af86135b0565b5b5f613b06858286016136b1565b9250506020613b178582860161392a565b9150509250929050565b5f606082019050613b345f830186613969565b613b416020830185613969565b613b4e6040830184613643565b949350505050565b5f5f5f60608486031215613b6d57613b6c6135b0565b5b5f613b7a868287016136b1565b9350506020613b8b8682870161392a565b9250506040613b9c86828701613876565b9150509250925092565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f840112613bc757613bc6613ba6565b5b8235905067ffffffffffffffff811115613be457613be3613baa565b5b602083019150836020820283011115613c0057613bff613bae565b5b9250929050565b5f5f83601f840112613c1c57613c1b613ba6565b5b8235905067ffffffffffffffff811115613c3957613c38613baa565b5b602083019150836020820283011115613c5557613c54613bae565b5b9250929050565b5f5f83601f840112613c7157613c70613ba6565b5b8235905067ffffffffffffffff811115613c8e57613c8d613baa565b5b602083019150836020820283011115613caa57613ca9613bae565b5b9250929050565b5f5f5f5f5f5f5f5f6080898b031215613ccd57613ccc6135b0565b5b5f89013567ffffffffffffffff811115613cea57613ce96135b4565b5b613cf68b828c01613bb2565b9850985050602089013567ffffffffffffffff811115613d1957613d186135b4565b5b613d258b828c01613c07565b9650965050604089013567ffffffffffffffff811115613d4857613d476135b4565b5b613d548b828c01613bb2565b9450945050606089013567ffffffffffffffff811115613d7757613d766135b4565b5b613d838b828c01613c5c565b92509250509295985092959890939650565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b60088110613dd357613dd2613d95565b5b50565b5f819050613de382613dc2565b919050565b5f613df282613dd6565b9050919050565b613e0281613de8565b82525050565b5f60a082019050613e1b5f830188613df9565b613e2860208301876138b5565b613e356040830186613969565b8181036060830152613e478185613808565b9050613e566080830184613969565b9695505050505050565b613e6981613638565b8114613e73575f5ffd5b50565b5f81359050613e8481613e60565b92915050565b5f5f60408385031215613ea057613e9f6135b0565b5b5f613ead858286016136b1565b9250506020613ebe85828601613e76565b9150509250929050565b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b613f02826137f8565b810181811067ffffffffffffffff82111715613f2157613f20613ecc565b5b80604052505050565b5f613f336135a7565b9050613f3f8282613ef9565b919050565b5f67ffffffffffffffff821115613f5e57613f5d613ecc565b5b613f67826137f8565b9050602081019050919050565b828183375f83830152505050565b5f613f94613f8f84613f44565b613f2a565b905082815260208101848484011115613fb057613faf613ec8565b5b613fbb848285613f74565b509392505050565b5f82601f830112613fd757613fd6613ba6565b5b8135613fe7848260208601613f82565b91505092915050565b5f5f5f5f60808587031215614008576140076135b0565b5b5f614015878288016136b1565b9450506020614026878288016136b1565b935050604061403787828801613876565b925050606085013567ffffffffffffffff811115614058576140576135b4565b5b61406487828801613fc3565b91505092959194509250565b5f5f5f5f60808587031215614088576140876135b0565b5b5f614095878288016136b1565b94505060206140a68782880161392a565b93505060406140b7878288016136b1565b92505060606140c887828801613876565b91505092959194509250565b6140dd81613de8565b82525050565b6140ec8161368a565b82525050565b5f82825260208201905092915050565b5f61410c826137d0565b61411681856140f2565b93506141268185602086016137ea565b61412f816137f8565b840191505092915050565b5f60a083015f83015161414f5f8601826140d4565b50602083015161416260208601826140e3565b5060408301516141756040860182613722565b506060830151848203606086015261418d8282614102565b91505060808301516141a26080860182613722565b508091505092915050565b5f6020820190508181035f8301526141c5818461413a565b905092915050565b5f5f604083850312156141e3576141e26135b0565b5b5f6141f0858286016136b1565b9250506020614201858286016136b1565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061424f57607f821691505b6020821081036142625761426161420b565b5b50919050565b5f60608201905061427b5f8301866138b5565b6142886020830185613969565b61429560408301846138b5565b949350505050565b5f6040820190506142b05f8301856138b5565b6142bd6020830184613969565b9392505050565b5f6060820190506142d75f830186613df9565b6142e46020830185613969565b6142f16040830184613969565b949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4172726179206c656e67746873206d757374206d6174636800000000000000005f82015250565b5f61435a6018836137da565b915061436582614326565b602082019050919050565b5f6020820190508181035f8301526143878161434e565b9050919050565b7f426164676520646f6573206e6f742065786973740000000000000000000000005f82015250565b5f6143c26014836137da565b91506143cd8261438e565b602082019050919050565b5f6020820190508181035f8301526143ef816143b6565b9050919050565b5f81905092915050565b5f61440a826137d0565b61441481856143f6565b93506144248185602086016137ea565b80840191505092915050565b7f2f000000000000000000000000000000000000000000000000000000000000005f82015250565b5f6144646001836143f6565b915061446f82614430565b600182019050919050565b5f6144858286614400565b91506144918285614400565b915061449c82614458565b91506144a88284614400565b9150819050949350505050565b7f43616e6e6f74206d696e7420746f207a65726f206164647265737300000000005f82015250565b5f6144e9601b836137da565b91506144f4826144b5565b602082019050919050565b5f6020820190508181035f830152614516816144dd565b9050919050565b7f426164676520616c7265616479206561726e65640000000000000000000000005f82015250565b5f6145516014836137da565b915061455c8261451d565b602082019050919050565b5f6020820190508181035f83015261457e81614545565b9050919050565b7f416368696576656d656e742076616c756520646f6573206e6f74206d656574205f8201527f726571756972656d656e74000000000000000000000000000000000000000000602082015250565b5f6145df602b836137da565b91506145ea82614585565b604082019050919050565b5f6020820190508181035f83015261460c816145d3565b9050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261466f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614634565b6146798683614634565b95508019841693508086168417925050509392505050565b5f819050919050565b5f6146b46146af6146aa84613719565b614691565b613719565b9050919050565b5f819050919050565b6146cd8361469a565b6146e16146d9826146bb565b848454614640565b825550505050565b5f5f905090565b6146f86146e9565b6147038184846146c4565b505050565b5b818110156147265761471b5f826146f0565b600181019050614709565b5050565b601f82111561476b5761473c81614613565b61474584614625565b81016020851015614754578190505b61476861476085614625565b830182614708565b50505b505050565b5f82821c905092915050565b5f61478b5f1984600802614770565b1980831691505092915050565b5f6147a3838361477c565b9150826002028217905092915050565b6147bc826137d0565b67ffffffffffffffff8111156147d5576147d4613ecc565b5b6147df8254614238565b6147ea82828561472a565b5f60209050601f83116001811461481b575f8415614809578287015190505b6148138582614798565b86555061487a565b601f19841661482986614613565b5f5b828110156148505784890151825560018201915060208501945060208101905061482b565b8683101561486d5784890151614869601f89168261477c565b8355505b6001600288020188555050505b505050505050565b5f6060820190506148955f830186613df9565b6148a260208301856138b5565b6148af6040830184613969565b949350505050565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c005f82015250565b5f6148eb601f836137da565b91506148f6826148b7565b602082019050919050565b5f6020820190508181035f830152614918816148df565b9050919050565b5f81519050919050565b5f82825260208201905092915050565b5f6149438261491f565b61494d8185614929565b935061495d8185602086016137ea565b614966816137f8565b840191505092915050565b5f6080820190506149845f8301876138b5565b61499160208301866138b5565b61499e6040830185613969565b81810360608301526149b08184614939565b905095945050505050565b5f815190506149c9816135e3565b92915050565b5f602082840312156149e4576149e36135b0565b5b5f6149f1848285016149bb565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f614a3182613719565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614a6357614a626149fa565b5b600182019050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f614aa582613719565b9150614ab083613719565b925082614ac057614abf614a6e565b5b828204905092915050565b5f614ad582613719565b9150614ae083613719565b9250828203905081811115614af857614af76149fa565b5b92915050565b5f614b0882613719565b9150614b1383613719565b925082614b2357614b22614a6e565b5b828206905092915050565b5f614b3882613719565b9150614b4383613719565b9250828201905080821115614b5b57614b5a6149fa565b5b92915050565b5f604082019050614b745f8301856138b5565b614b816020830184613a3f565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffdfe68747470733a2f2f6170692e6d656d65636f696e2d746f6f6c6b69742e636f6d2f6261646765732fa2646970667358221220f45e776eca26e96912a00cccf8e85b5fbc0f5d7ad7d37a5ddc15ffc3979ecfb564736f6c634300081e0033", // Optional: for verification
} as const;
