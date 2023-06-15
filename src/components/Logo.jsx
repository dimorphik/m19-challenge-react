import { NavLink } from "react-router-dom";

const Logo = (props) => {
  return (
    <li className="logo">
      <NavLink to="/">
        <img src="./media/images/gulp-logo-light.png" alt="Gulp Roast. Click for home." />
      </NavLink>
    </li>
  );
};

export default Logo;
