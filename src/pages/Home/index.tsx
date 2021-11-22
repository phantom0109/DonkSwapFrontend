<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DonkSwap</title>
    <!-- CSS Style File -->
    <link rel="stylesheet" href="/css/style.min.css" />
    <!-- Boxicons -->
    <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Poppins:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- Background Video -->
    <video autoplay loop muted playsinline class="bg-video">
      <source src="/video/bgVideoNew.mp4" type="video/mp4" />
      <source src="/video/bgVideoNew.mov" type="video/mov">
      Your browser does not support HTML5 video.
    </video>
    <!--
    ====================================== 
      Header & Navigation Menu
    ======================================
    -->
    <header>
      <!--- Desktop Menu -->
      <nav>
        <div class="col desktop-nav">
          <div class="item-1">
            <img src="/images/logo.png" alt="logo" />
            <h3>DonkSwap</h3>
          </div>
          <div class="item-2">
            <ul>
              <li class="sub-btn">
                <a href="#">Home</a>
                <i class="bx bxs-down-arrow"></i>
              </li>
              <li><a href="https://donkswap.com/#/swap">Swaps</a></li>
              <li><a href="#">DonkSeal</a></li>
              <li><a href="#">Donkey King Casino</a></li>
              <li><a href="#">Donkey Mines</a></li>
            </ul>
            <h3 class="open-mobile-nav">Menu</h3>
          </div>
          <div class="item-3">
            <a href="#">Connect</a>
          </div>
        </div>
      </nav>
      <!--- Sub Menu -->
      <div class="sub-nav">
        <ul class="col">
          <li><a href="#about">About</a></li>
          <li><a href="#learn">Learn</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#meetTheTeam">Meet The Team</a></li>
          <li><a href="#socials">Socials</a></li>
          <li class="mobile-sub-close-btn"><i class="bx bx-x-circle"></i></li>
        </ul>
      </div>
      <!--- Mobile Menu -->
      <div class="mobile-nav">
        <ul class="col">
          <li class="mobile-nav-sub-btn">
            <!-- Home -->
            <a class="mobile-sub-open-btn" href="#">
              Home
              <i class="bx bxs-down-arrow"></i
            ></a>
            <!-- Mobile Sub Menu For Home -->
            <ul class="mobile-nav-sub-menu">
              <li><a href="#about">About</a></li>
              <li><a href="#learn">Learn</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#meetTheTeam">Meet The Team</a></li>
              <li><a href="#socials">Socials</a></li>
            </ul>
          </li>
          <li><a href="#">Swap</a></li>
          <li><a href="#">DonkSeal</a></li>
          <li><a href="#">Donkey King Casino</a></li>
          <li><a href="#">Donkey Mines</a></li>
          <li class="mobile-close-btn"><i class="bx bx-x-circle"></i></li>
        </ul>
      </div>
    </header>
    <!--
    ====================================== 
      Main One 
    ======================================
    -->
    <main class="one">
      <section class="col hero">
        <!-- Hero Logo -->
        <img src="/images/logo.png" alt="logo" />
        <div class="dkf-bg">
          <h1>Donkey King Finance</h1>
        </div>
      </section>
    </main>
    <!--
    ====================================== 
      Main Two 
    ======================================
    -->
    <main id="about" class="two">
      <section class="col sect-two">
        <div>
          <h2>About</h2>
          <p>
            Launched on September 1, 2021, DonkSwap is a global Binance Smart Chain exchange
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
        <div class="sect-right">
          <div class="sect-right-one">
            <h2>Native Currency</h2>
            <h3>DonkSwap Token</h3>
            <img src="/images/logoTwo.png" alt="logo-two" />
            <h3>$DST Contract</h3>
            <p>0x3969fe107bae2537cb58047159a83c33dfbd73f9</p>
          </div>
        </div>
      </section>
    </main>
    <!--
    ====================================== 
      Main Three 
    ======================================
    -->
    <main id="learn" class="three">
      <h2>Learn</h2>
      <!-- Section Three Column -->
      <section class="col sect-three">
        <!-- Section Top -->
        <div class="sect-three-top">
          <!-- White Paper -->
          <div>
            <h3>White Paper</h3>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/14uBTGH2dxkhSsgU2GeEEhsQjZecHEGeqCQsgMyUO-tU/edit"
            >
              <img src="/images/White-Paper.png" alt="white-paper" />
            </a>
          </div>
          <!-- BSC Scan -->
          <div>
            <h3>BSC Scan</h3>
            <a
              target="_blank"
              href="https://bscscan.com/token/0x3969fe107bae2537cb58047159a83c33dfbd73f9"
            >
              <img src="/images/filename-12.png" alt="white-paper" />
            </a>
          </div>
          <!-- Contract Audit -->
          <div>
            <h3>Contract Audit</h3>
            <a
              target="_blank"
              href="https://github.com/Watchtower-WTW/Public_Audits/blob/main/DONKSWAP%20Smart%20Contract%20Security%20Audit%20(2).pdf"
            >
              <img src="/images/contract-audit.png" alt="white-paper" />
            </a>
          </div>
        </div>
        <section class="sect-bottom">
          <!-- Section Three Left -->
          <div class="sect-three-left">
            <h3>Roadmap</h3>
            <img src="/images/roadmap.png" alt="roadmap" />
          </div>
          <!-- Section Three Right -->
          <div class="sect-three-right">
            <h3>Tokenomics</h3>
            <img src="/images/tek.png" alt="tek" />
          </div>
        </section>
      </section>
    </main>
    <!--
    ====================================== 
      Main Four 
    ======================================
    -->
    <main id="videos" class="four">
      <h2>Videos</h2>
      <section class="col sect-four">
        <div class="video-box-one">
          <h3>How to Buy</h3>
          <video autoplay loop muted playsinline>
            <source src="/video/howToBuy.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div class="video-box-two">
          <video autoplay loop muted playsinline>
            <source src="/video/dkf.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <h3>How To Farm</h3>
        </div>
        <div class="video-box-three">
          <h3>March Madness Charity Tournament</h3>
          <video autoplay loop muted playsinline>
            <source src="/video/dkf-marchmadness.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </section>
    </main>
    <!--
    ====================================== 
      Main Five
    ======================================
    -->
    <main id="meetTheTeam" class="five">
      <section class="col">
        <div class="exec-bio">
          <h2>Meet the Team</h2>
          <h3>Aaron Reading - CEO</h3>
          <p>
            Aaron Reading, Chief Executive Officer of Donkey King Finance, took over for the original founders after they stepped down for personal reasons. He came with over 10 years of experience building successful businesses and sales teams. Additionally, he has more than 3 years of experience investing in crypto currency projects. His drive to succeed stems from his passion to help as many people as possible reach success. 
            <a target="_blank" href="https://www.linkedin.com/in/aaron-reading-0913ab101"><i class='bx bxl-linkedin-square' ></i></a>
          </p>
          <br /><br /><br />
          <h3>Michael Cope - COO</h3>
          <p>
            Michael Cope is the Chief Operating Officer of Donkey King Finance. He has over 10 years
            of experience in sales, marketing and managing teams. Michael was an integral part of
            the takeover that kept Donkey King Finance afloat. He strongly believes in providing a
            safe place to invest in defi crypto projects as well as preserving the integrity of the
            space. With nearly 15 years of investing experience, Michael strongly believes he has
            the knowledge to help grow this project to greater heights. <a target="_blank" href="https://www.linkedin.com/in/michael-cope-b4a239a1"><i class='bx bxl-linkedin-square' ></i></a>
          </p>
        </div>
      </section>
    </main>
    <!--
    ====================================== 
      Footer
    ======================================
    -->
    <footer id="socials">
      <section class="col">
        <div class="social-item-one">
          <h4>Get in touch:</h4>
          <ul>
            <li>
              <a href="https://t.me/donkeykingfinanceofficial"><i class="bx bxl-telegram"></i></a>
            </li>
            <li>
              <a href="https://twitter.com/donkfinance?s=21"><i class="bx bxl-twitter"></i></a>
            </li>
            <li>
              <a href="https://instagram.com/donkeykingfinance?utm_medium=copy_link"></a>
                <i class="bx bxl-instagram-alt"></i></a>
            </li>
            <li>
              <a href="https://stocktwits.com/symbol/DST.X"
                ><img src="/images/stocktwits.png" alt="reddit"
              /></a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/DonkFinance/"> <i class="bx bxl-reddit"></i></a>
            </li>
          </ul>
        </div>
        <div class="social-item-two">
          <h4>Quick Links:</h4>
          <ul>
            <li><a href="https://donkswap.com/#/swap">Swap</a></li>
            <li><a href="javascript:void(0)">Privacy Policy</a></li>
          </ul>
        </div>
      </section>
    </footer>
    <!-- Bottom Footer -->
    <div class="copyrights">
      <p class="col">Copyright &copy; 2021. All Rights Reserved: Donkey King Finance</p>
    </div>
    <!--
        JavaScript Scripts File
    -->
    <script src="/js/scripts.js"></script>
  </body>
</html>
