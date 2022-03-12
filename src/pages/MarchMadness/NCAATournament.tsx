import { useState, useEffect, useRef } from "react";
import bannerImg from './images/donk-seal.jpeg';
import bracket from './images/photo_2022-03-11 07.27.05.jpeg'
import "./NCAATournament.css";


const NCAATournament = (props) => {

    return (
        <div id='mainbody-container'>
            <section className='section-one'>
                <div className='head-line-section'>
                    <h1>Rebecca Grant's March Mania Tournament </h1>
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
                        <p>This is just a placeholder text</p>
                        <li>Rule 2</li>
                        <p>This is just a placeholder text</p>
                        <li>Rule 3</li>
                        <p>This is just a placeholder text</p>
                    
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
                    <p>This is just a placeholder text</p>
                    <li>Prize 2</li>
                    <p>This is just a placeholder text</p>
                    <li>Prize 3</li>
                    <p>This is just a placeholder text</p>
                    <li>Prize 4</li>
                    <p>This is just a placeholder text</p>
                    <li>Prize 5</li>
                    <p>This is just a placeholder text</p>
                    <li>Grand Prize</li>
                    <p>This is just a placeholder text</p>
                    
                    </ul>
                </div>
            </section>







        </div>
    )
}
export default NCAATournament;