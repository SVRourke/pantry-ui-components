import { TimeDisplay, Row, CardHeading } from "../CardElements";

import styled from "styled-components";

const CardBody = styled.div`
  padding: 1.5rem 2rem 1rem 0;
  width: 100%;
  color: ${(props) => (props.typeStyle === "sent" ? "#cacaca" : "#000")};
`;
const RequestCancel = styled.button`
  border: none;
  background: none;
  color: var(--red-color);
  padding-left: 1rem;
  display: ${(props) => (props.displayType === "sent" ? "block" : "none")};

  &:hover {
    color: red;
    transition: 300ms;
  }
`;
const AcceptButton = styled.button`
  background: none;
  border: none;
  color: var(--green-color);
  padding-right: 1rem;
  display: ${(props) => (props.displayType === "sent" ? "none" : "block")};
`;
const DeclineButton = styled.button`
  background: none;
  border: none;
  color: var(--red-color);
  display: ${(props) => (props.displayType === "sent" ? "none" : "block")};
`;

const Request = (props) => {
  const {
    record: {
      id,
      requestor_id,
      requestor_name,
      requestee_name,
      type,
      record_age
    },
    accept,
    decline,
    cancel
  } = props;

  const heading = type === "sent" ? requestee_name : requestor_name;

  return (
    <CardBody typeStyle={type}>
      <CardHeading>{heading}</CardHeading>
      <Row>
        <TimeDisplay>{record_age} ago</TimeDisplay>
        <RequestCancel displayType={type} onClick={(event) => cancel(event)}>
          cancel?
        </RequestCancel>
      </Row>

      <Row>
        <AcceptButton displayType={type} onClick={(event) => accept(event)}>
          accept
        </AcceptButton>
        <DeclineButton displayType={type} onClick={(event) => decline(event)}>
          decline
        </DeclineButton>
      </Row>
    </CardBody>
  );
};

export default Request;
