import TicketList from "../components/tickets/TicketList";

const Dummy_Tickets = [
  { id: "t1", author: "Yas", text: "Problems with using react router v5" },
  { id: "q2", author: "Nur", text: "Switch component not working" },
];

const AllTickets = () => {
  return <TicketList tickets={Dummy_Tickets} />;
};

export default AllTickets;
