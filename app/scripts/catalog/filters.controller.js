(function() {
    angular
        .module('cartApp.catalog')
        .controller('FiltersController', FiltersController);

    FiltersController.$inject = ["$rootScope"];

    function FiltersController($rootScope)
    {
        var vm = this;

        vm.filters = {
            price: [
                {name: "< $5", min: 0, max: 5, selected: false},
                {name: "$5 - $10", min: 5, max: 10, selected: false},
                {name: "$10 - $20", min: 10, max: 20, selected: false},
                {name: "$20 - $40", min: 20, max: 40, selected: false},
                {name: "> $40", min: 40, max: 999, selected: false}
            ]
        };
        vm.filterProducts = filterProducts;

        activate();

        // -------------------------------------//

        function filterProducts() {
            var price = [];
            for (var i in vm.filters.price) {
                if (vm.filters.price[i].selected) {
                    price.push(vm.filters.price[i]);
                }
            }
            $rootScope.$broadcast('filter', {price: price});
        }

        function activate() {

        }

    }
})();

