import React from "react";

function NavLink({ onSubmit }) {
  const handleClick = (event) => {
    event.preventDefault();

    let value = event.target.firstChild.textContent;
    onSubmit(value);
  };
  return (
    <nav className="nav-link-container">
      <ul className="nav-links">
        <li className="nav-link">
          <a onClick={handleClick} href="/" value="car">
            car
          </a>
        </li>
        <li className="nav-link">
          <a onClick={handleClick} href="/">
            home
          </a>
        </li>
        <li className="nav-link">
          <a onClick={handleClick} href="/">
            laptop
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default NavLink;
