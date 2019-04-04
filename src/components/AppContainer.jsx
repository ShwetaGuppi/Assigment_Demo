import * as React from "react";
import axios from "axios";
import "../css/custom.css";
import { Message, Input, Button, Form, Modal } from "semantic-ui-react";

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
  componentDidMount() {
    axios.get(`http://localhost:3000/users`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  onSearch() {
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
              <Message info>
                {this.state.requiredData.bio ? this.state.requiredData.bio : ""}{" "}
              </Message>
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
