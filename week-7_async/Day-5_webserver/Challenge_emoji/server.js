import express from 'express';
import { get30Emojies, groupSet } from './data.js';

const app = express();

//serve static files
app.use(express.static('public'));

// middleware - parses urlencoded bodies 
app.use(express.urlencoded({ extended: true }));

app.use(express.json());  // get body data

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

async function makeResponseData(group, num) {
    let fromApi = await get30Emojies(group, 0);
    let dataArray = fromApi.map((item) => {
        return {emoji:item['character'], name:item['name']}
    });
    let len = dataArray.length;
    let indexArr = [];
    for (let i = 0; i < len; i++) {indexArr.push(i)};
    indexArr = shuffle(indexArr);
    let response = [];
    for (let i = 0; i < num; i++) response.push(dataArray[indexArr[i]]);
    // console.log(response);
    return response
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/emoji',async (req, res) => {
    let {num, group} = req.query;
    res.status(200).json(await makeResponseData(group, Number(num)))
});

app.get('/groups', (req, res) => {
    res.status(200).json(groupSet)
});

// app.post('/emoji', (req, res) => {
//     let inputData = req.body;
// });

app.listen(3000, () => {
    console.log('run on 3000')
});
