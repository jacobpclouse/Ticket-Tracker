import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import TicketItem from "./TicketItem";
import classes from "./TicketList.module.css";

const sortTickets = (tickets, ascending) => {
  return tickets.sort((ticketA, ticketB) => {
    if (ascending) {
      return ticketA.id > ticketB.id ? 1 : -1;
    } else {
      return ticketA.id < ticketB.id ? 1 : -1;
    }
  });
};

const TicketList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedTickets = sortTickets(props.tickets, isSortingAscending);

  const changeSortingHandler = () => {
    navigate("/tickets?sort=" + (isSortingAscending ? "desc" : "asc"));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "desc" : "asc"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedTickets.map((ticket) => (
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
