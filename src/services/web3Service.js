import { ethers } from 'ethers';
import { HELIOS_TESTNET, CONTRACT_TEMPLATES } from '../config/networks';

class Web3Service {
  constructor() {
    this.provider = null;
    this.signer = null;
    this.account = null;
  }

  // Kết nối ví
  async connectWallet() {
    try {
      if (!window.ethereum) {
        throw new Error('MetaMask is not installed');
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });

      // Add/Switch to Helios Testnet
      await this.addHeliosNetwork();

      this.provider = new ethers.providers.Web3Provider(window.ethereum);
      this.signer = this.provider.getSigner();
      this.account = accounts[0];

      return {
        address: this.account,
        provider: this.provider
      };
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      throw error;
    }
  }

  // Thêm Helios Testnet vào MetaMask
  async addHeliosNetwork() {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [HELIOS_TESTNET]
      });
    } catch (error) {
      console.error('Failed to add network:', error);
      throw error;
    }
  }

  // Deploy ERC-20 Token
  async deployToken(tokenData) {
    try {
      const { name, symbol, totalSupply, mintable } = tokenData;
      
      // Compile contract (simplified - in production use proper compiler)
      const contractCode = CONTRACT_TEMPLATES.ERC20;
      
      // For demo, we'll simulate deployment
      const tx = await this.signer.sendTransaction({
        data: '0x608060405234801561001057600080fd5b50...', // Compiled bytecode
        gasLimit: 2000000
      });

      const receipt = await tx.wait();
      
      return {
        address: receipt.contractAddress,
        txHash: receipt.transactionHash,
        blockNumber: receipt.blockNumber
      };
    } catch (error) {
      console.error('Failed to deploy token:', error);
      throw error;
    }
  }

  // Deploy NFT Contract
  async deployNFT(nftData) {
    try {
      const { name, symbol, baseURI } = nftData;
      
      // Similar to token deployment
      const tx = await this.signer.sendTransaction({
        data: '0x608060405234801561001057600080fd5b50...', // NFT bytecode
        gasLimit: 3000000
      });

      const receipt = await tx.wait();
      
      return {
        address: receipt.contractAddress,
        txHash: receipt.transactionHash,
        blockNumber: receipt.blockNumber
      };
    } catch (error) {
      console.error('Failed to deploy NFT:', error);
      throw error;
    }
  }

  // Get account balance
  async getBalance(address) {
    try {
      const balance = await this.provider.getBalance(address);
      return ethers.utils.formatEther(balance);
    } catch (error) {
      console.error('Failed to get balance:', error);
      return '0';
    }
  }

  // Get network info
  async getNetworkInfo() {
    try {
      const network = await this.provider.getNetwork();
      const blockNumber = await this.provider.getBlockNumber();
      const gasPrice = await this.provider.getGasPrice();
      
      return {
        chainId: network.chainId,
        name: network.name,
        blockNumber,
        gasPrice: ethers.utils.formatUnits(gasPrice, 'gwei')
      };
    } catch (error) {
      console.error('Failed to get network info:', error);
      return null;
    }
  }

  // Disconnect wallet
  disconnect() {
    this.provider = null;
    this.signer = null;
    this.account = null;
  }
}

export default new Web3Service();
