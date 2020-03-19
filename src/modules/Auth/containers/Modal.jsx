import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-header">
        <button onClick={props.onToggleModal} type="button" className="modal-button modal-button__close">
          <i className="material-icons">cancel</i>
        </button>
      </div>
      <div className="modal-container">
        {props.message}
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default Modal;
