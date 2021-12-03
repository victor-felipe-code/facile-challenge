"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelGetNameById = exports.modelCreateName = void 0;
const prisma_1 = require("./prisma");
const modelCreateName = async (name) => prisma_1.prismaClient.encrypted_name.create({
    data: {
        name,
    },
});
exports.modelCreateName = modelCreateName;
const modelGetNameById = async (id) => prisma_1.prismaClient.encrypted_name.findFirst({
    where: {
        id,
    },
});
exports.modelGetNameById = modelGetNameById;
