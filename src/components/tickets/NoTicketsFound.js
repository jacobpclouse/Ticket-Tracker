import classes from "./NoTicketsFound.module.css";
import { Link } from "react-router-dom";

const NoTicketsFound = () => {
  return (
    <div className={classes.notickets}>
      <p>No Tickets found!</p>
      <Link className="btn" to="/new-ticket">
        Add a Ticket
      </Link>
    </div>
  );
};

export default NoTicketsFound;
