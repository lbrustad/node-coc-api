/// <reference path="../../types/types.d.ts"/>

interface IWarLeaguesSearchAfterParams {
    limit?: number;
    after?: string;
}

interface IWarLeaguesSearchBeforeParams {
    limit?: number;
    before?: string;
}

export type TWarLeaguesSearchParams = IWarLeaguesSearchAfterParams | IWarLeaguesSearchBeforeParams;

export default class WarLeagues {
    static readonly path: string = '/warleagues';

    static async get(api: IClashOfClansAPI, params?: TWarLeaguesSearchParams): Promise<IWarLeague[]> {
        try {
            const res = await api.get<TWarLeaguesSearchParams, IWarLeagueList>(
                this.path,
                params
            );
            return res.data.items;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
