var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema= new Schema({
    text: String,
    isDone: Boolean
});

var Todos  = mongoose.model("modelnames",todoSchema);

module.exports= Todos;