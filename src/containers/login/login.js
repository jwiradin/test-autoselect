import React, { Component } from 'react';
import Authenticate from "../../services/authenticate";
import {Redirect} from "react-router-dom";

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {redirectToReferrer : false};

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogin() {
    Authenticate.authenticate(()=>{
      this.setState({redirectToReferrer:true});
    });
  }

  handleLogout(){
    Authenticate.signout(()=>{
      this.setState({redirectToReferrer:false});
    });
  }

  render() {
    let {from} = this.props.location.state || {from: {pathnamme: "/"}};

    let {redirectToReferrer} = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;
    if(Authenticate.isAuthenticated) return <div><div>Welcome {Authenticate.user.name}</div>
      <button onClick={this.handleLogout}>Log out</button>
    </div>
    return (
      <div>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
