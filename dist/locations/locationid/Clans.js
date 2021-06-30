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
class ClansRankings {
    static get(api, locationId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield api.get(this.path.replace('{locationId}', locationId.toString()), params);
                return res.data.items;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = ClansRankings;
ClansRankings.path = '/locations/{locationId}/rankings/clans';
