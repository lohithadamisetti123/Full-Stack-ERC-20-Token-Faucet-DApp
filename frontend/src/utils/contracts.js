import { ethers } from "ethers";
import TokenABI from "../hardhat-artifacts/Token.sol/MyToken.json";
import FaucetABI from "../hardhat-artifacts/TokenFaucet.sol/TokenFaucet.json";

const tokenAddress = "0xE8266289b776F380001DC3d4F205E17D05D215A0";
const faucetAddress = "0xF015668670c6635BE8efaaE5683453Cf3244e1AC";

let provider, signer, tokenContract, faucetContract;

export async function getProvider() {
  if (!provider) provider = new ethers.BrowserProvider(window.ethereum);
  return provider;
}

export async function getSigner() {
  if (!signer) signer = await (await getProvider()).getSigner();
  return signer;
}

export async function getTokenContract() {
  if (!tokenContract) tokenContract = new ethers.Contract(tokenAddress, TokenABI.abi, await getSigner());
  return tokenContract;
}

export async function getFaucetContract() {
  if (!faucetContract) faucetContract = new ethers.Contract(faucetAddress, FaucetABI.abi, await getSigner());
  return faucetContract;
}

export async function getBalance(addr) {
  const contract = await getTokenContract();
  return (await contract.balanceOf(addr)).toString();
}

export async function canClaim(addr) {
  const contract = await getFaucetContract();
  return await contract.canClaim(addr);
}

export async function getRemainingAllowance(addr) {
  const contract = await getFaucetContract();
  return (await contract.remainingAllowance(addr)).toString();
}

export async function requestTokens() {
  const contract = await getFaucetContract();
  const tx = await contract.requestTokens();
  await tx.wait();
}
