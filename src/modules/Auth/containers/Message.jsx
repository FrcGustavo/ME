import React from 'react';

const Message = (props) => {
  return (
    <div className={`auth-message ${props.type}`}>
      <p>
        {props.children}
      </p>
    </div>
  );
};

export default Message;
