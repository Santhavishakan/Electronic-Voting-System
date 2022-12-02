import { ethers } from "ethers";
import abi from "./voting.json";

export const contractAddress = "0x29b7e3CA1B4D7F9BE8A12a6057459B9338338979";

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();

export const votingContract = new ethers.Contract(contractAddress, abi, signer);
