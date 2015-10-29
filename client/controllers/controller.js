var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

  

    var refresh=function(){
   	 $http.get('/studentList').success(function(response){
    		console.log("data received")
    		$scope.studentList=response;
    		$scope.student='';
    	});
	}
	refresh();

    $scope.addStudent=function(){
    	console.log($scope.student);
    	$http.post('/studentList',$scope.student).success(function(response){
    		console.log(response);
    		refresh();
    	})
    }

    $scope.delete=function(id){
    	console.log(id);
    	$http.delete('/studentList/'+id).success(function(response){
    		refresh();
    	})
    }
    

    
    
}]);