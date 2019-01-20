import React, { Component } from 'react';
import Authenticate from "../../services/authenticate";
import {Row,Col} from "react-bootstrap";

class Footer extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {user: props.user};
  }
  
  componentWillReceiveProps(props){
    this.setState = {user: props.user};
  }
    render() {
      const user = this.state.user;

    return (
        <Row>
          <Col>Footer Logged in as </Col>
        </Row>
    );
  }
}

export default Footer;