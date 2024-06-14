import React, { useEffect, useState } from 'react';
import Bar from './Bar';
import Body from './Body';
import Footerchat from './Footerchat';

const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <Bar socket={socket} />
      <div className="chat__main">
        <Body messages={messages} />
        <Footerchat socket={socket} />
      </div>
    </div>
  );
};

export default Chat;