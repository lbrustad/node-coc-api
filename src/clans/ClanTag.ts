/// <reference path="../../types/types.d.ts"/>

export default class ClanTag {
    static readonly path: string = '/clans/{clanTag}';

    static async get(api: IClashOfClansAPI, clanTag: string): Promise<IClan> {
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
