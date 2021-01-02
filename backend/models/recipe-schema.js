const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    "title": String,
    "desc": String,
    "picture": String,
    "ratings": Array,
    "servings": Number,
    "ingredients": {
        type: Map,
        of: Number
    },
    "instructions": [Array]
}, {collection: 'recipes'})

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;