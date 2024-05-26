const mongooes = require('mongoose')

const TaskSchema = new mongooes.Schema({
    name:{
        type:String,
        trim : true,
        required:[true,"Provide a Name"],
        maxLength:[20,"Must  be unbder 20 characters"],

    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongooes.model('Task',TaskSchema)
