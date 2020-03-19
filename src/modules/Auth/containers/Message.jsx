import React from 'react';

const Message = (props) => {
  return (
    <div className={`auth-message ${props.type}`}>
      <p>
        {/*props.children ? props.children : false*/}
      </p>
    </div>
  );
};

export default Message;
