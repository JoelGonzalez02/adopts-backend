import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import Cors from 'cors';
import Users from './dbUsers.js';



// App Config

const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:itsalwayssunny2@cluster0.kwpi7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


// Middleware

app.use(express.json())
app.use(Cors());

// DB Config 
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
//  API Endpoints

app.get('/', (req, res) => 
    res.status(200).send('Hello World'));

app.post('/adopts/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.post('/token', (req, res) => {
    const dbToken = req.body;

    Token.create(dbToken, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

app.post('/adopts/users', (req, res) => {
    const dbUser = req.body;

    Users.create(dbUser, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/adopts/card', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data)
        }
    });
});

app.get('/token', (req, res) => {
    Token.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});


// Listener

app.listen(port, () => console.log(`Listening on localhost: ${port}`))
