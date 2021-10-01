# AngularJS (Angular 1)

<https://classroom.udacity.com/courses/ud894/lessons/7088388557/concepts/70707885650923>

---

## yeoman for consistency and organization

<https://github.com/yeoman/generator-angular#angularjs-generator-->

```bash
mkdir yeoman
cd yeoman
npm install -g grunt-cli bower yo generator-karma generator-angular
yo angular udaciMeals
grunt serve
```

Generate files:

```bash
yo angular:controller menu
yo angular:view menu
yo angular:service foodFinder
```

## AngularUI Router: `ui-router`

<https://github.com/angular-ui/ui-router>

```bash
bower install -S angular-ui-router
# -S to save to bower config file
```

[Config example](https://github.com/angular-ui/ui-router/wiki/Quick-Reference#configure-your-states-in-your-modules-config-method):

```js
// inject the ui-router module into the app module:
angular.module("udaciMealsApp", ["ui.router"]).config([
  "$stateProvider",
  "$urlRouterProvider",
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "views/menu.html",
        controller: "MenuCtrl as menu",
      })
      .state("item", {
        url: "/item/:id",
        templateUrl: "views/item.html",
        controller: "ItemCtrl as item",
      });
  },
]);
```

```html
<div ui-view></div>
```

and use the route `:id` in the template controller:

```js
angular.module("udaciMealsApp").controller("ItemCtrl", [
  "$stateParams",
  "foodFinder",
  function ($stateParams, foodFinder) {
    var vs = this;

    // $stateParams.id = route /item/:id
    foodFinder.getItem($stateParams.id).then(function (data) {
      vs.data = data;
    });
  },
]);

//

angular
  .module("udaciMealsApp")
  .service("foodFinder", function ($stateParams, foodFinder) {
    // ...

    this.getItem = function (id) {
      var menuItemFile = "/menu/" + id + ".json";
      return $.get(menuItemFile);
    };
  });
```

```html
<a ui-sref="item({id: item.id})"></a>
```

ui-router nested views: <https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views> (lets you inherit data from the parent route's scope)

## quizzes

<details>
<summary>quiz 1</summary>

<https://github.com/udacity/FEF-Quiz-Angular-Up-and-Running>

```bash
gh repo clone udacity/FEF-Quiz-Angular-Up-and-Running
cd FEF-Quiz-Angular-Up-and-Running
npm install
bower install
grunt serve
```

</details>

Just:

- include the script for AngularJS
- add the `ng-app` attribute to the `<body>` tag

<details>
<summary>quiz 2</summary>

<https://github.com/udacity/FEF-Quiz-Angular-Module>

```bash
gh repo clone udacity/FEF-Quiz-Angular-Module
cd FEF-Quiz-Angular-Module
npm install; bower install; grunt serve
```

</details>

```js
// CREATE:
angular.module("legoBricks", []);

// and in another J file: (GET)
angular.module("newModuleQuizApp", ["legoBricks"]);
```

```html
<script src="scripts/legoBricks.js"></script>
```

```html
<body ng-app="newModuleQuizApp"></body>
```

<details>
<summary>quiz 3</summary>

```bash
gh repo clone udacity/FEF-Quiz-Angular-Bootstrap; cd FEF-Quiz-Angular-Bootstrap; npm install; bower install; grunt serve
```

</details>

```html
<div ng-include="'views/menu.html'" ng-controller="MenuCtrl as menu"></div>
```

```html
<div class="row">
  <div class="items-container">
    <div class="col-md-4">
      <h4>{{menu.name}}</h4>
      <p>Rating: {{menu.rating}}</p>
      <p>Image: {{menu.img}}</p>
    </div>
  </div>
</div>
```

```js
angular.module("q1UpAndRunningApp").controller("MenuCtrl", function () {
  this.id = "some-id";
  this.name = "some name";
  this.img = "some image";
  this.rating = 3;
});
```

<details>
<summary>quiz 4</summary>

```bash
gh repo clone udacity/FEF-Quiz-Angular-Controllers; cd FEF-Quiz-Angular-Controllers; npm install; bower install; grunt serve
```

</details>

Directives are things like `ng-app`, `ng-controller`, `ng-include` (for view/template), `ng-src`, `ng-show`, `ng-if`, `ng-repeat`, `ng-class`, `ng-click`, etc.

Note that `ng-src` should be used instead of `src` for dynamic links, since the browser will try to immediately fetch the `src` while `ng-src` is under Angular's control and will be populated and fetched when ready.

<details>
<summary>quiz 5</summary>

```bash
gh repo clone udacity/FEF-Quiz-Angular-Directives; cd FEF-Quiz-Angular-Directives; npm i; bower install; grunt serve
```

</details>

Dependency injection:

- what: don't hard code dependencies in the code, but give it its dependencies when that code is called

- why: decouple. simplify that code. make it easier to update that code's dependencies.

- how: an "injector" knows where are the info and services are. then some code can tell the injector what it needs, and the injector fetches what that calling code needs.

Services:

- services seem similar to controllers, but controllers are specific to one view, while services are not specific to one view and are usually intended to "serve"" multiple views

- example: a user service to fetch user data can be used by a menu controller/view and an item controller/view

  ```js
  angular.module("udaciMealsApp").service("foodFinder", function () {
    this.getMenu = function () {
      return $.get("/menu/menu.json");
    };
  });

  // we can inject the service as a dependency in the controller code:

  angular.module("udaciMealsApp").controller("MenuCtrl", [
    "foodFinder", // dependency services injected here!
    "service2",
    "service3",
    function (menu, s2, s3) {
      var vm = this;
      menu.getMenu().then(function (data) {
        vm.items = data;
      });
    },
  ]);
  ```

<details>
<summary>quiz 6</summary>

```bash
gh repo clone udacity/FEF-Quiz-Angular-Services; cd FEF-Quiz-Angular-Services; npm i; bower install; grunt serve
```

</details>

<details>
<summary>quiz 7</summary>

```bash
gh repo clone udacity/FEF-Quiz-Angular-Routing; cd FEF-Quiz-Angular-Routing; npm i; bower install; grunt serve
```

</details>
