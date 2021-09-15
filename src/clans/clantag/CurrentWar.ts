/// <reference path="../../../types/types.d.ts"/>

import ClashOfClansAPI from '../../ClashOfClansAPI';

export default class CurrentWar {
    static readonly path: string = '/clans/{clanTag}/currentwar';

    static async get(api: IClashOfClansAPI, clanTag: string): Promise<IClanWar> {
        if (!clanTag.startsWith('#')) {
            clanTag = `#${clanTag}`;
        }
        clanTag = encodeURIComponent(clanTag);

        try {
            const res = await api.get<undefined, IClanWar>( this.path.replace('{clanTag}', clanTag) );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
