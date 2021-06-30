import ClashOfClansAPI from '../src/ClashOfClansAPI';

const api = new ClashOfClansAPI({
    token: 'your.token.here'
    //, endpoint: 'set by default in the source code'
});

// for testing "/clans" based endpoints
const CLAN_TAG = '#29UR8RVLY';

// for testing "/players" based endpoints
const PLAYER_TAG = '#8892QGUY';
const PLAYER_TOKEN = 'get your token from in-game settings';

// for testing "/locations" based endpoints
const LOCATION_ID = 32000176; // - must be a country ID

export default api;
export {
    CLAN_TAG,
    PLAYER_TAG,
    PLAYER_TOKEN,
    LOCATION_ID
}
