import React, { Component } from "react";
import RequestListControls from "./RequestListControls";
import Request from "../cards/FriendCards/Request";

class RequestListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "received" };
  }

  filterChange = (event) => {
    this.setState({
      filter: event.target.id
    });
  };

  handleAccept = (event) => {
    console.log(`${event} Request Accepted`);
  };
  handleDecline = (event) => {
    console.log("Request Declined");
  };
  handleCancel = (event) => {
    console.log("Request Cancelled");
  };

  render() {
    const { records } = this.props;
    const filteredRecords = records.filter((r) => r.type === this.state.filter);
    const cards = filteredRecords.map((r, i) => {
      return (
        <Request
          key={i}
          record={r}
          accept={this.handleAccept}
          decline={this.handleDecline}
          cancel={this.handleCancel}
        />
      );
    });

    return (
      <>
        <RequestListControls
          filter={this.state.filter}
          cb={this.filterChange}
        />

        {cards}
      </>
    );
  }
}

export default RequestListContainer;
