import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import { CardList } from './card-list-component';
import {SearchBox} from './search-box.component.js';

import { render } from '@testing-library/react';


class App extends Component{
  constructor(){
    super();
   this.state={
    monsters: [],
    searchField:''
    // [
    //   {
    //     name:'Dracula',
    //     id:'asc1'
    //   },
    //   {
    //     name:'Zoombie',
    //     id:'asc2'
    //   },
    //   {
    //     name:'Biden',
    //     id:'asw1'
    //   },
    // ]
   };
   this.handleChange=this.handleChange.bind(this);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  } 

  handleChange=(e)=>{
    this.setState({searchField: e.target.value});
  }
  
  render(){
    const{monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(
      monster=>monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
         {/* <input
         className="search"
         type='search'
         placeholder='Search Users'
         onChange={e=>{this.setState({searchField:e.target.value},()=>
         console.log(this.state));
         }} /> */}
         <h1>Monsters Rolodex</h1>
         <SearchBox 
         placeholder='search monsters'
         handleChange={e=>{this.setState({searchField:e.target.value},()=>
         console.log(this.state));
         }}
         />
        <br/><br/><br/>
        <CardList monsters={filteredMonsters} />
        {/* <CardList name="Yihua"/> */}
        
          
        
        {/* {
          this.state.monsters.map(
           monster=>(
            <h1 key={monster.id}>{monster.name}</h1>
           ) 
          )
        } */}
        
      </div>
    );
  }
}

export default App;