import React, { useReducer, Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const myreducer = (state,action)=> {
  switch(action.type){
    case 'userName':
      return {...state,userName: action.userName}
    case 'password':
      return {...state,password: action.password}
    default:
      return state;
  }
}

const UserName = (props) => {
  let {state, dispatch} = props
  let {userName, password} = state
  return (
    <div className="messages">
      <h1>Messages</h1>
      <p>1 message for {userName}</p>
      <p className="message">{password}</p>
      <input value={userName} onChange={(e) =>dispatch({type: 'userName', userName: e.target.value})} />
    </div>
  );
};

const PassWord = (props) => {
  let {state, dispatch} = props
  let {password, userName} = state
  return (
    <div className="navbar">
      <p>{userName}</p>
      <input value={password} onChange={(e) =>dispatch({type: 'password', password: e.target.value})} />
    </div>
  );
};

class Button extends Component {
  handleClick =() =>{
    let {state} = this.props
    let {password, userName} = state
    console.log(userName, password)
    fetch('www/getData', {method:'POST'
      ,headers:{ 'Content-Type': 'application/json' }
      ,body: JSON.stringify({ userName, password})
    }).then( function (resp) {
      console.log(resp);
      return resp.blob() })
  }
  render() {
    return <button onClick={this.handleClick}>提交</button>;
  }
}

function App() {
  const [state, dispatch] = useReducer(myreducer, {userName:'', password: ''});
  return (
    <div className="App">
      <UserName dispatch={dispatch} state={state}/>
      <PassWord dispatch={dispatch} state={state}/>
      <Button state={state}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
