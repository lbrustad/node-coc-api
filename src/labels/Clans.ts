/// <reference path="../../types/types.d.ts"/>

import ClashOfClansAPI from '../ClashOfClansAPI';

interface ILabelsSearchAfterParams {
    limit?: number;
    after?: string;
}

interface ILabelsSearchBeforeParams {
    limit?: number;
    before?: string;
}

export type TLabelsSearchParams = ILabelsSearchAfterParams | ILabelsSearchBeforeParams;

export default class ClanLabels {
    static readonly path: string = '/labels/clans';

    static async get(api: ClashOfClansAPI, params?: TLabelsSearchParams): Promise<ILabel[]> {
        try {
            const res = await api.get<TLabelsSearchParams, ILabelList>(
                this.path,
                params
            );
            return res.data.items;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
