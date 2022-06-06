import "./stake.css";
import React, { useState, useRef, useEffect, } from 'react'
import EmbedMine from "./embedMine";
import useStaking from "../../hooks/useStaking";
import { ethers } from "ethers"
import useERC20 from "hooks/useERC20";
import { useActiveWeb3React } from '../../hooks/index';

export default function Mine() {
  const { account } = useActiveWeb3React();
  const [depositinputamount, setDepositInputAmount] = useState(0);
  const [withdrawalinputamount, setWithdrawalInputAmount] = useState(0);
  const [claiminputamount, setClaimInputAmount] = useState(0);
  const [errormessage, setErrorMessage] = useState('')
  const { stakedbalance, earnedBalance, totalStakedBalance, totalRewards, rewardRate, stake,restake, withdraw, claimReward } = useStaking();
  const { allowance, approve, balance } = useERC20();
  const total = Number(ethers.utils.formatEther(totalStakedBalance?totalStakedBalance:0));
  const rate = Number(ethers.utils.formatEther(rewardRate?rewardRate:0));
  const apr = total?(rate * (3600 * 24 * 365) / total).toFixed(0):total;
  
  console.log("rewardRatetemp---->", rate);
  console.log("total------>", total);
  console.log("result---->", apr);
  /*======================= ClaimReward ===================================*/
  /*======================= ClaimReward ===================================*/
  /*======================= ClaimReward ===================================*/

  const ClaimInput = (e) => {
    setClaimInputAmount(e.target.value);
    console.log(claiminputamount);
  }
  const incrementClaimUp = () => {
    setClaimInputAmount(claiminputamount + 1);
    console.log(claiminputamount);
  }
  const decrementClaimDown = () => {
    setClaimInputAmount(claiminputamount - 1);
    console.log(claiminputamount);
  }

  const handleClickClaim = () => {
    claimReward(ethers.utils.parseEther(claiminputamount.toString()))
  }
  /*======================= DEPOSIT ===================================*/
  /*======================= DEPOSIT ===================================*/
  /*======================= DEPOSIT ===================================*/

  const depositInput = (e) => {
    setDepositInputAmount(parseFloat(e.target.value));
    console.log(depositinputamount);
  }
  const incrementDepositUp = () => {
    setDepositInputAmount(depositinputamount + 1);
    console.log(depositinputamount);
  }
  const decrementDepositDown = () => {
    setDepositInputAmount(depositinputamount - 1);
    if (depositinputamount < 1) {
      setDepositInputAmount(0);
    }
    console.log(depositinputamount);
  }

  /*======================= WITHDRAWAL===================================*/
  /*======================= WITHDRAWAL===================================*/
  /*======================= WITHDRAWAL===================================*/

  const withdrawalInput = (e) => {
    setWithdrawalInputAmount(parseFloat(e.target.value));
    console.log(withdrawalinputamount);
  }
  const incrementWithdrwalUp = () => {
    setWithdrawalInputAmount(withdrawalinputamount + 1);
    console.log(depositinputamount);
  }
  const decrementWithdrawalDown = () => {
    setWithdrawalInputAmount(withdrawalinputamount - 1);
    if (withdrawalinputamount < 1) {
      setWithdrawalInputAmount(0);
    }
    console.log(withdrawalinputamount);
  }
  const handleClickWithdraw = () => {
    withdraw(withdrawalinputamount.toString())
  }
  /*==========================================================*/
  /*==========================================================*/

  const handleClickApprove = () => {
    approve()
  }

  const handleClickStake = () => {
    stake(ethers.utils.parseEther(depositinputamount.toString()))
  }

  const handleClickReStake = () => {
    restake()
  }

  const handleClickMax = () => {
    setDepositInputAmount(Number(ethers.utils.formatEther(balance).slice(0, ethers.utils.formatEther(balance).indexOf(".")+3)));
    
    console.log(depositinputamount);
  }

  return (
    <div className="stake-body-whole">
      <div className="floating-box"></div>
      <div className="stake-stats">
        <div>
          <h3 className="header">Staking Stats</h3>
        </div>
        
        <div className="stake-stat-second-level">
          <div className="left-display">
            <div className="balance-and-display-container">
              <h3 className="stake-title">Total Balance</h3>
              <div className="stake-stat-display">
                <p>{totalStakedBalance ? ethers.utils.formatEther(totalStakedBalance) : 0}</p>
              </div>
            </div>
            
            <div className="balance-and-display-container">
              <h3 className="stake-title">My Staked Balance</h3>
              <div className="stake-stat-display">
              <p>{stakedbalance ? ethers.utils.formatEther(stakedbalance).slice(0, ethers.utils.formatEther(stakedbalance).indexOf(".")+3) : 0}</p>
              </div>
            </div>
          </div>

          <div className="apy-stat-display-container">
            <div className="apy-stat-display">
              <div className='apy-box'>
                <h3 className="stake-title">APR</h3>
                <p>{apr ? apr.toString() : 0}%</p>
              </div>
            </div>
          </div>

          <div className="right-display">
            <div className="balance-and-display-container">
              <h3 className="stake-title">My Earned $DST</h3>
              <div className="stake-stat-display">
                <p>{earnedBalance ? ethers.utils.formatEther(earnedBalance).slice(0, ethers.utils.formatEther(earnedBalance).indexOf(".")+3) : 0}</p>
              </div>
            </div>

            <div className="balance-and-display-container">
              <h3 className="stake-title">Total Rewards</h3>
              <div className="stake-stat-display">
                <p>{totalRewards ? ethers.utils.formatEther(totalRewards).slice(0, ethers.utils.formatEther(totalRewards).indexOf(".")+3) : 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      < div className="stake-body">
        <form className="stake-form">
          <h3 className="stake-title">Stake DONK-LP</h3>
          <div className="input-div">
            <input disabled={!account} onChange={depositInput} value={depositinputamount} type="number" placeholder='0.0' className="deposit-input" />
            <div className="increment-div">
              <button disabled={!account} onClick={incrementDepositUp} className="increment-plus">+</button>
              <button disabled={!account} onClick={decrementDepositDown} className="increment-minus">-</button>
            </div>
          </div>
          <div>
            <h6 className = {`max-value ${allowance === '0' ? 'pointer-disabled':''}`} onClick={() => account? handleClickMax:null}>
              Max:{balance ? ethers.utils.formatEther(balance).slice(0, ethers.utils.formatEther(balance).indexOf(".")+3) : 0}
            </h6>
          </div>
          {allowance !== '0' ? 
          <div>
            <button className='stake-btn' disabled={!account} onClick={handleClickStake}>Stake</button>
            <button className='stake-btn' disabled={!account} onClick={handleClickReStake}>ReStake</button>
          </div>
            : <button className="stake-btn" disabled={!account} onClick={handleClickApprove}>Approve</button>}
        </form>

        <form className="stake-form">
          <h3 className="stake-title">Withdraw Staked LP</h3>
          <div className="input-div">
            <input disabled={!account} onChange={withdrawalInput} value={withdrawalinputamount} type="number" min={0} max={100} placeholder="place input withdrawal %" className="withdrawal-input" />
            <span className="percent-symbol">%</span>
            <div className="increment-div">
              <button disabled={!account} onClick={incrementWithdrwalUp} className="increment-plus">+</button>
              <button disabled={!account} onClick={decrementWithdrawalDown} className="increment-minus">-</button>
            </div>
          </div>
          <button className={`stake-btn ${stakedbalance?.toString() === '0' ? 'btn-disabled':''}`} disabled={!account || stakedbalance?.toString() === '0'} onClick={handleClickWithdraw}>Withdraw</button>
        </form>

        <form className="stake-form">
          <h3 className="stake-title">Claim Earned $DST</h3>
          <div className="input-div">
            <input disabled={!account} onChange={ClaimInput} value={claiminputamount} type="number" placeholder="place input number" className="withdrawal-input" />
            <div className="increment-div">
              <button disabled={!account} onClick={incrementClaimUp} className="increment-plus">+</button>
              <button disabled={!account} onClick={decrementClaimDown} className="increment-minus">-</button>
            </div>
          </div>
          <button className={`stake-btn ${earnedBalance?.toString() === '0' ? 'btn-disabled':''}`} disabled={!account || earnedBalance?.toString() === '0'} onClick={handleClickClaim}>Claim</button>
        </form>
      </div>
    </div>
  );
}
