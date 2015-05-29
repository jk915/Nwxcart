(function() {
    angular
        .module('cartApp.catalog')
        .controller('DetailsController', DetailsController);

    DetailsController.$inject = ["Product", "$stateParams", "$state"];

    function DetailsController(Product, $stateParams, $state)
    {
        var vm = this;

        vm.product = {};

        activate();

        // -------------------------------------//

        function activate() {
            var id = $stateParams.id;
            Product.get(id).then(function(data) {
                vm.product = data;
            });
        }

    }
})();

