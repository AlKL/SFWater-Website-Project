const mongoose = require('mongoose');

// content: {
//     type: String,
//     required: true,
//     minlength: 5
// },
// date: Date,
// important: Boolean,
// user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
// }

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        //a@a.ca - min length is 6, but you should use a better validator
        minlength: 6
    },
    comment: {
        type: String,
        required: true,
        minlength: 5
    }
});

commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Comment', commentSchema);