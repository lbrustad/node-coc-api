/// <reference path="../../types/types.d.ts"/>

import ClashOfClansAPI from '../ClashOfClansAPI';

export default class ClanTag {
    static readonly path: string = '/clans/{clanTag}';

    static async get(api: ClashOfClansAPI, clanTag: string): Promise<IClan> {
        if (!clanTag.startsWith('#')) {
            clanTag = `#${clanTag}`;
        }
        clanTag = encodeURIComponent(clanTag);

        try {
            const res = await api.get<undefined, IClan>( this.path.replace('{clanTag}', clanTag) );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
