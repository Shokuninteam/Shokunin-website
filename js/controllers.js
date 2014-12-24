var challengeApp = angular.module('shokuninApp', []);

challengeApp.controller('IndividualCtrl', function ($scope, $http) {



  $scope.clickSpread = function(){
    $(".head-pic").removeClass("selected");
    $("#spread-pic").addClass("selected");
    $('#cursor').removeClass();
    $('#cursor').addClass("cursor-spread");
  }

  $scope.clickFrank = function(){
    $(".head-pic").removeClass("selected");
    $("#frank-pic").addClass("selected");
    $('#cursor').removeClass();
    $('#cursor').addClass("cursor-frank");
  }

  $scope.clickMohamed = function(){
    $(".head-pic").removeClass("selected");
    $("#mohamed-pic").addClass("selected");
    $('#cursor').removeClass();
    $('#cursor').addClass("cursor-mohamed");
  }

  $scope.clickJulie = function(){
    $(".head-pic").removeClass("selected");
    $("#julie-pic").addClass("selected");
    $('#cursor').removeClass();
    $('#cursor').addClass("cursor-julie");
  }


});
