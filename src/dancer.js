// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
<<<<<<< HEAD
  this.step();
=======
  this.step(); 
>>>>>>> 592a7514a831726bda0b3391f70f76bee97e1fa2
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
<<<<<<< HEAD
=======

makeDancer.prototype.lineUp = function() {
  /* var lineSettings = {
    left: 0,
  }
  this.$node.css(lineSettings); */
  this.$node.anime({
    left: 20
  });
}
>>>>>>> 592a7514a831726bda0b3391f70f76bee97e1fa2
