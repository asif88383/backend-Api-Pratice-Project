import db from '../models/Blog.js';

let blogController = {}

blogController.post = (req, res)=>{
    const { title, body, author } = req.body;
    const newblog = new db.Blog({
        title,
        body,
        author
    });
    newblog.save().then((newblog)=>{
        return res.status(200).json({
            message: "Blog added Successfully",
            success: true,
            data: newblog
        });
    }).catch((err)=>{
        return res.status(500).json({
            message: "Error occured",
            success: false,
            data: err
        });
    });
}


blogController.getAll = (req, res) =>{
    db.Blog.find().then((blogs) => {
        return res.status(200).json({
            message: "All blogs",
            success: true,
            data: blogs
        });
    }).catch((err) => {
        return res.status(500).json({
            message: "Error occured",
            success: false,
            data: err
        });
    });
}


export default blogController;