const express = require('express');
const Blog = require('../models/blog');

const blogIndex = (req, res) => {
    Blog.find().sort({createdAt:-1})
        .then((result) => {
            res.render('blogs/index',
                {title: 'All blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })
}

const blogDetails = (req, res) => {
    const { Types } = require('mongoose');
    const id = new Types.ObjectId(req.params.id);
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', {blog: result, title: 'Blog Details'});
        })
        .catch((err) => {
            res.status(404).render('404', {title: 'Blog not found'});
        })
}

const blogCreateGet = (req,res) => {
    res.render('blogs/create', {title: 'Create a new Blog'});
}

const blogCreatePost = (req,res) => {
    const blog = new Blog(req.body);
        blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
}

const blogDelete = (req,res) => {
    const { Types } = require('mongoose');
    const id = new Types.ObjectId(req.params.id);
    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/blogs'})
    })
    .catch((err) => {
        console.log(err);
    })
    
}

module.exports = {
    blogIndex,
    blogDetails,
    blogCreateGet,
    blogCreatePost,
    blogDelete
}