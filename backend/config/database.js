const mongoose = require('mongoose');

const databaseConnect = () => {
     mongoose.connect( "mongodb+srv://devconnector.njhr9.mongodb.net/myFirstDatabase").then(()=>{
          console.log('Mongodb Database Connected')
     }).catch(error=>{
          console.log(error)
     })
}
module.exports = databaseConnect;