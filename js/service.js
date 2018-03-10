angular.module("digiwaiter.service", [])

    .factory('DigiWaiterService', function ($http) {
        //Constant api url path
        const ApiCall = {
            // baseUrl : 'http://localhost:8080/RestaurantApp/webresources/restaurant.api.Menu/Menu/'
            baseUrl : 'http://192.168.3.58:41048/Zen63/webresources/',
            // baseUrl: 'http://129.232.232.18:9091/Zen63/webresources/',
            // baseUrl: 'http://197.242.157.242:8080/Zen63/webresources/',
            // baseUrl: 'http://129.232.243.122:8080/RestaurantApp1/webresources/',
        };
        //Calling Api for menu of the Restaurant
        return {
            menu: function () {
                var getMenu = $http.get(ApiCall.baseUrl + 'GetAllMenus');
                return getMenu;
            },
            // getOrders: function()
            // {
            //     var getMenu = $http.get(ApiCall.baseUrl + 'restaurant.api.table/Table/GetAllTable');
            //     return getMenu;
            // },
            getOrders: function () {
                var getMenu = $http.get(ApiCall.baseUrl + 'restaurant.api.order/Order/GetKitchenOrdersByTables');
                return getMenu;
            },
            prepareOrder: function (ordID) {
                var req = $http.get(ApiCall.baseUrl + 'restaurant.api.order/Order/prepare/kitchen/order?OrderLineID=' + ordID);
                return req;
            },
            getReadyOrders: function () {
                var req = $http.get(ApiCall.baseUrl + 'restaurant.api.order/Order/GetUncollectedKitchenOrdersByTables');
                return req;
            },
            acceptOrder: function (ordID) {
                var req = $http.get(ApiCall.baseUrl + 'restaurant.api.order/Order/accept/kitchen/order?OrderLineID=' + ordID);
                return req;
            },
            completeOrder: function (ordID) {
                var req = $http.get(ApiCall.baseUrl + 'restaurant.api.order/Order/complete/kitchen/order?OrderLineID=' + ordID);
                return req;
            },
            payment: function (ordID) {
                var req = $http.get(ApiCall.baseUrl + 'restaurant.api.order/Order/complete/kitchen/order?OrderLineID=' + ordID);
                return req;
            }
        }
    })