const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const passport = require('passport');
const cors=require('cors')

const port = process.env.PORT || 5000;
const app = express();

require('dotenv').config()

//Enabling Cors(Cross-Origin Resource Sharing)
app.use(cors())

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Passport middleware
app.use(passport.initialize());




// DB Config
const db =process.env.MONGOURI;
console.log(db)
// Connect to MongoDB
mongoose.set('strictQuery', true);
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.listen(port, () => console.log(`Server running on port ${port}`));