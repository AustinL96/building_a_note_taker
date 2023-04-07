require('dotenv').config();

const fs = require('fs');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

const html_routes = require('./routes/html_routes');
const api_routes = require('./routes/api_routes');

app.use(express.static('public'))
//***HTML ROUTES */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})



//***THE FOLLOWING API ROUTES SHOULD BE CREATED */
//**"GET /api/notes" should read the "db.json" file and return all saved notes as JSON */
//**"POST /api/notes" should receive a new note to save on the request body, add it to the "db.json" file, and then return the new note to the client. I'll need to find a way to give each note a unique id when it's saved (:id) */
// app.post('/api/notes' )


app.listen(PORT, () => console.log('Listening on port %s', PORT));