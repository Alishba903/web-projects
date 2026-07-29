const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, ()=>{
    console.log(`The server is running on port: ${PORT}`);
});

