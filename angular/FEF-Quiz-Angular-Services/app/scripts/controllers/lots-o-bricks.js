"use strict";

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module("serviceQuizApp").controller("LotsOBricksCtrl", [
  "brickWarehouse",
  function (brickWarehouseSvc) {
    this.name = "Lots O Bricks";
    this.redBricks = brickWarehouseSvc.redBricks;
    this.blueBricks = brickWarehouseSvc.blueBricks;
    this.greenBricks = brickWarehouseSvc.greenBricks;
    this.addToCart = brickWarehouseSvc.decrement;
  },
]);
