import "./styles.css";
import PropTypes from 'prop-types';

function CharacterCard(props) {

  const {
    name,
    image,
    status,
    species,
    origin,
    location,
  } = props;
  
  return (
    <article className="characterCard">
      <div className="characterImagen">
        <img
          src={image}
          alt={name}
        />
      </div>
      <div className="characterContent">
        <div className="section">
          <h2>{name}</h2>
          <span className="status">
            <span className={`status__icon status__alive`}></span>
            {`${status} - ${species}`}
          </span>
        </div>
        <div className="section">
          <span className="text-gray">Last known location:</span>
          <a href={location.url}>{location.name}</a>
        </div>
        <div className="section">
          <span className="text-gray">First seen in:</span>
          <a href={origin.url}>{origin.name}</a>
        </div>
      </div>
    </article>
  )
}

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  origin: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
}

export default CharacterCard;