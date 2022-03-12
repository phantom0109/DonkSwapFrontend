import { useState, useEffect, useRef } from "react";
import bannerImg from './images/MM Poster.jpg';
import bracket from './images/MM Bracket 12.jpg'
import "./NCAATournament.css";


const NCAATournament = (props) => {

    return (
        <div id='mainbody-container'>
            <section className='section-one'>
                <div className='head-line-section'>
                    <h1>Rebecca Grant's Bracket Challenge</h1>
                </div>
                    <img src={bannerImg}/>
            </section>
            <section className='section-two'>
                <div className='head-line-section'>
                    <h1>Rules</h1>
                </div>
                <div id='rules' className='content'>
                    <ul>
                        <li>Rule 1</li>
                        <p>$100 Per Entry - Paid in BUSD, BNB or ETH</p>
                        <li>Rule 2</li>
                        <p>Funds must be sent by 6am PST on 3/17 to be eligible.</p>
                        <li>Rule 3</li>
                        <p>Entry fee must be sent when bracket is submitted</p>
                        <li>Rule 4</li>
                        <p>Google Form Registration is Mandatory</p>
                        <li>Rule 5</li>
                        <p>Second Round - Rebuy $75 Per Entry</p>
                        <li>Rule 6</li>
                        <p>Third Round & Beyond - Rebuy $50 Per Entry</p>
                    
                    </ul>
                </div>
            </section>
            <section className='section-three'>
                <div className='img-hugger'>
                    <img src={bracket} />
                </div>
            </section>
            <section>
                <div className='head-line-section'>
                    <h1>Prizes and Rewards</h1>
                </div>
                <div className='content'>
                <ul>
                    <li>Prize 1</li>
                    <p>Most Points Round 1</p>
                    <li>Prize 2</li>
                    <p>Most Points Round 2</p>
                    <li>Prize 3</li>
                    <p>Most Points Round 3</p>
                    <li>Prize 4</li>
                    <p>Most Points Round 4</p>
                    <li>Prize 5</li>
                    <p>Most Upsets - Rounds 1 & 2</p>
                    <li>Prize 6</li>
                    <p>Most Upsets - Rounds 3 & 4</p>
                    <li>Prize 7</li>
                    <p>Most Upsets at the End of the Tournament</p>
                    <li>Grand Prize</li>
                    <p>Most Points Overall - $10,000 in $BUSD</p>
                    
                    </ul>
                </div>
            </section>







        </div>
    )
}
export default NCAATournament;
