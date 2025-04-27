const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const mongoose = require('mongoose');
const blogController = require('../controllers/blogController');

router.get('/', blogController.blogIndex);

router.post('/', blogController.blogCreatePost);

router.get('/create', blogController.blogCreateGet);

router.get('/:id', blogController.blogDetails);

// New shit
router.get('/update/:id', blogController.blogUpdateGet);

router.post('/update/:id', blogController.blogUpdatePost);

router.delete( '/:id', blogController.blogDelete);

module.exports = router;