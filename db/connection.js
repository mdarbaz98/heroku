const mongoose = require("mongoose");

// const connectionVariable = 'mongodb+srv://arbaaz:J0Q91BgLcFBkvFlw@cluster0.iauevra.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(connectionVariable).then(() => {
//     console.log('Connection Successful');
// }).catch((error) => {
//     console.log(error);
// })

const connectDB = (connectionString) => {
    mongoose.connect(connectionString)
}

module.exports = connectDB;