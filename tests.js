QUnit.test("hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test('max', function (assert) {
  expect(4);

  assert.strictEqual(App.max(), -Infinity, 'No parameters');
  assert.strictEqual(App.max(3, 1, 2), 3, 'All positive numbers');
  assert.strictEqual(App.max(-10, 5, 3, 99), 99, 'Positive and negative numbers');
  assert.strictEqual(App.max(-14, -22, -5), -5, 'All positive numbers');

});

QUnit.test('isOdd', function (assert) {

  expect(5);

  assert.ok(App.isOdd(5), '5 is odd');
  assert.ok(!App.isOdd(2), '5 is not odd');
  assert.ok(!App.isOdd(0), '0 is not odd');

  assert.throws(function () {
    App.isOdd(null);
  }, new Error('The given argument is not a number'), 'Passing null raises an Error');

  assert.throws(function () {
    App.isOdd([]);
  }, new Error('The given argument is not a number'), 'Passing an array raises an Error');

  // TODO 1: check if passing a string raises an error

});

QUnit.test('stringContainsDigit', function (assert) {

  // TODO 2: add at least 3 assert cases

});
