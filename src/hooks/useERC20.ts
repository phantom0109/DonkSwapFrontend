import { useActiveWeb3React } from './index'
import { useERC20Contract } from './useContract'
import { NEVER_RELOAD, useSingleCallResult } from '../state/multicall/hooks'
import { BigNumber, ethers } from 'ethers';

const contractAddress = "0x7123431162c1efF257578D1574014e5305Eb7bd4";
const stakingAddress = "0x8cfE605A4Cebef5c9C69B167d9A99B21BBD53C72";

const useERC20 = () => {
    const { account } = useActiveWeb3React()

    const erc20Contract = useERC20Contract(contractAddress)
    
    const allowance: BigNumber = useSingleCallResult(erc20Contract, 'allowance', [account, stakingAddress])?.result?.[0];
    const approve = async () => {
        const ret = await erc20Contract.approve(stakingAddress, ethers.constants.MaxUint256)
    }
    console.log("ERC20 CONTRACT", allowance?.toString())
    return { allowance:allowance ? allowance.toString() : '0', approve };
};

export default useERC20;