/// <reference path="../../../types/types.d.ts"/>

import ClashOfClansAPI from '../../ClashOfClansAPI';

interface IRankingsSearchAfterParams {
    limit?: number;
    after?: string;
}

interface IRankingsSearchBeforeParams {
    limit?: number;
    before?: string;
}

type TRankingsSearchParams = IRankingsSearchAfterParams | IRankingsSearchBeforeParams;

export default class PlayersVersusRankings {
    static readonly path: string = '/locations/{locationId}/rankings/players-versus';

    static async get(api: ClashOfClansAPI, locationId: number, params?: TRankingsSearchParams): Promise<IPlayerVersusRanking[]> {
        try {
            const res = await api.get<TRankingsSearchParams, IPlayerVersusRankingList>(
                this.path.replace('{locationId}', locationId.toString()),
                params
            );
            return res.data.items;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
