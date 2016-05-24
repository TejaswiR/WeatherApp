

var angularApp = angular.module('weatherApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
 $routeProvider
 .when ('/',{
   templateUrl: 'pages/current.html',
   controller: 'HomeController'
 })

 .when ('/forecast',{
   templateUrl: 'pages/forecast.html',
   controller: 'ForecastController'
 })
});


angularApp.controller("HomeController",function($resource){
 var vm=this;
 vm.getCityTemperature = function(){
   console.log(vm.cityName);
   var weatherResource = $resource('http://api.openweathermap.org/data/2.5/weather',
     {q:vm.cityName,appid:'bc1b6968884b3366859f9679983dc947'});
   vm.weatherResponse = weatherResource.get();
   console.log(vm.weatherResponse);
  }
});

angularApp.controller("ForecastController",function($resource){
 var vm=this;
 vm.getCityForecast = function(){
   console.log(vm.cityName);
   var forecastResource = $resource('http://api.openweathermap.org/data/2.5/forecast',
     {q:vm.cityName,appid:'bc1b6968884b3366859f9679983dc947',cnt:10});
   vm.forecastResponse = forecastResource.get();
   console.log(vm.forecastResponse);
  }

});

