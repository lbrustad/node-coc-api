import api from './api';

import PlayerLabels from '../src/labels/Players';
import ClanLabels from '../src/labels/Clans';

const tests = {
    players: true,
    clans: true
}


;(async() => {
    if (!tests.players) return;
    // call -> /labels/players

    try {
        const playerLabels = await PlayerLabels.get(api, {
            limit: 3
        });
        console.log('\n\n\nPlayer Labels');
        
        console.log(playerLabels);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.clans) return;
    // call -> /labels/clans

    try {
        const clanLabels = await ClanLabels.get(api, {
            limit: 3
        });
        console.log('\n\n\nClan Labels');
        
        console.log(clanLabels);
    } catch (err) {
        console.log(err);
        return;
    }
})()
