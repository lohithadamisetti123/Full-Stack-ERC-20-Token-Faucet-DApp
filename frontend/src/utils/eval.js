import * as contracts from "./contracts.js";
import * as wallet from "./wallet.js";

window.__EVAL__ = {
  connectWallet: wallet.connectWallet,
  requestTokens: contracts.requestTokens,
  getBalance: contracts.getBalance,
  canClaim: contracts.canClaim,
  getRemainingAllowance: contracts.getRemainingAllowance,
  getContractAddresses: async () => ({
    token: "0xE8266289b776F380001DC3d4F205E17D05D215A0",
    faucet: "0xF015668670c6635BE8efaaE5683453Cf3244e1AC"
  }),
};
