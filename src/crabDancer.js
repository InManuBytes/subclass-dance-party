var makeCrab = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeCrab.prototype = Object.create(makeDancer.prototype);
makeCrab.prototype.constructor = makeCrab;

makeCrab.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.addClass('crabDancer');
  this.$node.addClass('dancing');
};
makeCrab.prototype.lineUp = function() {
  //this.$node.addClass('paused');
  makeDancer.prototype.lineUp.call(this);
  this.$node.addClass('floating');
};