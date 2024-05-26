const mongooes = require("mongoose") 

const connectDB = (dbUri) =>{
    return mongooes.connect(dbUri,{
      useNewUrlParser:true,
      useCreateIndex:true,
      useFindAndModify:false,
      useUnifiedTopology:true,
    }
    )         
}
module.exports = connectDB

