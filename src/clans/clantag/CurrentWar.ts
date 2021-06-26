/// <reference path="../../../types/types.d.ts"/>

import { AxiosResponse } from 'axios';
import ClashOfClansAPI from '../../ClashOfClansAPI';

export default class CurrentWar {
    static readonly path: string = '/clans/{clanTag}/currentwar';

    static async get(api: ClashOfClansAPI, clanTag: string): Promise<IClanWar> {
        if (!clanTag.startsWith('#')) {
            clanTag = `#${clanTag}`;
        }
        clanTag = encodeURIComponent(clanTag);

        try {
            const res = await api.get<undefined, IClanWar>( this.path.replace('{clanTag}', clanTag) ) as AxiosResponse<IClanWar>;
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
