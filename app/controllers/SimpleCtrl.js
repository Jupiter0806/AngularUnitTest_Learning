/**
 * Created by jupiterli on 13/01/2017.
 */

(function() {
    unitTestApp
        .controller("SimpleCtrl", function($scope, $http) {

            $scope.name = "Simple";

            $scope.GetUser = function () {
                $http.get('/auth.py').then(function (response) {
                    $scope.user = response.data;
                });
            }

        });
})();