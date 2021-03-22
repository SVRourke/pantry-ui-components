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
} from "./CardElements";

const SentListInvite = ({ username, listname, time }) => {
  const style = { color: "#cccccc" };

  return (
    <CardBody>
      <CardHeading style={style}>{username}</CardHeading>
      <Row>
        <InvitedDisplay style={style}>{listname}</InvitedDisplay>
        <RequestCancel>cancel?</RequestCancel>
      </Row>
      <TimeDisplay style={style}>{time} ago</TimeDisplay>
    </CardBody>
  );
};

export default SentListInvite;
