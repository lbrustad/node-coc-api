"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ClashOfClansAPI {
    constructor(config) {
        var _a;
        this.token = config.token;
        this.endpoint = (_a = config.endpoint) !== null && _a !== void 0 ? _a : 'https://api.clashofclans.com/v1';
    }
    get(path, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(path, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                baseURL: this.endpoint,
                params
            }).catch((err) => {
                throw err;
            });
            return res;
        });
    }
    post(path, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.post(path, params, {
                baseURL: this.endpoint,
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            }).catch((err) => {
                throw err;
            });
            return res;
        });
    }
}
exports.default = ClashOfClansAPI;
