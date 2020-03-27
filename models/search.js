const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const advSearchSchema = new Schema({
    recipeId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    ingridients: {
        type: Array
    },
    ratings: {
        type: Number
    },
    category: {
        type: String
    },
    likes: {
        type: String
    },
    preparationTime: {
        type: Number
    },
    createdAt: {
        type: String
    },
    cuisine: {
        type: String
    },
    dishType: {
        type: String
    },
    dietType: {
        type: String
    }
}, {
    collection: 'recipe'
})

module.exports = mongoose.model('Search', advSearchSchema)