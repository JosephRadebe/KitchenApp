angular.module("digiwaiter", ['ui.router', 'digiwaiter.controllers', 'digiwaiter.service', 'angularSpinners', 'ui.bootstrap', 'naif.base64', 'chart.js', 'ngFileUpload','ngMaterial','chart.donut'])

    .config(function ($stateProvider, $urlRouterProvider, ChartJsProvider, $mdIconProvider) {

        $urlRouterProvider

            .when("", "/welcome");

        $stateProvider
             //State for Home page
             .state("welcome", {
                url: "/welcome",
                templateUrl: "views/welcome.html",
                controller: "welcomeCtrl"
            }) 
             //State for Home page
             .state("home", {
                url: "/home",
                templateUrl: "views/home.html",
                controller: "homeCtrl"
            })   

             //State for specials page
             .state("specials", {
                url: "/specials",
                templateUrl: "views/specials.html",
                controller: "specialsCtrl"
            })  
            .state("ready", {
                url: "/ready",
                templateUrl: "views/readyorders.html",
                controller: "readyCtrl"
            })  
            
              //State for cart items page
             .state("myDish", {
                url: "/myDish",
                templateUrl: "views/myDish.html",
                controller: "myDishCtrl"
            })

                //State for payment1 page
             .state("payment", {
                url: "/payment",
                templateUrl: "views/payment.html",
                controller: "paymentCtrl"
            })

             //State for track order page
             .state("trackOrder", {
                url: "/trackOrder",
                templateUrl: "views/trackOrder.html",
                controller: "trackOrderCtrl"
            })
    })