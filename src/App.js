import "./styles.css";
import FriendCard from "./components/cards/FriendCards/FriendCard";
import ListCard from "./components/cards/ListCards/ListCard";

import InviteCard from "./components/cards/ListCards/InviteCard";
import SentListInvite from "./components/cards/ListCards/SentListInvite";
import SentFriendRequest from "./components/cards/FriendCards/SentRequest";
import ReceivedFriendRequest from "./components/cards/FriendCards/ReceivedRequest";
import ListContributorCard from "./components/cards/ListCards/ListContributorCard";
import RequestListContainer from "./components/requestList/RequestListContainer";

import styled from "styled-components";

const Column = styled.div`
  width: calc(500px + 4rem);
  height: 100%;
  margin: 0 auto;
  background-color: white;
  padding: 5rem 2rem;
`;

export default function App() {
  const records = [
    { name: "asda", record_age: "1 day", type: "sent" },
    { name: "sdvsv", record_age: "30 minutes", type: "received" },
    { name: "rfrg", record_age: "1 month", type: "sent" },
    { name: "rtg", record_age: "2 weeks", type: "sent" },
    { name: "weq", record_age: "5 days", type: "sent" },
    { name: "ert", record_age: "3 minuts", type: "received" }
  ];
  return (
    <Column>
      <RequestListContainer records={records} />
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

      <br />
      <p>Friend Card</p>
      <FriendCard name={"John Smith"} time={"3 weeks"} listcount={3} />

      <br />
      <p>Sent Friend request</p>
      <SentFriendRequest username={"Jake Parsons"} time={"15 minutes"} />

      <br />
      <p>received friend request</p>
      <ReceivedFriendRequest requestor={"Joe Schmo"} time={"10 days"} />

      <br />
      <p>List Card</p>
      <ListCard
        listname={"Weekend Cookout"}
        latestactivity={"3 minutes"}
        membercount={5}
      />
      <ListCard
        listname={"Weekend Cookout"}
        latestactivity={"3 hours"}
        membercount={5}
      />
      <ListCard
        listname={"Weekend Cookout"}
        latestactivity={"3 days"}
        membercount={5}
      />
      <ListCard
        listname={"Weekend Cookout"}
        latestactivity={"3 weeks"}
        membercount={5}
      />

      <br />
      <p>List Contributor Card</p>
      <ListContributorCard
        username={"Rain Lark"}
        time={"10 Weeks"}
        itemCount={15}
      />
    </Column>
  );
}
