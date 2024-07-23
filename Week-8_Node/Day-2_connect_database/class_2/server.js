const express = require('express');
const cors = require('cors');
const { router } = require('./routers/books.router.js');

const app = express();

const logger = (req, res, next) => {
    console.log('inside logger');
    console.log(req.url, req.method);
    next();
};

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on ${process.env.PORT || 3001}`);
});
app.use(logger);
app.use('/', router);
