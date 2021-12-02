"use strict";

var _console = _interopRequireDefault(require("console"));

var _app = require("./app");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 4000;

_app.app.listen(PORT, () => _console.default.log(`SERVER ON PORT ${PORT}`));