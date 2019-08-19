describe('crabDancer', function() {
  var crabDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crabDancer = new makeCrab(10, 20, timeBetweenSteps);
  });

  it('should be an instanceof crabDancer', function() {
    expect(crabDancer).to.be.an.instanceof(makeCrab);
  });

  it('should have a jQuery $node object', function() {
    expect(crabDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a lineUp function that aligns it left', function() {
    expect(crabDancer.left).to.not.equal(0);
    crabDancer.lineUp();
    expect(crabDancer.left).to.equal(0);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(crabDancer, 'step');
      expect(crabDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(crabDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(crabDancer.step.callCount).to.be.equal(2);
    });
    // uses chai-jquery syntax
    it('should have the dancing class', function() {
      expect(crabDancer.$node).to.have.class('dancing');
    });
  });
});
