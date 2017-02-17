const content = '12';


var Person = {
  init : () => {
    console.log('1431');
  }

};

Person.init();
//var person1 = new Person();


var Home = function (firstName) {
  this.firstName = firstName;
  this.road = () => {
    console.log("road" + this.firstName );
  }
};

Home.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

var home1 = new Home("OVO");

home1.road();
home1.sayHello();
