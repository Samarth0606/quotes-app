const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quoteRoutes = require('./apis/quoteRoutes');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/QuotesApp')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})


app.use(cors({origin:['http://localhost:3000']}));
app.use(express.json());

app.get('/hello' , (req,res)=>{
    res.status(200).json({msg:"hello from quotesapp"}) //js object ko json mei convert krega and then bhejega
})
app.use(quoteRoutes);


// seedDB()

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Backend Server connected at port ${port} `);
})