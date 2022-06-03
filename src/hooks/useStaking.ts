import { useActiveWeb3React } from './index'
import { useStakingContract } from './useContract'
import { NEVER_RELOAD, useSingleCallResult } from '../state/multicall/hooks'
import { BigNumber } from 'ethers';
import { useCallback } from 'react';

const contractAddress = "0x8cfE605A4Cebef5c9C69B167d9A99B21BBD53C72";

const useStaking = () => {
    const { account } = useActiveWeb3React()

    const stakingContract = useStakingContract(contractAddress)
    
    const stakedbalance: BigNumber = useSingleCallResult(stakingContract, 'getStakedBalanceOfUser', [account])?.result?.[0];
    const earnedBalance: BigNumber = useSingleCallResult(stakingContract, 'earned', [account])?.result?.[0];
    const apy: BigNumber = useSingleCallResult(stakingContract, 'getCurrentApy', [])?.result?.[0];
    const totalStakedBlalnce: BigNumber = useSingleCallResult(stakingContract, 'totalSupply', [])?.result?.[0];
    const totalRewards: BigNumber = useSingleCallResult(stakingContract, 'totalRewards', [])?.result?.[0];
    
    const stake = async (amount: any) => {
        const ret = await stakingContract.stake(amount)
    }
    const restake = async() => {
        const ret = await stakingContract.restake()
    }

    const withdraw = async (percent: any) => {
        const ret = await stakingContract.withdraw(percent)
    }
    
    const claimReward = async (amount: any) => {
        const ret = await stakingContract.claimReward(amount)
    }

    return { stakedbalance, earnedBalance, apy, totalStakedBlalnce,totalRewards, stake,restake, withdraw, claimReward};
};

export default useStaking;