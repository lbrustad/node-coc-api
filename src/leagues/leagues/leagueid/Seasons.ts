/// <reference path="../../../../types/types.d.ts"/>

import ClashOfClansAPI from '../../../ClashOfClansAPI';

interface ISeasonsSearchAfterParams {
    limit?: number;
    after?: string;
}

interface ISeasonsSearchBeforeParams {
    limit?: number;
    before?: string;
}

type TSeasonsSearchAfterParams = ISeasonsSearchAfterParams | ISeasonsSearchBeforeParams;

export default class Seasons {
    static readonly path: string = '/leagues/{leagueId}/seasons';

    static async get(api: ClashOfClansAPI, leagueId: number, params?: TSeasonsSearchAfterParams): Promise<ILeagueSeason[]> {
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
