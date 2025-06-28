# HeliosChain Testnet DApp

A comprehensive decentralized application (DApp) for deploying and managing smart contracts on the Helios Testnet blockchain. This application provides an intuitive interface for developers to deploy various types of contracts including simple contracts, ERC-20 tokens, NFTs, and time-locked contracts.

## 🌟 Features

### 🔗 Wallet Integration
- **MetaMask Connection**: Seamless wallet connection with automatic network switching
- **Helios Testnet Support**: Automatic network configuration for Helios Testnet
- **Real-time Balance**: Live HLS token balance display
- **Transaction Tracking**: Complete transaction history with explorer links

### 📝 Smart Contract Deployment
- **Simple Contracts**: Deploy basic smart contracts with owner functionality
- **ERC-20 Tokens**: Create custom tokens with standard ERC-20 functionality
- **NFT Collections**: Deploy NFT contracts with minting capabilities
- **TimeLock Contracts**: Create time-locked contracts for secure fund management

### 📊 Network Monitoring
- **Real-time Stats**: Live block height and gas price monitoring
- **Auto-refresh**: Network status updates every 10 seconds
- **Connection Status**: Visual indicators for wallet and network connection
- **Gas Optimization**: Optimized gas usage based on successful transaction patterns

### 🎨 User Interface
- **Modern Design**: Beautiful gradient background with dark theme
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Interactive Components**: Smooth animations and user feedback
- **Contract Management**: Easy tracking and management of deployed contracts

## 🚀 Technology Stack

- **Frontend**: React.js with modern hooks and state management
- **Styling**: Custom CSS with gradient backgrounds and animations
- **Icons**: Lucide React for beautiful, consistent iconography
- **Blockchain**: Direct Web3 integration with MetaMask
- **Network**: Helios Testnet (Chain ID: 42000)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MetaMask browser extension

### Installation Steps

1. **Clone the repository**
git clone https://github.com/dilong321/Helios-Simple-Task.git
cd Helios-Simple-Task

2. **Install dependencies**
npm install

3. **Start the development server**
npm start

4. **Open your browser**
Navigate to `http://localhost:3000`

## 🔧 Configuration

### Helios Testnet Network Details
- **Network Name**: Helios Testnet
- **RPC URL**: https://testnet1.helioschainlabs.org
- **Chain ID**: 42000
- **Currency Symbol**: HLS
- **Block Explorer**: https://explorer.helioschainlabs.org

### Getting Test Tokens
1. Visit the [Helios Testnet Portal](https://testnet.helioschain.network/)
2. Connect your wallet
3. Request test HLS tokens from the faucet

## 📱 How to Use

### 1. Connect Your Wallet
- Click "Connect Wallet" in the top-right corner
- Approve MetaMask connection
- The app will automatically add Helios Testnet to your MetaMask

### 2. Deploy Contracts
- Choose from 4 contract types: Simple Contract, Token, NFT, or TimeLock
- Fill in the required information
- Click deploy and confirm the transaction in MetaMask
- Track your deployed contracts in the sidebar

### 3. Monitor Network
- View real-time network statistics in the sidebar
- Check your wallet balance and connection status
- Access quick links to explorers and documentation

## 🏗️ Contract Types

### Simple Contract
- Basic smart contract with owner functionality
- Pre-configured with "Hello Helios!" message
- Perfect for testing and learning

### ERC-20 Token
- Standard token implementation
- Customizable name, symbol, and supply
- Built-in transfer and approval functions

### NFT Collection
- ERC-721 compatible NFT contract
- Mint function for creating unique tokens
- Token counter for tracking supply

### TimeLock Contract
- Time-based fund locking mechanism
- Secure withdrawal after unlock period
- Perfect for vesting and escrow applications

## 🔗 Quick Links

- **Live Demo**: [Deploy on Vercel](https://helios-simple-task.vercel.app)
- **Helios Explorer**: https://explorer.helioschainlabs.org
- **Helios Portal**: https://portal.helioschain.network
- **Remix IDE**: https://remix.ethereum.org

## 🎯 Key Features Implemented

- ✅ **Pre-compiled Bytecode**: Optimized contract deployment without compilation errors
- ✅ **Gas Optimization**: Fixed gas parameters based on successful transactions
- ✅ **Error Handling**: Comprehensive error handling and user feedback
- ✅ **Responsive Design**: Beautiful UI that works on all devices
- ✅ **Local Storage**: Persistent contract tracking across sessions
- ✅ **Real-time Updates**: Live network statistics and balance updates

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub** (already done)
2. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings:
     - Framework: Create React App
     - Build Command: `npm run build`
     - Output Directory: `build`
3. **Deploy**: Click deploy and get your live URL

### Environment Variables (Optional)
REACT_APP_HELIOS_RPC=https://testnet1.helioschainlabs.org
REACT_APP_HELIOS_EXPLORER=https://explorer.helioschainlabs.org
REACT_APP_CHAIN_ID=42000

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Made by Kinz Nguyen**

A passionate blockchain developer focused on creating user-friendly DApps and exploring the potential of decentralized technologies. This project demonstrates the integration of modern web technologies with blockchain functionality, specifically tailored for the Helios ecosystem.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📞 Support

If you have any questions or need help with the DApp:

1. Check the [Issues](https://github.com/dilong321/Helios-Simple-Task/issues) section
2. Create a new issue if your problem isn't already addressed
3. Join the Helios community for additional support

## 🔮 Future Enhancements

- [ ] Contract interaction interface
- [ ] Multi-signature wallet support
- [ ] Advanced contract templates
- [ ] Transaction history export
- [ ] Mobile app version
- [ ] Integration with more wallets

---

**Built with ❤️ for the Helios blockchain ecosystem**

*This DApp showcases the power of combining React.js with blockchain technology to create seamless user experiences for smart contract deployment and management.*
