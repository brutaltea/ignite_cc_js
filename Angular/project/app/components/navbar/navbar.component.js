angular.
  module('navbar').
    component('navbar',{
      templateUrl: 'components/navbar/navbar.template.html',
    controller: function NavbarController() {
     this.items = ['home', 'services', 'portfolio', 'about', 'news', 'contact'];
    }
  });
