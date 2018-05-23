"use strict";

const post = {
  bindings: {
    post: "<"
  },
  template:`
  <li>
    <div>
      <p> Title: {{ $ctrl.post.subj }} </p>
      <p> Body: {{ $ctrl.post.body }} </p>
      <i class="material-icons">
      close
      </i>
    </div>
  </li>
  `,
  controller: function() {
    const vm = this;

    // vm.post = {
    //   subj: "Subject",
    //   body: "Body: ksga;lsgakngav ao;ri;KDSNGSD LKASJ;lkmf,sDG "
    // }

  }
};


angular
  .module("ChirpApp")
  .component("post", post);