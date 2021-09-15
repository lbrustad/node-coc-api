/// <reference path="../../../types/types.d.ts"/>

interface IMembersSearchAfterParams {
    limit?: number;
    after?: string;
}

interface IMembersSearchBeforeParams {
    limit?: number;
    before?: string;
}

export type TMembersSearchParams = IMembersSearchAfterParams | IMembersSearchBeforeParams;

export default class Members {
    static readonly path: string = '/clans/{clanTag}/members';

    static async get(api: IClashOfClansAPI, clanTag: string, params?: TMembersSearchParams): Promise<TClanMemberList> {
        if (!clanTag.startsWith('#')) {
            clanTag = `#${clanTag}`;
        }
        clanTag = encodeURIComponent(clanTag);

        try {
            const res = await api.get<TMembersSearchParams, TClanMemberList>(
                this.path.replace('{clanTag}', clanTag),
                params
            );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
