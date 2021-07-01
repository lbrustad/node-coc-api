/// <reference path="../../../types/types.d.ts"/>

import ClashOfClansAPI from '../../ClashOfClansAPI';

interface IWarLogSearchAfterParams {
    limit?: number;
    after?: string;
}

interface IWarLogSearchBeforeParams {
    limit?: number;
    before?: string;
}

export type TWarLogSearchParams = IWarLogSearchAfterParams | IWarLogSearchBeforeParams;

export default class WarLog {
    static readonly path: string = '/clans/{clanTag}/warlog';

    static async get(api: ClashOfClansAPI, clanTag: string, params?: TWarLogSearchParams): Promise<IClanWarLogEntry[]> {
        if (!clanTag.startsWith('#')) {
            clanTag = `#${clanTag}`;
        }
        clanTag = encodeURIComponent(clanTag);

        try {
            const res = await api.get<TWarLogSearchParams, IClanWarLogEntry[]>(
                this.path.replace('{clanTag}', clanTag),
                params
            );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
