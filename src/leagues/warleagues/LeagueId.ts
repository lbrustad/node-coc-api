/// <reference path="../../../types/types.d.ts"/>

import ClashOfClansAPI from '../../ClashOfClansAPI';

export default class LeagueId {
    static readonly path: string = '/warleagues/{leagueId}';

    static async get(api: ClashOfClansAPI, leagueId: string): Promise<IWarLeague> {
        leagueId = encodeURIComponent(leagueId);

        try {
            const res = await api.get<undefined, IWarLeague>( this.path.replace('{leagueId}', leagueId) );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
