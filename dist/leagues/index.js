"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Leagues_1 = __importDefault(require("./Leagues"));
const LeagueId_1 = __importDefault(require("./leagues/LeagueId"));
const Seasons_1 = __importDefault(require("./leagues/leagueid/Seasons"));
const SeasonId_1 = __importDefault(require("./leagues/leagueid/seasons/SeasonId"));
const WarLeagues_1 = __importDefault(require("./WarLeagues"));
const LeagueId_2 = __importDefault(require("./warleagues/LeagueId"));
exports.default = {
    Leagues: Leagues_1.default,
    LeagueId: LeagueId_1.default,
    Seasons: Seasons_1.default,
    SeasonId: SeasonId_1.default,
    WarLeagues: WarLeagues_1.default,
    WarLeagueId: LeagueId_2.default,
};
