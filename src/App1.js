import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-dom';
import { render } from '@testing-library/react';


class App extends Component{
  constructor(){
    super();
   this.state={
    string: 'change text'
    ,
   }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Home Page</h1>
          </div>
          <div>
            
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
         <p>{this.state.string}</p>
         <button onClick={()=>this.setState({string:'Starting React'})}>change Text</button>
          
        </header>
      </div>
    );
  }
}

export default App;