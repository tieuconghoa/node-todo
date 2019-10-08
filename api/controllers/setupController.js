var Todos  = require("../models/todoModel");

module.exports = function(app){
    app.get("/api/setupTodos",function (req,res) {
        // setup send data
        var seedTodos = [];

        Todos.create(seedTodos,function(err,results){
            res.send(results);

        })
    });
}