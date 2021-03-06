/// <reference path="../../types/types.d.ts"/>

export default class PlayerTag {
    static readonly path: string = '/players/{playerTag}';

    static async get(api: IClashOfClansAPI, playerTag: string): Promise<IPlayer> {
        if (!playerTag.startsWith('#')) {
            playerTag = `#${playerTag}`;
        }
        playerTag = encodeURIComponent(playerTag);

        try {
            const res = await api.get<undefined, IPlayer>( this.path.replace('{playerTag}', playerTag) );
            return res.data;
        } catch (err: unknown) {
            throw err as IError;
        }
    }
}
