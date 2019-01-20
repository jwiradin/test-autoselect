import React, { Component } from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Grid} from "react-bootstrap";
import Header, {Main} from "./containers/menu/header";
import Footer from "./containers/menu/footer";
import Authenticate from "./services/authenticate";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userDetail : {
          validated: false,
          name: ""
        }
    }
    this.updateAuthentication = this.updateAuthentication.bind(this);

    Authenticate.setCallback(this.updateAuthentication);
  }

  updateAuthentication = (user) =>{
    this.setState({user:user});
  }

  render() {
    let  {user} = {...this.state};
    return (
      <HashRouter>
        <Grid>
          <Header />
          <Main />
          <Footer user={user} />
        </Grid>
      </HashRouter>
    );
  }
}

export default App;
