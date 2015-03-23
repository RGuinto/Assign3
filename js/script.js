
function TodoCtrl($scope) {
  
  $scope.todos = [
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}

//     // Color coding part. Not yet working.
//     var food = ["BANANA","APPLE"];
//     var len = food.length;
//     for (var i=0;i<len;i++){

//         food.push(food[i].toLowerCase());
//     }

//     $('#list').find("li").each(function (i){
//       var description = $(this).text();
//       for (var j=0; j<=food.length;j++){
//         if (description == food[j]){
//           $('#list').find('li')[i].addClass('keyword');
//         }
//       }
//     });



















