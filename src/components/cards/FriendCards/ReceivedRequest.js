import {
  CardBody,
  CardHeading,
  UnFriend,
  TimeDisplay,
  MutualLists,
  MemberCount,
  RequestorDisplay,
  AcceptButton,
  DeclineButton,
  Row
} from "../CardElements";

const ReceivedFriendRequest = ({ requestor, time }) => {
  return (
    <CardBody>
      <CardHeading>{requestor}</CardHeading>
      <TimeDisplay>{time} ago</TimeDisplay>
      <Row>
        <AcceptButton>accept</AcceptButton>
        <DeclineButton>decline</DeclineButton>
      </Row>
    </CardBody>
  );
};

export default ReceivedFriendRequest;
