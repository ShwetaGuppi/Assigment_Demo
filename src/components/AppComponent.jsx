import * as React from "react";
import "../css/custom.css";
import { Table } from "semantic-ui-react";

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  // Renders the component
  render() {
    return (
      <Table celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Display Name</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{this.props.data.name}</Table.Cell>
            <Table.Cell>{this.props.data.display_name}</Table.Cell>
            <Table.Cell>{this.props.data.title}</Table.Cell>
            <Table.Cell>{this.props.data.description}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}
export default AppComponent;
