// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', "ion-datetime-picker"])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {

                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);


                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        })
    })
// 



// .controller("myctrl",['$scope','$http',function($scope,$http)
//            {
//             alert("sdfghjkjhgfdsasdfg");

//             $scope.check=function(num,price)
//             {

//               var num=num;
//                var price=price;

//               console.log(num+" "+price);

//               var at = num + " , " + price;
//         console.log(at);

//             // $scope.name="abhi";

//             // $scope.check=function(datetimeValue,num,price){
//             //   alert(datetimeValue+num+price);
//             //     console.log(datetimeValue+" "+num+" "+price);
//           $http.get('http://192.168.1.11:9999/abhi/' +at).success(function(response)
//      {
//       alert("gggggggggggg");
//        console.log(response);
//      })
//         }
//              }]);
