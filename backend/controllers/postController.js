const Post = require('../models/post')

// Create new post => /api/v1/post/new
exports.newPost = async(req, res, next) => {
    const post = await Post.create(req.body);
    res.status(201).json({
        success: true,
        post
    })
}

// Get all posts => /api/v1/posts
exports.getPosts = async (req, res, next) =>{
    const posts = await Post.find() // Find all posts from the database
    // Showing the results in frontend
    res.status(200).json({
        success: true,
        posts 
    })
}
