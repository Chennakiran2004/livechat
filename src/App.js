import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import HomePage from "./components/HomePage";
import ChatRoom from "./components/ChatRoom";
// import UserProfile from "./components/UserProfile";

import "./styles.css";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<HomePage />} /> */}
    //     <Route path="/chat" element={<ChatRoom />} />
    //     {/* <Route path="/profile" element={<UserProfile />} /> */}
    //   </Routes>
    // </Router>
    <>
      <ChatRoom />
    </>
  );
}

export default App;
