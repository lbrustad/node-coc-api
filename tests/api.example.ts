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

export default api;
export {
    CLAN_TAG,
    PLAYER_TAG,
    PLAYER_TOKEN
}
