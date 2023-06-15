import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <footer>
      <p>&copy; 2022 Gulp Roast Coffee. All rights reserved.</p>
      <ul>
        <li>
          <a href="https://facebook.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
            <span className="sr-only lg-only">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
            <span className="sr-only lg-only">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
            <span className="sr-only lg-only">Instagram</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
