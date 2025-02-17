const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRouter = require('./routes/AuthRoutes')

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json())

app.use('/api/users', userRouter);

app.listen(port, ()=>{
    console.log(`Connected to port ${port}`);
})