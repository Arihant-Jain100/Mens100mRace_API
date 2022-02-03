const express = require("express");
require("../src/db/conn");
const menRouter = require("./router/men");
const app = express();
const port = process.env.PORT || 3000;
const MensRanking = require("./models/mens");

app.use(express.json());
app.use(menRouter);
// we will handle post request


app.listen(port, ()=>{
    console.log(`running at ${port}`);
})