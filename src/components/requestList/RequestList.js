import React from "react";
import styled from "styled-components";
import Request from "../cards/FriendCards/Request";

const Container = styled.div``;

export const RequestList = (props) => {
  const { records, accept, decline, cancel } = props;
  const cards = records.map((r, i) => <Request key={i} record={r} />);

  return <>{cards}</>;
};

// records
// accept
// decline
// cancel
