/// <reference path="types.d.ts"/>

import { AxiosResponse } from 'axios';
import ClashOfClansAPI from './ClashOfClansAPI'

interface IClansSearchParams {
    name?: string;
    warFrequency?: string;
    locationId?: number;
    minMembers?: number;
    maxMembers?: number;
    minClanPoints?: number;
    minClanLevel?: number;
    limit?: number;
    after?: string;
    before?: string;
    labelIds?: string[] | string;
}

interface IFilter {
    key: keyof IClan;
    value: string | number | boolean;
}

export default class Clans {
    private static _path: string = '/clans';

    static get path(): string {
        return this._path;
    }

    private static async getClanList(api: ClashOfClansAPI, params: IClansSearchParams) {
        if (Array.isArray(params.labelIds)) {
            params.labelIds = params.labelIds.join(',');
        }

        return await api.get<IClansSearchParams, IClanList>(this.path, params)
            .catch((err: IError) => {
                throw err;
            });
    }

    static async get(api: ClashOfClansAPI, params: IClansSearchParams, filters?: IFilter[]): Promise<IClan[]> {
        try {
            const res = await Clans.getClanList(api, params) as AxiosResponse<IClanList>;
            const clanList = [...res.data.items];
            if (!filters) {
                return clanList;
            }
            return clanList.filter(clan => {
                for (let { key, value } of filters) {
                    if (clan[key] == value) return true;
                }
                return false;
            });
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
