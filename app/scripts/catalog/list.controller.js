(function() {
    angular
        .module('cartApp.catalog')
        .controller('ListController', ListController);

    ListController.$inject = ["$scope", "$rootScope", "$filter", "Product", "$state"];

    function ListController($scope, $rootScope, $filter, Product, $state)
    {
        var vm = this;

        vm.productsOriginal = [];
        vm.productsFound = [];
        vm.products = [];

        vm.searchProducts = searchProducts;

        activate();

        // -------------------------------------//a

        function searchProducts(query) {
            vm.products = $filter('filter')(vm.productsOriginal, query);
            vm.productsFound = vm.products;
        }

        function activate() {
            Product.query().success(function(data) {
                vm.productsOriginal = data;
                vm.productsFound = data;
                vm.products = data;

                if ($state.params["query"] !== undefined) {
                    vm.searchProducts($state.params.query);
                }
            });

            $rootScope.$on('search', function(e, args) {
                vm.searchProducts(args.query);
            });

            $rootScope.$on('filter', function(e, args) {
                if ((args.price !== undefined) && (args.price.length > 0)) {
                    var price = args.price;
                    var filteredProducts = [];
                    for (var i in vm.productsFound) {
                        var product = vm.productsFound[i];
                        for (var j in price) {
                            if ((product.price >= price[j].min) && (product.price <= price[j].max)) {
                                filteredProducts.push(product);
                            }
                        }
                    }
                    vm.products = filteredProducts;
                }
                else {
                    vm.products = vm.productsFound;
                }
            });
        }

    }
})();

