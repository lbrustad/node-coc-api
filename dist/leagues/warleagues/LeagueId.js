"use strict";
/// <reference path="../../../types/types.d.ts"/>
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class LeagueId {
    static get(api, leagueId) {
        return __awaiter(this, void 0, void 0, function* () {
            leagueId = encodeURIComponent(leagueId);
            try {
                const res = yield api.get(this.path.replace('{leagueId}', leagueId));
                return res.data;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = LeagueId;
LeagueId.path = '/warleagues/{leagueId}';
