/// <reference path="../../../../types/types.d.ts"/>

interface ISeasonsSearchAfterParams {
    limit?: number;
    after?: string;
}

interface ISeasonsSearchBeforeParams {
    limit?: number;
    before?: string;
}

export type TSeasonsSearchAfterParams = ISeasonsSearchAfterParams | ISeasonsSearchBeforeParams;

export default class Seasons {
    static readonly path: string = '/leagues/{leagueId}/seasons';

    static async get(api: IClashOfClansAPI, leagueId: number, params?: TSeasonsSearchAfterParams): Promise<ILeagueSeason[]> {
        try {
            const res = await api.get<TSeasonsSearchAfterParams, ILeagueSeasonList>(
                this.path.replace('{leagueId}', leagueId.toString()),
                params
            );
            return res.data.items;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
