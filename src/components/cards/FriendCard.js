import {
  CardBody,
  CardHeading,
  UnFriend,
  TimeDisplay,
  MutualLists,
  Row
} from "./CardElements";
const FriendCard = ({ name, time, listcount }) => {
  return (
    <CardBody>
      <CardHeading>{name}</CardHeading>
      <Row>
        <TimeDisplay>{time}</TimeDisplay>
        <UnFriend>unfriend?</UnFriend>
      </Row>
      <MutualLists>{listcount} lists</MutualLists>
    </CardBody>
  );
};

export default FriendCard;
