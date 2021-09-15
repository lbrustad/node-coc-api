/// <reference path="../../types/types.d.ts"/>

export default class LocationId {
    static readonly path: string = '/locations/{locationId}';

    static async get(api: IClashOfClansAPI, locationId: number): Promise<ILocation> {
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
