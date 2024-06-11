import reactLogo from "../imgs/react-icon.png";

function Navbar() {
  return (
    <nav>
      <img src={reactLogo} alt="react-icon" className="nav-icon" />
      <h3 className="nav-logo-text">ReactFacts</h3>
      <h4 className="nav-title">React course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
