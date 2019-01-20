import React, { Component } from 'react';
import axios from 'axios';
import AsyncSelect from 'react-select/lib/Async';
import AccDetail from "./accDetail";
import {Row, Grid, Col, ControlLabel} from "react-bootstrap";

const URL= "http://sydpc1759.gbst.net:8080/api/acc/lookup/code/";
const URLACC= "http://sydpc1759.gbst.net:8080/api/acc/";

class Acc extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:"",
      state:"",
      result:{value:"", label:""},
      error:""
    }
    this.loadOptions = this.loadOptions.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  loadOptions = (inputValue, callback) =>{
    axios.get(`${URL}${inputValue}`, {
      'header': 'Access-Control-Allow-Origin',
    })
        .then(({data})=>{
            var result = data.map(r => {return {value: r.AccId, label: r.Acc}});
            callback(result);
        })
        .catch((error)=> {

        });       
  }

  handleInputChange = (newValue: string) => {
    const inputValue = newValue;
    this.setState({inputValue},
      );
    return inputValue;
    }

  handleChange = (result)=> {

    //get acc detail
    axios.get(`${URLACC}${result.value}`, {
        'header': 'Access-Control-Allow-Origin',
        })
        .then(({data})=>{
            this.setState({acc : data,
                result : result},
                );
        })  
  }

  render() {
    const selection = 
                        <Col md={4}>
                            <AsyncSelect
                                placeholder="Select an account"
                                loadOptions={this.loadOptions} 
                                onInputChange={this.handleInputChange}
                                onChange={this.handleChange}
                            />
                        </Col>

    const name = () => {
        if(this.state.acc){
            return <Col><ControlLabel>{this.state.acc.accName}</ControlLabel></Col>
        }
        else{
            return <Col></Col>
        }
    }
    
    const acc = () => {
        if(this.state.acc){
            return <AccDetail acc={this.state.acc}/>
        }
        else{
            return <p/>
        }
    }

    return (
            <Grid>
                <Row>{selection}{name()}</Row>
                <Row><Col></Col></Row>
                <Row><Col>{acc()}</Col></Row>
            </Grid>
    );
  }
}

export default Acc;
