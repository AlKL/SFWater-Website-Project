import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import AddCommentModal from './CommentModal';
const baseUrl = '/api/comments';

const AddComment = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const openModal = () => setModalOpen(true);
    const closeModal = () => {
        setModalOpen(false);
        setSuccess(null);
        setError(null);
    };

    const submitNewComment = async (values, { resetForm }) => {
        try {
            setError(null);
            setSuccess(null);
            resetForm({});
            await axios.post(
                baseUrl,
                values
            );
            setSuccess('Comment submitted successfully!');
        } catch (e) {
            // console.error(e.response.data);
            // setError('Please try again');
            setError(e.response.data);
        }
    };

    return (
        <div className='buttonContainer' >
            <AddCommentModal
                modalOpen={modalOpen}
                onSubmit={submitNewComment}
                error={error}
                onClose={closeModal}
                success={success}
            />
            <div>
                <Button onClick={() => openModal()} className='contactButton' id='contactButton'>Got A Question?</Button>
            </div>
        </div>
    );
};

export default AddComment;