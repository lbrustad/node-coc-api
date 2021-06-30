/// <reference path="../../types/types.d.ts"/>

import ClashOfClansAPI from '../ClashOfClansAPI';

export default class LocationId {
    static readonly path: string = '/locations/{locationId}';

    static async get(api: ClashOfClansAPI, locationId: number): Promise<ILocation> {
        try {
            const res = await api.get<undefined, ILocation>(
                this.path.replace('{locationId}', locationId.toString())
            );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
