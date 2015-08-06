var Car = function(mpg,tank){

  this.mpg = mpg;
  this.tank = tank;

};

var nissan = new Car(30,1);
var bug = new Car(20,2);

var Route = function(totalmiles,destination,city,state){
  this.totalmiles = totalmiles;
  this.destination = destination;
  this.city = city;
  this.state = state;

};

var boulder = new Route(40," mom and dad's", "boulder","colorado");
var louisville = new Route(30," Elyse's house","louisville","colorado");

var enoughGas = function(car,route){
  var carDistance = car.mpg * car.tank;

  if(carDistance > route.totalmiles){
      return true;
  }else {
    return false;
  }

};


enoughGas(nissan,boulder);
