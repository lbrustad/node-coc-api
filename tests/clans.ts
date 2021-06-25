import Clans from '../src/Clans';
import ClanTag from '../src/clans/ClanTag';
import CurrentWar from '../src/clans/clantag/CurrentWar';
import LeagueGroup from '../src/clans/clantag/currentwar/LeagueGroup';
import Members from '../src/clans/clantag/Members';
import WarLog from '../src/clans/clantag/WarLog';
import ClanWarLeagues from '../src/clans/ClanWarLeagues';
import api from './api';

const tests = {
    index: !true,
    clanTag: {
        index: !true,
        currentWar: {
            index: !true,
            leagueGroup: !true,
        },
        members: !true,
        warLogs: !true
    },
    clanWarLeagues: true
}

// this is a random tag I got from a request, so I would rather use random clan like the test code is doing
const CLAN_TAG = '#908GPQ2C';


;(async() => {
    if (!tests.index) return;
    // call -> /clans

    try {
        const [ clan ] = await Clans.get(api, {
            minClanLevel: 20
        });
        console.log(clan);
    } catch (err) {
        console.log(err);
    }
})()


;(async() => {
    if (!tests.clanTag.index) return;
    // call -> /clans/{clanTag}

    // try {
    //     const clan = await ClanTag.get(api, CLAN_TAG);
    //     return console.log(clan);
    // } catch (err) {
    //     console.log(err);
    //     return;
    // }

    try {
        const [ randomClan ] = await Clans.get(api, {
            minClanLevel: 18
        }, [{
            key: 'isWarLogPublic',
            value: true
        }]);

        const clan = await ClanTag.get(api, randomClan.tag);
        console.log(clan);
    } catch (err) {
        console.log(err)
    }
})()


;(async() => {
    if (!tests.clanTag.currentWar.index) return;
    // call -> /clans/{clanTag}/currentwar

    // try {
    //     const clanWar = await CurrentWar.get(api, CLAN_TAG);
    //     return console.log(clanWar);
    // } catch (err) {
    //     console.log(err);
    //     return;
    // }

    try {
        const [ clan ] = await Clans.get(api, {
            minClanLevel: 18
        }, [{
            key: 'isWarLogPublic',
            value: true
        }]);

        const clanWar = await CurrentWar.get(api, clan.tag);
        console.log(clanWar);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.clanTag.currentWar.leagueGroup) return;
    // call -> /clans/{clanTag}/currentwar/leaguegroup

    // try {
    //     const leagueGroup = await LeagueGroup.get(api, CLAN_TAG);
    //     return console.log(leagueGroup);
    // } catch (err) {
    //     console.log(err);
    //     return;
    // }

    try {
        const [ clan ] = await Clans.get(api, {
            minClanLevel: 18
        }, [{
            key: 'isWarLogPublic',
            value: true
        }]);

        const leagueGroup = await LeagueGroup.get(api, clan.tag);
        console.log(leagueGroup);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.clanTag.members) return;
    // call -> /clans/{clanTag}/members

    // try {
    //     const memberList = await Members.get(api, CLAN_TAG, {
    //         limit: 3
    //     });
    //     return console.log(memberList);
    // } catch (err) {
    //     console.log(err);
    //     return;
    // }

    try {
        const [ clan ] = await Clans.get(api, {
            minClanLevel: 18
        }, [{
            key: 'isWarLogPublic',
            value: true
        }]);

        const memberList = await Members.get(api, clan.tag);
        console.log(memberList);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.clanTag.warLogs) return;
    // call -> /clans/{clanTag}/warlog

    // try {
    //     const warLog = await WarLog.get(api, CLAN_TAG, {
    //         limit: 1
    //     });
    //     return console.log(warLog);
    // } catch (err) {
    //     console.log(err);
    //     return;
    // }

    try {
        const [ clan ] = await Clans.get(api, {
            minClanLevel: 18
        }, [{
            key: 'isWarLogPublic',
            value: true
        }]);

        const warLog = await WarLog.get(api, clan.tag, {
            limit: 3
        });
        console.log(warLog);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.clanWarLeagues) return;
    // call -> /clanwarleagues/wars/{warTag}

    // I have no idea where to get a war tag from, so I can't even test it...

    // write your own test? use ClanWarLeagues.get(warTag)
})()