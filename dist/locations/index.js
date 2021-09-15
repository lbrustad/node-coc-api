"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Locations_1 = __importDefault(require("./Locations"));
const LocationId_1 = __importDefault(require("./LocationId"));
const Clans_1 = __importDefault(require("./locationid/Clans"));
const ClansVersus_1 = __importDefault(require("./locationid/ClansVersus"));
const Players_1 = __importDefault(require("./locationid/Players"));
const PlayersVersus_1 = __importDefault(require("./locationid/PlayersVersus"));
exports.default = {
    Locations: Locations_1.default,
    LocationId: LocationId_1.default,
    Clans: Clans_1.default,
    ClansVersus: ClansVersus_1.default,
    Players: Players_1.default,
    PlayersVersus: PlayersVersus_1.default,
};
