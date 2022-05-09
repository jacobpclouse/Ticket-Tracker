import NoTicketsFound from "../components/tickets/NoTicketsFound";
import TicketList from "../components/tickets/TicketList";
import useHttp from "../hooks/use-http";
import { getAllTickets } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useEffect } from "react";

const AllTickets = () => {
  const {
    sendRequest,
    status,
    data: loadedTickets,
    error,
  } = useHttp(getAllTickets, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (
    status === "completed" &&
    (!loadedTickets || loadedTickets.length === 0)
  ) {
    return <NoTicketsFound />;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  return <TicketList tickets={loadedTickets} />;
};

export default AllTickets;
