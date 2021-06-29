import api from './api';

import Leagues from '../src/leagues/Leagues';
import LeagueId from '../src/leagues/leagues/LeagueId';
import Seasons from '../src/leagues/leagues/leagueid/Seasons';
import SeasonId from '../src/leagues/leagues/leagueid/seasons/SeasonId';

import WarLeagues from '../src/leagues/WarLeagues';
import WarLeagueId from '../src/leagues/warleagues/LeagueId';

const tests = {
    leagues: {
        index: !true,
        leagueId: {
            index: !true,
            seasons: {
                index: !true,
                seasonId: !true
            }
        }
    },
    warLeagues: {
        index: !true,
        warLeagueId: true
    }
}


;(async() => {
    if (!tests.leagues.index) return;
    // call -> /leagues

    try {
        const leagues = await Leagues.get(api, {
            limit: 3
        });
        console.log(leagues);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.leagues.leagueId.index) return;
    // call -> /leagues/{leagueId}

    try {
        // prepare random data
        const randomLeagues = await Leagues.get(api, {
            limit: 3
        });
        const randomLeague = randomLeagues[0];

        // test the data
        const league = await LeagueId.get(api, randomLeague.id as number);
        console.log(league);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.leagues.leagueId.seasons.index) return;
    // call -> /leagues/{leagueId}/seasons

    try {
        // prepare random data
        const league = await LeagueId.get(api, 29000022); // 29000022 = Legend League

        // test the data
        const seasons = await Seasons.get(api, league.id as number, {
            limit: 3
        });
        console.log(seasons);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.leagues.leagueId.seasons.seasonId) return;
    // call -> /leagues/{leagueId}/seasons/{SeasonId}

    try {
        // prepare random data
        const league = await LeagueId.get(api, 29000022); // 29000022 = Legend League
        const [ randomSeason ] = await Seasons.get(api, league.id as number, {
            limit: 1
        });

        // test the data
        const season = await SeasonId.get(
            api,
            league.id as number,
            randomSeason.id as string,
            { limit: 3 }
        );
        console.log(season);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.warLeagues.index) return;
    // call -> /warleagues

    try {
        // test the data
        const warLeagues = await WarLeagues.get(api, {
            limit: 3
        });
        console.log(warLeagues);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.warLeagues.warLeagueId) return;
    // call -> /warleagues/{leagueId}

    try {
        // prepare random data
        const [ randomWarLeague ] = await WarLeagues.get(api, {
            limit: 1
        });

        // test the data
        const warLeague = await WarLeagueId.get(api, randomWarLeague.id as number);
        console.log(warLeague);
    } catch (err) {
        console.log(err);
        return;
    }
})()
