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
```

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
