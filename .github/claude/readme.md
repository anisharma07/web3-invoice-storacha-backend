# Web3 Invoice Storage Backend

A comprehensive **Medical Billing System** with Web3 integration featuring MetaMask connectivity, ConnectKit authentication, and decentralized storage capabilities. This React-based application combines traditional spreadsheet functionality with modern blockchain technology for secure and transparent medical invoice management.

## 🚀 Features

- **🔐 Web3 Authentication**: Seamless MetaMask integration using ConnectKit and Wagmi
- **📊 Interactive Spreadsheet**: Full-featured SocialCalc integration for invoice creation and editing
- **⛓️ Blockchain Integration**: Optimism Sepolia testnet support for decentralized operations
- **💾 Decentralized Storage**: Web3.Storage (w3up-client) integration for secure document storage
- **📱 Responsive Design**: Cross-platform support with device-specific optimizations
- **🎨 Modern UI**: Clean interface built with Milligram CSS framework
- **📄 Invoice Management**: Comprehensive medical billing and invoice tracking system
- **🔄 Real-time Updates**: Live data synchronization and state management

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with Hooks and functional components
- **React DOM 18.3.1** - React rendering library
- **Milligram CSS** - Minimalist CSS framework for styling
- **Normalize.css** - Cross-browser CSS normalization

### Web3 & Blockchain
- **Wagmi 2.10.9** - React hooks library for Ethereum
- **Viem 2.x** - TypeScript interface for Ethereum
- **ConnectKit 1.8.2** - Beautiful wallet connection modal
- **Optimism Sepolia** - Layer 2 Ethereum testnet integration

### Storage & Data Management
- **@web3-storage/w3up-client 17.1.2** - Decentralized storage client
- **@tanstack/react-query 5.49.2** - Powerful data synchronization for React
- **SocialCalc** - Embedded spreadsheet engine for invoice management

### Development Tools
- **React Scripts 5.0.1** - Build tools and development server
- **Yarn** - Package manager
- **Create React App** - Project scaffolding and build configuration
- **Babel** - JavaScript compiler with modern syntax support

### Testing
- **Jest** - JavaScript testing framework
- **@testing-library/react** - React component testing utilities
- **@testing-library/jest-dom** - Custom Jest matchers for DOM testing
- **@testing-library/user-event** - User interaction simulation

## 📁 Project Structure

```
├── src/
│   ├── App/                    # Main application component
│   ├── Files/                  # File management functionality
│   ├── Menu/                   # Navigation and menu components
│   ├── socialcalc/            # Spreadsheet engine integration
│   │   ├── AppGeneral.js      # Core spreadsheet functionality
│   │   └── aspiring/          # SocialCalc library files
│   ├── storage/               # Local storage utilities
│   ├── utils/                 # Utility functions and Web3 provider
│   └── app-data.js           # Application configuration data
├── public/
│   ├── images/               # Spreadsheet UI assets and icons
│   ├── styles/              # CSS frameworks (Milligram, Normalize)
│   └── index.html           # Main HTML template
└── package.json             # Dependencies and scripts
```

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **Yarn** package manager
- **MetaMask** browser extension
- **Git** for version control

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/anisharma07/web3-invoice-storacha-backend.git
cd web3-invoice-storacha-backend
```

2. **Install dependencies**
```bash
yarn install
```

3. **Set up environment variables**
```bash
# Create environment file
touch .env

# Add the following variables to .env:
REACT_APP_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
REACT_APP_ALCHEMY_ID=your_alchemy_api_key
```

4. **Get required API credentials**
   - **WalletConnect Project ID**: Visit [WalletConnect Dashboard](https://walletconnect.com/)
   - **Alchemy API Key**: Get from [Alchemy Dashboard](https://dashboard.alchemy.com/)

## 🎯 Usage

### Development
```bash
# Start development server
yarn start

# The application will open at http://localhost:3000
```

### Production
```bash
# Build for production
yarn build

# The build files will be generated in the 'build' directory
```

### Testing
```bash
# Run test suite
yarn test

# Run tests in CI mode
yarn test --watchAll=false
```

## 📱 Platform Support

- **Desktop**: Full functionality on all major browsers
- **Mobile**: Optimized for iOS (iPhone, iPad, iPod) and Android devices
- **Web3 Wallets**: MetaMask, WalletConnect compatible wallets
- **Networks**: Optimism Sepolia testnet (extensible to other EVM chains)

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
yarn test

# Run tests with coverage
yarn test --coverage

# Run tests in watch mode
yarn test --watch
```

Test files are located alongside their corresponding components with `.test.js` extension.

## 🔄 Deployment

### Environment Setup
1. Configure environment variables for production
2. Set up Alchemy endpoint for Optimism Sepolia
3. Configure WalletConnect project settings

### Build & Deploy
```bash
# Create production build
yarn build

# Deploy to your preferred hosting service
# (Vercel, Netlify, AWS, etc.)
```

## 📊 Performance & Optimization

- **Code Splitting**: Leverages React.lazy() and Suspense for optimal loading
- **Web3 Optimization**: Efficient wallet connection and blockchain interaction patterns
- **Caching**: React Query integration for intelligent data caching and synchronization
- **Asset Optimization**: Optimized images and CSS for fast loading
- **Mobile Performance**: Device-specific optimizations for mobile platforms

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```
3. **Commit your changes**
```bash
git commit -m 'Add some amazing feature'
```
4. **Push to the branch**
```bash
git push origin feature/amazing-feature
```
5. **Open a Pull Request**

### Development Guidelines
- Follow React best practices and hooks patterns
- Maintain Web3 integration standards
- Write tests for new components and features
- Update documentation for API changes
- Ensure mobile compatibility for new features

### Code Style
- Use functional components with hooks
- Follow ESLint configuration
- Maintain consistent file naming conventions
- Add comprehensive comments for complex Web3 interactions

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

```
MIT License - Copyright (c) 2025 Manu Sheel Gupta
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
```

## 🙏 Acknowledgments

- **SocialText** for the SocialCalc spreadsheet engine
- **Wagmi Team** for excellent Web3 React integration
- **ConnectKit** for beautiful wallet connection UX
- **Optimism** for Layer 2 scaling solution
- **Web3.Storage** for decentralized storage infrastructure

## 📞 Support & Contact

- **Repository**: [web3-invoice-storacha-backend](https://github.com/anisharma07/web3-invoice-storacha-backend)
- **Issues**: [GitHub Issues](https://github.com/anisharma07/web3-invoice-storacha-backend/issues)
- **Documentation**: Check the `/docs` folder for additional documentation
- **Community**: Join our discussions in GitHub Discussions

---

**Built with ❤️ for the decentralized future of medical billing**