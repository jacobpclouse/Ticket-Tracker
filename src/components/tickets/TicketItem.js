import classes from "./TicketItem.module.css";
import { Link } from "react-router-dom";

const TicketItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      {/* <Link to={`/tickets/${props.id}`}>
        <button className={classes.btn}>View Fullscreen</button>
      </Link> */}
      <Link to={`/tickets/${props.id}`} className="btn">
        View Fullscreen
      </Link>
    </li>
  );
};

export default TicketItem;
