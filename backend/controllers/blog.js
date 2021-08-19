const blog = async (req, res) => {
    const Blog = require("../models/blog.model");

    let blog = await Blog.find();
    
    res.json(blog)
}

module.exports = blog;