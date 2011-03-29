
/**
 * Module dependencies.
 */

var Inflector = require('Inflector')
  , should = require('should');

module.exports = {
  'test .version': function(){
    Inflector.version.should.match(/^\d+\.\d+\.\d+$/);
  }
};