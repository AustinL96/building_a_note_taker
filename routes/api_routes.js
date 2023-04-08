const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs');

//***THE FOLLOWING API ROUTES SHOULD BE CREATED */
//**"GET /api/notes" should read the "db.json" file and return all saved notes as JSON */
//**"POST /api/notes" should receive a new note to save on the request body, add it to the "db.json" file, and then return the new note to the client. I'll need to find a way to give each note a unique id when it's saved (:id) */
// app.post('/api/notes' )

//***needed to be async to allow 'await' to work */
router.get('/api/notes', async (req, res) => {
    const dbData = await JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
    res.json(dbData);
})

router.post('/api/notes', (req, res) => {
    const dbData = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
    const newData = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    dbData.push(newData);
    fs.writeFileSync('db/db.json', JSON.stringify(dbData, null, 2) + '\n');
    res.json(dbData)
})

module.exports = router