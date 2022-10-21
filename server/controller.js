const dogs = require('./db.json')
upcomingId = 4


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "Advice, when most needed, is least heeded",
            "All the effort you are making will ultimately pay off.",
            "All the troubles you have will pass away very quickly.",
            "All will go well with your new project.",
            "All your hard work will soon pay off.",
            "Allow compassion to guide your decisions.",
            "An acquaintance of the past will affect you in the near future.",
            "An agreeable romance might begin to take on the appearance.",
            "An important person will offer you support.",
            "An inch of time is an inch of gold.",
            "Any day above ground is a good day.",
            "Any decision you have to make tomorrow is a good decision.",
            "At the touch of love, everyone becomes a poet.",
            "Be careful or you could fall for some tricks today."
        ]
         // choose random fortune
        let randomNum = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomNum];

        res.status(200).send(randomFortunes)

    },
    getDogs: (req, res) => {
        res.status(200).send(dogs)
    },
    deleteDog: (req, res) => {
        const deleteId = req.params.id
        let index = dogs.findIndex(element => element.id === +deleteId)
        dogs.splice(index, 1)
        res.status(200).send(dogs)
    },
    createDog: (req, res) => {
        const { name, type, imageURL } = req.body

        let greatestId = -1 
        for (let i = 0; i < dogs.length; i++) {
            if (dogs[i].id > greatestId) { 
                greatestId = dogs[i].id
            }
        }
        let nextId = greatestId + 1

        let newDog = {
            id: nextId,
            name,
            type,
            imageURL
        }

        dogs.push(newDog)
        res.status(200).send(dogs)

    },
    updateDog: (req, res) => {
        let name = req.body.name
        let newId = req.params.id
        let newIndex = dogs.findIndex(element => element.id === +newId)
    
        if (type === 'plus') {
            houses[newIndex].price = houses[newIndex].price + 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[newIndex].price = houses[newIndex].price - 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
}
