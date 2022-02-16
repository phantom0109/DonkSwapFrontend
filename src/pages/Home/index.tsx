import { useState, useEffect, useRef } from "react";
import "./home.css";
import aceSVG from './images/Ace.svg'
import pokerChips from './images/poker_chips.svg'
import pokerChipsWithCard from './images/pokerchips_card.svg'
import telegramLogo from './images/telegram-plane-brands.svg'
import redditLogo from './images/reddit-alien-brands.svg'
import twitterLogo from './images/twitter-brands (1).svg'
import linkedInLogo from './images/linkedin-brands.svg'
import githubLogo from './images/github-brands (1).svg'
import instaLogo from './images/instagram-brands.svg'
import youtubeLogo from './images/youtube-brands.svg'
import buyingDonk from './images/BuyingDonk.png'
import video from './video/buy_walk_through.mov'
import waveTwo from './images/wave-haikei (2).svg'
import waveThree from './images/wave-haikei (3).svg'
import waveFour from './images/wave-haikei (4).svg'
import waveFive from './images/wave-haikei (5).svg'
import blob2 from './images/blob-haikei.svg'
import blob3 from './images/blob-haikei (1).svg'
import cardArt from './images/card-art.svg'
import ceo from './images/Screen Shot 2021-12-19 at 3.07.02 AM.png';
import coo from './images/COO.jpeg'
import cto from './images/my-profile.jpeg'
import casinoGameTwo from './video/Casino_Slots2.mp4'
import layeredWavesOne from './images/layered-waves-haikei (1).svg'
import layeredWavesTwo from './images/layered-waves-haikei.svg'
import strongDonkey from './images/Strong+DonkeySwap.webp'
import aceCard from './images/ace_card.svg'
import aceCardTwo from './images/ace_card2.svg'
import scrolldownArrow from './images/angle-down-solid.svg'




const HomePage = (props) => {

    const tgRef = useRef<HTMLElement>(null);
    const twitRef = useRef<HTMLElement>(null);
    const igRef = useRef<HTMLElement>(null);
    const redditRef = useRef<HTMLElement>(null);
    const ytRef = useRef<HTMLElement>(null);
    const gitRef = useRef<HTMLElement>(null);
    const ceoLinkRef = useRef<HTMLElement>(null);
    const cooLinkRef = useRef<HTMLElement>(null);
    const ctoLinkRef = useRef<HTMLElement>(null);
    const firstArrowRef = useRef<HTMLImageElement>(null);
    const secondArrowRef = useRef<HTMLImageElement>(null);



    //*===================== Telegram Icon Effect============================*//

    const tgshadowup = () => {
        tgRef.current.classList.add('social-btn-shadow-up');
        tgRef.current.classList.remove('social-btn-shadow-down');
    }
    const tgshadowdown = () => {
        tgRef.current.classList.add('social-btn-shadow-down');
        tgRef.current.classList.remove('social-btn-shadow-up');
    }

    //*=======================Twitter Icon Effect =============================*//

    const twitshadowup = () => {
        twitRef.current.classList.add('social-btn-shadow-up');
        twitRef.current.classList.remove('social-btn-shadow-down');
    }
    const twitshadowdown = () => {
        twitRef.current.classList.add('social-btn-shadow-down');
        twitRef.current.classList.remove('social-btn-shadow-up');
    }

    //*=======================Instagram Icon Effect =============================*//
    const igshadowup = () => {
        igRef.current.classList.add('social-btn-shadow-up');
        igRef.current.classList.remove('social-btn-shadow-down');
    }
    const igshadowdown = () => {
        igRef.current.classList.add('social-btn-shadow-down');
        igRef.current.classList.remove('social-btn-shadow-up');
    }

    //*=======================Reddit Icon Effect =============================*//
    const redditshadowup = () => {
        redditRef.current.classList.add('social-btn-shadow-up');
        redditRef.current.classList.remove('social-btn-shadow-down');
    }
    const redditshadowdown = () => {
        redditRef.current.classList.add('social-btn-shadow-down');
        redditRef.current.classList.remove('social-btn-shadow-up');
    }
    //*=======================Youtube Icon Effect =============================*//
    const ytshadowup = () => {
        ytRef.current.classList.add('social-btn-shadow-up');
        ytRef.current.classList.remove('social-btn-shadow-down');
    }
    const ytshadowdown = () => {
        ytRef.current.classList.add('social-btn-shadow-down');
        ytRef.current.classList.remove('social-btn-shadow-up');
    }
    //*=======================Github Icon Effect =============================*//
    const gitshadowup = () => {
        gitRef.current.classList.add('social-btn-shadow-up');
        gitRef.current.classList.remove('social-btn-shadow-down');
    }
    const gitshadowdown = () => {
        gitRef.current.classList.add('social-btn-shadow-down');
        gitRef.current.classList.remove('social-btn-shadow-up');
    }

    //*=======================Linkedin Icon Effect =============================*//

    const ceoLinkRefUp = () => {
        ceoLinkRef.current.classList.add('social-btn-shadow-up');
        ceoLinkRef.current.classList.remove('social-btn-shadow-down');
    }
    const ceoLinkRefDown = () => {
        ceoLinkRef.current.classList.remove('social-btn-shadow-up');
        ceoLinkRef.current.classList.add('social-btn-shadow-down');
    }
    //*=======================Linkedin Icon Effect =============================*//
    const cooLinkRefUp = () => {
        cooLinkRef.current.classList.add('social-btn-shadow-up');
        cooLinkRef.current.classList.remove('social-btn-shadow-down');
    }
    const cooLinkRefDown = () => {
        cooLinkRef.current.classList.remove('social-btn-shadow-up');
        cooLinkRef.current.classList.add('social-btn-shadow-down');
    }
    //*=======================Linkedin Icon Effect =============================*//
    const ctoLinkRefUp = () => {
        ctoLinkRef.current.classList.add('social-btn-shadow-up');
        ctoLinkRef.current.classList.remove('social-btn-shadow-down');
    }
    const ctoLinkRefDown = () => {
        ctoLinkRef.current.classList.remove('social-btn-shadow-up');
        ctoLinkRef.current.classList.add('social-btn-shadow-down');
    }
    //*=======================================================================*//
    //*=======================================================================*//
    //*=======================================================================*//



    return (


        <div id="home-container">
            <section id="first-box">
                <div className="left-of-first-box">
                    <div className="slogan-container">
                        <h4>Be in the <span style={{ color: '#fdc921' }}>Money</span> with Donkey King Finance!</h4>
                    </div>
                    <div className="sub-slogan-container">
                        <p><b>DonkSwap </b>
                            <em style={{ color: 'white' }}>
                                is a global Binance Smart Chain (BSC) exchange with a vision to end rug-pulls and create a safe space to invest in BSC projects. DonkSwap Token ($DST) is the official currency of DonkSwap.
                            </em>
                        </p>
                    </div>
                    <div className="quickgo-button-container">
                        <div className="quickgo-button-hugger">
                            <a href="/#/swap">
                                <button className="quickgo-btn" id="get-dst" >Get $DST</button>
                            </a>
                            <a href="https://drive.google.com/file/d/1tuG_bVvpGjvPHbmahLKlm5cJgVX3j87F/view?usp=sharing">
                                <button className="quickgo-btn" id="get-white-paper">White Paper</button>
                            </a>
                            <a href="https://bscscan.com/token/0x3969fe107bae2537cb58047159a83c33dfbd73f9" target="_blank">
                                <button className="quickgo-btn" id="get-scan">BSC Scan</button>
                            </a>
                            <a href="https://github.com/Watchtower-WTW/Public_Audits/blob/main/DONKSWAP%20Smart%20Contract%20Security%20Audit%20(2).pdf" target="_blank">
                                <button className="quickgo-btn" id="get-audit">Audit</button>
                            </a>
                        </div>
                        <div className="social-link-container">
                            <span className="social-link-hugger" ref={tgRef} onMouseOver={tgshadowup} onMouseOut={tgshadowdown}>
                                <a href="https://t.me/donkeykingfinanceofficial" target="_blank">
                                    <img src={(telegramLogo)} alt="telegram" className="telegram" />
                                </a>
                            </span>
                            <span className="social-link-hugger" ref={twitRef} onMouseOver={twitshadowup} onMouseOut={twitshadowdown}>
                                <a href="https://twitter.com/donkfinance" target="_blank">
                                    <img src={(twitterLogo)} alt="telegram" className="twitter" />
                                </a>
                            </span>
                            <span className="social-link-hugger" ref={igRef} onMouseOver={igshadowup} onMouseOut={igshadowdown}>
                                <a href="https://www.instagram.com/donkeykingfinance/" target="_blank">
                                    <img src={(instaLogo)} alt="telegram" className="instagram" />
                                </a>
                            </span>
                            <span className="social-link-hugger" ref={redditRef} onMouseOver={redditshadowup} onMouseOut={redditshadowdown}>
                                <a href="https://www.reddit.com/r/DonkFinance/" target="_blank">
                                    <img src={(redditLogo)} alt="telegram" className="reddit" />
                                </a>
                            </span>
                            <span className="social-link-hugger" ref={gitRef} onMouseOver={gitshadowup} onMouseOut={gitshadowdown}>
                                <a href="https://github.com/JimmyStax90/DonkSwap" target="_blank">
                                    <img src={(githubLogo)} alt="telegram" className="github" />
                                </a>
                            </span>
                            <span className="social-link-hugger" ref={ytRef} onMouseOver={ytshadowup} onMouseOut={ytshadowdown}>
                                <a href="https://www.youtube.com/channel/UC7Ri60pAZO9XJVtTBCg09Hg" target="_blank">
                                    <img src={(youtubeLogo)} alt="telegram" className="youtube" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="right-of-first-box">
                    <img src={(aceSVG)} alt="ace" className="ace-logo" />
                    <img src='/images/logo.png' alt="logo" className="donkey-logo" />
                </div>
            </section>


            <section id="second-box">
                <div className="why-kishu-container">
                    <img src={(pokerChips)} alt="poker-chips" className="poker-chips" />
                    <h3 className="ticker-opacity">$DST</h3>
                    <h3 className="why-donk">Why DonkSwap?</h3>
                </div>
                <img src={(waveFour)} alt="blob" className="wave4" />
            </section>


            <section id="third-box">
                <img src={(waveTwo)} alt="blob" className="wave2" />
                <img src={(waveFive)} alt="blob" className="wave5" />
                <div className="left-of-third-box">
                    <img src={(pokerChipsWithCard)} alt="cardwchips" className="card-chips" />
                    <div className="why-container">
                        <video autoPlay muted loop className="video-playback">
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="right-of-third-box">
                    <img src={(waveThree)} alt="wave3" className="wave3" />
                    <div className="right-of-third-box-hugger">
                        <div className="right-of-third-box-title-container">
                            <h3 className="headerOne">A Rug Proof</h3>
                            <h4 className="headerTwo">Decentralized Exchange</h4>
                        </div>
                        <div className="right-of-third-box-value-container">
                            DonkSwap is one of the first of its kind. Our
                            vision is to provide transparency at its
                            highest level welcoming newcomers and
                            veterans seeking a reliable source to
                            exchange and swap their tokens by
                            providing an environment of fully audited
                            projects. Get reliable information of each
                            project listed and their development team
                            as well as links to the financial audit,
                            charts, website and any other pertinent
                            information that is needed to make an
                            informed investment.
                            <br></br>
                            <br></br>
                            Holders have the opportunity to increase how much they own by staking our partners tokens for <b>$DST!</b> by offering staking pools and farms through our partner tokens who list on our exchange.
                        </div>
                    </div>
                    <a href="/#/swap">
                        <button className="getSwap-btn">Get $DST</button>
                    </a>
                </div>
            </section>


            <section id="fourth-box">
                <img src={(blob2)} alt="blob2" className="blob2" />
                <div className="fourth-box-slogan-container">
                    <h3 className="fourth-box-slogan-headline-overlay">Are you with #DonkNation yet?</h3>
                    <h3 className="fourth-box-slogan-headline">Are you with #DonkNation yet?</h3>
                </div>
                <div className="left-of-fourth-box">
                    <div className="tokenomics-container">
                        <h3 className="tokenomics-title">Tokenomics</h3>
                        <h3 className="tokenomics-title-opacity">Tokenomics</h3>
                        <div className="tokenomics-content-container">
                            <p className="tokenomics-list-heading-container">
                                There is a 6% fee on every transaction and transfer. However, of that 6% fee..
                            </p>
                            <div className="tokenomics-list-container">
                                <h3 className="tokenomics-bullet-title"> 2% gets redistributed to all holders</h3>
                                Provides our community a benefit to holding $DST as a long term investment.
                                <br></br>
                                <br></br>
                                <h3 className="tokenomics-bullet-title">  2% goes back into liquidity</h3>
                                Provides additional tokens for new investors who want to invest to help support the sustainability of our exchange.
                                <br></br>
                                <br></br>
                                <h3 className="tokenomics-bullet-title"> 2% is sent to a burn wallet</h3>
                                Burning helps decrease the total circulating supply which in turn increases the price of <b>$DST.</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-of-fourth-box">
                    <div>
                    </div>
                </div>
            </section>


            <section id="security-section">
                <div className="left-side-of-security-section">
                    <img src={(blob3)} alt="blob3" className="blob3" />
                    <img src={(strongDonkey)} alt="strongDonkey" className="strongDonkey" />
                </div>
                <div className="right-side-of-security-section">
                    <div className="safe-secure-container">
                        <div className="safe-secure-content-hugger">
                            <h3 className="safe-secure-title">Strong, Safe & Secure</h3>
                            <p>The $DST smart contract has been fully audited by one of the top specialized teams and our LP (Liquidity Pool) Tokens have been locked for one year.
                                Locking the LP eliminates many risks to our community!</p>
                            <a href="https://github.com/Watchtower-WTW/Public_Audits/blob/main/DONKSWAP%20Smart%20Contract%20Security%20Audit%20(2).pdf">
                                See our security audit here..
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            <section id="fifth-box">
                <div className="coming-soon-hugger">
                    <h3 className="casino-section-title">Coming Soon...</h3>
                    <img src={(cardArt)} alt="cardart" className="cardArt" />
                    <div className="casino-vid-container">
                        <div className="video-hugger">
                            <video className="casino-vid" autoPlay loop muted>
                                <source src={(casinoGameTwo)} type="video/mp4" />
                            </video>
                        </div>
                        <a className="casino-link" href="/#/casino" style={{ color: 'white', marginTop: '-50px' }}>See More...</a>
                    </div>
                    <h3 className="casino-end-title">The Official BSC Casino</h3>
                </div>
                <img src={(layeredWavesTwo)} alt="layedwaves" className="layered-wave-two" />
            </section>



            <section id="sixth-box">
                <img src={(layeredWavesOne)} alt="layedwaves" className="layered-wave-one" />
                <div className="left-of-sixth-box">
                    <div className="team-header-container">
                        <h3 className="team-title">Meet the Team</h3>
                    </div>
                    <div className="profile-hugger" id="CEO">
                        <div className="dev-content-container">
                            <div className="profile-pic-container">
                                <img src={(ceo)} alt="ceo" className="dev-pics" />
                            </div>
                            <h3>Aaron Reading | CEO </h3>
                            <span className="social-link-hugger" ref={ceoLinkRef} onMouseOver={ceoLinkRefUp} onMouseOut={ceoLinkRefDown}>
                                <a href="https://www.linkedin.com/in/aaron-reading-0913ab101/" target="_blank">
                                    <img src={(linkedInLogo)} alt="linedin" className="linkedin" />
                                </a>
                            </span>
                            <p>
                                Aaron Reading, Chief Executive Officer of Donkey King Finance, took over for the original founders after
                                they stepped down for personal reasons. He came with over 10 years of experience building successful businesses
                                and sales teams. Additionally, he has more than 3 years of experience investing in crypto currency projects.
                                His drive to succeed stems from his passion to help as many people as possible reach success.
                            </p>
                        </div>
                    </div>
                    <div className="profile-hugger" id="COO">
                        <div className="dev-content-container">
                            <div className="profile-pic-container">
                                <img src={(coo)} alt="coo" className="dev-pics" id="COO" />
                            </div>
                            <h3>Michael Cope | COO </h3>
                            <span className="social-link-hugger" ref={cooLinkRef} onMouseOver={cooLinkRefUp} onMouseOut={cooLinkRefDown}>
                                <a href="https://www.linkedin.com/in/michaelcopejr/" target="_blank">
                                    <img src={(linkedInLogo)} alt="linedin" className="linkedin" />
                                </a>
                            </span>
                            <p>
                                Michael Cope is the Chief Operating Officer of Donkey King Finance. He has over 10 years of experience in sales,
                                marketing and managing teams. Michael was an integral part of the takeover that kept Donkey King Finance afloat.
                                He strongly believes in providing a safe place to invest in defi crypto projects as well as preserving the integrity of the space.
                                With nearly 15 years of investing experience, Michael strongly believes he has the knowledge to help grow this project to greater heights.
                            </p>
                        </div>
                    </div>
                    <div className="profile-hugger" id="CTO">
                        <div className="dev-content-container">
                            <div className="profile-pic-container">
                                <img src={(cto)} alt="coo" className="dev-pics" id="CTO" />
                            </div>
                            <h3>Raden | CTO </h3>
                            <span className="social-link-hugger" ref={ctoLinkRef} onMouseOver={ctoLinkRefUp} onMouseOut={ctoLinkRefDown}>
                                <a href="https://www.linkedin.com/in/thebreakfastmarketingco/" target="_blank">
                                    <img src={(linkedInLogo)} alt="linedin" className="linkedin" />
                                </a>
                            </span>
                            <p>
                                Raden, one of the lead developers of Donkey King Finance, is excited to utilize his Software Development, Digital Marketing, and 8 plus years of professional experience to continue
                                to develop & design the vision of <b>Donkey King Finance.</b>  His keen eye for design, development, and passion for solving problems
                                creates the perfect combination that this project needs to continue its' effort to grow. Raden is proud to be a part of this amazing project, team, community and looks forward to seeing it thrive to higher levels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <ul className="animated-background">
                <li>
                    <img src={(aceCard)} alt="ace-card" className="ace-card-float" />
                </li>
                <li>
                    <img src={(aceCardTwo)} alt="ace-card" className="ace-card-float" />
                </li>
                <li>
                    <img src={(aceCard)} alt="ace-card" className="ace-card-float" />
                </li>
                <li>
                    <img src={(aceCardTwo)} alt="ace-card" className="ace-card-float" />
                </li>
                <li>
                    <img src={(aceCard)} alt="ace-card" className="ace-card-float" />
                </li>
                <li>
                    <img src={(aceCardTwo)} alt="ace-card" className="ace-card-float" />
                </li>
            </ul>
        </div>

    )
}
export default HomePage;
