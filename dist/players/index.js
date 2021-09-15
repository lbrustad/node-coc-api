"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerTag_1 = __importDefault(require("./PlayerTag"));
const VerifyToken_1 = __importDefault(require("./playertag/VerifyToken"));
exports.default = {
    PlayerTag: PlayerTag_1.default,
    VerifyToken: VerifyToken_1.default,
};
