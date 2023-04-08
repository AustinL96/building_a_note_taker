require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
const api_routes = require('./routes/api_routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))

//***HTML ROUTES */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})
//***API ROUTES */
app.use(api_routes);

app.listen(PORT, () => console.log('Listening on port %s', PORT));