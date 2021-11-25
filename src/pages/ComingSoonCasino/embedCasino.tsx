import PropTypes from "prop-types";

const embedCasino = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      className="vid-iframe"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&vq=hd720`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Donkey King Casino"
    />
  </div>
);

embedCasino.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default embedCasino;