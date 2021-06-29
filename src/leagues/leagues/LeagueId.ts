/// <reference path="../../../types/types.d.ts"/>

import ClashOfClansAPI from '../../ClashOfClansAPI';

export default class LeagueId {
    static readonly path: string = '/leagues/{leagueId}';

    static async get(api: ClashOfClansAPI, leagueId: number): Promise<ILeague> {
        try {
            const res = await api.get<undefined, ILeague>( this.path.replace('{leagueId}', leagueId.toString()) );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
