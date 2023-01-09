const mongoose = require('mongoose');

const db = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/new_database');
        console.log("Connected to MongoDB");
    }catch(err)
    {
        console.log(err);
    }
}

db();

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);