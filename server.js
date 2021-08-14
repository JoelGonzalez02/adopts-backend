import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import dotenv from 'dotenv';
import router from './router.js';


dotenv.config();

// App Config

const app = express();
const port = process.env.PORT || 8001
const connection_url = process.env.DATABASE_ACCESS


// Middleware

app.use(express.json());
app.use(Cors());
app.use('/app', router);

// DB Config 
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
//  API Endpoints

app.get('/', (req, res) => 
    res.status(200).send('Adopts API'));


// Listener

app.listen(port, () => console.log(`Listening on localhost: ${port}`))
