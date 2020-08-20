const Sportscard = require("../models/sportscardModel");
const User = require("../models/user")

// Defining methods for the merchController
module.exports = {
  findAll: function(req, res) {
    Sportscard
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      
  },
  create: function(req, res) {
    // get request parameters (ids)
    let cardId = req.params.cardId;
    let userId =req.params.userId;
// updating the user's card array with the card's id
    User
      .findOneAndUpdate({_id: userId}, {$push:{cards: cardId}},{new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    
  }
  
  

// update theuser with new card when cick save

// get all the saved  card from the user


};