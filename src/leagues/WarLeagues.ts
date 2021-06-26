/// <reference path="../../types/types.d.ts"/>

import ClashOfClansAPI from '../ClashOfClansAPI';

interface IWarLeaguesSearchAfterParams {
    limit?: number;
    after?: string;
}

interface IWarLeaguesSearchBeforeParams {
    limit?: number;
    before?: string;
}

type TWarLeaguesSearchParams = IWarLeaguesSearchAfterParams | IWarLeaguesSearchBeforeParams;

export default class WarLeagues {
    static readonly path: string = '/warleagues';

    static async get(api: ClashOfClansAPI, params?: TWarLeaguesSearchParams): Promise<IWarLeague[]> {
        try {
            const res = await api.get<TWarLeaguesSearchParams, IWarLeague[]>(
                this.path,
                params
            );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
