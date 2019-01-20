import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AsyncSelect from 'react-select/lib/Async';
import Select from 'react-select';

const URL= "http://sydpc1759.gbst.net:8080/api/acc/lookup/code/";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:"",
      state:"",
      result:{value:"", label:""}
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
  }

  handleInputChange = (newValue: string) => {
    const inputValue = newValue;
    this.setState({inputValue},
      );
    return inputValue;
}

  handleChange = (result)=>{
    this.setState({result: result});
  }
  handleSelectChange = (newValue: string)=>{
    this.setState({state: newValue});
  }

  selectLoadOptions =  [
    {value:"NSW", label:"New South Wales"},
    {value:"VIC", label:"Victoria"},
    {value:"QLD", label:"Quensland"},
    {value:"NT", label:"Northern Territory"},
    {value:"WA", label:"Western Australia"},
    {value:"SA", label:"South Australia"},

  ];

  render() {
    
    console.log(this.state);
    return (
      <div>
        <pre>Input Value = {this.state.inputValue}</pre>
        <pre>Result = {this.state.result.label} - {this.state.result.value}</pre>    
        <AsyncSelect
            placeholder="Select abc"
            loadOptions={this.loadOptions} 
            onInputChange={this.handleInputChange}
            onChange={this.handleChange}
        />
        <Select
          placeholder={this.state.state}
          options={this.selectLoadOptions}
          onChange={this.handleSelectChange}
        />
      </div>
    );
  }
}

export default App;
