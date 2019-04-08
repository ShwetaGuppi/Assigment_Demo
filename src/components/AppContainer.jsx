import * as React from "react";
import axios from "axios";
import "../css/custom.css";
import { Message, Input, Button, Form } from "semantic-ui-react";
import AppComponent from "./AppComponent";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      requiredData: {},
      showModal: false,
      isEmpty: false
    };
  }
  // Make a request for a users data - Promise based HTTP client for the browser and node.js
  // The componentDidMount() method runs after the component output has been rendered to the DOM.
  componentDidMount() {
    axios.get(`http://localhost:3000/users`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  onSearch() {
    // To handle value after Clicking Search Button
    var userInput = document.getElementById("usernameInput");
    var userValue = userInput.value;

    var user = this.state.users.filter(e => {
      return e.username == userValue;
    });
    this.setState({
      requiredData: user[0],
      showModal: true,
      isEmpty: userValue.length
    });
  }
  // Renders the component
  render() {
    return (
      <div className="container">
        <div>
          <div className="innerDiv">
            <div class="jumbotron">
              <h2 class="text-center">GitHub Details</h2>
              <Form>
                <Form.Field required>
                  <label>Username</label>
                  <Input placeholder="Search..." id="usernameInput" />
                </Form.Field>
                <Button primary onClick={() => this.onSearch()}>
                  Search
                </Button>
              </Form>
            </div>
            {!this.state.isEmpty ? (
              <Message warning header="Enter a value" />
            ) : this.state.showModal && this.state.requiredData ? (
              <AppComponent data={this.state.requiredData} />
            ) : (
              <Message error header="Invalid value" />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default AppContainer;
