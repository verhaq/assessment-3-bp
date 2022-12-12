const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const { getCompliment } = require('./controller')

const { getFortune } = require('./controller')

const { getItinerary, postItinerary, updateItinerary, deleteItem } = require('./databaseController')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get('/api/itinerary', getItinerary);
app.post('/api/itinerary', postItinerary);
app.put('/api/itinerary/:id', updateItinerary);
app.delete('/api/itinerary/:id', deleteItem);

//ignore below, i dont know how to make it work
// app.get('/api/itinerary', (req, res) => {
//     res.status(200).send(itinerary)
// })

app.listen(4000, () => console.log("Server running on 4000"));
