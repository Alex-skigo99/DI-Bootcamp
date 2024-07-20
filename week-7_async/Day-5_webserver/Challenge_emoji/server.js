const express = require('express');
const app = express();

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '👍', name: 'Nice' },
    { emoji: '👻', name: 'Ghost' },
    { emoji: '🤡', name: 'Cloun' },
    { emoji: '🤝', name: 'Handshake' },
    { emoji: '🤖', name: 'Robot' },
    { emoji: '👽', name: 'Alien' },
    { emoji: '🔥', name: 'Fire' }
];

app.post('/posts', (req, res) => {
    let inputData = req.body;
});

app.listen(3000, () => {
    console.log('run on 3000')
});

app.use(express.json());  // get body data
