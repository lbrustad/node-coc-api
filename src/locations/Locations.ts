/// <reference path="../../types/types.d.ts"/>

interface ILocationsSearchAfterParams {
    limit?: number;
    after?: string;
}

interface ILocationsSearchBeforeParams {
    limit?: number;
    before?: string;
}

export type TLocationsSearchParams = ILocationsSearchAfterParams | ILocationsSearchBeforeParams;

export default class Locations {
    static readonly path: string = '/locations';

    static async get(api: IClashOfClansAPI, params?: TLocationsSearchParams): Promise<ILocation[]> {
        try {
            const res = await api.get<TLocationsSearchParams, ILocationList>(
                this.path,
                params
            );
            return res.data.items;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
