import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar=dark bg-dark">
          <div>
            <a href="http://localhost:3000" className="navbar-brand text-white">
              Todo Management Application
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/todos" className="nav-link text-white">
                  Todos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link text-white">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default HeaderComponent;
