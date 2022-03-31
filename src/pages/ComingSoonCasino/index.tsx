import "./comingsooncasino.css";
import casinoGameOne from './video/Casino_Slots1.mp4'
import casinoGameThree from './video/Casino _Slots3.mp4'
import headerPhoto from './images/photo_2022-03-30 19.48.13.jpeg'




const Casino = (props) => {

  return (
    <div>
      <div className="headerPhoto-container">
        <img className="headerPhoto" src={headerPhoto} alt="" />
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
    </div>
  );
}
export default Casino;
