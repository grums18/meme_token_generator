import { create } from 'ipfs-http-client';

// IPFS Configuration
const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';
const PINATA_API_KEY = import.meta.env.VITE_PINATA_API_KEY;
const PINATA_SECRET_KEY = import.meta.env.VITE_PINATA_SECRET_KEY;

// Initialize IPFS client
const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: `Basic ${btoa(
      `${import.meta.env.VITE_INFURA_PROJECT_ID}:${import.meta.env.VITE_INFURA_PROJECT_SECRET}`
    )}`,
  },
});

export interface TokenMetadata {
  name: string;
  symbol: string;
  description: string;
  image: string;
  website?: string;
  twitter?: string;
  telegram?: string;
  discord?: string;
  totalSupply: string;
  initialLiquidity: string;
  lockPeriod: string;
  createdAt: number;
  creator: string;
  liquidityModel: 'hybrid-social';
  socialMetrics: {
    holders: number;
    volume24h: string;
    marketCap: string;
    socialScore: number;
  };
}

export interface UserProfile {
  address: string;
  username?: string;
  avatar?: string;
  bio?: string;
  social: {
    twitter?: string;
    telegram?: string;
    discord?: string;
  };
  stats: {
    tokensCreated: number;
    totalVolume: string;
    badgesEarned: string[];
    reputation: number;
  };
  createdAt: number;
}

export interface BadgeProgress {
  address: string;
  badgeType: string;
  progress: number;
  requirement: number;
  achieved: boolean;
  achievedAt?: number;
  tokenAddress?: string;
}

class IPFSService {
  // Upload token metadata to IPFS
  async uploadTokenMetadata(metadata: TokenMetadata): Promise<string> {
    try {
      const result = await ipfs.add(JSON.stringify(metadata, null, 2));
      console.log('Token metadata uploaded to IPFS:', result.path);
      return result.path;
    } catch (error) {
      console.error('Error uploading token metadata:', error);
      throw error;
    }
  }

  // Upload user profile to IPFS
  async uploadUserProfile(profile: UserProfile): Promise<string> {
    try {
      const result = await ipfs.add(JSON.stringify(profile, null, 2));
      console.log('User profile uploaded to IPFS:', result.path);
      return result.path;
    } catch (error) {
      console.error('Error uploading user profile:', error);
      throw error;
    }
  }

  // Upload badge progress data
  async uploadBadgeProgress(progress: BadgeProgress[]): Promise<string> {
    try {
      const result = await ipfs.add(JSON.stringify(progress, null, 2));
      console.log('Badge progress uploaded to IPFS:', result.path);
      return result.path;
    } catch (error) {
      console.error('Error uploading badge progress:', error);
      throw error;
    }
  }

  // Upload image to IPFS
  async uploadImage(file: File): Promise<string> {
    try {
      const result = await ipfs.add(file);
      console.log('Image uploaded to IPFS:', result.path);
      return `${IPFS_GATEWAY}${result.path}`;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  // Retrieve data from IPFS
  async getData(hash: string): Promise<any> {
    try {
      const chunks = [];
      for await (const chunk of ipfs.cat(hash)) {
        chunks.push(chunk);
      }
      const data = Buffer.concat(chunks).toString();
      return JSON.parse(data);
    } catch (error) {
      console.error('Error retrieving data from IPFS:', error);
      throw error;
    }
  }

  // Pin data to ensure persistence (using Pinata)
  async pinData(hash: string): Promise<void> {
    if (!PINATA_API_KEY || !PINATA_SECRET_KEY) {
      console.warn('Pinata credentials not configured');
      return;
    }

    try {
      const response = await fetch('https://api.pinata.cloud/pinning/pinByHash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'pinata_api_key': PINATA_API_KEY,
          'pinata_secret_api_key': PINATA_SECRET_KEY,
        },
        body: JSON.stringify({
          hashToPin: hash,
          pinataMetadata: {
            name: `Token-${Date.now()}`,
          },
        }),
      });

      if (response.ok) {
        console.log('Data pinned successfully');
      }
    } catch (error) {
      console.error('Error pinning data:', error);
    }
  }

  // Create token registry entry
  async createTokenRegistry(tokens: { address: string; metadataHash: string }[]): Promise<string> {
    try {
      const registry = {
        version: '1.0.0',
        timestamp: Date.now(),
        tokens,
      };
      const result = await ipfs.add(JSON.stringify(registry, null, 2));
      await this.pinData(result.path);
      return result.path;
    } catch (error) {
      console.error('Error creating token registry:', error);
      throw error;
    }
  }
}

export const ipfsService = new IPFSService();