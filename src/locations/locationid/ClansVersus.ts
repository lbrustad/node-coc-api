/// <reference path="../../../types/types.d.ts"/>

interface IRankingsSearchAfterParams {
    limit?: number;
    after?: string;
}

interface IRankingsSearchBeforeParams {
    limit?: number;
    before?: string;
}

export type TRankingsSearchParams = IRankingsSearchAfterParams | IRankingsSearchBeforeParams;

export default class ClansVersusRankings {
    static readonly path: string = '/locations/{locationId}/rankings/clans-versus';

    static async get(api: IClashOfClansAPI, locationId: number, params?: TRankingsSearchParams): Promise<IClanVersusRanking[]> {
        try {
            const res = await api.get<TRankingsSearchParams, IClanVersusRankingList>(
                this.path.replace('{locationId}', locationId.toString()),
                params
            );
            return res.data.items;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
