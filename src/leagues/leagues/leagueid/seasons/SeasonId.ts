/// <reference path="../../../../../types/types.d.ts"/>

interface ISeasonsSearchAfterParams {
    limit?: number;
    after?: string;
}

interface ISeasonsSearchBeforeParams {
    limit?: number;
    before?: string;
}

export type TSeasonsSearchParams = ISeasonsSearchAfterParams | ISeasonsSearchBeforeParams;

export default class SeasonId {
    static readonly path: string = '/leagues/{leagueId}/seasons/{seasonId}';

    static async get(api: IClashOfClansAPI, leagueId: number, seasonId: string, params?: TSeasonsSearchParams): Promise<IPlayerRanking[]> {
        try {
            const res = await api.get<TSeasonsSearchParams, IPlayerRankingList>(
                this.path
                    .replace('{leagueId}', leagueId.toString())
                    .replace('{seasonId}', seasonId),
                params
            );
            return res.data.items;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
