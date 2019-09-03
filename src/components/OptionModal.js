import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app'); // required binding to id element.

const OptionModal = (props) => (
    <Modal
      // conditionally check if true using NOT operation on undefined value
      // will be truthy if there is a string in place of undefined
      isOpen={!!props.selectedOption}
      // built in function to allow escape & background click to call function reference
      onRequestClose={props.closeModal}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal_title">Selected Option</h3>
      {
        props.selectedOption && <p className="modal__body">{props.selectedOption}</p>
      }
      <button
        className="button"
        onClick={props.closeModal}
      >
      Okay
      </button>
    </Modal>
  )

export default OptionModal;