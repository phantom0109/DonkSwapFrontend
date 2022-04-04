import "./comingsooncasino.css";
import casinoGameOne from './video/Casino_Slots1.mp4';
import casinoGameThree from './video/Casino _Slots3.mp4';
import headerPhoto from './images/welcome_logo.png';

const Casino = (props) => {

  return (
    <div>
      <div className="headerPhoto-container">
        <img className="headerPhoto" src={headerPhoto} alt="" />
      </div>

      <div className="gameContainer">
        <iframe
        src="https://solutionsify.com/casinoServer/CasinoBuild/"
        frameBorder="0"
        name="Donkey King Casino"
        scrolling="no"
        className="gameIframe"
        allowFullScreen={true}
        allowTransparency={true}
        >
        </iframe>
      </div>

      <div className="vid-container">
        <div className="youtube-hugger">
          <video controls controlsList="nodownload" muted disablePictureInPicture className="casino-vid-tab"> 
            <source src={(casinoGameOne)} type="video/mp4" />
          </video>
          <a href="https://www.youtube.com/watch?v=GaUw4aCw3QU" target="_blank">See it on youtube..</a>
        </div>

        <div className="youtube-hugger">
          <video controls controlsList="nodownload" muted disablePictureInPicture className="casino-vid-tab">
            <source src={(casinoGameThree)} type="video/mp4" />
          </video>
          <a href="https://www.youtube.com/watch?v=nam7L4Z-hUc&t=3s" target="_blank">See it on youtube..</a>
        </div>
      </div>

      <div className="disclaimer">
          Welcome to Donkey King Casino!

          After long discussions between our team, our group of casino investors and the gaming company that developed our casino,
          we decided that the safest way to launch is to start with a free play version. This free play version will allow us to test
          all of the safety and security before allowing people to connect their wallets to purchase casino chips. Being that we developed
          everything from scratch, we feel that mass testing is crucial. Its not enough to have a few people testing. We need multiple tables
          and servers running simultaneously to make sure it is foolproof.
          <br></br>
          <br></br>
          We appreciate everyone understanding that this will be the safest route to take. We launched our company with the goal to end rug
          pulls while bringing safety and security back the the BSC. We cannot risk any security issues stemming from our largest utility.
          After the delays we experienced from losing developers to the Ukraine crisis, we knew that we could not risk rushing out the smart
          contracts needed to operate.
          <br></br>
          <br></br>
          We will add Donkey King Slots next, followed by our web3 integration. After we integrate Web3, we will launch Donkey King Hold 'Em.
          Finally, in May we will launch Roulette and Craps.
          <br></br>
          <br></br>
          Thank you #DonkNation for your understanding and support!
        </div>
    </div>
  );
}
export default Casino;
