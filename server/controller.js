module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes = ["You will find love before the end of the year.", "Your family will experience health and happiness for years to come.", 
    "Success is in your future."];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
     let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    }

    
}
