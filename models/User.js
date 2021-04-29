const mongoose = require('mongoose');

const UserShema = new mongoose.Schema ({

    name: {type: String, require: true},
    lastname: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true}
})
module.exports = mongoose.model('User', UserShema);