"use strict";
/// <reference path="../../types.d.ts"/>
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
class Members {
    static get(api, clanTag, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!clanTag.startsWith('#')) {
                clanTag = `#${clanTag}`;
            }
            clanTag = encodeURIComponent(clanTag);
            try {
                const res = yield api.get(this.path.replace('{clanTag}', clanTag), params);
                return res.data;
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = Members;
Members.path = '/clans/{clanTag}/members';
