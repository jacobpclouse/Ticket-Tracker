import TicketForm from "../components/tickets/TicketForm";
import { useNavigate } from "react-router-dom";

const NewTickets = () => {
  const navigate = useNavigate();
  const addTicketHandler = (TicketData) => {
    console.log(TicketData);
    navigate("/tickets");
  };
  return <TicketForm onAddTicket={addTicketHandler} />;
};

export default NewTickets;
