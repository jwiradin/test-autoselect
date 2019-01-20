import React, { Component } from 'react';
import {Route, Switch, Link, Redirect} from "react-router-dom";
import Home from "./home";
import Acc from "../account/acc";
import Login from "../login/login";
import Authenticate from "../../services/authenticate";


import {Nav, Navbar, NavItem} from "react-bootstrap"

const Header = () =>(
    <Navbar>
        <Nav>
        <NavItem eventKey={1}><Link to='/'>Home</Link></NavItem>
        <NavItem eventKey={2}><Link to='/login'>Login</Link></NavItem>
        <NavItem eventKey={3}><Link to='/account'>Account</Link></NavItem>
        </Nav>
    </Navbar>
)

function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
            Authenticate.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

export const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute path='/account' component={Acc} />
    </Switch>
  )

export default Header;