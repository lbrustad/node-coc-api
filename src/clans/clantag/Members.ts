/// <reference path="../../types.d.ts"/>

import { AxiosResponse } from 'axios';
import ClashOfClansAPI from '../../ClashOfClansAPI';

interface IMembersSearchAfterParams {
    limit?: number;
    after?: string;
}

interface IMembersSearchBeforeParams {
    limit?: number;
    before?: string;
}

type TMembersSearchParams = IMembersSearchAfterParams | IMembersSearchBeforeParams;

export default class Members {
    static readonly path: string = '/clans/{clanTag}/members';

    static async get(api: ClashOfClansAPI, clanTag: string, params?: TMembersSearchParams): Promise<TClanMemberList> {
        if (!clanTag.startsWith('#')) {
            clanTag = `#${clanTag}`;
        }
        clanTag = encodeURIComponent(clanTag);

        try {
            const res = await api.get<TMembersSearchParams, TClanMemberList>(
                this.path.replace('{clanTag}', clanTag),
                params
            ) as AxiosResponse<TClanMemberList>;
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
