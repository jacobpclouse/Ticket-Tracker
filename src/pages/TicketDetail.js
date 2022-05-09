import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import HighlightedTicket from "../components/tickets/HighlightedTicket";
import { useMatch } from "react-router-dom";
const Dummy_Tickets = [
  { id: "t1", author: "Yas", text: "Problems with using react router v5" },
  { id: "q2", author: "Nur", text: "Switch component not working" },
];

const TicketDetail = () => {
  const params = useParams();

  const ticket = Dummy_Tickets.find((ticket) => ticket.id === params.ticketID);

  if (ticket === undefined) {
    return <h1>No tickets found</h1>;
  }

  return (
    <Fragment>
      <HighlightedTicket text={ticket.text} author={ticket.author} />
      <div className="centered">
        <Link className="btn--flat" to="comments">
          Load Comments
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default TicketDetail;
