import React, { useState } from 'react'
import { Button } from 'semantic-ui-react';
import AddCommentModal from './CommentModal';

const AddComment = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState(null);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const submitNewComment = async () => {
        console.log('lol');
    };

    return (
        <div>
            <AddCommentModal
                modalOpen={modalOpen}
                onSubmit={submitNewComment}
                error={error}
                onClose={closeModal}
            />
            <Button onClick={() => openModal()}>Add Comment</Button>
        </div>
    )
}

export default AddComment;