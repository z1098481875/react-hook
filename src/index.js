import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const AppContext = React.createContext({});

const Navbar = () => {
  const { userName } = useContext(AppContext);

  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{userName}</p>
    </div>
  );
};

const Messages = () => {
  const { userName, setUserName } = useContext(AppContext);
  function formChange(e) {
    console.log(e.target.value);
    setUserName(e.target.value);
    // username = e.target.value
  }
  return (
    <div className="messages">
      <h1>Messages</h1>
      <p>1 message for {userName}</p>
      <p className="message">useContext is awesome!</p>
      <input value={userName} onChange={(e) => formChange(e)} />
    </div>
  );
};

function App() {
  const [userName, setUserName] = useState("defaultValue");
  return (
    <AppContext.Provider
      value={{
        userName,
        setUserName
      }}
    >
      <div className="App">
        <Navbar />
        <Messages />
      </div>
    </AppContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
