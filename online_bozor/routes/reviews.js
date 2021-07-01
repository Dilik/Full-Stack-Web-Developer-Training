const express = require('express')
const router = express.Router({ mergeParams: true });
const catchAsync = require('../util/catchAsync');
const Product = require('../models/product');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');
const { isLoggedIn, validateReview, isReviewAuthor} = require('../middleware');

router.post('/',isLoggedIn, validateReview, catchAsync(reviews.createReview));
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;