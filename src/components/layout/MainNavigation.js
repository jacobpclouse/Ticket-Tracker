import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Tickets</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "white" : "" })}
              to="/tickets"
            >
              All Tickets
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "white" : "" })}
              to="/new-ticket"
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
