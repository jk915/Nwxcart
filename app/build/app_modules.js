(function() {
    angular
        .module('cartApp', [

            /* External modules */
            "ui.router",
            'ngResource',
            'ngCart',

            /* App modules */
            "cartApp.catalog",
            "cartApp.cart"
        ])
        .run(run);

    function run($rootScope) {
        $rootScope.consultant = null;
        $rootScope.setConsultant = function() {
            $rootScope.consultant = {id: 1, name: "Nicole Williams"};
        }
    }
})();


(function() {
    angular
        .module('cartApp.cart', []);
})();

(function() {
    angular
        .module('cartApp.catalog', []);
})();
