import Clans from '../src/clans/Clans';
import Members from '../src/clans/clantag/Members';
import PlayerTag from '../src/players/PlayerTag';
import VerifyToken from '../src/players/playertag/VerifyToken';
import api, { PLAYER_TAG, PLAYER_TOKEN } from './api';

const tests = {
    playerTag: {
        index: true,
        verifyToken: !true
    }
}


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

    try {
        const player = await PlayerTag.get(api, PLAYER_TAG);
        console.log(player);
    } catch (err) {
        console.log(err);
        return;
    }

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
        const verificationResponse = await VerifyToken.get(api, PLAYER_TAG, {
            token: PLAYER_TOKEN
        });
        console.log(verificationResponse);
    } catch (err) {
        console.log(err);
        return;
    }
})()
