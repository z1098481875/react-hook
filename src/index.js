import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// const Navbar = () => {
//   const { userName } = useContext(AppContext);

//   return (
//     <div className="navbar">
//       <p>AwesomeSite</p>
//       <p>{userName}</p>
//     </div>
//   );
// };

const Messages = () => {
  // const myreducer = (state,action)=> {
  //   switch(action.type){
  //     case 'update':
  //       console.log(state)
  //       return state;
  //     default:
  //       return state;
  //   }
  // }
  // const [userName, dispath] = useReducer(myreducer, 'x');
  const myreducer = (state,action)=> {
    switch(action.type){
        case 'add':
             return {...state,count: state.count+1};
         case 'sub':
             return state - 1;
         default:
             return state;
    }
  }
  const [obj, dispath] = useReducer(myreducer, {count: 0});
  return (
    <div className="messages">
      {/* <h1>Messages</h1>
      <p>1 message for {userName}</p>
      <p className="message">useContext is awesome!</p>
      <input value={userName} onChange={(e) =>dispath({type: 'update'})} /> */}
      <span>{obj.count}</span>
      <button onClick={()=>dispath({type: 'add'})}>Increment</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Messages />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
