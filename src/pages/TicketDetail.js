import { Fragment } from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedTicket from "../components/tickets/HighlightedTicket";

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
      <HighlightedTicket
        text={ticket.text}
        author={ticket.author}
      ></HighlightedTicket>
      <p>{params.ticketID}</p>
      {/* <Route path="/tickets/:ticketID/comments" element={<Comments />}></Route> */}
    </Fragment>
  );
};

export default TicketDetail;
