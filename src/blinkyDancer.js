var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
<<<<<<< HEAD

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
=======
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
>>>>>>> 592a7514a831726bda0b3391f70f76bee97e1fa2
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
<<<<<<< HEAD
  makeDancer.prototype.step.call(this)
=======
  makeDancer.prototype.step.call(this);
>>>>>>> 592a7514a831726bda0b3391f70f76bee97e1fa2
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
<<<<<<< HEAD
};
=======
};

>>>>>>> 592a7514a831726bda0b3391f70f76bee97e1fa2
