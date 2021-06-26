interface IClan {
    warLeague?: IWarLeague;
    memberList?: TClanMemberList;
    tag?: string;
    isWarLogPublic?: boolean;
    warFrequency?: string;
    warWinStreak?: number;
    warLosses?: number;
    clanPoints?: number;
    warTies?: number;
    clanLevel?: number;
    chatLanguage?: ILanguage;
    requiredVersusTrophies?: number;
    requiredTownhallLevel?: number;
    warWins?: number;
    clanVersusPoints?: number;
    requiredTrophies?: number;
    labels?: TLabelList;
    name?: string;
    location?: ILocation;
    type?: string;
    members?: number;
    description?: string;
    badgeUrls?: Object;
}

interface IClanList {
    items: IClan[];
}

interface IClanMember {
    league?: ILeague;
    tag?: string;
    name?: string;
    role?: string;
    expLevel?: number;
    clanRank?: number;
    previousClanRank?: number;
    donations?: number;
    donationsReceived?: number;
    trophies?: number;
    versusTrophies?: number;
}
type TClanMemberList = IClanMember[];

interface IClanWar {
    clan?: IWarClan;
    teamSize?: number;
    opponent?: IWarClan;
    startTime?: string;
    state?: string;
    endTime?: string;
    preparationStartTime?: string;
}

interface IClanWarAttack {
    order?: number;
    attackerTag?: string;
    defenderTag?: string;
    stars?: number;
    destructionPercentage?: number;
    duration?: number;
}
type TClanWarAttackList = IClanWarAttack[];

interface IClanWarLeagueClan {
    tag?: string;
    clanLevel?: number;
    name?: string;
    members?: TClanWarLeagueClanMemberList;
    badgeUrls?: Object;
}
type TClanWarLeagueClanList = IClanWarLeagueClan[];

interface IClanWarLeagueClanMember {
    tag?: string;
    townHallLevel?: number;
    name?: string;
}
type TClanWarLeagueClanMemberList = IClanWarLeagueClanMember[];

interface IClanWarLeagueGroup {
    tag?: string;
    state?: string;
    season?: string;
    clans?: TClanWarLeagueClanList;
    rounds?: TClanWarLeagueRoundList;
}

interface IClanWarLeagueRound {
    warTags?: TStringList;
}
type TClanWarLeagueRoundList = IClanWarLeagueRound[];

interface IClanWarLogEntry {
    clan?: IWarClan;
    teamSize?: number;
    opponent?: IWarClan;
    endTime?: string;
    result?: string;
}
type TClanWarLog = IClanWarLogEntry[];

interface IClanWarMember {
    tag?: string;
    name?: string;
    mapPosition?: number;
    townhallLevel?: number;
    opponentAttacks?: number;
    bestOpponentAttack?: IClanWarAttack;
    attacks?: TClanWarAttackList;
}
type TClanWarMemberList = IClanWarMember[];

interface IError {
    reason: string;
    message: string;
    type: string;
    detail: Object;
}

interface IFloat {}

interface IJsonLocalizedName {}

interface ILabel {
    name?: IJsonLocalizedName;
    id?: number;
    iconUrls?: Object;
}
type TLabelList = ILabel[];

interface ILanguage {
    name?: string;
    id?: number;
    languageCode?: string;
}

interface ILeague {
    name?: IJsonLocalizedName;
    id?: number;
    iconUrls?: Object;
}
type TLeagueList = ILeague[];

interface ILeagueSeason {
    id?: string;
}
type TLeagueSeasonList = ILeagueSeason[];

interface ILegendLeagueTournamentSeasonResult {
    trophies?: number;
    id?: string;
    rank?: number;
}

interface ILocation {
    localizedName?: string;
    id?: number;
    name?: string;
    isCountry?: boolean;
    countryCode?: string;
}

interface IPlayer {
    league?: ILeague;
    clan?: IPlayerClan;
    role?: string;
    attackWins?: number;
    defenseWins?: number;
    townHallLevel?: number;
    townHallWeaponLevel?: number;
    versusBattleWins?: number;
    legendStatistics?: IPlayerLegendStatistics;
    troops?: TPlayerItemLevelList;
    heroes?: TPlayerItemLevelList;
    spells?: TPlayerItemLevelList;
    labels?: TLabelList;
    tag?: string;
    name?: string;
    expLevel?: number;
    trophies?: number;
    bestTrophies?: number;
    donations?: number;
    donationsReceived?: number;
    builderHallLevel?: number;
    versusTrophies?: number;
    bestVersusTrophies?: number;
    warStars?: number;
    achievements?: TPlayerAchievementProgressList;
    versusBattleWinCount?: number;
}

interface IPlayerAchievementProgress {
    stars?: number;
    value?: number;
    name?: IJsonLocalizedName;
    target?: number;
    info?: IJsonLocalizedName;
    completionInfo?: IJsonLocalizedName;
    village?: string;
}
type TPlayerAchievementProgressList = IPlayerAchievementProgress[];

interface IPlayerClan {
    tag?: string;
    clanLevel?: number;
    name?: string;
    badgeUrls?: Object;
}

interface IPlayerItemLevel {
    level?: number;
    name?: IJsonLocalizedName;
    maxLevel?: number;
    village?: string;
    superTroopIsActive?: boolean;
}
type TPlayerItemLevelList = IPlayerItemLevel[];

interface IPlayerLegendStatistics {
    previousSeason?: ILegendLeagueTournamentSeasonResult;
    previousVersusSeason?: ILegendLeagueTournamentSeasonResult;
    bestVersusSeason?: ILegendLeagueTournamentSeasonResult;
    legendTrophies?: number;
    currentSeason?: ILegendLeagueTournamentSeasonResult;
    bestSeason?: ILegendLeagueTournamentSeasonResult;
}

type TStringList = string[];

interface IVerifyTokenResponse {
    tag?: string;
    token?: string;
    status?: string;
}

interface IWarClan {
    destructionPercentage?: IFloat;
    tag?: string;
    name?: string;
    badgeUrls?: Object;
    clanLevel?: number;
    attacks?: number;
    stars?: number;
    expEarned?: number;
    members?: TClanWarMemberList;
}

interface IWarLeague {
    name?: IJsonLocalizedName;
    id?: number;
}