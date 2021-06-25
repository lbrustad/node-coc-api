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
exports.ClashOfClansAPI = void 0;
const axios_1 = __importDefault(require("axios"));
class ClashOfClansAPI {
    constructor(config) {
        var _a;
        this._token = config.token;
        this._endpoint = (_a = config.endpoint) !== null && _a !== void 0 ? _a : 'https://api.clashofclans.com/v1';
    }
    get headers() {
        return {
            'Accept': 'application/json',
            'Authorization': `Bearer ${this._token}`
        };
    }
    get endpoint() {
        return this._endpoint;
    }
    call(path, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(path, {
                headers: this.headers,
                baseURL: this.endpoint,
                url: path,
                timeout: 3e3,
                params: data
            });
            return res;
        });
    }
}
exports.ClashOfClansAPI = ClashOfClansAPI;
