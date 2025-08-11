const express = require("express");
const app = express();
const tasks = require('./routes/tasks.js');
<<<<<<< HEAD
const connectDB = require('./db/connect');
require('dotenv').config()
=======
>>>>>>> 0082cefe3714a2448a848012ebefdc9e8acf06d0

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App')
});

<<<<<<< HEAD
app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
=======

app.use('/api/v1/tasks', tasks);




const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`))
>>>>>>> 0082cefe3714a2448a848012ebefdc9e8acf06d0
