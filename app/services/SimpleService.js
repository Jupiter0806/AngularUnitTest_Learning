/**
 * Created by jupiterli on 15/01/2017.
 */

(function() {

    unitTestApp
        .service('SimpleService', ['$q', '$http', SimpleService]);

    function SimpleService($q, $http) {

        return {
            getUserNumber : function () {
                var q = $q.defer();

                $http({method: 'GET', url: '/auth.py'}).then(
                    function (response) {
                        q.resolve(parseInt(response.data));
                    },
                    function (response) {
                        q.reject(response.data);
                    }
                );

                return q.promise;
            }
        }
    }

})();