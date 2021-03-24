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
  InvitedDisplay,
  RequestCancel,
  Row
} from "../CardElements";

const SentFriendRequest = ({ username, time }) => {
  const style = { color: "#cccccc" };

  return (
    <CardBody>
      <CardHeading style={style}>{username}</CardHeading>
      <Row>
        <TimeDisplay style={style}>{time} ago</TimeDisplay>
        <RequestCancel>cancel?</RequestCancel>
      </Row>
    </CardBody>
  );
};

export default SentFriendRequest;
