import Logo from "./Logo";
import NavItem from "./NavItem";
import { faCoffee, faFireFlameCurved, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <Logo />
          <NavItem linkTo="./about" icon={faCoffee} caption="About" />
          <NavItem linkTo="./products" icon={faFireFlameCurved} caption="Products" />
          <NavItem linkTo="./" icon={faPhone} caption="Contact" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
