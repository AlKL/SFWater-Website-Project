import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import AddCommentModal from './CommentModal';

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
                'http://localhost:3001/api/comments',
                values
            );
            setSuccess('Comment submitted successfully!');
        } catch (e) {
            console.error(e.response.data);
            setError('Please try again');
        }
    };

    return (
        <div>
            <AddCommentModal
                modalOpen={modalOpen}
                onSubmit={submitNewComment}
                error={error}
                onClose={closeModal}
                success={success}
            />
            <Button onClick={() => openModal()}>Contact Us!</Button>
        </div>
    );
};

export default AddComment;