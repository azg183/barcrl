"use strict";angular.module("barcrlApp",["ngCookies","ngResource","ngSanitize","ngRoute","module.service","module.controller","ui.bootstrap"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/Crawl/:barId",{templateUrl:"/views/crawl.html",controller:"CrawlCtrl"}).when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!1)}]),angular.module("module.controller",["module.service"]).controller("MainCtrl",["$scope",function(a){a.bars=[{id:"Inferno",name:"Inferno"},{id:"Bar.Bleu",name:"Bar Bleu"},{id:"Pickles",name:"Pickles"}]}]).filter("ReplaceDots",function(){return function(a,b){return a.replace(/\./g,b)}}).controller("CrawlCtrl",["$scope","crawlrService",function(a,b){function c(b){a.requestId=b}function d(b){a.routes=b}a.start="Inferno",a.costs=[{name:1},{name:10},{name:100}],a.alcohols=[{name:1},{name:10},{name:100}],a.distances=[{name:1},{name:10},{name:100}],b.getGenericRouteRequestId(a.start).then(function(a){c(a);var e=a;setTimeout(function(){b.getResult(e).then(function(a){d(a)})},7e3)}),a.refineTour=function(){console.log("Something should happen"),console.log(a.cost.name),b.getPreferenceRouteRequestId(a.cost.name,a.alcohol.name,a.distance.name,a.start).then(function(a){c(a);var e=a;setTimeout(function(){b.getResult(e).then(function(a){d(a)})},7e3)})}}]);var serviceModule=angular.module("module.service",[]);serviceModule.service("crawlrService",["$http","$q",function(a,b){return{getGenericRouteRequestId:function(c){var d=b.defer();return a({method:"GET",url:"http://crawlrapi.herokuapp.com/route/"+c}).success(function(a){d.resolve(a)}).error(function(){d.reject("Error getting crawlr front page.")}),d.promise},getResult:function(c){var d=b.defer();return a({method:"GET",url:"http://crawlrapi.herokuapp.com/result/"+c+"/.json"}).success(function(a){d.resolve(angular.fromJson(a).tours)}).error(function(){d.reject("Error getting crawlr front page.")}),d.promise},getPreferenceRouteRequestId:function(c,d,e,f){var g=b.defer();return a({method:"POST",url:"http://crawlrapi.herokuapp.com/route/"+f,data:"cost="+c+"&alcohol="+d+"&distance="+e,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(a){g.resolve(a)}).error(function(){g.reject("Error getting crawlr front page.")}),g.promise}}}]);