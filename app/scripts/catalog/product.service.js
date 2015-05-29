(function() {
    angular
        .module('cartApp.catalog')
        .service('Product', Product);

    Product.$inject = ["$http"];
    function Product($http)
    {
        this.query = function() {
            return $http.get('/data/items.json');
        };

        this.get = function(id) {
            return $http.get('/data/items.json').then(function(result) {
                var data = result.data;
                for (var i in data) {
                    if (data[i].id == id) {
                        return data[i];
                    }
                }
                return {};
            });
        }
    }

})();