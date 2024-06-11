import reactLogo from "../imgs/react-icon.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={reactLogo} alt="react-icon" />
      <h3>ReactFacts</h3>
      <h4>React course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
