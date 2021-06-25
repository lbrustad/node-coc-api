/// <reference path="../../../types.d.ts"/>

import { AxiosResponse } from 'axios';
import ClashOfClansAPI from '../../../ClashOfClansAPI';

export default class LeagueGroup {
    static readonly path: string = '/clans/{clanTag}/currentwar/leaguegroup';

    static async get(api: ClashOfClansAPI, clanTag: string): Promise<IClanWarLeagueGroup> {
        if (!clanTag.startsWith('#')) {
            clanTag = `#${clanTag}`;
        }
        clanTag = encodeURIComponent(clanTag);

        try {
            const res = await api.get<undefined, IClanWarLeagueGroup>( this.path.replace('{clanTag}', clanTag) ) as AxiosResponse<IClanWarLeagueGroup>;
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}