import { Route, Routes } from "react-router-dom";
import AllTickets from "./pages/AllTickets";
import NewTickets from "./pages/NewTickets";
import TicketDetail from "./pages/TicketDetail";
import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import Errorpage from "./pages/Errorpage";
function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllTickets />}></Route>
        <Route exact path="tickets" element={<AllTickets />}></Route>
        <Route path="tickets/:ticketID" element={<TicketDetail />}>
          <Route path="comments" element={<Comments />}></Route>
        </Route>
        <Route path="new-ticket" element={<NewTickets />}></Route>
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Layout>
  );
}

export default App;
