var macros  = require('./macros');

//
// Our `counting` tests
// Should match `tests/fixtures/counting.json`
//
macros.matchFixturesTest('counts', function runTest(connection) {
  connection.increment("foo.bar");
  connection.decrement("foo.baz");
});
