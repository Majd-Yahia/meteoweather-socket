const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');


const logSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userAgent: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    brands: {
        type: Array,
        required: true
    },
    language: {
        type: String,
        required: true
    }
})

logSchema.plugin(mongoosePaginate);
const Logs = mongoose.model('Logs', logSchema);

module.exports = Logs