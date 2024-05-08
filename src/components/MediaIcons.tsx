import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const MediaIcons = () => {
  // Define your media icons here
  return (
    <div className="flex flex-col absolute gap-y-5 mt-5 w-48 z-10 border p-5 rounded-tr-lg rounded-bl-lg rounded-br-lg">
      <span className="text-2xl text-white g items-center grid grid-cols-2">
        <FontAwesomeIcon icon={faGithub} />
        <a href="https://github.com/sflowers51" className="text-sm" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </span>
      <span className="text-2xl text-white items-center grid grid-cols-2 ">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:samf3653@gmail.com" title="samf3653@gmail.com" className="text-sm">
          Gmail
        </a>
      </span>
      <span className="text-2xl text-white items-center grid grid-cols-2  ">
        <FontAwesomeIcon icon={faPhone} />
        <p className="text-sm">
          615-670-7342
        </p>
      </span>
      <span className="text-2xl text-white items-center grid grid-cols-2">
        <FontAwesomeIcon icon={faLinkedin} />
        <a href="https://linkedin.com/in/samuel-flowers-96ba72281" className="text-sm" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </span>
    </div>
  );
};

export default MediaIcons;
