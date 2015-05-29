(function() {
    angular
        .module('cartApp.catalog')
        .controller('SearchController', SearchController);

    SearchController.$inject = ["$scope", "$rootScope", "$state"];

    function SearchController($scope, $rootScope, $state)
    {
        var vm = this;

        vm.query = "";
        vm.search = search;

        activate();

        // -------------------------------------//

        function search() {
            $state.go('catalog.list.search', {query: vm.query});
            $rootScope.$broadcast('search', {query: vm.query});
        }

        function activate() {
            $rootScope.$on('search-reload', function() {
                vm.search();
            });
        }

    }
})();

