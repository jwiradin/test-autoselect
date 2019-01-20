import React, { Component } from 'react';
import { Grid, Tabs, Tab, Row } from "react-bootstrap";
import General from "./general";

class AccDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.handleTabSelect = this.handleTabSelect.bind(this);
  }

  handleTabSelect(key) {
    this.setState({ key });
  }

  componentWillReceiveProps(props) {
    this.setState({ acc: props.acc });
  }

  render() {
    const { acc, error, isLoading } = this.state;


    if (error) {
      return <Grid>Error: {error.message}</Grid>
    } else if (isLoading || !acc) {
      return <Grid>Loading ....</Grid>
    } else {
      return (
        <form>
          <Tabs activeKey={this.state.key} id="accTab" onSelect={this.handleTabSelect} className="nav-pills">
            <Tab eventKey={1} title="General">
              <General acc={acc} />
            </Tab>
            <Tab eventKey={2} title="Clearing">
              Clearing
            </Tab>
            <Tab eventKey={3} title="End-of-Day">
              End of Day
            </Tab>
            <Tab eventKey={4} title="Financials">
              Financials
            </Tab>
            <Tab eventKey={5} title="Admin">
              Admin
            </Tab>
            <Tab eventKey={6} title="Contact">
              Contact
            </Tab>
            <Tab eventKey={7} title="BROKER">
              BROKER
            </Tab>
            <Tab eventKey={8} title="Address">
              Addres
            </Tab>
            <Tab eventKey={9} title="Reports">
              Reports
            </Tab>
          </Tabs>
        </form>
      );
    }
  }
}

export default AccDetail;
