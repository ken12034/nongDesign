'use strict';

var content = '12';

var Person = {
  init: function init() {
    console.log('1431');
  }

};

Person.init();
//var person1 = new Person();


var Home = function Home(firstName) {
  var _this = this;

  this.firstName = firstName;
  this.road = function () {
    console.log("road" + _this.firstName);
  };
};

Home.prototype.sayHello = function () {
  console.log("Hello, I'm " + this.firstName);
};

var home1 = new Home("OVO");

home1.road();
home1.sayHello();