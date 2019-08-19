describe('slideDancer', function() {
  //verifyClass(makeSlideDancer).followsPattern('pseudoclassical', {}, true);
  // how to use verifyClass?

  var slideDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slideDancer = new makeSlideDancer(10, 20, timeBetweenSteps);
  });

  it('should be an instanceof slideDancer', function() {
    expect(slideDancer).to.be.an.instanceof(makeSlideDancer);
  });

  it('should have a jQuery $node object', function() {
    expect(slideDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a lineUp function that aligns it left', function() {
    expect(slideDancer.left).to.not.equal(0);
    slideDancer.lineUp();
    expect(slideDancer.left).to.equal(0);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slideDancer, 'step');
      expect(slideDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slideDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slideDancer.step.callCount).to.be.equal(2);
    });
    // uses chai-jquery syntax
    it('should have the dancing class', function() {
      expect(slideDancer.$node).to.have.class('dancing');
    });
  });
});
