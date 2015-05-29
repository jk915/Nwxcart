(function() {
    angular
        .module('cartApp')
        .config(config);

    config.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

    function config($locationProvider, $stateProvider, $urlRouterProvider)
    {
        //$locationProvider.html5Mode(true);

        $urlRouterProvider.when('', '/catalog/').when('/', '/catalog/');

        var viewsDir = '/template/';
        $stateProvider
            .state('catalog', {
                abstract: true,
                url: "/catalog",
                templateUrl: viewsDir + "catalog/layout.html"
            })
            .state('catalog.list', {
                url: "/",
                templateUrl: viewsDir + "catalog/list.html",
                controller: "ListController",
                controllerAs: "list"
            })
            .state('catalog.list.search', {
                url: "search/:query",
                templateUrl: viewsDir + "catalog/list.html",
                controller: "ListController",
                controllerAs: "list"
            })
            .state('catalog.details', {
                url: "/{id:[0-9]{1,8}}",
                templateUrl: viewsDir + "catalog/details.html",
                controller: "DetailsController",
                controllerAs: "details"
            })
            .state('cart', {
                url: "/cart/",
                templateUrl: viewsDir + "cart/order.html",
                controller: "OrderController",
                controllerAs: "cart"
            });
    }
})();

