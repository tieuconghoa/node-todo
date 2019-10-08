var app = angular.module("app.todos",['xeditable']);

app.controller("todoController",['$scope','svTodos',function($scope,svTodos){
    
    $scope.appName="Todo Dashbroad";
    $scope.formData={};
    $scope.todos = [];
    $scope.loading= true;

    // load data from api

    svTodos.get().success(function(data){
        $scope.todos=data;
        $scope.loading=false;
    })

    $scope.createTodo = function(){
        
        var todo ={
            text: $scope.formData.text,
            isDone: false
        }

        svTodos.create(todo).success(function(data){
            $scope.todos= data;
            $scope.formData.text='';
            $scope.loading=false;
        });

    };

    $scope.updateTodo = function(todo){
        console.log("Update todo: " + todo);
        $scope.loading=true;

        svTodos.update(todo).success(function(data){
            $scope.todos= data;
            $scope.loading=false;
        });
    }

    $scope.deleteTodo = function(todo){
        console.log("Delete todo: "+todo);
        $scope.loading=true;

		svTodos.delete(todo._id).success(function(data){
            $scope.todos=data;
            $scope.loading=false;
		});
    }

}]);