var makeCrab = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  };

  makeCrab.prototype = Object.create(makeDancer.prototype);
  makeCrab.prototype.constructor = makeCrab;
  
  makeCrab.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    this.$node.addClass('crabDancer');   
  }