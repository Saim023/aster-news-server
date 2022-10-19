const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

const categories = require('./data/categories/categories.json');

app.get('/', (req, res) => {
    res.send('Aster News API Running');
});

app.get('/news-category', (req, res) => {
    res.send(categories)
});

app.listen(port, () => {
    console.log('Aster News Running On Port', port);
})