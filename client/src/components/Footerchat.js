import React, { useState } from 'react';

const Footerchat = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    const username = sessionStorage.getItem('userName');
    if (message.trim() && username) {
      socket.emit('message', {
        text: message,
        name: username,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage(''); // Clear the message input after sending
  };

  return (
    <div className="chat__footer">
      <input className='input-bar'
        type="text"
        placeholder="Enter Message"
        value={message} // Bind the input to the message state
        onChange={(e) => setMessage(e.target.value)} // Update the message state on input change
      />
      <button className="Submit-bar" onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Footerchat;
