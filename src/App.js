import React, { useState } from "react";
import "./styles.css";

// import { io } from "socket.io-client";

// const socket = io("http://localhost:3001");

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <h1>Live Chat Application</h1>
    </div>
  );
};

export default App;
