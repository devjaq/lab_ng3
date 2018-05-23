"use strict";

const socialPosts = {
  template: `
    <button type="button" ng-click="showForm = true;">New Chirp</button>
    <div class="chirp-feed">
      <post ng-repeat="post in $ctrl.posts" post="post"></post>
    </div>
    <post-form ng-show="showForm" add-post="$ctrl.addPost(newPost);"></post-form>
    <!-- <post-form ng-show="showForm"></post-form> -->
  `,
  controller: function($element) {
    const vm = this;

    vm.posts = [
      {
        subj: "Subject",
        body: "Body: ksga;lsgakngav ao;ri;KDSNGSD LKASJ;lkmf,sDG "
      },
      {
        subj: "Subject2",
        body: "Body2: ksga;lsgakngav ao;ri;KDSNGSD LKASJ;lkmf,sDG "
      }
    ]

    vm.addPost = (newPost) => {
      vm.posts.push({
        subj: newPost.subj,
        body: newPost.body
      });
      // console.log(newPost);
      
      newPost = {};
      // console.log(newPost);
    }

    $element.find("button").on("click", () => {

      console.log("click");
      $element.find("post-form").css("display", "flex");
      
        
      // })
    
    
  });

  }
}

angular
  .module("ChirpApp")
  .component("socialPosts",socialPosts);