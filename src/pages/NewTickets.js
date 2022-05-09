import TicketForm from "../components/tickets/TicketForm";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addTicket } from "../lib/api";
import { useEffect } from "react";

const NewTickets = () => {
  const { sendRequest, status } = useHttp(addTicket);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "completed") {
      navigate("/tickets");
    }
  }, [status, navigate]);

  const addTicketHandler = (TicketData) => {
    sendRequest(TicketData);
  };
  return (
    <TicketForm
      isLoading={status === "pending"}
      onAddTicket={addTicketHandler}
    />
  );
};

export default NewTickets;
