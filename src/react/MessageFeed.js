import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import MessageList from "./components/MessageList";
import CreateMessageForm from "./components/CreateMessageForm";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <CreateMessageForm />
        <MessageList isUserList={false} />
        {/* create message feature component name CreateMessageForm*/}
        {/*list of messages, how many messages per page? somewhat like todos?*/}
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
