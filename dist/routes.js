"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router(); // test


exports.router = router;
router.get("/", (req, res) => {
  res.status(200).json({
    message: "OK"
  });
});
router.post("/encrypts", _controller.controllerCreate);
router.get("/encrypts/:id", _controller.controllerGetById);