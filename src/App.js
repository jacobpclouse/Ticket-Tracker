import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import AllTickets from "./pages/AllTickets";
import NewTickets from "./pages/NewTickets";
import TicketDetail from "./pages/TicketDetail";
function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/tickets" />
      </Route>
      <Route exact path="/tickets">
        <AllTickets />
      </Route>
      <Route exact path="/ticket/:ticketID">
        <TicketDetail />
      </Route>
      <Route exact path="/new-ticket">
        <NewTickets />
      </Route>
    </Switch>
  );
}

export default App;
