const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 5001, () => {
    console.log(`run on ${process.env.PORT || 5001}`);
});
app.use('/', router);

router.get('/api/hello', (req, res) => res.status(200).json({message:'Hello From Express'}));
router.post('/api/world', (req, res) => res.status(200).json(req.body));
