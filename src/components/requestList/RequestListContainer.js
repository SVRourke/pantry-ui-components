import React, { Component } from "react";
import RequestListControls from "./RequestListControls";
import { RequestList } from "./RequestList";

import SentRequest from "../cards/FriendCards/SentRequest";
import ReceivedRequest from "../cards/FriendCards/ReceivedRequest";

class RequestListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "received" };
  }

  handleClick = (event) => {
    this.setState({
      filter: event.target.id
    });
  };

  render() {
    const recs = this.props.records.filter((r) => r.type !== this.state.filter);

    return (
      <>
        <RequestListControls filter={this.state.filter} cb={this.handleClick} />
        <RequestList records={recs} filter={this.state.filter} />
      </>
    );
  }
}

export default RequestListContainer;
