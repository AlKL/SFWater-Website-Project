import React from 'react';
import './Modal.css';

export const Modal = ({ show, closeModalHandler }) => {
    return (
        <div className='modal-wrapper'
            style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className='modal-header'>
                <p>Leave a comment</p>
                <span onClick={closeModalHandler} className='close-modal-btn '>x</span>
            </div>
            <div className='modal-content'>
                <div className='modal-body'>
                    <h4>Modal</h4>
                    <p>lorem.........</p>
                </div>
                <div className='modal-footer'>
                    <button onClick={closeModalHandler} className='btn-cancel'>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;