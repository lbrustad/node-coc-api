/// <reference path="../../types/types.d.ts"/>

import ClashOfClansAPI from '../ClashOfClansAPI';

export default class PlayerTag {
    static readonly path: string = '/players/{playerTag}';

    static async get(api: ClashOfClansAPI, playerTag: string): Promise<IPlayer> {
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
