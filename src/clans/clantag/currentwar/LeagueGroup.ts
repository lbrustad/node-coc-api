/// <reference path="../../../../types/types.d.ts"/>

export default class LeagueGroup {
    static readonly path: string = '/clans/{clanTag}/currentwar/leaguegroup';

    static async get(api: IClashOfClansAPI, clanTag: string): Promise<IClanWarLeagueGroup> {
        if (!clanTag.startsWith('#')) {
            clanTag = `#${clanTag}`;
        }
        clanTag = encodeURIComponent(clanTag);

        try {
            const res = await api.get<undefined, IClanWarLeagueGroup>( this.path.replace('{clanTag}', clanTag) );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
