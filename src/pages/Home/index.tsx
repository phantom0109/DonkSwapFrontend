import React from 'react'
import AppBody from '../AppBody'
import styled from 'styled-components'
import { CardBody, Button } from '../../uikit'
import { AutoColumn } from 'components/Column'
import './assets/css/bootstrap-4.5.0.min.css'
import './assets/css/default.css'
import './assets/css/style.css'
import './assets/css/bootstrap-5.0.0-alpha-1.min.css'
import './assets/css/LineIcons.2.0.css'
import './assets/css/animate.css'
import './assets/css/main.css'
import './assets/css/LineIcons.2.0 copy.css'


export default function Home() {


    return (
        <>
            <div id="home" className="header-hero bg_cover" style={{backgroundImage: "url(assets/images/banner-bg.svg)"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="header-hero-content text-center">
                            <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Donkey King Finance (DonkSwap Token)</h3>
                            <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">DonkSwap - Ending Rug-Pulls One Safe Project at a Time! <br /> - Aaron Reading (CEO - Donkey King Finance)</h2>
                            <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">The time has come for all to be introduced to DonkSwap Token ($DST) — a passive income generating, deflationary DeFi token.</p>
                            <a href="https://t.me/donkeykingfinanceofficial" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">Join us on Telegram</a> <a href="#team" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">How to buy $DST</a>
                        </div> 
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                            <img src="assets/images/örnek2.png" alt="hero" />
                        </div> 
                    </div>
                </div> 
            </div> 
            <div id="particles-1" className="particles"></div>
        </div> 
        <br />
        <div className="col-lg-12" id="features">
            <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                <video width="660" height="420" controls>
                    <source src="assets/images/video1.mp4" type="video/mp4" />
                   
                  
                  </video>
            </div> 
        </div>
        <section id="about" className="about-section pt-150 pb-20">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img mb-30">
                            <img src="assets/images/about-img.svg" alt="image" className=" wow fadeInLeft" data-wow-delay=".4s" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title mb-40">
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">About Us</h2>
                            </div>
                            <p className="mb-15 wow fadeInUp" data-wow-delay=".4s"> Donkey King Finance ($DST) has launched their own BSC exchange that only lists projects that have passed a full contract audit and have doxed their Development Team.
                            </p>
                           
                            <a href="https://bscscan.com/token/0x3969fe107bae2537cb58047159a83c33dfbd73f9" target="_blank" className="theme-btn theme-btn-2 wow fadeInRight" data-wow-delay=".8s">Token Contract</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-10 mx-auto">
                    <div className="section-title text-center mb-55">
                    <h2 className="mb-20 wow fadeInDown" data-wow-delay=".2s">What makes us special?</h2>
                    <p className=" wow fadeInUp" data-wow-delay=".4s">Everyone has been rugged at some point, this token was built on the philosophy to help people. This means: </p>
                    <p className=" wow fadeInUp" data-wow-delay=".4s">o	No Rugs – we are dedicated to the success of the project<br />
                        o	Reward Holders via Contests & Farming<br />
                        o	Partnerships with Charities for donations<br />
                        o	Telegram chat AMAs<br />
                        o	Telegram Community voice AMAs<br />
                        o	1-1s with Dev (upon request)<br />
                        </p>
                    </div>
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-10 mx-auto">
                        <div className="section-title text-center mb-55">
                        <h2 className="mb-20 wow fadeInDown" data-wow-delay=".2s">Why should you purchase?</h2>
                        <p className=" wow fadeInUp" data-wow-delay=".4s">
                            -	Deflationary – 2% token redistribution to holders, 2% to liquidity after every transaction, 2% burn<br />
                            -	Utility for Holders – Giveaways, Gaming, Social Media Contest, Rewards for Efforts<br />
                            -	Community Driven Partnership – We value opinions from our members, you can have a say in our Future!<br />
                            -	DonkSwap Exchange – an alternative to PCS<br />
                            -	Future plans to launch the Donkey King Gaming Site & App<br />
                            -	Future plans to develop the DonkSwap App and Wallet<br />
                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="facts" className="service-section pt-150 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-10 mx-auto">
                        <div className="section-title text-center mb-55">
                            <h2 className="mb-20 wow fadeInDown" data-wow-delay=".2s">Our Awesome Features</h2>
                            <p className=" wow fadeInUp" data-wow-delay=".4s">Answers to most common questions</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service wow fadeInUp" data-wow-delay=".2s">
                            <div className="service-icon mb-30" >
          
                            </div>
                            <h4>What İs Donkey King Finance?</h4>
                            <p>Donkey King Finance (DonkSwap Token) has launched their own BSC exchange that only lists projects that have passed a full contract audit and have doxed their Development Team.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service wow fadeInUp" data-wow-delay=".4s">
                             <div className="service-icon mb-30" />
          
                        </div>
                        <h4>How do ı participate in the Pre-Sale</h4>
                        <p>Pre-sale ended with great success. You may claim your tokens by going to the pre-sale page. Tokens can now be purchased/sold on PancakeSwap</p>
                    </div>
                </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="single-service wow fadeInUp" data-wow-delay=".6s">
                            <div className="service-icon mb-30" />
           
                        </div>
                        <h4>For how long is the liquidity locked?</h4>
                        <p>Liquidity is locked for 1 year.</p>
                    </div>
            </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-service wow fadeInUp" data-wow-delay=".2s">
                        <div className="service-icon mb-30">
           
                        </div>
                        <h4>Are dev tokens locked?</h4>
                        <p>90% of the dev tokens are locked at this point. Tokens unlock at a rate of 10% every week.</p>
                    </div>
                </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-service wow fadeInUp" data-wow-delay=".4s">
                    <div className="service-icon mb-30">
            
                    </div>
                    <h4>What are your plans for the dev tokens?</h4>
                    <p>We plan to use dev tokens for funding marketing activities, contests, bounties, and future project development.</p>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-service wow fadeInUp" data-wow-delay=".6s">
                    <div className="service-icon mb-30">
          
                    </div>
                </div>
            </div>
        </section>
            <div className="col-lg-12" >
                    <div className="section-title text-center mb-55">
                    <h2 className="mb-20 wow fadeInDown" data-wow-delay=".2s">Our Roadmap</h2>
                    </div>
                <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                    <img src="assets/images/örnek.png" alt="hero" />
                </div> 
            </div>
            <section className="grows-section pt-150" id="team">
                <div className="container">
                <div className="row">
                <div className="col-xl-6 col-lg-6">
                <div className="grows-img mb-30">
                   
                <img src="assets/images/grafik.jpg" alt="" className=" wow fadeInLeft" data-wow-delay=".5s" />
                </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                <div className="grows-content-wrapper mb-30">
                <h2 className="mb-35 wow fadeInDown" data-wow-delay=".2s">How to buy $DST DonkSwap.com ınstructions</h2>
                <p className="mb-35 wow fadeInLeft" data-wow-delay=".4s">1. Download the app, <a href="https://trustwallet.com/deeplink/" style={{color:" orange"}} target="_blank"> Trust Wallet.</a></p>
                <p className="mb-35 wow fadeInLeft" data-wow-delay=".6s">2. Purchase <span style={{color: "orange"}}>BNB</span>  or <span style={{color:" orange"}}>BSC</span> </p>
                <p className="mb-35 wow fadeInLeft" data-wow-delay=".6s">3. Go to the DApps tab at the bottom, and find DonkSwap. Iphone users may need to enable the trust browser, then use the browser tab. You can also click the <span style={{color: "orange"}}> BUY NOW</span> button on our website if you're not on mobile </p>
                <p className="mb-35 wow fadeInLeft" data-wow-delay=".6s">4. Click "Select a currency" and enter this contract address into the search field and you should be able to find $DST. 
                <br /> <span style={{color: "orange"}}>⠀⠀⠀ 0x3969fe107bae2537cb58047159a83c33dfbd73f9</span>   </p>
                <p className="mb-35 wow fadeInLeft" data-wow-delay=".6s">5. Before swapping, click on the cog wheel ⚙️ and set the slippage to between 1% </p>
                <p className="mb-35 wow fadeInLeft" data-wow-delay=".6s">6. Now, set the amount you want to purchase and press the <span style={{color: "orange"}}><b>SWAP</b> </span>  button. </p>
                <p className="mb-35 wow fadeInLeft" data-wow-delay=".6s">7. Confirm the transaction and... <span style={{color: "orange"}}><b>HODL</b></span>  </p>
                
                </div>
                </div>
                </div>
                </div>
                </section>
                <section className="countdown-section pt-70 pb-70 img-bg" style={{backgroundColor:" blue"}} >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="countdown-img">
                                    <img src="assets/images/sulaiyicikadin.png" className=" wow fadeInLeft" data-wow-delay=".4s" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="countdown-content-wrapper">

                                    <div className="countdown-content">
                                        <h2 className="text-white mb-35  wow fadeInUp" data-wow-delay=".2s">Smart and Secure Way
                                        to Invest in $DST</h2>
                                        <p className="text-white mb-30 wow fadeInUp" data-wow-delay=".4s">More info will be added here.</p>
                                        <a href="https://donkswap.com/#/swap" target="_blank" className="theme-btn wow fadeInUp" data-wow-delay=".6s">Buy Token Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                <footer className="footer pt-100 img-bg" style={{backgroundImage: "url(assets/images/common-bg.jpg)", backgroundColor:"blue"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="footer-widget mb-60 wow fadeInLeft" data-wow-delay=".2s">
                  
                                    <p className="mb-30">Donkey King Finance has launched their own BSC exchange that only lists projects that have passed a full contract audit and have doxed their Development Team.</p>
                                    <div className="footer-social-links">
                                        <ul>
                  
                                            <li>
                                                <a href="https://twitter.com/DonkFinance" target="_blank" >
                                                    <i className="lni lni-twitter-filled"></i></a></li>
                 
                                            <li>
                                                <a href="https://t.me/donkeykingfinanceofficial" target="_blank">
                                                    <i className="lni lni-telegram-original"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                                <div className="col-xl-2 col-lg-2 col-md-6">
                                    <div className="footer-widget mb-60 wow fadeInUp" data-wow-delay=".4s">
                                        <h4>Company</h4>
                                        <ul className="footer-links">
                                            <li>
                                                <a href="#home">Home</a>
                                            </li>
                                            <li>
                                                <a href="#features">Features</a>
                                            </li>
                                            <li>
                                                <a href="#about">About</a>
                                            </li>
                                            <li>
                                                <a href="#facts">Faq</a>
                                            </li>
                                    
                                        </ul>
                                    </div>
                                </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6">
                                        <div className="footer-widget mb-60 wow fadeInUp" data-wow-delay=".6s">
                                        <h4>Token</h4>
                                        <ul className="footer-links">
                                            <li>
                                                <a href="https://donkswap.com/#/swap" target="_blank">PancakeSwap</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)"><a href=" https://bscscan.com/token/0x3969fe107bae2537cb58047159a83c33dfbd73f9" target="_blank">Token Contract</a> </a>
                                            </li>
                                            <li>
                                                <a href="#team">Tokenomics</a>
                                            </li>  
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6">
                                        <div className="footer-widget mb-60 wow fadeInRight" data-wow-delay=".8s">
                                        <h4>Contact</h4>
                                            <ul>
                                            <li className="mb-30">
                                            <p><a href="mailto:DonkeyKingFinance@gmail.com" style={{color:" white"}} target="_blank">Email</a> 
                                             <br /> <a href="https://t.me/donkeykingfinance" target="_blank" style={{color: "white"}}>Telegram</a>  
                                             <br /> <a href="https://twitter.com/DonkFinance" target="_blank" style={{color: "white"}}>Twitter</a> 
                                            </p>
                                            </li>                                       
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                     <div className="copyright-area">
                 
                                    </div>
                    </div>
                    </footer>


        </>
  )
}
