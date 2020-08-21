import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  const list = ["dhrubo", "jhons" , "medoe"];
  const student = [
    {name:'dhrubo', id:'12'}, {name: 'hjons', id:'35'}, {name: 'medoe', id:'56'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User></User>
        <Counter></Counter>
        <ul>
          {
            list.map(index => <li>{index}</li>)
          }
        </ul>
        
        {
          student.map(index => <Person name={index}></Person>)
        }
        

      </header>
    </div>
  );
}

function User(){
  const [user, setUser] = useState([]);
  useEffect (() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  return (
    <div>
      user list : {user.length}
      {
        user.map(index => <p>{index.name} {index.email}</p>)
      }    
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   setCount(count+1)
  // }
  const btn={
    padding: '15px 15px',
    backgroundColor: 'green',
    color: '#fff'
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button style={btn} onMouseMove={()=>setCount(count-1)}>Decrease</button>
      <button style={btn} onMouseMove={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}
function callProfile(id){
  console.log(id);
}
function Person(props){
  const flex = {
    display: 'flex'
  }
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    backgroundColor: 'cyan'
  }
  return (
    <div style={flex}>
      <div style={personStyle}>
        <h2>Name : {props.name.name}</h2>
        <h3>Call : {props.name.id}</h3>
        <button onClick={() => callProfile(props.name.id)}>Profile</button>
      </div>
    </div>
    
  )
}

export default App;
