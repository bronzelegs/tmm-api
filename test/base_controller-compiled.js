'use strict';

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

var _models = require('../models');

var _base = require('../resources/controllers/base');

var _base2 = _interopRequireDefault(_base);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('BaseController Unit Test', function () {

  beforeEach(function (done) {
    if (_mongoose2.default.connection.db) return done();
    _mongoose2.default.connect('mongodb://localhost/generic-controller-example', done);
  });

  var controller = new _base2.default(_models.Country, 'isocode');

  it('Test create()', function (done) {
    var data = {
      'isocode': _faker2.default.address.countryCode(),
      'name': _faker2.default.address.country()
    };

    controller.create(data).then(function (response) {
      response.should.have.property('country');
      response.country.isocode.should.equal(data.isocode);
      response.country.name.should.equal(data.name);
      done();
    }).then(null, done);
  });

  it('Test read()', function (done) {
    var data = {
      'isocode': _faker2.default.address.countryCode(),
      'name': _faker2.default.address.country()
    };

    controller.create(data).then(function (response) {
      return controller.read(response.country.isocode);
    }).then(function (response) {
      response.should.have.property('country');
      response.country.isocode.should.equal(data.isocode);
      response.country.name.should.equal(data.name);
      done();
    }).then(null, done);
  });

  it('Test update()', function (done) {
    var data = {
      'isocode': _faker2.default.address.countryCode(),
      'name': _faker2.default.address.country()
    };

    var updatedData = {
      'name': _faker2.default.address.country()
    };

    controller.create(data).then(function (response) {
      return controller.update(response.country.isocode, updatedData);
    }).then(function (response) {
      response.should.have.property('country');
      response.country.isocode.should.equal(data.isocode);
      response.country.name.should.equal(updatedData.name);
      done();
    }).then(null, done);
  });

  it('Test delete()', function (done) {
    var data = {
      'isocode': _faker2.default.address.countryCode(),
      'name': _faker2.default.address.country()
    };

    controller.create(data).then(function (response) {
      return controller.read(response.country.isocode);
    }).then(function (response) {
      return controller.delete(response.country.isocode);
    }).then(function (response) {
      return controller.read(data.isocode);
    }).then(function (response) {
      (0, _should2.default)(response.country).not.be.ok();
      done();
    }).then(null, function (error) {
      done(error);
    });
  });

  it('Test list()', function (done) {
    var data = {
      'isocode': _faker2.default.address.countryCode(),
      'name': _faker2.default.address.country()
    };

    controller.create(data).then(function (response) {
      return controller.list();
    }).then(function (response) {
      response.should.have.property('countries');
      response.countries.should.be.instanceOf(Array).and.not.empty;
      done();
    }).then(null, done);
  });
});

//# sourceMappingURL=base_controller-compiled.js.map