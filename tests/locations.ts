import api, { LOCATION_ID } from './api';

import Locations from '../src/locations/Locations';
import LocationId from '../src/locations/LocationId';
import ClansRankings from '../src/locations/locationid/Clans'
import PlayersRankings from '../src/locations/locationid/Players'
import ClansVersus from '../src/locations/locationid/ClansVersus'
import PlayersVersus from '../src/locations/locationid/PlayersVersus'

const tests = {
    locations: {
        index: !true,
        locationId: {
            index: !true,
            clans: !true,
            players: true,
            clansVersus: !true,
            playersVersus: !true
        }
    }
}


;(async() => {
    if (!tests.locations.index) return;
    // call -> /locations

    try {
        const locations = await Locations.get(api, {
            limit: 3
        });
        
        console.log(locations);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.locations.locationId.index) return;
    // call -> /locations/{locationId}

    try {
        const [ randomLocation ] = await Locations.get(api, {
            limit: 1
        });

        const location = await LocationId.get(api, randomLocation.id as number);
        console.log(location);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.locations.locationId.clans) return;
    // call -> /locations/{locationId}/rankings/clans

    try {
        const clansRankings = await ClansRankings.get(api, LOCATION_ID);
        console.log(clansRankings);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.locations.locationId.players) return;
    // call -> /locations/{locationId}/rankings/players

    try {
        const playersRankings = await PlayersRankings.get(api, LOCATION_ID);
        console.log(playersRankings);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.locations.locationId.clansVersus) return;
    // call -> /locations/{locationId}/rankings/clans-versus

    try {
        const clansVersus = await ClansVersus.get(api, LOCATION_ID);
        console.log(clansVersus);
    } catch (err) {
        console.log(err);
        return;
    }
})()


;(async() => {
    if (!tests.locations.locationId.playersVersus) return;
    // call -> /locations/{locationId}/rankings/players-versus

    try {
        const playersVersus = await PlayersVersus.get(api, LOCATION_ID);
        console.log(playersVersus);
    } catch (err) {
        console.log(err);
        return;
    }
})()
