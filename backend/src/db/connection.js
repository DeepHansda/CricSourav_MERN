const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/saurav_database"
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}
module.exports = mongoose.connect(uri, options).then(()=>{
    console.log("Database Connected!")
}).catch(err=>{
    console.log(err)
})

