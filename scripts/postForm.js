"use strict";

const PostForm = {
  bindings: {
    addPost: "&"
  },
  template: `
    <form ng-submit="$ctrl.addPost({ newPost: $ctrl.newPost}); ng-hide;">
      <label for="title">Title</label>
      <input expand-on-focus class="form-field" type="text" id="title" ng-model="$ctrl.newPost.subj" placeholder="Post title">
      <label for="post">Post</label>
      <textarea expand-on-focus class="form-field" id="post" ng-model="$ctrl.newPost.body"></textarea>
      <button class="post-button">Post Chirp</button>
    </form>
  `,
  controller: function($element) {
    const vm = this;

    $element.find("button").on("click", () => {
        // console.log($element);
        console.log("click");
        $element.css("display", "none");
        
        // $element["0"].children["0"][2].on("click", () => {
          if ($element.hasClass("post-button")) {

          }
          
        // })
      
      
    });

  } 

} // end component
  function expandOnFocus() {
    return {
      restrict: "A",
      link: function($scope, $element, $attrs) {
        $element.on("focus", () => {
          // console.log("focus");
          $element.css("height", "100px")
          
        });
        $element.on("blur", () => {
          // console.log("blur");

          $element.css("height", "initial")
          
        });
      }
    }
  }

// add directive to both form inputs

angular
  .module("ChirpApp")
  .component("postForm",PostForm)
  .directive("expandOnFocus",expandOnFocus);
