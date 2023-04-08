const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs');

//***THE FOLLOWING API ROUTES SHOULD BE CREATED */
//**"GET /api/notes" should read the "db.json" file and return all saved notes as JSON */
//**"POST /api/notes" should receive a new note to save on the request body, add it to the "db.json" file, and then return the new note to the client. I'll need to find a way to give each note a unique id when it's saved (:id) */
// app.post('/api/notes' )

router.get('/api/notes', (req, res) => {
    const dbData = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
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

router.delete('/api/notes/:id', (req, res) => {
    const savedData = fs.readFileSync("db/db.json", "utf-8");
    const parsedJSON = JSON.parse(savedData);
    //***Use the array filter method */
    const postDeleteNotes = parsedJSON.filter((note) => { 
        //***Deletes requested id, returns others if they do not equal that id */
        return note.id !== req.params.id;
    });
    fs.writeFileSync("db/db.json", JSON.stringify(postDeleteNotes, null, 2) + '\n');
    //***res.json needed to have note disappear on sidebar without refresh */
    res.json();
});

module.exports = router