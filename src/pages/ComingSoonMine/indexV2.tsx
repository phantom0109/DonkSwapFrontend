import "./stake.css";
import React, { useState, useRef, useEffect, } from 'react'
import EmbedMine from "./embedMine";

export default function Mine() {
  const [depositinputamount, setDepositInputAmount] = useState(null);
  const [withdrawalinputamount, setWithdrawalInputAmount] = useState(null);
  const [errormessage, setErrorMessage] = useState('')
  const [stakedbalance, setStakedBalance] = useState(0);
  const [earnedbalance, setEarnedBalance] = useState(0);

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

  /*==========================================================*/
  /*==========================================================*/


  return (
    <div className="stake-body-whole">
      <div className="floating-box"></div>
      <div className="stake-stats">
        <div>
          <h3>Staking Stats</h3>
        </div>

        <div className="stake-stat-second-level">
          <div className="balance-and-display-container">
            <h3 className="stake-title">Staked Balance</h3>
            <div className="stake-stat-display">
              <p>$0</p>
            </div>
          </div>

          <div>
            <div className="apy-stat-display">
              <div className='apy-box'>
                <h3 className="stake-title">Current APY</h3>
                <p>200%</p>
              </div>
            </div>
          </div>

          <div className="balance-and-display-container">
            <h3 className="stake-title">Earned $DST</h3>
            <div className="stake-stat-display">
              <p>$0</p>
            </div>
          </div>
        </div>
      </div>

      < div className="stake-body">
        <form className="stake-form">
          <h3 className="stake-title">Stake your $DST</h3>
          <div className="input-div">
            <input onChange={depositInput} value={depositinputamount} type="number" placeholder="0.0" className="deposit-input" />
            <div className="increment-div">
              <button onClick={incrementDepositUp} className="increment-plus">+</button>
              <button onClick={decrementDepositDown} className="increment-minus">-</button>
            </div>
          </div>
          <button className='stake-btn'>Stake</button>
        </form>

        <form className="stake-form">
          <h3 className="stake-title">Withdrawal your $DST earned</h3>
          <div className="input-div">
            <input onChange={withdrawalInput} value={withdrawalinputamount} type="number" placeholder="0.0" className="withdrawal-input" />
            <div className="increment-div">
              <button onClick={incrementWithdrwalUp} className="increment-plus">+</button>
              <button onClick={decrementWithdrawalDown} className="increment-minus">-</button>
            </div>
          </div>
          <button className='stake-btn'>Widthdraw</button>
        </form>
      </div>
    </div>
  );
}