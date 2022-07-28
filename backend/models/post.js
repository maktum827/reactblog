const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
title: {
    type: String, 
    required: [true, 'Please enter post title'],
    trim: true,  // for removing all blank spaces from start and end 
    maxLenght: [100, 'post name cannot exceed 100 characters']
},
description: {
    type: String, 
    required: [true, 'Please enter post description'],
},
createAt:{
    type: Date,
    default: Date.now()
}
})
module.exports = mongoose.model('post', postSchema)