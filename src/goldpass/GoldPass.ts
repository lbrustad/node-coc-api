/// <reference path="../../types/types.d.ts"/>

import ClashOfClansAPI from '../ClashOfClansAPI';

export default class GoldPass {
    static readonly path: string = '/goldpass/seasons/current';

    static async get(api: ClashOfClansAPI): Promise<IGoldPassSeason> {
        try {
            const res = await api.get<undefined, IGoldPassSeason>( this.path );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
