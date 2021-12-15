import { useState, useEffect } from "react";
import "./styles.css";
import { CSSTransition } from "react-transition-group";
import { HashLink } from 'react-router-hash-link';
import { SocialIcon } from "react-social-icons";


const Header = () => {


    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <a>
                        <HashLink smooth to="/home/#about">About</HashLink>
                    </a>
                    <a>
                        <HashLink smooth to="/home/#learn">Learn</HashLink>
                    </a>
                    <a>
                        <HashLink smooth to="/home/#meetTheTeam">Meet The Team</HashLink>
                    </a>
                    {/* <a href="#videos">Videos</a> */}
                    {/* <a href="#socials">Socials</a> */}
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                Ξ
            </button>
        </header>
    );

}


export const HomePage = () => {
    return (
        <>
            <Header />
            <main className="one">
                <section className="col hero">
                    {/* <!-- Hero Logo --> */}
                    <img src="/images/logo.png" alt="logo" />
                    <div className="dkf-bg">
                        <h1>Donkey King Finance</h1>
                    </div>
                </section>
            </main>

            <main id="about" className="two">
                <section className="col sect-two">
                    <div>
                        <div className="heading-two">About</div>
                        <p>
                            Launched on September 1, 2021, DonkSwap is a global Binance Smart Chain (BSC) exchange
                            headquartered in the United States of America. To date, DonkSwap has processed more than
                            $40,000 in transactions and has over 2,000 customers spanning from all around the world.
                            DonkSwap is a subsidiary of Donkey King Finance.
                        </p>
                        <br /><br /><br />
                        <p>
                            Donkey King Finance utilizes what they call the Financially Audited Model (FAM) as their
                            vision is to end rug-pulls and create a safe space to invest in BSC projects. Through
                            DonkSwap’s instant swap feature, customers are able to purchase fully audited tokens
                            using BNB, BUSD or WBNB.
                        </p>
                    </div>
                    <div className="sect-right">
                        <div className="sect-right-one">
                            <h2 className="heading-two">Native Currency</h2>
                            <h3 className="heading-three">DonkSwap Token</h3>
                            <img src="/images/logoTwo.png" alt="logo-two" />
                            <h3 className="heading-three">$DST Contract</h3>
                            <p>0x3969fe107bae2537cb58047159a83c33dfbd73f9</p>
                        </div>
                    </div>
                </section>
            </main>

            <main id="learn" className="three">
                <div className="heading-two">Learn</div>
                {/* <!-- Section Three Column --> */}
                <section className="col sect-three">
                    {/* <!-- Section Top --> */}
                    <div className="sect-three-top">
                        {/* <!-- White Paper --> */}
                        <div>
                            <h3 className="heading-three">White Paper</h3>
                            <a
                                target="_blank"
                                href="https://docs.google.com/document/d/14uBTGH2dxkhSsgU2GeEEhsQjZecHEGeqCQsgMyUO-tU/edit"
                            >
                                <img src="/images/White-Paper.png" alt="white-paper" />
                            </a>
                        </div>
                        {/* <!-- BSC Scan --> */}
                        <div>
                            <h3 className="heading-three">BSC Scan</h3>
                            <a
                                target="_blank"
                                href="https://bscscan.com/token/0x3969fe107bae2537cb58047159a83c33dfbd73f9"
                            >
                                <img src="/images/filename-12.png" alt="white-paper" />
                            </a>
                        </div>
                        {/* <!-- Contract Audit --> */}
                        <div>
                            <h3 className="heading-three">Contract Audit</h3>
                            <a
                                target="_blank"
                                href="https://github.com/Watchtower-WTW/Public_Audits/blob/main/DONKSWAP%20Smart%20Contract%20Security%20Audit%20(2).pdf"
                            >
                                <img src="/images/contract-audit.png" alt="white-paper" />
                            </a>
                        </div>
                    </div>
                    <section className="sect-bottom">
                        {/* <!-- Section Three Left --> */}
                        <div className="sect-three-left">
                            <h3 className="heading-three">Roadmap</h3>
                            <img src="/images/roadmap.png" alt="roadmap" />
                        </div>
                        {/* <!-- Section Three Right --> */}
                        <div className="sect-three-right">
                            <h3 className="heading-three">Tokenomics</h3>
                            <img src="/images/tek.png" alt="tek" />
                        </div>
                    </section>
                </section>
            </main>

            {/* <main id="videos" className="four">
                <div className="heading-two">Videos</div>
                <section className="col sect-four">
                    <div className="video-box-one">
                        <h3 className="heading-three">How to Buy</h3>
                        <div className="video-responsive">
                            <iframe
                                src={`https://www.youtube.com/embed/nh4q9w0Y_i0`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Donkey King Casino"
                            />
                        </div>
                    </div>
                    <div className="video-box-two">
                        <video autoPlay loop muted playsInline>
                            <source src="/video/dkf.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                        <h3 className="heading-three">How To Farm</h3>
                    </div>
                    <div className="video-box-three">
                        <h3 className="heading-three">March Madness Charity Tournament</h3>
                        <video autoPlay loop muted playsInline>
                            <source src="./video/dkf-marchmadness.mp4" type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                </section>
            </main> */}

            <main id="meetTheTeam" className="five">
                <section className="col">
                    <div className="exec-bio">
                        <div className="heading-two">Meet The Team</div>
                        <h3 className="heading-three">
                            Aaron Reading - CEO
                            <a target="_blank" href="https://www.linkedin.com/in/aaron-reading-0913ab101">
                                <SocialIcon network="linkedin" fgColor="transparent" bgColor="white" style={{ height: 25, width: 25 }} className="icon" />
                            </a>
                        </h3>
                        <p>
                            Aaron Reading, Chief Executive Officer of Donkey King Finance, took over for the original founders after they stepped down for personal reasons. He came with over 10 years of experience building successful businesses and sales teams. Additionally, he has more than 3 years of experience investing in crypto currency projects. His drive to succeed stems from his passion to help as many people as possible reach success.

                        </p>
                        <br /><br /><br />
                        <h3 className="heading-three">
                            Michael Cope - COO
                            <a target="_blank" href="https://www.linkedin.com/in/michael-cope-b4a239a1">
                                <SocialIcon network="linkedin" fgColor="transparent" bgColor="white" style={{ height: 25, width: 25 }} className="icon" />
                            </a>
                        </h3>
                        <p>
                            Michael Cope is the Chief Operating Officer of Donkey King Finance. He has over 10 years
                            of experience in sales, marketing and managing teams. Michael was an integral part of
                            the takeover that kept Donkey King Finance afloat. He strongly believes in providing a
                            safe place to invest in defi crypto projects as well as preserving the integrity of the
                            space. With nearly 15 years of investing experience, Michael strongly believes he has
                            the knowledge to help grow this project to greater heights.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
