'use strict';
//define some global variables
//TODO remove this to config file
var local = true;
var baseUrl = local ? 'http://localhost:1818' : 'http://161.202.180.166:1818';
(function() {
	//create a main module for the app with no dependencies yet
	angular.module('switrApp', []);
})();