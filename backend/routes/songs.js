const express = require('express');
const router = express.Router();
const db = require("../config/db");


router.get("/", async(req, res, next)=>{
    try{
        const [songs]=await db.query("SELECT * FROM songs");
        res.json(songs);

    }
    catch(err){
        next(err);
    }
});

router.get("/:id", async(req, res, next)=>{
    try{
        const { id } = req.params;
    const [rows] =  await db.query("SELECT * FROM songs WHERE id =?", [id]);

    if (rows.length === 0 ){
        return res.status(404).json({error: "Song not found"})
    }

    res.json(rows[0])
    }

    catch(err){
        next(err)
    }
});

router.post("/", async (req, res, next)=>{
    try{
        const {title, artist, file_url} = req.body;

        if(!title || !file_url){
            return res.status(400).json({error: "Title and file_url is required"})
        }

        const [result] = await db.query(
            "INSERT INTO songs (title, artist, file_url) VALUES (?,?,?)",
            [title, artist, file_url]
        )

        res.status(201).json({
            id: result.insertId,
            title,
            artist: artist || null,
            file_url
        });

    }
    catch(err){
        next(err);
    }
});



module.exports = router;
