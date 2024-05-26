const mongooes = require("mongoose") 

const dbUri = 'mongodb+srv://riyalp99:Riyal1999@cluster0.2x02rzy.mongodb.net/CRUD?retryWrites=true&w=majority';

const connectDB = () =>{
    return mongooes.connect(dbUri,{
      useNewUrlParser:true,
      useCreateIndex:true,
      useFindAndModify:false,
      useUnifiedTopology:true,
    }
    )         
}
module.exports = connectDB

