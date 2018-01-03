var app = angular.module('myApp', []);

app.directive('myTodo', function(){
    return{
        restrict: 'EA',
        templateUrl: 'todo.tpl.html',
        scope: {
            list: '=',
            title: '@'
        }
    }
});

app.controller('main', function($scope){
    $scope.list = [
        {name: 'Importar AngularJS', completed: true},
        {name: 'Declarar una directiva', completed: true},
        {name: 'Conquistar al mundo', completed: false}
    ];
});