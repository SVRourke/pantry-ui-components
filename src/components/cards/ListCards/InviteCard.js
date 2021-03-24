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

const InviteCard = ({ listname, invitor, time, membercount }) => {
  return (
    <CardBody>
      <CardHeading>{listname}</CardHeading>
      <RequestorDisplay>{invitor}</RequestorDisplay>
      <MemberCount>{membercount} members</MemberCount>
      <Row>
        <AcceptButton>accept</AcceptButton>
        <DeclineButton>decline</DeclineButton>
      </Row>
    </CardBody>
  );
};

export default InviteCard;
