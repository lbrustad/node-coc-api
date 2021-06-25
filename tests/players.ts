import Clans from '../src/Clans';
import Members from '../src/clans/clantag/Members';
import PlayerTag from '../src/players/PlayerTag';
import VerifyToken from '../src/players/playertag/VerifyToken';
import api from './api';

const tests = {
    playerTag: {
        index: !true,
        verifyToken: true
    }
}

const PLAYER_TAG = '#8892QGUY';

// Verify player API token that can be found from the game settings. This API
// call can be used to check that players own the game accounts they claim to own
// as they need to provide the one-time use API token that exists inside the game.
const TOKEN = {
    token: 'token that can be found from the game settings'
};


async function getRandomClanMember(): Promise<IClanMember> {
    try {
        const [ randomClan ] = await Clans.get(api, {
            minClanLevel: 20
        });

        const members = await Members.get(api, randomClan.tag as string);
        return members[Math.floor(Math.random() * members.length)];
    } catch (err) {
        throw err;
    }
}


;(async() => {
    if (!tests.playerTag.index) return;
    // call -> /players/{playerTag}

    // try {
    //     const player = await PlayerTag.get(api, PLAYER_TAG);
    //     console.log(player);
    // } catch (err) {
    //     console.log(err);
    //     return;
    // }

    try {
        const member = await getRandomClanMember();
        const player = await PlayerTag.get(api, member.tag as string);
        console.log(player);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.playerTag.verifyToken) return;
    // call -> /clans/{clanTag}/currentwar

    try {
        const verificationResponse = await VerifyToken.get(api, PLAYER_TAG, TOKEN);
        console.log(verificationResponse);
    } catch (err) {
        console.log(err);
        return;
    }
})()
