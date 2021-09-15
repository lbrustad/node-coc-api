"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClashOfClansAPI_1 = __importDefault(require("./ClashOfClansAPI"));
const clans_1 = __importDefault(require("./clans"));
const goldpass_1 = __importDefault(require("./goldpass"));
const labels_1 = __importDefault(require("./labels"));
const leagues_1 = __importDefault(require("./leagues"));
const locations_1 = __importDefault(require("./locations"));
const players_1 = __importDefault(require("./players"));
exports.default = {
    ClashOfClansAPI: ClashOfClansAPI_1.default,
    Clan: clans_1.default,
    GoldPass: goldpass_1.default,
    Labels: labels_1.default,
    Leagues: leagues_1.default,
    Locations: locations_1.default,
    Players: players_1.default,
};
