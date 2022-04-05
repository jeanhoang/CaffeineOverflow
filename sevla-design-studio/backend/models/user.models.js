// Import the required dependecies
const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create a new schema for users
const userSchema = new schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
},{
    timestamps: true,
});

// Set the schema to the mongoDB collection
const User = mongoose.model('User', userSchema);

// Export the router to the module
module.exports = User; 