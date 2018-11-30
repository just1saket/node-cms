const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {

        type: String,
        default: 'public'
    }
});

module.exports = mongoose.model('Post', PostSchema);