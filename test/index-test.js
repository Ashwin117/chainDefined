'use strict';

var assert = require('chai').assert;
//var chainDefined = require('../index');
var chainDefined = require('../oneLineChainDefined');

describe('ChainDefined tests', function () {
	var testObject = {
		innerObject: {
			fname: 'Spartan',
			lname: 'John',
			totalIncome: function (income, tax) {
				return income - tax;
			}
		}
	};

	it('should return true if a valid object is passed', function (done) {
		var hasValue = chainDefined(testObject, ['innerObject', 'fname']);
		assert.isTrue(hasValue);
		done();
	});

	it('should return true if a valid object with no keys is passed', function (done) {
		var hasValue = chainDefined(testObject, []);
		assert.isTrue(hasValue);
		done();
	});

	it('should return true if a valid object with no second parameter is passed', function (done) {
		var hasValue = chainDefined(testObject);
		assert.isTrue(hasValue);
		done();
	});

	it('should return false if an invalid object key is passed', function (done) {
		var hasValue = chainDefined(testObject, ['innerObject', 'foo']);
		assert.isFalse(hasValue);
		done();
	});

	it('should return true if a value is a function', function (done) {
		var hasValue = chainDefined(testObject, ['innerObject', 'totalIncome']);
		assert.isTrue(hasValue);
		done();
	});

	it('should return true if passing in prototype proerties as parameter', function (done) {
		var hasValue = chainDefined(testObject, ['innerObject', 'totalIncome', 'bind']) && chainDefined(testObject, ['toString']);
		assert.isTrue(hasValue);
		done();
	});

	it('should return false if a string is passed instead of an array of string', function (done) {
		var hasValue = chainDefined(testObject, 'innerObject');
		assert.isFalse(hasValue);
		done();
	});

	it('should return true if passing a string since string is an object', function (done) {
		var hasValue = chainDefined('Spartan');
		assert.isTrue(hasValue);
		done();
	});

	it('should return false if passing in null', function (done) {
		var hasValue = chainDefined(null);
		assert.isFalse(hasValue);
		done();
	});

	it('should return false if passing in an inner key before an outer key', function (done) {
		var hasValue = chainDefined(testObject, ['totalIncome', 'innerObject']);
		assert.isFalse(hasValue);
		done();
	});
});