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

// later
// add & delete song

module.exports = router;
