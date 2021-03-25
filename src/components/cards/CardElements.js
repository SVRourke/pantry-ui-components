import styled from "styled-components";

const CardBody = styled.div`
  /* outline-style: dotted;
  outline-color: red; */

  padding: 1.5rem 2rem 1rem 0;
  width: 100%;
`;

const CardHeading = styled.h3`
  font-size: 2.7rem;
  font-weight: 600;
  color: inherit;
`;

const UnFriend = styled.button`
  border: none;
  background: none;
  color: var(--red-color);
  font-weight: 800;
  margin-left: 0.4rem;

  &:hover {
    color: red;
    transition: 300ms;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: baseline;
  color: inherit;
`;

const MutualLists = styled.p`
  font-weight: 800;
`;
const MemberCount = styled.p`
  font-weight: 800;
`;
const TimeDisplay = styled.p`
  font-weight: 500;
  color: inherit;
`;

const RequestorDisplay = styled.p`
  font-weight: 500;
`;

const AcceptButton = styled.button`
  background: none;
  border: none;
  color: var(--green-color);
  padding-right: 1rem;
`;
const DeclineButton = styled.button`
  background: none;
  border: none;
  color: var(--red-color);
`;

const InvitedDisplay = styled.p``;

const RequestCancel = styled.button`
  border: none;
  background: none;
  color: var(--red-color);
  margin-left: 0.5rem;

  &:hover {
    color: red;
    transition: 300ms;
  }
`;
const AcquiredItemButton = styled.button``;
const UnavailableItemButton = styled.button``;
const EditItemButton = styled.button``;
const TrashItemButton = styled.button``;

export {
  UnFriend,
  MutualLists,
  CardBody,
  Row,
  CardHeading,
  RequestCancel,
  TimeDisplay,
  AcceptButton,
  DeclineButton,
  AcquiredItemButton,
  UnavailableItemButton,
  EditItemButton,
  TrashItemButton,
  RequestorDisplay,
  MemberCount,
  InvitedDisplay
};
