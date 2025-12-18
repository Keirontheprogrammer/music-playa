const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const songRoutes = require('./routes/songs')

// routes


const app =express();
const PORT = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());

app.use("/api/songs", songRoutes)

//DB test

async function testDB(){
    try{
        const [rows] = await db.query("SELECT 1 + 1 AS result");
        console.log("MySQL connected successfully! -> 1 + 1 =",rows[0].result);

    }
    catch(error){
        console.log("Connection failed: ", error.message);
        process.exit(1);
    }
}
testDB();

//API routes


//health checks

app.get("/api/health", (req, res)=>{
    res.json({status: "OK", message: "API is running"})
})

app.get("/", (req, res)=>{
    res.json({message: "Welcome to musicPlaya API"})
});

app.use((req, res) =>{
    res.status(404).json({error: "Route not found"});
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({error: "Something Went wrong!!"});
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})
