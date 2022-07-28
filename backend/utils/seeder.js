const Post = require('../models/post')
const dotenv = require('dotenv')
const connectDatabase = require('../config/database')

const posts = require('../data/posts')

// Setting dotenv file 
dotenv.config({path: 'backend/config/config.env'})

connectDatabase();

const seedPosts = async () => {
    try{
        await Post.deleteMany();
        console.log('Posts are deleted')

        await Post.insertMany(posts)
        console.log('All posts are added')
    }catch(error){
        console.log(error.message);
        process.exit()
    }
}

seedPosts()