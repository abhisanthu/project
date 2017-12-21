angular.module('starter').controller("myctrl", ['$scope', '$http', function ($scope, $http)
    {


        alert("WELCOME TO  RETAIL WINESHOP");

        alert("CLICK OK TO ENTER CLOSING STOCK");

 $http.get('http://192.168.1.11:9999/abhi').success(function (response) {

            console.log(response);
            $scope.respo = response

            $scope.rr1 = response[0];
            $scope.rr2 = response[1];
            $scope.rr3 = response[2];

            var arr = [];
            var obj = {};



            obj["dfg"] = $scope.rr1;
            obj["d"] = $scope.rr2;
            obj["fg"] = $scope.rr3;

            console.log(obj);

            arr.push(obj);
            console.log(arr[0]);

            $scope.g = arr[0];
            console.log($scope.g);
            console.log(arr.constructor);


        })

$scope.check = function (res147) {
            alert("CHECK FUNCTION  CALLED");

            var res147 = res147;
            // var res258 = res258;
            // var datetimeValue = datetimeValue;

            console.log(res147);

            var at = res147;
            console.log(at);
$http.get('http://192.168.1.11:9999/withincheck' + at).success(function (response) {
                // alert("gggggggggggg");
                console.log(response);

                $scope.r = response;
           })
        } // check() end



}]);
