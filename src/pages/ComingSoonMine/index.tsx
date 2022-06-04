import "./stake.css";
import React, { useState, useRef, useEffect, } from 'react'
import EmbedMine from "./embedMine";
import useStaking from "../../hooks/useStaking";
import { ethers } from "ethers"
import useERC20 from "hooks/useERC20";

export default function Mine() {
  const [depositinputamount, setDepositInputAmount] = useState(0);
  const [withdrawalinputamount, setWithdrawalInputAmount] = useState(0);
  const [claiminputamount, setClaimInputAmount] = useState(0);
  const [errormessage, setErrorMessage] = useState('')
  const { stakedbalance, earnedBalance, totalStakedBalance, totalRewards, rewardRate, stake,restake, withdraw, claimReward } = useStaking();
  const { allowance, approve, balance } = useERC20();
  const total = Number(ethers.utils.formatEther(totalStakedBalance));
  const rate = Number(ethers.utils.formatEther(rewardRate));
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
          <h3>Staking Stats</h3>
        </div>
        
        <div className="stake-stat-second-level">
          <div className="balance-and-display-container">
            <h3 className="stake-title">Total Balance</h3>
            <div className="stake-stat-display">
              <p>{totalStakedBalance ? ethers.utils.formatEther(totalStakedBalance) : 0}</p>
            </div>
          </div>
          
          <div className="balance-and-display-container">
            <h3 className="stake-title">Staked Balance</h3>
            <div className="stake-stat-display">
            <p>{stakedbalance ? ethers.utils.formatEther(stakedbalance).slice(0, ethers.utils.formatEther(stakedbalance).indexOf(".")+3) : 0}</p>
            </div>
          </div>

          <div>
            <div className="apy-stat-display">
              <div className='apy-box'>
                <h3 className="stake-title">APR</h3>
                <p>{apr ? apr.toString() : 0}%</p>
              </div>
            </div>
          </div>

          <div className="balance-and-display-container">
            <h3 className="stake-title">Earned $DST</h3>
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

      < div className="stake-body">
        <form className="stake-form">
          <h3 className="stake-title">Stake DONK-LP</h3>
          <div className="input-div">
            <input onChange={depositInput} value={depositinputamount} type="number" placeholder='0.0' className="deposit-input" />
            <div className="increment-div">
              <button onClick={incrementDepositUp} className="increment-plus">+</button>
              <button onClick={decrementDepositDown} className="increment-minus">-</button>
            </div>
          </div>
          <div>
            <h6 className = {`max-value ${allowance === '0' ? 'pointer-disabled':''}`} onClick={handleClickMax}>
              Max:{balance ? ethers.utils.formatEther(balance).slice(0, ethers.utils.formatEther(balance).indexOf(".")+3) : 0}
            </h6>
          </div>
          {allowance !== '0' ? 
          <div>
            <button className='stake-btn' onClick={handleClickStake}>Stake</button>
            <button className='stake-btn' onClick={handleClickReStake}>ReStake</button>
          </div>
            : <button className="stake-btn" onClick={handleClickApprove}>Approve</button>}
        </form>

        <form className="stake-form">
          <h3 className="stake-title">Withdraw Staked LP</h3>
          <div className="input-div">
            <input onChange={withdrawalInput} value={withdrawalinputamount} type="number" placeholder="place input withdrawal %" className="withdrawal-input" />
            <div className="increment-div">
              <button onClick={incrementWithdrwalUp} className="increment-plus">+</button>
              <button onClick={decrementWithdrawalDown} className="increment-minus">-</button>
            </div>
          </div>
          <button className={`stake-btn ${stakedbalance?.toString() === '0' ? 'btn-disabled':''}`} onClick={handleClickWithdraw}>Withdraw</button>
        </form>

        <form className="stake-form">
          <h3 className="stake-title">Claim Earned $DST</h3>
          <div className="input-div">
            <input onChange={ClaimInput} value={claiminputamount} type="number" placeholder="place input number" className="withdrawal-input" />
            <div className="increment-div">
              <button onClick={incrementClaimUp} className="increment-plus">+</button>
              <button onClick={decrementClaimDown} className="increment-minus">-</button>
            </div>
          </div>
          <button className={`stake-btn ${earnedBalance?.toString() === '0' ? 'btn-disabled':''}`} onClick={handleClickClaim}>Claim</button>
        </form>
      </div>
    </div>
  );
}
