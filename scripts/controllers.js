angular.module("Controllers",[])
    .controller("DemoController",["$scope",function($scope){
        console.log("启动了");
    }])
    .controller("NavController",["$scope",function($scope){
        $scope.navs = [
            {
                link:"#/today",
                text:"今日一刻",
                icon:"icon-home"
            },
            {
                link:"#/older",
                text:"往期内容",
                icon:"icon-file-empty"
            },
            {
                link:"#/hot",
                text:"热门作者",
                icon:"icon-pencil"
            },
            {
                link:"#",
                text:"栏目浏览",
                icon:"icon-menu"
            },
            {
                link:"#",
                text:"我的喜欢",
                icon:"icon-heart"
            },
            {
                link:"#",
                text:"设置",
                icon:"icon-cog"
            }
        ];
    }])
    .controller("TodayController",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
        console.log("今日一刻");
        $rootScope.title = "今日一刻";
        $rootScope.index=0;
        $rootScope.loaded = false;
        var today = $filter("date")(new Date(),"yyyy-MM-dd");

        $http({
            url : "./api/today.php",
            method : "get",
            params : {
                today : today 
            }
        }).success(function(info){
            $rootScope.loaded = true;
            $scope.info = info;
        });
    }])
    .controller("OlderController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
        console.log("往期内容");
        $rootScope.title = "往期内容";
        $rootScope.index = 1;
        $rootScope.loaded = false;
        $http({
            method : "get",
            url : "./api/older.php"
        }).success(function(info){
            console.log(info);
            $rootScope.loaded = true;
            $scope.info = info;
        });
    }])