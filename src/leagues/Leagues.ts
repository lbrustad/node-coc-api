/// <reference path="../../types/types.d.ts"/>

import ClashOfClansAPI from '../ClashOfClansAPI';

interface ILeaguesSearchAfterParams {
    limit?: number;
    after?: string;
}

interface ILeaguesSearchBeforeParams {
    limit?: number;
    before?: string;
}

type TLeaguesSearchParams = ILeaguesSearchAfterParams | ILeaguesSearchBeforeParams;

export default class Leagues {
    static readonly path: string = '/leagues';

    static async get(api: ClashOfClansAPI, params?: TLeaguesSearchParams): Promise<ILeague[]> {
        try {
            const res = await api.get<TLeaguesSearchParams, ILeague[]>(
                this.path,
                params
            );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
