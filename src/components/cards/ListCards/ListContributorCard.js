import {
  CardBody,
  CardHeading,
  MemberCount,
  TimeDisplay,
  Row
} from "../CardElements";

const ListCard = ({ username, time, itemCount }) => {
  return (
    <CardBody>
      <CardHeading>{username}</CardHeading>
      <TimeDisplay>{time}</TimeDisplay>
      <MemberCount>{itemCount} items</MemberCount>
    </CardBody>
  );
};

export default ListCard;
