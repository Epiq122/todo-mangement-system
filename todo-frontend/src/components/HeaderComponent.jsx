import { NavLink, useNavigate } from "react-router-dom";
import { isUserLoggedIn, logout } from "../services/AuthService.js";

const HeaderComponent = () => {
  const isAuthenticated = isUserLoggedIn();
  const navigator = useNavigate();

  function handleLogout() {
    logout();
    navigator("/logout");
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="http://localhost:3000" className="navbar-brand text-white">
              Todo Management Application
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink to="/todos" className="nav-link ">
                    Todos
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <ul className="navbar-nav">
            {!isAuthenticated && (
              <li className="nav-item">
                <NavLink to="/register" className="nav-link ">
                  Register
                </NavLink>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link ">
                  Login
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default HeaderComponent;
