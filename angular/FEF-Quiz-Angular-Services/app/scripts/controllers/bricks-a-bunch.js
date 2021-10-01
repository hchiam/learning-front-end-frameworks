"use strict";

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module("serviceQuizApp").controller("BricksABunchCtrl", [
  "brickWarehouse",
  function (brickWarehouseSvc) {
    this.name = "Bricks A Bunch";
    this.redBricks = brickWarehouseSvc.redBricks;
    this.addToCart = brickWarehouseSvc.decrement;
  },
]);
