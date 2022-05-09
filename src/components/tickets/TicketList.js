import { Fragment } from "react";

import TicketItem from "./TicketItem";
import classes from "./TicketList.module.css";

const TicketList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.tickets.map((ticket) => (
          <TicketItem
            key={ticket.id}
            id={ticket.id}
            author={ticket.author}
            text={ticket.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TicketList;
