var makeSlideDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('slideDancer');
  this.$node.prepend('<div class="eye-left"></div>');
  this.$node.prepend('<div class="eye-right"></div>');
};

makeSlideDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeSlideDancer;

makeSlideDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this)
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeIn();
  this.$node.animate({
    left: [ "+=50", "swing" ]
  },300,function(){
    //done
  }).animate({
    left: [ "-=50", "swing" ]
  },300,function(){
    //done
  });
};