!function(a,b){"use strict";b.module("ui.sortable",[]).value("uiSortableConfig",{}).directive("uiSortable",["uiSortableConfig","$timeout","$log",function(a,c,d){return{require:"?ngModel",link:function(e,f,g,h){function i(a,b){return b&&"function"==typeof b?function(c,d){a(c,d),b(c,d)}:a}var j,k={},l={receive:null,remove:null,start:null,stop:null,update:null};b.extend(k,a),h?(e.$watch(g.ngModel+".length",function(){c(function(){f.data("ui-sortable")&&f.sortable("refresh")})}),l.start=function(a,b){b.item.sortable={index:b.item.index(),cancel:function(){b.item.sortable._isCanceled=!0},isCanceled:function(){return b.item.sortable._isCanceled},_isCanceled:!1}},l.activate=function(){j=f.contents();var a=f.sortable("option","placeholder");if(a&&a.element&&"function"==typeof a.element){var c=a.element();c.jquery||(c=b.element(c));var d=f.find('[class="'+c.attr("class")+'"]');j=j.not(d)}},l.update=function(a,b){b.item.sortable.received||(b.item.sortable.dropindex=b.item.index(),b.item.sortable.droptarget=b.item.parent(),f.sortable("cancel")),"clone"===f.sortable("option","helper")&&(j=j.not(j.last())),j.appendTo(f),b.item.sortable.received&&!b.item.sortable.isCanceled()&&e.$apply(function(){h.$modelValue.splice(b.item.sortable.dropindex,0,b.item.sortable.moved)})},l.stop=function(a,b){!b.item.sortable.received&&"dropindex"in b.item.sortable&&!b.item.sortable.isCanceled()?e.$apply(function(){h.$modelValue.splice(b.item.sortable.dropindex,0,h.$modelValue.splice(b.item.sortable.index,1)[0])}):"dropindex"in b.item.sortable&&!b.item.sortable.isCanceled()||"clone"===f.sortable("option","helper")||j.appendTo(f)},l.receive=function(a,b){b.item.sortable.received=!0},l.remove=function(a,b){b.item.sortable.isCanceled()||e.$apply(function(){b.item.sortable.moved=h.$modelValue.splice(b.item.sortable.index,1)[0]})},e.$watch(g.uiSortable,function(a){f.data("ui-sortable")&&b.forEach(a,function(a,b){l[b]&&("stop"===b&&(a=i(a,function(){e.$apply()})),a=i(l[b],a)),f.sortable("option",b,a)})},!0),b.forEach(l,function(a,b){k[b]=i(a,k[b])})):d.info("ui.sortable: ngModel not provided!",f),f.sortable(k)}}}])}(window,window.angular),angular.module("barcrlApp",["ngCookies","ngResource","ngSanitize","ngRoute","module.service","module.controller","module.filter","ui.bootstrap","ngSlider","chieffancypants.loadingBar","google-maps","ui.sortable"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/Crawl/:barId",{templateUrl:"/views/crawl.html",controller:"CrawlCtrl"}).when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/history/:requestId",{templateUrl:"views/crawl.html",controller:"CrawlCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!1)}]),angular.module("module.service",[]).factory("crawlrService",["$http","$q",function(a,b){return{getGenericRouteRequestId:function(c){var d=b.defer();return a({method:"GET",url:"http://crawlrapi.herokuapp.com/route/"+c}).success(function(a){d.resolve(a)}).error(function(){d.reject("Error getting crawlr front page.")}),d.promise},getResult:function(c){var d=b.defer();return a({method:"GET",url:"http://crawlrapi.herokuapp.com/result/"+c+"/.json"}).success(function(a){d.resolve(angular.fromJson(a).tours)}).error(function(){d.reject("Error getting crawlr front page.")}),d.promise},getPreferenceRouteRequestId:function(c,d,e,f){var g=b.defer();return a({method:"POST",url:"http://crawlrapi.herokuapp.com/route/"+f,data:"cost="+c+"&alcohol="+d+"&distance="+e,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(a){g.resolve(a)}).error(function(){g.reject("Error getting crawlr front page.")}),g.promise}}}]),angular.module("module.service").factory("barService",function(){return{getBars:function(){return[{id:"Allen.St..Grill",name:"Allen St. Grill",lat:"40.794302",lon:"-77.861613"},{id:"Bar.Bleu",name:"Bar Bleu",lat:"40.79773",lon:"-77.856613"},{id:"The.Brewery",name:"The Brewery",lat:"40.794952",lon:"-77.858437"},{id:"Cafe.210",name:"Cafe 210",lat:"40.793246",lon:"-77.862986"},{id:"Chilis",name:"Chilis",lat:"40.793864",lon:"-77.860543"},{id:"Chrome",name:"Chrome",lat:"40.791849",lon:"-77.862299"},{id:"Chumleys",name:"Chumley's",lat:"40.794188",lon:"-77.861763"},{id:"Darkhorse.Tavern",name:"Darkhorse Tavern",lat:"40.79466",lon:"-77.860218"},{id:"Gingerbread.Man",name:"Gingerbread Man",lat:"40.796706",lon:"-77.856849"},{id:"Indigo",name:"Indigo",lat:"40.794123",lon:"-77.861806"},{id:"Inferno",name:"Inferno",lat:"40.797535",lon:"-77.857321"},{id:"Kildares",name:"Kildares",lat:"40.800109",lon:"-77.85379"},{id:"Levels",name:"Levels",lat:"40.798233",lon:"-77.85627"},{id:"Lions.Den",name:"Lion's Den",lat:"40.797523",lon:"-77.856519"},{id:"Local.Whiskey",name:"Local Whiskey",lat:"40.793683",lon:"-77.860092"},{id:"Mad.Mex",name:"Mad Mex",lat:"40.793872",lon:"-77.85852"},{id:"The.Phyrst",name:"The Phyrst",lat:"40.793683",lon:"-77.860092"},{id:"Bill.Pickles.Tap.Room",name:"Bill Pickles Tap Room",lat:"40.794156",lon:"-77.861386"},{id:"The.Rathskeller",name:"The Rathskeller",lat:"40.795151",lon:"-77.860357"},{id:"Rotellis",name:"Rotellis",lat:"40.795699",lon:"-77.858772"},{id:"Rumors.Lounge",name:"Rumors Lounge",lat:"40.791536",lon:"-77.864552"},{id:"The.Saloon",name:"The Saloon",lat:"40.797315",lon:"-77.857395"},{id:"The.Shandygaff",name:"The Shandygaff",lat:"40.795301",lon:"-77.859534"},{id:"The.Tavern.Restaurant",name:"The Tavern Restaurant",lat:"40.795677",lon:"-77.859783"},{id:"Z.Bar...The.Deli",name:"Z Bar @ The Deli",lat:"40.797133",lon:"-77.857179"},{id:"Zenos",name:"Zenos",lat:"40.79432",lon:"-77.861621"}]},getSpecials:function(){return[{id:"Darkhorse.Tavern",days:"MWF",times:"8pm-12pm",description:"1/2 price wings"},{id:"Mad.Mex",days:"W",times:"8pm-12pm",description:"1/2 price on all food"}]}}}),angular.module("module.service").factory("historyService",["$cookieStore",function(a){return{addResult:function(b,c,d){var e=a.get("history");for(e||(e=[]);e.length>50;)e.pop();e.push({guid:b,timestamp:(new Date).getTime(),name:d}),a.put("history",e)},getRecent:function(){return a.get("history")||{}}}}]),angular.module("module.filter",[]).filter("ReplaceDots",function(){return function(a,b){return a.replace(/\./g,b)}}),angular.module("module.controller",["module.service"]).controller("MainCtrl",["$scope","$location","barService",function(a,b,c){a.bars=c.getBars(),a.goRandom=function(){var c=Math.floor(100*Math.random())%26;b.path("/Crawl/"+a.bars[c].id)}}]),angular.module("module.controller").controller("HistoryCtrl",["$scope","historyService",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.history=b.getRecent(),a.$watch("history",function(b,c){b!==c&&(a.history=c)})}]),angular.module("barcrlApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("module.controller").controller("CrawlCtrl",["$scope","$modal","$log","$location","crawlrService","barService","historyService","cfpLoadingBar","$routeParams",function(a,b,c,d,e,f,g,h,i){function j(b){a.requestId=b}function k(b){a.routes=b,a.map.markers=l(b),a.map.polyline.path=a.map.markers}function l(a){var b=[],c=a[0],d=0;return c.bars.forEach(function(a){d+=1;var c=n(a);b.push(m(d,c))}),b}function m(a,b){return{position:a,id:b.id,name:b.name,latitude:b.lat,longitude:b.lon}}function n(b){for(var c in a.bars)if(a.bars[c].id===b)return a.bars[c]}function o(b){b="undefined"!=typeof b?b:"Creating Bar Crawl",a.status=b,a.queryRunning=!0,h.start()}function p(b){b="undefined"!=typeof b?b:"Creating Bar Crawl",a.status=b,a.queryRunning=!1,h.complete()}function q(){a.map.markers=[];var b=n(i.barId);a.map.markers.push(m(1,b))}function r(b){a.barDetail.bar={};var c=n(b);a.barDetail.setBar(c),a.barDetail.visible=!0}function s(a,b,c){e.getResult(a).then(function(d){t(a,d,b,c)})}function t(a,b,c,d){k(b),p(c),d&&d(a,b)}function u(){if(i.requestId)a.requestId=i.requestId,s(i.requestId,"Here is your saved tour!",function(b,c){var d=c[0].bars[0];r(d),a.preferences.startingBarId=d});else{var b=i.barId;a.preferences.startingBarId=b,q(),r(b),e.getGenericRouteRequestId(b).then(function(a){o("Creating a Generic Bar Crawl"),j(a);var b=a;setTimeout(function(){s(b,"We found you a tour! You can refine it if you'd like.",function(a,b){g.addResult(a,b,"from "+n(b[0].bars[0]).name+" at "+(new Date).getTime())})},7e3)})}}a.bars=f.getBars(),a.specials=f.getSpecials(),a.preferences={cost:"50",alcohol:"50",distance:"50",length:"10"},a.queryRunning=!1,a.map={center:{latitude:40.7948,longitude:-77.859},zoom:13,markers:[],polyline:{visible:!0,fill:{color:"#FF0000",opacity:1},stroke:{color:"#FF0000",weight:10,opacity:1},path:[{latitude:0,longitude:0},{latitude:0,longitude:.001}]},icon:"//maps.gstatic.com/mapfiles/markers2/marker.png"},a.barDetail={isVisible:!1,setBar:function(a){this.bar=a;var b=location.protocol+"//"+location.hostname+":"+d.port()+location.pathname;this.image=b+"images/bars/"+a.id.toLowerCase()+".png",this.specials=this.getSpecials()},getSpecials:function(){var b=[];if(void 0!==this.bar){var c=this;a.specials.forEach(function(a){c.bar.id===a.id&&b.push(a)})}return b}},a.displayMarkers=function(){},a.showDetail=function(b){a.barDetail.setBar(n(b.id)),a.visible=!0},a.refineTour=function(){e.getPreferenceRouteRequestId(a.preferences.cost,a.preferences.alcohol,a.preferences.distance,a.preferences.startingBarId).then(function(a){o("Creating a Custom Bar Crawl based on your preferences."),j(a);var b=a;setTimeout(function(){e.getResult(b).then(function(a){k(a),g.addResult(b,a),p("We created a custom tour for you!")})},7e3)})},a.open=function(){var d=b.open({templateUrl:"crawlPreferences.html",controller:"ModalInstanceCtrl",resolve:{preferences:function(){return a.preferences}}});d.result.then(function(b){a.preferences.cost=b.cost,a.preferences.alcohol=b.alcohol,a.preferences.distance=b.distance,a.preferences.length=b.length,a.refineTour()},function(){c.info("Modal dismissed at: "+new Date)})},u()}]).controller("ModalInstanceCtrl",["$scope","$modalInstance","preferences",function(a,b,c){a.preferences=c,a.selectedLength=a.preferences.length,a.optionsLength={from:1,to:20,step:1,dimension:""},a.selectedCost=a.preferences.cost,a.optionsCost={from:1,to:100,step:1,dimension:"  $$"},a.selectedAlcohol=a.preferences.alcohol,a.optionsAlc={from:1,to:100,step:1,dimension:""},a.selectedDistance=a.preferences.distance,a.optionsDist={from:1,to:100,step:1,dimension:""},a.ok=function(){b.close({cost:a.selectedCost,alcohol:a.selectedAlcohol,distance:a.selectedDistance,length:a.selectedLength}),console.log(a.selectedLength)},a.cancel=function(){b.dismiss("cancel")}}]);