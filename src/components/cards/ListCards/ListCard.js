import {
  CardBody,
  CardHeading,
  MemberCount,
  TimeDisplay,
  Row
} from "../CardElements";

const ListCard = ({ listname, latestactivity, membercount }) => {
  const timeType = latestactivity.split(" ")[1];
  let color = "";

  switch (timeType) {
    case "minutes":
      color = "var(--green-color)";
      break;
    case "hours":
      color = "var(--blue-color)";
      break;
    case "days":
      color = "var(--offBlack-color)";
      break;
    default:
      color = "var(--gray-color)";
  }

  return (
    <CardBody>
      <CardHeading>{listname}</CardHeading>
      <TimeDisplay style={{ color: color }}>
        activity {latestactivity} ago
      </TimeDisplay>
      <MemberCount>{membercount} members</MemberCount>
    </CardBody>
  );
};

export default ListCard;
