const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000
app.get('/', (req,res)=>{
    res.send("Backend success")
})
app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON ${PORT}`)
})
