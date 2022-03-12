import PropTypes from "prop-types";

const embedMine = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&vq=hd720`}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Donkey Mines"
    />
  </div>
);

embedMine.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default embedMine;