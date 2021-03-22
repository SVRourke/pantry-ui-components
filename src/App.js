import "./styles.css";
import FriendCard from "./components/cards/FriendCard";
import InviteCard from "./components/cards/InviteCard";
import SentListInvite from "./components/cards/SentListInvite";

// just for displaying cards
import styled from "styled-components";

const Column = styled.div`
  width: calc(500px + 4rem);
  height: 100%;
  margin: 0 auto;
  background-color: white;
  padding: 5rem 2rem;
`;
export default function App() {
  return (
    <Column>
      <br />
      <p>Friend Card</p>
      <FriendCard name={"John Smith"} time={"3 weeks"} listcount={3} />
      <br />
      <p>Recieved List Invite</p>
      <InviteCard
        listname={"Groceries"}
        invitor={"Rain Lark"}
        time={"15 minutes"}
        membercount={3}
      />

      <br />
      <p>Sent List Invite</p>
      <SentListInvite
        username={"Maya Lark"}
        listname={"Groceries"}
        invitor={"Rain Lark"}
        time={"15 minutes"}
        membercount={3}
      />
    </Column>
  );
}
