var Child = function(height, name, age) {
  this.height = height;
  this.name = name;
  this.age = age;
};

var jeff = new Child(5,"jeff",7);
var johnny = new Child(9,"johnny",8);

var Ride = function(min,max){
  this.min = min;
  this.max = max;
};

var twister = new Ride(5,7);
var shaker = new Rides(4,6);

var tallEnough = function(child,ride){
  if(child.height < ride.min && child.height > ride.max){
    return false;
  } else{
    return true;
  }

};

tallEnough(jeff,twister);
tallEnough(johnny,shaker);
