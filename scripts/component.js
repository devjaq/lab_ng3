"use strict";

const prac = {
  template: `
  <contents ng-repeat="person in $ctrl.things" person="person"></contents>
  `,
  controller: function() {
    const vm = this;

    vm.things = [
      {
        name: "Jaq",
        age: 27
      },
      {
        name: "Lyss",
        age: 17
      }
    ];
  }

}; // end of component "prac"

const contents = {
  bindings:{
    person: "<"
  },
  template:`
    <div>
      <p> Name: {{ $ctrl.person.name }} </p>
      <p> Age: {{ $ctrl.person.age }} </p>
    </div>
  `,
  controller: function() {
    const vm = this;



  }
} // end of component "contents"

function MyHeader() {
  return {
    restrict: "E",
    replace: true,
    template: `<h1 style="color:{{color}}">Hello World</h1>`,
    link: ($scope, $element, $attrs) => {
      $element.on("click", function() {
        $element.css("color", "blue");
        $scope.$apply(function() {
          $scope.color = "blue";
        }); // end $apply
      }); // end onclick
      
      $element.on("mouseover", function() {
      $element.css("cursor", "crosshair");
      }); // end mouseover
    } // end link
  } 
};

angular
  .module("PracApp")
  .component("prac", prac)
  .component("contents", contents)
  .directive("myHeader", MyHeader);