const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const itinerary = ['Go to Colorado Springs', 'Visit Garden of the Gods', 'Visit the Stanley Hotel', 'Go to Denver Botanical Gardens']


const { getCompliment } = require('./controller')

const { getFortune } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

//ignore below, i dont know how to make it work
// app.get('/api/itinerary', (req, res) => {
//     res.status(200).send(itinerary)
// })

app.listen(4000, () => console.log("Server running on 4000"));
