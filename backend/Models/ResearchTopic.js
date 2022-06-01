const mongoose = require('mongoose');

const ResearchTopicSchema = new mongoose.Schema({
    
    groupNumber: {
        type: String,
        required: true,
        trim: true
    },

    topic: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('REsearchTopic', ResearchTopicSchema);