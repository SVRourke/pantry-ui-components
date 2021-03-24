import React from "react";
import styled from "styled-components";
import SentRequest from "../cards/FriendCards/SentRequest";
import ReceivedRequest from "../cards/FriendCards/ReceivedRequest";

const Container = styled.div``;

export const RequestList = ({ records, filter }) => {
  let cards;
  if (filter === "received") {
    cards = records.map((r, i) => (
      <ReceivedRequest key={i} requestor={r.name} time={r.record_age} />
    ));
  } else {
    cards = records.map((r, i) => (
      <SentRequest key={i} username={r.name} time={r.record_age} />
    ));
  }
  return <>{cards}</>;
};
