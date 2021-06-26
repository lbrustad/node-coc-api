/// <reference path="../../../../../types/types.d.ts"/>

import ClashOfClansAPI from '../../../../ClashOfClansAPI';

interface ISeasonsSearchAfterParams {
    limit?: number;
    after?: string;
}

interface ISeasonsSearchBeforeParams {
    limit?: number;
    before?: string;
}

type TSeasonsSearchParams = ISeasonsSearchAfterParams | ISeasonsSearchBeforeParams;

export default class SeasonId {
    static readonly path: string = '/leagues/{leagueId}/seasons/{seasonId}';

    static async get(api: ClashOfClansAPI, leagueId: string, seasonId: string, params?: TSeasonsSearchParams): Promise<ILeagueSeason> {
        leagueId = encodeURIComponent(leagueId);
        seasonId = encodeURIComponent(seasonId);

        try {
            const res = await api.get<TSeasonsSearchParams, ILeagueSeason>(
                this.path.replace('{leagueId}', leagueId).replace('{seasonId}', seasonId),
                params
            );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
