"use strict";
/// <reference path="../types.d.ts"/>
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
class Clans {
    static get path() {
        return this._path;
    }
    static getClanList(api, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Array.isArray(data.labelIds)) {
                data.labelIds = data.labelIds.join(',');
            }
            return yield api.call(this.path, data);
        });
    }
    static get(api, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield Clans.getClanList(api, data);
            if (res.status >= 400) {
                return [];
            }
            return [...res.data.items];
        });
    }
    static getFiltered(api, data, filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield Clans.getClanList(api, data);
            if (res.status >= 400) {
                return [];
            }
            let clans = [...res.data.items];
            return clans.filter(clan => {
                for (let { key, value } of filters) {
                    if (clan[key] === value)
                        return true;
                }
                return false;
            });
        });
    }
}
exports.default = Clans;
Clans._path = '/clans';
