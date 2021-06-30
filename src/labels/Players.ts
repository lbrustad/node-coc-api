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

type TLabelsSearchParams = ILabelsSearchAfterParams | ILabelsSearchBeforeParams;

export default class PlayerLabels {
    static readonly path: string = '/labels/players';

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
