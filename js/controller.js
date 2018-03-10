angular.module("digiwaiter.controllers", [])

  .controller('homeCtrl', function ($scope, $timeout,$filter ,$state, $rootScope, DigiWaiterService) {

           $scope.specials = function () {
                $state.go("specials");
            }      
            $scope.myDish = function () {
                $state.go("myDish");
            }


            $scope.readyOrders = function () {
                $state.go("ready");
            }
            $scope.counter = 0;
            $scope.onTimeout = function(){

                $scope.getAllOrders();
                $scope.counter++;
                console.log("Running...");
                var input = new Date();
               
                var _date = $filter('date')(new Date(input), 'hh:mm:ss');
                console.log(_date);
            //    setTimeout(function () {
            //         $scope.displayErrorMsg = false;
            //         console.log("Sleeping...");
            //         $scope.$apply(100000);
            //     }, 100000);
                mytimeout = $timeout($scope.onTimeout,2000);
            }
            
            var mytimeout = $timeout($scope.onTimeout,2000);
            $scope.getAllOrders = function(){
                console.log("API....");
                $rootScope.APICalls = false;
               

                // if($rootScope.APICalls == false)
                // {
                    var request = DigiWaiterService.getOrders();
                    request.success(function (response) {
                        $rootScope.totalOrders = response.Results;
                        console.log($rootScope.totalOrders);
                    }).error(function (error) {
                        $rootScope.error = error;
                        console.log('Error occur at line ' + $rootScope.error)
                    });
                    
                // }
            }

            $scope.stop = function(){
                $timeout.cancel(mytimeout);
            }


            $scope.orderPrepare = function (orderID) {
                var request = DigiWaiterService.prepareOrder(orderID);
                request.success(function (response) {
                    console.log(response);
                    //$scope.isPrepared = true;
                    //$scope.isAccepted = false;
                    $scope.getAllOrders();
                }).error(function (error) {
                    $rootScope.error = error;
                    console.log('Error occur at line ' + $rootScope.error)
                });
            }
            $scope.orderAccept = function (orderID) {
                $scope.getAllOrders();

                var request = DigiWaiterService.acceptOrder(orderID);
                console.log(orderID);
                request.success(function (response) {
                    //$scope.isAccepted = true;
                    //$scope.isPrepared = false;
                    console.log(response);
                    $scope.getAllOrders();
                }).error(function (error) {
                    $rootScope.error = error;
                    console.log('Error occur at line ' + $rootScope.error)
                });
            }

            $scope.orderComplete = function (orderID) {
                $scope.getAllOrders();

                var request = DigiWaiterService.completeOrder(orderID);
                request.success(function (response) {
                    //$scope.isCompleted = true;
                    console.log(response);
                    $scope.getAllOrders();
                }).error(function (error) {
                    $rootScope.error = error;
                    console.log('Error occur at line ' + $rootScope.error)
                });
            }

        //Calling the Api for all the menu for the Resturant
       /* var menu = DigiWaiterService.menu();
        menu.success(function (response) {
            $rootScope.menus = response;
            console.log($rootScope.menus);
        }).error(function (error) {
            $rootScope.error = error;
            console.log('Error occur at line ' + $rootScope.error)
        });

        //Passing all the items of the selected menu
        $scope.menuItems = function (Items) {
            $rootScope.Items = Items;
            console.log($rootScope.Items);
        }   */    
  })
  .controller('welcomeCtrl', function ($scope, $state,$window, $rootScope,$timeout) {

     $scope.home = function () {
         $state.go("home");
         //s$timeout.cancel(mytimeout);
     }

     
  })
    .controller('readyCtrl', function ($scope, $state, $window, $timeout,$rootScope,DigiWaiterService) {

        $scope.home = function () {
            $state.go("home");
        }
        var menu = DigiWaiterService.getReadyOrders();
        menu.success(function (res) {
            $scope.readyOrders = res.Results;
            console.log($scope.readyOrders);
            mytimeout = $timeout($scope.onTimeout,2000);
        }).error(function (error) {
            $rootScope.error = error;
            console.log('Error occur at line ' + $rootScope.error)
        });

        var mytimeout = $timeout($scope.onTimeout,2000);

        $scope.myDish = function () {
            $state.go("myDish");
        }
        $scope.home = function () {
            $state.go("home");
        }
    })
   .controller('specialsCtrl', function ($scope, $state,$window, $timeout,$rootScope) {

     $scope.home = function () {
         $state.go("home");
     }
      $scope.myDish = function () {
        $state.go("myDish");
    }
  })
 
  .controller('myDishCtrl', function ($scope, $state,$window, $rootScope) {

     $scope.home = function () {
         $state.go("home");
     }
    
    $scope.specials = function () {
        $state.go("specials");
    }
    $scope.payment = function () {
         $state.go("payment");
     }

     //duplicate script here 
     
  })
  .controller('paymentCtrl', function ($scope, $state,$window, $rootScope) {

     $scope.home = function () {
         $state.go("home");
     }
    $scope.specials = function () {
         $state.go("specials");
     }
    $scope.myDish = function () {
         $state.go("myDish");
     }
    $scope.welcome = function () {
         $state.go("welcome");
     }
  })
  .controller('trackOrderCtrl', function ($scope, $state,$window, $rootScope) {

     $scope.home = function () {
         $state.go("home");
     }
    $scope.specials = function () {
         $state.go("specials");
     }
    $scope.myDish = function () {
         $state.go("myDish");
     }
    
  })
 