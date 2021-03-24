const express = require("express");
const path = require("path");
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sparks', {useNewUrlParser: true}, { useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("yes we are connected!");
});
const port = 8000;

//Define mongoose schema
var formSchema = new mongoose.Schema({
    Sender_Name: String,
    Receiver_Name: String,
    Amount: String
  });

formSchema.methods.speak = function () {
    var greeting = "Data successfully saved to database"
    console.log(greeting);
}

const Form = mongoose.model('Form', formSchema);

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static') )           //for serving static files      
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')                       //set the template engine as pug
app.set('views', path.join(__dirname, 'views'))            //set the view directory

//ENDPOINTS
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('index.pug', params);
})

app.get('/ViewCustomers', (req, res)=>{
    const params = {};
    res.status(200).render('customer.pug', params);
})

app.post('/form', (req, res)=>{
    var myData = new Form(req.body);
    myData.save(function (err, H) {
        if (err) return console.error(err);
        H.speak();
       
    })
})



//START THE SERVER
app.listen(port,()=>{
    console.log(`The application has started successfully on port ${port}`);
})