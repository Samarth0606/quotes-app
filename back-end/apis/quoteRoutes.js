const Quotes = require('../models/Quote');
const router =  require('express').Router();

router.get('/allquotes' , async(req,res)=>{
    try{
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'}); 
    }
})

router.post('/addQuotes' , async(req,res)=>{
    let {author , text} = req.body;
    await Quotes.create({author , text});
    res.status(200).json({msg:'New quote created successfully'})

})

router.get('/quotes/:id' , async(req,res)=>{
    // console.log(req.params) 
    const quote = await Quotes.findById(req.params.id);
    // console.log(quote);
    res.status(200).json(quote);
})

module.exports = router;

