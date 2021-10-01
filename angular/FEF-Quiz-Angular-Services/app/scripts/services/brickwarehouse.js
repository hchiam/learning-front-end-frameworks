"use strict";

/**
 * @ngdoc service
 * @name serviceQuizApp.brickWarehouse
 * @description
 * # brickWarehouse
 * Service in the serviceQuizApp.
 */
angular.module("serviceQuizApp").service("brickWarehouse", function () {
  // AngularJS will instantiate a singleton by calling "new" on this function

  this.decrement = (type, size) => {
    // TODO: I'd probably use an enum and callbacks, etc. to make this more modular
    if (type === "red") {
      this.redBricks[size].quantity--;
    } else if (type === "blue") {
      this.blueBricks[size].quantity--;
    } else if (type === "green") {
      this.greenBricks[size].quantity--;
    }
  };

  this.redBricks = {
    "1x1": {
      color: "red",
      quantity: 13 + 16,
      price: 0.01,
    },
    "2x2": {
      color: "red",
      quantity: 48,
      price: 0.03,
    },
    "2x6": {
      color: "red",
      quantity: 9 + 18,
      price: 0.05,
    },
  };
  this.blueBricks = {
    "2x2": {
      color: "blue",
      quantity: 7,
      price: 0.02,
    },
    "2x4": {
      color: "blue",
      quantity: 2,
      price: 0.04,
    },
  };
  this.greenBricks = {
    "2x4": {
      color: "green",
      quantity: 13,
      price: 0.04,
    },
    "2x8": {
      color: "green",
      quantity: 41,
      price: 0.08,
    },
  };
});
