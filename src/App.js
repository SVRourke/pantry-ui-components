import "./styles.css";
import FriendCard from "./components/cards/FriendCards/FriendCard";
import ListCard from "./components/cards/ListCards/ListCard";

import InviteCard from "./components/cards/ListCards/InviteCard";
import SentListInvite from "./components/cards/ListCards/SentListInvite";
import ListContributorCard from "./components/cards/ListCards/ListContributorCard";
import RequestListContainer from "./components/requestList/RequestListContainer";

import Request from "./components/cards/FriendCards/Request";
import styled from "styled-components";

const Column = styled.div`
  width: calc(500px + 4rem);
  height: 100%;
  margin: 0 auto;
  background-color: white;
  padding: 5rem 2rem;
`;

export default function App() {
  const testRecord = [
    {
      id: 3,
      requestor_id: 5,
      requestor_name: "Jake",
      requestee_name: "Sam",
      type: "received",
      record_age: "1 days"
    },
    {
      id: 6,
      requestor_id: 1,
      requestor_name: "Sam",
      requestee_name: "Autumn",
      type: "sent",
      record_age: "1 hour"
    },
    {
      id: 2,
      requestor_id: 1,
      requestor_name: "Sam",
      requestee_name: "Maya",
      type: "sent",
      record_age: "1 hour"
    },
    {
      id: 3,
      requestor_id: 5,
      requestor_name: "Rain",
      requestee_name: "Sam",
      type: "received",
      record_age: "1 days"
    }
  ];

  return (
    <Column>
      <br />
      <p>Friend Request Filtered List</p>
      <RequestListContainer records={testRecord} />
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
      <Request record={testRecord[1]} />

      <br />
      <p>received friend request</p>
      <Request record={testRecord[0]} />

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
