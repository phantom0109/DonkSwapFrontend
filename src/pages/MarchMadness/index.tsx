import { useState, useEffect, useRef } from "react";
import "./marchmadness.css";
import logo from './images/logo.png';

const MarchMadness = (props) => {

    return (
        <div id="main-tournament-body">
            <div id='tournament-header'>
                <h1>Donkey King Finance Presents:</h1>
                <h1>Rebecca Grant's Bracket Challenge</h1>
                <img src={(logo)} alt="logo" className="donk-logo" />
            </div>

            <div id="tournament-body">
                <main id="tournament-left">
                    <ul className="round round-1">
                        <li className="spacer">&nbsp;</li>
                            <li className="slot-box">1 </li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="slot-box">2</li>
                        <li className="spacer">&nbsp;</li>
                            <li className="slot-box">3</li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="slot-box">4</li>
                        <li className="spacer">&nbsp;</li>
                        <li className="slot-box">5</li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="slot-box">6</li>
                        <li className="spacer">&nbsp;</li>
                        <li className="slot-box">7</li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="slot-box">8</li>
                        <li className="spacer">&nbsp;</li>
                    </ul>

                    <ul className="round round-2">
                        <li className="spacer">&nbsp;</li>
                            <li className="game game-top winner"> <span> </span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom ">  <span> </span></li>
                        <li className="spacer">&nbsp;</li>
                            <li className="game game-top winner"> <span>  </span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom ">  <span>  </span></li>
                        <li className="spacer">&nbsp;</li>
                    </ul>

                    <ul className="round round-3">
                        <li className="spacer">&nbsp;</li>
                            <li className="game game-top winner">   <span>  </span></li>
                            <li className="game game-spacer">&nbsp;</li>
                            <li className="game game-bottom ">   <span>  </span></li>
                        <li className="spacer">&nbsp;</li>
                    </ul>

                    <ul className="round round-4">
                        <li className="spacer">&nbsp;</li>
                            <li className="game game-top4 winner">   <span>  </span></li>
                        <li className="spacer">&nbsp;</li>
                    </ul>
                </main>


                <div id="winner-box">
                    <h1>WINNER</h1>
                </div>


                <main id="tournament-right">
                    <ul className="round2 round-4">
                        <li className="spacer2">&nbsp;</li>
                            <li className="game2 game-top5 winner">   <span>  </span></li>
                        <li className="spacer2">&nbsp;</li>
                    </ul>

                    <ul className="round2 round-3">
                        <li className="spacer2">&nbsp;</li>
                            <li className="game2 game-top">   <span>  </span></li>
                            <li className="game2 game-spacer2">&nbsp;</li>
                            <li className="game2 game-bottom ">   <span>  </span></li>
                        <li className="spacer2">&nbsp;</li>
                    </ul>

                    <ul className="round2 round-2">
                        <li className="spacer2">&nbsp;</li>
                            <li className="game2 game-top"> <span> </span></li>
                            <li className="game2 game-spacer2">&nbsp;</li>
                            <li className="game2 game-bottom ">  <span> </span></li>
                        <li className="spacer2">&nbsp;</li>
                            <li className="game2 game-top"> <span>  </span></li>
                            <li className="game2 game-spacer2">&nbsp;</li>
                            <li className="game2 game-bottom ">  <span>  </span></li>
                        <li className="spacer2">&nbsp;</li>
                    </ul>

                    <ul className="round2 round-1">
                        <li className="spacer">&nbsp;</li>
                            <li className="slot-box">1 </li>
                            <li className="game2 game-spacer2">&nbsp;</li>
                            <li className="slot-box">2</li>
                        <li className="spacer">&nbsp;</li>
                            <li className="slot-box">3</li>
                            <li className="game2 game-spacer2">&nbsp;</li>
                            <li className="slot-box">4</li>
                        <li className="spacer">&nbsp;</li>
                        <li className="slot-box">5</li>
                            <li className="game2 game-spacer2">&nbsp;</li>
                            <li className="slot-box">6</li>
                        <li className="spacer">&nbsp;</li>
                        <li className="slot-box">7</li>
                            <li className="game2 game-spacer2">&nbsp;</li>
                            <li className="slot-box">8</li>
                        <li className="spacer">&nbsp;</li>
                    </ul>
                </main>
            </div>
        </div>
    )
}
export default MarchMadness;


