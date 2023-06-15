import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li>
      <NavLink to={props.linkTo}>
        <FontAwesomeIcon className="icon" icon={props.icon} />
        <span className="caption">{props.caption}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
