"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modelGetNameById = exports.modelCreateName = void 0;

var _prisma = require("./prisma");

const modelCreateName = async name => _prisma.prismaClient.encrypted_name.create({
  data: {
    name
  }
});

exports.modelCreateName = modelCreateName;

const modelGetNameById = async id => _prisma.prismaClient.encrypted_name.findFirst({
  where: {
    id
  }
});

exports.modelGetNameById = modelGetNameById;