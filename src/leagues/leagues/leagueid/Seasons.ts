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

    static async get(api: ClashOfClansAPI, leagueId: string, params?: TSeasonsSearchAfterParams): Promise<ILeagueSeason[]> {
        leagueId = encodeURIComponent(leagueId);

        try {
            const res = await api.get<TSeasonsSearchAfterParams, ILeagueSeason[]>(
                this.path.replace('{clanTag}', leagueId),
                params
            );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
