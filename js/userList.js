var myapp = angular.module("myapp", []);
myapp.controller("userCtrl", function($http, $scope) {
	$http({
		url: 'http://localhost:8080/queryAll',
		method: 'GET'
	}).then(function successCallback(response) {
		$scope.userList = response.data;
	}, function errorCallback(response) {
		console.log("error->" + response.data);
	});
});