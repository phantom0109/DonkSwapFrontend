import { useState, useEffect, useRef } from "react";
import bannerImg from './images/donk-seal.jpeg';
import bracket from './images/photo_2022-03-11 07.27.05.jpeg'
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Aliquam delectus perspiciatis fuga aliquid reiciendis, 
                    rem eaque sint aspernatur recusandae cupiditate?
                </div>
            </section>







        </div>
    )
}
export default NCAATournament;
