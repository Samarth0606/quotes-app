const mongoose = require('mongoose');
const Quotes = require('./models/Quote');

let dummyQuotes = [
    {
        author:'Samarth Vohra', 
        text: 'my name is Samarth Vohra'
    },
    {
        author:'Kashish Vohra', 
        text: 'my name is Kashish Vohra'
    },
    {
        author:'Rupesh Kumar', 
        text: 'my name is Rupesh Kumar'
    },
    {
        author:'Zeeshan Adeen', 
        text: 'my name is Zeeshan Adeen'
    }
]

async function seedDB(){
    await Quotes.insertMany(dummyQuotes);
    console.log("DB seeded");
}


module.exports = seedDB;