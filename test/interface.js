
var geonames = require('../');

module.exports.interface = {};

module.exports.interface.unzip = function(test, common) {
  test('unzip', function(t) {
    t.equal(typeof geonames.unzip, 'object', 'valid function');
    t.equal(typeof geonames.unzip._read, 'function', 'valid readable');
    t.equal(typeof geonames.unzip._write, 'function', 'valid writeable');
    t.end();
  });
}

module.exports.interface.parser = function(test, common) {
  test('parser', function(t) {
    t.equal(typeof geonames.parser, 'object', 'valid function');
    t.equal(typeof geonames.parser._read, 'function', 'valid readable');
    t.equal(typeof geonames.parser._write, 'function', 'valid writeable');
    t.end();
  });
}

module.exports.interface.modifiers = function(test, common) {
  test('modifiers', function(t) {
    t.equal(typeof geonames.modifiers, 'object', 'valid function');
    t.equal(typeof geonames.modifiers._read, 'function', 'valid readable');
    t.equal(typeof geonames.modifiers._write, 'function', 'valid writeable');
    t.end();
  });
}

module.exports.interface.stringify = function(test, common) {
  test('stringify', function(t) {
    t.equal(typeof geonames.stringify, 'object', 'valid function');
    t.equal(typeof geonames.stringify._read, 'function', 'readable stream');
    t.equal(typeof geonames.stringify._write, 'function', 'writable stream');
    t.end();
  });
}

module.exports.interface.pipeline = function(test, common) {
  test('pipeline', function(t) {
    t.equal(typeof geonames.pipeline, 'object', 'valid function');
    t.equal(typeof geonames.pipeline._read, 'function', 'valid readable');
    t.equal(typeof geonames.pipeline._write, 'function', 'valid writeable');
    t.end();
  });
}

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('external interface: ' + name, testFunction)
  }

  for( var testCase in module.exports.interface ){
    module.exports.interface[testCase](test, common);
  }
}