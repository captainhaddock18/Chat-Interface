import React from 'react';
import { useNavigate } from 'react-router-dom';

const Body = ({ messages }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    sessionStorage.removeItem('userName');
    navigate('/');
    window.location.reload(); // Consider removing this line if unnecessary
  };

  const username = sessionStorage.getItem('userName');

  return (
    <>
      <header className="chat__mainHeader">
        <p>Chat Interface with Websockets</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          Exit
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          message.name === username ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

      </div>
    </>
  );
};

export default Body;
