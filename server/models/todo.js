var mongoose = require("mongoose");

// trim removes extra white space from beginning/end of string
var Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        require: true,
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = {Todo};