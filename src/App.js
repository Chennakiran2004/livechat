import React, { useState } from "react";
import "./styles.css";
import Chat from "./components/Chat";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <h1>Live Chat Application</h1>
      {/* {user ? <Chat user={user} /> : <Login setUser={setUser} />} */}
      <Chat />
    </div>
  );
};

export default App;
