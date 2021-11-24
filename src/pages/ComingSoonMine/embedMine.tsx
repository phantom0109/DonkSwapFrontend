import PropTypes from "prop-types";

const embedMine = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Donkey King Casino"
    />
  </div>
);

embedMine.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default embedMine;