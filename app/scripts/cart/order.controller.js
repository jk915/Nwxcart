(function() {
    angular
        .module('cartApp.cart')
        .controller('OrderController', OrderController);

    OrderController.$inject = ["ngCart"];

    function OrderController(ngCart)
    {
        var vm = this;

        activate();

        // -------------------------------------//

        function activate() {
            ngCart.setTaxRate(7.5);
            ngCart.setShipping(2.99);
        }

    }
})();

