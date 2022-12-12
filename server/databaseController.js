const itinerary = [
   { id: 1,
    name: 'Go to Colorado Springs'
   },
   { id: 2,
    name: 'Visit Garden of the Gods'
   },
   { id: 3,
    name: 'Visit the Stanley Hotel'
   },
   { id: 4,
    name: 'Go to Denver Botanical Gardens'
   },
   { id: 5,
    name: 'Pet a moose'
   },

]

let itineraryId = 6
module.exports = {
    getItinerary: (req,res) => {
        res.status(200).send(itinerary)
    },
    postItinerary:(req,res) => {
        const {name} = req.body
        itinerary.push({
            id:itineraryId,
            name
        })
res.status(200).send(itinerary)
itineraryId++
    },
    updateItinerary: (req,res) => {
        const { id } = req.params
        const { newItem } = req.query

        const itineraryIndex = itinerary.findIndex(itinerary => itinerary.id === +id )
        itineraryIndex === -1 ? res.status(400).send('Item does not exist') : itinerary[itineraryIndex].name = newItem
        res.status(200).send(itinerary)
    },
    deleteItem:(req,res) => {
        const { id } = req.params

        const itineraryIndex = itinerary.findIndex(itinerary => itinerary.id === +id )
        itineraryIndex === -1 ? res.status(400).send('Item does not exist') : itinerary.splice(itineraryIndex,1)
        res.status(200).send(itinerary)

    }
}