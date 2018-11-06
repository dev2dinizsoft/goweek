const express = require('express');
const routes = express.Router();

const TweetController = require('./controllers/TweetController');
routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

const LikeController = require('./controllers/LikeController');
routes.post('/likes/:id', LikeController.store);

module.exports = routes;