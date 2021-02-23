import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import AddCommentForm from './AddCommentForm';

const AddCommentModal = ({ modalOpen, onClose, onSubmit, error }) => {
    return (
        <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
            <Modal.Header>Add a new comment</Modal.Header>
            <Modal.Content>
                {error && <Segment inverted color="red">{`Error: ${error}`}</Segment>}
                <AddCommentForm onSubmit={onSubmit} onCancel={onClose} />
            </Modal.Content>
        </Modal>
    )
}

export default AddCommentModal;