

````markdown
# Faucet DApp

[![Sepolia Testnet](https://img.shields.io/badge/Network-Sepolia-blue)](https://sepolia.etherscan.io/)

## Project Overview
A simple Ethereum faucet DApp deployed on the Sepolia testnet.  
Users can request a small amount of ERC20 tokens from the faucet to test smart contract interactions and Web3 functionality in their projects.

## Architecture

### Smart Contracts
- **Token.sol** – ERC20 token used by the faucet.  
- **TokenFaucet.sol** – Handles token distribution, enforces per-user limits, and tracks claims.

### Frontend
- Built with Vite + React (or Vue if applicable)  
- Connects to the smart contracts using Ethers.js  
- Environment variables configure RPC URLs and contract addresses.

## Deployed Contracts
- **Token:** `0xYourTokenAddress` [View on Etherscan](https://sepolia.etherscan.io/address/0xYourTokenAddress)  
- **Faucet:** `0xYourFaucetAddress` [View on Etherscan](https://sepolia.etherscan.io/address/0xYourFaucetAddress)  

## Quick Start
```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your deployed contract addresses and RPC URL

# Build and start the frontend
docker compose up

# Access the frontend
http://localhost:3000
````

## Configuration

Environment variables (defined in `.env`):

* `VITE_RPC_URL` – Sepolia network RPC URL (e.g., Infura or Alchemy)
* `VITE_TOKEN_ADDRESS` – Deployed ERC20 token contract address
* `VITE_FAUCET_ADDRESS` – Deployed faucet contract address

## Design Decisions

* **Faucet Amount per Request:** 10 tokens – enough for testing without draining the faucet quickly.
* **Lifetime Claim Limit:** 1 request per address per 24 hours – prevents abuse.
* **Token Total Supply:** 1,000,000 tokens – sufficient for testing multiple users without running out.

## Testing Approach

* Smart contracts tested using Hardhat unit tests.
* Frontend tested locally by connecting to Sepolia network.
* Verified token minting, faucet distribution, and claim limits.

## Security Considerations

* Only allows a single claim per user per defined period.
* Uses `SafeERC20` to prevent transfer failures.
* Checks for zero address in token/faucet initialization.

## Known Limitations

* Only deployed on Sepolia testnet.
* No advanced user authentication (any address can claim).
* Faucet runs until tokens are exhausted; no auto-refill mechanism yet.

```


