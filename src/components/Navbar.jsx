import reactLogo from "../imgs/react-icon.png";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img src={reactLogo} alt="react-icon" className="nav-icon" />
      <h3 className="nav-logo-text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler-light">Light</p>
        <div className="toggler-slider" onClick={props.toggleDarkMode}>
          <div className="toggler-slider-circle"></div>
        </div>
        <p className="toggler-dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
