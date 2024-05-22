// import React, { useState, useEffect } from "react";

// import { io } from "socket.io-client";

// const socket = io("http://localhost:3000");

// function ChatRoom() {
//   const [messages, setMessages] = useState([]);

//   const [messageText, setMessageText] = useState("");

//   const [user, setUser] = useState(null);

//   // Join a chat room

//   const joinChatRoom = (userDetails) => {
//     setUser(userDetails);

//     socket.emit("join", userDetails);
//   };

//   // Leave a chat room

//   const leaveChatRoom = () => {
//     socket.emit("leave", user);

//     setUser(null);
//   };

//   // More code will go here

//   return (
//     <div className="chat-room">
//       // The chat room components will go here hello
//     </div>
//   );
// }

// export default ChatRoom;

import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [user, setUser] = useState(null);

  // Join a chat room
  const joinChatRoom = (userDetails) => {
    setUser(userDetails);
    socket.emit("join", userDetails);
  };

  // Leave a chat room
  const leaveChatRoom = () => {
    socket.emit("leave", user);
    setUser(null);
  };

  // Listen for incoming messages
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on unmount
    return () => {
      socket.off("message");
    };
  }, []);

  // Send a message
  const sendMessage = () => {
    if (messageText.trim() && user) {
      const message = {
        user,
        text: messageText,
        timestamp: new Date(),
      };
      socket.emit("message", message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessageText("");
    }
  };

  return (
    <div className="chat-room">
      {!user ? (
        <div>
          <h2>Join Chat Room</h2>
          <button onClick={() => joinChatRoom({ name: "User1" })}>
            Join as User1
          </button>
          {/* <button onClick={() => joinChatRoom({ name: "User2" })}>
            Join as User2
          </button> */}
        </div>
      ) : (
        <div>
          <h2>Chat Room</h2>
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <strong>{msg.user.name}: </strong>
                <span>{msg.text}</span>
                <em> ({new Date(msg.timestamp).toLocaleTimeString()})</em>
              </div>
            ))}
          </div>
          <div className="message-input">
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
          <button onClick={leaveChatRoom}>Leave Chat Room</button>
        </div>
      )}
    </div>
  );
}

export default ChatRoom;
