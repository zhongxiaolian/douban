var douban = angular.module("douban",['ngRoute','Controllers',"Directives"]);

douban.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/today',{
        templateUrl : "./views/today.html",
        controller : "TodayController"
    })
    .when("/older",{
        templateUrl : "./views/older.html",
        controller : "OlderController"
    })
    .otherwise({
        redirectTo : '/today'
    })
}]);

douban.run(["$rootScope",function($rootScope){

    $rootScope.collapsed = false;
    $rootScope.toggle = function(){
        console.log("root作用域下的toggle方法");
        $rootScope.collapsed = !$rootScope.collapsed;
        var navs = document.querySelectorAll(".navs dd");
        if($rootScope.collapsed){
            console.log("开");
            for(var i=0;i<navs.length;i++){
                navs[i].style.transform = "translate(0)";
                navs[i].style.transitionDelay = "0.2s";
                navs[i].style.transitionDuration = (i+1)*0.15+"s";
            }
        }else{
            console.log("关");
            var len = navs.length-1;
            for(var j=len;j>=0;j--){
                navs[j].style.transform = "translate(-100%)";
                navs[j].style.transitionDelay = "";
                navs[j].style.transitionDuration = (len-j)*0.15 +"s";
            }
        }
    }
}])