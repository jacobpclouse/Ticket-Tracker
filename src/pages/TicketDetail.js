import { Fragment } from "react";
import { useParams } from "react-router-dom";

const TicketDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.ticketID}</p>
    </Fragment>
  );
};

export default TicketDetail;
