"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Clans_1 = __importDefault(require("./Clans"));
const ClanTag_1 = __importDefault(require("./ClanTag"));
const ClanWarLeagues_1 = __importDefault(require("./ClanWarLeagues"));
const CurrentWar_1 = __importDefault(require("./clantag/CurrentWar"));
const Members_1 = __importDefault(require("./clantag/Members"));
const WarLog_1 = __importDefault(require("./clantag/WarLog"));
const LeagueGroup_1 = __importDefault(require("./clantag/currentwar/LeagueGroup"));
exports.default = {
    Clans: Clans_1.default,
    ClanTag: ClanTag_1.default,
    ClanWarLeagues: ClanWarLeagues_1.default,
    CurrentWar: CurrentWar_1.default,
    Members: Members_1.default,
    WarLog: WarLog_1.default,
    LeagueGroup: LeagueGroup_1.default,
};
