var myapp = angular.module("myapp", []);

// Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
// Scope 是一个对象，有可用的方法和属性。
// Scope 可应用在视图和控制器上。
// 依赖注入:依赖'$scope',注入到$scope 
// myapp.controller('MainCtrl', ['$scope', function($scope){
// 	$scope.username = "汤姆熊";
// 	this.username = "mainCtrl-username";

// 	$scope.append = function(){
// 		$scope.username += "append ";
// 	};
// }])
myapp.controller('MainCtrl', function($scope, $http, $location, $timeout, $interval) {
	$scope.username = "汤姆熊";
	this.username = "mainCtrl-username";
	$scope.append = function() {
		$scope.username += "append ";
		console.info("start");
		$http({
			method: 'GET',
			url: 'http://localhost:8080/test/testHttpCrossOrigin'
		}).then(function successCallback(response) {
			console.log(response.data);
		}, function errorCallback(response) {
			console.log(response.data);
		});
	};

	$scope.url = $location.absUrl();

	// http get 函数
	//	$http.get('https://www.apiopen.top/meituApi?page=1').then(function successCallback(response) {
	//		console.log(response);
	//	}, function errorCallback(response) {
	//		console.log(response);
	//	});

	$http({
		method: 'GET',
		url: 'https://www.apiopen.top/meituApi1?page=1'
	}).then(function successCallback(response) {
		console.log(response.data.msg);
	}, function errorCallback(response) {
		console.log(response);
	});

	//超时执行函数
	//	$timeout(function() {
	//		alert("first")
	//	}, 2000);

	//周期性执行函数
	$interval(function() {
		$scope.nowTime = new Date().toLocaleTimeString();
	}, 1000);

});