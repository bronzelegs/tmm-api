'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilesController = exports.HistoriesController = undefined;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _models = require('../../models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoriesController = exports.HistoriesController = function (_BaseController) {
  _inherits(HistoriesController, _BaseController);

  function HistoriesController() {
    _classCallCheck(this, HistoriesController);

    return _possibleConstructorReturn(this, (HistoriesController.__proto__ || Object.getPrototypeOf(HistoriesController)).call(this, _models.History, '_id'));
  }

  return HistoriesController;
}(_base2.default);

var ProfilesController = exports.ProfilesController = function (_BaseController2) {
  _inherits(ProfilesController, _BaseController2);

  function ProfilesController() {
    _classCallCheck(this, ProfilesController);

    return _possibleConstructorReturn(this, (ProfilesController.__proto__ || Object.getPrototypeOf(ProfilesController)).call(this, _models.Profile, 'userName'));
  }

  return ProfilesController;
}(_base2.default);

//# sourceMappingURL=index-compiled.js.map