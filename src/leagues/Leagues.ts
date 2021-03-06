/// <reference path="../../types/types.d.ts"/>

interface ILeaguesSearchAfterParams {
    limit?: number;
    after?: string;
}

interface ILeaguesSearchBeforeParams {
    limit?: number;
    before?: string;
}

export type TLeaguesSearchParams = ILeaguesSearchAfterParams | ILeaguesSearchBeforeParams;

export default class Leagues {
    static readonly path: string = '/leagues';

    static async get(api: IClashOfClansAPI, params?: TLeaguesSearchParams): Promise<ILeague[]> {
        try {
            const res = await api.get<TLeaguesSearchParams, ILeagueList>(
                this.path,
                params
            );
            return res.data.items;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
