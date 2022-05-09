import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import HighlightedTicket from "../components/tickets/HighlightedTicket";
import useHttp from "../hooks/use-http";
import { getSingleTicket } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const TicketDetail = () => {
  const params = useParams();
  const {
    sendRequest,
    status,
    data: loadedTicket,
    error,
  } = useHttp(getSingleTicket, true);

  const { ticketID } = params;

  useEffect(() => {
    sendRequest(ticketID);
  }, [sendRequest, ticketID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedTicket.text) {
    return <h1>No tickets found</h1>;
  }

  return (
    <Fragment>
      <HighlightedTicket
        text={loadedTicket.text}
        author={loadedTicket.author}
      />
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
