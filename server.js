const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db)
  .then(() => console.log('MongoDB is connected!'))
  .catch(err => console.log(err));

// Use Routes (see 'api/items')
app.use('/api/items', items);



// Serve static assets if in PROD mode
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
  console.log(`Server started on port ${ PORT }`));