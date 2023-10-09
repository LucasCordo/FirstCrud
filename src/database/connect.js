const mongoose = require('mongoose');

const connectToDataBase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@firstcrud.xyazhgq.mongodb.net/?retryWrites=true&w=majority`)
    console.log("Deu bom! :)");
  } catch (err) {
    console.log("Deu ruim! :(", err);
  }
}

module.exports = connectToDataBase;