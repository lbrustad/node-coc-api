/// <reference path="../../types/types.d.ts"/>

export default class GoldPass {
    static readonly path: string = '/goldpass/seasons/current';

    static async get(api: IClashOfClansAPI): Promise<IGoldPassSeason> {
        try {
            const res = await api.get<undefined, IGoldPassSeason>( this.path );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
