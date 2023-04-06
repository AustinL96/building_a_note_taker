require('dotenv').config();

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

//***THE FOLLOWING HTML ROUTES SHOULD BE CREATED */
//**"GET /notes" should return the notes.html file */
//**"GET *" should return the index.html file */

app.use(express.static('public'))

// app.get('/test', (req, res) => {
//     res.send('ok');
// })

app.get('/notes', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public/notes.html'));
})


//***THE FOLLOWING API ROUTES SHOULD BE CREATED */
//**"GET /api/notes" should read the "db.json" file and return all saved notes as JSON */
//**"POST /api/notes" should receive a new note to save on the request body, add it to the "db.json" file, and then return the new note to the client. I'll need to find a way to give each note a unique id when it's saved (:id) */
app.post('/api/notes' )


app.listen(PORT, () => console.log('Listening on port %s', PORT));