/// <reference path="../../../types/types.d.ts"/>

export interface IVerifyTokenSearchParams {
    token: string;
}

export default class PlayerTag {
    static readonly path: string = '/players/{playerTag}/verifytoken';

    static async get(api: IClashOfClansAPI, playerTag: string, params: IVerifyTokenSearchParams): Promise<IVerifyTokenResponse> {
        if (!playerTag.startsWith('#')) {
            playerTag = `#${playerTag}`;
        }
        playerTag = encodeURIComponent(playerTag);

        try {
            const res = await api.post<IVerifyTokenSearchParams, IVerifyTokenResponse>(
                this.path.replace('{playerTag}', playerTag),
                params
            );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
