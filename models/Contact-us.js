const mongoose = require('mongoose');

const UserShema = new mongoose.Schema ({

    name: {type: String, require: true},
    email: {type: String, require: true},
    phone: {type: Number, require: true},
    text: {type: String, require:true}
})
module.exports = mongoose.model('Contact-us', UserShema);