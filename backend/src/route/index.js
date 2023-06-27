const express = require('express');
const booksRoute = require('./bookRoute');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/books',
        route: booksRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
