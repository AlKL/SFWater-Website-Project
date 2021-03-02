import React, { useState } from 'react';
import { Modal } from './Modal';

const ModalIndex = () => {
    const [show, setShow] = useState(false);

    const closeModalHandler = () => setShow(false);

    return (
        <div>
            { show ? <div onClick={closeModalHandler} className='modal-drop'></div> : null }
            <button onClick={() => setShow(true)} className='btn-openModal'>Contact Us</button>
            <Modal show={show} closeModalHandler={closeModalHandler} />
        </div>
    );
};

export default ModalIndex;