require("dotenv").config();
import express from 'express';
import mongoose from 'mongoose';


import { userRoute } from './routes';
const url = process.env.MONGODB_URI;

const app = express();
console.log('abc',url);
//connect to mongodb
mongoose.connect(url, {
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoute);
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to my API' });
});

export default app;
