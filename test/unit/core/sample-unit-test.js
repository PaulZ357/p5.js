suite('SampleTests', function() {
  var myp5;

  setup(function(done) {
    new p5(function(p) {
      p.setup = function() {
        myp5 = p;
        done();
      };
    });
  });

  teardown(function() {
    myp5.remove();
  });

  suite('test method', function() {
    test('capitalizes the first letter of hello', function() {
      expect(stringUtils.capitalize('hello')).to.equal('Hello');
    });
  });
});