import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const MediaIcons = () => {
  // Define your media icons here
  return (
    <div className="flex items-center space-x-4">
      {/* Your media icons go here */}
      <span className="text-xl text-gray-500">
        <FontAwesomeIcon icon={faFacebook} />
      </span>
      <span className="text-xl text-gray-500">
        <FontAwesomeIcon icon={faTwitter} />
      </span>
      <span className="text-xl text-gray-500">
        <FontAwesomeIcon icon={faInstagram} />
      </span>
      <span className="text-xl text-gray-500">
        <FontAwesomeIcon icon={faLinkedin} />
      </span>
    </div>
  );
};

export default MediaIcons;
