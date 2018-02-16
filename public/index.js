var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      people: [
              {
              name: "Maria",
              bio: "A rad social worker turned coder",
              bioVisible: true, 
              },
              {
              name: "Bob",
              bio: "He's whatever",
              bioVisible: true, 
              },
              {
              name: "Cesar",
              bio: "He asks all the right questions",
              bioVisible: true,
              },
              ],
              
      newPerson: {name: "", bio: "", bioVisible: true}
    };
  },
  created: function() {},
  methods: {
    addPerson: function(){
      this.people.push(this.newPerson);
      this.newPerson = {name: "", bio: ""}
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});