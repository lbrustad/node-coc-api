/// <reference path="../../types/types.d.ts"/>

import ClashOfClansAPI from '../ClashOfClansAPI';

interface ILocationsSearchAfterParams {
    limit?: number;
    after?: string;
}

interface ILocationsSearchBeforeParams {
    limit?: number;
    before?: string;
}

type TLocationsSearchParams = ILocationsSearchAfterParams | ILocationsSearchBeforeParams;

export default class Locations {
    static readonly path: string = '/locations';

    static async get(api: ClashOfClansAPI, params?: TLocationsSearchParams): Promise<ILocation[]> {
        try {
            const res = await api.get<TLocationsSearchParams, ILocationList>(
                this.path,
                params
            );
            return res.data.items;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
