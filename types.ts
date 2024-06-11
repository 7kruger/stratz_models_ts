import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Byte: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Guid: { input: any; output: any; }
  Long: { input: any; output: any; }
  Short: { input: any; output: any; }
  UShort: { input: any; output: any; }
};

export type AbilityActiveListType = {
  __typename?: 'AbilityActiveListType';
  ability0?: Maybe<Scalars['Short']['output']>;
  ability1?: Maybe<Scalars['Short']['output']>;
  ability2?: Maybe<Scalars['Short']['output']>;
  ability3?: Maybe<Scalars['Short']['output']>;
  ability4?: Maybe<Scalars['Short']['output']>;
  ability5?: Maybe<Scalars['Short']['output']>;
  ability6?: Maybe<Scalars['Short']['output']>;
  ability7?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
};

export type AbilityAttributeType = {
  __typename?: 'AbilityAttributeType';
  linkedSpecialBonusAbilityId?: Maybe<Scalars['Short']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  requiresScepter?: Maybe<Scalars['Boolean']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type AbilityCustomGameLanguageType = {
  __typename?: 'AbilityCustomGameLanguageType';
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
};

export type AbilityCustomGameType = {
  __typename?: 'AbilityCustomGameType';
  abilityName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Short']['output']>;
  language?: Maybe<AbilityCustomGameLanguageType>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum AbilityDispellEnum {
  No = 'NO',
  None = 'NONE',
  Yes = 'YES',
  YesStrong = 'YES_STRONG'
}

export type AbilityLanguageType = {
  __typename?: 'AbilityLanguageType';
  aghanimDescription?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displayName?: Maybe<Scalars['String']['output']>;
  lore?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  shardDescription?: Maybe<Scalars['String']['output']>;
};

export type AbilityLearnEventsType = {
  __typename?: 'AbilityLearnEventsType';
  abilityId?: Maybe<Scalars['Short']['output']>;
  isMaxLevel?: Maybe<Scalars['Boolean']['output']>;
  isTalent?: Maybe<Scalars['Boolean']['output']>;
  isUltimate?: Maybe<Scalars['Boolean']['output']>;
  level: Scalars['Int']['output'];
  levelObtained: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type AbilityStatType = {
  __typename?: 'AbilityStatType';
  abilityId?: Maybe<Scalars['Short']['output']>;
  behavior?: Maybe<Scalars['Long']['output']>;
  castPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  castRange?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  castRangeBuffer?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  channelTime?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  chargeRestoreTime?: Maybe<Scalars['String']['output']>;
  charges?: Maybe<Scalars['String']['output']>;
  cooldown?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  damage?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  dispellable?: Maybe<AbilityDispellEnum>;
  displayAdditionalHeroes?: Maybe<Scalars['Boolean']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  fightRecapLevel?: Maybe<Scalars['Short']['output']>;
  hasScepterUpgrade?: Maybe<Scalars['Boolean']['output']>;
  hasShardUpgrade?: Maybe<Scalars['Boolean']['output']>;
  hotKeyOverride?: Maybe<Scalars['String']['output']>;
  isGrantedByScepter?: Maybe<Scalars['Boolean']['output']>;
  isGrantedByShard?: Maybe<Scalars['Boolean']['output']>;
  isOnCastbar?: Maybe<Scalars['Boolean']['output']>;
  isOnLearnbar?: Maybe<Scalars['Boolean']['output']>;
  isUltimate?: Maybe<Scalars['Boolean']['output']>;
  levelsBetweenUpgrades?: Maybe<Scalars['Byte']['output']>;
  linkedAbilityId?: Maybe<Scalars['Short']['output']>;
  manaCost?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  maxLevel?: Maybe<Scalars['Byte']['output']>;
  modifierSupportBonus?: Maybe<Scalars['Short']['output']>;
  modifierSupportValue?: Maybe<Scalars['Float']['output']>;
  requiredLevel?: Maybe<Scalars['Byte']['output']>;
  spellImmunity?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  unitDamageType?: Maybe<Scalars['Int']['output']>;
  unitTargetFlags?: Maybe<Scalars['Long']['output']>;
  unitTargetTeam?: Maybe<Scalars['Int']['output']>;
  unitTargetType?: Maybe<Scalars['Long']['output']>;
};

export type AbilityType = {
  __typename?: 'AbilityType';
  attributes?: Maybe<Array<Maybe<AbilityAttributeType>>>;
  id?: Maybe<Scalars['Short']['output']>;
  isTalent?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<AbilityLanguageType>;
  name?: Maybe<Scalars['String']['output']>;
  stat?: Maybe<AbilityStatType>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type AbilityUsedEventsType = {
  __typename?: 'AbilityUsedEventsType';
  abilityId?: Maybe<Scalars['Short']['output']>;
  attacker?: Maybe<Scalars['Short']['output']>;
  target?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
};

export type AdminMutation = {
  __typename?: 'AdminMutation';
  deleteProSteamAccount?: Maybe<Scalars['Boolean']['output']>;
  mergeProSteamAccount?: Maybe<Scalars['Boolean']['output']>;
};


export type AdminMutationDeleteProSteamAccountArgs = {
  request: DeleteProSteamAccountRequestType;
};


export type AdminMutationMergeProSteamAccountArgs = {
  request: Array<InputMaybe<MergeProSteamAccountRequestType>>;
};

export type AdminQuery = {
  __typename?: 'AdminQuery';
  /** Returns a list of Stratz blogs. */
  apiMemoryReport?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export enum AghanimLabDepthListAscensionAbilitiesEnum {
  AghsfortAscensionInvis = 'AGHSFORT_ASCENSION_INVIS',
  AscensionArmor = 'ASCENSION_ARMOR',
  AscensionArmorSapping = 'ASCENSION_ARMOR_SAPPING',
  AscensionAttackSpeed = 'ASCENSION_ATTACK_SPEED',
  AscensionBomb = 'ASCENSION_BOMB',
  AscensionBulwark = 'ASCENSION_BULWARK',
  AscensionChillingTouch = 'ASCENSION_CHILLING_TOUCH',
  AscensionCrit = 'ASCENSION_CRIT',
  AscensionDamage = 'ASCENSION_DAMAGE',
  AscensionDrunken = 'ASCENSION_DRUNKEN',
  AscensionEmbiggen = 'ASCENSION_EMBIGGEN',
  AscensionExtraFast = 'ASCENSION_EXTRA_FAST',
  AscensionFirefly = 'ASCENSION_FIREFLY',
  AscensionFlicker = 'ASCENSION_FLICKER',
  AscensionHealSuppression = 'ASCENSION_HEAL_SUPPRESSION',
  AscensionMagicImmunity = 'ASCENSION_MAGIC_IMMUNITY',
  AscensionMagicResist = 'ASCENSION_MAGIC_RESIST',
  AscensionMagneticField = 'ASCENSION_MAGNETIC_FIELD',
  AscensionMeteoric = 'ASCENSION_METEORIC',
  AscensionPlasmaField = 'ASCENSION_PLASMA_FIELD',
  AscensionSilence = 'ASCENSION_SILENCE',
  AscensionVampiric = 'ASCENSION_VAMPIRIC',
  AscensionVengeance = 'ASCENSION_VENGEANCE'
}

export type AghanimLabDepthListAscensionAbilitiesObjectType = {
  __typename?: 'AghanimLabDepthListAscensionAbilitiesObjectType';
  abilityId?: Maybe<Scalars['Short']['output']>;
  modifierId?: Maybe<Scalars['Short']['output']>;
  type?: Maybe<AghanimLabDepthListAscensionAbilitiesEnum>;
};

export enum AghanimLabDepthListEncounterEnum {
  EncounterAghanim = 'ENCOUNTER_AGHANIM',
  EncounterAlchemist = 'ENCOUNTER_ALCHEMIST',
  EncounterAquaManor = 'ENCOUNTER_AQUA_MANOR',
  EncounterAziyogCaverns = 'ENCOUNTER_AZIYOG_CAVERNS',
  EncounterBabyOgres = 'ENCOUNTER_BABY_OGRES',
  EncounterBambooGarden = 'ENCOUNTER_BAMBOO_GARDEN',
  EncounterBandits = 'ENCOUNTER_BANDITS',
  EncounterBeachTraps = 'ENCOUNTER_BEACH_TRAPS',
  EncounterBearsLair = 'ENCOUNTER_BEARS_LAIR',
  EncounterBigOgres = 'ENCOUNTER_BIG_OGRES',
  EncounterBlobDungeon = 'ENCOUNTER_BLOB_DUNGEON',
  EncounterBogTraps = 'ENCOUNTER_BOG_TRAPS',
  EncounterBombers = 'ENCOUNTER_BOMBERS',
  EncounterBombSquad = 'ENCOUNTER_BOMB_SQUAD',
  EncounterBonusChicken = 'ENCOUNTER_BONUS_CHICKEN',
  EncounterBonusGallery = 'ENCOUNTER_BONUS_GALLERY',
  EncounterBonusHooking = 'ENCOUNTER_BONUS_HOOKING',
  EncounterBonusLivestock = 'ENCOUNTER_BONUS_LIVESTOCK',
  EncounterBonusMangoOrchard = 'ENCOUNTER_BONUS_MANGO_ORCHARD',
  EncounterBonusSmashChickens = 'ENCOUNTER_BONUS_SMASH_CHICKENS',
  EncounterBossAmoeba = 'ENCOUNTER_BOSS_AMOEBA',
  EncounterBossArcWarden = 'ENCOUNTER_BOSS_ARC_WARDEN',
  EncounterBossClockwerkTinker = 'ENCOUNTER_BOSS_CLOCKWERK_TINKER',
  EncounterBossDarkWillow = 'ENCOUNTER_BOSS_DARK_WILLOW',
  EncounterBossEarthshaker = 'ENCOUNTER_BOSS_EARTHSHAKER',
  EncounterBossRizzrick = 'ENCOUNTER_BOSS_RIZZRICK',
  EncounterBossStoregga = 'ENCOUNTER_BOSS_STOREGGA',
  EncounterBossTimbersaw = 'ENCOUNTER_BOSS_TIMBERSAW',
  EncounterBossVisage = 'ENCOUNTER_BOSS_VISAGE',
  EncounterBossVoidSpirit = 'ENCOUNTER_BOSS_VOID_SPIRIT',
  EncounterBossWinterWyvern = 'ENCOUNTER_BOSS_WINTER_WYVERN',
  EncounterBrewmaster = 'ENCOUNTER_BREWMASTER',
  EncounterBridgeTraps = 'ENCOUNTER_BRIDGE_TRAPS',
  EncounterBroodmothers = 'ENCOUNTER_BROODMOTHERS',
  EncounterBurningMesa = 'ENCOUNTER_BURNING_MESA',
  EncounterCanopyTraps = 'ENCOUNTER_CANOPY_TRAPS',
  EncounterCastleTraps = 'ENCOUNTER_CASTLE_TRAPS',
  EncounterCatacombs = 'ENCOUNTER_CATACOMBS',
  EncounterCavernTraps = 'ENCOUNTER_CAVERN_TRAPS',
  EncounterCliffPass = 'ENCOUNTER_CLIFF_PASS',
  EncounterCollapsedMines = 'ENCOUNTER_COLLAPSED_MINES',
  EncounterCryptGate = 'ENCOUNTER_CRYPT_GATE',
  EncounterCryptTraps = 'ENCOUNTER_CRYPT_TRAPS',
  EncounterDarkForest = 'ENCOUNTER_DARK_FOREST',
  EncounterDarkSeer = 'ENCOUNTER_DARK_SEER',
  EncounterDeepTraps = 'ENCOUNTER_DEEP_TRAPS',
  EncounterDemonicWoods = 'ENCOUNTER_DEMONIC_WOODS',
  EncounterDesertOasis = 'ENCOUNTER_DESERT_OASIS',
  EncounterDireSiege = 'ENCOUNTER_DIRE_SIEGE',
  EncounterDragonKnight = 'ENCOUNTER_DRAGON_KNIGHT',
  EncounterDrowRangerMiniboss = 'ENCOUNTER_DROW_RANGER_MINIBOSS',
  EncounterDungeonTraps = 'ENCOUNTER_DUNGEON_TRAPS',
  EncounterEggsHoldout = 'ENCOUNTER_EGGS_HOLDOUT',
  EncounterElementalTiny = 'ENCOUNTER_ELEMENTAL_TINY',
  EncounterEmptyBeach = 'ENCOUNTER_EMPTY_BEACH',
  EncounterEmptyCavern = 'ENCOUNTER_EMPTY_CAVERN',
  EncounterEnragedWildwings = 'ENCOUNTER_ENRAGED_WILDWINGS',
  EncounterEventAlchemistNeutralItems = 'ENCOUNTER_EVENT_ALCHEMIST_NEUTRAL_ITEMS',
  EncounterEventBigTinyGrow = 'ENCOUNTER_EVENT_BIG_TINY_GROW',
  EncounterEventBrewmasterBar = 'ENCOUNTER_EVENT_BREWMASTER_BAR',
  EncounterEventDoomLifeSwap = 'ENCOUNTER_EVENT_DOOM_LIFE_SWAP',
  EncounterEventLeshrac = 'ENCOUNTER_EVENT_LESHRAC',
  EncounterEventLifeShop = 'ENCOUNTER_EVENT_LIFE_SHOP',
  EncounterEventMinorShardShop = 'ENCOUNTER_EVENT_MINOR_SHARD_SHOP',
  EncounterEventMorphlingAttributeShift = 'ENCOUNTER_EVENT_MORPHLING_ATTRIBUTE_SHIFT',
  EncounterEventNagaBottleRune = 'ENCOUNTER_EVENT_NAGA_BOTTLE_RUNE',
  EncounterEventNecrophos = 'ENCOUNTER_EVENT_NECROPHOS',
  EncounterEventOgreMagiCasino = 'ENCOUNTER_EVENT_OGRE_MAGI_CASINO',
  EncounterEventSlark = 'ENCOUNTER_EVENT_SLARK',
  EncounterEventSmallTinyShrink = 'ENCOUNTER_EVENT_SMALL_TINY_SHRINK',
  EncounterEventTinkerRangeRetrofit = 'ENCOUNTER_EVENT_TINKER_RANGE_RETROFIT',
  EncounterEventWarlockLibrary = 'ENCOUNTER_EVENT_WARLOCK_LIBRARY',
  EncounterEventZeus = 'ENCOUNTER_EVENT_ZEUS',
  EncounterFireRoshan = 'ENCOUNTER_FIRE_ROSHAN',
  EncounterForbiddenPalace = 'ENCOUNTER_FORBIDDEN_PALACE',
  EncounterForsakenPit = 'ENCOUNTER_FORSAKEN_PIT',
  EncounterFrigidPinnacle = 'ENCOUNTER_FRIGID_PINNACLE',
  EncounterFrozenRavine = 'ENCOUNTER_FROZEN_RAVINE',
  EncounterGaolers = 'ENCOUNTER_GAOLERS',
  EncounterGauntlet = 'ENCOUNTER_GAUNTLET',
  EncounterGolemGorge = 'ENCOUNTER_GOLEM_GORGE',
  EncounterHedgeTraps = 'ENCOUNTER_HEDGE_TRAPS',
  EncounterHellbearsPortalV_3 = 'ENCOUNTER_HELLBEARS_PORTAL_V_3',
  EncounterHellfireCanyon = 'ENCOUNTER_HELLFIRE_CANYON',
  EncounterHiddenColosseum = 'ENCOUNTER_HIDDEN_COLOSSEUM',
  EncounterIcyPools = 'ENCOUNTER_ICY_POOLS',
  EncounterInnerRing = 'ENCOUNTER_INNER_RING',
  EncounterJungleFireMaze = 'ENCOUNTER_JUNGLE_FIRE_MAZE',
  EncounterJungleHijinx = 'ENCOUNTER_JUNGLE_HIJINX',
  EncounterJungleTraps = 'ENCOUNTER_JUNGLE_TRAPS',
  EncounterJungleTrek = 'ENCOUNTER_JUNGLE_TREK',
  EncounterKunkkaTide = 'ENCOUNTER_KUNKKA_TIDE',
  EncounterLegionCommander = 'ENCOUNTER_LEGION_COMMANDER',
  EncounterLeshrac = 'ENCOUNTER_LESHRAC',
  EncounterMiningTraps = 'ENCOUNTER_MINING_TRAPS',
  EncounterMirana = 'ENCOUNTER_MIRANA',
  EncounterMoleCave = 'ENCOUNTER_MOLE_CAVE',
  EncounterMorphlingsB = 'ENCOUNTER_MORPHLINGS_B',
  EncounterMortyTransition = 'ENCOUNTER_MORTY_TRANSITION',
  EncounterMultiplicity = 'ENCOUNTER_MULTIPLICITY',
  EncounterMushroomMines = 'ENCOUNTER_MUSHROOM_MINES',
  EncounterMushroomMines_2021 = 'ENCOUNTER_MUSHROOM_MINES_2021',
  EncounterMysticalTraps = 'ENCOUNTER_MYSTICAL_TRAPS',
  EncounterNagaSiren = 'ENCOUNTER_NAGA_SIREN',
  EncounterOgreSeals = 'ENCOUNTER_OGRE_SEALS',
  EncounterOutworld = 'ENCOUNTER_OUTWORLD',
  EncounterPalaceTraps = 'ENCOUNTER_PALACE_TRAPS',
  EncounterPangolier = 'ENCOUNTER_PANGOLIER',
  EncounterPenguinsTransition = 'ENCOUNTER_PENGUINS_TRANSITION',
  EncounterPenguinSledding = 'ENCOUNTER_PENGUIN_SLEDDING',
  EncounterPhoenix = 'ENCOUNTER_PHOENIX',
  EncounterPinecones = 'ENCOUNTER_PINECONES',
  EncounterPineGrove = 'ENCOUNTER_PINE_GROVE',
  EncounterPolaritySwap = 'ENCOUNTER_POLARITY_SWAP',
  EncounterPrimalBeast = 'ENCOUNTER_PRIMAL_BEAST',
  EncounterPrisonTraps = 'ENCOUNTER_PRISON_TRAPS',
  EncounterPucks = 'ENCOUNTER_PUCKS',
  EncounterPudgeMiniboss = 'ENCOUNTER_PUDGE_MINIBOSS',
  EncounterPugnaNetherReaches = 'ENCOUNTER_PUGNA_NETHER_REACHES',
  EncounterPushPull = 'ENCOUNTER_PUSH_PULL',
  EncounterQuillBeasts = 'ENCOUNTER_QUILL_BEASTS',
  EncounterRegalTraps = 'ENCOUNTER_REGAL_TRAPS',
  EncounterRockGolems = 'ENCOUNTER_ROCK_GOLEMS',
  EncounterRuinousTraps = 'ENCOUNTER_RUINOUS_TRAPS',
  EncounterSacredGrounds = 'ENCOUNTER_SACRED_GROUNDS',
  EncounterSaltyShore = 'ENCOUNTER_SALTY_SHORE',
  EncounterShadowDemons = 'ENCOUNTER_SHADOW_DEMONS',
  EncounterSmashyAndBashy = 'ENCOUNTER_SMASHY_AND_BASHY',
  EncounterSnapfire = 'ENCOUNTER_SNAPFIRE',
  EncounterSpectres = 'ENCOUNTER_SPECTRES',
  EncounterSplitsville = 'ENCOUNTER_SPLITSVILLE',
  EncounterSpookTown = 'ENCOUNTER_SPOOK_TOWN',
  EncounterStonehallCitadel = 'ENCOUNTER_STONEHALL_CITADEL',
  EncounterStoregga = 'ENCOUNTER_STOREGGA',
  EncounterSwampOfSadness = 'ENCOUNTER_SWAMP_OF_SADNESS',
  EncounterTempleGarden = 'ENCOUNTER_TEMPLE_GARDEN',
  EncounterTempleGuardians = 'ENCOUNTER_TEMPLE_GUARDIANS',
  EncounterTempleSiege = 'ENCOUNTER_TEMPLE_SIEGE',
  EncounterTempleTraps = 'ENCOUNTER_TEMPLE_TRAPS',
  EncounterThunderMountain = 'ENCOUNTER_THUNDER_MOUNTAIN',
  EncounterToxicTerrace = 'ENCOUNTER_TOXIC_TERRACE',
  EncounterTransitionGateway = 'ENCOUNTER_TRANSITION_GATEWAY',
  EncounterTrollWarlord = 'ENCOUNTER_TROLL_WARLORD',
  EncounterTropicalKeep = 'ENCOUNTER_TROPICAL_KEEP',
  EncounterTuskSkeletons = 'ENCOUNTER_TUSK_SKELETONS',
  EncounterTwilightMaze = 'ENCOUNTER_TWILIGHT_MAZE',
  EncounterUndeadWoods = 'ENCOUNTER_UNDEAD_WOODS',
  EncounterVillageTraps = 'ENCOUNTER_VILLAGE_TRAPS',
  EncounterWarlocks = 'ENCOUNTER_WARLOCKS',
  EncounterWaveBlasters = 'ENCOUNTER_WAVE_BLASTERS',
  EncounterWendigoes = 'ENCOUNTER_WENDIGOES',
  EncounterZealotScarabs = 'ENCOUNTER_ZEALOT_SCARABS'
}

export enum AghanimLabDepthListRewardEnum {
  RewardTypeExtraLives = 'REWARD_TYPE_EXTRA_LIVES',
  RewardTypeGold = 'REWARD_TYPE_GOLD',
  RewardTypeNone = 'REWARD_TYPE_NONE',
  RewardTypeTreasure = 'REWARD_TYPE_TREASURE'
}

export type AghanimLabHeroAbilityType = {
  __typename?: 'AghanimLabHeroAbilityType';
  customAbilityId?: Maybe<Scalars['Short']['output']>;
  difficulty?: Maybe<AghanimLabMatchDifficultyEnum>;
  heroId?: Maybe<Scalars['Short']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  pickCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type AghanimLabHeroCompositionType = {
  __typename?: 'AghanimLabHeroCompositionType';
  difficulty?: Maybe<AghanimLabMatchDifficultyEnum>;
  duration?: Maybe<Scalars['Int']['output']>;
  heroId1?: Maybe<Scalars['Short']['output']>;
  heroId2?: Maybe<Scalars['Short']['output']>;
  heroId3?: Maybe<Scalars['Short']['output']>;
  heroId4?: Maybe<Scalars['Short']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  wilsonScore?: Maybe<Scalars['Decimal']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type AghanimLabHeroWinRateType = {
  __typename?: 'AghanimLabHeroWinRateType';
  difficulty?: Maybe<AghanimLabMatchDifficultyEnum>;
  heroId?: Maybe<Scalars['Short']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type AghanimLabMatchDepthListType = {
  __typename?: 'AghanimLabMatchDepthListType';
  ascensionAbilities?: Maybe<Array<Maybe<AghanimLabDepthListAscensionAbilitiesObjectType>>>;
  selectedElite?: Maybe<Scalars['Boolean']['output']>;
  selectedEncounter?: Maybe<AghanimLabDepthListEncounterEnum>;
  selectedEncounterEnum?: Maybe<Scalars['Byte']['output']>;
  selectedHidden?: Maybe<Scalars['Boolean']['output']>;
  selectedReward?: Maybe<AghanimLabDepthListRewardEnum>;
  unselectedElite?: Maybe<Scalars['Boolean']['output']>;
  unselectedEncounter?: Maybe<AghanimLabDepthListEncounterEnum>;
  unselectedHidden?: Maybe<Scalars['Boolean']['output']>;
  unselectedReward?: Maybe<AghanimLabDepthListRewardEnum>;
};

export enum AghanimLabMatchDifficultyEnum {
  Apexmage = 'APEXMAGE',
  Apprentice = 'APPRENTICE',
  Grandmagus = 'GRANDMAGUS',
  Magician = 'MAGICIAN',
  Sorcerer = 'SORCERER'
}

export type AghanimLabMatchType = {
  __typename?: 'AghanimLabMatchType';
  arcaneFragments?: Maybe<Scalars['Short']['output']>;
  battlePoints?: Maybe<Scalars['Short']['output']>;
  clusterId?: Maybe<Scalars['Short']['output']>;
  depth?: Maybe<Scalars['Byte']['output']>;
  depthList?: Maybe<Array<Maybe<AghanimLabMatchDepthListType>>>;
  didWin?: Maybe<Scalars['Boolean']['output']>;
  difficulty?: Maybe<AghanimLabMatchDifficultyEnum>;
  durationSeconds?: Maybe<Scalars['Short']['output']>;
  endDateTime?: Maybe<Scalars['Long']['output']>;
  gameMode?: Maybe<Scalars['Byte']['output']>;
  goldBags?: Maybe<Scalars['Short']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  lobbyType?: Maybe<Scalars['Byte']['output']>;
  numDeaths?: Maybe<Scalars['Short']['output']>;
  numHumanPlayers?: Maybe<Scalars['Byte']['output']>;
  numKills?: Maybe<Scalars['Short']['output']>;
  players?: Maybe<Array<Maybe<AghanimLabPlayerSeasonOneType>>>;
  regionId?: Maybe<Scalars['Byte']['output']>;
  replaySalt?: Maybe<Scalars['Long']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  seed?: Maybe<Scalars['Int']['output']>;
  startDateTime?: Maybe<Scalars['Long']['output']>;
};


export type AghanimLabMatchTypePlayersArgs = {
  steamAccountId?: InputMaybe<Scalars['Long']['input']>;
};

export enum AghanimLabPlayerBlessingEnum {
  AttackRange = 'ATTACK_RANGE',
  BossTome = 'BOSS_TOME',
  BottleCharges = 'BOTTLE_CHARGES',
  BottleRegenDuration = 'BOTTLE_REGEN_DURATION',
  BottleRegenMovementSpeed = 'BOTTLE_REGEN_MOVEMENT_SPEED',
  CastRange = 'CAST_RANGE',
  DamageOnStunned = 'DAMAGE_ON_STUNNED',
  DeathDetonation = 'DEATH_DETONATION',
  DebuffDurationIncrease = 'DEBUFF_DURATION_INCREASE',
  EliteUpgrade = 'ELITE_UPGRADE',
  ExtraLife = 'EXTRA_LIFE',
  LowHpOutgoingDamage = 'LOW_HP_OUTGOING_DAMAGE',
  MeleeCleave = 'MELEE_CLEAVE',
  ModifierBlessingAgility = 'MODIFIER_BLESSING_AGILITY',
  ModifierBlessingArmor = 'MODIFIER_BLESSING_ARMOR',
  ModifierBlessingAttackSpeed = 'MODIFIER_BLESSING_ATTACK_SPEED',
  ModifierBlessingBase = 'MODIFIER_BLESSING_BASE',
  ModifierBlessingBookAgility = 'MODIFIER_BLESSING_BOOK_AGILITY',
  ModifierBlessingBookIntelligence = 'MODIFIER_BLESSING_BOOK_INTELLIGENCE',
  ModifierBlessingBookStrength = 'MODIFIER_BLESSING_BOOK_STRENGTH',
  ModifierBlessingBottleUpgrade = 'MODIFIER_BLESSING_BOTTLE_UPGRADE',
  ModifierBlessingDamageBonus = 'MODIFIER_BLESSING_DAMAGE_BONUS',
  ModifierBlessingDamageReflect = 'MODIFIER_BLESSING_DAMAGE_REFLECT',
  ModifierBlessingDetonation = 'MODIFIER_BLESSING_DETONATION',
  ModifierBlessingEvasion = 'MODIFIER_BLESSING_EVASION',
  ModifierBlessingHealthBoost = 'MODIFIER_BLESSING_HEALTH_BOOST',
  ModifierBlessingIntelligence = 'MODIFIER_BLESSING_INTELLIGENCE',
  ModifierBlessingLifeSteal = 'MODIFIER_BLESSING_LIFE_STEAL',
  ModifierBlessingMagicDamageBonus = 'MODIFIER_BLESSING_MAGIC_DAMAGE_BONUS',
  ModifierBlessingMagicResist = 'MODIFIER_BLESSING_MAGIC_RESIST',
  ModifierBlessingManaBoost = 'MODIFIER_BLESSING_MANA_BOOST',
  ModifierBlessingMovementSpeed = 'MODIFIER_BLESSING_MOVEMENT_SPEED',
  ModifierBlessingPotionArcanist = 'MODIFIER_BLESSING_POTION_ARCANIST',
  ModifierBlessingPotionDragon = 'MODIFIER_BLESSING_POTION_DRAGON',
  ModifierBlessingPotionEchoSlam = 'MODIFIER_BLESSING_POTION_ECHO_SLAM',
  ModifierBlessingPotionHealth = 'MODIFIER_BLESSING_POTION_HEALTH',
  ModifierBlessingPotionMana = 'MODIFIER_BLESSING_POTION_MANA',
  ModifierBlessingPotionPurification = 'MODIFIER_BLESSING_POTION_PURIFICATION',
  ModifierBlessingPotionRavage = 'MODIFIER_BLESSING_POTION_RAVAGE',
  ModifierBlessingPotionShadowWave = 'MODIFIER_BLESSING_POTION_SHADOW_WAVE',
  ModifierBlessingPotionTorrent = 'MODIFIER_BLESSING_POTION_TORRENT',
  ModifierBlessingRefresherShard = 'MODIFIER_BLESSING_REFRESHER_SHARD',
  ModifierBlessingRespawnInvulnerability = 'MODIFIER_BLESSING_RESPAWN_INVULNERABILITY',
  ModifierBlessingRespawnTimeReduction = 'MODIFIER_BLESSING_RESPAWN_TIME_REDUCTION',
  ModifierBlessingRestoreMana = 'MODIFIER_BLESSING_RESTORE_MANA',
  ModifierBlessingSpellLifeSteal = 'MODIFIER_BLESSING_SPELL_LIFE_STEAL',
  ModifierBlessingStrength = 'MODIFIER_BLESSING_STRENGTH',
  OracleShopDiscount = 'ORACLE_SHOP_DISCOUNT',
  PotionHealth = 'POTION_HEALTH',
  PotionMana = 'POTION_MANA',
  ProjectileSpeed = 'PROJECTILE_SPEED',
  PurificationPotion = 'PURIFICATION_POTION',
  RegenAroundAllies = 'REGEN_AROUND_ALLIES',
  RespawnAttackSpeed = 'RESPAWN_ATTACK_SPEED',
  RespawnHaste = 'RESPAWN_HASTE',
  RespawnInvulnerability = 'RESPAWN_INVULNERABILITY',
  RespawnTimeReduction = 'RESPAWN_TIME_REDUCTION',
  RoshanShopDiscount = 'ROSHAN_SHOP_DISCOUNT',
  StartingGold = 'STARTING_GOLD',
  StartTome = 'START_TOME',
  StatAgi = 'STAT_AGI',
  StatDamage = 'STAT_DAMAGE',
  StatEvasion = 'STAT_EVASION',
  StatHealth = 'STAT_HEALTH',
  StatInt = 'STAT_INT',
  StatMagicResist = 'STAT_MAGIC_RESIST',
  StatMana = 'STAT_MANA',
  StatSpellAmp = 'STAT_SPELL_AMP',
  StatStr = 'STAT_STR',
  UpgradeReroll = 'UPGRADE_REROLL'
}

export type AghanimLabPlayerBlessingObjectType = {
  __typename?: 'AghanimLabPlayerBlessingObjectType';
  type?: Maybe<AghanimLabPlayerBlessingEnum>;
  value?: Maybe<Scalars['Short']['output']>;
};

export type AghanimLabPlayerDepthListType = {
  __typename?: 'AghanimLabPlayerDepthListType';
  goldBags?: Maybe<Scalars['Short']['output']>;
  kills?: Maybe<Scalars['Short']['output']>;
  level?: Maybe<Scalars['Byte']['output']>;
  networth?: Maybe<Scalars['Int']['output']>;
  numDeaths?: Maybe<Scalars['Short']['output']>;
  rarity?: Maybe<Scalars['Byte']['output']>;
  selectedRewardAbility?: Maybe<AbilityCustomGameType>;
  selectedRewardAbilityId?: Maybe<Scalars['Short']['output']>;
  selectedRewardImageAbilityId?: Maybe<Scalars['Short']['output']>;
  unSelectedRewardAbility1?: Maybe<AbilityCustomGameType>;
  unSelectedRewardAbility2?: Maybe<AbilityCustomGameType>;
  unSelectedRewardAbilityId1?: Maybe<Scalars['Short']['output']>;
  unSelectedRewardAbilityId2?: Maybe<Scalars['Short']['output']>;
};


export type AghanimLabPlayerDepthListTypeSelectedRewardAbilityArgs = {
  langaugeId?: InputMaybe<Scalars['Int']['input']>;
};


export type AghanimLabPlayerDepthListTypeUnSelectedRewardAbility1Args = {
  langaugeId?: InputMaybe<Scalars['Int']['input']>;
};


export type AghanimLabPlayerDepthListTypeUnSelectedRewardAbility2Args = {
  langaugeId?: InputMaybe<Scalars['Int']['input']>;
};

export type AghanimLabPlayerSeasonOneType = {
  __typename?: 'AghanimLabPlayerSeasonOneType';
  arcaneFragments?: Maybe<Scalars['Short']['output']>;
  blessings?: Maybe<Array<Maybe<AghanimLabPlayerBlessingObjectType>>>;
  bonusArcaneFragments?: Maybe<Scalars['Short']['output']>;
  deaths?: Maybe<Scalars['Long']['output']>;
  experiencePerMinute?: Maybe<Scalars['Short']['output']>;
  goldBags?: Maybe<Scalars['Short']['output']>;
  goldPerMinute?: Maybe<Scalars['Short']['output']>;
  goldSpent?: Maybe<Scalars['Int']['output']>;
  hero?: Maybe<HeroType>;
  heroId?: Maybe<Scalars['Short']['output']>;
  isVictory: Scalars['Boolean']['output'];
  item0Id?: Maybe<Scalars['Short']['output']>;
  item1Id?: Maybe<Scalars['Short']['output']>;
  item2Id?: Maybe<Scalars['Short']['output']>;
  item3Id?: Maybe<Scalars['Short']['output']>;
  item4Id?: Maybe<Scalars['Short']['output']>;
  item5Id?: Maybe<Scalars['Short']['output']>;
  leaverStatus?: Maybe<Scalars['Byte']['output']>;
  level?: Maybe<Scalars['Byte']['output']>;
  matchId?: Maybe<Scalars['Long']['output']>;
  networth?: Maybe<Scalars['Int']['output']>;
  neutral0Id?: Maybe<Scalars['Long']['output']>;
  neutralItemId?: Maybe<Scalars['Short']['output']>;
  numLastHits?: Maybe<Scalars['Short']['output']>;
  partyId?: Maybe<Scalars['Byte']['output']>;
  playerDepthList?: Maybe<Array<Maybe<AghanimLabPlayerDepthListType>>>;
  playerSlot?: Maybe<Scalars['Byte']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
};

export type AghanimLabRoomType = {
  __typename?: 'AghanimLabRoomType';
  deathCount?: Maybe<Scalars['Int']['output']>;
  difficulty?: Maybe<AghanimLabMatchDifficultyEnum>;
  eliteDeathCount?: Maybe<Scalars['Int']['output']>;
  eliteMatchCount?: Maybe<Scalars['Int']['output']>;
  elitePickCount?: Maybe<Scalars['Int']['output']>;
  eliteWinCount?: Maybe<Scalars['Int']['output']>;
  encounterId?: Maybe<AghanimLabDepthListEncounterEnum>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  pickCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type AssistDetailType = {
  __typename?: 'AssistDetailType';
  attacker?: Maybe<Scalars['Short']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  subTime?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
  xp?: Maybe<Scalars['Int']['output']>;
};

export enum BasicRegionType {
  China = 'CHINA',
  Europe = 'EUROPE',
  NorthAmerica = 'NORTH_AMERICA',
  Sea = 'SEA',
  SouthAmerica = 'SOUTH_AMERICA'
}

export type BattlepassPredictionHeroType = {
  __typename?: 'BattlepassPredictionHeroType';
  assistAvg?: Maybe<Scalars['Float']['output']>;
  deathAvg?: Maybe<Scalars['Float']['output']>;
  experiencePerMinuteAvg?: Maybe<Scalars['Float']['output']>;
  hero?: Maybe<HeroType>;
  heroId?: Maybe<Scalars['Short']['output']>;
  killAvg?: Maybe<Scalars['Float']['output']>;
  lastHitAvg?: Maybe<Scalars['Float']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  matchCountBanned?: Maybe<Scalars['Int']['output']>;
  mostAssists?: Maybe<Scalars['Int']['output']>;
  mostDeaths?: Maybe<Scalars['Int']['output']>;
  mostKills?: Maybe<Scalars['Int']['output']>;
  mostLastHits?: Maybe<Scalars['Int']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
};

export type BattlepassPredictionIdValueType = {
  __typename?: 'BattlepassPredictionIdValueType';
  id?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
};

export type BattlepassPredictionPlayerType = {
  __typename?: 'BattlepassPredictionPlayerType';
  assistAvg?: Maybe<Scalars['Float']['output']>;
  deathAvg?: Maybe<Scalars['Float']['output']>;
  goldPerMinuteAvg?: Maybe<Scalars['Int']['output']>;
  heroCount?: Maybe<Scalars['Int']['output']>;
  killAvg?: Maybe<Scalars['Float']['output']>;
  lastHitAvg?: Maybe<Scalars['Float']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  mostAssists?: Maybe<Scalars['Int']['output']>;
  mostGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  mostKills?: Maybe<Scalars['Int']['output']>;
  mostLastHits?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Int']['output']>;
};

export type BattlepassPredictionTeamType = {
  __typename?: 'BattlepassPredictionTeamType';
  gameSecondsAvg?: Maybe<Scalars['Float']['output']>;
  heroCount?: Maybe<Scalars['Int']['output']>;
  killAvg?: Maybe<Scalars['Float']['output']>;
  leastDeaths?: Maybe<Scalars['Float']['output']>;
  longestGameSeconds?: Maybe<Scalars['Int']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  mostAssists?: Maybe<Scalars['Float']['output']>;
  mostKills?: Maybe<Scalars['Float']['output']>;
  shortestGameSeconds?: Maybe<Scalars['Int']['output']>;
  team?: Maybe<TeamType>;
  teamId?: Maybe<Scalars['Int']['output']>;
};

export type BattlepassPredictionTournamentType = {
  __typename?: 'BattlepassPredictionTournamentType';
  heroesBanned?: Maybe<Array<Maybe<BattlepassPredictionIdValueType>>>;
  heroesPicked?: Maybe<Array<Maybe<BattlepassPredictionIdValueType>>>;
  longestGame?: Maybe<Array<Maybe<BattlepassPredictionIdValueType>>>;
  soloAssists?: Maybe<Array<Maybe<BattlepassPredictionIdValueType>>>;
  soloDeaths?: Maybe<Array<Maybe<BattlepassPredictionIdValueType>>>;
  soloGoldPerMinute?: Maybe<Array<Maybe<BattlepassPredictionIdValueType>>>;
  soloKills?: Maybe<Array<Maybe<BattlepassPredictionIdValueType>>>;
  totalKills?: Maybe<Array<Maybe<BattlepassPredictionIdValueType>>>;
};

export type BlogType = {
  __typename?: 'BlogType';
  bannerImageUrl: Scalars['String']['output'];
  captainJackIdentityId?: Maybe<Scalars['Guid']['output']>;
  data: Scalars['String']['output'];
  id?: Maybe<Scalars['Byte']['output']>;
  link: Scalars['String']['output'];
  liveDateTime?: Maybe<Scalars['DateTime']['output']>;
  title: Scalars['String']['output'];
};

export enum BuildingType {
  Barracks = 'BARRACKS',
  Fort = 'FORT',
  Healer = 'HEALER',
  Outpost = 'OUTPOST',
  Tower = 'TOWER'
}

export type BuyBackDetailType = {
  __typename?: 'BuyBackDetailType';
  cost: Scalars['Int']['output'];
  deathTimeRemaining: Scalars['Int']['output'];
  heroId?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
};

export type CaptainJackIdentityApiApplicationType = {
  __typename?: 'CaptainJackIdentityApiApplicationType';
  apiKey?: Maybe<Scalars['String']['output']>;
  captainJackIdentityId?: Maybe<Scalars['Guid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discordAddress?: Maybe<Scalars['String']['output']>;
  emailAddress?: Maybe<Scalars['String']['output']>;
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  matomoReferenceToken?: Maybe<Scalars['String']['output']>;
  secretKey?: Maybe<Scalars['String']['output']>;
  tokenType?: Maybe<StratzApiType>;
  websiteAddress?: Maybe<Scalars['String']['output']>;
};

export type CaptainJackIdentityPrivateProfileType = {
  __typename?: 'CaptainJackIdentityPrivateProfileType';
  captainJackIdentityId?: Maybe<Scalars['Guid']['output']>;
  dailyEmail: Scalars['Boolean']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailHour?: Maybe<Scalars['Byte']['output']>;
  emailLevel?: Maybe<Scalars['Byte']['output']>;
  emailValidationCode?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  feedLevel?: Maybe<Scalars['Byte']['output']>;
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  isEmailValidated: Scalars['Boolean']['output'];
  languageId?: Maybe<Scalars['Byte']['output']>;
  lastDailyEmail?: Maybe<Scalars['Long']['output']>;
  lastLeagueDailyEmail?: Maybe<Scalars['Long']['output']>;
  lastMonthlyEmail?: Maybe<Scalars['Long']['output']>;
  lastProCircuitDailyEmail?: Maybe<Scalars['Long']['output']>;
  lastReadFeedTime?: Maybe<Scalars['Long']['output']>;
  lastSeen?: Maybe<Scalars['Long']['output']>;
  lastTeamDailyEmail?: Maybe<Scalars['Long']['output']>;
  lastWeeklyEmail?: Maybe<Scalars['Long']['output']>;
  monthlyEmail: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  premiumEndDate?: Maybe<Scalars['Long']['output']>;
  proCircuitEmailLevel?: Maybe<Scalars['Byte']['output']>;
  proCircuitFeedLevel?: Maybe<Scalars['Byte']['output']>;
  rosh?: Maybe<Array<Maybe<RoshCaptainJackIdentityStatDifficultyType>>>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  themeType?: Maybe<Scalars['Byte']['output']>;
  twitch?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  unsubscribeCode?: Maybe<Scalars['String']['output']>;
  weeklyEmail: Scalars['Boolean']['output'];
  youTube?: Maybe<Scalars['String']['output']>;
};


export type CaptainJackIdentityPrivateProfileTypeRoshArgs = {
  request?: InputMaybe<RoshMatchesRequestType>;
};

export type CaptainJackIdentityProfileUpdateRequestType = {
  /** Whether daily emails are enabled for the user. */
  dailyEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /** The user's email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The user's preferred email hour. */
  emailHour?: InputMaybe<Scalars['Byte']['input']>;
  /** The user's email level. */
  emailLevel?: InputMaybe<Scalars['Byte']['input']>;
  /** The user's feed level. */
  feedLevel?: InputMaybe<Scalars['Byte']['input']>;
  /** Whether the user's Stratz profile is public. */
  isStratzPublic?: InputMaybe<Scalars['Boolean']['input']>;
  /** The user's preferred language. */
  language?: InputMaybe<Language>;
  /** Whether monthly emails are enabled for the user. */
  monthlyEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /** The user's pro circuit email level. */
  proCircuitEmailLevel?: InputMaybe<Scalars['Byte']['input']>;
  /** The user's pro circuit feed level. */
  proCircuitFeedLevel?: InputMaybe<Scalars['Byte']['input']>;
  /** The user's theme type. */
  themeType?: InputMaybe<Scalars['Byte']['input']>;
  /** Whether weekly emails are enabled for the user. */
  weeklyEmail?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CaptainJackIdentityPublicProfileType = {
  __typename?: 'CaptainJackIdentityPublicProfileType';
  captainJackIdentityId?: Maybe<Scalars['Guid']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  twitch?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  youTube?: Maybe<Scalars['String']['output']>;
};

export type ClusterType = {
  __typename?: 'ClusterType';
  /** ClusterId which determines in which region a match was played. One region has multiple clusters. When selecting your region in the Dota 2 client, a random cluster is provided to you for each match for load balancing purposes. */
  id?: Maybe<Scalars['Int']['output']>;
  /** RegionId gives the exact geographical area where the match is played. */
  regionId?: Maybe<Scalars['Short']['output']>;
};

export type ConstantQuery = {
  __typename?: 'ConstantQuery';
  /** Find ability details. */
  abilities?: Maybe<Array<Maybe<AbilityType>>>;
  /** Find ability details by ability id. id is a required input field. */
  ability?: Maybe<AbilityType>;
  casters?: Maybe<Array<Maybe<SteamAccountType>>>;
  /** Provided directly from Dota 2 Region files, the cluster is the geographically breakdown of where the game is played. */
  clusters?: Maybe<Array<Maybe<ClusterType>>>;
  /** Find all abilities that are used in custom events. For example Aghnims Labyrinth. */
  customAbilities?: Maybe<Array<Maybe<AbilityCustomGameType>>>;
  /** Returns a list of game mode types which is directly supplied by Dota 2. Matches API call will have a input for this value. */
  gameModes?: Maybe<Array<Maybe<GameModeType>>>;
  /** Find game version details by game version id. id is a required input field. */
  gameVersion?: Maybe<GameVersionType>;
  /** Find game version details. */
  gameVersions?: Maybe<Array<Maybe<GameVersionType>>>;
  hero?: Maybe<HeroType>;
  heroes?: Maybe<Array<Maybe<HeroType>>>;
  /** Find item details by item id. id is a required input field. */
  item?: Maybe<ItemType>;
  /** Find item details by item id. id is a required input field. */
  items?: Maybe<Array<Maybe<ItemType>>>;
  /** Returns a list of lobby types which are mirrored from the Dota 2 client. */
  lobbyTypes?: Maybe<Array<Maybe<LobbyTypeType>>>;
  /** Find all modifiers that are used in the game. If you find a bug on a modifier, let us know as we have to control this ourselves. */
  modifiers?: Maybe<Array<Maybe<ModifierType>>>;
  /** Find npc details by npc id. id is a required input field. */
  npc?: Maybe<NpcType>;
  /** Find npc details. */
  npcs?: Maybe<Array<Maybe<NpcType>>>;
  /** Find all patch notes for each item and ability. These are found when you hover over each object in-game. */
  patchNotes?: Maybe<Array<Maybe<PatchNoteLanguageType>>>;
  popularTeamIds?: Maybe<Array<Maybe<TeamType>>>;
  /** Find all players who Valve qualifies as a Pro Player or Streamer. */
  proSteamAccounts?: Maybe<Array<Maybe<ProSteamAccountType>>>;
  /** Returns a list of region details and an Id for reference. */
  regions?: Maybe<Array<Maybe<RegionType>>>;
  /** List of all the roles types for heroes. */
  roles?: Maybe<Array<Maybe<RoleType>>>;
  tiWinners?: Maybe<Array<Maybe<SteamAccountType>>>;
};


export type ConstantQueryAbilitiesArgs = {
  gameVersionId?: InputMaybe<Scalars['Short']['input']>;
  language?: InputMaybe<Language>;
};


export type ConstantQueryAbilityArgs = {
  gameVersionId?: InputMaybe<Scalars['Short']['input']>;
  id: Scalars['Int']['input'];
  language?: InputMaybe<Language>;
};


export type ConstantQueryCustomAbilitiesArgs = {
  languageId?: InputMaybe<Language>;
};


export type ConstantQueryGameVersionArgs = {
  id: Scalars['Short']['input'];
};


export type ConstantQueryHeroArgs = {
  gameVersionId?: InputMaybe<Scalars['Short']['input']>;
  id: Scalars['Short']['input'];
  language?: InputMaybe<Language>;
};


export type ConstantQueryHeroesArgs = {
  gameVersionId?: InputMaybe<Scalars['Short']['input']>;
  language?: InputMaybe<Language>;
};


export type ConstantQueryItemArgs = {
  gameVersionId?: InputMaybe<Scalars['Short']['input']>;
  id: Scalars['Int']['input'];
  language?: InputMaybe<Language>;
};


export type ConstantQueryItemsArgs = {
  gameVersionId?: InputMaybe<Scalars['Short']['input']>;
  language?: InputMaybe<Language>;
};


export type ConstantQueryModifiersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type ConstantQueryNpcArgs = {
  gameVersionId?: InputMaybe<Scalars['Short']['input']>;
  id: Scalars['Short']['input'];
};


export type ConstantQueryNpcsArgs = {
  gameVersionId?: InputMaybe<Scalars['Short']['input']>;
};


export type ConstantQueryPatchNotesArgs = {
  gameVersionId?: InputMaybe<Scalars['Short']['input']>;
  languageId?: InputMaybe<Language>;
};

export enum Damage {
  Magical = 'MAGICAL',
  Physical = 'PHYSICAL',
  Pure = 'PURE',
  Unknown = 'UNKNOWN'
}

export type DeathDetailType = {
  __typename?: 'DeathDetailType';
  assist?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  attacker?: Maybe<Scalars['Short']['output']>;
  byAbility?: Maybe<Scalars['Short']['output']>;
  byItem?: Maybe<Scalars['Short']['output']>;
  goldFed?: Maybe<Scalars['Int']['output']>;
  goldLost?: Maybe<Scalars['Int']['output']>;
  hasHealAvailable?: Maybe<Scalars['Boolean']['output']>;
  isAttemptTpOut?: Maybe<Scalars['Boolean']['output']>;
  isBurst?: Maybe<Scalars['Boolean']['output']>;
  isDieBack?: Maybe<Scalars['Boolean']['output']>;
  isEngagedOnDeath?: Maybe<Scalars['Boolean']['output']>;
  isFeed?: Maybe<Scalars['Boolean']['output']>;
  isFromIllusion?: Maybe<Scalars['Boolean']['output']>;
  isTracked?: Maybe<Scalars['Boolean']['output']>;
  isWardWalkThrough?: Maybe<Scalars['Boolean']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  reliableGold?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
  timeDead?: Maybe<Scalars['Int']['output']>;
  unreliableGold?: Maybe<Scalars['Int']['output']>;
  xpFed?: Maybe<Scalars['Int']['output']>;
};

export type DeleteProSteamAccountRequestType = {
  name?: InputMaybe<Scalars['String']['input']>;
  realName?: InputMaybe<Scalars['String']['input']>;
  steamAccountId?: InputMaybe<Scalars['Long']['input']>;
};

export type DireTideCustomGameHeroWinDayType = {
  __typename?: 'DireTideCustomGameHeroWinDayType';
  candyScored: Scalars['Int']['output'];
  day: Scalars['Long']['output'];
  heroId: Scalars['Short']['output'];
  matchCount: Scalars['Int']['output'];
  winCount: Scalars['Int']['output'];
};

export type DireTideCustomGameMatchType = {
  __typename?: 'DireTideCustomGameMatchType';
  candyLost?: Maybe<Scalars['Short']['output']>;
  candyPickedUp?: Maybe<Scalars['Short']['output']>;
  candyScored?: Maybe<Scalars['Short']['output']>;
  clusterId?: Maybe<Scalars['Short']['output']>;
  didRadiantWin?: Maybe<Scalars['Boolean']['output']>;
  direCandyScored?: Maybe<Scalars['Short']['output']>;
  durationSeconds?: Maybe<Scalars['Short']['output']>;
  endDateTime?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  players?: Maybe<Array<Maybe<DireTideCustomGamePlayerType>>>;
  radiantCandyScored?: Maybe<Scalars['Short']['output']>;
  replaySalt?: Maybe<Scalars['Long']['output']>;
  startDateTime?: Maybe<Scalars['Long']['output']>;
};


export type DireTideCustomGameMatchTypePlayersArgs = {
  steamAccountId?: InputMaybe<Scalars['Long']['input']>;
};

export type DireTideCustomGamePlayerType = {
  __typename?: 'DireTideCustomGamePlayerType';
  assists?: Maybe<Scalars['Byte']['output']>;
  backpack0Id?: Maybe<Scalars['Short']['output']>;
  backpack1Id?: Maybe<Scalars['Short']['output']>;
  backpack2Id?: Maybe<Scalars['Short']['output']>;
  candyLost?: Maybe<Scalars['Short']['output']>;
  candyPickedUp?: Maybe<Scalars['Short']['output']>;
  candyScored?: Maybe<Scalars['Short']['output']>;
  deaths?: Maybe<Scalars['Byte']['output']>;
  goldPerMinute?: Maybe<Scalars['Short']['output']>;
  goldSpent?: Maybe<Scalars['Int']['output']>;
  hero?: Maybe<HeroType>;
  heroDamage?: Maybe<Scalars['Int']['output']>;
  heroHealing?: Maybe<Scalars['Int']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  isVictory: Scalars['Boolean']['output'];
  item0Id?: Maybe<Scalars['Short']['output']>;
  item1Id?: Maybe<Scalars['Short']['output']>;
  item2Id?: Maybe<Scalars['Short']['output']>;
  item3Id?: Maybe<Scalars['Short']['output']>;
  item4Id?: Maybe<Scalars['Short']['output']>;
  item5Id?: Maybe<Scalars['Short']['output']>;
  kills?: Maybe<Scalars['Byte']['output']>;
  leaverStatus?: Maybe<Scalars['Byte']['output']>;
  level?: Maybe<Scalars['Byte']['output']>;
  matchId?: Maybe<Scalars['Long']['output']>;
  networth?: Maybe<Scalars['Int']['output']>;
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  neutral0Id?: Maybe<Scalars['Short']['output']>;
  numLastHits?: Maybe<Scalars['Short']['output']>;
  partyId?: Maybe<Scalars['Byte']['output']>;
  playerSlot?: Maybe<Scalars['Byte']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
};

export type DotaMutation = {
  __typename?: 'DotaMutation';
  admin?: Maybe<AdminMutation>;
  retryMatchDownload?: Maybe<Scalars['Boolean']['output']>;
  rosh?: Maybe<RoshMutation>;
  user?: Maybe<DotaUserMutation>;
  yogurt?: Maybe<YogurtMutation>;
};


export type DotaMutationRetryMatchDownloadArgs = {
  matchId: Scalars['Long']['input'];
};

export type DotaNextQuery = {
  __typename?: 'DotaNextQuery';
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  ally?: Maybe<Array<Maybe<DotaNextWithAllyType>>>;
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  enemy?: Maybe<Array<Maybe<DotaNextWithAllyType>>>;
  /** Used by Overwolf application DotaNext (previously called DotaPlus) to provide data to its users. */
  playerHero?: Maybe<Array<Maybe<Array<Maybe<MatchPlayerItemPurchaseEventType>>>>>;
};


export type DotaNextQueryAllyArgs = {
  matchSteamAccountId: Scalars['Long']['input'];
  steamAccountIds: Array<InputMaybe<Scalars['Long']['input']>>;
};


export type DotaNextQueryEnemyArgs = {
  matchSteamAccountId: Scalars['Long']['input'];
  steamAccountIds: Array<InputMaybe<Scalars['Long']['input']>>;
};


export type DotaNextQueryPlayerHeroArgs = {
  gameModeIds: Scalars['Byte']['input'];
  heroId?: InputMaybe<Scalars['Short']['input']>;
  limitByItemIds: Scalars['Int']['input'];
  lobbyTypeIds: Scalars['Byte']['input'];
  startDateTime: Scalars['Long']['input'];
  steamAccountIds: Scalars['Long']['input'];
};

export type DotaNextWithAllyType = {
  __typename?: 'DotaNextWithAllyType';
  lifetimeMatchCount?: Maybe<Scalars['Int']['output']>;
  lifetimeWinMatchCount?: Maybe<Scalars['Int']['output']>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
};

export type DotaPlusWeekType = {
  __typename?: 'DotaPlusWeekType';
  active?: Maybe<Scalars['Int']['output']>;
  expired?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
};

export type DotaQuery = {
  __typename?: 'DotaQuery';
  /** Queries used to query constants in Dota. */
  constants?: Maybe<ConstantQuery>;
  /** For getting access to one specific Guild which was used at the start of TI10 Compendium. */
  guild?: Maybe<GuildType>;
  /** Queries used to gain insights into hero data and statistics. */
  heroStats?: Maybe<HeroStatsQuery>;
  /** Queries used to get leaderboard information. */
  leaderboard?: Maybe<LeaderboardQuery>;
  /** Find league details by league Id. Id is a required field. */
  league?: Maybe<LeagueType>;
  /** Find league details by searching for leagues using a LeagueRequest. */
  leagues?: Maybe<Array<Maybe<LeagueType>>>;
  /** Queries used to find live match data. */
  live?: Maybe<LiveQuery>;
  /** Find match details by the match id. id is a required input field. */
  match?: Maybe<MatchType>;
  /** Find match details for each match id. ids is a required input field. */
  matches?: Maybe<Array<Maybe<MatchType>>>;
  /** Find player details by steam account id. id is a required input field. */
  player?: Maybe<PlayerType>;
  /** Find player details for each steam account id. ids is a required input field. */
  players?: Maybe<Array<Maybe<PlayerType>>>;
  /** Queries used to populate Stratz Plus. */
  plus?: Maybe<PlusQuery>;
  /** Stratz specific queries. */
  stratz?: Maybe<StratzQuery>;
  /** Find player details for each steam account id. ids is a required input field. */
  team?: Maybe<TeamType>;
  /** Results in a list of team objects that contain data about them and their players. */
  teams?: Maybe<Array<Maybe<TeamType>>>;
  /** Queries used by 3rd party applications. */
  vendor?: Maybe<VendorQuery>;
  /** Queries used for Stratz Yogurt - users won't be able to access these calls until they have access to the app. */
  yogurt?: Maybe<YogurtQuery>;
};


export type DotaQueryGuildArgs = {
  id: Scalars['Int']['input'];
};


export type DotaQueryLeagueArgs = {
  id: Scalars['Int']['input'];
};


export type DotaQueryLeaguesArgs = {
  request: LeagueRequestType;
};


export type DotaQueryMatchArgs = {
  id: Scalars['Long']['input'];
};


export type DotaQueryMatchesArgs = {
  ids: Array<InputMaybe<Scalars['Long']['input']>>;
};


export type DotaQueryPlayerArgs = {
  steamAccountId: Scalars['Long']['input'];
};


export type DotaQueryPlayersArgs = {
  steamAccountIds: Array<InputMaybe<Scalars['Long']['input']>>;
};


export type DotaQueryTeamArgs = {
  teamId: Scalars['Int']['input'];
};


export type DotaQueryTeamsArgs = {
  teamIds: Array<InputMaybe<Scalars['Int']['input']>>;
};

export type DotaSubscription = {
  __typename?: 'DotaSubscription';
  feedLive?: Maybe<LiveEventType>;
  matchCount?: Maybe<TotalMatchCountType>;
  matchLive?: Maybe<MatchLiveType>;
  matchLiveLeague?: Maybe<MatchLiveType>;
  playerCount?: Maybe<TotalPlayerCountType>;
};


export type DotaSubscriptionMatchLiveArgs = {
  matchId: Scalars['Long']['input'];
};


export type DotaSubscriptionMatchLiveLeagueArgs = {
  leagueId: Scalars['Int']['input'];
};

export type DotaUserMutation = {
  __typename?: 'DotaUserMutation';
  applyStratzApiKey?: Maybe<Scalars['Boolean']['output']>;
  /** If a user moves from annoymous to public, this will turn it on instantly for them. */
  checkPublicDotaAccount?: Maybe<Scalars['Boolean']['output']>;
  /** Update your user to (un)follow a specific LeagueId */
  followLeague?: Maybe<Scalars['Boolean']['output']>;
  /** Update your user to (un)follow a specific SteamAccountId */
  followPlayer?: Maybe<Scalars['Boolean']['output']>;
  /** Marks the user's LastReadFeedTime to the current time. */
  readAllFeed?: Maybe<Scalars['Boolean']['output']>;
  unfollowLeague?: Maybe<Scalars['Boolean']['output']>;
  /** Update your user to (un)follow a specific SteamAccountId */
  unfollowPlayer?: Maybe<Scalars['Boolean']['output']>;
  /** Update your user to unsubscribe from Stratz emails. */
  unsubscribeEmail?: Maybe<Scalars['Boolean']['output']>;
  /** Updates every user you are following.  This should be handled with care, as this overrides all your predefinded user specific settings with these settings. */
  updateAllFollowing?: Maybe<Scalars['Boolean']['output']>;
  /** Update your user to (un)follow a specific SteamAccountId */
  updateFollowing?: Maybe<Scalars['Boolean']['output']>;
  /** Gets more in-depth information about the person you are following.  This is a user specific request, and you can only edit yourself. */
  updateFollowingFavorite?: Maybe<Scalars['Boolean']['output']>;
  /** Updates the logged in user information profile. */
  updateProfile?: Maybe<Scalars['Boolean']['output']>;
  /** Validates a user email address if the password id is correct. */
  validateEmail?: Maybe<Scalars['Boolean']['output']>;
};


export type DotaUserMutationApplyStratzApiKeyArgs = {
  description: Scalars['String']['input'];
  discordAddress: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
  tokenType: StratzApiType;
  websiteAddress: Scalars['String']['input'];
};


export type DotaUserMutationFollowLeagueArgs = {
  leagueId: Scalars['Int']['input'];
};


export type DotaUserMutationFollowPlayerArgs = {
  steamAccountId: Scalars['Long']['input'];
};


export type DotaUserMutationUnfollowLeagueArgs = {
  leagueId: Scalars['Int']['input'];
};


export type DotaUserMutationUnfollowPlayerArgs = {
  steamAccountId: Scalars['Long']['input'];
};


export type DotaUserMutationUnsubscribeEmailArgs = {
  code: Scalars['Guid']['input'];
};


export type DotaUserMutationUpdateAllFollowingArgs = {
  request: UpdateFollowerRequestType;
};


export type DotaUserMutationUpdateFollowingArgs = {
  followedSteamAccountId: Scalars['Long']['input'];
  request: UpdateFollowerRequestType;
};


export type DotaUserMutationUpdateFollowingFavoriteArgs = {
  followedSteamAccountId: Scalars['Long']['input'];
  isFavorite: Scalars['Boolean']['input'];
};


export type DotaUserMutationUpdateProfileArgs = {
  request: CaptainJackIdentityProfileUpdateRequestType;
};


export type DotaUserMutationValidateEmailArgs = {
  code: Scalars['Guid']['input'];
};

export type ExperienceDetailType = {
  __typename?: 'ExperienceDetailType';
  amount: Scalars['Int']['output'];
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  reason?: Maybe<XpReason>;
  time: Scalars['Int']['output'];
};

export enum Feat {
  DotaAccountLevel = 'DOTA_ACCOUNT_LEVEL',
  HighImp = 'HIGH_IMP',
  Rampage = 'RAMPAGE',
  WinStreak = 'WIN_STREAK'
}

export type FeatType = {
  __typename?: 'FeatType';
  hero?: Maybe<HeroType>;
  heroId?: Maybe<Scalars['Int']['output']>;
  match?: Maybe<MatchType>;
  matchId?: Maybe<Scalars['Long']['output']>;
  type?: Maybe<Feat>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type FeedResponseType = {
  __typename?: 'FeedResponseType';
  attackAnimationPoint?: Maybe<Scalars['DateTime']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  data?: Maybe<Array<Maybe<FeedType>>>;
};

export type FeedType = {
  __typename?: 'FeedType';
  date?: Maybe<Scalars['Long']['output']>;
  didWin?: Maybe<Scalars['Boolean']['output']>;
  heroId: Scalars['Int']['output'];
  league?: Maybe<LeagueType>;
  matchId?: Maybe<Scalars['Long']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  targetSteamAccountId?: Maybe<Scalars['Long']['output']>;
  type?: Maybe<Scalars['Byte']['output']>;
  value: Scalars['Int']['output'];
};

export type FilterAghanimLabHeroCompositionRequestType = {
  /** The base level of difficulty */
  difficulty: AghanimLabMatchDifficultyEnum;
  /** If the return should be ordered by Ascending or Desending order. */
  orderDirection?: InputMaybe<FilterOrder>;
  /** The amount of data to skip before collecting your query. This is useful for Paging. */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit :  */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum FilterAghanimLabMatchOrderBy {
  Duration = 'DURATION',
  EndDateTime = 'END_DATE_TIME'
}

export type FilterAghanimLabMatchRequestType = {
  /** The game must of been played after this set time. In Unix Time Stamp Format. */
  createdAfterDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The game must of been played before this set time. In Unix Time Stamp Format. */
  createdBeforeDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** How far into the game (levels) they completed. */
  depth?: InputMaybe<Scalars['Byte']['input']>;
  /** Required that the team playing the game won. */
  didWin?: InputMaybe<Scalars['Boolean']['input']>;
  /** The base level of difficulty */
  difficulty?: InputMaybe<AghanimLabMatchDifficultyEnum>;
  /** Return Matches that only include the set of Match Ids provided. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** The team had to make it at least this far (level). */
  minDepth?: InputMaybe<Scalars['Byte']['input']>;
  /** The order in which the data returned will be sorted by. */
  orderBy?: InputMaybe<FilterAghanimLabMatchOrderBy>;
  /** If the return should be ordered by Ascending or Desending order. */
  orderDirection?: InputMaybe<FilterOrder>;
  /** The max must be played in this list of regions */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** To date there are two seasons of Aghanim Labyrinth. Season 1 is the Year 2020 and Season 2 is 2021. */
  seasonId?: InputMaybe<Scalars['Byte']['input']>;
  /** The amount of data to skip before collecting your query. This is useful for Paging. */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Return matches that only include this single player. */
  steamAccountId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit : 100 */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum FilterDireTide2020CustomGameMatchOrderBy {
  CandyScored = 'CANDY_SCORED',
  EndDateTime = 'END_DATE_TIME'
}

export type FilterDireTideCustomMatchRequestType = {
  /** The order in which the data returned will be sorted by. */
  orderBy?: InputMaybe<FilterDireTide2020CustomGameMatchOrderBy>;
  /** If the return should be ordered by Ascending or Desending order. */
  orderDirection?: InputMaybe<FilterOrder>;
  /** The amount of data to skip before collecting your query. This is useful for Paging. */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  steamAccountId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit : 20 */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterHeroRampageType = {
  /** Only return matches after this match id. Can be used instead of Skip. */
  after?: InputMaybe<Scalars['Long']['input']>;
  /** Only return matches before this match id. Can be used instead of Skip. */
  before?: InputMaybe<Scalars['Long']['input']>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  /** The hero id to include in this query, excluding all results that do not include this hero. */
  heroId: Scalars['Short']['input'];
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit :  */
  take: Scalars['Int']['input'];
};

export enum FilterHeroWinRequestGroupBy {
  All = 'ALL',
  HeroId = 'HERO_ID',
  HeroIdDurationMinutes = 'HERO_ID_DURATION_MINUTES',
  HeroIdPositionBracket = 'HERO_ID_POSITION_BRACKET',
  Time = 'TIME'
}

export enum FilterLeaderboardGuildOrderBy {
  BattlePassLevels = 'BATTLE_PASS_LEVELS',
  Id = 'ID',
  MemberCount = 'MEMBER_COUNT',
  Points = 'POINTS',
  PreviousWeekRank = 'PREVIOUS_WEEK_RANK',
  Rank = 'RANK'
}

export type FilterLeaderboardGuildRequestType = {
  /** The guild was created after this date time (in Unix TimeStamp). */
  createdAfterDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The guild was created before this date time (in Unix TimeStamp). */
  createdBeforeDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** If the guild is current set to 50 members. */
  isFull?: InputMaybe<Scalars['Boolean']['input']>;
  /** If anyone is able to join the guild. */
  isUnlocked?: InputMaybe<Scalars['Boolean']['input']>;
  /** The language required to join the guild. */
  language?: InputMaybe<Scalars['Byte']['input']>;
  /** The max amount of members a guild can have. */
  maxMemberCount?: InputMaybe<Scalars['Byte']['input']>;
  /** The rank required to join the guild. */
  maxRequiredRank?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of members a guild must have. */
  memberCount?: InputMaybe<Scalars['Byte']['input']>;
  /** The minimum amount of members a guild must have. */
  minMemberCount?: InputMaybe<Scalars['Byte']['input']>;
  /** The rank required to join the guild. */
  minRequiredRank?: InputMaybe<Scalars['Long']['input']>;
  /** If the return should be ordered by Ascending or Desending order. */
  order?: InputMaybe<FilterOrder>;
  /** What field to order the data by. Enum values. */
  orderBy?: InputMaybe<FilterLeaderboardGuildOrderBy>;
  /** What field to order the data by. Enum values. */
  region?: InputMaybe<Scalars['Byte']['input']>;
  /** The amount of data to skip before collecting your query. This is useful for Paging. */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit :  */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterLeaderboardHeroRequestType = {
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** The amount of data to skip before collecting your query. This is useful for Paging. */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit :  */
  take: Scalars['Int']['input'];
};

export enum FilterLeaderboardOrder {
  First = 'FIRST',
  Level = 'LEVEL',
  Recent = 'RECENT'
}

export enum FilterMatchGroupOrderByEnum {
  MatchCount = 'MATCH_COUNT',
  WinCount = 'WIN_COUNT'
}

export type FilterMatchReplayUploadRequestType = {
  byGameMode?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  byGameVersion?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  byHeroId?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  byLeagueId?: InputMaybe<Scalars['Int']['input']>;
  byLobbyType?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  byMatchId?: InputMaybe<Scalars['String']['input']>;
  byMatchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  byMatchUploadFileName?: InputMaybe<Scalars['String']['input']>;
  byMatchUploadUploaderCaptainJackId?: InputMaybe<Scalars['Guid']['input']>;
  bySeriesId?: InputMaybe<Scalars['String']['input']>;
  bySeriesIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  bySteamAccountId?: InputMaybe<Scalars['Long']['input']>;
  bySteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  byTeamId?: InputMaybe<Scalars['Int']['input']>;
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  filterPosition?: InputMaybe<MatchPlayerPositionType>;
  filterPositionIsUs?: InputMaybe<Scalars['Boolean']['input']>;
  filterPositionOrder?: InputMaybe<Array<InputMaybe<MatchPlayerTeamPickOrderType>>>;
  firstPick?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isComplete?: InputMaybe<Scalars['Boolean']['input']>;
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  isRadiant?: InputMaybe<Scalars['Boolean']['input']>;
  isRadiantFirstPick?: InputMaybe<Scalars['Boolean']['input']>;
  isValidated?: InputMaybe<Scalars['Boolean']['input']>;
  isVictory?: InputMaybe<Scalars['Boolean']['input']>;
  maxDuration?: InputMaybe<Scalars['String']['input']>;
  maxGameVersionId?: InputMaybe<Scalars['String']['input']>;
  minDuration?: InputMaybe<Scalars['String']['input']>;
  minGameVersionId?: InputMaybe<Scalars['String']['input']>;
  /** The amount of data to skip before collecting your query. This is useful for Paging. */
  skip?: InputMaybe<Scalars['Int']['input']>;
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit :  */
  take?: InputMaybe<Scalars['Int']['input']>;
  withEnemyBannedHeroId?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  withEnemyHeroId?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  withEnemySteamAccount?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  withFriendBannedHeroId?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  withFriendHeroId?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
};

export enum FilterOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum FilterOrderBy {
  Id = 'ID',
  LastMatchTime = 'LAST_MATCH_TIME',
  LastMatchTimeThenTier = 'LAST_MATCH_TIME_THEN_TIER',
  None = 'NONE',
  StartDateThenTier = 'START_DATE_THEN_TIER'
}

export enum FilterPlayerTeammateEnum {
  Against = 'AGAINST',
  With = 'WITH'
}

export type FilterSearchRequestType = {
  /** The minimum amount of time in which a user must have played a game to be allowed inside the search query. A unix timestamp. */
  lastMatchPlayedAgo?: InputMaybe<Scalars['Long']['input']>;
  /** The leaderboard is split into 4 regions. The user must appear in this region(s) for them to be allowed inside the search query. */
  leaderboardRegionIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** When searching for a league, the tier the league must be in. Tiers: Amateur = 1, Professional = 2, Premium = 3, Pro Circuit = 4, Main Event = 5 */
  leagueTierIds?: InputMaybe<Array<InputMaybe<LeagueTier>>>;
  /** The maximum rank a player must have to be allowed inside the search query. */
  maximumRank?: InputMaybe<Scalars['Int']['input']>;
  /** The minimum rank a player must have to be allowed inside the search query. */
  minimumRank?: InputMaybe<Scalars['Int']['input']>;
  /** The term used to define the search parameters. Minimum input is 2 characters. */
  query: Scalars['String']['input'];
  /** Searching our entire database can take time. If you already know what your searching for you, you can limit the query down to a set of specific types. (0 - Playuers, 1 - Matches, 2 - Leagues, 3 - Teams, 4 - ProPlayers, 5 - Casters). Default is all types. */
  searchType?: InputMaybe<Array<InputMaybe<Search>>>;
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit :  */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** When searching for a team, only return results of those teams of which are considered Professionals. */
  teamIsPro?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterSeasonLeaderboardRequestType = {
  countryCode?: InputMaybe<Scalars['String']['input']>;
  heroId?: InputMaybe<Scalars['Short']['input']>;
  leaderBoardDivision?: InputMaybe<LeaderboardDivision>;
  position?: InputMaybe<MatchPlayerPositionType>;
  query?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['Int']['input']>;
};

export type FilterSeriesRequestType = {
  /** The amount of data to skip before collecting your query. This is useful for Paging. */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit : 20 */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum FindMatchPlayerGroupBy {
  Assists = 'ASSISTS',
  Award = 'AWARD',
  Cluster = 'CLUSTER',
  DateDay = 'DATE_DAY',
  DateDayHero = 'DATE_DAY_HERO',
  Deaths = 'DEATHS',
  DurationMinutes = 'DURATION_MINUTES',
  Faction = 'FACTION',
  GameMode = 'GAME_MODE',
  GameVersion = 'GAME_VERSION',
  GoldPerMinute = 'GOLD_PER_MINUTE',
  Hero = 'HERO',
  HeroPerformance = 'HERO_PERFORMANCE',
  Hour = 'HOUR',
  IsIntentionalFeeding = 'IS_INTENTIONAL_FEEDING',
  IsLeague = 'IS_LEAGUE',
  IsLeaver = 'IS_LEAVER',
  IsParty = 'IS_PARTY',
  IsRandom = 'IS_RANDOM',
  IsSeries = 'IS_SERIES',
  IsStats = 'IS_STATS',
  IsVictory = 'IS_VICTORY',
  Kills = 'KILLS',
  Lane = 'LANE',
  LeagueId = 'LEAGUE_ID',
  Level = 'LEVEL',
  LobbyType = 'LOBBY_TYPE',
  Position = 'POSITION',
  Region = 'REGION',
  RoamLane = 'ROAM_LANE',
  Role = 'ROLE',
  SteamAccountId = 'STEAM_ACCOUNT_ID',
  SteamAccountIdAgainstTeam = 'STEAM_ACCOUNT_ID_AGAINST_TEAM',
  SteamAccountIdHeroId = 'STEAM_ACCOUNT_ID_HERO_ID',
  SteamAccountIdHeroIdAgainstTeam = 'STEAM_ACCOUNT_ID_HERO_ID_AGAINST_TEAM',
  SteamAccountIdHeroIdWithTeam = 'STEAM_ACCOUNT_ID_HERO_ID_WITH_TEAM',
  SteamAccountIdWithTeam = 'STEAM_ACCOUNT_ID_WITH_TEAM',
  Team = 'TEAM',
  TotalKills = 'TOTAL_KILLS'
}

export enum FindMatchPlayerList {
  Against = 'AGAINST',
  All = 'ALL',
  Single = 'SINGLE',
  With = 'WITH'
}

export enum FindMatchPlayerOrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type FollowerType = {
  __typename?: 'FollowerType';
  captainJackIdentityId?: Maybe<Scalars['Guid']['output']>;
  captainJackIdentityProfile?: Maybe<CaptainJackIdentityPublicProfileType>;
  dailyEmail?: Maybe<Scalars['Boolean']['output']>;
  didManualUpdate: Scalars['Boolean']['output'];
  emailLevel?: Maybe<Scalars['Byte']['output']>;
  feedLevel?: Maybe<Scalars['Byte']['output']>;
  isFavorite?: Maybe<Scalars['Boolean']['output']>;
  lastEmail?: Maybe<Scalars['Long']['output']>;
  monthlyEmail?: Maybe<Scalars['Boolean']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  weeklyEmail?: Maybe<Scalars['Boolean']['output']>;
};

export enum GameModeEnumType {
  AbilityDraft = 'ABILITY_DRAFT',
  AllPick = 'ALL_PICK',
  AllPickRanked = 'ALL_PICK_RANKED',
  AllRandom = 'ALL_RANDOM',
  AllRandomDeathMatch = 'ALL_RANDOM_DEATH_MATCH',
  BalancedDraft = 'BALANCED_DRAFT',
  CaptainsDraft = 'CAPTAINS_DRAFT',
  CaptainsMode = 'CAPTAINS_MODE',
  CompendiumMatchmaking = 'COMPENDIUM_MATCHMAKING',
  Custom = 'CUSTOM',
  Event = 'EVENT',
  Intro = 'INTRO',
  LeastPlayed = 'LEAST_PLAYED',
  MidOnly = 'MID_ONLY',
  Mutation = 'MUTATION',
  NewPlayerPool = 'NEW_PLAYER_POOL',
  None = 'NONE',
  RandomDraft = 'RANDOM_DRAFT',
  ReverseCaptainsMode = 'REVERSE_CAPTAINS_MODE',
  SingleDraft = 'SINGLE_DRAFT',
  SoloMid = 'SOLO_MID',
  TheDiretide = 'THE_DIRETIDE',
  TheGreeviling = 'THE_GREEVILING',
  Turbo = 'TURBO',
  Tutorial = 'TUTORIAL',
  Unknown = 'UNKNOWN'
}

export type GameModeType = {
  __typename?: 'GameModeType';
  id?: Maybe<Scalars['Short']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GameVersionType = {
  __typename?: 'GameVersionType';
  asOfDateTime?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Short']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GoldDetailType = {
  __typename?: 'GoldDetailType';
  amount: Scalars['Int']['output'];
  isValidForStats?: Maybe<Scalars['Boolean']['output']>;
  npcId?: Maybe<Scalars['Int']['output']>;
  reason?: Maybe<GoldReason>;
  time: Scalars['Int']['output'];
};

export enum GoldReason {
  Abadons = 'ABADONS',
  Bounty = 'BOUNTY',
  BuyBack = 'BUY_BACK',
  Couriers = 'COURIERS',
  Couriers_2 = 'COURIERS_2',
  Creeps = 'CREEPS',
  Death = 'DEATH',
  DoomDevourer = 'DOOM_DEVOURER',
  Heroes = 'HEROES',
  Neutral = 'NEUTRAL',
  Other = 'OTHER',
  Roshan = 'ROSHAN',
  Sells = 'SELLS',
  Structures = 'STRUCTURES',
  WardDestruction = 'WARD_DESTRUCTION'
}

export type GuildMemberType = {
  __typename?: 'GuildMemberType';
  guild?: Maybe<GuildType>;
  guildId?: Maybe<Scalars['Int']['output']>;
  imp?: Maybe<Scalars['Int']['output']>;
  joinDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type GuildType = {
  __typename?: 'GuildType';
  createdDateTime?: Maybe<Scalars['Long']['output']>;
  currentPercentile?: Maybe<Scalars['Byte']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flags?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  language?: Maybe<Scalars['Byte']['output']>;
  lastUpdateDateTime?: Maybe<Scalars['Long']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Array<Maybe<MatchType>>>;
  memberCount?: Maybe<Scalars['Byte']['output']>;
  members?: Maybe<Array<Maybe<GuildMemberType>>>;
  motd?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pastWeeklyPercentile?: Maybe<Scalars['Byte']['output']>;
  pastWeeklyRank?: Maybe<Scalars['Int']['output']>;
  pattern?: Maybe<Scalars['Byte']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  primaryColor?: Maybe<Scalars['Byte']['output']>;
  rank?: Maybe<Scalars['Byte']['output']>;
  region?: Maybe<Scalars['Byte']['output']>;
  requiredRank?: Maybe<Scalars['Byte']['output']>;
  secondaryColor?: Maybe<Scalars['Byte']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  totalBattlePassLevels?: Maybe<Scalars['Int']['output']>;
};


export type GuildTypeMatchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type HealDetailType = {
  __typename?: 'HealDetailType';
  attacker?: Maybe<Scalars['Short']['output']>;
  byAbility?: Maybe<Scalars['Short']['output']>;
  byItem?: Maybe<Scalars['Short']['output']>;
  target?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
  value?: Maybe<Scalars['Int']['output']>;
};

export type HeroAbilityMaxType = {
  __typename?: 'HeroAbilityMaxType';
  abilityId?: Maybe<Scalars['Int']['output']>;
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  heroId: Scalars['Int']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  matchCount?: Maybe<Scalars['Long']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  week: Scalars['Int']['output'];
  winCount?: Maybe<Scalars['Long']['output']>;
};

export type HeroAbilityMinType = {
  __typename?: 'HeroAbilityMinType';
  abilityId?: Maybe<Scalars['Int']['output']>;
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  heroId: Scalars['Int']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  matchCount?: Maybe<Scalars['Long']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  week: Scalars['Int']['output'];
  winCount?: Maybe<Scalars['Long']['output']>;
};

export type HeroAbilityTalentType = {
  __typename?: 'HeroAbilityTalentType';
  abilityId: Scalars['Int']['output'];
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  heroId: Scalars['Int']['output'];
  matchCount: Scalars['Long']['output'];
  position?: Maybe<MatchPlayerPositionType>;
  time?: Maybe<Scalars['Long']['output']>;
  timeAverage?: Maybe<Scalars['Decimal']['output']>;
  week: Scalars['Int']['output'];
  winCount: Scalars['Long']['output'];
  winsAverage?: Maybe<Scalars['Decimal']['output']>;
};

export type HeroAbilityType = {
  __typename?: 'HeroAbilityType';
  ability?: Maybe<AbilityType>;
  abilityId: Scalars['Short']['output'];
  gameVersionId: Scalars['Short']['output'];
  slot: Scalars['Byte']['output'];
};


export type HeroAbilityTypeAbilityArgs = {
  language?: InputMaybe<Language>;
};

export type HeroBanType = {
  __typename?: 'HeroBanType';
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  day?: Maybe<Scalars['Int']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  matchCount?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Long']['output']>;
};

export type HeroDamageDetailType = {
  __typename?: 'HeroDamageDetailType';
  attacker?: Maybe<Scalars['Short']['output']>;
  byAbility?: Maybe<Scalars['Short']['output']>;
  byItem?: Maybe<Scalars['Short']['output']>;
  damageType?: Maybe<Damage>;
  fromIllusion?: Maybe<Scalars['Boolean']['output']>;
  fromNpc?: Maybe<Scalars['Short']['output']>;
  isPhysicalAttack?: Maybe<Scalars['Boolean']['output']>;
  isSourceMainHero?: Maybe<Scalars['Boolean']['output']>;
  isTargetMainHero?: Maybe<Scalars['Boolean']['output']>;
  target?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
  toIllusion?: Maybe<Scalars['Boolean']['output']>;
  toNpc?: Maybe<Scalars['Short']['output']>;
  value: Scalars['Int']['output'];
};

export type HeroDotaPlusLeaderboardRankTopType = {
  __typename?: 'HeroDotaPlusLeaderboardRankTopType';
  createdDateTime?: Maybe<Scalars['Long']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  level?: Maybe<Scalars['Byte']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
};

export type HeroDotaPlusLeaderboardRankType = {
  __typename?: 'HeroDotaPlusLeaderboardRankType';
  createdDateTime?: Maybe<Scalars['Long']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  level?: Maybe<Scalars['Byte']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  totalActions?: Maybe<Scalars['Long']['output']>;
};

export type HeroDryadType = {
  __typename?: 'HeroDryadType';
  heroId?: Maybe<Scalars['Short']['output']>;
  matchCountVs?: Maybe<Scalars['Long']['output']>;
  matchCountWith?: Maybe<Scalars['Long']['output']>;
  vs?: Maybe<Array<Maybe<HeroStatsHeroDryadType>>>;
  with?: Maybe<Array<Maybe<HeroStatsHeroDryadType>>>;
};

export type HeroGuideListType = {
  __typename?: 'HeroGuideListType';
  /** Guides are auto-generated of games that are successful in a game. */
  guides?: Maybe<Array<Maybe<HeroGuideType>>>;
  heroId?: Maybe<Scalars['Short']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
};


export type HeroGuideListTypeGuidesArgs = {
  itemId?: InputMaybe<Scalars['Short']['input']>;
  neutralItemId?: InputMaybe<Scalars['Short']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type HeroGuideType = {
  __typename?: 'HeroGuideType';
  createdDateTime?: Maybe<Scalars['Long']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  itemIds?: Maybe<Array<Maybe<Scalars['Short']['output']>>>;
  match?: Maybe<MatchType>;
  matchId?: Maybe<Scalars['Long']['output']>;
  matchPlayer?: Maybe<MatchPlayerType>;
  neutralItemIds?: Maybe<Array<Maybe<Scalars['Short']['output']>>>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
};

export type HeroItemBootPurchaseType = {
  __typename?: 'HeroItemBootPurchaseType';
  activationTime?: Maybe<Scalars['Long']['output']>;
  activations?: Maybe<Scalars['Long']['output']>;
  activationsAverage?: Maybe<Scalars['Decimal']['output']>;
  activationsTimeAverage?: Maybe<Scalars['Decimal']['output']>;
  assists?: Maybe<Scalars['Long']['output']>;
  assistsAverage?: Maybe<Scalars['Decimal']['output']>;
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  deaths?: Maybe<Scalars['Long']['output']>;
  deathsAverage?: Maybe<Scalars['Decimal']['output']>;
  goldEarned?: Maybe<Scalars['Long']['output']>;
  goldEarnedAverage?: Maybe<Scalars['Decimal']['output']>;
  heroId: Scalars['Int']['output'];
  instance: Scalars['Int']['output'];
  itemId: Scalars['Int']['output'];
  kills?: Maybe<Scalars['Long']['output']>;
  killsAverage?: Maybe<Scalars['Decimal']['output']>;
  matchCount?: Maybe<Scalars['Long']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  time?: Maybe<Scalars['Long']['output']>;
  timeAverage?: Maybe<Scalars['Decimal']['output']>;
  week: Scalars['Int']['output'];
  winAverage?: Maybe<Scalars['Decimal']['output']>;
  winCount?: Maybe<Scalars['Long']['output']>;
  xp?: Maybe<Scalars['Long']['output']>;
  xpAverage?: Maybe<Scalars['Decimal']['output']>;
};

export type HeroItemPurchaseType = {
  __typename?: 'HeroItemPurchaseType';
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  heroId: Scalars['Int']['output'];
  instance: Scalars['Int']['output'];
  itemId: Scalars['Int']['output'];
  matchCount?: Maybe<Scalars['Long']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  time?: Maybe<Scalars['Long']['output']>;
  week: Scalars['Int']['output'];
  winCount?: Maybe<Scalars['Long']['output']>;
  winsAverage?: Maybe<Scalars['Decimal']['output']>;
};

export type HeroItemStartingPurchaseType = {
  __typename?: 'HeroItemStartingPurchaseType';
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  heroId: Scalars['Int']['output'];
  instance: Scalars['Int']['output'];
  itemId: Scalars['Int']['output'];
  matchCount?: Maybe<Scalars['Long']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  wasGiven: Scalars['Boolean']['output'];
  week: Scalars['Int']['output'];
  winCount?: Maybe<Scalars['Long']['output']>;
  winsAverage?: Maybe<Scalars['Decimal']['output']>;
};

export type HeroLaneOutcomeType = {
  __typename?: 'HeroLaneOutcomeType';
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  csCount?: Maybe<Scalars['Long']['output']>;
  drawCount?: Maybe<Scalars['Long']['output']>;
  heroId1: Scalars['Int']['output'];
  heroId2: Scalars['Short']['output'];
  lossCount?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Long']['output']>;
  matchWinCount?: Maybe<Scalars['Long']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  stompLossCount?: Maybe<Scalars['Long']['output']>;
  stompWinCount?: Maybe<Scalars['Long']['output']>;
  week: Scalars['Int']['output'];
  winCount?: Maybe<Scalars['Long']['output']>;
};

export type HeroLanguageType = {
  __typename?: 'HeroLanguageType';
  displayName?: Maybe<Scalars['String']['output']>;
  hype?: Maybe<Scalars['String']['output']>;
  lore?: Maybe<Scalars['String']['output']>;
};

export type HeroMatchupType = {
  __typename?: 'HeroMatchupType';
  advantage?: Maybe<Array<Maybe<HeroDryadType>>>;
  disadvantage?: Maybe<Array<Maybe<HeroDryadType>>>;
};

export type HeroNeutralItemType = {
  __typename?: 'HeroNeutralItemType';
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  equippedMatchCount?: Maybe<Scalars['Long']['output']>;
  equippedMatchWinCount?: Maybe<Scalars['Long']['output']>;
  heroId: Scalars['Int']['output'];
  item?: Maybe<ItemType>;
  itemId?: Maybe<Scalars['Int']['output']>;
  matchCount?: Maybe<Scalars['Long']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  week: Scalars['Int']['output'];
  winCount?: Maybe<Scalars['Long']['output']>;
};

export type HeroPickBanRequestType = {
  /** Only return matches after this match id. Can be used instead of Skip. */
  after?: InputMaybe<Scalars['Long']['input']>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Only return matches before this match id. Can be used instead of Skip. */
  before?: InputMaybe<Scalars['Long']['input']>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars['Boolean']['input']>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars['Long']['input']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>;
};

export type HeroPositionTimeDetailType = {
  __typename?: 'HeroPositionTimeDetailType';
  abilityCasts?: Maybe<Scalars['Decimal']['output']>;
  ancients?: Maybe<Scalars['Decimal']['output']>;
  apm?: Maybe<Scalars['Decimal']['output']>;
  assists?: Maybe<Scalars['Decimal']['output']>;
  attackCount?: Maybe<Scalars['Decimal']['output']>;
  attackDamage?: Maybe<Scalars['Decimal']['output']>;
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  buybackCount?: Maybe<Scalars['Decimal']['output']>;
  campsStacked?: Maybe<Scalars['Decimal']['output']>;
  castDamage?: Maybe<Scalars['Decimal']['output']>;
  casts?: Maybe<Scalars['Decimal']['output']>;
  comeBackLost?: Maybe<Scalars['Decimal']['output']>;
  comeBackWon?: Maybe<Scalars['Decimal']['output']>;
  courierKills?: Maybe<Scalars['Decimal']['output']>;
  cs?: Maybe<Scalars['Decimal']['output']>;
  damage?: Maybe<Scalars['Decimal']['output']>;
  damageReceived?: Maybe<Scalars['Decimal']['output']>;
  deaths?: Maybe<Scalars['Decimal']['output']>;
  disableCount?: Maybe<Scalars['Decimal']['output']>;
  disableDuration?: Maybe<Scalars['Decimal']['output']>;
  dn?: Maybe<Scalars['Decimal']['output']>;
  godLike?: Maybe<Scalars['Decimal']['output']>;
  goldFed?: Maybe<Scalars['Decimal']['output']>;
  goldLost?: Maybe<Scalars['Decimal']['output']>;
  goldPerMinute?: Maybe<Scalars['Decimal']['output']>;
  healingAllies?: Maybe<Scalars['Decimal']['output']>;
  healingItemAllies?: Maybe<Scalars['Decimal']['output']>;
  healingItemSelf?: Maybe<Scalars['Decimal']['output']>;
  healingSelf?: Maybe<Scalars['Decimal']['output']>;
  heroDamage?: Maybe<Scalars['Decimal']['output']>;
  heroId: Scalars['Short']['output'];
  invisibleCount?: Maybe<Scalars['Decimal']['output']>;
  kDAAverage?: Maybe<Scalars['Decimal']['output']>;
  killContributionAverage?: Maybe<Scalars['Decimal']['output']>;
  kills?: Maybe<Scalars['Decimal']['output']>;
  level?: Maybe<Scalars['Decimal']['output']>;
  magicalDamage?: Maybe<Scalars['Decimal']['output']>;
  magicalDamageReceived?: Maybe<Scalars['Decimal']['output']>;
  magicalItemDamage?: Maybe<Scalars['Decimal']['output']>;
  matchCount?: Maybe<Scalars['Long']['output']>;
  mvp?: Maybe<Scalars['Decimal']['output']>;
  networth?: Maybe<Scalars['Decimal']['output']>;
  neutrals?: Maybe<Scalars['Decimal']['output']>;
  physicalDamage?: Maybe<Scalars['Decimal']['output']>;
  physicalDamageReceived?: Maybe<Scalars['Decimal']['output']>;
  physicalItemDamage?: Maybe<Scalars['Decimal']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  pureDamage?: Maybe<Scalars['Decimal']['output']>;
  pureDamageReceived?: Maybe<Scalars['Decimal']['output']>;
  purgeModifiers?: Maybe<Scalars['Decimal']['output']>;
  rampage?: Maybe<Scalars['Decimal']['output']>;
  remainingMatchCount?: Maybe<Scalars['Long']['output']>;
  runeBounty?: Maybe<Scalars['Decimal']['output']>;
  runePower?: Maybe<Scalars['Decimal']['output']>;
  slowCount?: Maybe<Scalars['Decimal']['output']>;
  slowDuration?: Maybe<Scalars['Decimal']['output']>;
  stompLost?: Maybe<Scalars['Decimal']['output']>;
  stompWon?: Maybe<Scalars['Decimal']['output']>;
  stunCount?: Maybe<Scalars['Decimal']['output']>;
  stunDuration?: Maybe<Scalars['Decimal']['output']>;
  supportGold?: Maybe<Scalars['Decimal']['output']>;
  teamKills?: Maybe<Scalars['Decimal']['output']>;
  time: Scalars['Int']['output'];
  topCore?: Maybe<Scalars['Decimal']['output']>;
  topSupport?: Maybe<Scalars['Decimal']['output']>;
  towerDamage?: Maybe<Scalars['Decimal']['output']>;
  tripleKill?: Maybe<Scalars['Decimal']['output']>;
  ultraKill?: Maybe<Scalars['Decimal']['output']>;
  weakenCount?: Maybe<Scalars['Decimal']['output']>;
  weakenDuration?: Maybe<Scalars['Decimal']['output']>;
  week: Scalars['Int']['output'];
  winCount?: Maybe<Scalars['Long']['output']>;
  xp?: Maybe<Scalars['Decimal']['output']>;
  xpFed?: Maybe<Scalars['Decimal']['output']>;
};

export enum HeroPrimaryAttributeType {
  Agi = 'AGI',
  All = 'ALL',
  Int = 'INT',
  Str = 'STR'
}

export type HeroRampageObjectType = {
  __typename?: 'HeroRampageObjectType';
  heroIds?: Maybe<Array<Maybe<Scalars['Short']['output']>>>;
  match?: Maybe<MatchType>;
  matchId?: Maybe<Scalars['Long']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  time: Scalars['Short']['output'];
};

export enum HeroRoleEnum {
  Carry = 'CARRY',
  Disabler = 'DISABLER',
  Durable = 'DURABLE',
  Escape = 'ESCAPE',
  Initiator = 'INITIATOR',
  Jungler = 'JUNGLER',
  Nuker = 'NUKER',
  Pusher = 'PUSHER',
  Support = 'SUPPORT'
}

export type HeroRoleType = {
  __typename?: 'HeroRoleType';
  level?: Maybe<Scalars['Short']['output']>;
  roleId?: Maybe<HeroRoleEnum>;
};

export type HeroStatType = {
  __typename?: 'HeroStatType';
  agilityBase?: Maybe<Scalars['Float']['output']>;
  agilityGain?: Maybe<Scalars['Float']['output']>;
  attackAcquisitionRange?: Maybe<Scalars['Float']['output']>;
  attackAnimationPoint?: Maybe<Scalars['Float']['output']>;
  attackRange?: Maybe<Scalars['Float']['output']>;
  attackRate?: Maybe<Scalars['Float']['output']>;
  attackType?: Maybe<Scalars['String']['output']>;
  cMEnabled?: Maybe<Scalars['Boolean']['output']>;
  complexity?: Maybe<Scalars['Byte']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  heroUnlockOrder?: Maybe<Scalars['Float']['output']>;
  hpBarOffset?: Maybe<Scalars['Float']['output']>;
  hpRegen?: Maybe<Scalars['Float']['output']>;
  intelligenceBase?: Maybe<Scalars['Float']['output']>;
  intelligenceGain?: Maybe<Scalars['Float']['output']>;
  moveSpeed?: Maybe<Scalars['Float']['output']>;
  moveTurnRate?: Maybe<Scalars['Float']['output']>;
  mpRegen?: Maybe<Scalars['Float']['output']>;
  newPlayerEnabled?: Maybe<Scalars['Boolean']['output']>;
  primaryAttribute?: Maybe<Scalars['String']['output']>;
  primaryAttributeEnum?: Maybe<HeroPrimaryAttributeType>;
  startingArmor?: Maybe<Scalars['Float']['output']>;
  startingDamageMax?: Maybe<Scalars['Float']['output']>;
  startingDamageMin?: Maybe<Scalars['Float']['output']>;
  startingMagicArmor?: Maybe<Scalars['Float']['output']>;
  strengthBase?: Maybe<Scalars['Float']['output']>;
  strengthGain?: Maybe<Scalars['Float']['output']>;
  team?: Maybe<Scalars['Boolean']['output']>;
  visionDaytimeRange?: Maybe<Scalars['Float']['output']>;
  visionNighttimeRange?: Maybe<Scalars['Float']['output']>;
};

export type HeroStatsHeroDryadType = {
  __typename?: 'HeroStatsHeroDryadType';
  assists?: Maybe<Scalars['Long']['output']>;
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  cs?: Maybe<Scalars['Long']['output']>;
  deaths?: Maybe<Scalars['Long']['output']>;
  dn?: Maybe<Scalars['Long']['output']>;
  duration?: Maybe<Scalars['Long']['output']>;
  firstBloodTime?: Maybe<Scalars['Long']['output']>;
  goldEarned?: Maybe<Scalars['Long']['output']>;
  heroDamage?: Maybe<Scalars['Long']['output']>;
  heroHealing?: Maybe<Scalars['Long']['output']>;
  heroId1?: Maybe<Scalars['Short']['output']>;
  heroId2?: Maybe<Scalars['Short']['output']>;
  kills?: Maybe<Scalars['Long']['output']>;
  level?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Long']['output']>;
  networth?: Maybe<Scalars['Long']['output']>;
  synergy?: Maybe<Scalars['Decimal']['output']>;
  towerDamage?: Maybe<Scalars['Long']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Long']['output']>;
  winRateHeroId1?: Maybe<Scalars['Decimal']['output']>;
  winRateHeroId2?: Maybe<Scalars['Decimal']['output']>;
  winsAverage?: Maybe<Scalars['Decimal']['output']>;
  xp?: Maybe<Scalars['Long']['output']>;
};

export type HeroStatsQuery = {
  __typename?: 'HeroStatsQuery';
  /** This helps determine at what level you first level a skill. (Level 1) */
  abilityMaxLevel?: Maybe<Array<Maybe<HeroAbilityMaxType>>>;
  /** This helps determine at what level do you max a skill. */
  abilityMinLevel?: Maybe<Array<Maybe<HeroAbilityMinType>>>;
  /** This data for each day where a Hero is actually banned. This does not include data in which a hero was nominated for a ban but didn't actual get banned. Only data where a player actually requests a ban and its banned is shown. */
  banDay?: Maybe<Array<Maybe<HeroBanType>>>;
  guide?: Maybe<Array<Maybe<HeroGuideListType>>>;
  /** This is used on the Hero page to show the comparison of skill with the selected hero with other heroes.  It includes our Synergy and our Advantage formulas to ensure that a hero with a high win rate isn't simply just on the top of all the fields. */
  heroVsHeroMatchup?: Maybe<HeroMatchupType>;
  /** The purchase Item Components for a Hero's Boots.  Tracks things like activations or uses throughout the game. */
  itemBootPurchase?: Maybe<Array<Maybe<HeroItemBootPurchaseType>>>;
  /** Returns the items purchased for the selected hero. Adjusting the time adjusts the purchase amount. Shows win rate by item timings. */
  itemFullPurchase?: Maybe<Array<Maybe<HeroItemPurchaseType>>>;
  /** The amount of times a Nutreal Item was found and won. */
  itemNeutral?: Maybe<Array<Maybe<HeroNeutralItemType>>>;
  /** This snapshots all items in the inventory of a hero at -00:30.   It tracks if an item was given or purchased. */
  itemStartingPurchase?: Maybe<Array<Maybe<HeroItemStartingPurchaseType>>>;
  /** Using out formula for determining the outcome of lane, the overall success of that hero in that role. */
  laneOutcome?: Maybe<Array<Maybe<HeroLaneOutcomeType>>>;
  /** Returns back a list of the hero matchups, showing how that hero's win rate is affected with or against other heroes. */
  matchUp?: Maybe<Array<Maybe<HeroDryadType>>>;
  rampages?: Maybe<Array<Maybe<HeroRampageObjectType>>>;
  /** Detailed output of data per minute for each hero. */
  stats?: Maybe<Array<Maybe<HeroPositionTimeDetailType>>>;
  /** This is used on the Hero page to show the comparison of all Hero Talents with the selected hero. */
  talent?: Maybe<Array<Maybe<HeroAbilityTalentType>>>;
  /** Returns the last 12 days by day showing the amount of matches and the amount of wins by hero id. */
  winDay?: Maybe<Array<Maybe<HeroWinDayType>>>;
  /** Returns the data by game version showing the amount of matches and the amount of wins by hero id. */
  winGameVersion?: Maybe<Array<Maybe<HeroWinGameVersionType>>>;
  /** Returns the last 12 hours by hour showing the amount of matches and the amount of wins by hero id. */
  winHour?: Maybe<Array<Maybe<HeroWinHourType>>>;
  /** Returns the data by month showing the amount of matches and the amount of wins by hero id. */
  winMonth?: Maybe<Array<Maybe<HeroWinMonthType>>>;
  /** Returns the last 12 weeks by week showing the amount of matches and the amount of wins by hero id. */
  winWeek?: Maybe<Array<Maybe<HeroWinWeekType>>>;
};


export type HeroStatsQueryAbilityMaxLevelArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  heroId: Scalars['Short']['input'];
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryAbilityMinLevelArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  heroId: Scalars['Short']['input'];
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryBanDayArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  day?: InputMaybe<Scalars['Int']['input']>;
  groupByDay?: InputMaybe<Scalars['Boolean']['input']>;
  groupByRank?: InputMaybe<Scalars['Boolean']['input']>;
  heroId: Scalars['Short']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroStatsQueryGuideArgs = {
  againstHeroId?: InputMaybe<Scalars['Short']['input']>;
  heroId?: InputMaybe<Scalars['Short']['input']>;
  isPro?: InputMaybe<Scalars['Boolean']['input']>;
  itemId?: InputMaybe<Scalars['Short']['input']>;
  neutralItemId?: InputMaybe<Scalars['Short']['input']>;
  positionId?: InputMaybe<MatchPlayerPositionType>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  withHeroId?: InputMaybe<Scalars['Short']['input']>;
};


export type HeroStatsQueryHeroVsHeroMatchupArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  heroId: Scalars['Short']['input'];
  matchLimit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryItemBootPurchaseArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  heroId: Scalars['Short']['input'];
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryItemFullPurchaseArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  heroId: Scalars['Short']['input'];
  matchLimit?: InputMaybe<Scalars['Int']['input']>;
  maxTime?: InputMaybe<Scalars['Int']['input']>;
  minTime?: InputMaybe<Scalars['Int']['input']>;
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryItemNeutralArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  heroId: Scalars['Short']['input'];
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryItemStartingPurchaseArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  heroId: Scalars['Short']['input'];
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryLaneOutcomeArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  heroId?: InputMaybe<Scalars['Short']['input']>;
  isWith: Scalars['Boolean']['input'];
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryMatchUpArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  heroId?: InputMaybe<Scalars['Short']['input']>;
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  matchLimit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['Byte']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryRampagesArgs = {
  request: FilterHeroRampageType;
};


export type HeroStatsQueryStatsArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  groupByBracket?: InputMaybe<Scalars['Boolean']['input']>;
  groupByPosition?: InputMaybe<Scalars['Boolean']['input']>;
  groupByTime?: InputMaybe<Scalars['Boolean']['input']>;
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  maxTime?: InputMaybe<Scalars['Int']['input']>;
  minTime?: InputMaybe<Scalars['Int']['input']>;
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryTalentArgs = {
  bracketBasicIds?: InputMaybe<Array<InputMaybe<RankBracketBasicEnum>>>;
  heroId: Scalars['Short']['input'];
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  week?: InputMaybe<Scalars['Long']['input']>;
};


export type HeroStatsQueryWinDayArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>;
  groupBy?: InputMaybe<FilterHeroWinRequestGroupBy>;
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroStatsQueryWinGameVersionArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>;
  groupBy?: InputMaybe<FilterHeroWinRequestGroupBy>;
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroStatsQueryWinHourArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>;
  groupBy?: InputMaybe<FilterHeroWinRequestGroupBy>;
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroStatsQueryWinMonthArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>;
  groupBy?: InputMaybe<FilterHeroWinRequestGroupBy>;
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroStatsQueryWinWeekArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>;
  groupBy?: InputMaybe<FilterHeroWinRequestGroupBy>;
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type HeroTalentType = {
  __typename?: 'HeroTalentType';
  abilityId?: Maybe<Scalars['Short']['output']>;
  slot?: Maybe<Scalars['Byte']['output']>;
};

export type HeroType = {
  __typename?: 'HeroType';
  abilities?: Maybe<Array<Maybe<HeroAbilityType>>>;
  aliases?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displayName?: Maybe<Scalars['String']['output']>;
  gameVersionId?: Maybe<Scalars['Short']['output']>;
  id?: Maybe<Scalars['Short']['output']>;
  language?: Maybe<HeroLanguageType>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<HeroRoleType>>>;
  shortName?: Maybe<Scalars['String']['output']>;
  stats?: Maybe<HeroStatType>;
  talents?: Maybe<Array<Maybe<HeroTalentType>>>;
};

export type HeroWinDayType = {
  __typename?: 'HeroWinDayType';
  day: Scalars['Long']['output'];
  heroId: Scalars['Short']['output'];
  matchCount: Scalars['Int']['output'];
  winCount: Scalars['Int']['output'];
};

export type HeroWinGameVersionType = {
  __typename?: 'HeroWinGameVersionType';
  durationMinute: Scalars['Byte']['output'];
  gameVersionId: Scalars['Short']['output'];
  heroId: Scalars['Short']['output'];
  matchCount: Scalars['Int']['output'];
  winCount: Scalars['Int']['output'];
};

export type HeroWinHourType = {
  __typename?: 'HeroWinHourType';
  heroId: Scalars['Short']['output'];
  hour: Scalars['Long']['output'];
  matchCount: Scalars['Int']['output'];
  winCount: Scalars['Int']['output'];
};

export type HeroWinMonthType = {
  __typename?: 'HeroWinMonthType';
  durationMinute: Scalars['Byte']['output'];
  heroId: Scalars['Short']['output'];
  matchCount: Scalars['Int']['output'];
  month: Scalars['Long']['output'];
  winCount: Scalars['Int']['output'];
};

export type HeroWinWeekType = {
  __typename?: 'HeroWinWeekType';
  durationMinute: Scalars['Byte']['output'];
  heroId: Scalars['Short']['output'];
  matchCount: Scalars['Int']['output'];
  week: Scalars['Long']['output'];
  winCount: Scalars['Int']['output'];
};

export type HomepageHeroDryadType = {
  __typename?: 'HomepageHeroDryadType';
  bracketBasicIds?: Maybe<RankBracketBasicEnum>;
  comparisonHeroBaseWinRate?: Maybe<Scalars['Decimal']['output']>;
  comparisonHeroId?: Maybe<Scalars['Short']['output']>;
  mainHeroId?: Maybe<Scalars['Short']['output']>;
  matchCount?: Maybe<Scalars['Long']['output']>;
  synergy?: Maybe<Scalars['Decimal']['output']>;
  winCount?: Maybe<Scalars['Long']['output']>;
  winsAverage?: Maybe<Scalars['Decimal']['output']>;
};

export type HomepageHeroSynergyType = {
  __typename?: 'HomepageHeroSynergyType';
  heroDryads?: Maybe<Array<Maybe<HomepageHeroDryadType>>>;
  mainHeroBaseWinRate?: Maybe<Scalars['Decimal']['output']>;
  mainHeroId?: Maybe<Scalars['Short']['output']>;
};

export type ImpGeneratorMatchPlayerType = {
  __typename?: 'ImpGeneratorMatchPlayerType';
  events?: Maybe<Array<Maybe<Array<Maybe<ImpGeneratorPlayerEventType>>>>>;
  impValues?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']['output']>>>>>;
  winChance?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  winRateByPlayerMinuteValues?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>;
};

export type ImpGeneratorPlayerEventRequestType = {
  assists: Scalars['UShort']['input'];
  cs: Scalars['UShort']['input'];
  damageReceived: Scalars['Int']['input'];
  deaths: Scalars['UShort']['input'];
  dn: Scalars['UShort']['input'];
  healingAllies: Scalars['Int']['input'];
  kills: Scalars['UShort']['input'];
  level: Scalars['Byte']['input'];
  magicalDamage: Scalars['Int']['input'];
  neutrals: Scalars['Int']['input'];
  physicalDamage: Scalars['Int']['input'];
  pureDamage: Scalars['Int']['input'];
  runePower: Scalars['Int']['input'];
  time: Scalars['Byte']['input'];
};

export type ImpGeneratorPlayerEventType = {
  __typename?: 'ImpGeneratorPlayerEventType';
  assists?: Maybe<Scalars['UShort']['output']>;
  cs?: Maybe<Scalars['UShort']['output']>;
  damageReceived?: Maybe<Scalars['Int']['output']>;
  deaths?: Maybe<Scalars['UShort']['output']>;
  dn?: Maybe<Scalars['UShort']['output']>;
  healingAllies?: Maybe<Scalars['Int']['output']>;
  kills?: Maybe<Scalars['UShort']['output']>;
  level?: Maybe<Scalars['Byte']['output']>;
  magicalDamage?: Maybe<Scalars['Int']['output']>;
  neutrals?: Maybe<Scalars['Int']['output']>;
  physicalDamage?: Maybe<Scalars['Int']['output']>;
  pureDamage?: Maybe<Scalars['Int']['output']>;
  runePower?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Scalars['Byte']['output']>;
};

export type ImpGeneratorPlayerRequestType = {
  bracket: RankBracket;
  events: Array<InputMaybe<ImpGeneratorPlayerEventRequestType>>;
  heroId: Scalars['Short']['input'];
  position: MatchPlayerPositionType;
};

export type ImpGeneratorPlayerType = {
  __typename?: 'ImpGeneratorPlayerType';
  events?: Maybe<Array<Maybe<ImpGeneratorPlayerEventType>>>;
  impValues?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']['output']>>>>>;
  winChance?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  winRateByPlayerMinuteValues?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>;
};

export type ImpGeneratorRequestType = {
  bans: Array<InputMaybe<Scalars['Short']['input']>>;
  isTurbo: Scalars['Boolean']['input'];
  players: Array<InputMaybe<ImpGeneratorPlayerRequestType>>;
};

export type ImpQuery = {
  __typename?: 'ImpQuery';
  /** Returns details about all players in a specific match and details regarding Imp */
  matchGenerator?: Maybe<ImpGeneratorMatchPlayerType>;
  /** Returns details about a specific player in a game with certains events. */
  playerGenerator?: Maybe<ImpGeneratorPlayerType>;
};


export type ImpQueryMatchGeneratorArgs = {
  matchId: Scalars['Long']['input'];
};


export type ImpQueryPlayerGeneratorArgs = {
  request: ImpGeneratorRequestType;
};

export type ImportPickBanType = {
  heroId?: InputMaybe<Scalars['Short']['input']>;
  isPick?: InputMaybe<Scalars['Boolean']['input']>;
  isRadiant?: InputMaybe<Scalars['Boolean']['input']>;
  order?: InputMaybe<Scalars['Byte']['input']>;
  playerSlot?: InputMaybe<Scalars['Byte']['input']>;
  time?: InputMaybe<Scalars['Byte']['input']>;
  wasBannedSuccessfully?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InventoryObjectType = {
  __typename?: 'InventoryObjectType';
  charges?: Maybe<Scalars['Int']['output']>;
  itemId?: Maybe<Scalars['Short']['output']>;
  secondaryCharges?: Maybe<Scalars['Int']['output']>;
};

export type InventoryType = {
  __typename?: 'InventoryType';
  backPack0?: Maybe<InventoryObjectType>;
  backPack1?: Maybe<InventoryObjectType>;
  backPack2?: Maybe<InventoryObjectType>;
  item0?: Maybe<InventoryObjectType>;
  item1?: Maybe<InventoryObjectType>;
  item2?: Maybe<InventoryObjectType>;
  item3?: Maybe<InventoryObjectType>;
  item4?: Maybe<InventoryObjectType>;
  item5?: Maybe<InventoryObjectType>;
  neutral0?: Maybe<InventoryObjectType>;
  teleport0?: Maybe<InventoryObjectType>;
  time: Scalars['Int']['output'];
};

export type ItemAttributeType = {
  __typename?: 'ItemAttributeType';
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ItemComponentType = {
  __typename?: 'ItemComponentType';
  componentId?: Maybe<Scalars['Short']['output']>;
  index?: Maybe<Scalars['Byte']['output']>;
};

export type ItemLanguageType = {
  __typename?: 'ItemLanguageType';
  attributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  lore?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  notes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ItemPurchaseType = {
  __typename?: 'ItemPurchaseType';
  itemId?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
};

export type ItemStatType = {
  __typename?: 'ItemStatType';
  aliases?: Maybe<Scalars['String']['output']>;
  behavior?: Maybe<Scalars['Long']['output']>;
  castPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  castRange?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  channelTime?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  cost?: Maybe<Scalars['Int']['output']>;
  fightRecapLevel?: Maybe<Scalars['Byte']['output']>;
  initialCharges?: Maybe<Scalars['Short']['output']>;
  initialStock?: Maybe<Scalars['Short']['output']>;
  initialStockTime?: Maybe<Scalars['Short']['output']>;
  isAlertable?: Maybe<Scalars['Boolean']['output']>;
  isDisplayCharges?: Maybe<Scalars['Boolean']['output']>;
  isDroppable?: Maybe<Scalars['Boolean']['output']>;
  isHideCharges?: Maybe<Scalars['Boolean']['output']>;
  isPermanent?: Maybe<Scalars['Boolean']['output']>;
  isPurchasable?: Maybe<Scalars['Boolean']['output']>;
  isRecipe?: Maybe<Scalars['Boolean']['output']>;
  isRequiresCharges?: Maybe<Scalars['Boolean']['output']>;
  isSellable?: Maybe<Scalars['Boolean']['output']>;
  isSideShop?: Maybe<Scalars['Boolean']['output']>;
  isStackable?: Maybe<Scalars['Boolean']['output']>;
  isSupport?: Maybe<Scalars['Boolean']['output']>;
  isTempestDoubleClonable?: Maybe<Scalars['Boolean']['output']>;
  itemResult?: Maybe<Scalars['Short']['output']>;
  manaCost?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  needsComponents?: Maybe<Scalars['Boolean']['output']>;
  neutralItemDropTime?: Maybe<Scalars['Short']['output']>;
  neutralItemTier?: Maybe<NeutralItemTierEnum>;
  quality?: Maybe<Scalars['String']['output']>;
  sharedCooldown?: Maybe<Scalars['String']['output']>;
  shopTags?: Maybe<Scalars['String']['output']>;
  stockMax?: Maybe<Scalars['Short']['output']>;
  stockTime?: Maybe<Scalars['Int']['output']>;
  unitTargetFlags?: Maybe<Scalars['Long']['output']>;
  unitTargetTeam?: Maybe<Scalars['Long']['output']>;
  unitTargetType?: Maybe<Scalars['Long']['output']>;
  upgradeItem?: Maybe<Scalars['Short']['output']>;
  upgradeRecipe?: Maybe<Scalars['Short']['output']>;
};

export type ItemType = {
  __typename?: 'ItemType';
  attributes?: Maybe<Array<Maybe<ItemAttributeType>>>;
  components?: Maybe<Array<Maybe<ItemComponentType>>>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Short']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  isSupportFullItem?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<ItemLanguageType>;
  name?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  stat?: Maybe<ItemStatType>;
};

export type ItemUsedEventType = {
  __typename?: 'ItemUsedEventType';
  attacker?: Maybe<Scalars['Short']['output']>;
  itemId?: Maybe<Scalars['Short']['output']>;
  target?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
};

export type KillDetailType = {
  __typename?: 'KillDetailType';
  assist?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  attacker?: Maybe<Scalars['Short']['output']>;
  byAbility?: Maybe<Scalars['Short']['output']>;
  byItem?: Maybe<Scalars['Short']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  isFromIllusion?: Maybe<Scalars['Boolean']['output']>;
  isGank?: Maybe<Scalars['Boolean']['output']>;
  isInvisible?: Maybe<Scalars['Boolean']['output']>;
  isRuneEffected?: Maybe<Scalars['Boolean']['output']>;
  isSmoke?: Maybe<Scalars['Boolean']['output']>;
  isSolo?: Maybe<Scalars['Boolean']['output']>;
  isTpRecently?: Maybe<Scalars['Boolean']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
  xp?: Maybe<Scalars['Int']['output']>;
};

export enum LaneOutcomeEnums {
  DireStomp = 'DIRE_STOMP',
  DireVictory = 'DIRE_VICTORY',
  RadiantStomp = 'RADIANT_STOMP',
  RadiantVictory = 'RADIANT_VICTORY',
  Tie = 'TIE'
}

export enum Language {
  Brazilian = 'BRAZILIAN',
  Bulgarian = 'BULGARIAN',
  Czech = 'CZECH',
  Danish = 'DANISH',
  Dutch = 'DUTCH',
  English = 'ENGLISH',
  Finnish = 'FINNISH',
  French = 'FRENCH',
  German = 'GERMAN',
  Greek = 'GREEK',
  Hungarian = 'HUNGARIAN',
  Italian = 'ITALIAN',
  Japanese = 'JAPANESE',
  Korean = 'KOREAN',
  Koreana = 'KOREANA',
  Norwegian = 'NORWEGIAN',
  Polish = 'POLISH',
  Portuguese = 'PORTUGUESE',
  Romanian = 'ROMANIAN',
  Russian = 'RUSSIAN',
  Spanish = 'SPANISH',
  Swedish = 'SWEDISH',
  SChinese = 'S_CHINESE',
  Thai = 'THAI',
  Turkish = 'TURKISH',
  TChinese = 'T_CHINESE',
  Ukrainian = 'UKRAINIAN'
}

export type LanguageType = {
  __typename?: 'LanguageType';
  displaLanguageNameyName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Byte']['output'];
  languageCode?: Maybe<Scalars['String']['output']>;
};

export type LastHitDetailType = {
  __typename?: 'LastHitDetailType';
  attacker?: Maybe<Scalars['Short']['output']>;
  byAbility?: Maybe<Scalars['Short']['output']>;
  byItem?: Maybe<Scalars['Short']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  isAncient?: Maybe<Scalars['Boolean']['output']>;
  isCreep?: Maybe<Scalars['Boolean']['output']>;
  isFromIllusion?: Maybe<Scalars['Boolean']['output']>;
  isNeutral?: Maybe<Scalars['Boolean']['output']>;
  mapLocation?: Maybe<MapLocationEnums>;
  npcId?: Maybe<Scalars['Short']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
  xp?: Maybe<Scalars['Int']['output']>;
};

export enum LeaderboardDivision {
  Americas = 'AMERICAS',
  China = 'CHINA',
  Europe = 'EUROPE',
  SeAsia = 'SE_ASIA'
}

export type LeaderboardQuery = {
  __typename?: 'LeaderboardQuery';
  /** Gets the current leaderboard for Battle Pass levels. */
  battlePass?: Maybe<PlayerBattlePassResponseType>;
  /** Gets the current leaderboard for Battle Pass levels. */
  battlePassGroupBy?: Maybe<Array<Maybe<PlayerBattlePassGroupByType>>>;
  /** Gets the current leaderboard for all coaches by level. */
  coaching?: Maybe<PlayerCoachingLeaderboardResponseType>;
  /** Gets the players of Dota which have DotaPlus and have a high level hero. */
  dotaPlus?: Maybe<PlayerHeroDotaPlusLeaderboardRankResponseType>;
  /** Gets the top player of DotaPlus order by Level and Time Achived. */
  dotaPlusTopLevels?: Maybe<Array<Maybe<HeroDotaPlusLeaderboardRankTopType>>>;
  /** Show amount of active and expired DotaPlus users by Week */
  dotaPlusWeek?: Maybe<Array<Maybe<DotaPlusWeekType>>>;
  /** Gets the current leaderboard for all guilds by points. */
  guild?: Maybe<Array<Maybe<GuildType>>>;
  /** Gets the current leaderboard for all players by a specific Hero, order by IMP. */
  hero?: Maybe<Array<Maybe<PlayerLeaderBoardByHeroType>>>;
  /** Returns the list of the current season leaderboard. */
  season?: Maybe<SteamAccountSeasonActiveLeaderboardType>;
};


export type LeaderboardQueryBattlePassArgs = {
  countryCode?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['Byte']['input']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type LeaderboardQueryBattlePassGroupByArgs = {
  countryCode?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['Byte']['input']>;
  groupBy: PlayerBattlePassGroupByEnum;
  playerCountAt: Scalars['Int']['input'];
};


export type LeaderboardQueryCoachingArgs = {
  levels?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type LeaderboardQueryDotaPlusArgs = {
  heroId?: InputMaybe<Scalars['Short']['input']>;
  level?: InputMaybe<Scalars['Byte']['input']>;
  orderBy?: InputMaybe<FilterLeaderboardOrder>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type LeaderboardQueryGuildArgs = {
  request?: InputMaybe<FilterLeaderboardGuildRequestType>;
};


export type LeaderboardQueryHeroArgs = {
  request?: InputMaybe<FilterLeaderboardHeroRequestType>;
};


export type LeaderboardQuerySeasonArgs = {
  request?: InputMaybe<FilterSeasonLeaderboardRequestType>;
};

export type LeagueBattlePassType = {
  __typename?: 'LeagueBattlePassType';
  average?: Maybe<Scalars['Int']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type LeagueDpcPositionStatObjectType = {
  __typename?: 'LeagueDpcPositionStatObjectType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
};

export type LeagueMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars['Boolean']['input']>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of stage type ids to include in this query, excluding all results that do not include one of these stage types. */
  leagueStageTypeIds?: InputMaybe<Array<InputMaybe<LeagueStage>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip: Scalars['Int']['input'];
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  steamAccountId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to have returned in your query. Max :  */
  take: Scalars['Int']['input'];
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type LeagueMetaDetailType = {
  __typename?: 'LeagueMetaDetailType';
  banCount?: Maybe<Scalars['Int']['output']>;
  banRate?: Maybe<Scalars['Decimal']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  lossCount?: Maybe<Scalars['Int']['output']>;
  pickCount?: Maybe<Scalars['Int']['output']>;
  pickRate?: Maybe<Scalars['Decimal']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
  winRate?: Maybe<Scalars['Decimal']['output']>;
};

export type LeagueMetaType = {
  __typename?: 'LeagueMetaType';
  bestRecord?: Maybe<LeagueMetaDetailType>;
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']['output']>;
  missingMatchCount?: Maybe<Scalars['Int']['output']>;
  mostBanned?: Maybe<LeagueMetaDetailType>;
  mostPicked?: Maybe<LeagueMetaDetailType>;
  totalMatchCount?: Maybe<Scalars['Int']['output']>;
};

export enum LeagueNodeDefaultGroupEnum {
  BestOfFive = 'BEST_OF_FIVE',
  BestOfOne = 'BEST_OF_ONE',
  BestOfThree = 'BEST_OF_THREE',
  BestOfTwo = 'BEST_OF_TWO',
  Invalid = 'INVALID'
}

export type LeagueNodeGroupType = {
  __typename?: 'LeagueNodeGroupType';
  advancingNodeGroupId?: Maybe<Scalars['Short']['output']>;
  advancingTeamCount?: Maybe<Scalars['Byte']['output']>;
  defaultNodeType?: Maybe<LeagueNodeDefaultGroupEnum>;
  eliminationDPCPoints?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Short']['output']>;
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  isFinalGroup?: Maybe<Scalars['Boolean']['output']>;
  isTieBreaker?: Maybe<Scalars['Boolean']['output']>;
  maxRounds?: Maybe<Scalars['Byte']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nodeGroupType?: Maybe<LeagueNodeGroupTypeEnum>;
  nodes?: Maybe<Array<Maybe<LeagueNodeType>>>;
  parentNodeGroupId?: Maybe<Scalars['Short']['output']>;
  phase?: Maybe<Scalars['Byte']['output']>;
  region?: Maybe<Scalars['Byte']['output']>;
  round?: Maybe<Scalars['Byte']['output']>;
  secondaryAdvancingNodeGroupId?: Maybe<Scalars['Short']['output']>;
  secondaryAdvancingTeamCount?: Maybe<Scalars['Byte']['output']>;
  startDate?: Maybe<Scalars['Long']['output']>;
  teamCount?: Maybe<Scalars['Byte']['output']>;
  tertiaryAdvancingNodeGroupId?: Maybe<Scalars['Short']['output']>;
  tertiaryAdvancingTeamCount?: Maybe<Scalars['Byte']['output']>;
};

export enum LeagueNodeGroupTypeEnum {
  BracketDoubleAllWinner = 'BRACKET_DOUBLE_ALL_WINNER',
  BracketDoubleSeedLoser = 'BRACKET_DOUBLE_SEED_LOSER',
  BracketSingle = 'BRACKET_SINGLE',
  Gsl = 'GSL',
  Invalid = 'INVALID',
  Organizational = 'ORGANIZATIONAL',
  Placement = 'PLACEMENT',
  RoundRobin = 'ROUND_ROBIN',
  Showmatch = 'SHOWMATCH',
  Swiss = 'SWISS'
}

export type LeagueNodeType = {
  __typename?: 'LeagueNodeType';
  actualTime?: Maybe<Scalars['Long']['output']>;
  hasStarted?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Short']['output']>;
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  losingNodeId?: Maybe<Scalars['Short']['output']>;
  matches?: Maybe<Array<Maybe<MatchType>>>;
  name?: Maybe<Scalars['String']['output']>;
  nodeGroupId?: Maybe<Scalars['Short']['output']>;
  nodeType?: Maybe<LeagueNodeDefaultGroupEnum>;
  scheduledTime?: Maybe<Scalars['Long']['output']>;
  seriesId?: Maybe<Scalars['Long']['output']>;
  streamIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  streams?: Maybe<Array<Maybe<LeagueStreamType>>>;
  teamOne?: Maybe<TeamType>;
  teamOneId?: Maybe<Scalars['Int']['output']>;
  teamOneWins?: Maybe<Scalars['Byte']['output']>;
  teamTwo?: Maybe<TeamType>;
  teamTwoId?: Maybe<Scalars['Int']['output']>;
  teamTwoWins?: Maybe<Scalars['Byte']['output']>;
  winningNodeId?: Maybe<Scalars['Short']['output']>;
};

export type LeaguePrizePoolPercentageType = {
  __typename?: 'LeaguePrizePoolPercentageType';
  index?: Maybe<Scalars['Byte']['output']>;
  leagueId?: Maybe<Scalars['Int']['output']>;
  percentage?: Maybe<Scalars['Int']['output']>;
};

export enum LeagueRegion {
  China = 'CHINA',
  Cis = 'CIS',
  Europe = 'EUROPE',
  Na = 'NA',
  Sa = 'SA',
  Sea = 'SEA',
  Unset = 'UNSET'
}

export type LeagueRegisteredPlayerType = {
  __typename?: 'LeagueRegisteredPlayerType';
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']['output']>;
  radiantTeam?: Maybe<TeamType>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  teamId?: Maybe<Scalars['Int']['output']>;
};

export type LeagueRequestType = {
  /** Determine to End value of finding a League Between two specific datetimes. */
  betweenEndDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** Determine to Start value of finding a League Between two specific datetimes. */
  betweenStartDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** If a league is set to end before this time. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** Whether a league has live matches or not, represented in a boolean. */
  hasLiveMatches?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a league has started or not, represented in a boolean. */
  isFutureLeague?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a league has ended or not, represented in a boolean. */
  leagueEnded?: InputMaybe<Scalars['Boolean']['input']>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of league ids to include in this query, excluding all results that do not include one of these leagues. */
  leagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The id to order the results by in this query. */
  orderBy?: InputMaybe<FilterOrderBy>;
  /** Whether an image is required or not, represented in a boolean. */
  requireImage?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a prize pool is required or not, represented in a boolean. */
  requirePrizePool?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether a start and end date is required or not, represented in a boolean. */
  requireStartAndEndDates?: InputMaybe<Scalars['Boolean']['input']>;
  /** The amount of data to skip before collecting your query. This is useful for Paging. */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** If a league is set to start after this time. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit :  */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** An array of tier ids to include in this query, excluding all results that do not include one of these tiers. */
  tiers?: InputMaybe<Array<InputMaybe<LeagueTier>>>;
};

export enum LeagueStage {
  ChampionsQualifers = 'CHAMPIONS_QUALIFERS',
  ClosedQualifers = 'CLOSED_QUALIFERS',
  GroupStage = 'GROUP_STAGE',
  MainEvent = 'MAIN_EVENT',
  OpenQualifers = 'OPEN_QUALIFERS'
}

export type LeagueStatType = {
  __typename?: 'LeagueStatType';
  averageMatchDurationSeconds?: Maybe<Scalars['Int']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  radiantWinMatchCount?: Maybe<Scalars['Int']['output']>;
};

export type LeagueStreamType = {
  __typename?: 'LeagueStreamType';
  broadcastProvider?: Maybe<Scalars['Byte']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languageId?: Maybe<Language>;
  name?: Maybe<Scalars['String']['output']>;
  streamUrl?: Maybe<Scalars['String']['output']>;
  vodUrl?: Maybe<Scalars['String']['output']>;
};

export type LeagueTableHeroLanesObjectType = {
  __typename?: 'LeagueTableHeroLanesObjectType';
  id?: Maybe<Scalars['Byte']['output']>;
  matchCount: Scalars['Int']['output'];
  matchWins: Scalars['Int']['output'];
};

export type LeagueTableHeroOverviewType = {
  __typename?: 'LeagueTableHeroOverviewType';
  banCount: Scalars['Int']['output'];
  banPhaseOne: Scalars['Int']['output'];
  banPhaseThree: Scalars['Int']['output'];
  banPhaseTwo: Scalars['Int']['output'];
  matchCount: Scalars['Int']['output'];
  matchWins: Scalars['Int']['output'];
  pickPhaseOne: Scalars['Int']['output'];
  pickPhaseThree: Scalars['Int']['output'];
  pickPhaseTwo: Scalars['Int']['output'];
};

export type LeagueTableHeroPlayersObjectType = {
  __typename?: 'LeagueTableHeroPlayersObjectType';
  assists: Scalars['Float']['output'];
  cs: Scalars['Float']['output'];
  deaths: Scalars['Float']['output'];
  gpm: Scalars['Float']['output'];
  heal: Scalars['Float']['output'];
  heroDamage: Scalars['Float']['output'];
  imp: Scalars['Float']['output'];
  killContribution: Scalars['Float']['output'];
  kills: Scalars['Float']['output'];
  matchCount: Scalars['Int']['output'];
  matchWins: Scalars['Int']['output'];
  steamId: Scalars['Long']['output'];
  towerDamage: Scalars['Float']['output'];
  xpm: Scalars['Float']['output'];
};

export type LeagueTableHeroStatsType = {
  __typename?: 'LeagueTableHeroStatsType';
  assists: Scalars['Float']['output'];
  cs: Scalars['Float']['output'];
  deaths: Scalars['Float']['output'];
  gpm: Scalars['Float']['output'];
  heal: Scalars['Float']['output'];
  heroDamage: Scalars['Float']['output'];
  killContribution: Scalars['Float']['output'];
  kills: Scalars['Float']['output'];
  towerDamage: Scalars['Float']['output'];
  xpm: Scalars['Float']['output'];
};

export type LeagueTableHeroType = {
  __typename?: 'LeagueTableHeroType';
  heroId?: Maybe<Scalars['Short']['output']>;
  heroes?: Maybe<Array<Maybe<LeagueTableHeroPlayersObjectType>>>;
  lanes?: Maybe<Array<Maybe<LeagueTableHeroLanesObjectType>>>;
  overview?: Maybe<LeagueTableHeroOverviewType>;
  stats?: Maybe<LeagueTableHeroStatsType>;
};

export type LeagueTablePlayerHeroesObjectType = {
  __typename?: 'LeagueTablePlayerHeroesObjectType';
  heroId: Scalars['Int']['output'];
  imp: Scalars['Int']['output'];
  matchCount: Scalars['Int']['output'];
  matchWins: Scalars['Int']['output'];
};

export type LeagueTablePlayerLanesObjectType = {
  __typename?: 'LeagueTablePlayerLanesObjectType';
  id?: Maybe<Scalars['Byte']['output']>;
  matchCount: Scalars['Int']['output'];
  matchWins: Scalars['Int']['output'];
};

export type LeagueTablePlayerOverviewType = {
  __typename?: 'LeagueTablePlayerOverviewType';
  earnings?: Maybe<Scalars['Float']['output']>;
  imp: Scalars['Int']['output'];
  matchCount: Scalars['Int']['output'];
  matchWins: Scalars['Int']['output'];
  points?: Maybe<Scalars['Float']['output']>;
  seriesCount: Scalars['Int']['output'];
  seriesWins: Scalars['Int']['output'];
};

export type LeagueTablePlayerStatsType = {
  __typename?: 'LeagueTablePlayerStatsType';
  assists: Scalars['Float']['output'];
  cs: Scalars['Float']['output'];
  deaths: Scalars['Float']['output'];
  gpm: Scalars['Float']['output'];
  heal: Scalars['Float']['output'];
  heroDamage: Scalars['Float']['output'];
  killContribution: Scalars['Float']['output'];
  kills: Scalars['Float']['output'];
  towerDamage: Scalars['Float']['output'];
  xpm: Scalars['Float']['output'];
};

export type LeagueTablePlayerType = {
  __typename?: 'LeagueTablePlayerType';
  heroes?: Maybe<Array<Maybe<LeagueTablePlayerHeroesObjectType>>>;
  lanes?: Maybe<Array<Maybe<LeagueTablePlayerLanesObjectType>>>;
  overview?: Maybe<LeagueTablePlayerOverviewType>;
  stats?: Maybe<LeagueTablePlayerStatsType>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
};

export type LeagueTableTeamHeroesObjectType = {
  __typename?: 'LeagueTableTeamHeroesObjectType';
  banCount?: Maybe<Scalars['Int']['output']>;
  heroId: Scalars['Int']['output'];
  imp?: Maybe<Scalars['Decimal']['output']>;
  matchCount: Scalars['Int']['output'];
  matchWins: Scalars['Int']['output'];
};

export type LeagueTableTeamLanesObjectType = {
  __typename?: 'LeagueTableTeamLanesObjectType';
  id?: Maybe<Scalars['Byte']['output']>;
  matchCount: Scalars['Int']['output'];
  matchWins: Scalars['Int']['output'];
};

export type LeagueTableTeamOverviewType = {
  __typename?: 'LeagueTableTeamOverviewType';
  earnings?: Maybe<Scalars['Float']['output']>;
  matchCount: Scalars['Int']['output'];
  matchWins: Scalars['Int']['output'];
  points?: Maybe<Scalars['Float']['output']>;
  seriesCount: Scalars['Int']['output'];
  seriesDraws: Scalars['Int']['output'];
  seriesWins: Scalars['Int']['output'];
  tmp?: Maybe<Scalars['Float']['output']>;
};

export type LeagueTableTeamStatsType = {
  __typename?: 'LeagueTableTeamStatsType';
  assists: Scalars['Float']['output'];
  cs: Scalars['Float']['output'];
  deaths: Scalars['Float']['output'];
  duration: Scalars['Float']['output'];
  gpm: Scalars['Float']['output'];
  heal: Scalars['Float']['output'];
  heroDamage: Scalars['Float']['output'];
  kills: Scalars['Float']['output'];
  towerDamage: Scalars['Float']['output'];
  xpm: Scalars['Float']['output'];
};

export type LeagueTableTeamType = {
  __typename?: 'LeagueTableTeamType';
  heroes?: Maybe<Array<Maybe<LeagueTableTeamHeroesObjectType>>>;
  lanes?: Maybe<Array<Maybe<LeagueTableTeamLanesObjectType>>>;
  members?: Maybe<Array<Maybe<LeagueRegisteredPlayerType>>>;
  overview?: Maybe<LeagueTableTeamOverviewType>;
  stats?: Maybe<LeagueTableTeamStatsType>;
  team?: Maybe<TeamType>;
  teamId?: Maybe<Scalars['Int']['output']>;
};

export type LeagueTableType = {
  __typename?: 'LeagueTableType';
  leagueId: Scalars['Int']['output'];
  tableHeroes?: Maybe<Array<Maybe<LeagueTableHeroType>>>;
  tablePlayers?: Maybe<Array<Maybe<LeagueTablePlayerType>>>;
  tableTeams?: Maybe<Array<Maybe<LeagueTableTeamType>>>;
};

export enum LeagueTier {
  Amateur = 'AMATEUR',
  DpcLeague = 'DPC_LEAGUE',
  DpcLeagueFinals = 'DPC_LEAGUE_FINALS',
  DpcLeagueQualifier = 'DPC_LEAGUE_QUALIFIER',
  DpcQualifier = 'DPC_QUALIFIER',
  International = 'INTERNATIONAL',
  Major = 'MAJOR',
  Minor = 'MINOR',
  Professional = 'PROFESSIONAL',
  Unset = 'UNSET'
}

export type LeagueType = {
  __typename?: 'LeagueType';
  banner?: Maybe<Scalars['String']['output']>;
  basePrizePool?: Maybe<Scalars['Int']['output']>;
  battlePass?: Maybe<LeagueBattlePassType>;
  country?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  endDateTime?: Maybe<Scalars['Long']['output']>;
  freeToSpectate?: Maybe<Scalars['Boolean']['output']>;
  hasLiveMatches?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  imageUri?: Maybe<Scalars['String']['output']>;
  isFollowed?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDate?: Maybe<Scalars['Long']['output']>;
  liveMatches?: Maybe<Array<Maybe<MatchLiveType>>>;
  matches?: Maybe<Array<Maybe<MatchType>>>;
  /** Find match details by steam account id. The return is modified to group the data by the GroupBy parameter. */
  matchesGroupBy?: Maybe<Array<Maybe<MatchGroupByType>>>;
  name?: Maybe<Scalars['String']['output']>;
  nodeGroups?: Maybe<Array<Maybe<LeagueNodeGroupType>>>;
  private?: Maybe<Scalars['Boolean']['output']>;
  prizePool?: Maybe<Scalars['Int']['output']>;
  prizePoolPercentages?: Maybe<Array<Maybe<LeaguePrizePoolPercentageType>>>;
  region?: Maybe<LeagueRegion>;
  series?: Maybe<Array<Maybe<SeriesType>>>;
  standings?: Maybe<Array<Maybe<TeamPrizeType>>>;
  startDateTime?: Maybe<Scalars['Long']['output']>;
  stats?: Maybe<LeagueStatType>;
  stopSalesTime?: Maybe<Scalars['DateTime']['output']>;
  streams?: Maybe<Array<Maybe<LeagueStreamType>>>;
  tables?: Maybe<LeagueTableType>;
  tier?: Maybe<LeagueTier>;
  tournamentUrl?: Maybe<Scalars['String']['output']>;
  venue?: Maybe<Scalars['String']['output']>;
};


export type LeagueTypeMatchesArgs = {
  request: LeagueMatchesRequestType;
};


export type LeagueTypeMatchesGroupByArgs = {
  request: PlayerMatchesGroupByRequestType;
};


export type LeagueTypeSeriesArgs = {
  leagueStageTypeIds?: InputMaybe<Array<InputMaybe<LeagueStage>>>;
  seriesId?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type LeagueTypeStatsArgs = {
  leagueStageTypeIds?: InputMaybe<Array<InputMaybe<LeagueStage>>>;
};


export type LeagueTypeTablesArgs = {
  calculateTypeId?: InputMaybe<TableCalculateEnum>;
  leagueStageTypeIds?: InputMaybe<Array<InputMaybe<LeagueStage>>>;
};

export enum LeaverStatusEnum {
  Abandoned = 'ABANDONED',
  Afk = 'AFK',
  DeclinedReadyUp = 'DECLINED_READY_UP',
  Disconnected = 'DISCONNECTED',
  DisconnectedTooLong = 'DISCONNECTED_TOO_LONG',
  FailedToReadyUp = 'FAILED_TO_READY_UP',
  NeverConnected = 'NEVER_CONNECTED',
  NeverConnectedTooLong = 'NEVER_CONNECTED_TOO_LONG',
  None = 'NONE'
}

export type LiveEventMatchDireTideStompType = {
  __typename?: 'LiveEventMatchDireTideStompType';
  match?: Maybe<DireTideCustomGameMatchType>;
};

export type LiveEventPlayerDireTideCandyScoredType = {
  __typename?: 'LiveEventPlayerDireTideCandyScoredType';
  candyScored?: Maybe<Scalars['Short']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<DireTideCustomGameMatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroAssistsType = {
  __typename?: 'LiveEventPlayerHeroAssistsType';
  assistCount?: Maybe<Scalars['Byte']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroBuildingDamageType = {
  __typename?: 'LiveEventPlayerHeroBuildingDamageType';
  buildingDamage?: Maybe<Scalars['Int']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroDewardType = {
  __typename?: 'LiveEventPlayerHeroDewardType';
  dewardCount?: Maybe<Scalars['Byte']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroDotaPlusLevelType = {
  __typename?: 'LiveEventPlayerHeroDotaPlusLevelType';
  heroId?: Maybe<Scalars['Short']['output']>;
  level?: Maybe<Scalars['Byte']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroExpPerMinuteType = {
  __typename?: 'LiveEventPlayerHeroExpPerMinuteType';
  expPerMinute?: Maybe<Scalars['Short']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroGoldPerMinuteType = {
  __typename?: 'LiveEventPlayerHeroGoldPerMinuteType';
  goldPerMinute?: Maybe<Scalars['Short']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroHealingType = {
  __typename?: 'LiveEventPlayerHeroHealingType';
  healingAmount?: Maybe<Scalars['Int']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroHeroDamageType = {
  __typename?: 'LiveEventPlayerHeroHeroDamageType';
  heroDamage?: Maybe<Scalars['Int']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroHighImpType = {
  __typename?: 'LiveEventPlayerHeroHighImpType';
  heroId?: Maybe<Scalars['Short']['output']>;
  imp?: Maybe<Scalars['Byte']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroItemPurchaseType = {
  __typename?: 'LiveEventPlayerHeroItemPurchaseType';
  heroId?: Maybe<Scalars['Short']['output']>;
  itemCount?: Maybe<Scalars['Byte']['output']>;
  itemId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroKillsType = {
  __typename?: 'LiveEventPlayerHeroKillsType';
  heroId?: Maybe<Scalars['Short']['output']>;
  killCount?: Maybe<Scalars['Byte']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerHeroWinStreakType = {
  __typename?: 'LiveEventPlayerHeroWinStreakType';
  heroId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
  winStreakCount?: Maybe<Scalars['Byte']['output']>;
};

export type LiveEventPlayerRampageType = {
  __typename?: 'LiveEventPlayerRampageType';
  heroId?: Maybe<Scalars['Short']['output']>;
  match?: Maybe<MatchType>;
  rampageCount?: Maybe<Scalars['Byte']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerRankUpType = {
  __typename?: 'LiveEventPlayerRankUpType';
  match?: Maybe<MatchType>;
  rank?: Maybe<Scalars['Byte']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
};

export type LiveEventPlayerWinStreakType = {
  __typename?: 'LiveEventPlayerWinStreakType';
  match?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
  winStreakCount?: Maybe<Scalars['Byte']['output']>;
};

export type LiveEventProPlayerLiveType = {
  __typename?: 'LiveEventProPlayerLiveType';
  match?: Maybe<MatchLiveType>;
  steamAccounts?: Maybe<Array<Maybe<SteamAccountType>>>;
};

export type LiveEventType = LiveEventMatchDireTideStompType | LiveEventPlayerDireTideCandyScoredType | LiveEventPlayerHeroAssistsType | LiveEventPlayerHeroBuildingDamageType | LiveEventPlayerHeroDewardType | LiveEventPlayerHeroDotaPlusLevelType | LiveEventPlayerHeroExpPerMinuteType | LiveEventPlayerHeroGoldPerMinuteType | LiveEventPlayerHeroHealingType | LiveEventPlayerHeroHeroDamageType | LiveEventPlayerHeroHighImpType | LiveEventPlayerHeroItemPurchaseType | LiveEventPlayerHeroKillsType | LiveEventPlayerHeroWinStreakType | LiveEventPlayerRampageType | LiveEventPlayerRankUpType | LiveEventPlayerWinStreakType | LiveEventProPlayerLiveType;

export type LiveQuery = {
  __typename?: 'LiveQuery';
  /** Find a live match by match id. A live match is data where a match is on the Dota watch list and still active. All League games are also Live. id is a required input field. */
  match?: Maybe<MatchLiveType>;
  /** Find all live matches. A live match is data where a match is on the Dota watch list and still active. All League games are also Live. */
  matches?: Maybe<Array<Maybe<MatchLiveType>>>;
};


export type LiveQueryMatchArgs = {
  id: Scalars['Long']['input'];
  skipPlaybackDuration?: InputMaybe<Scalars['Int']['input']>;
};


export type LiveQueryMatchesArgs = {
  request?: InputMaybe<MatchLiveRequestType>;
};

export enum LobbyTypeEnum {
  BattleCup = 'BATTLE_CUP',
  CoopVsBots = 'COOP_VS_BOTS',
  DireTide = 'DIRE_TIDE',
  Event = 'EVENT',
  Practice = 'PRACTICE',
  Ranked = 'RANKED',
  SoloMid = 'SOLO_MID',
  SoloQueue = 'SOLO_QUEUE',
  TeamMatch = 'TEAM_MATCH',
  Tournament = 'TOURNAMENT',
  Tutorial = 'TUTORIAL',
  Unranked = 'UNRANKED'
}

export type LobbyTypeType = {
  __typename?: 'LobbyTypeType';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export enum MapLocationEnums {
  DireBase = 'DIRE_BASE',
  DireFountain = 'DIRE_FOUNTAIN',
  DireMidLane = 'DIRE_MID_LANE',
  DireOffLane = 'DIRE_OFF_LANE',
  DireSafeLane = 'DIRE_SAFE_LANE',
  RadiantBase = 'RADIANT_BASE',
  RadiantFountain = 'RADIANT_FOUNTAIN',
  RadiantMidLane = 'RADIANT_MID_LANE',
  RadiantOffLane = 'RADIANT_OFF_LANE',
  RadiantSafeLane = 'RADIANT_SAFE_LANE',
  River = 'RIVER',
  Roaming = 'ROAMING',
  Roshan = 'ROSHAN'
}

export enum MatchAnalysisOutcomeType {
  CloseGame = 'CLOSE_GAME',
  Comeback = 'COMEBACK',
  None = 'NONE',
  Stomped = 'STOMPED'
}

export type MatchGroupByAssistsType = {
  __typename?: 'MatchGroupByAssistsType';
  assistCount?: Maybe<Scalars['Long']['output']>;
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByAwardType = {
  __typename?: 'MatchGroupByAwardType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  award?: Maybe<MatchPlayerAward>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByClusterType = {
  __typename?: 'MatchGroupByClusterType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  cluster?: Maybe<Scalars['Long']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByDateDayHeroType = {
  __typename?: 'MatchGroupByDateDayHeroType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  dateDay?: Maybe<Scalars['Long']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  hero?: Maybe<HeroType>;
  heroId?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};


export type MatchGroupByDateDayHeroTypeHeroArgs = {
  gameVersionId: Scalars['Short']['input'];
};

export type MatchGroupByDateDayType = {
  __typename?: 'MatchGroupByDateDayType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  dateDay?: Maybe<Scalars['Long']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByDeathsType = {
  __typename?: 'MatchGroupByDeathsType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  deathCount?: Maybe<Scalars['Long']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByDurationMinutesType = {
  __typename?: 'MatchGroupByDurationMinutesType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  durationMinutes?: Maybe<Scalars['Long']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByFactionType = {
  __typename?: 'MatchGroupByFactionType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByGameModeType = {
  __typename?: 'MatchGroupByGameModeType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  gameMode?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByGameVersionType = {
  __typename?: 'MatchGroupByGameVersionType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  gameVersion?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByGoldPerMinuteType = {
  __typename?: 'MatchGroupByGoldPerMinuteType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  goldPerMinute?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByHeroPerformanceType = {
  __typename?: 'MatchGroupByHeroPerformanceType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByHeroType = {
  __typename?: 'MatchGroupByHeroType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  hero?: Maybe<HeroType>;
  heroId?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};


export type MatchGroupByHeroTypeHeroArgs = {
  gameVersionId: Scalars['Short']['input'];
};

export type MatchGroupByHourType = {
  __typename?: 'MatchGroupByHourType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  hour?: Maybe<Scalars['Short']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByIsIntentionalFeedingType = {
  __typename?: 'MatchGroupByIsIntentionalFeedingType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  isIntentionalFeeding?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByIsLeagueType = {
  __typename?: 'MatchGroupByIsLeagueType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  isLeague?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByIsLeaverType = {
  __typename?: 'MatchGroupByIsLeaverType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  isLeaver?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByIsPartyType = {
  __typename?: 'MatchGroupByIsPartyType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  isParty?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByIsRandomType = {
  __typename?: 'MatchGroupByIsRandomType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  isRandom?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByIsSeriesType = {
  __typename?: 'MatchGroupByIsSeriesType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  isSeries?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByIsStatsType = {
  __typename?: 'MatchGroupByIsStatsType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  isStats?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByIsVictoryType = {
  __typename?: 'MatchGroupByIsVictoryType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  isVictory?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByKillsType = {
  __typename?: 'MatchGroupByKillsType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  killCount?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByLaneType = {
  __typename?: 'MatchGroupByLaneType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lane?: Maybe<MatchLaneType>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByLeagueIdType = {
  __typename?: 'MatchGroupByLeagueIdType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByLevelType = {
  __typename?: 'MatchGroupByLevelType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  level?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByLobbyTypeType = {
  __typename?: 'MatchGroupByLobbyTypeType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lobbyType?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByPositionType = {
  __typename?: 'MatchGroupByPositionType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByRegionType = {
  __typename?: 'MatchGroupByRegionType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  region?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByRoamLaneType = {
  __typename?: 'MatchGroupByRoamLaneType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  roamLane?: Maybe<MatchPlayerAward>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByRoleType = {
  __typename?: 'MatchGroupByRoleType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<MatchPlayerRoleType>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupBySteamAccountIdAgainstTeamType = {
  __typename?: 'MatchGroupBySteamAccountIdAgainstTeamType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupBySteamAccountIdHeroIdAgainstTeamType = {
  __typename?: 'MatchGroupBySteamAccountIdHeroIdAgainstTeamType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  hero?: Maybe<HeroType>;
  heroId?: Maybe<Scalars['Short']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};


export type MatchGroupBySteamAccountIdHeroIdAgainstTeamTypeHeroArgs = {
  gameVersionId: Scalars['Short']['input'];
};

export type MatchGroupBySteamAccountIdHeroIdType = {
  __typename?: 'MatchGroupBySteamAccountIdHeroIdType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  hero?: Maybe<HeroType>;
  heroId?: Maybe<Scalars['Short']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};


export type MatchGroupBySteamAccountIdHeroIdTypeHeroArgs = {
  gameVersionId: Scalars['Short']['input'];
};

export type MatchGroupBySteamAccountIdHeroIdWithTeamType = {
  __typename?: 'MatchGroupBySteamAccountIdHeroIdWithTeamType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  hero?: Maybe<HeroType>;
  heroId?: Maybe<Scalars['Short']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};


export type MatchGroupBySteamAccountIdHeroIdWithTeamTypeHeroArgs = {
  gameVersionId: Scalars['Short']['input'];
};

export type MatchGroupBySteamAccountIdType = {
  __typename?: 'MatchGroupBySteamAccountIdType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupBySteamAccountIdWithTeamType = {
  __typename?: 'MatchGroupBySteamAccountIdWithTeamType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByTeamType = {
  __typename?: 'MatchGroupByTeamType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  team?: Maybe<TeamType>;
  teamId?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByTotalKillsType = {
  __typename?: 'MatchGroupByTotalKillsType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  avgTowerDamage?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  totalKills?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchGroupByType = MatchGroupByAssistsType | MatchGroupByAwardType | MatchGroupByClusterType | MatchGroupByDateDayHeroType | MatchGroupByDateDayType | MatchGroupByDeathsType | MatchGroupByDurationMinutesType | MatchGroupByFactionType | MatchGroupByGameModeType | MatchGroupByGameVersionType | MatchGroupByGoldPerMinuteType | MatchGroupByHeroPerformanceType | MatchGroupByHeroType | MatchGroupByHourType | MatchGroupByIsIntentionalFeedingType | MatchGroupByIsLeagueType | MatchGroupByIsLeaverType | MatchGroupByIsPartyType | MatchGroupByIsRandomType | MatchGroupByIsSeriesType | MatchGroupByIsStatsType | MatchGroupByIsVictoryType | MatchGroupByKillsType | MatchGroupByLaneType | MatchGroupByLeagueIdType | MatchGroupByLevelType | MatchGroupByLobbyTypeType | MatchGroupByPositionType | MatchGroupByRegionType | MatchGroupByRoamLaneType | MatchGroupByRoleType | MatchGroupBySteamAccountIdAgainstTeamType | MatchGroupBySteamAccountIdHeroIdAgainstTeamType | MatchGroupBySteamAccountIdHeroIdType | MatchGroupBySteamAccountIdHeroIdWithTeamType | MatchGroupBySteamAccountIdType | MatchGroupBySteamAccountIdWithTeamType | MatchGroupByTeamType | MatchGroupByTotalKillsType;

export enum MatchLaneType {
  Jungle = 'JUNGLE',
  MidLane = 'MID_LANE',
  OffLane = 'OFF_LANE',
  Roaming = 'ROAMING',
  SafeLane = 'SAFE_LANE',
  Unknown = 'UNKNOWN'
}

export type MatchLiveBuildingDetailType = {
  __typename?: 'MatchLiveBuildingDetailType';
  indexId?: Maybe<Scalars['Int']['output']>;
  isAlive: Scalars['Boolean']['output'];
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  npcId?: Maybe<Scalars['Int']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
  type?: Maybe<BuildingType>;
};

export enum MatchLiveGameState {
  CustomGameSetup = 'CUSTOM_GAME_SETUP',
  Disconnect = 'DISCONNECT',
  GameInProgress = 'GAME_IN_PROGRESS',
  HeroSelection = 'HERO_SELECTION',
  Init = 'INIT',
  Last = 'LAST',
  PlayerDraft = 'PLAYER_DRAFT',
  PostGame = 'POST_GAME',
  PreGame = 'PRE_GAME',
  ScenarioSetup = 'SCENARIO_SETUP',
  StrategyTime = 'STRATEGY_TIME',
  TeamShowcase = 'TEAM_SHOWCASE',
  WaitForMapToLoad = 'WAIT_FOR_MAP_TO_LOAD',
  WaitForPlayersToLoad = 'WAIT_FOR_PLAYERS_TO_LOAD'
}

export type MatchLiveInsightType = {
  __typename?: 'MatchLiveInsightType';
  lastSeries?: Maybe<Array<Maybe<SeriesType>>>;
  teamOneLeagueMatchCount: Scalars['Int']['output'];
  teamOneLeagueWinCount: Scalars['Int']['output'];
  teamOneVsWinCount: Scalars['Int']['output'];
  teamTwoLeagueMatchCount: Scalars['Int']['output'];
  teamTwoLeagueWinCount: Scalars['Int']['output'];
  teamTwoVsWinCount: Scalars['Int']['output'];
};

export type MatchLivePickBanType = {
  __typename?: 'MatchLivePickBanType';
  adjustedWinRate?: Maybe<Scalars['Float']['output']>;
  bannedHeroId?: Maybe<Scalars['Short']['output']>;
  baseWinRate?: Maybe<Scalars['Float']['output']>;
  durationValues?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  heroId?: Maybe<Scalars['Short']['output']>;
  isPick: Scalars['Boolean']['output'];
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  letter?: Maybe<PlusLetterType>;
  order?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  positionValues?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  winRateValues?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type MatchLivePlaybackDataType = {
  __typename?: 'MatchLivePlaybackDataType';
  buildingEvents?: Maybe<Array<Maybe<MatchLiveBuildingDetailType>>>;
  direScore?: Maybe<Array<Maybe<MatchLiveTeamScoreDetailType>>>;
  pickBans?: Maybe<Array<Maybe<MatchLivePickBanType>>>;
  radiantScore?: Maybe<Array<Maybe<MatchLiveTeamScoreDetailType>>>;
  roshanEvents?: Maybe<Array<Maybe<MatchLiveRoshanDetailType>>>;
};

export type MatchLivePlayerAssistDetailType = {
  __typename?: 'MatchLivePlayerAssistDetailType';
  positionX: Scalars['Int']['output'];
  positionY: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchLivePlayerDeathDetailType = {
  __typename?: 'MatchLivePlayerDeathDetailType';
  positionX: Scalars['Int']['output'];
  positionY: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchLivePlayerDenyDetailType = {
  __typename?: 'MatchLivePlayerDenyDetailType';
  positionX: Scalars['Int']['output'];
  positionY: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchLivePlayerExperienceDetailType = {
  __typename?: 'MatchLivePlayerExperienceDetailType';
  expPerMinute: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchLivePlayerGoldDetailType = {
  __typename?: 'MatchLivePlayerGoldDetailType';
  gold: Scalars['Int']['output'];
  goldPerMinute: Scalars['Int']['output'];
  networth: Scalars['Int']['output'];
  networthDifference: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchLivePlayerImpDetailType = {
  __typename?: 'MatchLivePlayerImpDetailType';
  imp: Scalars['Short']['output'];
  time: Scalars['Int']['output'];
};

export type MatchLivePlayerInventoryDetailType = {
  __typename?: 'MatchLivePlayerInventoryDetailType';
  backpackId0?: Maybe<Scalars['Short']['output']>;
  backpackId1?: Maybe<Scalars['Short']['output']>;
  backpackId2?: Maybe<Scalars['Short']['output']>;
  itemId0?: Maybe<Scalars['Short']['output']>;
  itemId1?: Maybe<Scalars['Short']['output']>;
  itemId2?: Maybe<Scalars['Short']['output']>;
  itemId3?: Maybe<Scalars['Short']['output']>;
  itemId4?: Maybe<Scalars['Short']['output']>;
  itemId5?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
};

export type MatchLivePlayerKillDetailType = {
  __typename?: 'MatchLivePlayerKillDetailType';
  positionX: Scalars['Int']['output'];
  positionY: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchLivePlayerLastHitDetailType = {
  __typename?: 'MatchLivePlayerLastHitDetailType';
  positionX: Scalars['Int']['output'];
  positionY: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchLivePlayerLevelDetailType = {
  __typename?: 'MatchLivePlayerLevelDetailType';
  level: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchLivePlayerPositionDetailType = {
  __typename?: 'MatchLivePlayerPositionDetailType';
  time: Scalars['Int']['output'];
  x: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
};

export type MatchLivePlayerType = {
  __typename?: 'MatchLivePlayerType';
  backpackId0?: Maybe<Scalars['Short']['output']>;
  backpackId1?: Maybe<Scalars['Short']['output']>;
  backpackId2?: Maybe<Scalars['Short']['output']>;
  baseWinRateValue?: Maybe<Scalars['Float']['output']>;
  experiencePerMinute?: Maybe<Scalars['UShort']['output']>;
  gameVersionId?: Maybe<Scalars['Short']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  goldPerMinute?: Maybe<Scalars['UShort']['output']>;
  goldSpent?: Maybe<Scalars['Int']['output']>;
  hero?: Maybe<HeroType>;
  heroDamage?: Maybe<Scalars['Int']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  impPerMinute?: Maybe<Array<Maybe<MatchLivePlayerImpDetailType>>>;
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  itemId0?: Maybe<Scalars['Short']['output']>;
  itemId1?: Maybe<Scalars['Short']['output']>;
  itemId2?: Maybe<Scalars['Short']['output']>;
  itemId3?: Maybe<Scalars['Short']['output']>;
  itemId4?: Maybe<Scalars['Short']['output']>;
  itemId5?: Maybe<Scalars['Short']['output']>;
  leaverStatus?: Maybe<Scalars['Byte']['output']>;
  level?: Maybe<Scalars['Byte']['output']>;
  matchId?: Maybe<Scalars['Long']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  networth?: Maybe<Scalars['Int']['output']>;
  numAssists?: Maybe<Scalars['Byte']['output']>;
  numDeaths?: Maybe<Scalars['Byte']['output']>;
  numDenies?: Maybe<Scalars['UShort']['output']>;
  numKills?: Maybe<Scalars['Byte']['output']>;
  numLastHits?: Maybe<Scalars['UShort']['output']>;
  playbackData?: Maybe<MatchPlayerLivePlaybackDataType>;
  playerSlot?: Maybe<Scalars['Byte']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  respawnTimer?: Maybe<Scalars['Short']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  towerDamage?: Maybe<Scalars['Int']['output']>;
  ultimateCooldown?: Maybe<Scalars['Short']['output']>;
  ultimateState?: Maybe<Scalars['Short']['output']>;
};

export enum MatchLiveRequestOrderBy {
  AverageRank = 'AVERAGE_RANK',
  GameTime = 'GAME_TIME',
  MatchId = 'MATCH_ID',
  SpectatorCount = 'SPECTATOR_COUNT'
}

export type MatchLiveRequestType = {
  /** Only return Live Matches In Progress that are currently in these states. */
  gameStates?: InputMaybe<Array<InputMaybe<MatchLiveGameState>>>;
  /** The hero id to include in this query, excluding all results that do not include this hero. */
  heroId?: InputMaybe<Scalars['Short']['input']>;
  /** Returns only matches that are no longer active and completed but not yet deleted. */
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the match is a league match or not. */
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  /** Returns only matches that are currently still being updated by the backend. */
  isParsing?: InputMaybe<Scalars['Boolean']['input']>;
  /** Playback Data can contain a lot of information. This will only display the most recent event for each of the fields. */
  lastPlaybackEventOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of league ids to include in this query, excluding all results that do not include one of these leagues. */
  leagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The order in which the data returned will be sorted by. */
  orderBy?: InputMaybe<MatchLiveRequestOrderBy>;
  /** The amount of data to skip before collecting your query. This is useful for Paging. */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The amount to have returned in your query. The maximum of this is always dynamic. Limit :  */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** An array of tier ids to include in this query, excluding all results that do not include one of these tiers. */
  tiers?: InputMaybe<Array<InputMaybe<LeagueTier>>>;
};

export type MatchLiveRoshanDetailType = {
  __typename?: 'MatchLiveRoshanDetailType';
  isAlive?: Maybe<Scalars['Boolean']['output']>;
  respawnTimer?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
};

export type MatchLiveTeamScoreDetailType = {
  __typename?: 'MatchLiveTeamScoreDetailType';
  score?: Maybe<Scalars['Short']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
};

export type MatchLiveType = {
  __typename?: 'MatchLiveType';
  averageRank?: Maybe<Scalars['Int']['output']>;
  buildingState?: Maybe<Scalars['Long']['output']>;
  completed?: Maybe<Scalars['Boolean']['output']>;
  createdDateTime?: Maybe<Scalars['Long']['output']>;
  delay?: Maybe<Scalars['Short']['output']>;
  direScore?: Maybe<Scalars['Byte']['output']>;
  direTeam?: Maybe<TeamType>;
  direTeamId?: Maybe<Scalars['Int']['output']>;
  durationValues?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  gameMinute?: Maybe<Scalars['Short']['output']>;
  gameMode?: Maybe<GameModeEnumType>;
  gameState?: Maybe<MatchLiveGameState>;
  gameTime?: Maybe<Scalars['Int']['output']>;
  insight?: Maybe<MatchLiveInsightType>;
  isParsing?: Maybe<Scalars['Boolean']['output']>;
  isUpdating?: Maybe<Scalars['Boolean']['output']>;
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']['output']>;
  liveWinRateValues?: Maybe<Array<Maybe<MatchLiveWinRateDetailType>>>;
  lobbyId?: Maybe<Scalars['Long']['output']>;
  lobbyType?: Maybe<LobbyTypeEnum>;
  matchId?: Maybe<Scalars['Long']['output']>;
  modifiedDateTime?: Maybe<Scalars['Long']['output']>;
  numHumanPlayers?: Maybe<Scalars['Byte']['output']>;
  parseBeginGameTime?: Maybe<Scalars['Int']['output']>;
  playbackData?: Maybe<MatchLivePlaybackDataType>;
  players?: Maybe<Array<Maybe<MatchLivePlayerType>>>;
  radiantLead?: Maybe<Scalars['Int']['output']>;
  radiantScore?: Maybe<Scalars['Byte']['output']>;
  radiantTeam?: Maybe<TeamType>;
  radiantTeamId?: Maybe<Scalars['Int']['output']>;
  serverSteamId?: Maybe<Scalars['Long']['output']>;
  spectators?: Maybe<Scalars['Int']['output']>;
  winRateValues?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
};

export type MatchLiveWinRateDetailType = {
  __typename?: 'MatchLiveWinRateDetailType';
  time: Scalars['Int']['output'];
  winRate: Scalars['Float']['output'];
};

export type MatchPickBanGroupByType = {
  __typename?: 'MatchPickBanGroupByType';
  banCount?: Maybe<Scalars['Int']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  pickCount?: Maybe<Scalars['Int']['output']>;
};

export type MatchPlaybackDataBuildingEventType = {
  __typename?: 'MatchPlaybackDataBuildingEventType';
  didShrineActivate?: Maybe<Scalars['Boolean']['output']>;
  hp?: Maybe<Scalars['Int']['output']>;
  indexId?: Maybe<Scalars['Int']['output']>;
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  maxHp?: Maybe<Scalars['Int']['output']>;
  npcId?: Maybe<Scalars['Int']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
  type?: Maybe<BuildingType>;
};

export type MatchPlaybackDataCourierEventType = {
  __typename?: 'MatchPlaybackDataCourierEventType';
  events?: Maybe<Array<Maybe<MatchplaybackDataCourierEventObjectType>>>;
  id: Scalars['Int']['output'];
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  ownerHero?: Maybe<Scalars['Int']['output']>;
};

export type MatchPlaybackDataRoshanEventType = {
  __typename?: 'MatchPlaybackDataRoshanEventType';
  createTime?: Maybe<Scalars['Int']['output']>;
  hp?: Maybe<Scalars['Int']['output']>;
  item0?: Maybe<Scalars['Int']['output']>;
  item1?: Maybe<Scalars['Int']['output']>;
  item2?: Maybe<Scalars['Int']['output']>;
  item3?: Maybe<Scalars['Int']['output']>;
  item4?: Maybe<Scalars['Int']['output']>;
  item5?: Maybe<Scalars['Int']['output']>;
  maxHp?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
  totalDamageTaken?: Maybe<Scalars['Int']['output']>;
  x?: Maybe<Scalars['Int']['output']>;
  y?: Maybe<Scalars['Int']['output']>;
};

export type MatchPlaybackDataRuneEventType = {
  __typename?: 'MatchPlaybackDataRuneEventType';
  action: Scalars['Int']['output'];
  indexId: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  positionX: Scalars['Int']['output'];
  positionY: Scalars['Int']['output'];
  rune: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchPlaybackDataTowerDeathEventType = {
  __typename?: 'MatchPlaybackDataTowerDeathEventType';
  dire: Scalars['Int']['output'];
  radiant: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchPlaybackDataType = {
  __typename?: 'MatchPlaybackDataType';
  buildingEvents?: Maybe<Array<Maybe<MatchPlaybackDataBuildingEventType>>>;
  courierEvents?: Maybe<Array<Maybe<MatchPlaybackDataCourierEventType>>>;
  direCaptainHeroId?: Maybe<Scalars['Long']['output']>;
  radiantCaptainHeroId?: Maybe<Scalars['Long']['output']>;
  roshanEvents?: Maybe<Array<Maybe<MatchPlaybackDataRoshanEventType>>>;
  runeEvents?: Maybe<Array<Maybe<MatchPlaybackDataRuneEventType>>>;
  towerDeathEvents?: Maybe<Array<Maybe<MatchPlaybackDataTowerDeathEventType>>>;
  wardEvents?: Maybe<Array<Maybe<MatchPlaybackDataWardEventType>>>;
};

export type MatchPlaybackDataWardEventType = {
  __typename?: 'MatchPlaybackDataWardEventType';
  action?: Maybe<SpawnActionType>;
  fromPlayer?: Maybe<Scalars['Int']['output']>;
  indexId: Scalars['Int']['output'];
  playerDestroyed?: Maybe<Scalars['Int']['output']>;
  positionX: Scalars['Int']['output'];
  positionY: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
  wardType?: Maybe<WardType>;
};

export type MatchPlayerAdditionalUnitType = {
  __typename?: 'MatchPlayerAdditionalUnitType';
  backpack0Id?: Maybe<Scalars['Short']['output']>;
  backpack1Id?: Maybe<Scalars['Short']['output']>;
  backpack2Id?: Maybe<Scalars['Short']['output']>;
  item0Id?: Maybe<Scalars['Short']['output']>;
  item1Id?: Maybe<Scalars['Short']['output']>;
  item2Id?: Maybe<Scalars['Short']['output']>;
  item3Id?: Maybe<Scalars['Short']['output']>;
  item4Id?: Maybe<Scalars['Short']['output']>;
  item5Id?: Maybe<Scalars['Short']['output']>;
  neutral0Id?: Maybe<Scalars['Short']['output']>;
};

export enum MatchPlayerAward {
  Mvp = 'MVP',
  None = 'NONE',
  TopCore = 'TOP_CORE',
  TopSupport = 'TOP_SUPPORT'
}

export type MatchPlayerHeroDamageSourceAbilityReportObjectType = {
  __typename?: 'MatchPlayerHeroDamageSourceAbilityReportObjectType';
  abilityId: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
};

export type MatchPlayerHeroDamageSourceItemReportObjectType = {
  __typename?: 'MatchPlayerHeroDamageSourceItemReportObjectType';
  amount: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  itemId: Scalars['Int']['output'];
};

export type MatchPlayerHeroDamageTargetReportObjectType = {
  __typename?: 'MatchPlayerHeroDamageTargetReportObjectType';
  amount: Scalars['Int']['output'];
  target: Scalars['Int']['output'];
};

export type MatchPlayerHeroDamageTotalRecievedReportObjectType = {
  __typename?: 'MatchPlayerHeroDamageTotalRecievedReportObjectType';
  disableCount: Scalars['Int']['output'];
  disableDuration: Scalars['Int']['output'];
  heal: Scalars['Int']['output'];
  magicalDamage: Scalars['Int']['output'];
  physicalDamage: Scalars['Int']['output'];
  pureDamage: Scalars['Int']['output'];
  slowCount: Scalars['Int']['output'];
  slowDuration: Scalars['Int']['output'];
  stunCount: Scalars['Int']['output'];
  stunDuration: Scalars['Int']['output'];
};

export type MatchPlayerHeroDamageTotalReportObjectType = {
  __typename?: 'MatchPlayerHeroDamageTotalReportObjectType';
  allyHeal: Scalars['Int']['output'];
  disableCount: Scalars['Int']['output'];
  disableDuration: Scalars['Int']['output'];
  magicalDamage: Scalars['Int']['output'];
  physicalDamage: Scalars['Int']['output'];
  pureDamage: Scalars['Int']['output'];
  selfHeal: Scalars['Int']['output'];
  slowCount: Scalars['Int']['output'];
  slowDuration: Scalars['Int']['output'];
  stunCount: Scalars['Int']['output'];
  stunDuration: Scalars['Int']['output'];
};

export type MatchPlayerInventoryObjectType = {
  __typename?: 'MatchPlayerInventoryObjectType';
  charges?: Maybe<Scalars['Int']['output']>;
  itemId: Scalars['Int']['output'];
  secondaryCharges?: Maybe<Scalars['Int']['output']>;
};

export type MatchPlayerInventoryType = {
  __typename?: 'MatchPlayerInventoryType';
  backPack0?: Maybe<MatchPlayerInventoryObjectType>;
  backPack1?: Maybe<MatchPlayerInventoryObjectType>;
  backPack2?: Maybe<MatchPlayerInventoryObjectType>;
  item0?: Maybe<MatchPlayerInventoryObjectType>;
  item1?: Maybe<MatchPlayerInventoryObjectType>;
  item2?: Maybe<MatchPlayerInventoryObjectType>;
  item3?: Maybe<MatchPlayerInventoryObjectType>;
  item4?: Maybe<MatchPlayerInventoryObjectType>;
  item5?: Maybe<MatchPlayerInventoryObjectType>;
  neutral0?: Maybe<MatchPlayerInventoryObjectType>;
};

export type MatchPlayerItemPurchaseEventType = {
  __typename?: 'MatchPlayerItemPurchaseEventType';
  itemId: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchPlayerLivePlaybackDataType = {
  __typename?: 'MatchPlayerLivePlaybackDataType';
  assistEvents?: Maybe<Array<Maybe<MatchLivePlayerAssistDetailType>>>;
  csEvents?: Maybe<Array<Maybe<MatchLivePlayerLastHitDetailType>>>;
  deathEvents?: Maybe<Array<Maybe<MatchLivePlayerDeathDetailType>>>;
  denyEvents?: Maybe<Array<Maybe<MatchLivePlayerDenyDetailType>>>;
  experienceEvents?: Maybe<Array<Maybe<MatchLivePlayerExperienceDetailType>>>;
  goldEvents?: Maybe<Array<Maybe<MatchLivePlayerGoldDetailType>>>;
  inventoryEvents?: Maybe<Array<Maybe<MatchLivePlayerInventoryDetailType>>>;
  killEvents?: Maybe<Array<Maybe<MatchLivePlayerKillDetailType>>>;
  levelEvents?: Maybe<Array<Maybe<MatchLivePlayerLevelDetailType>>>;
  positionEvents?: Maybe<Array<Maybe<MatchLivePlayerPositionDetailType>>>;
};

export type MatchPlayerPlaybackDataType = {
  __typename?: 'MatchPlayerPlaybackDataType';
  abilityActiveLists?: Maybe<Array<Maybe<AbilityActiveListType>>>;
  abilityLearnEvents?: Maybe<Array<Maybe<AbilityLearnEventsType>>>;
  abilityUsedEvents?: Maybe<Array<Maybe<AbilityUsedEventsType>>>;
  assistEvents?: Maybe<Array<Maybe<AssistDetailType>>>;
  buyBackEvents?: Maybe<Array<Maybe<BuyBackDetailType>>>;
  csEvents?: Maybe<Array<Maybe<LastHitDetailType>>>;
  deathEvents?: Maybe<Array<Maybe<DeathDetailType>>>;
  experienceEvents?: Maybe<Array<Maybe<ExperienceDetailType>>>;
  goldEvents?: Maybe<Array<Maybe<GoldDetailType>>>;
  healEvents?: Maybe<Array<Maybe<HealDetailType>>>;
  heroDamageEvents?: Maybe<Array<Maybe<HeroDamageDetailType>>>;
  inventoryEvents?: Maybe<Array<Maybe<InventoryType>>>;
  itemUsedEvents?: Maybe<Array<Maybe<ItemUsedEventType>>>;
  killEvents?: Maybe<Array<Maybe<KillDetailType>>>;
  playerUpdateAttributeEvents?: Maybe<Array<Maybe<PlayerUpdateAttributeDetailType>>>;
  playerUpdateBattleEvents?: Maybe<Array<Maybe<PlayerUpdateBattleDetailType>>>;
  playerUpdateGoldEvents?: Maybe<Array<Maybe<PlayerUpdateGoldDetailType>>>;
  playerUpdateHealthEvents?: Maybe<Array<Maybe<PlayerUpdateHealthDetailType>>>;
  playerUpdateLevelEvents?: Maybe<Array<Maybe<PlayerUpdateLevelDetailType>>>;
  playerUpdatePositionEvents?: Maybe<Array<Maybe<PlayerUpdatePositionDetailType>>>;
  purchaseEvents?: Maybe<Array<Maybe<ItemPurchaseType>>>;
  runeEvents?: Maybe<Array<Maybe<PlayerRuneDetailType>>>;
  spiritBearInventoryEvents?: Maybe<Array<Maybe<SpiritBearInventoryType>>>;
  streakEvents?: Maybe<Array<Maybe<StreakEventType>>>;
  towerDamageEvents?: Maybe<Array<Maybe<TowerDamageDetailType>>>;
};

export enum MatchPlayerPositionType {
  All = 'ALL',
  Filtered = 'FILTERED',
  Position_1 = 'POSITION_1',
  Position_2 = 'POSITION_2',
  Position_3 = 'POSITION_3',
  Position_4 = 'POSITION_4',
  Position_5 = 'POSITION_5',
  Unknown = 'UNKNOWN'
}

export enum MatchPlayerRoleType {
  Core = 'CORE',
  HardSupport = 'HARD_SUPPORT',
  LightSupport = 'LIGHT_SUPPORT',
  Unknown = 'UNKNOWN'
}

export type MatchPlayerSpectatorType = {
  __typename?: 'MatchPlayerSpectatorType';
  isRadiantCoach?: Maybe<Scalars['Boolean']['output']>;
  isVictory?: Maybe<Scalars['Boolean']['output']>;
  steamId?: Maybe<Scalars['Long']['output']>;
};

export type MatchPlayerSpiritBearInventoryType = {
  __typename?: 'MatchPlayerSpiritBearInventoryType';
  backPack0Id?: Maybe<Scalars['Int']['output']>;
  backPack1Id?: Maybe<Scalars['Int']['output']>;
  backPack2Id?: Maybe<Scalars['Int']['output']>;
  item0Id?: Maybe<Scalars['Int']['output']>;
  item1Id?: Maybe<Scalars['Int']['output']>;
  item2Id?: Maybe<Scalars['Int']['output']>;
  item3Id?: Maybe<Scalars['Int']['output']>;
  item4Id?: Maybe<Scalars['Int']['output']>;
  item5Id?: Maybe<Scalars['Int']['output']>;
  neutral0Id?: Maybe<Scalars['Int']['output']>;
};

export type MatchPlayerStatsAbilityCastObjectType = {
  __typename?: 'MatchPlayerStatsAbilityCastObjectType';
  count: Scalars['Int']['output'];
  damage: Scalars['Int']['output'];
  duration?: Maybe<Scalars['Int']['output']>;
  target: Scalars['Int']['output'];
};

export type MatchPlayerStatsAbilityCastReportType = {
  __typename?: 'MatchPlayerStatsAbilityCastReportType';
  abilityId: Scalars['Int']['output'];
  count: Scalars['Int']['output'];
  targets?: Maybe<Array<Maybe<MatchPlayerStatsAbilityCastObjectType>>>;
};

export type MatchPlayerStatsActionReportType = {
  __typename?: 'MatchPlayerStatsActionReportType';
  attackPosition: Scalars['Int']['output'];
  attackTarget: Scalars['Int']['output'];
  castNoTarget: Scalars['Int']['output'];
  castPosition: Scalars['Int']['output'];
  castTarget: Scalars['Int']['output'];
  glyphCast: Scalars['Int']['output'];
  heldPosition: Scalars['Int']['output'];
  moveToPosition: Scalars['Int']['output'];
  moveToTarget: Scalars['Int']['output'];
  pingUsed: Scalars['Int']['output'];
  scanUsed: Scalars['Int']['output'];
};

export type MatchPlayerStatsAllTalkEventType = {
  __typename?: 'MatchPlayerStatsAllTalkEventType';
  message?: Maybe<Scalars['String']['output']>;
  pausedTick: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type MatchPlayerStatsAssistEventType = {
  __typename?: 'MatchPlayerStatsAssistEventType';
  gold?: Maybe<Scalars['Int']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
  xp?: Maybe<Scalars['Int']['output']>;
};

export type MatchPlayerStatsBuffEventType = {
  __typename?: 'MatchPlayerStatsBuffEventType';
  abilityId?: Maybe<Scalars['Int']['output']>;
  itemId?: Maybe<Scalars['Int']['output']>;
  stackCount?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
};

export type MatchPlayerStatsChatWheelEventType = {
  __typename?: 'MatchPlayerStatsChatWheelEventType';
  chatWheelId?: Maybe<Scalars['Short']['output']>;
  pauseTick?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
};

export type MatchPlayerStatsCourierKillEventType = {
  __typename?: 'MatchPlayerStatsCourierKillEventType';
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
};

export type MatchPlayerStatsDeathEventType = {
  __typename?: 'MatchPlayerStatsDeathEventType';
  assist?: Maybe<Array<Scalars['Short']['output']>>;
  attacker?: Maybe<Scalars['Short']['output']>;
  byAbility?: Maybe<Scalars['Int']['output']>;
  byItem?: Maybe<Scalars['Int']['output']>;
  goldFed?: Maybe<Scalars['Int']['output']>;
  goldLost?: Maybe<Scalars['Int']['output']>;
  hasHealAvailable?: Maybe<Scalars['Boolean']['output']>;
  isAttemptTpOut?: Maybe<Scalars['Boolean']['output']>;
  isBurst?: Maybe<Scalars['Boolean']['output']>;
  isDieBack?: Maybe<Scalars['Boolean']['output']>;
  isEngagedOnDeath?: Maybe<Scalars['Boolean']['output']>;
  isTracked?: Maybe<Scalars['Boolean']['output']>;
  isWardWalkThrough?: Maybe<Scalars['Boolean']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
  timeDead?: Maybe<Scalars['Int']['output']>;
  xpFed?: Maybe<Scalars['Int']['output']>;
};

export type MatchPlayerStatsFarmDistributionObjectType = {
  __typename?: 'MatchPlayerStatsFarmDistributionObjectType';
  count: Scalars['Int']['output'];
  gold?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  xp?: Maybe<Scalars['Int']['output']>;
};

export type MatchPlayerStatsFarmDistributionReportType = {
  __typename?: 'MatchPlayerStatsFarmDistributionReportType';
  abandonGold: Scalars['Int']['output'];
  ancientLocation?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  bountyGold?: Maybe<MatchPlayerStatsFarmDistributionObjectType>;
  buildings?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  buyBackGold: Scalars['Int']['output'];
  creepLocation?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  creepType?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  neutralLocation?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
  other?: Maybe<Array<Maybe<MatchPlayerStatsFarmDistributionObjectType>>>;
};

export type MatchPlayerStatsHeroDamageReportType = {
  __typename?: 'MatchPlayerStatsHeroDamageReportType';
  dealtSourceAbility?: Maybe<Array<Maybe<MatchPlayerHeroDamageSourceAbilityReportObjectType>>>;
  dealtSourceItem?: Maybe<Array<Maybe<MatchPlayerHeroDamageSourceItemReportObjectType>>>;
  dealtTargets?: Maybe<Array<Maybe<MatchPlayerHeroDamageTargetReportObjectType>>>;
  dealtTotal?: Maybe<MatchPlayerHeroDamageTotalReportObjectType>;
  receivedSourceAbility?: Maybe<Array<Maybe<MatchPlayerHeroDamageSourceAbilityReportObjectType>>>;
  receivedSourceItem?: Maybe<Array<Maybe<MatchPlayerHeroDamageSourceItemReportObjectType>>>;
  receivedTargets?: Maybe<Array<Maybe<MatchPlayerHeroDamageTargetReportObjectType>>>;
  receivedTotal?: Maybe<MatchPlayerHeroDamageTotalRecievedReportObjectType>;
};

export type MatchPlayerStatsItemUsedEventType = {
  __typename?: 'MatchPlayerStatsItemUsedEventType';
  count?: Maybe<Scalars['Int']['output']>;
  itemId: Scalars['Int']['output'];
};

export type MatchPlayerStatsKillEventType = {
  __typename?: 'MatchPlayerStatsKillEventType';
  assist?: Maybe<Array<Scalars['Int']['output']>>;
  byAbility?: Maybe<Scalars['Int']['output']>;
  byItem?: Maybe<Scalars['Int']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  isGank?: Maybe<Scalars['Boolean']['output']>;
  isInvisible?: Maybe<Scalars['Boolean']['output']>;
  isSmoke?: Maybe<Scalars['Boolean']['output']>;
  isSolo?: Maybe<Scalars['Boolean']['output']>;
  isTpRecently?: Maybe<Scalars['Boolean']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  target?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
  xp?: Maybe<Scalars['Int']['output']>;
};

export type MatchPlayerStatsLocationReportType = {
  __typename?: 'MatchPlayerStatsLocationReportType';
  positionX: Scalars['Int']['output'];
  positionY: Scalars['Int']['output'];
};

export type MatchPlayerStatsRuneEventType = {
  __typename?: 'MatchPlayerStatsRuneEventType';
  action?: Maybe<RuneAction>;
  gold?: Maybe<Scalars['Int']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  rune?: Maybe<RuneEnums>;
  time: Scalars['Int']['output'];
};

export type MatchPlayerStatsTowerDamageReportType = {
  __typename?: 'MatchPlayerStatsTowerDamageReportType';
  damage: Scalars['Int']['output'];
  damageCreeps: Scalars['Int']['output'];
  damageFromAbility: Scalars['Int']['output'];
  npcId: Scalars['Int']['output'];
};

export type MatchPlayerStatsType = {
  __typename?: 'MatchPlayerStatsType';
  abilityCastReport?: Maybe<Array<Maybe<MatchPlayerStatsAbilityCastReportType>>>;
  actionReport?: Maybe<MatchPlayerStatsActionReportType>;
  actionsPerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  allTalks?: Maybe<Array<Maybe<MatchPlayerStatsAllTalkEventType>>>;
  assistEvents?: Maybe<Array<Maybe<MatchPlayerStatsAssistEventType>>>;
  campStack?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  chatWheels?: Maybe<Array<Maybe<MatchPlayerStatsChatWheelEventType>>>;
  courierKills?: Maybe<Array<Maybe<MatchPlayerStatsCourierKillEventType>>>;
  deathEvents?: Maybe<Array<Maybe<MatchPlayerStatsDeathEventType>>>;
  deniesPerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  experiencePerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  farmDistributionReport?: Maybe<MatchPlayerStatsFarmDistributionReportType>;
  gameVersionId?: Maybe<Scalars['Short']['output']>;
  goldPerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  healPerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  heroDamagePerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  heroDamageReceivedPerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  heroDamageReport?: Maybe<MatchPlayerStatsHeroDamageReportType>;
  impPerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  inventoryReport?: Maybe<Array<Maybe<MatchPlayerInventoryType>>>;
  itemPurchases?: Maybe<Array<Maybe<MatchPlayerItemPurchaseEventType>>>;
  itemUsed?: Maybe<Array<Maybe<MatchPlayerStatsItemUsedEventType>>>;
  killEvents?: Maybe<Array<Maybe<MatchPlayerStatsKillEventType>>>;
  lastHitsPerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  level?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  locationReport?: Maybe<Array<Maybe<MatchPlayerStatsLocationReportType>>>;
  matchId?: Maybe<Scalars['Long']['output']>;
  matchPlayerBuffEvent?: Maybe<Array<Maybe<MatchPlayerStatsBuffEventType>>>;
  networthPerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  runes?: Maybe<Array<Maybe<MatchPlayerStatsRuneEventType>>>;
  spiritBearInventoryReport?: Maybe<Array<Maybe<MatchPlayerSpiritBearInventoryType>>>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  towerDamagePerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  towerDamageReport?: Maybe<Array<Maybe<MatchPlayerStatsTowerDamageReportType>>>;
  tripsFountainPerMinute?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  wardDestruction?: Maybe<Array<Maybe<MatchPlayerWardDestuctionObjectType>>>;
  wards?: Maybe<Array<Maybe<MatchPlayerStatsWardEventType>>>;
};

export type MatchPlayerStatsWardEventType = {
  __typename?: 'MatchPlayerStatsWardEventType';
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export enum MatchPlayerTeamPickOrderType {
  FifthPick = 'FIFTH_PICK',
  FirstPick = 'FIRST_PICK',
  FourthPick = 'FOURTH_PICK',
  SecondPick = 'SECOND_PICK',
  ThirdPick = 'THIRD_PICK'
}

export type MatchPlayerType = {
  __typename?: 'MatchPlayerType';
  abilities?: Maybe<Array<Maybe<PlayerAbilityType>>>;
  additionalUnit?: Maybe<MatchPlayerAdditionalUnitType>;
  assists?: Maybe<Scalars['Byte']['output']>;
  award?: Maybe<MatchPlayerAward>;
  backpack0Id?: Maybe<Scalars['Short']['output']>;
  backpack1Id?: Maybe<Scalars['Short']['output']>;
  backpack2Id?: Maybe<Scalars['Short']['output']>;
  behavior?: Maybe<Scalars['Short']['output']>;
  deaths?: Maybe<Scalars['Byte']['output']>;
  /** Gets the players of Dota which have DotaPlus and have a high level hero. */
  dotaPlus?: Maybe<HeroDotaPlusLeaderboardRankType>;
  dotaPlusHeroXp?: Maybe<Scalars['Int']['output']>;
  experiencePerMinute?: Maybe<Scalars['Short']['output']>;
  gameVersionId?: Maybe<Scalars['Short']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  goldPerMinute?: Maybe<Scalars['Short']['output']>;
  goldSpent?: Maybe<Scalars['Int']['output']>;
  hero?: Maybe<HeroType>;
  /** Detailed output of data per minute for each hero. */
  heroAverage?: Maybe<Array<Maybe<HeroPositionTimeDetailType>>>;
  heroDamage?: Maybe<Scalars['Int']['output']>;
  heroHealing?: Maybe<Scalars['Int']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  imp?: Maybe<Scalars['Short']['output']>;
  intentionalFeeding?: Maybe<Scalars['Boolean']['output']>;
  invisibleSeconds?: Maybe<Scalars['Int']['output']>;
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  isRandom?: Maybe<Scalars['Boolean']['output']>;
  isVictory?: Maybe<Scalars['Boolean']['output']>;
  item0Id?: Maybe<Scalars['Short']['output']>;
  item1Id?: Maybe<Scalars['Short']['output']>;
  item2Id?: Maybe<Scalars['Short']['output']>;
  item3Id?: Maybe<Scalars['Short']['output']>;
  item4Id?: Maybe<Scalars['Short']['output']>;
  item5Id?: Maybe<Scalars['Short']['output']>;
  kills?: Maybe<Scalars['Byte']['output']>;
  lane?: Maybe<MatchLaneType>;
  leaverStatus?: Maybe<LeaverStatusEnum>;
  level?: Maybe<Scalars['Byte']['output']>;
  match?: Maybe<MatchType>;
  matchId?: Maybe<Scalars['Long']['output']>;
  networth?: Maybe<Scalars['Int']['output']>;
  /** The item id of the dedicated neutral item slot (7.24 and after). From game versions 7.23 to 7.24, this was the BackPack3Id (the 4th backpack slot item id). */
  neutral0Id?: Maybe<Scalars['Short']['output']>;
  numDenies?: Maybe<Scalars['Short']['output']>;
  numLastHits?: Maybe<Scalars['Short']['output']>;
  partyId?: Maybe<Scalars['Byte']['output']>;
  playbackData?: Maybe<MatchPlayerPlaybackDataType>;
  playerSlot?: Maybe<Scalars['Byte']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  role?: Maybe<MatchPlayerRoleType>;
  roleBasic?: Maybe<MatchPlayerRoleType>;
  stats?: Maybe<MatchPlayerStatsType>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  streakPrediction?: Maybe<Scalars['Short']['output']>;
  towerDamage?: Maybe<Scalars['Int']['output']>;
  variant?: Maybe<Scalars['Byte']['output']>;
};


export type MatchPlayerTypeAbilitiesArgs = {
  gameVerionId?: InputMaybe<Scalars['Int']['input']>;
};

export type MatchPlayerWardDestuctionObjectType = {
  __typename?: 'MatchPlayerWardDestuctionObjectType';
  experience?: Maybe<Scalars['Int']['output']>;
  gold?: Maybe<Scalars['Int']['output']>;
  isWard?: Maybe<Scalars['Boolean']['output']>;
  time: Scalars['Int']['output'];
};

export type MatchReplayUploadHeroDuoSummaryType = {
  __typename?: 'MatchReplayUploadHeroDuoSummaryType';
  heroId?: Maybe<Scalars['Short']['output']>;
  matchCountAgainst: Scalars['Int']['output'];
  matchCountWith: Scalars['Int']['output'];
  winCountAgainst: Scalars['Int']['output'];
  winCountWith: Scalars['Int']['output'];
};

export type MatchReplayUploadHeroSummaryType = {
  __typename?: 'MatchReplayUploadHeroSummaryType';
  banCountAgainst: Scalars['Int']['output'];
  banCountWith: Scalars['Int']['output'];
  duos?: Maybe<Array<Maybe<MatchReplayUploadHeroDuoSummaryType>>>;
  heroId?: Maybe<Scalars['Short']['output']>;
  matchCountAgainst: Scalars['Int']['output'];
  matchCountWith: Scalars['Int']['output'];
  winCountAgainst: Scalars['Int']['output'];
  winCountWith: Scalars['Int']['output'];
};

export type MatchReplayUploadMatchType = {
  __typename?: 'MatchReplayUploadMatchType';
  didRadiantWin: Scalars['Boolean']['output'];
  direKills?: Maybe<Scalars['Byte']['output']>;
  direTeam?: Maybe<TeamType>;
  direTeamId?: Maybe<Scalars['Int']['output']>;
  durationMinutes: Scalars['Int']['output'];
  durationSeconds?: Maybe<Scalars['Short']['output']>;
  endDateTime?: Maybe<Scalars['DateTime']['output']>;
  fileName: Scalars['String']['output'];
  gameMode?: Maybe<Scalars['Byte']['output']>;
  gameVersionId: Scalars['Int']['output'];
  id?: Maybe<Scalars['Long']['output']>;
  isActive: Scalars['Boolean']['output'];
  isComplete: Scalars['Boolean']['output'];
  isRadiantFirstPick: Scalars['Boolean']['output'];
  isValidated: Scalars['Boolean']['output'];
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']['output']>;
  lobbyType?: Maybe<Scalars['Byte']['output']>;
  matchUploadTeamId: Scalars['Long']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  numHumanPlayers?: Maybe<Scalars['Byte']['output']>;
  numHumanSpectators?: Maybe<Scalars['Byte']['output']>;
  pickBans?: Maybe<Array<Maybe<MatchReplayUploadPickBanType>>>;
  players?: Maybe<Array<Maybe<MatchReplayUploadPlayerType>>>;
  radiantKills?: Maybe<Scalars['Byte']['output']>;
  radiantTeam?: Maybe<TeamType>;
  radiantTeamId?: Maybe<Scalars['Int']['output']>;
  seriesId?: Maybe<Scalars['Long']['output']>;
  spectators?: Maybe<Array<Maybe<Scalars['Long']['output']>>>;
  startDateTime?: Maybe<Scalars['DateTime']['output']>;
  uploaderCaptainJackIdentityId?: Maybe<Scalars['Guid']['output']>;
};

export type MatchReplayUploadOverviewType = {
  __typename?: 'MatchReplayUploadOverviewType';
  matchCount: Scalars['Int']['output'];
  matches?: Maybe<Array<Maybe<MatchReplayUploadMatchType>>>;
  winCount: Scalars['Int']['output'];
};

export type MatchReplayUploadPickBanType = {
  __typename?: 'MatchReplayUploadPickBanType';
  bannedHeroId?: Maybe<Scalars['Short']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  isPick: Scalars['Boolean']['output'];
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  order?: Maybe<Scalars['Byte']['output']>;
  playerSlot?: Maybe<Scalars['Byte']['output']>;
  time?: Maybe<Scalars['Byte']['output']>;
  wasBannedSuccessfully: Scalars['Boolean']['output'];
};

export type MatchReplayUploadPlayerStatsItemsType = {
  __typename?: 'MatchReplayUploadPlayerStatsItemsType';
  backpack0IdList?: Maybe<Array<Maybe<Scalars['Byte']['output']>>>;
  backpack1IdList?: Maybe<Array<Maybe<Scalars['Byte']['output']>>>;
  backpack2IdList?: Maybe<Array<Maybe<Scalars['Byte']['output']>>>;
  item0IdList?: Maybe<Array<Maybe<Scalars['Byte']['output']>>>;
  item1IdList?: Maybe<Array<Maybe<Scalars['Byte']['output']>>>;
  item2IdList?: Maybe<Array<Maybe<Scalars['Byte']['output']>>>;
  item3IdList?: Maybe<Array<Maybe<Scalars['Byte']['output']>>>;
  item4IdList?: Maybe<Array<Maybe<Scalars['Byte']['output']>>>;
  item5IdList?: Maybe<Array<Maybe<Scalars['Byte']['output']>>>;
};

export type MatchReplayUploadPlayerType = {
  __typename?: 'MatchReplayUploadPlayerType';
  agilityTotalList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  assists?: Maybe<Scalars['Byte']['output']>;
  assistsList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  backpack0Id?: Maybe<Scalars['Short']['output']>;
  backpack1Id?: Maybe<Scalars['Short']['output']>;
  backpack2Id?: Maybe<Scalars['Short']['output']>;
  bkbChargesUsedList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  campStackList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  claimedDenyCountList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  claimedMissCountList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  commandsIssuedList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  creepKillGoldList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  creepStackList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  damageBonusList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  damageMaxList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  damageMinList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  deaths?: Maybe<Scalars['Byte']['output']>;
  deathsList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  denies?: Maybe<Scalars['Short']['output']>;
  denyCountList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  experiencePerMinute?: Maybe<Scalars['Short']['output']>;
  goldLostToDeathList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  goldPerMinute?: Maybe<Scalars['Short']['output']>;
  goldSpentOnBuybacks?: Maybe<Scalars['Int']['output']>;
  goldSpentOnBuybacksList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  goldSpentOnConsumables?: Maybe<Scalars['Int']['output']>;
  goldSpentOnConsumablesList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  goldSpentOnItems?: Maybe<Scalars['Int']['output']>;
  goldSpentOnItemsList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  goldSpentOnSupport?: Maybe<Scalars['Int']['output']>;
  goldSpentOnSupportList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  heroDamage: Scalars['Int']['output'];
  heroDamageList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  heroHealing: Scalars['Int']['output'];
  heroHealingList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  heroId?: Maybe<Scalars['Short']['output']>;
  heroKillGoldList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  incomeGoldList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  intellectTotalList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  isDire: Scalars['Boolean']['output'];
  isRadiant: Scalars['Boolean']['output'];
  isVictory: Scalars['Boolean']['output'];
  item0Id?: Maybe<Scalars['Short']['output']>;
  item1Id?: Maybe<Scalars['Short']['output']>;
  item2Id?: Maybe<Scalars['Short']['output']>;
  item3Id?: Maybe<Scalars['Short']['output']>;
  item4Id?: Maybe<Scalars['Short']['output']>;
  item5Id?: Maybe<Scalars['Short']['output']>;
  items?: Maybe<MatchReplayUploadPlayerStatsItemsType>;
  kills?: Maybe<Scalars['Byte']['output']>;
  killsList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  lane?: Maybe<MatchLaneType>;
  lastHitCountList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  lastHitMultiKillList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  lastHitStreakList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  lastHits?: Maybe<Scalars['Short']['output']>;
  level?: Maybe<Scalars['Byte']['output']>;
  levelList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  matchId?: Maybe<Scalars['Long']['output']>;
  matchUploadTeamId: Scalars['Long']['output'];
  maxHealthList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  maxManaList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  missCountList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  nearbyCreepDeathCountList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  networth: Scalars['Int']['output'];
  networthList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  observerWardsPlacedList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  pickOrder?: Maybe<Scalars['Byte']['output']>;
  playerSlot?: Maybe<Scalars['Byte']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  reliableGoldList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  role?: Maybe<MatchPlayerRoleType>;
  roshanKillsList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  runePicksupList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  sentryWardsPlacedList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  sharedGoldList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  streakList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  strengthTotalList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  stunsList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  teamPickOrder?: Maybe<MatchPlayerTeamPickOrderType>;
  teamSlot?: Maybe<Scalars['Byte']['output']>;
  totalEarnedGoldList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  totalEarnedXpList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  totalGoldSpent: Scalars['Int']['output'];
  towerDamage: Scalars['Int']['output'];
  towerDamageList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  towerKills?: Maybe<Scalars['Short']['output']>;
  towerKillsList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  unreliableGoldList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  wardsDestroyedList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  wardsPurchasedList?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export type MatchReplayUploadTeamMemberType = {
  __typename?: 'MatchReplayUploadTeamMemberType';
  captainJackIdentityId?: Maybe<Scalars['Guid']['output']>;
  isAdmin: Scalars['Boolean']['output'];
  isDefaultTeam: Scalars['Boolean']['output'];
  matchUploadTeamId: Scalars['Long']['output'];
  steamAccount?: Maybe<SteamAccountType>;
};

export type MatchReplayUploadTeamType = {
  __typename?: 'MatchReplayUploadTeamType';
  creatorCaptainJackIdentityId?: Maybe<Scalars['Guid']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['Long']['output'];
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  members?: Maybe<Array<Maybe<MatchReplayUploadTeamMemberType>>>;
  name: Scalars['String']['output'];
  team?: Maybe<TeamType>;
  teamId: Scalars['Int']['output'];
};

export type MatchStatsChatEventType = {
  __typename?: 'MatchStatsChatEventType';
  fromHeroId?: Maybe<Scalars['Short']['output']>;
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  pausedTick?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
  toHeroId?: Maybe<Scalars['Short']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Short']['output']>;
};

export type MatchStatsLaneReportFactionLaneObject = {
  __typename?: 'MatchStatsLaneReportFactionLaneObject';
  denyCount: Scalars['Int']['output'];
  meleeCount: Scalars['Int']['output'];
  neutralCount: Scalars['Int']['output'];
  rangeCount: Scalars['Int']['output'];
  siegeCount: Scalars['Int']['output'];
};

export type MatchStatsLaneReportFactionObjectType = {
  __typename?: 'MatchStatsLaneReportFactionObjectType';
  midLane?: Maybe<MatchStatsLaneReportFactionLaneObject>;
  offLane?: Maybe<MatchStatsLaneReportFactionLaneObject>;
  safeLane?: Maybe<MatchStatsLaneReportFactionLaneObject>;
};

export type MatchStatsLaneReportType = {
  __typename?: 'MatchStatsLaneReportType';
  dire?: Maybe<Array<Maybe<MatchStatsLaneReportFactionObjectType>>>;
  radiant?: Maybe<Array<Maybe<MatchStatsLaneReportFactionObjectType>>>;
};

export type MatchStatsOutpostReportObjectType = {
  __typename?: 'MatchStatsOutpostReportObjectType';
  isControlledByRadiant: Scalars['Boolean']['output'];
  isRadiantSide: Scalars['Boolean']['output'];
  npcId?: Maybe<Scalars['Int']['output']>;
};

export type MatchStatsPickBanType = {
  __typename?: 'MatchStatsPickBanType';
  adjustedWinRate?: Maybe<Scalars['Byte']['output']>;
  bannedHeroId?: Maybe<Scalars['Short']['output']>;
  baseWinRate?: Maybe<Scalars['Byte']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  isCaptain?: Maybe<Scalars['Boolean']['output']>;
  isPick: Scalars['Boolean']['output'];
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  letter?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  playerIndex?: Maybe<Scalars['Int']['output']>;
  wasBannedSuccessfully?: Maybe<Scalars['Boolean']['output']>;
};

export type MatchStatsTowerDeathType = {
  __typename?: 'MatchStatsTowerDeathType';
  attacker?: Maybe<Scalars['Short']['output']>;
  isRadiant?: Maybe<Scalars['Boolean']['output']>;
  npcId?: Maybe<Scalars['Short']['output']>;
  time?: Maybe<Scalars['Int']['output']>;
};

export type MatchStatsTowerReportObjectType = {
  __typename?: 'MatchStatsTowerReportObjectType';
  hp?: Maybe<Scalars['Int']['output']>;
  npcId?: Maybe<Scalars['Int']['output']>;
};

export type MatchStatsTowerReportType = {
  __typename?: 'MatchStatsTowerReportType';
  outposts?: Maybe<Array<Maybe<MatchStatsOutpostReportObjectType>>>;
  towers?: Maybe<Array<Maybe<MatchStatsTowerReportObjectType>>>;
};

export type MatchType = {
  __typename?: 'MatchType';
  actualRank?: Maybe<Scalars['Short']['output']>;
  analysisOutcome?: Maybe<MatchAnalysisOutcomeType>;
  averageImp?: Maybe<Scalars['Short']['output']>;
  averageRank?: Maybe<Scalars['Short']['output']>;
  barracksStatusDire?: Maybe<Scalars['Short']['output']>;
  barracksStatusRadiant?: Maybe<Scalars['Short']['output']>;
  bottomLaneOutcome?: Maybe<LaneOutcomeEnums>;
  bracket?: Maybe<Scalars['Byte']['output']>;
  chatEvents?: Maybe<Array<Maybe<MatchStatsChatEventType>>>;
  clusterId?: Maybe<Scalars['Int']['output']>;
  didRadiantWin?: Maybe<Scalars['Boolean']['output']>;
  didRequestDownload?: Maybe<Scalars['Boolean']['output']>;
  /** This begins at -60 to 0 seconds (Index 0). */
  direKills?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  direTeam?: Maybe<TeamType>;
  direTeamId?: Maybe<Scalars['Int']['output']>;
  durationSeconds?: Maybe<Scalars['Int']['output']>;
  endDateTime?: Maybe<Scalars['Long']['output']>;
  firstBloodTime?: Maybe<Scalars['Int']['output']>;
  gameMode?: Maybe<GameModeEnumType>;
  gameVersionId?: Maybe<Scalars['Short']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  isStats?: Maybe<Scalars['Boolean']['output']>;
  laneReport?: Maybe<MatchStatsLaneReportType>;
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']['output']>;
  lobbyType?: Maybe<LobbyTypeEnum>;
  midLaneOutcome?: Maybe<LaneOutcomeEnums>;
  numHumanPlayers?: Maybe<Scalars['Int']['output']>;
  parsedDateTime?: Maybe<Scalars['Long']['output']>;
  /** This begins at -60 to 0 seconds (Index 0). */
  pickBans?: Maybe<Array<Maybe<MatchStatsPickBanType>>>;
  playbackData?: Maybe<MatchPlaybackDataType>;
  players?: Maybe<Array<Maybe<MatchPlayerType>>>;
  predictedOutcomeWeight?: Maybe<Scalars['Byte']['output']>;
  predictedWinRates?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
  /** This begins at -60 to 0 seconds (Index 0). */
  radiantExperienceLeads?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** This begins at -60 to 0 seconds (Index 0). */
  radiantKills?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** This begins at -60 to 0 seconds (Index 0). */
  radiantNetworthLeads?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  radiantTeam?: Maybe<TeamType>;
  radiantTeamId?: Maybe<Scalars['Int']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  regionId?: Maybe<Scalars['Byte']['output']>;
  replaySalt?: Maybe<Scalars['Long']['output']>;
  sequenceNum?: Maybe<Scalars['Long']['output']>;
  series?: Maybe<SeriesType>;
  seriesId?: Maybe<Scalars['Long']['output']>;
  spectators?: Maybe<Array<Maybe<MatchPlayerSpectatorType>>>;
  startDateTime?: Maybe<Scalars['Long']['output']>;
  statsDateTime?: Maybe<Scalars['Long']['output']>;
  topLaneOutcome?: Maybe<LaneOutcomeEnums>;
  tournamentId?: Maybe<Scalars['Int']['output']>;
  tournamentRound?: Maybe<Scalars['Short']['output']>;
  towerDeaths?: Maybe<Array<Maybe<MatchStatsTowerDeathType>>>;
  towerStatus?: Maybe<Array<Maybe<MatchStatsTowerReportType>>>;
  towerStatusDire?: Maybe<Scalars['Int']['output']>;
  towerStatusRadiant?: Maybe<Scalars['Int']['output']>;
  winRates?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
};


export type MatchTypePlayersArgs = {
  steamAccountId?: InputMaybe<Scalars['Long']['input']>;
};

export type MatchesDayType = {
  __typename?: 'MatchesDayType';
  day: Scalars['Long']['output'];
  matchCount: Scalars['Int']['output'];
};

export type MatchesGameVersionType = {
  __typename?: 'MatchesGameVersionType';
  gameVersionId: Scalars['Short']['output'];
  matchCount: Scalars['Int']['output'];
};

export type MatchesHourType = {
  __typename?: 'MatchesHourType';
  hour: Scalars['Long']['output'];
  matchCount: Scalars['Int']['output'];
};

export type MatchesMonthType = {
  __typename?: 'MatchesMonthType';
  matchCount: Scalars['Int']['output'];
  month: Scalars['Long']['output'];
};

export type MatchesWeekType = {
  __typename?: 'MatchesWeekType';
  matchCount: Scalars['Int']['output'];
  week: Scalars['Long']['output'];
};

export type MatchmakingStatsType = {
  __typename?: 'MatchmakingStatsType';
  australia: Scalars['Int']['output'];
  austria: Scalars['Int']['output'];
  brazil: Scalars['Int']['output'];
  chile: Scalars['Int']['output'];
  dubai: Scalars['Int']['output'];
  europe: Scalars['Int']['output'];
  india: Scalars['Int']['output'];
  japan: Scalars['Int']['output'];
  perfectWorldTelecom: Scalars['Int']['output'];
  perfectWorldTelecomGuangdong: Scalars['Int']['output'];
  perfectWorldTelecomWuhan: Scalars['Int']['output'];
  perfectWorldTelecomZhejiang: Scalars['Int']['output'];
  perfectWorldUnicom: Scalars['Int']['output'];
  perfectWorldUnicomTianjin: Scalars['Int']['output'];
  peru: Scalars['Int']['output'];
  singapore: Scalars['Int']['output'];
  southAfrica: Scalars['Int']['output'];
  stockholm: Scalars['Int']['output'];
  taiwan: Scalars['Int']['output'];
  time: Scalars['Long']['output'];
  uSEast: Scalars['Int']['output'];
  uSWest: Scalars['Int']['output'];
};

export type MatchplaybackDataCourierEventObjectType = {
  __typename?: 'MatchplaybackDataCourierEventObjectType';
  didCastBoost?: Maybe<Scalars['Boolean']['output']>;
  hp?: Maybe<Scalars['Int']['output']>;
  isFlying?: Maybe<Scalars['Boolean']['output']>;
  item0Id?: Maybe<Scalars['Int']['output']>;
  item1Id?: Maybe<Scalars['Int']['output']>;
  item2Id?: Maybe<Scalars['Int']['output']>;
  item3Id?: Maybe<Scalars['Int']['output']>;
  item4Id?: Maybe<Scalars['Int']['output']>;
  item5Id?: Maybe<Scalars['Int']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  respawnTime?: Maybe<Scalars['Int']['output']>;
  time: Scalars['Int']['output'];
};

export type MergeProSteamAccountRequestType = {
  name?: InputMaybe<Scalars['String']['input']>;
  realName?: InputMaybe<Scalars['String']['input']>;
  steamAccountId?: InputMaybe<Scalars['Long']['input']>;
};

export type ModifierType = {
  __typename?: 'ModifierType';
  buffDuration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Short']['output']>;
  isArmorReduce?: Maybe<Scalars['Boolean']['output']>;
  isAttackReduce?: Maybe<Scalars['Boolean']['output']>;
  isAttackSlow?: Maybe<Scalars['Boolean']['output']>;
  isBanished?: Maybe<Scalars['Boolean']['output']>;
  isBlind?: Maybe<Scalars['Boolean']['output']>;
  isBreak?: Maybe<Scalars['Boolean']['output']>;
  isCyclone?: Maybe<Scalars['Boolean']['output']>;
  isDamageAmplified?: Maybe<Scalars['Boolean']['output']>;
  isDisarm?: Maybe<Scalars['Boolean']['output']>;
  isEthereal?: Maybe<Scalars['Boolean']['output']>;
  isHex?: Maybe<Scalars['Boolean']['output']>;
  isInvisible?: Maybe<Scalars['Boolean']['output']>;
  isItem?: Maybe<Scalars['Boolean']['output']>;
  isKnockback?: Maybe<Scalars['Boolean']['output']>;
  isMovementDebuff?: Maybe<Scalars['Boolean']['output']>;
  isMovementSlow?: Maybe<Scalars['Boolean']['output']>;
  isMute?: Maybe<Scalars['Boolean']['output']>;
  isRoot?: Maybe<Scalars['Boolean']['output']>;
  isShackle?: Maybe<Scalars['Boolean']['output']>;
  isSilence?: Maybe<Scalars['Boolean']['output']>;
  isSleep?: Maybe<Scalars['Boolean']['output']>;
  isStun?: Maybe<Scalars['Boolean']['output']>;
  isTaunt?: Maybe<Scalars['Boolean']['output']>;
  isWeaken?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum NeutralItemTierEnum {
  Tier_1 = 'TIER_1',
  Tier_2 = 'TIER_2',
  Tier_3 = 'TIER_3',
  Tier_4 = 'TIER_4',
  Tier_5 = 'TIER_5'
}

export type NewsItemType = {
  __typename?: 'NewsItemType';
  author: Scalars['String']['output'];
  contents: Scalars['String']['output'];
  date?: Maybe<Scalars['Long']['output']>;
  feedLabel: Scalars['String']['output'];
  feedName: Scalars['String']['output'];
  id?: Maybe<Scalars['Long']['output']>;
  title: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type NpcStatType = {
  __typename?: 'NpcStatType';
  attackAnimationPoint?: Maybe<Scalars['Float']['output']>;
  attackDamageMax?: Maybe<Scalars['Float']['output']>;
  attackDamageMin?: Maybe<Scalars['Float']['output']>;
  attackDesire?: Maybe<Scalars['Float']['output']>;
  attackRange?: Maybe<Scalars['Float']['output']>;
  attackRangeBuffer?: Maybe<Scalars['Float']['output']>;
  attackRate?: Maybe<Scalars['Float']['output']>;
  autoAttacksByDefault?: Maybe<Scalars['Boolean']['output']>;
  canBeDominated?: Maybe<Scalars['Boolean']['output']>;
  combatClassAttack?: Maybe<Scalars['String']['output']>;
  combatClassDefend?: Maybe<Scalars['String']['output']>;
  dayTimeVision?: Maybe<Scalars['Float']['output']>;
  hasInventory?: Maybe<Scalars['Boolean']['output']>;
  isAncient?: Maybe<Scalars['Boolean']['output']>;
  isNeutralUnitType?: Maybe<Scalars['Boolean']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  movementSpeed?: Maybe<Scalars['Float']['output']>;
  movementTurnRate?: Maybe<Scalars['Float']['output']>;
  nightTimeVision?: Maybe<Scalars['Float']['output']>;
  projectileSpeed?: Maybe<Scalars['Float']['output']>;
  statusHealth?: Maybe<Scalars['Float']['output']>;
  statusHealthRegen?: Maybe<Scalars['Float']['output']>;
  statusMana?: Maybe<Scalars['Float']['output']>;
  statusManaRegen?: Maybe<Scalars['Float']['output']>;
  teamName?: Maybe<Scalars['String']['output']>;
  unitRelationshipClass?: Maybe<Scalars['String']['output']>;
  wakesNeutrals?: Maybe<Scalars['Boolean']['output']>;
};

export type NpcType = {
  __typename?: 'NpcType';
  id?: Maybe<Scalars['Short']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stat?: Maybe<NpcStatType>;
};

export type PageAghanimQuery = {
  __typename?: 'PageAghanimQuery';
  /** Returns all the Abilities for a Hero on the Event Aghanim Labyrinth. */
  heroAbility?: Maybe<Array<Maybe<AghanimLabHeroAbilityType>>>;
  /** Returns all the combinations of Heroes and their success on the Event Aghanim Labyrinth. */
  heroComposition?: Maybe<AghanimLabHeroCompositionType>;
  /** Returns all the combinations of Heroes and their success on the Event Aghanim Labyrinth. */
  heroCompositions?: Maybe<Array<Maybe<AghanimLabHeroCompositionType>>>;
  /** Returns a match by Id based on the Event Aghanim Labyrinth. */
  match?: Maybe<AghanimLabMatchType>;
  /** Returns a list of matches by based on the Event Aghanim Labyrinth. */
  matches?: Maybe<Array<Maybe<AghanimLabMatchType>>>;
  /** Returns all the Room Types by Difficulty for the Event Aghanim Labyrinth. */
  room?: Maybe<Array<Maybe<AghanimLabRoomType>>>;
  /** Returns all the Room Modifiers by Difficulty for the Event Aghanim Labyrinth. */
  roomModifier?: Maybe<Array<Maybe<Ti2020CustomGameRoomModifierType>>>;
  /** Returns the last 3 days winrate for each hero by Difficulty in the Event Aghanim Labyrinth. */
  winRate?: Maybe<AghanimLabHeroWinRateType>;
};


export type PageAghanimQueryHeroAbilityArgs = {
  difficulty: AghanimLabMatchDifficultyEnum;
};


export type PageAghanimQueryHeroCompositionArgs = {
  difficulty: AghanimLabMatchDifficultyEnum;
  heroIds: Array<InputMaybe<Scalars['Short']['input']>>;
};


export type PageAghanimQueryHeroCompositionsArgs = {
  request: FilterAghanimLabHeroCompositionRequestType;
};


export type PageAghanimQueryMatchArgs = {
  id: Scalars['Long']['input'];
};


export type PageAghanimQueryMatchesArgs = {
  request?: InputMaybe<FilterAghanimLabMatchRequestType>;
};


export type PageAghanimQueryRoomArgs = {
  difficulty: AghanimLabMatchDifficultyEnum;
};


export type PageAghanimQueryRoomModifierArgs = {
  difficulty: AghanimLabMatchDifficultyEnum;
};


export type PageAghanimQueryWinRateArgs = {
  difficulty: AghanimLabMatchDifficultyEnum;
};

export type PageBattlepassQuery = {
  __typename?: 'PageBattlepassQuery';
  predictionsHero?: Maybe<Array<Maybe<BattlepassPredictionHeroType>>>;
  predictionsPlayers?: Maybe<Array<Maybe<BattlepassPredictionPlayerType>>>;
  predictionsTeams?: Maybe<Array<Maybe<BattlepassPredictionTeamType>>>;
  predictionsTournament?: Maybe<BattlepassPredictionTournamentType>;
};


export type PageBattlepassQueryPredictionsHeroArgs = {
  leagueIds: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type PageBattlepassQueryPredictionsPlayersArgs = {
  leagueIds: Array<InputMaybe<Scalars['Int']['input']>>;
  teamIds: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type PageBattlepassQueryPredictionsTeamsArgs = {
  averaged?: InputMaybe<Scalars['Boolean']['input']>;
  leagueIds: Array<InputMaybe<Scalars['Int']['input']>>;
  teamIds: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type PageBattlepassQueryPredictionsTournamentArgs = {
  leagueIds: Array<InputMaybe<Scalars['Int']['input']>>;
  teamIds: Array<InputMaybe<Scalars['Int']['input']>>;
};

export type PageDireTideQuery = {
  __typename?: 'PageDireTideQuery';
  /** Returns a match by Id based on the Halloween Event DireTide. */
  match?: Maybe<DireTideCustomGameMatchType>;
  /** Returns a list of matches by based on the Halloween Event DireTide. */
  matches?: Maybe<Array<Maybe<DireTideCustomGameMatchType>>>;
  /** Returns the last 12 days by day showing the amount of matches and the amount of wins by hero id. */
  winDay?: Maybe<Array<Maybe<DireTideCustomGameHeroWinDayType>>>;
};


export type PageDireTideQueryMatchArgs = {
  id: Scalars['Long']['input'];
};


export type PageDireTideQueryMatchesArgs = {
  request: FilterDireTideCustomMatchRequestType;
};


export type PageDireTideQueryWinDayArgs = {
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PageLeaguesQuery = {
  __typename?: 'PageLeaguesQuery';
  /** Returns the last 12 hours by hour showing the amount of matches. */
  dpcPositionStats?: Maybe<Array<Maybe<LeagueDpcPositionStatObjectType>>>;
};

export type PageMatchesQuery = {
  __typename?: 'PageMatchesQuery';
  /** Returns the last 12 days by day showing the amount of matches. */
  matchesStatsDay?: Maybe<Array<Maybe<MatchesDayType>>>;
  /** Returns the data by game version showing the amount of matches. */
  matchesStatsGameVersion?: Maybe<Array<Maybe<MatchesGameVersionType>>>;
  /** Returns the last 12 hours by hour showing the amount of matches. */
  matchesStatsHour?: Maybe<Array<Maybe<MatchesHourType>>>;
  /** Returns the data by month showing the amount of matches. */
  matchesStatsMonth?: Maybe<Array<Maybe<MatchesMonthType>>>;
  /** Returns the last 12 weeks by week showing the amount of matches. */
  matchesStatsWeek?: Maybe<Array<Maybe<MatchesWeekType>>>;
  /** Amount of players who are active and searching for a game in this region. */
  matchmakingStats?: Maybe<Array<Maybe<MatchmakingStatsType>>>;
};


export type PageMatchesQueryMatchesStatsDayArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>;
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMatchesQueryMatchesStatsGameVersionArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>;
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMatchesQueryMatchesStatsHourArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>;
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMatchesQueryMatchesStatsMonthArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>;
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type PageMatchesQueryMatchesStatsWeekArgs = {
  bracketIds?: InputMaybe<Array<InputMaybe<RankBracket>>>;
  gameModeIds?: InputMaybe<Array<InputMaybe<GameModeEnumType>>>;
  regionIds?: InputMaybe<Array<InputMaybe<BasicRegionType>>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PagePlayerQuery = {
  __typename?: 'PagePlayerQuery';
  /** Returns a general player summary of random set of predefinded filters. */
  breakdown?: Maybe<PlayerBreakdownType>;
  /** Returns the violations commited by a player in their last 500 games. */
  conduct?: Maybe<PlayerConductResponseType>;
  /** A more in depth at a single player's single hero performance. */
  heroPerformance?: Maybe<PlayerPerformanceType>;
  /** Returns a list of all heroes played by the steam account id and contains data about the average performance. */
  heroesPerformance?: Maybe<Array<Maybe<PlayerHeroesPerformanceType>>>;
  /** Returns a list of players that the player has played with. */
  peers?: Maybe<Array<Maybe<PlayerTeammateType>>>;
  /** Provided in-depth look of a player and how they proform globally on all heroes. */
  performance?: Maybe<PlayerPerformanceType>;
  /** Picked the top pros and annoucers and determines if you ever have played with them and when. */
  playedWithPro?: Maybe<PlayerPlayedWithProType>;
  /** Get very simple data for the on-hover of a player icon. */
  simpleSummary?: Maybe<PlayerCardHoverType>;
};


export type PagePlayerQueryBreakdownArgs = {
  request: PlayerBreakdownRequestType;
};


export type PagePlayerQueryHeroPerformanceArgs = {
  heroId: Scalars['Short']['input'];
  request: PlayerHeroPerformanceMatchesRequestType;
};


export type PagePlayerQueryHeroesPerformanceArgs = {
  request?: InputMaybe<PlayerHeroesPerformanceMatchesRequestType>;
};


export type PagePlayerQueryPeersArgs = {
  request: PlayerTeammatesGroupByRequestType;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type PagePlayerQueryPerformanceArgs = {
  request: PlayerPerformanceMatchesRequestType;
};

export type PagePlayersQuery = {
  __typename?: 'PagePlayersQuery';
  /** Endpoint which breaks down all the SteamAccounts in the database by their current season rank. */
  steamAccountByRank?: Maybe<Array<Maybe<SteamAccountByRankType>>>;
};


export type PagePlayersQuerySteamAccountByRankArgs = {
  week?: InputMaybe<Scalars['Long']['input']>;
};

export type PageQuery = {
  __typename?: 'PageQuery';
  /** Endpoints for the TI10 (2020) regarding the summer event. */
  aghanim?: Maybe<PageAghanimQuery>;
  /** Endpoints for the battlepass data. */
  battlePass?: Maybe<PageBattlepassQuery>;
  direTide?: Maybe<PageDireTideQuery>;
  /** Endpoints for Imp Related calls. */
  imp?: Maybe<ImpQuery>;
  /** STRATZ specific endpoints found on the /leagues/ section of the website.  */
  leagues?: Maybe<PageLeaguesQuery>;
  /** STRATZ specific endpoints found on the /matches/ section of the website.  */
  matches?: Maybe<PageMatchesQuery>;
  /** STRATZ specific endpoints found on the /player/ section of the website. id is a required input field. */
  player?: Maybe<PagePlayerQuery>;
  /** STRATZ specific endpoints found on the /players/ section of the website.  */
  players?: Maybe<PagePlayersQuery>;
  rosh?: Maybe<RoshQuery>;
};


export type PageQueryPlayerArgs = {
  steamAccountId: Scalars['Long']['input'];
};

export type PatchNoteLanguageType = {
  __typename?: 'PatchNoteLanguageType';
  abilityId?: Maybe<Scalars['Short']['output']>;
  gameVersionId?: Maybe<Scalars['Short']['output']>;
  generalId?: Maybe<PatchNoteType>;
  heroId?: Maybe<Scalars['Short']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Byte']['output']>;
  itemId?: Maybe<Scalars['Short']['output']>;
  languageId?: Maybe<Scalars['Byte']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export enum PatchNoteType {
  General = 'GENERAL',
  Generic = 'GENERIC',
  Hero = 'HERO',
  Item = 'ITEM',
  Npc = 'NPC'
}

export type PlayerAbilityType = {
  __typename?: 'PlayerAbilityType';
  abilityId: Scalars['Int']['output'];
  abilityType?: Maybe<AbilityType>;
  gameVersionId?: Maybe<Scalars['Short']['output']>;
  isTalent?: Maybe<Scalars['Boolean']['output']>;
  level: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};


export type PlayerAbilityTypeAbilityTypeArgs = {
  gameVerionId?: InputMaybe<Scalars['Int']['input']>;
  langaugeId?: InputMaybe<Scalars['Int']['input']>;
};

export type PlayerActivitySummaryType = {
  __typename?: 'PlayerActivitySummaryType';
  activity?: Maybe<PlayerBehaviorActivity>;
};

export type PlayerBadgeType = {
  __typename?: 'PlayerBadgeType';
  badgeId?: Maybe<Scalars['Byte']['output']>;
  createdDateTime?: Maybe<Scalars['Long']['output']>;
  slot?: Maybe<Scalars['Byte']['output']>;
};

export enum PlayerBattlePassGroupByEnum {
  Bracket = 'BRACKET',
  CountryCode = 'COUNTRY_CODE'
}

export type PlayerBattlePassGroupByType = {
  __typename?: 'PlayerBattlePassGroupByType';
  id?: Maybe<Scalars['String']['output']>;
  playerCount?: Maybe<Scalars['Long']['output']>;
  playerCountAt?: Maybe<Scalars['Long']['output']>;
  sumLevels?: Maybe<Scalars['Long']['output']>;
};

export type PlayerBattlePassResponseType = {
  __typename?: 'PlayerBattlePassResponseType';
  levels: Array<Scalars['Int']['output']>;
  players?: Maybe<Array<Maybe<PlayerBattlePassType>>>;
};


export type PlayerBattlePassResponseTypePlayersArgs = {
  minimumLevel?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PlayerBattlePassType = {
  __typename?: 'PlayerBattlePassType';
  level: Scalars['Int']['output'];
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
};

export enum PlayerBehaviorActivity {
  High = 'HIGH',
  Intense = 'INTENSE',
  Low = 'LOW',
  Medium = 'MEDIUM',
  None = 'NONE',
  VeryHigh = 'VERY_HIGH',
  VeryLow = 'VERY_LOW'
}

export type PlayerBreakdownObjectType = {
  __typename?: 'PlayerBreakdownObjectType';
  id?: Maybe<Scalars['Int']['output']>;
  imp?: Maybe<Scalars['Int']['output']>;
  lastSeenDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount: Scalars['Int']['output'];
  win?: Maybe<Scalars['Int']['output']>;
};

export type PlayerBreakdownRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** Whether the match is a league match or not. */
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: InputMaybe<Scalars['Boolean']['input']>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the match has a team assigned or not. */
  isTeam?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  maxDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  minDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  partyCounts?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars['Long']['input']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type PlayerBreakdownType = {
  __typename?: 'PlayerBreakdownType';
  dayOfWeekMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  durationMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  factionMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  gameModeMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  heroAttributeMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  impMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  isStatsMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  laneMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  lobbyMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  matches?: Maybe<PlayerBreakdownObjectType>;
  partyMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  rankMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  regionMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  roleMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  timeOfDayMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
  weekEndMatches?: Maybe<Array<Maybe<PlayerBreakdownObjectType>>>;
};

export type PlayerCardHoverHeroType = {
  __typename?: 'PlayerCardHoverHeroType';
  heroId: Scalars['Int']['output'];
  lossCount: Scalars['Int']['output'];
  winCount: Scalars['Int']['output'];
};

export type PlayerCardHoverType = {
  __typename?: 'PlayerCardHoverType';
  activity?: Maybe<Scalars['Byte']['output']>;
  coreCount?: Maybe<Scalars['Int']['output']>;
  heroes?: Maybe<Array<Maybe<PlayerCardHoverHeroType>>>;
  imp?: Maybe<Scalars['Int']['output']>;
  lastUpdateDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  supportCount?: Maybe<Scalars['Int']['output']>;
};

export type PlayerCoachingLeaderboardResponseType = {
  __typename?: 'PlayerCoachingLeaderboardResponseType';
  levels: Array<Scalars['Int']['output']>;
  players?: Maybe<Array<Maybe<PlayerCoachingLeaderboardType>>>;
};


export type PlayerCoachingLeaderboardResponseTypePlayersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PlayerCoachingLeaderboardType = {
  __typename?: 'PlayerCoachingLeaderboardType';
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId: Scalars['Long']['output'];
  winCount: Scalars['Int']['output'];
};

export type PlayerConductResponseType = {
  __typename?: 'PlayerConductResponseType';
  behaviorScore?: Maybe<Scalars['Short']['output']>;
  lastIncidentDateTime?: Maybe<Scalars['Long']['output']>;
  lastIncidentMatchId?: Maybe<Scalars['Long']['output']>;
  recentMatchIncidents?: Maybe<Array<Maybe<Scalars['Short']['output']>>>;
};

export type PlayerDraftHeroHighlightType = {
  __typename?: 'PlayerDraftHeroHighlightType';
  impAllTime?: Maybe<Scalars['Int']['output']>;
  impLastMonth?: Maybe<Scalars['Int']['output']>;
  impLastSixMonths?: Maybe<Scalars['Int']['output']>;
  lastPlayed?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  matchCountLastMonth?: Maybe<Scalars['Int']['output']>;
  matchCountLastSixMonths?: Maybe<Scalars['Int']['output']>;
  mvpCountLastMonth?: Maybe<Scalars['Int']['output']>;
  topCoreCountLastMonth?: Maybe<Scalars['Int']['output']>;
  topSupportCountLastMonth?: Maybe<Scalars['Int']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
  winCountLastMonth?: Maybe<Scalars['Int']['output']>;
  winCountLastSixMonths?: Maybe<Scalars['Int']['output']>;
};

export type PlayerHeroDotaPlusLeaderboardRankResponseType = {
  __typename?: 'PlayerHeroDotaPlusLeaderboardRankResponseType';
  players?: Maybe<Array<Maybe<HeroDotaPlusLeaderboardRankType>>>;
};

export type PlayerHeroPerformanceLongestStreakType = {
  __typename?: 'PlayerHeroPerformanceLongestStreakType';
  currentStreak?: Maybe<Scalars['Int']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  longestStreak?: Maybe<Scalars['Int']['output']>;
};

export type PlayerHeroPerformanceMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** Whether the match is a league match or not. */
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: InputMaybe<Scalars['Boolean']['input']>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the match has a team assigned or not. */
  isTeam?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of league ids to include in this query, excluding all results that do not include one of these leagues. */
  leagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  matchGroupOrderBy?: InputMaybe<FilterMatchGroupOrderByEnum>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  maxDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  minDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** If the return should be ordered by Ascending or Desending order. */
  orderBy?: InputMaybe<FindMatchPlayerOrderBy>;
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  partyCounts?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to have returned in your query. Max :  */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of hero ids found against your team to include in this query, excluding all results that do not include one of these heroes found against team. */
  withEnemyHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on the enemy team to include in this query, excluding all results that do not include one of these steam accounts found on the enemy team. */
  withEnemySteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type PlayerHeroesPerformanceMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** Whether the match is a league match or not. */
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: InputMaybe<Scalars['Boolean']['input']>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the match has a team assigned or not. */
  isTeam?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** Requests matches where the match is no longer than this many minutes.  Default is null and there is no maximum. */
  maxDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is at least this many minutes. Default is null and there is no minimum. */
  minDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Matches where the user is in a party with this many friends. Automatically applys IsParty = true. This is an array input. */
  partyCounts?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to have returned in your query. Max :  */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of hero ids found against your team to include in this query, excluding all results that do not include one of these heroes found against team. */
  withEnemyHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on the enemy team to include in this query, excluding all results that do not include one of these steam accounts found on the enemy team. */
  withEnemySteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type PlayerHeroesPerformanceScoreType = {
  __typename?: 'PlayerHeroesPerformanceScoreType';
  id?: Maybe<MatchPlayerPositionType>;
  imp?: Maybe<Scalars['Int']['output']>;
  matchCount: Scalars['Int']['output'];
  score: Scalars['Float']['output'];
  winCount: Scalars['Int']['output'];
};

export type PlayerHeroesPerformanceType = {
  __typename?: 'PlayerHeroesPerformanceType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  best?: Maybe<Scalars['Float']['output']>;
  duration: Scalars['Int']['output'];
  experiencePerMinute: Scalars['Int']['output'];
  goldPerMinute: Scalars['Int']['output'];
  hero?: Maybe<HeroType>;
  heroId: Scalars['Short']['output'];
  imp?: Maybe<Scalars['Int']['output']>;
  kDA?: Maybe<Scalars['Float']['output']>;
  lastPlayedDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount: Scalars['Int']['output'];
  positionScore?: Maybe<Array<Maybe<PlayerHeroesPerformanceScoreType>>>;
  winCount: Scalars['Int']['output'];
};

export type PlayerLeaderBoardByHeroType = {
  __typename?: 'PlayerLeaderBoardByHeroType';
  changeInRanking?: Maybe<Scalars['Short']['output']>;
  createdDateTime?: Maybe<Scalars['Long']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  impAverage?: Maybe<Scalars['Byte']['output']>;
  losses?: Maybe<Scalars['Byte']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  regionId?: Maybe<Scalars['Byte']['output']>;
  seasonBracket?: Maybe<Scalars['Byte']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  winStreak?: Maybe<Scalars['Byte']['output']>;
  wins?: Maybe<Scalars['Byte']['output']>;
};

export type PlayerMatchesGroupByRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Only used when doing matchesGroupBy endpoint.  This is how the data will be grouped and makes your return Id field. */
  groupBy: FindMatchPlayerGroupBy;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** Whether the match is a league match or not. */
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: InputMaybe<Scalars['Boolean']['input']>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the match was a victory or not for the specified player. */
  isVictory?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Determines if you want a single player returned, only the player by SteamAccountId, or if you want all 10 players in the match. */
  playerList: FindMatchPlayerList;
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to have returned in your query. Max :  */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of hero ids found against your team to include in this query, excluding all results that do not include one of these heroes found against team. */
  withEnemyHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on the enemy team to include in this query, excluding all results that do not include one of these steam accounts found on the enemy team. */
  withEnemySteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type PlayerMatchesRequestType = {
  /** Only return matches after this match id. Can be used instead of Skip. */
  after?: InputMaybe<Scalars['Long']['input']>;
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Only return matches before this match id. Can be used instead of Skip. */
  before?: InputMaybe<Scalars['Long']['input']>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: InputMaybe<Scalars['Boolean']['input']>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the match was a victory or not for the specified player. */
  isVictory?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Player must have less than this IMP for the Match to show. */
  maxImp?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Player must have at least this IMP for the Match to show. */
  minImp?: InputMaybe<Scalars['Int']['input']>;
  /** In what order the returned data will come in. */
  orderBy?: InputMaybe<FindMatchPlayerOrderBy>;
  /** Determines if you want a single player returned, only the player by SteamAccountId, or if you want all 10 players in the match. */
  playerList?: InputMaybe<FindMatchPlayerList>;
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to have returned in your query. Max :  */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>;
  /** When requesting matches with a primary SteamAccountId, this will ensure that player is on specific team Id being sent in. */
  teamIdSteamAccount?: InputMaybe<Scalars['Int']['input']>;
  /** An array of hero ids found against your team to include in this query, excluding all results that do not include one of these heroes found against team. */
  withEnemyHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A steam account id found on the enemy team to include in this query, excluding all results that do not include this steam account id found on the enemy team. */
  withEnemySteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type PlayerPerformanceCompositionHeroType = {
  __typename?: 'PlayerPerformanceCompositionHeroType';
  heroId?: Maybe<Scalars['Short']['output']>;
  matchCount: Scalars['Int']['output'];
  winCount: Scalars['Int']['output'];
};

export type PlayerPerformanceCompositionType = {
  __typename?: 'PlayerPerformanceCompositionType';
  allies?: Maybe<Array<Maybe<PlayerPerformanceCompositionHeroType>>>;
  foes?: Maybe<Array<Maybe<PlayerPerformanceCompositionHeroType>>>;
};

export type PlayerPerformanceMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the match is a league match or not. */
  isLeague?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the specified player was on Radiant or not. */
  isRadiant?: InputMaybe<Scalars['Boolean']['input']>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the match has a team assigned or not. */
  isTeam?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the match was a victory or not for the specified player. */
  isVictory?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars['Long']['input']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>;
  /** When searching for a league, the tier the league must be in. Tiers: Amateur = 1, Professional = 2, Premium = 3, Pro Circuit = 4, Main Event = 5 */
  tier?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type PlayerPerformancePositionObjectType = {
  __typename?: 'PlayerPerformancePositionObjectType';
  laneMatchCount: Scalars['Int']['output'];
  laneType?: Maybe<Scalars['Byte']['output']>;
  laneWinCount: Scalars['Int']['output'];
};

export type PlayerPerformancePositionType = {
  __typename?: 'PlayerPerformancePositionType';
  lanes?: Maybe<Array<Maybe<PlayerPerformancePositionObjectType>>>;
  roleMatchCount: Scalars['Int']['output'];
  roleType?: Maybe<MatchPlayerRoleType>;
  roleWinCount: Scalars['Int']['output'];
};

export type PlayerPerformanceType = {
  __typename?: 'PlayerPerformanceType';
  assists?: Maybe<Scalars['Int']['output']>;
  assistsAverage?: Maybe<Scalars['Decimal']['output']>;
  awardMatchCount: Scalars['Int']['output'];
  composition?: Maybe<PlayerPerformanceCompositionType>;
  cs?: Maybe<Scalars['Int']['output']>;
  csAverage?: Maybe<Scalars['Decimal']['output']>;
  deaths?: Maybe<Scalars['Int']['output']>;
  deathsAverage?: Maybe<Scalars['Decimal']['output']>;
  gpm?: Maybe<Scalars['Int']['output']>;
  gpmAverage?: Maybe<Scalars['Decimal']['output']>;
  heroId?: Maybe<Array<Maybe<Scalars['Short']['output']>>>;
  imp?: Maybe<Scalars['Int']['output']>;
  kills?: Maybe<Scalars['Int']['output']>;
  killsAverage?: Maybe<Scalars['Decimal']['output']>;
  matchCount: Scalars['Int']['output'];
  maxStreak: Scalars['Int']['output'];
  mmrBracket: Scalars['Int']['output'];
  mmrTier: Scalars['Int']['output'];
  mvpCount: Scalars['Int']['output'];
  /** Contains an array of 6 items which are listed as index 0 - 1st Pick, Index 1 - Pick 2nd, 3rd, Index 2 - Pick 4th, 5th, Index 3 - Pick 6th, Pick 7th, Index 4 - Pick 8th, 9ths, Index 5 - Pick 10th */
  pickOrder?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  position?: Maybe<Array<Maybe<PlayerPerformancePositionType>>>;
  rank?: Maybe<Scalars['Int']['output']>;
  streak: Scalars['Int']['output'];
  topCoreCount: Scalars['Int']['output'];
  topSupportCount: Scalars['Int']['output'];
  winCount: Scalars['Int']['output'];
  xpm?: Maybe<Scalars['Int']['output']>;
  xpmAverage?: Maybe<Scalars['Decimal']['output']>;
};

export type PlayerPlayedWithProPlayerMatchType = {
  __typename?: 'PlayerPlayedWithProPlayerMatchType';
  match?: Maybe<MatchType>;
  matchId?: Maybe<Scalars['Long']['output']>;
};

export type PlayerPlayedWithProPlayerType = {
  __typename?: 'PlayerPlayedWithProPlayerType';
  steamAccount?: Maybe<SteamAccountType>;
  steamId?: Maybe<Scalars['Long']['output']>;
  vs?: Maybe<PlayerPlayedWithProPlayerMatchType>;
  with?: Maybe<PlayerPlayedWithProPlayerMatchType>;
};

export type PlayerPlayedWithProTeamType = {
  __typename?: 'PlayerPlayedWithProTeamType';
  players?: Maybe<Array<Maybe<PlayerPlayedWithProPlayerType>>>;
  teamId: Scalars['Int']['output'];
  teamLogo: Scalars['String']['output'];
  teamName: Scalars['String']['output'];
};

export type PlayerPlayedWithProType = {
  __typename?: 'PlayerPlayedWithProType';
  casters?: Maybe<Array<Maybe<PlayerPlayedWithProPlayerType>>>;
  internationalWinners?: Maybe<Array<Maybe<PlayerPlayedWithProTeamType>>>;
  playedCount: Scalars['Int']['output'];
  teams?: Maybe<Array<Maybe<PlayerPlayedWithProTeamType>>>;
  totalCount: Scalars['Int']['output'];
};

export type PlayerRuneDetailType = {
  __typename?: 'PlayerRuneDetailType';
  action?: Maybe<RuneAction>;
  gold?: Maybe<Scalars['Int']['output']>;
  positionX?: Maybe<Scalars['Int']['output']>;
  positionY?: Maybe<Scalars['Int']['output']>;
  rune?: Maybe<RuneEnums>;
  time: Scalars['Int']['output'];
};

export type PlayerTeammateType = {
  __typename?: 'PlayerTeammateType';
  avgAssists?: Maybe<Scalars['Float']['output']>;
  avgDeaths?: Maybe<Scalars['Float']['output']>;
  avgExperiencePerMinute?: Maybe<Scalars['Int']['output']>;
  avgGoldPerMinute?: Maybe<Scalars['Int']['output']>;
  avgImp?: Maybe<Scalars['Int']['output']>;
  avgKDA?: Maybe<Scalars['Float']['output']>;
  avgKills?: Maybe<Scalars['Float']['output']>;
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type PlayerTeammatesGroupByRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars['Boolean']['input']>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of league ids to include in this query, excluding all results that do not include one of these leagues. */
  leagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  matchGroupOrderBy: FilterMatchGroupOrderByEnum;
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** Minimum amount of MatchCount required for a Duo to qualify */
  matchLimitMax?: InputMaybe<Scalars['Int']['input']>;
  /** Minimum amount of MatchCount required for a Duo to qualify */
  matchLimitMin?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is lower than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no maximum. */
  maxGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Requests matches where the match is at least than this input.  See GameVersion API call for a list of patch ids. Default is null and there is no minimum. */
  minGameVersionId?: InputMaybe<Scalars['Int']['input']>;
  /** Include only results where the main player played with popular broadcasters. */
  onlyCasters?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include only results where main player played with popular professionals. */
  onlyPros?: InputMaybe<Scalars['Boolean']['input']>;
  /** If the return should be ordered by Ascending or Desending order. */
  orderBy?: InputMaybe<FindMatchPlayerOrderBy>;
  /** Only used when doing matchesGroupBy endpoint.  This is how the data will be grouped and makes your return Id field. */
  playerTeammateSort: FilterPlayerTeammateEnum;
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to have returned in your query. Max :  */
  take?: InputMaybe<Scalars['Int']['input']>;
  /** A team id to include in this query, excluding all results that do not have this team id. */
  teamId?: InputMaybe<Scalars['Int']['input']>;
  /** When requesting matches with a primary SteamAccountId, this will ensure that player is on specific team Id being sent in. */
  teamIdSteamAccount?: InputMaybe<Scalars['Int']['input']>;
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type PlayerType = {
  __typename?: 'PlayerType';
  activity?: Maybe<PlayerActivitySummaryType>;
  badges?: Maybe<Array<Maybe<PlayerBadgeType>>>;
  behaviorScore?: Maybe<Scalars['Short']['output']>;
  /** Gets the players of Dota which have DotaPlus and have a high level hero. */
  dotaPlus?: Maybe<Array<Maybe<HeroDotaPlusLeaderboardRankType>>>;
  /** A list of the high achivement skills by a Player. */
  feats?: Maybe<Array<Maybe<FeatType>>>;
  firstMatchDate?: Maybe<Scalars['Long']['output']>;
  guildMember?: Maybe<GuildMemberType>;
  heroPerformance?: Maybe<PlayerPerformanceType>;
  /** A list of the current Streak and the Longest Streak for each Hero by a Player. */
  heroStreaks?: Maybe<Array<Maybe<PlayerHeroPerformanceLongestStreakType>>>;
  /** Returns a list of all heroes played by the steam account id and contains data about the average performance. */
  heroesPerformance?: Maybe<Array<Maybe<PlayerHeroesPerformanceType>>>;
  identity?: Maybe<CaptainJackIdentityPublicProfileType>;
  imp?: Maybe<Scalars['Int']['output']>;
  isFollowed?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDate?: Maybe<Scalars['Long']['output']>;
  lastMatchRegionId?: Maybe<Scalars['Byte']['output']>;
  leaderboardRanks?: Maybe<Array<Maybe<SteamAccountSeasonLeaderBoardRankType>>>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  /** Find match details by steam account id. steamAccountId is a required input field. */
  matches?: Maybe<Array<Maybe<MatchType>>>;
  /** Find match details by steam account id. The return is modified to group the data by the GroupBy parameter. */
  matchesGroupBy?: Maybe<Array<Maybe<MatchGroupByType>>>;
  names?: Maybe<Array<Maybe<SteamAccountNameType>>>;
  performance?: Maybe<PlayerPerformanceType>;
  ranks?: Maybe<Array<Maybe<SteamAccountSeasonRankType>>>;
  simpleSummary?: Maybe<PlayerCardHoverType>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  team?: Maybe<SteamAccountTeamMemberType>;
  winCount?: Maybe<Scalars['Int']['output']>;
};


export type PlayerTypeFeatsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type PlayerTypeHeroPerformanceArgs = {
  heroId: Scalars['Short']['input'];
  request: PlayerHeroPerformanceMatchesRequestType;
};


export type PlayerTypeHeroStreaksArgs = {
  request?: InputMaybe<PlayerMatchesRequestType>;
};


export type PlayerTypeHeroesPerformanceArgs = {
  request?: InputMaybe<PlayerHeroPerformanceMatchesRequestType>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type PlayerTypeLeaderboardRanksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type PlayerTypeMatchesArgs = {
  request: PlayerMatchesRequestType;
};


export type PlayerTypeMatchesGroupByArgs = {
  request: PlayerMatchesGroupByRequestType;
};


export type PlayerTypeNamesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type PlayerTypeRanksArgs = {
  seasonRankIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
};

export type PlayerUpdateAttributeDetailType = {
  __typename?: 'PlayerUpdateAttributeDetailType';
  agi: Scalars['Int']['output'];
  int: Scalars['Int']['output'];
  str: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type PlayerUpdateBattleDetailType = {
  __typename?: 'PlayerUpdateBattleDetailType';
  damageBonus: Scalars['Int']['output'];
  damageMinMax: Scalars['Int']['output'];
  hpRegen: Scalars['Int']['output'];
  mpRegen: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type PlayerUpdateGoldDetailType = {
  __typename?: 'PlayerUpdateGoldDetailType';
  gold: Scalars['Int']['output'];
  networth: Scalars['Int']['output'];
  networthDifference: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
  unreliableGold: Scalars['Int']['output'];
};

export type PlayerUpdateHealthDetailType = {
  __typename?: 'PlayerUpdateHealthDetailType';
  hp: Scalars['Int']['output'];
  maxHp: Scalars['Int']['output'];
  maxMp: Scalars['Int']['output'];
  mp: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type PlayerUpdateLevelDetailType = {
  __typename?: 'PlayerUpdateLevelDetailType';
  level: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type PlayerUpdatePositionDetailType = {
  __typename?: 'PlayerUpdatePositionDetailType';
  time: Scalars['Int']['output'];
  x: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
};

export type PlusDraftMissingLetterRequestType = {
  /** A list of all of the banned hero ids in the draft. */
  bans: Scalars['Short']['input'];
  /** The game mode for this type. We only support All Pick and Ranked All Pick. In the future Captain's Mode will be supported. */
  gameMode: Scalars['Int']['input'];
  /** Due to Valve changing the way Picking has happened in the past, we require the GameVersionId so we know what version of the network to call. */
  gameVersionId: Scalars['Short']['input'];
  /** A list of player request objects. */
  players?: InputMaybe<Array<InputMaybe<PlusDraftPlayerRequestType>>>;
};

export type PlusDraftPlayerHeroObjectType = {
  __typename?: 'PlusDraftPlayerHeroObjectType';
  heroId?: Maybe<Scalars['Short']['output']>;
  letter?: Maybe<PlusLetterType>;
  pickValue?: Maybe<Scalars['Decimal']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  winValues?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
};

export type PlusDraftPlayerRequestType = {
  /** When a player has selected a hero, this is the id. If a null is sent, we will send back a hero list of possible heroes. */
  heroId?: InputMaybe<Scalars['Short']['input']>;
  /** The role this player will play. If a null is sent, we will assign the best possible role. */
  position?: InputMaybe<MatchPlayerPositionType>;
  /** The rank this played is.  In the event he is anonymous, use the lowest rank player in the game. */
  rank?: InputMaybe<Scalars['Byte']['input']>;
  /** The slot of player. It is required to be in order from 0-9. */
  slot: Scalars['Int']['input'];
  /** The steam id of the player. This will allow us to find player history on the player if he is not anonymous. */
  steamAccountId?: InputMaybe<Scalars['Long']['input']>;
};

export type PlusDraftPlayerType = {
  __typename?: 'PlusDraftPlayerType';
  heroes?: Maybe<Array<Maybe<PlusDraftPlayerHeroObjectType>>>;
  position?: Maybe<MatchPlayerPositionType>;
  positionValues?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
  slot?: Maybe<Scalars['Byte']['output']>;
};

export type PlusDraftRequestType = {
  /** A list of all of the banned hero ids in the draft. */
  bans?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** The game mode for this type. We only support All Pick and Ranked All Pick. In the future Captain's Mode will be supported. */
  gameMode: Scalars['Int']['input'];
  /** Due to Valve changing the way Picking has happened in the past, we require the GameVersionId so we know what version of the network to call. */
  gameVersionId: Scalars['Short']['input'];
  /** The match Id or the lobby id of the match your sending.  This will cache data for the next calls to be quicker. */
  matchId: Scalars['Long']['input'];
  /** A list of player request objects. */
  players: Array<InputMaybe<PlusDraftPlayerRequestType>>;
};

export type PlusDraftType = {
  __typename?: 'PlusDraftType';
  durationValues?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
  midOutcome?: Maybe<Scalars['Decimal']['output']>;
  offOutcome?: Maybe<Scalars['Decimal']['output']>;
  players?: Maybe<Array<Maybe<PlusDraftPlayerType>>>;
  safeOutcome?: Maybe<Scalars['Decimal']['output']>;
  winValues?: Maybe<Array<Maybe<Scalars['Decimal']['output']>>>;
};

export type PlusHeroTeamStatusAveragesType = {
  __typename?: 'PlusHeroTeamStatusAveragesType';
  cs?: Maybe<Scalars['Decimal']['output']>;
  deaths?: Maybe<Scalars['Decimal']['output']>;
  disableCount?: Maybe<Scalars['Decimal']['output']>;
  disableDuration?: Maybe<Scalars['Decimal']['output']>;
  healingAllies?: Maybe<Scalars['Decimal']['output']>;
  magicalDamage?: Maybe<Scalars['Decimal']['output']>;
  magicalDamageReceived?: Maybe<Scalars['Decimal']['output']>;
  physicalDamage?: Maybe<Scalars['Decimal']['output']>;
  physicalDamageReceived?: Maybe<Scalars['Decimal']['output']>;
  pureDamage?: Maybe<Scalars['Decimal']['output']>;
  pureDamageReceived?: Maybe<Scalars['Decimal']['output']>;
  purgeModifiers?: Maybe<Scalars['Decimal']['output']>;
  slowCount?: Maybe<Scalars['Decimal']['output']>;
  slowDuration?: Maybe<Scalars['Decimal']['output']>;
  stunCount?: Maybe<Scalars['Decimal']['output']>;
  stunDuration?: Maybe<Scalars['Decimal']['output']>;
  towerDamage?: Maybe<Scalars['Decimal']['output']>;
  weakenCount?: Maybe<Scalars['Decimal']['output']>;
  weakenDuration?: Maybe<Scalars['Decimal']['output']>;
};

export type PlusHeroTeamStatusDetailType = {
  __typename?: 'PlusHeroTeamStatusDetailType';
  averages?: Maybe<PlusHeroTeamStatusAveragesType>;
  basicBracket?: Maybe<RankBracketBasicEnum>;
  heroId: Scalars['Int']['output'];
  position?: Maybe<MatchPlayerPositionType>;
};

export type PlusHoverBanType = {
  __typename?: 'PlusHoverBanType';
  flags?: Maybe<Scalars['Byte']['output']>;
  heroId?: Maybe<Scalars['Short']['output']>;
  score?: Maybe<Scalars['Decimal']['output']>;
};

export type PlusHoverType = {
  __typename?: 'PlusHoverType';
  bans?: Maybe<Array<Maybe<PlusHoverBanType>>>;
  players?: Maybe<Array<Maybe<PlusPlayerHoverType>>>;
};

export enum PlusLetterType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
  S = 'S'
}

export type PlusPlayerHoverHeroType = {
  __typename?: 'PlusPlayerHoverHeroType';
  heroId?: Maybe<Scalars['Short']['output']>;
  lossCount: Scalars['Int']['output'];
  winCount: Scalars['Int']['output'];
};

export type PlusPlayerHoverPlayerType = {
  __typename?: 'PlusPlayerHoverPlayerType';
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount: Scalars['Int']['output'];
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  winCount: Scalars['Int']['output'];
};

export type PlusPlayerHoverRequestType = {
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** Should our Networks attempt to try to make Radiant Win the draft or Dire. */
  shouldRadiantWin?: InputMaybe<MatchPlayerPositionType>;
  /** An array of steam account ids to limit the query to only return matches with these steam account ids. */
  steamAccountIds: Array<InputMaybe<Scalars['Long']['input']>>;
  /** The amount of matches to have returned in your query. Max :  */
  take: Scalars['Int']['input'];
};

export type PlusPlayerHoverType = {
  __typename?: 'PlusPlayerHoverType';
  activity?: Maybe<Scalars['Byte']['output']>;
  behaviorScore?: Maybe<Scalars['Short']['output']>;
  coreCount?: Maybe<Scalars['Int']['output']>;
  enemies?: Maybe<Array<Maybe<PlusPlayerHoverPlayerType>>>;
  friends?: Maybe<Array<Maybe<PlusPlayerHoverPlayerType>>>;
  heroes?: Maybe<Array<Maybe<PlusPlayerHoverHeroType>>>;
  heroesExperience?: Maybe<Array<Maybe<Scalars['Short']['output']>>>;
  imp?: Maybe<Scalars['Int']['output']>;
  languageCode?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  supportCount?: Maybe<Scalars['Int']['output']>;
  winCount: Scalars['Int']['output'];
};

export type PlusQuery = {
  __typename?: 'PlusQuery';
  /** The main call for STRATZ Plus. It will return back probability data based on a draft of players that were given. */
  draft?: Maybe<PlusDraftType>;
  /** To save CPU cycles we limit the amount of heroes a person can play. If a player picks a hero outside the default list, we have no idea how good the hero would of been. You can call this endpoint to update the grade letter for that hero selection. */
  draftMissingLetter?: Maybe<PlusLetterType>;
  /** Returns back basic data about the user playing a specific hero.  Used in the Draft app to show post-pick data. */
  playerHeroHighlight?: Maybe<PlayerDraftHeroHighlightType>;
  /** Gets a list of data of the players in the match, can send a max of 10 people.  If a user blocks their data on STRATZ, that data will not be returned. */
  playerMatchHistory?: Maybe<PlusHoverType>;
  /** Returns a set of events which contain each hero and their averages in each of the respected categories, sorted by rank bracket. */
  teamHeroStatus?: Maybe<Array<Maybe<PlusHeroTeamStatusDetailType>>>;
};


export type PlusQueryDraftArgs = {
  request: PlusDraftRequestType;
};


export type PlusQueryDraftMissingLetterArgs = {
  request: PlusDraftMissingLetterRequestType;
};


export type PlusQueryPlayerHeroHighlightArgs = {
  heroId: Scalars['Short']['input'];
  steamAccountId: Scalars['Long']['input'];
};


export type PlusQueryPlayerMatchHistoryArgs = {
  request: PlusPlayerHoverRequestType;
};


export type PlusQueryTeamHeroStatusArgs = {
  rankBracket: RankBracketBasicEnum;
};

export type ProPlayerFollowType = {
  __typename?: 'ProPlayerFollowType';
  activity?: Maybe<Scalars['Int']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
};

export type ProSteamAccountType = {
  __typename?: 'ProSteamAccountType';
  aliases?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  birthday?: Maybe<Scalars['Long']['output']>;
  countries?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  facebookLink?: Maybe<Scalars['String']['output']>;
  fantasyRole?: Maybe<Scalars['Byte']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  instagramLink?: Maybe<Scalars['String']['output']>;
  isLocked: Scalars['Boolean']['output'];
  isPro: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  realName?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Scalars['Short']['output']>;
  romanizedRealName?: Maybe<Scalars['String']['output']>;
  signatureHeroes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sponsor?: Maybe<Scalars['String']['output']>;
  statuses?: Maybe<Scalars['Byte']['output']>;
  team?: Maybe<TeamType>;
  teamId?: Maybe<Scalars['Int']['output']>;
  totalEarnings: Scalars['Int']['output'];
  twitchLink?: Maybe<Scalars['String']['output']>;
  twitterLink?: Maybe<Scalars['String']['output']>;
  vkLink?: Maybe<Scalars['String']['output']>;
  weiboLink?: Maybe<Scalars['String']['output']>;
  youTubeLink?: Maybe<Scalars['String']['output']>;
};

export type RoshCaptainJackIdentityStatDifficultyType = {
  __typename?: 'ROSHCaptainJackIdentityStatDifficultyType';
  difficulty?: Maybe<RoshDifficultyEnum>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  maxScore?: Maybe<Scalars['Float']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export enum RoshDifficultyEnum {
  Alpha = 'ALPHA',
  Easy = 'EASY',
  Expert = 'EXPERT',
  Hard = 'HARD',
  Medium = 'MEDIUM'
}

export type RoshGlobalStatType = {
  __typename?: 'ROSHGlobalStatType';
  difficulty?: Maybe<RoshDifficultyEnum>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  maxScore?: Maybe<Scalars['Float']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export type RoshMatchesRequestType = {
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-8 with 0 being unknown MMR and 1-8 is low to high MMR brackets. Example 7 is Divine. */
  bracketIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  isRadiant?: InputMaybe<Scalars['Boolean']['input']>;
  isUserActionFirst?: InputMaybe<Scalars['Boolean']['input']>;
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
};

export type RoshMutation = {
  __typename?: 'ROSHMutation';
  create?: Maybe<Scalars['Long']['output']>;
  update?: Maybe<Scalars['Boolean']['output']>;
};


export type RoshMutationCreateArgs = {
  bracket: RankBracket;
  difficulty: RoshDifficultyEnum;
  isRadiantFirstPick: Scalars['Boolean']['input'];
  isUserRadiant: Scalars['Boolean']['input'];
};


export type RoshMutationUpdateArgs = {
  didUserWin: Scalars['Boolean']['input'];
  matchId: Scalars['Long']['input'];
  score: Scalars['Float']['input'];
};

export type RabbitDetailType = {
  __typename?: 'RabbitDetailType';
  isOnline: Scalars['Boolean']['output'];
  lastUpdated?: Maybe<Scalars['Long']['output']>;
  matchDetail?: Maybe<RabbitQueueDetailType>;
  matchDetailDelay?: Maybe<RabbitQueueDetailType>;
  matchHistory?: Maybe<RabbitQueueDetailType>;
  matchLive?: Maybe<RabbitQueueDetailType>;
  matchStats?: Maybe<RabbitQueueDetailType>;
  steamAccount?: Maybe<RabbitQueueDetailType>;
};

export type RabbitQueueDetailType = {
  __typename?: 'RabbitQueueDetailType';
  queueCount: Scalars['Int']['output'];
  queueInRate?: Maybe<Scalars['Decimal']['output']>;
  queueOutRate?: Maybe<Scalars['Decimal']['output']>;
};

export enum RankBracket {
  Ancient = 'ANCIENT',
  Archon = 'ARCHON',
  Crusader = 'CRUSADER',
  Divine = 'DIVINE',
  Guardian = 'GUARDIAN',
  Herald = 'HERALD',
  Immortal = 'IMMORTAL',
  Legend = 'LEGEND',
  Uncalibrated = 'UNCALIBRATED'
}

export enum RankBracketBasicEnum {
  All = 'ALL',
  CrusaderArchon = 'CRUSADER_ARCHON',
  DivineImmortal = 'DIVINE_IMMORTAL',
  Filtered = 'FILTERED',
  HeraldGuardian = 'HERALD_GUARDIAN',
  LegendAncient = 'LEGEND_ANCIENT',
  Uncalibrated = 'UNCALIBRATED'
}

export type RegionType = {
  __typename?: 'RegionType';
  clientName?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Byte']['output']>;
  langKey?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Decimal']['output']>;
  leaderboardDivision?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['Decimal']['output']>;
  matchGroup?: Maybe<Scalars['Byte']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  weekendTourneyDivision?: Maybe<Scalars['String']['output']>;
};

export type RoleType = {
  __typename?: 'RoleType';
  langKey?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roleId?: Maybe<Scalars['Short']['output']>;
};

export type RoshQuery = {
  __typename?: 'RoshQuery';
  stats?: Maybe<Array<Maybe<RoshGlobalStatType>>>;
};


export type RoshQueryStatsArgs = {
  request?: InputMaybe<RoshMatchesRequestType>;
};

export enum RuneAction {
  Bottle = 'BOTTLE',
  Pickup = 'PICKUP'
}

export enum RuneEnums {
  Arcane = 'ARCANE',
  Bounty = 'BOUNTY',
  DoubleDamage = 'DOUBLE_DAMAGE',
  Haste = 'HASTE',
  Illusion = 'ILLUSION',
  Invisibility = 'INVISIBILITY',
  Regen = 'REGEN',
  Shield = 'SHIELD',
  Water = 'WATER',
  Wisdom = 'WISDOM'
}

export enum Search {
  Casters = 'CASTERS',
  Guilds = 'GUILDS',
  Leagues = 'LEAGUES',
  Matches = 'MATCHES',
  Players = 'PLAYERS',
  ProPlayers = 'PRO_PLAYERS',
  Teams = 'TEAMS'
}

export type SearchType = {
  __typename?: 'SearchType';
  casters?: Maybe<Array<Maybe<SteamAccountType>>>;
  direTideMatches?: Maybe<Array<Maybe<DireTideCustomGameMatchType>>>;
  guild?: Maybe<GuildType>;
  leagues?: Maybe<Array<Maybe<LeagueType>>>;
  matches?: Maybe<Array<Maybe<MatchType>>>;
  players?: Maybe<Array<Maybe<SteamAccountType>>>;
  proPlayers?: Maybe<Array<Maybe<SteamAccountType>>>;
  teams?: Maybe<Array<Maybe<TeamType>>>;
};

export enum Series {
  BestOfFive = 'BEST_OF_FIVE',
  BestOfOne = 'BEST_OF_ONE',
  BestOfThree = 'BEST_OF_THREE',
  BestOfTwo = 'BEST_OF_TWO'
}

export type SeriesType = {
  __typename?: 'SeriesType';
  id: Scalars['Long']['output'];
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']['output']>;
  matches?: Maybe<Array<Maybe<MatchType>>>;
  node?: Maybe<LeagueNodeType>;
  teamOne?: Maybe<TeamType>;
  teamOneId?: Maybe<Scalars['Int']['output']>;
  teamOneWinCount: Scalars['Short']['output'];
  teamTwo?: Maybe<TeamType>;
  teamTwoId?: Maybe<Scalars['Int']['output']>;
  teamTwoWinCount: Scalars['Short']['output'];
  type?: Maybe<Series>;
  winningTeamId?: Maybe<Scalars['Int']['output']>;
};

export type ServerStatusType = {
  __typename?: 'ServerStatusType';
  isRedisOnline: Scalars['Boolean']['output'];
  rabbitDetail?: Maybe<RabbitDetailType>;
  steamApiDetail?: Maybe<SteamApiDetailType>;
};

export enum SpawnActionType {
  Despawn = 'DESPAWN',
  Spawn = 'SPAWN'
}

export type SpiritBearInventoryObjectType = {
  __typename?: 'SpiritBearInventoryObjectType';
  itemId?: Maybe<Scalars['Short']['output']>;
};

export type SpiritBearInventoryType = {
  __typename?: 'SpiritBearInventoryType';
  backPack0?: Maybe<SpiritBearInventoryObjectType>;
  backPack1?: Maybe<SpiritBearInventoryObjectType>;
  backPack2?: Maybe<SpiritBearInventoryObjectType>;
  item0?: Maybe<SpiritBearInventoryObjectType>;
  item1?: Maybe<SpiritBearInventoryObjectType>;
  item2?: Maybe<SpiritBearInventoryObjectType>;
  item3?: Maybe<SpiritBearInventoryObjectType>;
  item4?: Maybe<SpiritBearInventoryObjectType>;
  item5?: Maybe<SpiritBearInventoryObjectType>;
  neutral0?: Maybe<SpiritBearInventoryObjectType>;
  teleport0?: Maybe<SpiritBearInventoryObjectType>;
  time: Scalars['Int']['output'];
};

export type SteamAccountBattlePassType = {
  __typename?: 'SteamAccountBattlePassType';
  eventId?: Maybe<Scalars['Byte']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
};

export type SteamAccountByRankType = {
  __typename?: 'SteamAccountByRankType';
  playerCount: Scalars['Int']['output'];
  rank: Scalars['Short']['output'];
};

export type SteamAccountNameType = {
  __typename?: 'SteamAccountNameType';
  lastSeenDateTime?: Maybe<Scalars['Long']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SteamAccountSeasonActiveLeaderboardCountryDataType = {
  __typename?: 'SteamAccountSeasonActiveLeaderboardCountryDataType';
  countryCode?: Maybe<Scalars['String']['output']>;
  playerCount?: Maybe<Scalars['Int']['output']>;
};

export type SteamAccountSeasonActiveLeaderboardPositionDataType = {
  __typename?: 'SteamAccountSeasonActiveLeaderboardPositionDataType';
  playerCount?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
};

export type SteamAccountSeasonActiveLeaderboardRankType = {
  __typename?: 'SteamAccountSeasonActiveLeaderboardRankType';
  avgImp?: Maybe<Scalars['Short']['output']>;
  divisionId?: Maybe<LeaderboardDivision>;
  lastUpdateDateTime?: Maybe<Scalars['Long']['output']>;
  matchCount?: Maybe<Scalars['Short']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  positionValue?: Maybe<Scalars['Byte']['output']>;
  rank?: Maybe<Scalars['Short']['output']>;
  rankShift?: Maybe<Scalars['Short']['output']>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  topHeroOne?: Maybe<Scalars['Short']['output']>;
  topHeroThree?: Maybe<Scalars['Short']['output']>;
  topHeroTwo?: Maybe<Scalars['Short']['output']>;
  winRate?: Maybe<Scalars['Byte']['output']>;
};

export type SteamAccountSeasonActiveLeaderboardType = {
  __typename?: 'SteamAccountSeasonActiveLeaderboardType';
  countryData?: Maybe<Array<Maybe<SteamAccountSeasonActiveLeaderboardCountryDataType>>>;
  playerCount?: Maybe<Scalars['Int']['output']>;
  players?: Maybe<Array<Maybe<SteamAccountSeasonActiveLeaderboardRankType>>>;
  positionData?: Maybe<Array<Maybe<SteamAccountSeasonActiveLeaderboardPositionDataType>>>;
  teamData?: Maybe<Array<Maybe<TeamType>>>;
  teamIdData?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};


export type SteamAccountSeasonActiveLeaderboardTypePlayersArgs = {
  skip?: InputMaybe<Scalars['Long']['input']>;
  take?: InputMaybe<Scalars['Long']['input']>;
};

export type SteamAccountSeasonLeaderBoardRankType = {
  __typename?: 'SteamAccountSeasonLeaderBoardRankType';
  asOfDateTime?: Maybe<Scalars['Long']['output']>;
  rank?: Maybe<Scalars['Short']['output']>;
  seasonLeaderBoardDivisionId?: Maybe<LeaderboardDivision>;
  seasonRankId?: Maybe<Scalars['Byte']['output']>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
};

export type SteamAccountSeasonRankType = {
  __typename?: 'SteamAccountSeasonRankType';
  asOfDateTime?: Maybe<Scalars['Long']['output']>;
  isCore?: Maybe<Scalars['Boolean']['output']>;
  rank?: Maybe<Scalars['Byte']['output']>;
  seasonRankId?: Maybe<Scalars['Byte']['output']>;
};

export type SteamAccountTeamMemberType = {
  __typename?: 'SteamAccountTeamMemberType';
  firstMatchDateTime?: Maybe<Scalars['Long']['output']>;
  firstMatchId?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchId?: Maybe<Scalars['Long']['output']>;
  player?: Maybe<PlayerType>;
  steamAccount?: Maybe<SteamAccountType>;
  steamAccountId: Scalars['Long']['output'];
  team?: Maybe<TeamType>;
  teamId: Scalars['Int']['output'];
};

export type SteamAccountType = {
  __typename?: 'SteamAccountType';
  activity?: Maybe<PlayerActivitySummaryType>;
  avatar?: Maybe<Scalars['String']['output']>;
  battlepass?: Maybe<Array<Maybe<SteamAccountBattlePassType>>>;
  cityId?: Maybe<Scalars['Int']['output']>;
  communityVisibleState?: Maybe<Scalars['Int']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  dotaAccountLevel?: Maybe<Scalars['Short']['output']>;
  guild?: Maybe<GuildMemberType>;
  id?: Maybe<Scalars['Long']['output']>;
  isAnonymous: Scalars['Boolean']['output'];
  isCaster?: Maybe<Scalars['Boolean']['output']>;
  isDotaPlusSubscriber?: Maybe<Scalars['Boolean']['output']>;
  isStratzPublic: Scalars['Boolean']['output'];
  lastLogOff?: Maybe<Scalars['Long']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  lastMatchRegionId?: Maybe<Scalars['Byte']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  primaryClanId?: Maybe<Scalars['Long']['output']>;
  proSteamAccount?: Maybe<ProSteamAccountType>;
  profileUri?: Maybe<Scalars['String']['output']>;
  rankShift?: Maybe<Scalars['Short']['output']>;
  realName?: Maybe<Scalars['String']['output']>;
  seasonLeaderboardDivisionId?: Maybe<Scalars['Byte']['output']>;
  seasonLeaderboardRank?: Maybe<Scalars['Short']['output']>;
  seasonRank?: Maybe<Scalars['Byte']['output']>;
  smurfFlag?: Maybe<Scalars['Byte']['output']>;
  stateCode?: Maybe<Scalars['String']['output']>;
  timeCreated?: Maybe<Scalars['Long']['output']>;
};

export type SteamApiDetailOutageType = {
  __typename?: 'SteamApiDetailOutageType';
  dateTime?: Maybe<Scalars['Long']['output']>;
  secondsOffline?: Maybe<Scalars['Int']['output']>;
};

export type SteamApiDetailType = {
  __typename?: 'SteamApiDetailType';
  isOnline: Scalars['Boolean']['output'];
  outages?: Maybe<Array<Maybe<SteamApiDetailOutageType>>>;
};

export enum StratzApiType {
  DataCollector = 'DATA_COLLECTOR',
  MultiKey = 'MULTI_KEY'
}

export type StratzQuery = {
  __typename?: 'StratzQuery';
  admin?: Maybe<AdminQuery>;
  /** Returns a list of Stratz blogs. */
  blogs?: Maybe<Array<Maybe<BlogType>>>;
  /** Returns a list of languages and an Id for reference. This is used throughout the site. */
  languages?: Maybe<Array<Maybe<LanguageType>>>;
  /** Returns a list of Stratz blogs. */
  matchRetry?: Maybe<Scalars['Boolean']['output']>;
  /** Returns a list of News Items released by Dota 2 directly. */
  news?: Maybe<Array<Maybe<NewsItemType>>>;
  page?: Maybe<PageQuery>;
  search?: Maybe<SearchType>;
  /** Shows the availability to major components required in the STRATZ foundation. */
  status?: Maybe<ServerStatusType>;
  /** Home page data that shows the total count of players and matches in our database. */
  ticker?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  user?: Maybe<UserQuery>;
};


export type StratzQueryBlogsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type StratzQueryMatchRetryArgs = {
  id: Scalars['Long']['input'];
};


export type StratzQuerySearchArgs = {
  request?: InputMaybe<FilterSearchRequestType>;
};

export enum Streak {
  KillStreak = 'KILL_STREAK',
  MultiKill = 'MULTI_KILL'
}

export type StreakEventType = {
  __typename?: 'StreakEventType';
  heroId?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
  type?: Maybe<Streak>;
  value: Scalars['Int']['output'];
};

export type Ti2020CustomGameRoomModifierType = {
  __typename?: 'TI2020CustomGameRoomModifierType';
  deathCount?: Maybe<Scalars['Int']['output']>;
  difficulty?: Maybe<AghanimLabMatchDifficultyEnum>;
  eliteDeathCount?: Maybe<Scalars['Int']['output']>;
  eliteMatchCount?: Maybe<Scalars['Int']['output']>;
  eliteWinCount?: Maybe<Scalars['Int']['output']>;
  matchCount?: Maybe<Scalars['Int']['output']>;
  modifierId?: Maybe<Scalars['Short']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};

export enum TableCalculateEnum {
  Average = 'AVERAGE',
  Highest = 'HIGHEST',
  Lowest = 'LOWEST',
  Median = 'MEDIAN'
}

export type TeamMatchesRequestType = {
  /** An array of award ids to include in this query, excluding all results that do not include one of these awards. The player award types include MVP (1), Top Core (2), and Top Support (3). */
  awardIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The end DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  endDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** An array of game mode ids to include in this query, excluding all results that do not include one of these game modes. */
  gameModeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of game version ids to include in this query, excluding all results that do not include one of these game versions. */
  gameVersionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** STRATZ gives 3 players in each game an award for playing well. MVP, Top Core, Top Support (enum MatchPlayerAwardType). If you include a query of 'steamAccountId' then it will require that player to have gotten at least 1 of these awards for each match result. */
  hasAward?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of hero ids to include in this query, excluding all results that do not include one of these heroes. */
  heroIds?: InputMaybe<Array<InputMaybe<Scalars['Short']['input']>>>;
  /** Whether STRATZ has yet parsed the data of the match or not, represented in a boolean. */
  isParsed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Include all matches that are party games, excluding all others. */
  isParty?: InputMaybe<Scalars['Boolean']['input']>;
  /** STRATZ applys an formula to determine if a game is considered 'real'. We attempt to detect AFKers, leavers, feeders, etc. 'IsStats' will return matches that do not include any of these poor quality matches. */
  isStats?: InputMaybe<Scalars['Boolean']['input']>;
  /** An array of lane ids (enum MatchLaneType) to include in this query, excluding all results that do not include one of these lanes. Roaming = 0, SafeLane = 1, Midlane = 2, Offlane = 3, Jungle = 4 */
  laneIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A league id to include in this query, excluding all results that do not have this league id. */
  leagueId?: InputMaybe<Scalars['Int']['input']>;
  /** An array of lobby type ids to include in this query, excluding all results that do not include one of these lobby types. */
  lobbyTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  /** An array of Dota match ids to include in this query. */
  matchIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  /** Determines if you want a single player returned, only the player by SteamAccountId, or if you want all 10 players in the match. */
  playerList?: InputMaybe<FindMatchPlayerList>;
  /** An array of positions ids (enum MatchPlayerPositionType) to include in this query, excluding all results that do not include one of these lanes. */
  positionIds?: InputMaybe<Array<InputMaybe<MatchPlayerPositionType>>>;
  /** An array of rank ids to include in this query, excluding all results that do not include one of these ranks. The value ranges from 0-80 with 0 being unknown MMR and 1-80 is low to high MMR brackets. Example: 74 is Divine with 4 Stars. */
  rankIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of region ids to include in this query, excluding all results that do not include one of these regions. */
  regionIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of role ids (enum MatchPlayerRoleType) to include in this query, excluding all results that do not include one of these roles. Core = 0, Light Support = 1, Hard Support = 2 */
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** A series id to include in this query, excluding all results that do not have this series id. */
  seriesId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to skip before collecting your query. Hint: Paging */
  skip: Scalars['Int']['input'];
  /** The start DateTime of the Dota match(es) to include in this query, represented in unix seconds. */
  startDateTime?: InputMaybe<Scalars['Long']['input']>;
  /** The steam account id to include in this query, excluding all results that do not have this steam account id. */
  steamAccountId?: InputMaybe<Scalars['Long']['input']>;
  /** The amount of matches to have returned in your query. Max :  */
  take: Scalars['Int']['input'];
  /** An array of hero ids found on your team to include in this query, excluding all results that do not include one of these heroes found on your team. */
  withFriendHeroIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** An array of steam account ids found on your team to include in this query, excluding all results that do not include one of these steam accounts found on your team. */
  withFriendSteamAccountIds?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
};

export type TeamPrizeType = {
  __typename?: 'TeamPrizeType';
  league?: Maybe<LeagueType>;
  leagueId?: Maybe<Scalars['Int']['output']>;
  prizeAmount?: Maybe<Scalars['Float']['output']>;
  standing?: Maybe<Scalars['Int']['output']>;
  team?: Maybe<TeamType>;
  teamId?: Maybe<Scalars['Int']['output']>;
};

export type TeamType = {
  __typename?: 'TeamType';
  bannerLogo?: Maybe<Scalars['String']['output']>;
  baseLogo?: Maybe<Scalars['String']['output']>;
  coachSteamAccount?: Maybe<SteamAccountType>;
  coachSteamAccountId?: Maybe<Scalars['Long']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  dateCreated?: Maybe<Scalars['Long']['output']>;
  /** Find match details by team id. The return is modified to group the data by the GroupBy parameter. */
  heroPickBan?: Maybe<Array<Maybe<MatchPickBanGroupByType>>>;
  id: Scalars['Int']['output'];
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  isPro?: Maybe<Scalars['Boolean']['output']>;
  lastMatchDateTime?: Maybe<Scalars['Long']['output']>;
  /** Find a list of all the leagues that this team has played in. */
  leagues?: Maybe<Array<Maybe<LeagueType>>>;
  logo?: Maybe<Scalars['String']['output']>;
  lossCount?: Maybe<Scalars['Int']['output']>;
  /** Find match details by leauge id. */
  matches?: Maybe<Array<Maybe<MatchType>>>;
  /** Find match details by team id. The return is modified to group the data by the GroupBy parameter. */
  matchesGroupBy?: Maybe<Array<Maybe<MatchGroupByType>>>;
  /** A List of all the players for a team. */
  members?: Maybe<Array<Maybe<SteamAccountTeamMemberType>>>;
  name?: Maybe<Scalars['String']['output']>;
  /** Find match details by series id. */
  series?: Maybe<Array<Maybe<SeriesType>>>;
  tag?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  winCount?: Maybe<Scalars['Int']['output']>;
};


export type TeamTypeHeroPickBanArgs = {
  request: HeroPickBanRequestType;
};


export type TeamTypeMatchesArgs = {
  request: TeamMatchesRequestType;
};


export type TeamTypeMatchesGroupByArgs = {
  request: PlayerMatchesGroupByRequestType;
};


export type TeamTypeMembersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type TeamTypeSeriesArgs = {
  request: FilterSeriesRequestType;
};

export type TopPlayersByHeroType = {
  __typename?: 'TopPlayersByHeroType';
  heroId?: Maybe<Scalars['Short']['output']>;
  players?: Maybe<Array<Maybe<PlayerLeaderBoardByHeroType>>>;
};

export type TotalMatchCountType = {
  __typename?: 'TotalMatchCountType';
  matchCount?: Maybe<Scalars['Long']['output']>;
};

export type TotalPlayerCountType = {
  __typename?: 'TotalPlayerCountType';
  playerCount?: Maybe<Scalars['Long']['output']>;
};

export type TowerDamageDetailType = {
  __typename?: 'TowerDamageDetailType';
  attacker?: Maybe<Scalars['Short']['output']>;
  byAbility?: Maybe<Scalars['Short']['output']>;
  byItem?: Maybe<Scalars['Short']['output']>;
  damage: Scalars['Int']['output'];
  fromNpc?: Maybe<Scalars['Short']['output']>;
  npcId?: Maybe<Scalars['Short']['output']>;
  time: Scalars['Int']['output'];
};

export type TwitchTrackerPlayerHeroType = {
  __typename?: 'TwitchTrackerPlayerHeroType';
  heroId: Scalars['Int']['output'];
  matchCount: Scalars['Int']['output'];
  winCount: Scalars['Int']['output'];
};

export type TwitchTrackerPlayerMatchType = {
  __typename?: 'TwitchTrackerPlayerMatchType';
  assistCount?: Maybe<Scalars['Short']['output']>;
  award?: Maybe<Scalars['Byte']['output']>;
  deathCount?: Maybe<Scalars['Short']['output']>;
  endDateTime?: Maybe<Scalars['Long']['output']>;
  heroId: Scalars['Int']['output'];
  isVictory: Scalars['Boolean']['output'];
  killCount?: Maybe<Scalars['Short']['output']>;
  lane?: Maybe<MatchLaneType>;
  matchId?: Maybe<Scalars['Long']['output']>;
  position?: Maybe<MatchPlayerPositionType>;
  role?: Maybe<MatchPlayerRoleType>;
};

export type TwitchTrackerPlayerType = {
  __typename?: 'TwitchTrackerPlayerType';
  activity?: Maybe<PlayerBehaviorActivity>;
  avatar?: Maybe<Scalars['String']['output']>;
  coreCountLast100: Scalars['Int']['output'];
  leaderboardRank?: Maybe<Scalars['Int']['output']>;
  matchCountLast100: Scalars['Int']['output'];
  matches?: Maybe<Array<Maybe<TwitchTrackerPlayerMatchType>>>;
  name?: Maybe<Scalars['String']['output']>;
  proPlayerName?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  steamAccountId?: Maybe<Scalars['Long']['output']>;
  topHeroLast100?: Maybe<Array<Maybe<TwitchTrackerPlayerHeroType>>>;
  uniqueHeroLast100: Scalars['Int']['output'];
  winCountLast100: Scalars['Int']['output'];
};

export type UpdateFollowerRequestType = {
  /** FieldDescription */
  dailyEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /** FieldDescription */
  emailLevel?: InputMaybe<Scalars['Byte']['input']>;
  /** FieldDescription */
  feedLevel?: InputMaybe<Scalars['Byte']['input']>;
  /** FieldDescription */
  monthlyEmail?: InputMaybe<Scalars['Boolean']['input']>;
  /** FieldDescription */
  overrideAllUsers?: InputMaybe<Scalars['Boolean']['input']>;
  /** FieldDescription */
  weeklyEmail?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateMatchReplayMatchUploadPlayerObjectType = {
  /** FieldDescription */
  position?: InputMaybe<MatchPlayerPositionType>;
  /** FieldDescription */
  steamAccountId: Scalars['Long']['input'];
};

export type UpdateMatchReplayUploadObjectType = {
  /** FieldDescription */
  direTeamId?: InputMaybe<Scalars['Long']['input']>;
  /** FieldDescription */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** FieldDescription */
  leagueId?: InputMaybe<Scalars['Long']['input']>;
  /** FieldDescription */
  matchId: Scalars['Long']['input'];
  /** FieldDescription */
  matchReplayUploadTeamId: Scalars['Long']['input'];
  /** FieldDescription */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** FieldDescription */
  players?: InputMaybe<Array<InputMaybe<UpdateMatchReplayMatchUploadPlayerObjectType>>>;
  /** FieldDescription */
  radiantTeamId?: InputMaybe<Scalars['Long']['input']>;
};

export type UserHomepageType = {
  __typename?: 'UserHomepageType';
  activeLeagueGames?: Maybe<Array<Maybe<HomepageHeroSynergyType>>>;
  /** A list of blog components to be displayed separately on the homepage. */
  blogs?: Maybe<Array<Maybe<BlogType>>>;
  inProgressLeagues?: Maybe<Array<Maybe<LeagueType>>>;
  leagueMetas?: Maybe<Array<Maybe<LeagueMetaType>>>;
  matchAwards?: Maybe<Array<Maybe<HomepageHeroSynergyType>>>;
  recentHighImps?: Maybe<Array<Maybe<HomepageHeroSynergyType>>>;
  recentMatches?: Maybe<Array<Maybe<HomepageHeroSynergyType>>>;
  recentRampages?: Maybe<Array<Maybe<HomepageHeroSynergyType>>>;
  recentWinStreaks?: Maybe<Array<Maybe<HomepageHeroSynergyType>>>;
  topLiveGames?: Maybe<Array<Maybe<HomepageHeroSynergyType>>>;
  topPlayersByHeroType?: Maybe<Array<Maybe<TopPlayersByHeroType>>>;
  topProPlayers?: Maybe<Array<Maybe<ProPlayerFollowType>>>;
  topSynergiesByHero?: Maybe<Array<Maybe<HomepageHeroSynergyType>>>;
  totalComponents?: Maybe<Scalars['Int']['output']>;
  upcomingLeagues?: Maybe<Array<Maybe<LeagueType>>>;
};


export type UserHomepageTypeActiveLeagueGamesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeBlogsArgs = {
  excludedBlogIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeInProgressLeaguesArgs = {
  excludedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  includedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  includedLeagueTierIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeLeagueMetasArgs = {
  excludedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  includedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  includedLeagueTierIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeMatchAwardsArgs = {
  matchPlayerAwardTypeIds?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeRecentHighImpsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeRecentMatchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeRecentRampagesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeRecentWinStreaksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeTopLiveGamesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeTopPlayersByHeroTypeArgs = {
  heroComponentsTake?: InputMaybe<Scalars['Int']['input']>;
  heroIds?: InputMaybe<Scalars['Int']['input']>;
  playersTake?: InputMaybe<Scalars['Int']['input']>;
  rankBracketIds?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeTopProPlayersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeTopSynergiesByHeroArgs = {
  heroIds?: InputMaybe<Scalars['Int']['input']>;
  synergyComponentsTake?: InputMaybe<Scalars['Int']['input']>;
};


export type UserHomepageTypeUpcomingLeaguesArgs = {
  excludedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  includedLeagueIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  includedLeagueTierIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type UserQuery = {
  __typename?: 'UserQuery';
  /** Returns a list of feed events for the logged in user. */
  feed?: Maybe<FeedResponseType>;
  /** Gets the list of followers the person is following. */
  followers?: Maybe<Array<Maybe<FollowerType>>>;
  /** Gets the list of followers the person is following. */
  following?: Maybe<Array<Maybe<FollowerType>>>;
  /** Returns a list of Stratz blogs. */
  homepage?: Maybe<UserHomepageType>;
  /** Find user details of the currently logged in user. */
  profile?: Maybe<UserType>;
};


export type UserQueryFeedArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type UserQueryHomepageArgs = {
  take: Scalars['Int']['input'];
};

export type UserType = {
  __typename?: 'UserType';
  followerCount?: Maybe<Scalars['Int']['output']>;
  followingCount?: Maybe<Scalars['Int']['output']>;
  followingLeagueCount?: Maybe<Scalars['Int']['output']>;
  followingTeamCount?: Maybe<Scalars['Int']['output']>;
  profile?: Maybe<CaptainJackIdentityPrivateProfileType>;
  recentMatch?: Maybe<MatchType>;
  steamAccount?: Maybe<SteamAccountType>;
  stratzApiApplications?: Maybe<Array<Maybe<CaptainJackIdentityApiApplicationType>>>;
};

export type VendorQuery = {
  __typename?: 'VendorQuery';
  dotaNext?: Maybe<DotaNextQuery>;
  /** Used by the Dota 2 Twitch Tracker for Dota Stats */
  twitchTracker?: Maybe<TwitchTrackerPlayerType>;
};


export type VendorQueryTwitchTrackerArgs = {
  steamAccountId: Scalars['Long']['input'];
};

export enum WardType {
  Observer = 'OBSERVER',
  Sentry = 'SENTRY'
}

export enum XpReason {
  Creeps = 'CREEPS',
  Heroes = 'HEROES',
  Other = 'OTHER',
  Outposts = 'OUTPOSTS',
  Roshan = 'ROSHAN',
  TomeOfKnowledge = 'TOME_OF_KNOWLEDGE'
}

export type YogurtMutation = {
  __typename?: 'YogurtMutation';
  /** Add a member to a match replay upload team. steamAccountId and matchReplayUploadTeamId are required input fields. */
  addTeamMember?: Maybe<Scalars['Boolean']['output']>;
  /** Create a new match replay upload team. teamName, emailAddress, and teamId are required input fields. */
  createTeam?: Maybe<MatchReplayUploadTeamType>;
  /** Delete the data of a match replay upload, removing the match replay upload from the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  delete?: Maybe<Scalars['Boolean']['output']>;
  /** Import a public match as a match replay upload to the match replay upload team's data set. matchReplayUploadTeamId and matchId are required input fields. */
  importMatch?: Maybe<Scalars['Boolean']['output']>;
  /** If the Picks and Bans for a match are missing or invalid, this allows you to update them. */
  importPickBans?: Maybe<Scalars['Boolean']['output']>;
  /** Invalidate the data of a match replay upload, removing the match replay upload from the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  invalidate?: Maybe<Scalars['Boolean']['output']>;
  /** Delete the data of a match replay upload, removing the match replay upload from the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  linkSeriesId?: Maybe<Scalars['Boolean']['output']>;
  /** Remove the series id for all of the input matches. matchReplayUploadTeamId and matchIds are required input fields. */
  removeSeriesId?: Maybe<Scalars['Boolean']['output']>;
  /** Remove a member of a match replay upload team. memberCaptainJackIdentityId and matchReplayUploadTeamId are required input fields. */
  removeTeamMember?: Maybe<Scalars['Boolean']['output']>;
  /** Set the default team of a match replay upload team member. memberCaptainJackIdentityId and matchReplayUploadTeamId are required input fields. */
  setTeamMemberDefaultTeam?: Maybe<Scalars['Boolean']['output']>;
  /** Update the data of a match replay upload. updateMatchReplayUploadObject is a required input field. */
  update?: Maybe<Scalars['Boolean']['output']>;
  /** Update a new match replay upload team. matchReplayUploadTeamId is a required input field. */
  updateTeam?: Maybe<Scalars['Boolean']['output']>;
  /** Update a member of a match replay upload team. memberCaptainJackIdentityId, matchReplayUploadTeamId, and isAdmin are required input fields. */
  updateTeamMember?: Maybe<Scalars['Boolean']['output']>;
  /** Validate the data of a match replay upload, adding the match replay upload to the queryable data set associated with the match replay upload team. matchReplayUploadTeamId and matchId are required input fields. */
  validate?: Maybe<Scalars['Boolean']['output']>;
};


export type YogurtMutationAddTeamMemberArgs = {
  matchReplayUploadTeamId: Scalars['Long']['input'];
  steamAccountId: Scalars['Long']['input'];
};


export type YogurtMutationCreateTeamArgs = {
  emailAddress: Scalars['String']['input'];
  matchReplayUploadTeamName: Scalars['String']['input'];
  teamId: Scalars['Int']['input'];
};


export type YogurtMutationDeleteArgs = {
  matchId: Scalars['Long']['input'];
  matchReplayUploadTeamId: Scalars['Long']['input'];
};


export type YogurtMutationImportMatchArgs = {
  matchId: Scalars['Long']['input'];
  matchReplayUploadTeamId: Scalars['Long']['input'];
};


export type YogurtMutationImportPickBansArgs = {
  matchId: Scalars['Long']['input'];
  matchReplayUploadTeamId: Scalars['Long']['input'];
  pickBans: Array<InputMaybe<ImportPickBanType>>;
};


export type YogurtMutationInvalidateArgs = {
  matchId: Scalars['Long']['input'];
  matchReplayUploadTeamId: Scalars['Long']['input'];
};


export type YogurtMutationLinkSeriesIdArgs = {
  matchIds: Array<InputMaybe<Scalars['Long']['input']>>;
  matchReplayUploadTeamId: Scalars['Long']['input'];
};


export type YogurtMutationRemoveSeriesIdArgs = {
  matchIds: Array<InputMaybe<Scalars['Long']['input']>>;
  matchReplayUploadTeamId: Scalars['Long']['input'];
};


export type YogurtMutationRemoveTeamMemberArgs = {
  captainJackIdentityId: Scalars['ID']['input'];
  matchReplayUploadTeamId: Scalars['Long']['input'];
};


export type YogurtMutationSetTeamMemberDefaultTeamArgs = {
  captainJackIdentityId: Scalars['ID']['input'];
  matchReplayUploadTeamId: Scalars['Long']['input'];
};


export type YogurtMutationUpdateArgs = {
  updateMatchReplayUploadObject: UpdateMatchReplayUploadObjectType;
};


export type YogurtMutationUpdateTeamArgs = {
  matchReplayUploadTeamId: Scalars['Long']['input'];
  matchReplayUploadTeamName?: InputMaybe<Scalars['String']['input']>;
  teamId?: InputMaybe<Scalars['Int']['input']>;
};


export type YogurtMutationUpdateTeamMemberArgs = {
  captainJackIdentityId: Scalars['ID']['input'];
  isAdmin: Scalars['Boolean']['input'];
  matchReplayUploadTeamId: Scalars['Long']['input'];
};


export type YogurtMutationValidateArgs = {
  matchId: Scalars['Long']['input'];
  matchReplayUploadTeamId: Scalars['Long']['input'];
};

export type YogurtQuery = {
  __typename?: 'YogurtQuery';
  /** Find the defualt match replay upload team associated with the currently logged in user. */
  defaultTeam?: Maybe<MatchReplayUploadTeamType>;
  /** Find the list of Hero's in the game and determine basic output by grouping them together. */
  heroSummary?: Maybe<Array<Maybe<MatchReplayUploadHeroSummaryType>>>;
  /** Find match replay uploads by match replay upload team id. matchReplayUploadTeamId and request are required input fields. */
  overview?: Maybe<MatchReplayUploadOverviewType>;
  /** Find a match replay upload team by match replay upload team id. matchReplayUploadTeamId is a required input field. */
  team?: Maybe<MatchReplayUploadTeamType>;
  /** Find match replay upload team members by match replay upload team id. matchReplayUploadTeamId is a required input field. */
  teamMembers?: Maybe<Array<Maybe<MatchReplayUploadTeamMemberType>>>;
  /** Find all match replay upload teams associated with the currently logged in user. */
  teams?: Maybe<Array<Maybe<MatchReplayUploadTeamType>>>;
};


export type YogurtQueryHeroSummaryArgs = {
  matchReplayUploadTeamId: Scalars['Long']['input'];
  request?: InputMaybe<FilterMatchReplayUploadRequestType>;
};


export type YogurtQueryOverviewArgs = {
  matchReplayUploadTeamId: Scalars['Long']['input'];
  request?: InputMaybe<FilterMatchReplayUploadRequestType>;
};


export type YogurtQueryTeamArgs = {
  matchReplayUploadTeamId: Scalars['Long']['input'];
};


export type YogurtQueryTeamMembersArgs = {
  matchReplayUploadTeamId: Scalars['Long']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  LiveEventType: ( LiveEventMatchDireTideStompType ) | ( LiveEventPlayerDireTideCandyScoredType ) | ( LiveEventPlayerHeroAssistsType ) | ( LiveEventPlayerHeroBuildingDamageType ) | ( LiveEventPlayerHeroDewardType ) | ( LiveEventPlayerHeroDotaPlusLevelType ) | ( LiveEventPlayerHeroExpPerMinuteType ) | ( LiveEventPlayerHeroGoldPerMinuteType ) | ( LiveEventPlayerHeroHealingType ) | ( LiveEventPlayerHeroHeroDamageType ) | ( LiveEventPlayerHeroHighImpType ) | ( LiveEventPlayerHeroItemPurchaseType ) | ( LiveEventPlayerHeroKillsType ) | ( LiveEventPlayerHeroWinStreakType ) | ( LiveEventPlayerRampageType ) | ( LiveEventPlayerRankUpType ) | ( LiveEventPlayerWinStreakType ) | ( LiveEventProPlayerLiveType );
  MatchGroupByType: ( MatchGroupByAssistsType ) | ( MatchGroupByAwardType ) | ( MatchGroupByClusterType ) | ( MatchGroupByDateDayHeroType ) | ( MatchGroupByDateDayType ) | ( MatchGroupByDeathsType ) | ( MatchGroupByDurationMinutesType ) | ( MatchGroupByFactionType ) | ( MatchGroupByGameModeType ) | ( MatchGroupByGameVersionType ) | ( MatchGroupByGoldPerMinuteType ) | ( MatchGroupByHeroPerformanceType ) | ( MatchGroupByHeroType ) | ( MatchGroupByHourType ) | ( MatchGroupByIsIntentionalFeedingType ) | ( MatchGroupByIsLeagueType ) | ( MatchGroupByIsLeaverType ) | ( MatchGroupByIsPartyType ) | ( MatchGroupByIsRandomType ) | ( MatchGroupByIsSeriesType ) | ( MatchGroupByIsStatsType ) | ( MatchGroupByIsVictoryType ) | ( MatchGroupByKillsType ) | ( MatchGroupByLaneType ) | ( MatchGroupByLeagueIdType ) | ( MatchGroupByLevelType ) | ( MatchGroupByLobbyTypeType ) | ( MatchGroupByPositionType ) | ( MatchGroupByRegionType ) | ( MatchGroupByRoamLaneType ) | ( MatchGroupByRoleType ) | ( MatchGroupBySteamAccountIdAgainstTeamType ) | ( MatchGroupBySteamAccountIdHeroIdAgainstTeamType ) | ( MatchGroupBySteamAccountIdHeroIdType ) | ( MatchGroupBySteamAccountIdHeroIdWithTeamType ) | ( MatchGroupBySteamAccountIdType ) | ( MatchGroupBySteamAccountIdWithTeamType ) | ( MatchGroupByTeamType ) | ( MatchGroupByTotalKillsType );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AbilityActiveListType: ResolverTypeWrapper<AbilityActiveListType>;
  AbilityAttributeType: ResolverTypeWrapper<AbilityAttributeType>;
  AbilityCustomGameLanguageType: ResolverTypeWrapper<AbilityCustomGameLanguageType>;
  AbilityCustomGameType: ResolverTypeWrapper<AbilityCustomGameType>;
  AbilityDispellEnum: AbilityDispellEnum;
  AbilityLanguageType: ResolverTypeWrapper<AbilityLanguageType>;
  AbilityLearnEventsType: ResolverTypeWrapper<AbilityLearnEventsType>;
  AbilityStatType: ResolverTypeWrapper<AbilityStatType>;
  AbilityType: ResolverTypeWrapper<AbilityType>;
  AbilityUsedEventsType: ResolverTypeWrapper<AbilityUsedEventsType>;
  AdminMutation: ResolverTypeWrapper<AdminMutation>;
  AdminQuery: ResolverTypeWrapper<AdminQuery>;
  AghanimLabDepthListAscensionAbilitiesEnum: AghanimLabDepthListAscensionAbilitiesEnum;
  AghanimLabDepthListAscensionAbilitiesObjectType: ResolverTypeWrapper<AghanimLabDepthListAscensionAbilitiesObjectType>;
  AghanimLabDepthListEncounterEnum: AghanimLabDepthListEncounterEnum;
  AghanimLabDepthListRewardEnum: AghanimLabDepthListRewardEnum;
  AghanimLabHeroAbilityType: ResolverTypeWrapper<AghanimLabHeroAbilityType>;
  AghanimLabHeroCompositionType: ResolverTypeWrapper<AghanimLabHeroCompositionType>;
  AghanimLabHeroWinRateType: ResolverTypeWrapper<AghanimLabHeroWinRateType>;
  AghanimLabMatchDepthListType: ResolverTypeWrapper<AghanimLabMatchDepthListType>;
  AghanimLabMatchDifficultyEnum: AghanimLabMatchDifficultyEnum;
  AghanimLabMatchType: ResolverTypeWrapper<AghanimLabMatchType>;
  AghanimLabPlayerBlessingEnum: AghanimLabPlayerBlessingEnum;
  AghanimLabPlayerBlessingObjectType: ResolverTypeWrapper<AghanimLabPlayerBlessingObjectType>;
  AghanimLabPlayerDepthListType: ResolverTypeWrapper<AghanimLabPlayerDepthListType>;
  AghanimLabPlayerSeasonOneType: ResolverTypeWrapper<AghanimLabPlayerSeasonOneType>;
  AghanimLabRoomType: ResolverTypeWrapper<AghanimLabRoomType>;
  AssistDetailType: ResolverTypeWrapper<AssistDetailType>;
  BasicRegionType: BasicRegionType;
  BattlepassPredictionHeroType: ResolverTypeWrapper<BattlepassPredictionHeroType>;
  BattlepassPredictionIdValueType: ResolverTypeWrapper<BattlepassPredictionIdValueType>;
  BattlepassPredictionPlayerType: ResolverTypeWrapper<BattlepassPredictionPlayerType>;
  BattlepassPredictionTeamType: ResolverTypeWrapper<BattlepassPredictionTeamType>;
  BattlepassPredictionTournamentType: ResolverTypeWrapper<BattlepassPredictionTournamentType>;
  BlogType: ResolverTypeWrapper<BlogType>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BuildingType: BuildingType;
  BuyBackDetailType: ResolverTypeWrapper<BuyBackDetailType>;
  Byte: ResolverTypeWrapper<Scalars['Byte']['output']>;
  CaptainJackIdentityApiApplicationType: ResolverTypeWrapper<CaptainJackIdentityApiApplicationType>;
  CaptainJackIdentityPrivateProfileType: ResolverTypeWrapper<CaptainJackIdentityPrivateProfileType>;
  CaptainJackIdentityProfileUpdateRequestType: CaptainJackIdentityProfileUpdateRequestType;
  CaptainJackIdentityPublicProfileType: ResolverTypeWrapper<CaptainJackIdentityPublicProfileType>;
  ClusterType: ResolverTypeWrapper<ClusterType>;
  ConstantQuery: ResolverTypeWrapper<ConstantQuery>;
  Damage: Damage;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeathDetailType: ResolverTypeWrapper<DeathDetailType>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  DeleteProSteamAccountRequestType: DeleteProSteamAccountRequestType;
  DireTideCustomGameHeroWinDayType: ResolverTypeWrapper<DireTideCustomGameHeroWinDayType>;
  DireTideCustomGameMatchType: ResolverTypeWrapper<DireTideCustomGameMatchType>;
  DireTideCustomGamePlayerType: ResolverTypeWrapper<DireTideCustomGamePlayerType>;
  DotaMutation: ResolverTypeWrapper<{}>;
  DotaNextQuery: ResolverTypeWrapper<DotaNextQuery>;
  DotaNextWithAllyType: ResolverTypeWrapper<DotaNextWithAllyType>;
  DotaPlusWeekType: ResolverTypeWrapper<DotaPlusWeekType>;
  DotaQuery: ResolverTypeWrapper<{}>;
  DotaSubscription: ResolverTypeWrapper<{}>;
  DotaUserMutation: ResolverTypeWrapper<DotaUserMutation>;
  ExperienceDetailType: ResolverTypeWrapper<ExperienceDetailType>;
  Feat: Feat;
  FeatType: ResolverTypeWrapper<FeatType>;
  FeedResponseType: ResolverTypeWrapper<FeedResponseType>;
  FeedType: ResolverTypeWrapper<FeedType>;
  FilterAghanimLabHeroCompositionRequestType: FilterAghanimLabHeroCompositionRequestType;
  FilterAghanimLabMatchOrderBy: FilterAghanimLabMatchOrderBy;
  FilterAghanimLabMatchRequestType: FilterAghanimLabMatchRequestType;
  FilterDireTide2020CustomGameMatchOrderBy: FilterDireTide2020CustomGameMatchOrderBy;
  FilterDireTideCustomMatchRequestType: FilterDireTideCustomMatchRequestType;
  FilterHeroRampageType: FilterHeroRampageType;
  FilterHeroWinRequestGroupBy: FilterHeroWinRequestGroupBy;
  FilterLeaderboardGuildOrderBy: FilterLeaderboardGuildOrderBy;
  FilterLeaderboardGuildRequestType: FilterLeaderboardGuildRequestType;
  FilterLeaderboardHeroRequestType: FilterLeaderboardHeroRequestType;
  FilterLeaderboardOrder: FilterLeaderboardOrder;
  FilterMatchGroupOrderByEnum: FilterMatchGroupOrderByEnum;
  FilterMatchReplayUploadRequestType: FilterMatchReplayUploadRequestType;
  FilterOrder: FilterOrder;
  FilterOrderBy: FilterOrderBy;
  FilterPlayerTeammateEnum: FilterPlayerTeammateEnum;
  FilterSearchRequestType: FilterSearchRequestType;
  FilterSeasonLeaderboardRequestType: FilterSeasonLeaderboardRequestType;
  FilterSeriesRequestType: FilterSeriesRequestType;
  FindMatchPlayerGroupBy: FindMatchPlayerGroupBy;
  FindMatchPlayerList: FindMatchPlayerList;
  FindMatchPlayerOrderBy: FindMatchPlayerOrderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FollowerType: ResolverTypeWrapper<FollowerType>;
  GameModeEnumType: GameModeEnumType;
  GameModeType: ResolverTypeWrapper<GameModeType>;
  GameVersionType: ResolverTypeWrapper<GameVersionType>;
  GoldDetailType: ResolverTypeWrapper<GoldDetailType>;
  GoldReason: GoldReason;
  Guid: ResolverTypeWrapper<Scalars['Guid']['output']>;
  GuildMemberType: ResolverTypeWrapper<GuildMemberType>;
  GuildType: ResolverTypeWrapper<GuildType>;
  HealDetailType: ResolverTypeWrapper<HealDetailType>;
  HeroAbilityMaxType: ResolverTypeWrapper<HeroAbilityMaxType>;
  HeroAbilityMinType: ResolverTypeWrapper<HeroAbilityMinType>;
  HeroAbilityTalentType: ResolverTypeWrapper<HeroAbilityTalentType>;
  HeroAbilityType: ResolverTypeWrapper<HeroAbilityType>;
  HeroBanType: ResolverTypeWrapper<HeroBanType>;
  HeroDamageDetailType: ResolverTypeWrapper<HeroDamageDetailType>;
  HeroDotaPlusLeaderboardRankTopType: ResolverTypeWrapper<HeroDotaPlusLeaderboardRankTopType>;
  HeroDotaPlusLeaderboardRankType: ResolverTypeWrapper<HeroDotaPlusLeaderboardRankType>;
  HeroDryadType: ResolverTypeWrapper<HeroDryadType>;
  HeroGuideListType: ResolverTypeWrapper<HeroGuideListType>;
  HeroGuideType: ResolverTypeWrapper<HeroGuideType>;
  HeroItemBootPurchaseType: ResolverTypeWrapper<HeroItemBootPurchaseType>;
  HeroItemPurchaseType: ResolverTypeWrapper<HeroItemPurchaseType>;
  HeroItemStartingPurchaseType: ResolverTypeWrapper<HeroItemStartingPurchaseType>;
  HeroLaneOutcomeType: ResolverTypeWrapper<HeroLaneOutcomeType>;
  HeroLanguageType: ResolverTypeWrapper<HeroLanguageType>;
  HeroMatchupType: ResolverTypeWrapper<HeroMatchupType>;
  HeroNeutralItemType: ResolverTypeWrapper<HeroNeutralItemType>;
  HeroPickBanRequestType: HeroPickBanRequestType;
  HeroPositionTimeDetailType: ResolverTypeWrapper<HeroPositionTimeDetailType>;
  HeroPrimaryAttributeType: HeroPrimaryAttributeType;
  HeroRampageObjectType: ResolverTypeWrapper<HeroRampageObjectType>;
  HeroRoleEnum: HeroRoleEnum;
  HeroRoleType: ResolverTypeWrapper<HeroRoleType>;
  HeroStatType: ResolverTypeWrapper<HeroStatType>;
  HeroStatsHeroDryadType: ResolverTypeWrapper<HeroStatsHeroDryadType>;
  HeroStatsQuery: ResolverTypeWrapper<HeroStatsQuery>;
  HeroTalentType: ResolverTypeWrapper<HeroTalentType>;
  HeroType: ResolverTypeWrapper<HeroType>;
  HeroWinDayType: ResolverTypeWrapper<HeroWinDayType>;
  HeroWinGameVersionType: ResolverTypeWrapper<HeroWinGameVersionType>;
  HeroWinHourType: ResolverTypeWrapper<HeroWinHourType>;
  HeroWinMonthType: ResolverTypeWrapper<HeroWinMonthType>;
  HeroWinWeekType: ResolverTypeWrapper<HeroWinWeekType>;
  HomepageHeroDryadType: ResolverTypeWrapper<HomepageHeroDryadType>;
  HomepageHeroSynergyType: ResolverTypeWrapper<HomepageHeroSynergyType>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImpGeneratorMatchPlayerType: ResolverTypeWrapper<ImpGeneratorMatchPlayerType>;
  ImpGeneratorPlayerEventRequestType: ImpGeneratorPlayerEventRequestType;
  ImpGeneratorPlayerEventType: ResolverTypeWrapper<ImpGeneratorPlayerEventType>;
  ImpGeneratorPlayerRequestType: ImpGeneratorPlayerRequestType;
  ImpGeneratorPlayerType: ResolverTypeWrapper<ImpGeneratorPlayerType>;
  ImpGeneratorRequestType: ImpGeneratorRequestType;
  ImpQuery: ResolverTypeWrapper<ImpQuery>;
  ImportPickBanType: ImportPickBanType;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  InventoryObjectType: ResolverTypeWrapper<InventoryObjectType>;
  InventoryType: ResolverTypeWrapper<InventoryType>;
  ItemAttributeType: ResolverTypeWrapper<ItemAttributeType>;
  ItemComponentType: ResolverTypeWrapper<ItemComponentType>;
  ItemLanguageType: ResolverTypeWrapper<ItemLanguageType>;
  ItemPurchaseType: ResolverTypeWrapper<ItemPurchaseType>;
  ItemStatType: ResolverTypeWrapper<ItemStatType>;
  ItemType: ResolverTypeWrapper<ItemType>;
  ItemUsedEventType: ResolverTypeWrapper<ItemUsedEventType>;
  KillDetailType: ResolverTypeWrapper<KillDetailType>;
  LaneOutcomeEnums: LaneOutcomeEnums;
  Language: Language;
  LanguageType: ResolverTypeWrapper<LanguageType>;
  LastHitDetailType: ResolverTypeWrapper<LastHitDetailType>;
  LeaderboardDivision: LeaderboardDivision;
  LeaderboardQuery: ResolverTypeWrapper<LeaderboardQuery>;
  LeagueBattlePassType: ResolverTypeWrapper<LeagueBattlePassType>;
  LeagueDpcPositionStatObjectType: ResolverTypeWrapper<LeagueDpcPositionStatObjectType>;
  LeagueMatchesRequestType: LeagueMatchesRequestType;
  LeagueMetaDetailType: ResolverTypeWrapper<LeagueMetaDetailType>;
  LeagueMetaType: ResolverTypeWrapper<LeagueMetaType>;
  LeagueNodeDefaultGroupEnum: LeagueNodeDefaultGroupEnum;
  LeagueNodeGroupType: ResolverTypeWrapper<LeagueNodeGroupType>;
  LeagueNodeGroupTypeEnum: LeagueNodeGroupTypeEnum;
  LeagueNodeType: ResolverTypeWrapper<LeagueNodeType>;
  LeaguePrizePoolPercentageType: ResolverTypeWrapper<LeaguePrizePoolPercentageType>;
  LeagueRegion: LeagueRegion;
  LeagueRegisteredPlayerType: ResolverTypeWrapper<LeagueRegisteredPlayerType>;
  LeagueRequestType: LeagueRequestType;
  LeagueStage: LeagueStage;
  LeagueStatType: ResolverTypeWrapper<LeagueStatType>;
  LeagueStreamType: ResolverTypeWrapper<LeagueStreamType>;
  LeagueTableHeroLanesObjectType: ResolverTypeWrapper<LeagueTableHeroLanesObjectType>;
  LeagueTableHeroOverviewType: ResolverTypeWrapper<LeagueTableHeroOverviewType>;
  LeagueTableHeroPlayersObjectType: ResolverTypeWrapper<LeagueTableHeroPlayersObjectType>;
  LeagueTableHeroStatsType: ResolverTypeWrapper<LeagueTableHeroStatsType>;
  LeagueTableHeroType: ResolverTypeWrapper<LeagueTableHeroType>;
  LeagueTablePlayerHeroesObjectType: ResolverTypeWrapper<LeagueTablePlayerHeroesObjectType>;
  LeagueTablePlayerLanesObjectType: ResolverTypeWrapper<LeagueTablePlayerLanesObjectType>;
  LeagueTablePlayerOverviewType: ResolverTypeWrapper<LeagueTablePlayerOverviewType>;
  LeagueTablePlayerStatsType: ResolverTypeWrapper<LeagueTablePlayerStatsType>;
  LeagueTablePlayerType: ResolverTypeWrapper<LeagueTablePlayerType>;
  LeagueTableTeamHeroesObjectType: ResolverTypeWrapper<LeagueTableTeamHeroesObjectType>;
  LeagueTableTeamLanesObjectType: ResolverTypeWrapper<LeagueTableTeamLanesObjectType>;
  LeagueTableTeamOverviewType: ResolverTypeWrapper<LeagueTableTeamOverviewType>;
  LeagueTableTeamStatsType: ResolverTypeWrapper<LeagueTableTeamStatsType>;
  LeagueTableTeamType: ResolverTypeWrapper<LeagueTableTeamType>;
  LeagueTableType: ResolverTypeWrapper<LeagueTableType>;
  LeagueTier: LeagueTier;
  LeagueType: ResolverTypeWrapper<Omit<LeagueType, 'matchesGroupBy'> & { matchesGroupBy?: Maybe<Array<Maybe<ResolversTypes['MatchGroupByType']>>> }>;
  LeaverStatusEnum: LeaverStatusEnum;
  LiveEventMatchDireTideStompType: ResolverTypeWrapper<LiveEventMatchDireTideStompType>;
  LiveEventPlayerDireTideCandyScoredType: ResolverTypeWrapper<LiveEventPlayerDireTideCandyScoredType>;
  LiveEventPlayerHeroAssistsType: ResolverTypeWrapper<LiveEventPlayerHeroAssistsType>;
  LiveEventPlayerHeroBuildingDamageType: ResolverTypeWrapper<LiveEventPlayerHeroBuildingDamageType>;
  LiveEventPlayerHeroDewardType: ResolverTypeWrapper<LiveEventPlayerHeroDewardType>;
  LiveEventPlayerHeroDotaPlusLevelType: ResolverTypeWrapper<LiveEventPlayerHeroDotaPlusLevelType>;
  LiveEventPlayerHeroExpPerMinuteType: ResolverTypeWrapper<LiveEventPlayerHeroExpPerMinuteType>;
  LiveEventPlayerHeroGoldPerMinuteType: ResolverTypeWrapper<LiveEventPlayerHeroGoldPerMinuteType>;
  LiveEventPlayerHeroHealingType: ResolverTypeWrapper<LiveEventPlayerHeroHealingType>;
  LiveEventPlayerHeroHeroDamageType: ResolverTypeWrapper<LiveEventPlayerHeroHeroDamageType>;
  LiveEventPlayerHeroHighImpType: ResolverTypeWrapper<LiveEventPlayerHeroHighImpType>;
  LiveEventPlayerHeroItemPurchaseType: ResolverTypeWrapper<LiveEventPlayerHeroItemPurchaseType>;
  LiveEventPlayerHeroKillsType: ResolverTypeWrapper<LiveEventPlayerHeroKillsType>;
  LiveEventPlayerHeroWinStreakType: ResolverTypeWrapper<LiveEventPlayerHeroWinStreakType>;
  LiveEventPlayerRampageType: ResolverTypeWrapper<LiveEventPlayerRampageType>;
  LiveEventPlayerRankUpType: ResolverTypeWrapper<LiveEventPlayerRankUpType>;
  LiveEventPlayerWinStreakType: ResolverTypeWrapper<LiveEventPlayerWinStreakType>;
  LiveEventProPlayerLiveType: ResolverTypeWrapper<LiveEventProPlayerLiveType>;
  LiveEventType: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['LiveEventType']>;
  LiveQuery: ResolverTypeWrapper<LiveQuery>;
  LobbyTypeEnum: LobbyTypeEnum;
  LobbyTypeType: ResolverTypeWrapper<LobbyTypeType>;
  Long: ResolverTypeWrapper<Scalars['Long']['output']>;
  MapLocationEnums: MapLocationEnums;
  MatchAnalysisOutcomeType: MatchAnalysisOutcomeType;
  MatchGroupByAssistsType: ResolverTypeWrapper<MatchGroupByAssistsType>;
  MatchGroupByAwardType: ResolverTypeWrapper<MatchGroupByAwardType>;
  MatchGroupByClusterType: ResolverTypeWrapper<MatchGroupByClusterType>;
  MatchGroupByDateDayHeroType: ResolverTypeWrapper<MatchGroupByDateDayHeroType>;
  MatchGroupByDateDayType: ResolverTypeWrapper<MatchGroupByDateDayType>;
  MatchGroupByDeathsType: ResolverTypeWrapper<MatchGroupByDeathsType>;
  MatchGroupByDurationMinutesType: ResolverTypeWrapper<MatchGroupByDurationMinutesType>;
  MatchGroupByFactionType: ResolverTypeWrapper<MatchGroupByFactionType>;
  MatchGroupByGameModeType: ResolverTypeWrapper<MatchGroupByGameModeType>;
  MatchGroupByGameVersionType: ResolverTypeWrapper<MatchGroupByGameVersionType>;
  MatchGroupByGoldPerMinuteType: ResolverTypeWrapper<MatchGroupByGoldPerMinuteType>;
  MatchGroupByHeroPerformanceType: ResolverTypeWrapper<MatchGroupByHeroPerformanceType>;
  MatchGroupByHeroType: ResolverTypeWrapper<MatchGroupByHeroType>;
  MatchGroupByHourType: ResolverTypeWrapper<MatchGroupByHourType>;
  MatchGroupByIsIntentionalFeedingType: ResolverTypeWrapper<MatchGroupByIsIntentionalFeedingType>;
  MatchGroupByIsLeagueType: ResolverTypeWrapper<MatchGroupByIsLeagueType>;
  MatchGroupByIsLeaverType: ResolverTypeWrapper<MatchGroupByIsLeaverType>;
  MatchGroupByIsPartyType: ResolverTypeWrapper<MatchGroupByIsPartyType>;
  MatchGroupByIsRandomType: ResolverTypeWrapper<MatchGroupByIsRandomType>;
  MatchGroupByIsSeriesType: ResolverTypeWrapper<MatchGroupByIsSeriesType>;
  MatchGroupByIsStatsType: ResolverTypeWrapper<MatchGroupByIsStatsType>;
  MatchGroupByIsVictoryType: ResolverTypeWrapper<MatchGroupByIsVictoryType>;
  MatchGroupByKillsType: ResolverTypeWrapper<MatchGroupByKillsType>;
  MatchGroupByLaneType: ResolverTypeWrapper<MatchGroupByLaneType>;
  MatchGroupByLeagueIdType: ResolverTypeWrapper<MatchGroupByLeagueIdType>;
  MatchGroupByLevelType: ResolverTypeWrapper<MatchGroupByLevelType>;
  MatchGroupByLobbyTypeType: ResolverTypeWrapper<MatchGroupByLobbyTypeType>;
  MatchGroupByPositionType: ResolverTypeWrapper<MatchGroupByPositionType>;
  MatchGroupByRegionType: ResolverTypeWrapper<MatchGroupByRegionType>;
  MatchGroupByRoamLaneType: ResolverTypeWrapper<MatchGroupByRoamLaneType>;
  MatchGroupByRoleType: ResolverTypeWrapper<MatchGroupByRoleType>;
  MatchGroupBySteamAccountIdAgainstTeamType: ResolverTypeWrapper<MatchGroupBySteamAccountIdAgainstTeamType>;
  MatchGroupBySteamAccountIdHeroIdAgainstTeamType: ResolverTypeWrapper<MatchGroupBySteamAccountIdHeroIdAgainstTeamType>;
  MatchGroupBySteamAccountIdHeroIdType: ResolverTypeWrapper<MatchGroupBySteamAccountIdHeroIdType>;
  MatchGroupBySteamAccountIdHeroIdWithTeamType: ResolverTypeWrapper<MatchGroupBySteamAccountIdHeroIdWithTeamType>;
  MatchGroupBySteamAccountIdType: ResolverTypeWrapper<MatchGroupBySteamAccountIdType>;
  MatchGroupBySteamAccountIdWithTeamType: ResolverTypeWrapper<MatchGroupBySteamAccountIdWithTeamType>;
  MatchGroupByTeamType: ResolverTypeWrapper<MatchGroupByTeamType>;
  MatchGroupByTotalKillsType: ResolverTypeWrapper<MatchGroupByTotalKillsType>;
  MatchGroupByType: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['MatchGroupByType']>;
  MatchLaneType: MatchLaneType;
  MatchLiveBuildingDetailType: ResolverTypeWrapper<MatchLiveBuildingDetailType>;
  MatchLiveGameState: MatchLiveGameState;
  MatchLiveInsightType: ResolverTypeWrapper<MatchLiveInsightType>;
  MatchLivePickBanType: ResolverTypeWrapper<MatchLivePickBanType>;
  MatchLivePlaybackDataType: ResolverTypeWrapper<MatchLivePlaybackDataType>;
  MatchLivePlayerAssistDetailType: ResolverTypeWrapper<MatchLivePlayerAssistDetailType>;
  MatchLivePlayerDeathDetailType: ResolverTypeWrapper<MatchLivePlayerDeathDetailType>;
  MatchLivePlayerDenyDetailType: ResolverTypeWrapper<MatchLivePlayerDenyDetailType>;
  MatchLivePlayerExperienceDetailType: ResolverTypeWrapper<MatchLivePlayerExperienceDetailType>;
  MatchLivePlayerGoldDetailType: ResolverTypeWrapper<MatchLivePlayerGoldDetailType>;
  MatchLivePlayerImpDetailType: ResolverTypeWrapper<MatchLivePlayerImpDetailType>;
  MatchLivePlayerInventoryDetailType: ResolverTypeWrapper<MatchLivePlayerInventoryDetailType>;
  MatchLivePlayerKillDetailType: ResolverTypeWrapper<MatchLivePlayerKillDetailType>;
  MatchLivePlayerLastHitDetailType: ResolverTypeWrapper<MatchLivePlayerLastHitDetailType>;
  MatchLivePlayerLevelDetailType: ResolverTypeWrapper<MatchLivePlayerLevelDetailType>;
  MatchLivePlayerPositionDetailType: ResolverTypeWrapper<MatchLivePlayerPositionDetailType>;
  MatchLivePlayerType: ResolverTypeWrapper<MatchLivePlayerType>;
  MatchLiveRequestOrderBy: MatchLiveRequestOrderBy;
  MatchLiveRequestType: MatchLiveRequestType;
  MatchLiveRoshanDetailType: ResolverTypeWrapper<MatchLiveRoshanDetailType>;
  MatchLiveTeamScoreDetailType: ResolverTypeWrapper<MatchLiveTeamScoreDetailType>;
  MatchLiveType: ResolverTypeWrapper<MatchLiveType>;
  MatchLiveWinRateDetailType: ResolverTypeWrapper<MatchLiveWinRateDetailType>;
  MatchPickBanGroupByType: ResolverTypeWrapper<MatchPickBanGroupByType>;
  MatchPlaybackDataBuildingEventType: ResolverTypeWrapper<MatchPlaybackDataBuildingEventType>;
  MatchPlaybackDataCourierEventType: ResolverTypeWrapper<MatchPlaybackDataCourierEventType>;
  MatchPlaybackDataRoshanEventType: ResolverTypeWrapper<MatchPlaybackDataRoshanEventType>;
  MatchPlaybackDataRuneEventType: ResolverTypeWrapper<MatchPlaybackDataRuneEventType>;
  MatchPlaybackDataTowerDeathEventType: ResolverTypeWrapper<MatchPlaybackDataTowerDeathEventType>;
  MatchPlaybackDataType: ResolverTypeWrapper<MatchPlaybackDataType>;
  MatchPlaybackDataWardEventType: ResolverTypeWrapper<MatchPlaybackDataWardEventType>;
  MatchPlayerAdditionalUnitType: ResolverTypeWrapper<MatchPlayerAdditionalUnitType>;
  MatchPlayerAward: MatchPlayerAward;
  MatchPlayerHeroDamageSourceAbilityReportObjectType: ResolverTypeWrapper<MatchPlayerHeroDamageSourceAbilityReportObjectType>;
  MatchPlayerHeroDamageSourceItemReportObjectType: ResolverTypeWrapper<MatchPlayerHeroDamageSourceItemReportObjectType>;
  MatchPlayerHeroDamageTargetReportObjectType: ResolverTypeWrapper<MatchPlayerHeroDamageTargetReportObjectType>;
  MatchPlayerHeroDamageTotalRecievedReportObjectType: ResolverTypeWrapper<MatchPlayerHeroDamageTotalRecievedReportObjectType>;
  MatchPlayerHeroDamageTotalReportObjectType: ResolverTypeWrapper<MatchPlayerHeroDamageTotalReportObjectType>;
  MatchPlayerInventoryObjectType: ResolverTypeWrapper<MatchPlayerInventoryObjectType>;
  MatchPlayerInventoryType: ResolverTypeWrapper<MatchPlayerInventoryType>;
  MatchPlayerItemPurchaseEventType: ResolverTypeWrapper<MatchPlayerItemPurchaseEventType>;
  MatchPlayerLivePlaybackDataType: ResolverTypeWrapper<MatchPlayerLivePlaybackDataType>;
  MatchPlayerPlaybackDataType: ResolverTypeWrapper<MatchPlayerPlaybackDataType>;
  MatchPlayerPositionType: MatchPlayerPositionType;
  MatchPlayerRoleType: MatchPlayerRoleType;
  MatchPlayerSpectatorType: ResolverTypeWrapper<MatchPlayerSpectatorType>;
  MatchPlayerSpiritBearInventoryType: ResolverTypeWrapper<MatchPlayerSpiritBearInventoryType>;
  MatchPlayerStatsAbilityCastObjectType: ResolverTypeWrapper<MatchPlayerStatsAbilityCastObjectType>;
  MatchPlayerStatsAbilityCastReportType: ResolverTypeWrapper<MatchPlayerStatsAbilityCastReportType>;
  MatchPlayerStatsActionReportType: ResolverTypeWrapper<MatchPlayerStatsActionReportType>;
  MatchPlayerStatsAllTalkEventType: ResolverTypeWrapper<MatchPlayerStatsAllTalkEventType>;
  MatchPlayerStatsAssistEventType: ResolverTypeWrapper<MatchPlayerStatsAssistEventType>;
  MatchPlayerStatsBuffEventType: ResolverTypeWrapper<MatchPlayerStatsBuffEventType>;
  MatchPlayerStatsChatWheelEventType: ResolverTypeWrapper<MatchPlayerStatsChatWheelEventType>;
  MatchPlayerStatsCourierKillEventType: ResolverTypeWrapper<MatchPlayerStatsCourierKillEventType>;
  MatchPlayerStatsDeathEventType: ResolverTypeWrapper<MatchPlayerStatsDeathEventType>;
  MatchPlayerStatsFarmDistributionObjectType: ResolverTypeWrapper<MatchPlayerStatsFarmDistributionObjectType>;
  MatchPlayerStatsFarmDistributionReportType: ResolverTypeWrapper<MatchPlayerStatsFarmDistributionReportType>;
  MatchPlayerStatsHeroDamageReportType: ResolverTypeWrapper<MatchPlayerStatsHeroDamageReportType>;
  MatchPlayerStatsItemUsedEventType: ResolverTypeWrapper<MatchPlayerStatsItemUsedEventType>;
  MatchPlayerStatsKillEventType: ResolverTypeWrapper<MatchPlayerStatsKillEventType>;
  MatchPlayerStatsLocationReportType: ResolverTypeWrapper<MatchPlayerStatsLocationReportType>;
  MatchPlayerStatsRuneEventType: ResolverTypeWrapper<MatchPlayerStatsRuneEventType>;
  MatchPlayerStatsTowerDamageReportType: ResolverTypeWrapper<MatchPlayerStatsTowerDamageReportType>;
  MatchPlayerStatsType: ResolverTypeWrapper<MatchPlayerStatsType>;
  MatchPlayerStatsWardEventType: ResolverTypeWrapper<MatchPlayerStatsWardEventType>;
  MatchPlayerTeamPickOrderType: MatchPlayerTeamPickOrderType;
  MatchPlayerType: ResolverTypeWrapper<MatchPlayerType>;
  MatchPlayerWardDestuctionObjectType: ResolverTypeWrapper<MatchPlayerWardDestuctionObjectType>;
  MatchReplayUploadHeroDuoSummaryType: ResolverTypeWrapper<MatchReplayUploadHeroDuoSummaryType>;
  MatchReplayUploadHeroSummaryType: ResolverTypeWrapper<MatchReplayUploadHeroSummaryType>;
  MatchReplayUploadMatchType: ResolverTypeWrapper<MatchReplayUploadMatchType>;
  MatchReplayUploadOverviewType: ResolverTypeWrapper<MatchReplayUploadOverviewType>;
  MatchReplayUploadPickBanType: ResolverTypeWrapper<MatchReplayUploadPickBanType>;
  MatchReplayUploadPlayerStatsItemsType: ResolverTypeWrapper<MatchReplayUploadPlayerStatsItemsType>;
  MatchReplayUploadPlayerType: ResolverTypeWrapper<MatchReplayUploadPlayerType>;
  MatchReplayUploadTeamMemberType: ResolverTypeWrapper<MatchReplayUploadTeamMemberType>;
  MatchReplayUploadTeamType: ResolverTypeWrapper<MatchReplayUploadTeamType>;
  MatchStatsChatEventType: ResolverTypeWrapper<MatchStatsChatEventType>;
  MatchStatsLaneReportFactionLaneObject: ResolverTypeWrapper<MatchStatsLaneReportFactionLaneObject>;
  MatchStatsLaneReportFactionObjectType: ResolverTypeWrapper<MatchStatsLaneReportFactionObjectType>;
  MatchStatsLaneReportType: ResolverTypeWrapper<MatchStatsLaneReportType>;
  MatchStatsOutpostReportObjectType: ResolverTypeWrapper<MatchStatsOutpostReportObjectType>;
  MatchStatsPickBanType: ResolverTypeWrapper<MatchStatsPickBanType>;
  MatchStatsTowerDeathType: ResolverTypeWrapper<MatchStatsTowerDeathType>;
  MatchStatsTowerReportObjectType: ResolverTypeWrapper<MatchStatsTowerReportObjectType>;
  MatchStatsTowerReportType: ResolverTypeWrapper<MatchStatsTowerReportType>;
  MatchType: ResolverTypeWrapper<MatchType>;
  MatchesDayType: ResolverTypeWrapper<MatchesDayType>;
  MatchesGameVersionType: ResolverTypeWrapper<MatchesGameVersionType>;
  MatchesHourType: ResolverTypeWrapper<MatchesHourType>;
  MatchesMonthType: ResolverTypeWrapper<MatchesMonthType>;
  MatchesWeekType: ResolverTypeWrapper<MatchesWeekType>;
  MatchmakingStatsType: ResolverTypeWrapper<MatchmakingStatsType>;
  MatchplaybackDataCourierEventObjectType: ResolverTypeWrapper<MatchplaybackDataCourierEventObjectType>;
  MergeProSteamAccountRequestType: MergeProSteamAccountRequestType;
  ModifierType: ResolverTypeWrapper<ModifierType>;
  NeutralItemTierEnum: NeutralItemTierEnum;
  NewsItemType: ResolverTypeWrapper<NewsItemType>;
  NpcStatType: ResolverTypeWrapper<NpcStatType>;
  NpcType: ResolverTypeWrapper<NpcType>;
  PageAghanimQuery: ResolverTypeWrapper<PageAghanimQuery>;
  PageBattlepassQuery: ResolverTypeWrapper<PageBattlepassQuery>;
  PageDireTideQuery: ResolverTypeWrapper<PageDireTideQuery>;
  PageLeaguesQuery: ResolverTypeWrapper<PageLeaguesQuery>;
  PageMatchesQuery: ResolverTypeWrapper<PageMatchesQuery>;
  PagePlayerQuery: ResolverTypeWrapper<PagePlayerQuery>;
  PagePlayersQuery: ResolverTypeWrapper<PagePlayersQuery>;
  PageQuery: ResolverTypeWrapper<PageQuery>;
  PatchNoteLanguageType: ResolverTypeWrapper<PatchNoteLanguageType>;
  PatchNoteType: PatchNoteType;
  PlayerAbilityType: ResolverTypeWrapper<PlayerAbilityType>;
  PlayerActivitySummaryType: ResolverTypeWrapper<PlayerActivitySummaryType>;
  PlayerBadgeType: ResolverTypeWrapper<PlayerBadgeType>;
  PlayerBattlePassGroupByEnum: PlayerBattlePassGroupByEnum;
  PlayerBattlePassGroupByType: ResolverTypeWrapper<PlayerBattlePassGroupByType>;
  PlayerBattlePassResponseType: ResolverTypeWrapper<PlayerBattlePassResponseType>;
  PlayerBattlePassType: ResolverTypeWrapper<PlayerBattlePassType>;
  PlayerBehaviorActivity: PlayerBehaviorActivity;
  PlayerBreakdownObjectType: ResolverTypeWrapper<PlayerBreakdownObjectType>;
  PlayerBreakdownRequestType: PlayerBreakdownRequestType;
  PlayerBreakdownType: ResolverTypeWrapper<PlayerBreakdownType>;
  PlayerCardHoverHeroType: ResolverTypeWrapper<PlayerCardHoverHeroType>;
  PlayerCardHoverType: ResolverTypeWrapper<PlayerCardHoverType>;
  PlayerCoachingLeaderboardResponseType: ResolverTypeWrapper<PlayerCoachingLeaderboardResponseType>;
  PlayerCoachingLeaderboardType: ResolverTypeWrapper<PlayerCoachingLeaderboardType>;
  PlayerConductResponseType: ResolverTypeWrapper<PlayerConductResponseType>;
  PlayerDraftHeroHighlightType: ResolverTypeWrapper<PlayerDraftHeroHighlightType>;
  PlayerHeroDotaPlusLeaderboardRankResponseType: ResolverTypeWrapper<PlayerHeroDotaPlusLeaderboardRankResponseType>;
  PlayerHeroPerformanceLongestStreakType: ResolverTypeWrapper<PlayerHeroPerformanceLongestStreakType>;
  PlayerHeroPerformanceMatchesRequestType: PlayerHeroPerformanceMatchesRequestType;
  PlayerHeroesPerformanceMatchesRequestType: PlayerHeroesPerformanceMatchesRequestType;
  PlayerHeroesPerformanceScoreType: ResolverTypeWrapper<PlayerHeroesPerformanceScoreType>;
  PlayerHeroesPerformanceType: ResolverTypeWrapper<PlayerHeroesPerformanceType>;
  PlayerLeaderBoardByHeroType: ResolverTypeWrapper<PlayerLeaderBoardByHeroType>;
  PlayerMatchesGroupByRequestType: PlayerMatchesGroupByRequestType;
  PlayerMatchesRequestType: PlayerMatchesRequestType;
  PlayerPerformanceCompositionHeroType: ResolverTypeWrapper<PlayerPerformanceCompositionHeroType>;
  PlayerPerformanceCompositionType: ResolverTypeWrapper<PlayerPerformanceCompositionType>;
  PlayerPerformanceMatchesRequestType: PlayerPerformanceMatchesRequestType;
  PlayerPerformancePositionObjectType: ResolverTypeWrapper<PlayerPerformancePositionObjectType>;
  PlayerPerformancePositionType: ResolverTypeWrapper<PlayerPerformancePositionType>;
  PlayerPerformanceType: ResolverTypeWrapper<PlayerPerformanceType>;
  PlayerPlayedWithProPlayerMatchType: ResolverTypeWrapper<PlayerPlayedWithProPlayerMatchType>;
  PlayerPlayedWithProPlayerType: ResolverTypeWrapper<PlayerPlayedWithProPlayerType>;
  PlayerPlayedWithProTeamType: ResolverTypeWrapper<PlayerPlayedWithProTeamType>;
  PlayerPlayedWithProType: ResolverTypeWrapper<PlayerPlayedWithProType>;
  PlayerRuneDetailType: ResolverTypeWrapper<PlayerRuneDetailType>;
  PlayerTeammateType: ResolverTypeWrapper<PlayerTeammateType>;
  PlayerTeammatesGroupByRequestType: PlayerTeammatesGroupByRequestType;
  PlayerType: ResolverTypeWrapper<Omit<PlayerType, 'matchesGroupBy'> & { matchesGroupBy?: Maybe<Array<Maybe<ResolversTypes['MatchGroupByType']>>> }>;
  PlayerUpdateAttributeDetailType: ResolverTypeWrapper<PlayerUpdateAttributeDetailType>;
  PlayerUpdateBattleDetailType: ResolverTypeWrapper<PlayerUpdateBattleDetailType>;
  PlayerUpdateGoldDetailType: ResolverTypeWrapper<PlayerUpdateGoldDetailType>;
  PlayerUpdateHealthDetailType: ResolverTypeWrapper<PlayerUpdateHealthDetailType>;
  PlayerUpdateLevelDetailType: ResolverTypeWrapper<PlayerUpdateLevelDetailType>;
  PlayerUpdatePositionDetailType: ResolverTypeWrapper<PlayerUpdatePositionDetailType>;
  PlusDraftMissingLetterRequestType: PlusDraftMissingLetterRequestType;
  PlusDraftPlayerHeroObjectType: ResolverTypeWrapper<PlusDraftPlayerHeroObjectType>;
  PlusDraftPlayerRequestType: PlusDraftPlayerRequestType;
  PlusDraftPlayerType: ResolverTypeWrapper<PlusDraftPlayerType>;
  PlusDraftRequestType: PlusDraftRequestType;
  PlusDraftType: ResolverTypeWrapper<PlusDraftType>;
  PlusHeroTeamStatusAveragesType: ResolverTypeWrapper<PlusHeroTeamStatusAveragesType>;
  PlusHeroTeamStatusDetailType: ResolverTypeWrapper<PlusHeroTeamStatusDetailType>;
  PlusHoverBanType: ResolverTypeWrapper<PlusHoverBanType>;
  PlusHoverType: ResolverTypeWrapper<PlusHoverType>;
  PlusLetterType: PlusLetterType;
  PlusPlayerHoverHeroType: ResolverTypeWrapper<PlusPlayerHoverHeroType>;
  PlusPlayerHoverPlayerType: ResolverTypeWrapper<PlusPlayerHoverPlayerType>;
  PlusPlayerHoverRequestType: PlusPlayerHoverRequestType;
  PlusPlayerHoverType: ResolverTypeWrapper<PlusPlayerHoverType>;
  PlusQuery: ResolverTypeWrapper<PlusQuery>;
  ProPlayerFollowType: ResolverTypeWrapper<ProPlayerFollowType>;
  ProSteamAccountType: ResolverTypeWrapper<ProSteamAccountType>;
  ROSHCaptainJackIdentityStatDifficultyType: ResolverTypeWrapper<RoshCaptainJackIdentityStatDifficultyType>;
  ROSHDifficultyEnum: RoshDifficultyEnum;
  ROSHGlobalStatType: ResolverTypeWrapper<RoshGlobalStatType>;
  ROSHMatchesRequestType: RoshMatchesRequestType;
  ROSHMutation: ResolverTypeWrapper<RoshMutation>;
  RabbitDetailType: ResolverTypeWrapper<RabbitDetailType>;
  RabbitQueueDetailType: ResolverTypeWrapper<RabbitQueueDetailType>;
  RankBracket: RankBracket;
  RankBracketBasicEnum: RankBracketBasicEnum;
  RegionType: ResolverTypeWrapper<RegionType>;
  RoleType: ResolverTypeWrapper<RoleType>;
  RoshQuery: ResolverTypeWrapper<RoshQuery>;
  RuneAction: RuneAction;
  RuneEnums: RuneEnums;
  Search: Search;
  SearchType: ResolverTypeWrapper<SearchType>;
  Series: Series;
  SeriesType: ResolverTypeWrapper<SeriesType>;
  ServerStatusType: ResolverTypeWrapper<ServerStatusType>;
  Short: ResolverTypeWrapper<Scalars['Short']['output']>;
  SpawnActionType: SpawnActionType;
  SpiritBearInventoryObjectType: ResolverTypeWrapper<SpiritBearInventoryObjectType>;
  SpiritBearInventoryType: ResolverTypeWrapper<SpiritBearInventoryType>;
  SteamAccountBattlePassType: ResolverTypeWrapper<SteamAccountBattlePassType>;
  SteamAccountByRankType: ResolverTypeWrapper<SteamAccountByRankType>;
  SteamAccountNameType: ResolverTypeWrapper<SteamAccountNameType>;
  SteamAccountSeasonActiveLeaderboardCountryDataType: ResolverTypeWrapper<SteamAccountSeasonActiveLeaderboardCountryDataType>;
  SteamAccountSeasonActiveLeaderboardPositionDataType: ResolverTypeWrapper<SteamAccountSeasonActiveLeaderboardPositionDataType>;
  SteamAccountSeasonActiveLeaderboardRankType: ResolverTypeWrapper<SteamAccountSeasonActiveLeaderboardRankType>;
  SteamAccountSeasonActiveLeaderboardType: ResolverTypeWrapper<SteamAccountSeasonActiveLeaderboardType>;
  SteamAccountSeasonLeaderBoardRankType: ResolverTypeWrapper<SteamAccountSeasonLeaderBoardRankType>;
  SteamAccountSeasonRankType: ResolverTypeWrapper<SteamAccountSeasonRankType>;
  SteamAccountTeamMemberType: ResolverTypeWrapper<SteamAccountTeamMemberType>;
  SteamAccountType: ResolverTypeWrapper<SteamAccountType>;
  SteamApiDetailOutageType: ResolverTypeWrapper<SteamApiDetailOutageType>;
  SteamApiDetailType: ResolverTypeWrapper<SteamApiDetailType>;
  StratzApiType: StratzApiType;
  StratzQuery: ResolverTypeWrapper<StratzQuery>;
  Streak: Streak;
  StreakEventType: ResolverTypeWrapper<StreakEventType>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TI2020CustomGameRoomModifierType: ResolverTypeWrapper<Ti2020CustomGameRoomModifierType>;
  TableCalculateEnum: TableCalculateEnum;
  TeamMatchesRequestType: TeamMatchesRequestType;
  TeamPrizeType: ResolverTypeWrapper<TeamPrizeType>;
  TeamType: ResolverTypeWrapper<Omit<TeamType, 'matchesGroupBy'> & { matchesGroupBy?: Maybe<Array<Maybe<ResolversTypes['MatchGroupByType']>>> }>;
  TopPlayersByHeroType: ResolverTypeWrapper<TopPlayersByHeroType>;
  TotalMatchCountType: ResolverTypeWrapper<TotalMatchCountType>;
  TotalPlayerCountType: ResolverTypeWrapper<TotalPlayerCountType>;
  TowerDamageDetailType: ResolverTypeWrapper<TowerDamageDetailType>;
  TwitchTrackerPlayerHeroType: ResolverTypeWrapper<TwitchTrackerPlayerHeroType>;
  TwitchTrackerPlayerMatchType: ResolverTypeWrapper<TwitchTrackerPlayerMatchType>;
  TwitchTrackerPlayerType: ResolverTypeWrapper<TwitchTrackerPlayerType>;
  UShort: ResolverTypeWrapper<Scalars['UShort']['output']>;
  UpdateFollowerRequestType: UpdateFollowerRequestType;
  UpdateMatchReplayMatchUploadPlayerObjectType: UpdateMatchReplayMatchUploadPlayerObjectType;
  UpdateMatchReplayUploadObjectType: UpdateMatchReplayUploadObjectType;
  UserHomepageType: ResolverTypeWrapper<UserHomepageType>;
  UserQuery: ResolverTypeWrapper<UserQuery>;
  UserType: ResolverTypeWrapper<UserType>;
  VendorQuery: ResolverTypeWrapper<VendorQuery>;
  WardType: WardType;
  XpReason: XpReason;
  YogurtMutation: ResolverTypeWrapper<YogurtMutation>;
  YogurtQuery: ResolverTypeWrapper<YogurtQuery>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AbilityActiveListType: AbilityActiveListType;
  AbilityAttributeType: AbilityAttributeType;
  AbilityCustomGameLanguageType: AbilityCustomGameLanguageType;
  AbilityCustomGameType: AbilityCustomGameType;
  AbilityLanguageType: AbilityLanguageType;
  AbilityLearnEventsType: AbilityLearnEventsType;
  AbilityStatType: AbilityStatType;
  AbilityType: AbilityType;
  AbilityUsedEventsType: AbilityUsedEventsType;
  AdminMutation: AdminMutation;
  AdminQuery: AdminQuery;
  AghanimLabDepthListAscensionAbilitiesObjectType: AghanimLabDepthListAscensionAbilitiesObjectType;
  AghanimLabHeroAbilityType: AghanimLabHeroAbilityType;
  AghanimLabHeroCompositionType: AghanimLabHeroCompositionType;
  AghanimLabHeroWinRateType: AghanimLabHeroWinRateType;
  AghanimLabMatchDepthListType: AghanimLabMatchDepthListType;
  AghanimLabMatchType: AghanimLabMatchType;
  AghanimLabPlayerBlessingObjectType: AghanimLabPlayerBlessingObjectType;
  AghanimLabPlayerDepthListType: AghanimLabPlayerDepthListType;
  AghanimLabPlayerSeasonOneType: AghanimLabPlayerSeasonOneType;
  AghanimLabRoomType: AghanimLabRoomType;
  AssistDetailType: AssistDetailType;
  BattlepassPredictionHeroType: BattlepassPredictionHeroType;
  BattlepassPredictionIdValueType: BattlepassPredictionIdValueType;
  BattlepassPredictionPlayerType: BattlepassPredictionPlayerType;
  BattlepassPredictionTeamType: BattlepassPredictionTeamType;
  BattlepassPredictionTournamentType: BattlepassPredictionTournamentType;
  BlogType: BlogType;
  Boolean: Scalars['Boolean']['output'];
  BuyBackDetailType: BuyBackDetailType;
  Byte: Scalars['Byte']['output'];
  CaptainJackIdentityApiApplicationType: CaptainJackIdentityApiApplicationType;
  CaptainJackIdentityPrivateProfileType: CaptainJackIdentityPrivateProfileType;
  CaptainJackIdentityProfileUpdateRequestType: CaptainJackIdentityProfileUpdateRequestType;
  CaptainJackIdentityPublicProfileType: CaptainJackIdentityPublicProfileType;
  ClusterType: ClusterType;
  ConstantQuery: ConstantQuery;
  DateTime: Scalars['DateTime']['output'];
  DeathDetailType: DeathDetailType;
  Decimal: Scalars['Decimal']['output'];
  DeleteProSteamAccountRequestType: DeleteProSteamAccountRequestType;
  DireTideCustomGameHeroWinDayType: DireTideCustomGameHeroWinDayType;
  DireTideCustomGameMatchType: DireTideCustomGameMatchType;
  DireTideCustomGamePlayerType: DireTideCustomGamePlayerType;
  DotaMutation: {};
  DotaNextQuery: DotaNextQuery;
  DotaNextWithAllyType: DotaNextWithAllyType;
  DotaPlusWeekType: DotaPlusWeekType;
  DotaQuery: {};
  DotaSubscription: {};
  DotaUserMutation: DotaUserMutation;
  ExperienceDetailType: ExperienceDetailType;
  FeatType: FeatType;
  FeedResponseType: FeedResponseType;
  FeedType: FeedType;
  FilterAghanimLabHeroCompositionRequestType: FilterAghanimLabHeroCompositionRequestType;
  FilterAghanimLabMatchRequestType: FilterAghanimLabMatchRequestType;
  FilterDireTideCustomMatchRequestType: FilterDireTideCustomMatchRequestType;
  FilterHeroRampageType: FilterHeroRampageType;
  FilterLeaderboardGuildRequestType: FilterLeaderboardGuildRequestType;
  FilterLeaderboardHeroRequestType: FilterLeaderboardHeroRequestType;
  FilterMatchReplayUploadRequestType: FilterMatchReplayUploadRequestType;
  FilterSearchRequestType: FilterSearchRequestType;
  FilterSeasonLeaderboardRequestType: FilterSeasonLeaderboardRequestType;
  FilterSeriesRequestType: FilterSeriesRequestType;
  Float: Scalars['Float']['output'];
  FollowerType: FollowerType;
  GameModeType: GameModeType;
  GameVersionType: GameVersionType;
  GoldDetailType: GoldDetailType;
  Guid: Scalars['Guid']['output'];
  GuildMemberType: GuildMemberType;
  GuildType: GuildType;
  HealDetailType: HealDetailType;
  HeroAbilityMaxType: HeroAbilityMaxType;
  HeroAbilityMinType: HeroAbilityMinType;
  HeroAbilityTalentType: HeroAbilityTalentType;
  HeroAbilityType: HeroAbilityType;
  HeroBanType: HeroBanType;
  HeroDamageDetailType: HeroDamageDetailType;
  HeroDotaPlusLeaderboardRankTopType: HeroDotaPlusLeaderboardRankTopType;
  HeroDotaPlusLeaderboardRankType: HeroDotaPlusLeaderboardRankType;
  HeroDryadType: HeroDryadType;
  HeroGuideListType: HeroGuideListType;
  HeroGuideType: HeroGuideType;
  HeroItemBootPurchaseType: HeroItemBootPurchaseType;
  HeroItemPurchaseType: HeroItemPurchaseType;
  HeroItemStartingPurchaseType: HeroItemStartingPurchaseType;
  HeroLaneOutcomeType: HeroLaneOutcomeType;
  HeroLanguageType: HeroLanguageType;
  HeroMatchupType: HeroMatchupType;
  HeroNeutralItemType: HeroNeutralItemType;
  HeroPickBanRequestType: HeroPickBanRequestType;
  HeroPositionTimeDetailType: HeroPositionTimeDetailType;
  HeroRampageObjectType: HeroRampageObjectType;
  HeroRoleType: HeroRoleType;
  HeroStatType: HeroStatType;
  HeroStatsHeroDryadType: HeroStatsHeroDryadType;
  HeroStatsQuery: HeroStatsQuery;
  HeroTalentType: HeroTalentType;
  HeroType: HeroType;
  HeroWinDayType: HeroWinDayType;
  HeroWinGameVersionType: HeroWinGameVersionType;
  HeroWinHourType: HeroWinHourType;
  HeroWinMonthType: HeroWinMonthType;
  HeroWinWeekType: HeroWinWeekType;
  HomepageHeroDryadType: HomepageHeroDryadType;
  HomepageHeroSynergyType: HomepageHeroSynergyType;
  ID: Scalars['ID']['output'];
  ImpGeneratorMatchPlayerType: ImpGeneratorMatchPlayerType;
  ImpGeneratorPlayerEventRequestType: ImpGeneratorPlayerEventRequestType;
  ImpGeneratorPlayerEventType: ImpGeneratorPlayerEventType;
  ImpGeneratorPlayerRequestType: ImpGeneratorPlayerRequestType;
  ImpGeneratorPlayerType: ImpGeneratorPlayerType;
  ImpGeneratorRequestType: ImpGeneratorRequestType;
  ImpQuery: ImpQuery;
  ImportPickBanType: ImportPickBanType;
  Int: Scalars['Int']['output'];
  InventoryObjectType: InventoryObjectType;
  InventoryType: InventoryType;
  ItemAttributeType: ItemAttributeType;
  ItemComponentType: ItemComponentType;
  ItemLanguageType: ItemLanguageType;
  ItemPurchaseType: ItemPurchaseType;
  ItemStatType: ItemStatType;
  ItemType: ItemType;
  ItemUsedEventType: ItemUsedEventType;
  KillDetailType: KillDetailType;
  LanguageType: LanguageType;
  LastHitDetailType: LastHitDetailType;
  LeaderboardQuery: LeaderboardQuery;
  LeagueBattlePassType: LeagueBattlePassType;
  LeagueDpcPositionStatObjectType: LeagueDpcPositionStatObjectType;
  LeagueMatchesRequestType: LeagueMatchesRequestType;
  LeagueMetaDetailType: LeagueMetaDetailType;
  LeagueMetaType: LeagueMetaType;
  LeagueNodeGroupType: LeagueNodeGroupType;
  LeagueNodeType: LeagueNodeType;
  LeaguePrizePoolPercentageType: LeaguePrizePoolPercentageType;
  LeagueRegisteredPlayerType: LeagueRegisteredPlayerType;
  LeagueRequestType: LeagueRequestType;
  LeagueStatType: LeagueStatType;
  LeagueStreamType: LeagueStreamType;
  LeagueTableHeroLanesObjectType: LeagueTableHeroLanesObjectType;
  LeagueTableHeroOverviewType: LeagueTableHeroOverviewType;
  LeagueTableHeroPlayersObjectType: LeagueTableHeroPlayersObjectType;
  LeagueTableHeroStatsType: LeagueTableHeroStatsType;
  LeagueTableHeroType: LeagueTableHeroType;
  LeagueTablePlayerHeroesObjectType: LeagueTablePlayerHeroesObjectType;
  LeagueTablePlayerLanesObjectType: LeagueTablePlayerLanesObjectType;
  LeagueTablePlayerOverviewType: LeagueTablePlayerOverviewType;
  LeagueTablePlayerStatsType: LeagueTablePlayerStatsType;
  LeagueTablePlayerType: LeagueTablePlayerType;
  LeagueTableTeamHeroesObjectType: LeagueTableTeamHeroesObjectType;
  LeagueTableTeamLanesObjectType: LeagueTableTeamLanesObjectType;
  LeagueTableTeamOverviewType: LeagueTableTeamOverviewType;
  LeagueTableTeamStatsType: LeagueTableTeamStatsType;
  LeagueTableTeamType: LeagueTableTeamType;
  LeagueTableType: LeagueTableType;
  LeagueType: Omit<LeagueType, 'matchesGroupBy'> & { matchesGroupBy?: Maybe<Array<Maybe<ResolversParentTypes['MatchGroupByType']>>> };
  LiveEventMatchDireTideStompType: LiveEventMatchDireTideStompType;
  LiveEventPlayerDireTideCandyScoredType: LiveEventPlayerDireTideCandyScoredType;
  LiveEventPlayerHeroAssistsType: LiveEventPlayerHeroAssistsType;
  LiveEventPlayerHeroBuildingDamageType: LiveEventPlayerHeroBuildingDamageType;
  LiveEventPlayerHeroDewardType: LiveEventPlayerHeroDewardType;
  LiveEventPlayerHeroDotaPlusLevelType: LiveEventPlayerHeroDotaPlusLevelType;
  LiveEventPlayerHeroExpPerMinuteType: LiveEventPlayerHeroExpPerMinuteType;
  LiveEventPlayerHeroGoldPerMinuteType: LiveEventPlayerHeroGoldPerMinuteType;
  LiveEventPlayerHeroHealingType: LiveEventPlayerHeroHealingType;
  LiveEventPlayerHeroHeroDamageType: LiveEventPlayerHeroHeroDamageType;
  LiveEventPlayerHeroHighImpType: LiveEventPlayerHeroHighImpType;
  LiveEventPlayerHeroItemPurchaseType: LiveEventPlayerHeroItemPurchaseType;
  LiveEventPlayerHeroKillsType: LiveEventPlayerHeroKillsType;
  LiveEventPlayerHeroWinStreakType: LiveEventPlayerHeroWinStreakType;
  LiveEventPlayerRampageType: LiveEventPlayerRampageType;
  LiveEventPlayerRankUpType: LiveEventPlayerRankUpType;
  LiveEventPlayerWinStreakType: LiveEventPlayerWinStreakType;
  LiveEventProPlayerLiveType: LiveEventProPlayerLiveType;
  LiveEventType: ResolversUnionTypes<ResolversParentTypes>['LiveEventType'];
  LiveQuery: LiveQuery;
  LobbyTypeType: LobbyTypeType;
  Long: Scalars['Long']['output'];
  MatchGroupByAssistsType: MatchGroupByAssistsType;
  MatchGroupByAwardType: MatchGroupByAwardType;
  MatchGroupByClusterType: MatchGroupByClusterType;
  MatchGroupByDateDayHeroType: MatchGroupByDateDayHeroType;
  MatchGroupByDateDayType: MatchGroupByDateDayType;
  MatchGroupByDeathsType: MatchGroupByDeathsType;
  MatchGroupByDurationMinutesType: MatchGroupByDurationMinutesType;
  MatchGroupByFactionType: MatchGroupByFactionType;
  MatchGroupByGameModeType: MatchGroupByGameModeType;
  MatchGroupByGameVersionType: MatchGroupByGameVersionType;
  MatchGroupByGoldPerMinuteType: MatchGroupByGoldPerMinuteType;
  MatchGroupByHeroPerformanceType: MatchGroupByHeroPerformanceType;
  MatchGroupByHeroType: MatchGroupByHeroType;
  MatchGroupByHourType: MatchGroupByHourType;
  MatchGroupByIsIntentionalFeedingType: MatchGroupByIsIntentionalFeedingType;
  MatchGroupByIsLeagueType: MatchGroupByIsLeagueType;
  MatchGroupByIsLeaverType: MatchGroupByIsLeaverType;
  MatchGroupByIsPartyType: MatchGroupByIsPartyType;
  MatchGroupByIsRandomType: MatchGroupByIsRandomType;
  MatchGroupByIsSeriesType: MatchGroupByIsSeriesType;
  MatchGroupByIsStatsType: MatchGroupByIsStatsType;
  MatchGroupByIsVictoryType: MatchGroupByIsVictoryType;
  MatchGroupByKillsType: MatchGroupByKillsType;
  MatchGroupByLaneType: MatchGroupByLaneType;
  MatchGroupByLeagueIdType: MatchGroupByLeagueIdType;
  MatchGroupByLevelType: MatchGroupByLevelType;
  MatchGroupByLobbyTypeType: MatchGroupByLobbyTypeType;
  MatchGroupByPositionType: MatchGroupByPositionType;
  MatchGroupByRegionType: MatchGroupByRegionType;
  MatchGroupByRoamLaneType: MatchGroupByRoamLaneType;
  MatchGroupByRoleType: MatchGroupByRoleType;
  MatchGroupBySteamAccountIdAgainstTeamType: MatchGroupBySteamAccountIdAgainstTeamType;
  MatchGroupBySteamAccountIdHeroIdAgainstTeamType: MatchGroupBySteamAccountIdHeroIdAgainstTeamType;
  MatchGroupBySteamAccountIdHeroIdType: MatchGroupBySteamAccountIdHeroIdType;
  MatchGroupBySteamAccountIdHeroIdWithTeamType: MatchGroupBySteamAccountIdHeroIdWithTeamType;
  MatchGroupBySteamAccountIdType: MatchGroupBySteamAccountIdType;
  MatchGroupBySteamAccountIdWithTeamType: MatchGroupBySteamAccountIdWithTeamType;
  MatchGroupByTeamType: MatchGroupByTeamType;
  MatchGroupByTotalKillsType: MatchGroupByTotalKillsType;
  MatchGroupByType: ResolversUnionTypes<ResolversParentTypes>['MatchGroupByType'];
  MatchLiveBuildingDetailType: MatchLiveBuildingDetailType;
  MatchLiveInsightType: MatchLiveInsightType;
  MatchLivePickBanType: MatchLivePickBanType;
  MatchLivePlaybackDataType: MatchLivePlaybackDataType;
  MatchLivePlayerAssistDetailType: MatchLivePlayerAssistDetailType;
  MatchLivePlayerDeathDetailType: MatchLivePlayerDeathDetailType;
  MatchLivePlayerDenyDetailType: MatchLivePlayerDenyDetailType;
  MatchLivePlayerExperienceDetailType: MatchLivePlayerExperienceDetailType;
  MatchLivePlayerGoldDetailType: MatchLivePlayerGoldDetailType;
  MatchLivePlayerImpDetailType: MatchLivePlayerImpDetailType;
  MatchLivePlayerInventoryDetailType: MatchLivePlayerInventoryDetailType;
  MatchLivePlayerKillDetailType: MatchLivePlayerKillDetailType;
  MatchLivePlayerLastHitDetailType: MatchLivePlayerLastHitDetailType;
  MatchLivePlayerLevelDetailType: MatchLivePlayerLevelDetailType;
  MatchLivePlayerPositionDetailType: MatchLivePlayerPositionDetailType;
  MatchLivePlayerType: MatchLivePlayerType;
  MatchLiveRequestType: MatchLiveRequestType;
  MatchLiveRoshanDetailType: MatchLiveRoshanDetailType;
  MatchLiveTeamScoreDetailType: MatchLiveTeamScoreDetailType;
  MatchLiveType: MatchLiveType;
  MatchLiveWinRateDetailType: MatchLiveWinRateDetailType;
  MatchPickBanGroupByType: MatchPickBanGroupByType;
  MatchPlaybackDataBuildingEventType: MatchPlaybackDataBuildingEventType;
  MatchPlaybackDataCourierEventType: MatchPlaybackDataCourierEventType;
  MatchPlaybackDataRoshanEventType: MatchPlaybackDataRoshanEventType;
  MatchPlaybackDataRuneEventType: MatchPlaybackDataRuneEventType;
  MatchPlaybackDataTowerDeathEventType: MatchPlaybackDataTowerDeathEventType;
  MatchPlaybackDataType: MatchPlaybackDataType;
  MatchPlaybackDataWardEventType: MatchPlaybackDataWardEventType;
  MatchPlayerAdditionalUnitType: MatchPlayerAdditionalUnitType;
  MatchPlayerHeroDamageSourceAbilityReportObjectType: MatchPlayerHeroDamageSourceAbilityReportObjectType;
  MatchPlayerHeroDamageSourceItemReportObjectType: MatchPlayerHeroDamageSourceItemReportObjectType;
  MatchPlayerHeroDamageTargetReportObjectType: MatchPlayerHeroDamageTargetReportObjectType;
  MatchPlayerHeroDamageTotalRecievedReportObjectType: MatchPlayerHeroDamageTotalRecievedReportObjectType;
  MatchPlayerHeroDamageTotalReportObjectType: MatchPlayerHeroDamageTotalReportObjectType;
  MatchPlayerInventoryObjectType: MatchPlayerInventoryObjectType;
  MatchPlayerInventoryType: MatchPlayerInventoryType;
  MatchPlayerItemPurchaseEventType: MatchPlayerItemPurchaseEventType;
  MatchPlayerLivePlaybackDataType: MatchPlayerLivePlaybackDataType;
  MatchPlayerPlaybackDataType: MatchPlayerPlaybackDataType;
  MatchPlayerSpectatorType: MatchPlayerSpectatorType;
  MatchPlayerSpiritBearInventoryType: MatchPlayerSpiritBearInventoryType;
  MatchPlayerStatsAbilityCastObjectType: MatchPlayerStatsAbilityCastObjectType;
  MatchPlayerStatsAbilityCastReportType: MatchPlayerStatsAbilityCastReportType;
  MatchPlayerStatsActionReportType: MatchPlayerStatsActionReportType;
  MatchPlayerStatsAllTalkEventType: MatchPlayerStatsAllTalkEventType;
  MatchPlayerStatsAssistEventType: MatchPlayerStatsAssistEventType;
  MatchPlayerStatsBuffEventType: MatchPlayerStatsBuffEventType;
  MatchPlayerStatsChatWheelEventType: MatchPlayerStatsChatWheelEventType;
  MatchPlayerStatsCourierKillEventType: MatchPlayerStatsCourierKillEventType;
  MatchPlayerStatsDeathEventType: MatchPlayerStatsDeathEventType;
  MatchPlayerStatsFarmDistributionObjectType: MatchPlayerStatsFarmDistributionObjectType;
  MatchPlayerStatsFarmDistributionReportType: MatchPlayerStatsFarmDistributionReportType;
  MatchPlayerStatsHeroDamageReportType: MatchPlayerStatsHeroDamageReportType;
  MatchPlayerStatsItemUsedEventType: MatchPlayerStatsItemUsedEventType;
  MatchPlayerStatsKillEventType: MatchPlayerStatsKillEventType;
  MatchPlayerStatsLocationReportType: MatchPlayerStatsLocationReportType;
  MatchPlayerStatsRuneEventType: MatchPlayerStatsRuneEventType;
  MatchPlayerStatsTowerDamageReportType: MatchPlayerStatsTowerDamageReportType;
  MatchPlayerStatsType: MatchPlayerStatsType;
  MatchPlayerStatsWardEventType: MatchPlayerStatsWardEventType;
  MatchPlayerType: MatchPlayerType;
  MatchPlayerWardDestuctionObjectType: MatchPlayerWardDestuctionObjectType;
  MatchReplayUploadHeroDuoSummaryType: MatchReplayUploadHeroDuoSummaryType;
  MatchReplayUploadHeroSummaryType: MatchReplayUploadHeroSummaryType;
  MatchReplayUploadMatchType: MatchReplayUploadMatchType;
  MatchReplayUploadOverviewType: MatchReplayUploadOverviewType;
  MatchReplayUploadPickBanType: MatchReplayUploadPickBanType;
  MatchReplayUploadPlayerStatsItemsType: MatchReplayUploadPlayerStatsItemsType;
  MatchReplayUploadPlayerType: MatchReplayUploadPlayerType;
  MatchReplayUploadTeamMemberType: MatchReplayUploadTeamMemberType;
  MatchReplayUploadTeamType: MatchReplayUploadTeamType;
  MatchStatsChatEventType: MatchStatsChatEventType;
  MatchStatsLaneReportFactionLaneObject: MatchStatsLaneReportFactionLaneObject;
  MatchStatsLaneReportFactionObjectType: MatchStatsLaneReportFactionObjectType;
  MatchStatsLaneReportType: MatchStatsLaneReportType;
  MatchStatsOutpostReportObjectType: MatchStatsOutpostReportObjectType;
  MatchStatsPickBanType: MatchStatsPickBanType;
  MatchStatsTowerDeathType: MatchStatsTowerDeathType;
  MatchStatsTowerReportObjectType: MatchStatsTowerReportObjectType;
  MatchStatsTowerReportType: MatchStatsTowerReportType;
  MatchType: MatchType;
  MatchesDayType: MatchesDayType;
  MatchesGameVersionType: MatchesGameVersionType;
  MatchesHourType: MatchesHourType;
  MatchesMonthType: MatchesMonthType;
  MatchesWeekType: MatchesWeekType;
  MatchmakingStatsType: MatchmakingStatsType;
  MatchplaybackDataCourierEventObjectType: MatchplaybackDataCourierEventObjectType;
  MergeProSteamAccountRequestType: MergeProSteamAccountRequestType;
  ModifierType: ModifierType;
  NewsItemType: NewsItemType;
  NpcStatType: NpcStatType;
  NpcType: NpcType;
  PageAghanimQuery: PageAghanimQuery;
  PageBattlepassQuery: PageBattlepassQuery;
  PageDireTideQuery: PageDireTideQuery;
  PageLeaguesQuery: PageLeaguesQuery;
  PageMatchesQuery: PageMatchesQuery;
  PagePlayerQuery: PagePlayerQuery;
  PagePlayersQuery: PagePlayersQuery;
  PageQuery: PageQuery;
  PatchNoteLanguageType: PatchNoteLanguageType;
  PlayerAbilityType: PlayerAbilityType;
  PlayerActivitySummaryType: PlayerActivitySummaryType;
  PlayerBadgeType: PlayerBadgeType;
  PlayerBattlePassGroupByType: PlayerBattlePassGroupByType;
  PlayerBattlePassResponseType: PlayerBattlePassResponseType;
  PlayerBattlePassType: PlayerBattlePassType;
  PlayerBreakdownObjectType: PlayerBreakdownObjectType;
  PlayerBreakdownRequestType: PlayerBreakdownRequestType;
  PlayerBreakdownType: PlayerBreakdownType;
  PlayerCardHoverHeroType: PlayerCardHoverHeroType;
  PlayerCardHoverType: PlayerCardHoverType;
  PlayerCoachingLeaderboardResponseType: PlayerCoachingLeaderboardResponseType;
  PlayerCoachingLeaderboardType: PlayerCoachingLeaderboardType;
  PlayerConductResponseType: PlayerConductResponseType;
  PlayerDraftHeroHighlightType: PlayerDraftHeroHighlightType;
  PlayerHeroDotaPlusLeaderboardRankResponseType: PlayerHeroDotaPlusLeaderboardRankResponseType;
  PlayerHeroPerformanceLongestStreakType: PlayerHeroPerformanceLongestStreakType;
  PlayerHeroPerformanceMatchesRequestType: PlayerHeroPerformanceMatchesRequestType;
  PlayerHeroesPerformanceMatchesRequestType: PlayerHeroesPerformanceMatchesRequestType;
  PlayerHeroesPerformanceScoreType: PlayerHeroesPerformanceScoreType;
  PlayerHeroesPerformanceType: PlayerHeroesPerformanceType;
  PlayerLeaderBoardByHeroType: PlayerLeaderBoardByHeroType;
  PlayerMatchesGroupByRequestType: PlayerMatchesGroupByRequestType;
  PlayerMatchesRequestType: PlayerMatchesRequestType;
  PlayerPerformanceCompositionHeroType: PlayerPerformanceCompositionHeroType;
  PlayerPerformanceCompositionType: PlayerPerformanceCompositionType;
  PlayerPerformanceMatchesRequestType: PlayerPerformanceMatchesRequestType;
  PlayerPerformancePositionObjectType: PlayerPerformancePositionObjectType;
  PlayerPerformancePositionType: PlayerPerformancePositionType;
  PlayerPerformanceType: PlayerPerformanceType;
  PlayerPlayedWithProPlayerMatchType: PlayerPlayedWithProPlayerMatchType;
  PlayerPlayedWithProPlayerType: PlayerPlayedWithProPlayerType;
  PlayerPlayedWithProTeamType: PlayerPlayedWithProTeamType;
  PlayerPlayedWithProType: PlayerPlayedWithProType;
  PlayerRuneDetailType: PlayerRuneDetailType;
  PlayerTeammateType: PlayerTeammateType;
  PlayerTeammatesGroupByRequestType: PlayerTeammatesGroupByRequestType;
  PlayerType: Omit<PlayerType, 'matchesGroupBy'> & { matchesGroupBy?: Maybe<Array<Maybe<ResolversParentTypes['MatchGroupByType']>>> };
  PlayerUpdateAttributeDetailType: PlayerUpdateAttributeDetailType;
  PlayerUpdateBattleDetailType: PlayerUpdateBattleDetailType;
  PlayerUpdateGoldDetailType: PlayerUpdateGoldDetailType;
  PlayerUpdateHealthDetailType: PlayerUpdateHealthDetailType;
  PlayerUpdateLevelDetailType: PlayerUpdateLevelDetailType;
  PlayerUpdatePositionDetailType: PlayerUpdatePositionDetailType;
  PlusDraftMissingLetterRequestType: PlusDraftMissingLetterRequestType;
  PlusDraftPlayerHeroObjectType: PlusDraftPlayerHeroObjectType;
  PlusDraftPlayerRequestType: PlusDraftPlayerRequestType;
  PlusDraftPlayerType: PlusDraftPlayerType;
  PlusDraftRequestType: PlusDraftRequestType;
  PlusDraftType: PlusDraftType;
  PlusHeroTeamStatusAveragesType: PlusHeroTeamStatusAveragesType;
  PlusHeroTeamStatusDetailType: PlusHeroTeamStatusDetailType;
  PlusHoverBanType: PlusHoverBanType;
  PlusHoverType: PlusHoverType;
  PlusPlayerHoverHeroType: PlusPlayerHoverHeroType;
  PlusPlayerHoverPlayerType: PlusPlayerHoverPlayerType;
  PlusPlayerHoverRequestType: PlusPlayerHoverRequestType;
  PlusPlayerHoverType: PlusPlayerHoverType;
  PlusQuery: PlusQuery;
  ProPlayerFollowType: ProPlayerFollowType;
  ProSteamAccountType: ProSteamAccountType;
  ROSHCaptainJackIdentityStatDifficultyType: RoshCaptainJackIdentityStatDifficultyType;
  ROSHGlobalStatType: RoshGlobalStatType;
  ROSHMatchesRequestType: RoshMatchesRequestType;
  ROSHMutation: RoshMutation;
  RabbitDetailType: RabbitDetailType;
  RabbitQueueDetailType: RabbitQueueDetailType;
  RegionType: RegionType;
  RoleType: RoleType;
  RoshQuery: RoshQuery;
  SearchType: SearchType;
  SeriesType: SeriesType;
  ServerStatusType: ServerStatusType;
  Short: Scalars['Short']['output'];
  SpiritBearInventoryObjectType: SpiritBearInventoryObjectType;
  SpiritBearInventoryType: SpiritBearInventoryType;
  SteamAccountBattlePassType: SteamAccountBattlePassType;
  SteamAccountByRankType: SteamAccountByRankType;
  SteamAccountNameType: SteamAccountNameType;
  SteamAccountSeasonActiveLeaderboardCountryDataType: SteamAccountSeasonActiveLeaderboardCountryDataType;
  SteamAccountSeasonActiveLeaderboardPositionDataType: SteamAccountSeasonActiveLeaderboardPositionDataType;
  SteamAccountSeasonActiveLeaderboardRankType: SteamAccountSeasonActiveLeaderboardRankType;
  SteamAccountSeasonActiveLeaderboardType: SteamAccountSeasonActiveLeaderboardType;
  SteamAccountSeasonLeaderBoardRankType: SteamAccountSeasonLeaderBoardRankType;
  SteamAccountSeasonRankType: SteamAccountSeasonRankType;
  SteamAccountTeamMemberType: SteamAccountTeamMemberType;
  SteamAccountType: SteamAccountType;
  SteamApiDetailOutageType: SteamApiDetailOutageType;
  SteamApiDetailType: SteamApiDetailType;
  StratzQuery: StratzQuery;
  StreakEventType: StreakEventType;
  String: Scalars['String']['output'];
  TI2020CustomGameRoomModifierType: Ti2020CustomGameRoomModifierType;
  TeamMatchesRequestType: TeamMatchesRequestType;
  TeamPrizeType: TeamPrizeType;
  TeamType: Omit<TeamType, 'matchesGroupBy'> & { matchesGroupBy?: Maybe<Array<Maybe<ResolversParentTypes['MatchGroupByType']>>> };
  TopPlayersByHeroType: TopPlayersByHeroType;
  TotalMatchCountType: TotalMatchCountType;
  TotalPlayerCountType: TotalPlayerCountType;
  TowerDamageDetailType: TowerDamageDetailType;
  TwitchTrackerPlayerHeroType: TwitchTrackerPlayerHeroType;
  TwitchTrackerPlayerMatchType: TwitchTrackerPlayerMatchType;
  TwitchTrackerPlayerType: TwitchTrackerPlayerType;
  UShort: Scalars['UShort']['output'];
  UpdateFollowerRequestType: UpdateFollowerRequestType;
  UpdateMatchReplayMatchUploadPlayerObjectType: UpdateMatchReplayMatchUploadPlayerObjectType;
  UpdateMatchReplayUploadObjectType: UpdateMatchReplayUploadObjectType;
  UserHomepageType: UserHomepageType;
  UserQuery: UserQuery;
  UserType: UserType;
  VendorQuery: VendorQuery;
  YogurtMutation: YogurtMutation;
  YogurtQuery: YogurtQuery;
};

export type AbilityActiveListTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityActiveListType'] = ResolversParentTypes['AbilityActiveListType']> = {
  ability0?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  ability1?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  ability2?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  ability3?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  ability4?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  ability5?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  ability6?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  ability7?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityAttributeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityAttributeType'] = ResolversParentTypes['AbilityAttributeType']> = {
  linkedSpecialBonusAbilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requiresScepter?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityCustomGameLanguageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityCustomGameLanguageType'] = ResolversParentTypes['AbilityCustomGameLanguageType']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityCustomGameTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityCustomGameType'] = ResolversParentTypes['AbilityCustomGameType']> = {
  abilityName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['AbilityCustomGameLanguageType']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityLanguageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityLanguageType'] = ResolversParentTypes['AbilityLanguageType']> = {
  aghanimDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  shardDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityLearnEventsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityLearnEventsType'] = ResolversParentTypes['AbilityLearnEventsType']> = {
  abilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isMaxLevel?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTalent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isUltimate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  levelObtained?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityStatTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityStatType'] = ResolversParentTypes['AbilityStatType']> = {
  abilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  behavior?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  castPoint?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  castRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  castRangeBuffer?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  channelTime?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  chargeRestoreTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  charges?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cooldown?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  damage?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  dispellable?: Resolver<Maybe<ResolversTypes['AbilityDispellEnum']>, ParentType, ContextType>;
  displayAdditionalHeroes?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fightRecapLevel?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  hasScepterUpgrade?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasShardUpgrade?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hotKeyOverride?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isGrantedByScepter?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isGrantedByShard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOnCastbar?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isOnLearnbar?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isUltimate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  levelsBetweenUpgrades?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  linkedAbilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  manaCost?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  maxLevel?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  modifierSupportBonus?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  modifierSupportValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  requiredLevel?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  spellImmunity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unitDamageType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unitTargetFlags?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  unitTargetTeam?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unitTargetType?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityType'] = ResolversParentTypes['AbilityType']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['AbilityAttributeType']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isTalent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['AbilityLanguageType']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stat?: Resolver<Maybe<ResolversTypes['AbilityStatType']>, ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AbilityUsedEventsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AbilityUsedEventsType'] = ResolversParentTypes['AbilityUsedEventsType']> = {
  abilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminMutation'] = ResolversParentTypes['AdminMutation']> = {
  deleteProSteamAccount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<AdminMutationDeleteProSteamAccountArgs, 'request'>>;
  mergeProSteamAccount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<AdminMutationMergeProSteamAccountArgs, 'request'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminQuery'] = ResolversParentTypes['AdminQuery']> = {
  apiMemoryReport?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AghanimLabDepthListAscensionAbilitiesObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AghanimLabDepthListAscensionAbilitiesObjectType'] = ResolversParentTypes['AghanimLabDepthListAscensionAbilitiesObjectType']> = {
  abilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  modifierId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['AghanimLabDepthListAscensionAbilitiesEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AghanimLabHeroAbilityTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AghanimLabHeroAbilityType'] = ResolversParentTypes['AghanimLabHeroAbilityType']> = {
  customAbilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  difficulty?: Resolver<Maybe<ResolversTypes['AghanimLabMatchDifficultyEnum']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pickCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AghanimLabHeroCompositionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AghanimLabHeroCompositionType'] = ResolversParentTypes['AghanimLabHeroCompositionType']> = {
  difficulty?: Resolver<Maybe<ResolversTypes['AghanimLabMatchDifficultyEnum']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId1?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  heroId2?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  heroId3?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  heroId4?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wilsonScore?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AghanimLabHeroWinRateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AghanimLabHeroWinRateType'] = ResolversParentTypes['AghanimLabHeroWinRateType']> = {
  difficulty?: Resolver<Maybe<ResolversTypes['AghanimLabMatchDifficultyEnum']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AghanimLabMatchDepthListTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AghanimLabMatchDepthListType'] = ResolversParentTypes['AghanimLabMatchDepthListType']> = {
  ascensionAbilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['AghanimLabDepthListAscensionAbilitiesObjectType']>>>, ParentType, ContextType>;
  selectedElite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  selectedEncounter?: Resolver<Maybe<ResolversTypes['AghanimLabDepthListEncounterEnum']>, ParentType, ContextType>;
  selectedEncounterEnum?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  selectedHidden?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  selectedReward?: Resolver<Maybe<ResolversTypes['AghanimLabDepthListRewardEnum']>, ParentType, ContextType>;
  unselectedElite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unselectedEncounter?: Resolver<Maybe<ResolversTypes['AghanimLabDepthListEncounterEnum']>, ParentType, ContextType>;
  unselectedHidden?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unselectedReward?: Resolver<Maybe<ResolversTypes['AghanimLabDepthListRewardEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AghanimLabMatchTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AghanimLabMatchType'] = ResolversParentTypes['AghanimLabMatchType']> = {
  arcaneFragments?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  battlePoints?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  clusterId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  depth?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  depthList?: Resolver<Maybe<Array<Maybe<ResolversTypes['AghanimLabMatchDepthListType']>>>, ParentType, ContextType>;
  didWin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  difficulty?: Resolver<Maybe<ResolversTypes['AghanimLabMatchDifficultyEnum']>, ParentType, ContextType>;
  durationSeconds?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  endDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  gameMode?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  goldBags?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lobbyType?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  numDeaths?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  numHumanPlayers?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  numKills?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['AghanimLabPlayerSeasonOneType']>>>, ParentType, ContextType, Partial<AghanimLabMatchTypePlayersArgs>>;
  regionId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  replaySalt?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  seed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AghanimLabPlayerBlessingObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AghanimLabPlayerBlessingObjectType'] = ResolversParentTypes['AghanimLabPlayerBlessingObjectType']> = {
  type?: Resolver<Maybe<ResolversTypes['AghanimLabPlayerBlessingEnum']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AghanimLabPlayerDepthListTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AghanimLabPlayerDepthListType'] = ResolversParentTypes['AghanimLabPlayerDepthListType']> = {
  goldBags?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  networth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numDeaths?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  rarity?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  selectedRewardAbility?: Resolver<Maybe<ResolversTypes['AbilityCustomGameType']>, ParentType, ContextType, Partial<AghanimLabPlayerDepthListTypeSelectedRewardAbilityArgs>>;
  selectedRewardAbilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  selectedRewardImageAbilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  unSelectedRewardAbility1?: Resolver<Maybe<ResolversTypes['AbilityCustomGameType']>, ParentType, ContextType, Partial<AghanimLabPlayerDepthListTypeUnSelectedRewardAbility1Args>>;
  unSelectedRewardAbility2?: Resolver<Maybe<ResolversTypes['AbilityCustomGameType']>, ParentType, ContextType, Partial<AghanimLabPlayerDepthListTypeUnSelectedRewardAbility2Args>>;
  unSelectedRewardAbilityId1?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  unSelectedRewardAbilityId2?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AghanimLabPlayerSeasonOneTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AghanimLabPlayerSeasonOneType'] = ResolversParentTypes['AghanimLabPlayerSeasonOneType']> = {
  arcaneFragments?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  blessings?: Resolver<Maybe<Array<Maybe<ResolversTypes['AghanimLabPlayerBlessingObjectType']>>>, ParentType, ContextType>;
  bonusArcaneFragments?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  experiencePerMinute?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  goldBags?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  goldPerMinute?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  goldSpent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isVictory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  item0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item1Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item2Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item3Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item4Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item5Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  leaverStatus?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  networth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  neutral0Id?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  neutralItemId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  numLastHits?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  partyId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  playerDepthList?: Resolver<Maybe<Array<Maybe<ResolversTypes['AghanimLabPlayerDepthListType']>>>, ParentType, ContextType>;
  playerSlot?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AghanimLabRoomTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AghanimLabRoomType'] = ResolversParentTypes['AghanimLabRoomType']> = {
  deathCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  difficulty?: Resolver<Maybe<ResolversTypes['AghanimLabMatchDifficultyEnum']>, ParentType, ContextType>;
  eliteDeathCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eliteMatchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  elitePickCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eliteWinCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  encounterId?: Resolver<Maybe<ResolversTypes['AghanimLabDepthListEncounterEnum']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pickCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssistDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssistDetailType'] = ResolversParentTypes['AssistDetailType']> = {
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BattlepassPredictionHeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BattlepassPredictionHeroType'] = ResolversParentTypes['BattlepassPredictionHeroType']> = {
  assistAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deathAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  experiencePerMinuteAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  killAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastHitAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCountBanned?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostAssists?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostDeaths?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostLastHits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BattlepassPredictionIdValueTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BattlepassPredictionIdValueType'] = ResolversParentTypes['BattlepassPredictionIdValueType']> = {
  id?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BattlepassPredictionPlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BattlepassPredictionPlayerType'] = ResolversParentTypes['BattlepassPredictionPlayerType']> = {
  assistAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deathAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  goldPerMinuteAvg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  killAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastHitAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostAssists?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostKills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostLastHits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BattlepassPredictionTeamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BattlepassPredictionTeamType'] = ResolversParentTypes['BattlepassPredictionTeamType']> = {
  gameSecondsAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  heroCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  killAvg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  leastDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longestGameSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mostKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shortestGameSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BattlepassPredictionTournamentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BattlepassPredictionTournamentType'] = ResolversParentTypes['BattlepassPredictionTournamentType']> = {
  heroesBanned?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionIdValueType']>>>, ParentType, ContextType>;
  heroesPicked?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionIdValueType']>>>, ParentType, ContextType>;
  longestGame?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionIdValueType']>>>, ParentType, ContextType>;
  soloAssists?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionIdValueType']>>>, ParentType, ContextType>;
  soloDeaths?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionIdValueType']>>>, ParentType, ContextType>;
  soloGoldPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionIdValueType']>>>, ParentType, ContextType>;
  soloKills?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionIdValueType']>>>, ParentType, ContextType>;
  totalKills?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionIdValueType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BlogTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BlogType'] = ResolversParentTypes['BlogType']> = {
  bannerImageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  captainJackIdentityId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  liveDateTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuyBackDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BuyBackDetailType'] = ResolversParentTypes['BuyBackDetailType']> = {
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  deathTimeRemaining?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export type CaptainJackIdentityApiApplicationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaptainJackIdentityApiApplicationType'] = ResolversParentTypes['CaptainJackIdentityApiApplicationType']> = {
  apiKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  captainJackIdentityId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discordAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isApproved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matomoReferenceToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secretKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenType?: Resolver<Maybe<ResolversTypes['StratzApiType']>, ParentType, ContextType>;
  websiteAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaptainJackIdentityPrivateProfileTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaptainJackIdentityPrivateProfileType'] = ResolversParentTypes['CaptainJackIdentityPrivateProfileType']> = {
  captainJackIdentityId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  dailyEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailHour?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  emailLevel?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  emailValidationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feedLevel?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  isAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isEmailValidated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  languageId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  lastDailyEmail?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastLeagueDailyEmail?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMonthlyEmail?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastProCircuitDailyEmail?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastReadFeedTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastTeamDailyEmail?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastWeeklyEmail?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  monthlyEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  premiumEndDate?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  proCircuitEmailLevel?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  proCircuitFeedLevel?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  rosh?: Resolver<Maybe<Array<Maybe<ResolversTypes['ROSHCaptainJackIdentityStatDifficultyType']>>>, ParentType, ContextType, Partial<CaptainJackIdentityPrivateProfileTypeRoshArgs>>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  themeType?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  twitch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unsubscribeCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weeklyEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  youTube?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CaptainJackIdentityPublicProfileTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CaptainJackIdentityPublicProfileType'] = ResolversParentTypes['CaptainJackIdentityPublicProfileType']> = {
  captainJackIdentityId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  twitch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youTube?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClusterTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClusterType'] = ResolversParentTypes['ClusterType']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  regionId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConstantQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConstantQuery'] = ResolversParentTypes['ConstantQuery']> = {
  abilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['AbilityType']>>>, ParentType, ContextType, Partial<ConstantQueryAbilitiesArgs>>;
  ability?: Resolver<Maybe<ResolversTypes['AbilityType']>, ParentType, ContextType, RequireFields<ConstantQueryAbilityArgs, 'id'>>;
  casters?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountType']>>>, ParentType, ContextType>;
  clusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClusterType']>>>, ParentType, ContextType>;
  customAbilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['AbilityCustomGameType']>>>, ParentType, ContextType, Partial<ConstantQueryCustomAbilitiesArgs>>;
  gameModes?: Resolver<Maybe<Array<Maybe<ResolversTypes['GameModeType']>>>, ParentType, ContextType>;
  gameVersion?: Resolver<Maybe<ResolversTypes['GameVersionType']>, ParentType, ContextType, RequireFields<ConstantQueryGameVersionArgs, 'id'>>;
  gameVersions?: Resolver<Maybe<Array<Maybe<ResolversTypes['GameVersionType']>>>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType, RequireFields<ConstantQueryHeroArgs, 'id'>>;
  heroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroType']>>>, ParentType, ContextType, Partial<ConstantQueryHeroesArgs>>;
  item?: Resolver<Maybe<ResolversTypes['ItemType']>, ParentType, ContextType, RequireFields<ConstantQueryItemArgs, 'id'>>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemType']>>>, ParentType, ContextType, Partial<ConstantQueryItemsArgs>>;
  lobbyTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LobbyTypeType']>>>, ParentType, ContextType>;
  modifiers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ModifierType']>>>, ParentType, ContextType, Partial<ConstantQueryModifiersArgs>>;
  npc?: Resolver<Maybe<ResolversTypes['NpcType']>, ParentType, ContextType, RequireFields<ConstantQueryNpcArgs, 'id'>>;
  npcs?: Resolver<Maybe<Array<Maybe<ResolversTypes['NpcType']>>>, ParentType, ContextType, Partial<ConstantQueryNpcsArgs>>;
  patchNotes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PatchNoteLanguageType']>>>, ParentType, ContextType, Partial<ConstantQueryPatchNotesArgs>>;
  popularTeamIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamType']>>>, ParentType, ContextType>;
  proSteamAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProSteamAccountType']>>>, ParentType, ContextType>;
  regions?: Resolver<Maybe<Array<Maybe<ResolversTypes['RegionType']>>>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleType']>>>, ParentType, ContextType>;
  tiWinners?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeathDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeathDetailType'] = ResolversParentTypes['DeathDetailType']> = {
  assist?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byAbility?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byItem?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  goldFed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goldLost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasHealAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isAttemptTpOut?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isBurst?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDieBack?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isEngagedOnDeath?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFeed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFromIllusion?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTracked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isWardWalkThrough?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reliableGold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timeDead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unreliableGold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  xpFed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type DireTideCustomGameHeroWinDayTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DireTideCustomGameHeroWinDayType'] = ResolversParentTypes['DireTideCustomGameHeroWinDayType']> = {
  candyScored?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  day?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DireTideCustomGameMatchTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DireTideCustomGameMatchType'] = ResolversParentTypes['DireTideCustomGameMatchType']> = {
  candyLost?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  candyPickedUp?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  candyScored?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  clusterId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  didRadiantWin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  direCandyScored?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  durationSeconds?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  endDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['DireTideCustomGamePlayerType']>>>, ParentType, ContextType, Partial<DireTideCustomGameMatchTypePlayersArgs>>;
  radiantCandyScored?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  replaySalt?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  startDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DireTideCustomGamePlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DireTideCustomGamePlayerType'] = ResolversParentTypes['DireTideCustomGamePlayerType']> = {
  assists?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  backpack0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpack1Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpack2Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  candyLost?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  candyPickedUp?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  candyScored?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  goldPerMinute?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  goldSpent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType>;
  heroDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroHealing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isVictory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  item0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item1Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item2Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item3Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item4Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item5Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  leaverStatus?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  networth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  neutral0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  numLastHits?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  partyId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  playerSlot?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DotaMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DotaMutation'] = ResolversParentTypes['DotaMutation']> = {
  admin?: Resolver<Maybe<ResolversTypes['AdminMutation']>, ParentType, ContextType>;
  retryMatchDownload?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaMutationRetryMatchDownloadArgs, 'matchId'>>;
  rosh?: Resolver<Maybe<ResolversTypes['ROSHMutation']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['DotaUserMutation']>, ParentType, ContextType>;
  yogurt?: Resolver<Maybe<ResolversTypes['YogurtMutation']>, ParentType, ContextType>;
};

export type DotaNextQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['DotaNextQuery'] = ResolversParentTypes['DotaNextQuery']> = {
  ally?: Resolver<Maybe<Array<Maybe<ResolversTypes['DotaNextWithAllyType']>>>, ParentType, ContextType, RequireFields<DotaNextQueryAllyArgs, 'matchSteamAccountId' | 'steamAccountIds'>>;
  enemy?: Resolver<Maybe<Array<Maybe<ResolversTypes['DotaNextWithAllyType']>>>, ParentType, ContextType, RequireFields<DotaNextQueryEnemyArgs, 'matchSteamAccountId' | 'steamAccountIds'>>;
  playerHero?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['MatchPlayerItemPurchaseEventType']>>>>>, ParentType, ContextType, RequireFields<DotaNextQueryPlayerHeroArgs, 'gameModeIds' | 'limitByItemIds' | 'lobbyTypeIds' | 'startDateTime' | 'steamAccountIds'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DotaNextWithAllyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DotaNextWithAllyType'] = ResolversParentTypes['DotaNextWithAllyType']> = {
  lifetimeMatchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lifetimeWinMatchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DotaPlusWeekTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DotaPlusWeekType'] = ResolversParentTypes['DotaPlusWeekType']> = {
  active?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  expired?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  week?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DotaQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['DotaQuery'] = ResolversParentTypes['DotaQuery']> = {
  constants?: Resolver<Maybe<ResolversTypes['ConstantQuery']>, ParentType, ContextType>;
  guild?: Resolver<Maybe<ResolversTypes['GuildType']>, ParentType, ContextType, RequireFields<DotaQueryGuildArgs, 'id'>>;
  heroStats?: Resolver<Maybe<ResolversTypes['HeroStatsQuery']>, ParentType, ContextType>;
  leaderboard?: Resolver<Maybe<ResolversTypes['LeaderboardQuery']>, ParentType, ContextType>;
  league?: Resolver<Maybe<ResolversTypes['LeagueType']>, ParentType, ContextType, RequireFields<DotaQueryLeagueArgs, 'id'>>;
  leagues?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueType']>>>, ParentType, ContextType, RequireFields<DotaQueryLeaguesArgs, 'request'>>;
  live?: Resolver<Maybe<ResolversTypes['LiveQuery']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType, RequireFields<DotaQueryMatchArgs, 'id'>>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchType']>>>, ParentType, ContextType, RequireFields<DotaQueryMatchesArgs, 'ids'>>;
  player?: Resolver<Maybe<ResolversTypes['PlayerType']>, ParentType, ContextType, RequireFields<DotaQueryPlayerArgs, 'steamAccountId'>>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerType']>>>, ParentType, ContextType, RequireFields<DotaQueryPlayersArgs, 'steamAccountIds'>>;
  plus?: Resolver<Maybe<ResolversTypes['PlusQuery']>, ParentType, ContextType>;
  stratz?: Resolver<Maybe<ResolversTypes['StratzQuery']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType, RequireFields<DotaQueryTeamArgs, 'teamId'>>;
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamType']>>>, ParentType, ContextType, RequireFields<DotaQueryTeamsArgs, 'teamIds'>>;
  vendor?: Resolver<Maybe<ResolversTypes['VendorQuery']>, ParentType, ContextType>;
  yogurt?: Resolver<Maybe<ResolversTypes['YogurtQuery']>, ParentType, ContextType>;
};

export type DotaSubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DotaSubscription'] = ResolversParentTypes['DotaSubscription']> = {
  feedLive?: SubscriptionResolver<Maybe<ResolversTypes['LiveEventType']>, "feedLive", ParentType, ContextType>;
  matchCount?: SubscriptionResolver<Maybe<ResolversTypes['TotalMatchCountType']>, "matchCount", ParentType, ContextType>;
  matchLive?: SubscriptionResolver<Maybe<ResolversTypes['MatchLiveType']>, "matchLive", ParentType, ContextType, RequireFields<DotaSubscriptionMatchLiveArgs, 'matchId'>>;
  matchLiveLeague?: SubscriptionResolver<Maybe<ResolversTypes['MatchLiveType']>, "matchLiveLeague", ParentType, ContextType, RequireFields<DotaSubscriptionMatchLiveLeagueArgs, 'leagueId'>>;
  playerCount?: SubscriptionResolver<Maybe<ResolversTypes['TotalPlayerCountType']>, "playerCount", ParentType, ContextType>;
};

export type DotaUserMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['DotaUserMutation'] = ResolversParentTypes['DotaUserMutation']> = {
  applyStratzApiKey?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationApplyStratzApiKeyArgs, 'description' | 'discordAddress' | 'emailAddress' | 'tokenType' | 'websiteAddress'>>;
  checkPublicDotaAccount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  followLeague?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationFollowLeagueArgs, 'leagueId'>>;
  followPlayer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationFollowPlayerArgs, 'steamAccountId'>>;
  readAllFeed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unfollowLeague?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationUnfollowLeagueArgs, 'leagueId'>>;
  unfollowPlayer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationUnfollowPlayerArgs, 'steamAccountId'>>;
  unsubscribeEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationUnsubscribeEmailArgs, 'code'>>;
  updateAllFollowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationUpdateAllFollowingArgs, 'request'>>;
  updateFollowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationUpdateFollowingArgs, 'followedSteamAccountId' | 'request'>>;
  updateFollowingFavorite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationUpdateFollowingFavoriteArgs, 'followedSteamAccountId' | 'isFavorite'>>;
  updateProfile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationUpdateProfileArgs, 'request'>>;
  validateEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<DotaUserMutationValidateEmailArgs, 'code'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExperienceDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ExperienceDetailType'] = ResolversParentTypes['ExperienceDetailType']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['XpReason']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeatTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeatType'] = ResolversParentTypes['FeatType']> = {
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Feat']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeedResponseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeedResponseType'] = ResolversParentTypes['FeedResponseType']> = {
  attackAnimationPoint?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['FeedType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FeedTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeedType'] = ResolversParentTypes['FeedType']> = {
  date?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  didWin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  league?: Resolver<Maybe<ResolversTypes['LeagueType']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  targetSteamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowerType'] = ResolversParentTypes['FollowerType']> = {
  captainJackIdentityId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  captainJackIdentityProfile?: Resolver<Maybe<ResolversTypes['CaptainJackIdentityPublicProfileType']>, ParentType, ContextType>;
  dailyEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  didManualUpdate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  emailLevel?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  feedLevel?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  isFavorite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastEmail?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  monthlyEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  weeklyEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameModeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GameModeType'] = ResolversParentTypes['GameModeType']> = {
  id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameVersionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GameVersionType'] = ResolversParentTypes['GameVersionType']> = {
  asOfDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GoldDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoldDetailType'] = ResolversParentTypes['GoldDetailType']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isValidForStats?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  npcId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['GoldReason']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Guid'], any> {
  name: 'Guid';
}

export type GuildMemberTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuildMemberType'] = ResolversParentTypes['GuildMemberType']> = {
  guild?: Resolver<Maybe<ResolversTypes['GuildType']>, ParentType, ContextType>;
  guildId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  joinDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuildTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuildType'] = ResolversParentTypes['GuildType']> = {
  createdDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  currentPercentile?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flags?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  lastUpdateDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchType']>>>, ParentType, ContextType, Partial<GuildTypeMatchesArgs>>;
  memberCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['GuildMemberType']>>>, ParentType, ContextType>;
  motd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pastWeeklyPercentile?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  pastWeeklyRank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pattern?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  primaryColor?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  requiredRank?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  secondaryColor?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalBattlePassLevels?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HealDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HealDetailType'] = ResolversParentTypes['HealDetailType']> = {
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byAbility?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byItem?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroAbilityMaxTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroAbilityMaxType'] = ResolversParentTypes['HeroAbilityMaxType']> = {
  abilityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroAbilityMinTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroAbilityMinType'] = ResolversParentTypes['HeroAbilityMinType']> = {
  abilityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroAbilityTalentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroAbilityTalentType'] = ResolversParentTypes['HeroAbilityTalentType']> = {
  abilityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  timeAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  winsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroAbilityTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroAbilityType'] = ResolversParentTypes['HeroAbilityType']> = {
  ability?: Resolver<Maybe<ResolversTypes['AbilityType']>, ParentType, ContextType, Partial<HeroAbilityTypeAbilityArgs>>;
  abilityId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  gameVersionId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['Byte'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroBanTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroBanType'] = ResolversParentTypes['HeroBanType']> = {
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroDamageDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroDamageDetailType'] = ResolversParentTypes['HeroDamageDetailType']> = {
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byAbility?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byItem?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  damageType?: Resolver<Maybe<ResolversTypes['Damage']>, ParentType, ContextType>;
  fromIllusion?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fromNpc?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isPhysicalAttack?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSourceMainHero?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTargetMainHero?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  toIllusion?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  toNpc?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroDotaPlusLeaderboardRankTopTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroDotaPlusLeaderboardRankTopType'] = ResolversParentTypes['HeroDotaPlusLeaderboardRankTopType']> = {
  createdDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroDotaPlusLeaderboardRankTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroDotaPlusLeaderboardRankType'] = ResolversParentTypes['HeroDotaPlusLeaderboardRankType']> = {
  createdDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  totalActions?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroDryadTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroDryadType'] = ResolversParentTypes['HeroDryadType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCountVs?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCountWith?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  vs?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroStatsHeroDryadType']>>>, ParentType, ContextType>;
  with?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroStatsHeroDryadType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroGuideListTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroGuideListType'] = ResolversParentTypes['HeroGuideListType']> = {
  guides?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroGuideType']>>>, ParentType, ContextType, Partial<HeroGuideListTypeGuidesArgs>>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroGuideTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroGuideType'] = ResolversParentTypes['HeroGuideType']> = {
  createdDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Short']>>>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchPlayer?: Resolver<Maybe<ResolversTypes['MatchPlayerType']>, ParentType, ContextType>;
  neutralItemIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Short']>>>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroItemBootPurchaseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroItemBootPurchaseType'] = ResolversParentTypes['HeroItemBootPurchaseType']> = {
  activationTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  activations?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  activationsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  activationsTimeAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  assists?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  assistsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  deathsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  goldEarned?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  goldEarnedAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  instance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  killsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  timeAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  xpAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroItemPurchaseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroItemPurchaseType'] = ResolversParentTypes['HeroItemPurchaseType']> = {
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  instance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroItemStartingPurchaseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroItemStartingPurchaseType'] = ResolversParentTypes['HeroItemStartingPurchaseType']> = {
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  instance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  wasGiven?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroLaneOutcomeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroLaneOutcomeType'] = ResolversParentTypes['HeroLaneOutcomeType']> = {
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  csCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  drawCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroId1?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  heroId2?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  lossCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchWinCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  stompLossCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  stompWinCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroLanguageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroLanguageType'] = ResolversParentTypes['HeroLanguageType']> = {
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroMatchupTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroMatchupType'] = ResolversParentTypes['HeroMatchupType']> = {
  advantage?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroDryadType']>>>, ParentType, ContextType>;
  disadvantage?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroDryadType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroNeutralItemTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroNeutralItemType'] = ResolversParentTypes['HeroNeutralItemType']> = {
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  equippedMatchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  equippedMatchWinCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['ItemType']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroPositionTimeDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroPositionTimeDetailType'] = ResolversParentTypes['HeroPositionTimeDetailType']> = {
  abilityCasts?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  ancients?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  apm?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  assists?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  attackCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  attackDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  buybackCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  campsStacked?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  castDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  casts?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  comeBackLost?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  comeBackWon?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  courierKills?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  cs?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  damage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  damageReceived?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  disableCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  disableDuration?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  dn?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  godLike?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  goldFed?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  goldLost?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  goldPerMinute?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  healingAllies?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  healingItemAllies?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  healingItemSelf?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  healingSelf?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  heroDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  invisibleCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  kDAAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  killContributionAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  magicalDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  magicalDamageReceived?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  magicalItemDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  mvp?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  networth?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  neutrals?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  physicalDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  physicalDamageReceived?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  physicalItemDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  pureDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  pureDamageReceived?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  purgeModifiers?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  rampage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  remainingMatchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  runeBounty?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  runePower?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  slowCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  slowDuration?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  stompLost?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  stompWon?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  stunCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  stunDuration?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  supportGold?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  teamKills?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  topCore?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  topSupport?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  towerDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  tripleKill?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  ultraKill?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  weakenCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  weakenDuration?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  xpFed?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroRampageObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroRampageObjectType'] = ResolversParentTypes['HeroRampageObjectType']> = {
  heroIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Short']>>>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroRoleTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroRoleType'] = ResolversParentTypes['HeroRoleType']> = {
  level?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  roleId?: Resolver<Maybe<ResolversTypes['HeroRoleEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroStatTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroStatType'] = ResolversParentTypes['HeroStatType']> = {
  agilityBase?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  agilityGain?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackAcquisitionRange?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackAnimationPoint?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackRange?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cMEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  complexity?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  enabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  heroUnlockOrder?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hpBarOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hpRegen?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  intelligenceBase?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  intelligenceGain?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  moveSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  moveTurnRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mpRegen?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  newPlayerEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  primaryAttribute?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryAttributeEnum?: Resolver<Maybe<ResolversTypes['HeroPrimaryAttributeType']>, ParentType, ContextType>;
  startingArmor?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startingDamageMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startingDamageMin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startingMagicArmor?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  strengthBase?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  strengthGain?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  visionDaytimeRange?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  visionNighttimeRange?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroStatsHeroDryadTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroStatsHeroDryadType'] = ResolversParentTypes['HeroStatsHeroDryadType']> = {
  assists?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  cs?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  dn?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  firstBloodTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  goldEarned?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroDamage?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroHealing?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroId1?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  heroId2?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  networth?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  synergy?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  towerDamage?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  week?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winRateHeroId1?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  winRateHeroId2?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  winsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroStatsQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroStatsQuery'] = ResolversParentTypes['HeroStatsQuery']> = {
  abilityMaxLevel?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroAbilityMaxType']>>>, ParentType, ContextType, RequireFields<HeroStatsQueryAbilityMaxLevelArgs, 'heroId'>>;
  abilityMinLevel?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroAbilityMinType']>>>, ParentType, ContextType, RequireFields<HeroStatsQueryAbilityMinLevelArgs, 'heroId'>>;
  banDay?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroBanType']>>>, ParentType, ContextType, RequireFields<HeroStatsQueryBanDayArgs, 'heroId'>>;
  guide?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroGuideListType']>>>, ParentType, ContextType, Partial<HeroStatsQueryGuideArgs>>;
  heroVsHeroMatchup?: Resolver<Maybe<ResolversTypes['HeroMatchupType']>, ParentType, ContextType, RequireFields<HeroStatsQueryHeroVsHeroMatchupArgs, 'heroId'>>;
  itemBootPurchase?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroItemBootPurchaseType']>>>, ParentType, ContextType, RequireFields<HeroStatsQueryItemBootPurchaseArgs, 'heroId'>>;
  itemFullPurchase?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroItemPurchaseType']>>>, ParentType, ContextType, RequireFields<HeroStatsQueryItemFullPurchaseArgs, 'heroId'>>;
  itemNeutral?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroNeutralItemType']>>>, ParentType, ContextType, RequireFields<HeroStatsQueryItemNeutralArgs, 'heroId'>>;
  itemStartingPurchase?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroItemStartingPurchaseType']>>>, ParentType, ContextType, RequireFields<HeroStatsQueryItemStartingPurchaseArgs, 'heroId'>>;
  laneOutcome?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroLaneOutcomeType']>>>, ParentType, ContextType, RequireFields<HeroStatsQueryLaneOutcomeArgs, 'isWith'>>;
  matchUp?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroDryadType']>>>, ParentType, ContextType, Partial<HeroStatsQueryMatchUpArgs>>;
  rampages?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroRampageObjectType']>>>, ParentType, ContextType, RequireFields<HeroStatsQueryRampagesArgs, 'request'>>;
  stats?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroPositionTimeDetailType']>>>, ParentType, ContextType, Partial<HeroStatsQueryStatsArgs>>;
  talent?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroAbilityTalentType']>>>, ParentType, ContextType, RequireFields<HeroStatsQueryTalentArgs, 'heroId'>>;
  winDay?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroWinDayType']>>>, ParentType, ContextType, Partial<HeroStatsQueryWinDayArgs>>;
  winGameVersion?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroWinGameVersionType']>>>, ParentType, ContextType, Partial<HeroStatsQueryWinGameVersionArgs>>;
  winHour?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroWinHourType']>>>, ParentType, ContextType, Partial<HeroStatsQueryWinHourArgs>>;
  winMonth?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroWinMonthType']>>>, ParentType, ContextType, Partial<HeroStatsQueryWinMonthArgs>>;
  winWeek?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroWinWeekType']>>>, ParentType, ContextType, Partial<HeroStatsQueryWinWeekArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroTalentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroTalentType'] = ResolversParentTypes['HeroTalentType']> = {
  abilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  slot?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroType'] = ResolversParentTypes['HeroType']> = {
  abilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroAbilityType']>>>, ParentType, ContextType>;
  aliases?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gameVersionId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['HeroLanguageType']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroRoleType']>>>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['HeroStatType']>, ParentType, ContextType>;
  talents?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroTalentType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroWinDayTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroWinDayType'] = ResolversParentTypes['HeroWinDayType']> = {
  day?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroWinGameVersionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroWinGameVersionType'] = ResolversParentTypes['HeroWinGameVersionType']> = {
  durationMinute?: Resolver<ResolversTypes['Byte'], ParentType, ContextType>;
  gameVersionId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroWinHourTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroWinHourType'] = ResolversParentTypes['HeroWinHourType']> = {
  heroId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  hour?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroWinMonthTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroWinMonthType'] = ResolversParentTypes['HeroWinMonthType']> = {
  durationMinute?: Resolver<ResolversTypes['Byte'], ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroWinWeekTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeroWinWeekType'] = ResolversParentTypes['HeroWinWeekType']> = {
  durationMinute?: Resolver<ResolversTypes['Byte'], ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomepageHeroDryadTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomepageHeroDryadType'] = ResolversParentTypes['HomepageHeroDryadType']> = {
  bracketBasicIds?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  comparisonHeroBaseWinRate?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  comparisonHeroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  mainHeroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  synergy?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomepageHeroSynergyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['HomepageHeroSynergyType'] = ResolversParentTypes['HomepageHeroSynergyType']> = {
  heroDryads?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomepageHeroDryadType']>>>, ParentType, ContextType>;
  mainHeroBaseWinRate?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  mainHeroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpGeneratorMatchPlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImpGeneratorMatchPlayerType'] = ResolversParentTypes['ImpGeneratorMatchPlayerType']> = {
  events?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['ImpGeneratorPlayerEventType']>>>>>, ParentType, ContextType>;
  impValues?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Int']>>>>>, ParentType, ContextType>;
  winChance?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  winRateByPlayerMinuteValues?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Float']>>>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpGeneratorPlayerEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImpGeneratorPlayerEventType'] = ResolversParentTypes['ImpGeneratorPlayerEventType']> = {
  assists?: Resolver<Maybe<ResolversTypes['UShort']>, ParentType, ContextType>;
  cs?: Resolver<Maybe<ResolversTypes['UShort']>, ParentType, ContextType>;
  damageReceived?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['UShort']>, ParentType, ContextType>;
  dn?: Resolver<Maybe<ResolversTypes['UShort']>, ParentType, ContextType>;
  healingAllies?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['UShort']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  magicalDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  neutrals?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  physicalDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pureDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  runePower?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpGeneratorPlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImpGeneratorPlayerType'] = ResolversParentTypes['ImpGeneratorPlayerType']> = {
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImpGeneratorPlayerEventType']>>>, ParentType, ContextType>;
  impValues?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Int']>>>>>, ParentType, ContextType>;
  winChance?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  winRateByPlayerMinuteValues?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Float']>>>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImpQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImpQuery'] = ResolversParentTypes['ImpQuery']> = {
  matchGenerator?: Resolver<Maybe<ResolversTypes['ImpGeneratorMatchPlayerType']>, ParentType, ContextType, RequireFields<ImpQueryMatchGeneratorArgs, 'matchId'>>;
  playerGenerator?: Resolver<Maybe<ResolversTypes['ImpGeneratorPlayerType']>, ParentType, ContextType, RequireFields<ImpQueryPlayerGeneratorArgs, 'request'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['InventoryObjectType'] = ResolversParentTypes['InventoryObjectType']> = {
  charges?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  secondaryCharges?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InventoryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['InventoryType'] = ResolversParentTypes['InventoryType']> = {
  backPack0?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  backPack1?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  backPack2?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  item0?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  item1?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  item2?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  item3?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  item4?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  item5?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  neutral0?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  teleport0?: Resolver<Maybe<ResolversTypes['InventoryObjectType']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemAttributeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemAttributeType'] = ResolversParentTypes['ItemAttributeType']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemComponentTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemComponentType'] = ResolversParentTypes['ItemComponentType']> = {
  componentId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemLanguageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemLanguageType'] = ResolversParentTypes['ItemLanguageType']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lore?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  notes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPurchaseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPurchaseType'] = ResolversParentTypes['ItemPurchaseType']> = {
  itemId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemStatTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemStatType'] = ResolversParentTypes['ItemStatType']> = {
  aliases?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  behavior?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  castPoint?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  castRange?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  channelTime?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fightRecapLevel?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  initialCharges?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  initialStock?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  initialStockTime?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isAlertable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDisplayCharges?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDroppable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isHideCharges?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPermanent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPurchasable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRecipe?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRequiresCharges?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSellable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSideShop?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isStackable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSupport?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTempestDoubleClonable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  itemResult?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  manaCost?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  needsComponents?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  neutralItemDropTime?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  neutralItemTier?: Resolver<Maybe<ResolversTypes['NeutralItemTierEnum']>, ParentType, ContextType>;
  quality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sharedCooldown?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shopTags?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockMax?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  stockTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unitTargetFlags?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  unitTargetTeam?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  unitTargetType?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  upgradeItem?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  upgradeRecipe?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemType'] = ResolversParentTypes['ItemType']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemAttributeType']>>>, ParentType, ContextType>;
  components?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemComponentType']>>>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isSupportFullItem?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['ItemLanguageType']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stat?: Resolver<Maybe<ResolversTypes['ItemStatType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemUsedEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemUsedEventType'] = ResolversParentTypes['ItemUsedEventType']> = {
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KillDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['KillDetailType'] = ResolversParentTypes['KillDetailType']> = {
  assist?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byAbility?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byItem?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isFromIllusion?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isGank?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isInvisible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRuneEffected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSmoke?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSolo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTpRecently?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguageType'] = ResolversParentTypes['LanguageType']> = {
  displaLanguageNameyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Byte'], ParentType, ContextType>;
  languageCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LastHitDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LastHitDetailType'] = ResolversParentTypes['LastHitDetailType']> = {
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byAbility?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byItem?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isAncient?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isCreep?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFromIllusion?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isNeutral?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mapLocation?: Resolver<Maybe<ResolversTypes['MapLocationEnums']>, ParentType, ContextType>;
  npcId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeaderboardQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeaderboardQuery'] = ResolversParentTypes['LeaderboardQuery']> = {
  battlePass?: Resolver<Maybe<ResolversTypes['PlayerBattlePassResponseType']>, ParentType, ContextType, Partial<LeaderboardQueryBattlePassArgs>>;
  battlePassGroupBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBattlePassGroupByType']>>>, ParentType, ContextType, RequireFields<LeaderboardQueryBattlePassGroupByArgs, 'groupBy' | 'playerCountAt'>>;
  coaching?: Resolver<Maybe<ResolversTypes['PlayerCoachingLeaderboardResponseType']>, ParentType, ContextType, Partial<LeaderboardQueryCoachingArgs>>;
  dotaPlus?: Resolver<Maybe<ResolversTypes['PlayerHeroDotaPlusLeaderboardRankResponseType']>, ParentType, ContextType, Partial<LeaderboardQueryDotaPlusArgs>>;
  dotaPlusTopLevels?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroDotaPlusLeaderboardRankTopType']>>>, ParentType, ContextType>;
  dotaPlusWeek?: Resolver<Maybe<Array<Maybe<ResolversTypes['DotaPlusWeekType']>>>, ParentType, ContextType>;
  guild?: Resolver<Maybe<Array<Maybe<ResolversTypes['GuildType']>>>, ParentType, ContextType, Partial<LeaderboardQueryGuildArgs>>;
  hero?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerLeaderBoardByHeroType']>>>, ParentType, ContextType, Partial<LeaderboardQueryHeroArgs>>;
  season?: Resolver<Maybe<ResolversTypes['SteamAccountSeasonActiveLeaderboardType']>, ParentType, ContextType, Partial<LeaderboardQuerySeasonArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueBattlePassTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueBattlePassType'] = ResolversParentTypes['LeagueBattlePassType']> = {
  average?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueDpcPositionStatObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueDpcPositionStatObjectType'] = ResolversParentTypes['LeagueDpcPositionStatObjectType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueMetaDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueMetaDetailType'] = ResolversParentTypes['LeagueMetaDetailType']> = {
  banCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  banRate?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  lossCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pickCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pickRate?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winRate?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueMetaTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueMetaType'] = ResolversParentTypes['LeagueMetaType']> = {
  bestRecord?: Resolver<Maybe<ResolversTypes['LeagueMetaDetailType']>, ParentType, ContextType>;
  league?: Resolver<Maybe<ResolversTypes['LeagueType']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  missingMatchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mostBanned?: Resolver<Maybe<ResolversTypes['LeagueMetaDetailType']>, ParentType, ContextType>;
  mostPicked?: Resolver<Maybe<ResolversTypes['LeagueMetaDetailType']>, ParentType, ContextType>;
  totalMatchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueNodeGroupTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueNodeGroupType'] = ResolversParentTypes['LeagueNodeGroupType']> = {
  advancingNodeGroupId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  advancingTeamCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  defaultNodeType?: Resolver<Maybe<ResolversTypes['LeagueNodeDefaultGroupEnum']>, ParentType, ContextType>;
  eliminationDPCPoints?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isCompleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isFinalGroup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTieBreaker?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  maxRounds?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeGroupType?: Resolver<Maybe<ResolversTypes['LeagueNodeGroupTypeEnum']>, ParentType, ContextType>;
  nodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueNodeType']>>>, ParentType, ContextType>;
  parentNodeGroupId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  phase?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  round?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  secondaryAdvancingNodeGroupId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  secondaryAdvancingTeamCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  teamCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  tertiaryAdvancingNodeGroupId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  tertiaryAdvancingTeamCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueNodeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueNodeType'] = ResolversParentTypes['LeagueNodeType']> = {
  actualTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  hasStarted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isCompleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  losingNodeId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchType']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeGroupId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  nodeType?: Resolver<Maybe<ResolversTypes['LeagueNodeDefaultGroupEnum']>, ParentType, ContextType>;
  scheduledTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  seriesId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  streamIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  streams?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueStreamType']>>>, ParentType, ContextType>;
  teamOne?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamOneId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamOneWins?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  teamTwo?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamTwoId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamTwoWins?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  winningNodeId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeaguePrizePoolPercentageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeaguePrizePoolPercentageType'] = ResolversParentTypes['LeaguePrizePoolPercentageType']> = {
  index?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  percentage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueRegisteredPlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueRegisteredPlayerType'] = ResolversParentTypes['LeagueRegisteredPlayerType']> = {
  league?: Resolver<Maybe<ResolversTypes['LeagueType']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  radiantTeam?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueStatTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueStatType'] = ResolversParentTypes['LeagueStatType']> = {
  averageMatchDurationSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  radiantWinMatchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueStreamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueStreamType'] = ResolversParentTypes['LeagueStreamType']> = {
  broadcastProvider?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  languageId?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streamUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vodUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableHeroLanesObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableHeroLanesObjectType'] = ResolversParentTypes['LeagueTableHeroLanesObjectType']> = {
  id?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableHeroOverviewTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableHeroOverviewType'] = ResolversParentTypes['LeagueTableHeroOverviewType']> = {
  banCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  banPhaseOne?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  banPhaseThree?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  banPhaseTwo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pickPhaseOne?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pickPhaseThree?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pickPhaseTwo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableHeroPlayersObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableHeroPlayersObjectType'] = ResolversParentTypes['LeagueTableHeroPlayersObjectType']> = {
  assists?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  cs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  deaths?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gpm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  heal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  heroDamage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  imp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  killContribution?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  kills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  steamId?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  towerDamage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  xpm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableHeroStatsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableHeroStatsType'] = ResolversParentTypes['LeagueTableHeroStatsType']> = {
  assists?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  cs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  deaths?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gpm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  heal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  heroDamage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  killContribution?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  kills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  towerDamage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  xpm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableHeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableHeroType'] = ResolversParentTypes['LeagueTableHeroType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  heroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueTableHeroPlayersObjectType']>>>, ParentType, ContextType>;
  lanes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueTableHeroLanesObjectType']>>>, ParentType, ContextType>;
  overview?: Resolver<Maybe<ResolversTypes['LeagueTableHeroOverviewType']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['LeagueTableHeroStatsType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTablePlayerHeroesObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTablePlayerHeroesObjectType'] = ResolversParentTypes['LeagueTablePlayerHeroesObjectType']> = {
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTablePlayerLanesObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTablePlayerLanesObjectType'] = ResolversParentTypes['LeagueTablePlayerLanesObjectType']> = {
  id?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTablePlayerOverviewTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTablePlayerOverviewType'] = ResolversParentTypes['LeagueTablePlayerOverviewType']> = {
  earnings?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  imp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  seriesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  seriesWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTablePlayerStatsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTablePlayerStatsType'] = ResolversParentTypes['LeagueTablePlayerStatsType']> = {
  assists?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  cs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  deaths?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gpm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  heal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  heroDamage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  killContribution?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  kills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  towerDamage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  xpm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTablePlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTablePlayerType'] = ResolversParentTypes['LeagueTablePlayerType']> = {
  heroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueTablePlayerHeroesObjectType']>>>, ParentType, ContextType>;
  lanes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueTablePlayerLanesObjectType']>>>, ParentType, ContextType>;
  overview?: Resolver<Maybe<ResolversTypes['LeagueTablePlayerOverviewType']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['LeagueTablePlayerStatsType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableTeamHeroesObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableTeamHeroesObjectType'] = ResolversParentTypes['LeagueTableTeamHeroesObjectType']> = {
  banCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableTeamLanesObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableTeamLanesObjectType'] = ResolversParentTypes['LeagueTableTeamLanesObjectType']> = {
  id?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableTeamOverviewTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableTeamOverviewType'] = ResolversParentTypes['LeagueTableTeamOverviewType']> = {
  earnings?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  seriesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  seriesDraws?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  seriesWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tmp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableTeamStatsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableTeamStatsType'] = ResolversParentTypes['LeagueTableTeamStatsType']> = {
  assists?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  cs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  deaths?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gpm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  heal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  heroDamage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  kills?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  towerDamage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  xpm?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableTeamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableTeamType'] = ResolversParentTypes['LeagueTableTeamType']> = {
  heroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueTableTeamHeroesObjectType']>>>, ParentType, ContextType>;
  lanes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueTableTeamLanesObjectType']>>>, ParentType, ContextType>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueRegisteredPlayerType']>>>, ParentType, ContextType>;
  overview?: Resolver<Maybe<ResolversTypes['LeagueTableTeamOverviewType']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['LeagueTableTeamStatsType']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTableTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueTableType'] = ResolversParentTypes['LeagueTableType']> = {
  leagueId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tableHeroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueTableHeroType']>>>, ParentType, ContextType>;
  tablePlayers?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueTablePlayerType']>>>, ParentType, ContextType>;
  tableTeams?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueTableTeamType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeagueTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeagueType'] = ResolversParentTypes['LeagueType']> = {
  banner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  basePrizePool?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  battlePass?: Resolver<Maybe<ResolversTypes['LeagueBattlePassType']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  freeToSpectate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasLiveMatches?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imageUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isFollowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDate?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  liveMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLiveType']>>>, ParentType, ContextType>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchType']>>>, ParentType, ContextType, RequireFields<LeagueTypeMatchesArgs, 'request'>>;
  matchesGroupBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchGroupByType']>>>, ParentType, ContextType, RequireFields<LeagueTypeMatchesGroupByArgs, 'request'>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodeGroups?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueNodeGroupType']>>>, ParentType, ContextType>;
  private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  prizePool?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prizePoolPercentages?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeaguePrizePoolPercentageType']>>>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['LeagueRegion']>, ParentType, ContextType>;
  series?: Resolver<Maybe<Array<Maybe<ResolversTypes['SeriesType']>>>, ParentType, ContextType, Partial<LeagueTypeSeriesArgs>>;
  standings?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamPrizeType']>>>, ParentType, ContextType>;
  startDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['LeagueStatType']>, ParentType, ContextType, Partial<LeagueTypeStatsArgs>>;
  stopSalesTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  streams?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueStreamType']>>>, ParentType, ContextType>;
  tables?: Resolver<Maybe<ResolversTypes['LeagueTableType']>, ParentType, ContextType, Partial<LeagueTypeTablesArgs>>;
  tier?: Resolver<Maybe<ResolversTypes['LeagueTier']>, ParentType, ContextType>;
  tournamentUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  venue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventMatchDireTideStompTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventMatchDireTideStompType'] = ResolversParentTypes['LiveEventMatchDireTideStompType']> = {
  match?: Resolver<Maybe<ResolversTypes['DireTideCustomGameMatchType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerDireTideCandyScoredTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerDireTideCandyScoredType'] = ResolversParentTypes['LiveEventPlayerDireTideCandyScoredType']> = {
  candyScored?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['DireTideCustomGameMatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroAssistsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroAssistsType'] = ResolversParentTypes['LiveEventPlayerHeroAssistsType']> = {
  assistCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroBuildingDamageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroBuildingDamageType'] = ResolversParentTypes['LiveEventPlayerHeroBuildingDamageType']> = {
  buildingDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroDewardTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroDewardType'] = ResolversParentTypes['LiveEventPlayerHeroDewardType']> = {
  dewardCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroDotaPlusLevelTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroDotaPlusLevelType'] = ResolversParentTypes['LiveEventPlayerHeroDotaPlusLevelType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroExpPerMinuteTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroExpPerMinuteType'] = ResolversParentTypes['LiveEventPlayerHeroExpPerMinuteType']> = {
  expPerMinute?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroGoldPerMinuteTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroGoldPerMinuteType'] = ResolversParentTypes['LiveEventPlayerHeroGoldPerMinuteType']> = {
  goldPerMinute?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroHealingTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroHealingType'] = ResolversParentTypes['LiveEventPlayerHeroHealingType']> = {
  healingAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroHeroDamageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroHeroDamageType'] = ResolversParentTypes['LiveEventPlayerHeroHeroDamageType']> = {
  heroDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroHighImpTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroHighImpType'] = ResolversParentTypes['LiveEventPlayerHeroHighImpType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroItemPurchaseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroItemPurchaseType'] = ResolversParentTypes['LiveEventPlayerHeroItemPurchaseType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroKillsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroKillsType'] = ResolversParentTypes['LiveEventPlayerHeroKillsType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  killCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerHeroWinStreakTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerHeroWinStreakType'] = ResolversParentTypes['LiveEventPlayerHeroWinStreakType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  winStreakCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerRampageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerRampageType'] = ResolversParentTypes['LiveEventPlayerRampageType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  rampageCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerRankUpTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerRankUpType'] = ResolversParentTypes['LiveEventPlayerRankUpType']> = {
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPlayerWinStreakTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPlayerWinStreakType'] = ResolversParentTypes['LiveEventPlayerWinStreakType']> = {
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  winStreakCount?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventProPlayerLiveTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventProPlayerLiveType'] = ResolversParentTypes['LiveEventProPlayerLiveType']> = {
  match?: Resolver<Maybe<ResolversTypes['MatchLiveType']>, ParentType, ContextType>;
  steamAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventType'] = ResolversParentTypes['LiveEventType']> = {
  __resolveType: TypeResolveFn<'LiveEventMatchDireTideStompType' | 'LiveEventPlayerDireTideCandyScoredType' | 'LiveEventPlayerHeroAssistsType' | 'LiveEventPlayerHeroBuildingDamageType' | 'LiveEventPlayerHeroDewardType' | 'LiveEventPlayerHeroDotaPlusLevelType' | 'LiveEventPlayerHeroExpPerMinuteType' | 'LiveEventPlayerHeroGoldPerMinuteType' | 'LiveEventPlayerHeroHealingType' | 'LiveEventPlayerHeroHeroDamageType' | 'LiveEventPlayerHeroHighImpType' | 'LiveEventPlayerHeroItemPurchaseType' | 'LiveEventPlayerHeroKillsType' | 'LiveEventPlayerHeroWinStreakType' | 'LiveEventPlayerRampageType' | 'LiveEventPlayerRankUpType' | 'LiveEventPlayerWinStreakType' | 'LiveEventProPlayerLiveType', ParentType, ContextType>;
};

export type LiveQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveQuery'] = ResolversParentTypes['LiveQuery']> = {
  match?: Resolver<Maybe<ResolversTypes['MatchLiveType']>, ParentType, ContextType, RequireFields<LiveQueryMatchArgs, 'id'>>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLiveType']>>>, ParentType, ContextType, Partial<LiveQueryMatchesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LobbyTypeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LobbyTypeType'] = ResolversParentTypes['LobbyTypeType']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MatchGroupByAssistsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByAssistsType'] = ResolversParentTypes['MatchGroupByAssistsType']> = {
  assistCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByAwardTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByAwardType'] = ResolversParentTypes['MatchGroupByAwardType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  award?: Resolver<Maybe<ResolversTypes['MatchPlayerAward']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByClusterTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByClusterType'] = ResolversParentTypes['MatchGroupByClusterType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cluster?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByDateDayHeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByDateDayHeroType'] = ResolversParentTypes['MatchGroupByDateDayHeroType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dateDay?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType, RequireFields<MatchGroupByDateDayHeroTypeHeroArgs, 'gameVersionId'>>;
  heroId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByDateDayTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByDateDayType'] = ResolversParentTypes['MatchGroupByDateDayType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dateDay?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByDeathsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByDeathsType'] = ResolversParentTypes['MatchGroupByDeathsType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deathCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByDurationMinutesTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByDurationMinutesType'] = ResolversParentTypes['MatchGroupByDurationMinutesType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  durationMinutes?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByFactionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByFactionType'] = ResolversParentTypes['MatchGroupByFactionType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByGameModeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByGameModeType'] = ResolversParentTypes['MatchGroupByGameModeType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  gameMode?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByGameVersionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByGameVersionType'] = ResolversParentTypes['MatchGroupByGameVersionType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  gameVersion?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByGoldPerMinuteTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByGoldPerMinuteType'] = ResolversParentTypes['MatchGroupByGoldPerMinuteType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  goldPerMinute?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByHeroPerformanceTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByHeroPerformanceType'] = ResolversParentTypes['MatchGroupByHeroPerformanceType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByHeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByHeroType'] = ResolversParentTypes['MatchGroupByHeroType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType, RequireFields<MatchGroupByHeroTypeHeroArgs, 'gameVersionId'>>;
  heroId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByHourTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByHourType'] = ResolversParentTypes['MatchGroupByHourType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByIsIntentionalFeedingTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByIsIntentionalFeedingType'] = ResolversParentTypes['MatchGroupByIsIntentionalFeedingType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isIntentionalFeeding?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByIsLeagueTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByIsLeagueType'] = ResolversParentTypes['MatchGroupByIsLeagueType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isLeague?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByIsLeaverTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByIsLeaverType'] = ResolversParentTypes['MatchGroupByIsLeaverType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isLeaver?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByIsPartyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByIsPartyType'] = ResolversParentTypes['MatchGroupByIsPartyType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isParty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByIsRandomTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByIsRandomType'] = ResolversParentTypes['MatchGroupByIsRandomType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isRandom?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByIsSeriesTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByIsSeriesType'] = ResolversParentTypes['MatchGroupByIsSeriesType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isSeries?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByIsStatsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByIsStatsType'] = ResolversParentTypes['MatchGroupByIsStatsType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isStats?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByIsVictoryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByIsVictoryType'] = ResolversParentTypes['MatchGroupByIsVictoryType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isVictory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByKillsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByKillsType'] = ResolversParentTypes['MatchGroupByKillsType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  killCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByLaneTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByLaneType'] = ResolversParentTypes['MatchGroupByLaneType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lane?: Resolver<Maybe<ResolversTypes['MatchLaneType']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByLeagueIdTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByLeagueIdType'] = ResolversParentTypes['MatchGroupByLeagueIdType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  league?: Resolver<Maybe<ResolversTypes['LeagueType']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByLevelTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByLevelType'] = ResolversParentTypes['MatchGroupByLevelType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByLobbyTypeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByLobbyTypeType'] = ResolversParentTypes['MatchGroupByLobbyTypeType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lobbyType?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByPositionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByPositionType'] = ResolversParentTypes['MatchGroupByPositionType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByRegionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByRegionType'] = ResolversParentTypes['MatchGroupByRegionType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByRoamLaneTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByRoamLaneType'] = ResolversParentTypes['MatchGroupByRoamLaneType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  roamLane?: Resolver<Maybe<ResolversTypes['MatchPlayerAward']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByRoleTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByRoleType'] = ResolversParentTypes['MatchGroupByRoleType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['MatchPlayerRoleType']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupBySteamAccountIdAgainstTeamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupBySteamAccountIdAgainstTeamType'] = ResolversParentTypes['MatchGroupBySteamAccountIdAgainstTeamType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupBySteamAccountIdHeroIdAgainstTeamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupBySteamAccountIdHeroIdAgainstTeamType'] = ResolversParentTypes['MatchGroupBySteamAccountIdHeroIdAgainstTeamType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType, RequireFields<MatchGroupBySteamAccountIdHeroIdAgainstTeamTypeHeroArgs, 'gameVersionId'>>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupBySteamAccountIdHeroIdTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupBySteamAccountIdHeroIdType'] = ResolversParentTypes['MatchGroupBySteamAccountIdHeroIdType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType, RequireFields<MatchGroupBySteamAccountIdHeroIdTypeHeroArgs, 'gameVersionId'>>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupBySteamAccountIdHeroIdWithTeamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupBySteamAccountIdHeroIdWithTeamType'] = ResolversParentTypes['MatchGroupBySteamAccountIdHeroIdWithTeamType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType, RequireFields<MatchGroupBySteamAccountIdHeroIdWithTeamTypeHeroArgs, 'gameVersionId'>>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupBySteamAccountIdTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupBySteamAccountIdType'] = ResolversParentTypes['MatchGroupBySteamAccountIdType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupBySteamAccountIdWithTeamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupBySteamAccountIdWithTeamType'] = ResolversParentTypes['MatchGroupBySteamAccountIdWithTeamType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByTeamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByTeamType'] = ResolversParentTypes['MatchGroupByTeamType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByTotalKillsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByTotalKillsType'] = ResolversParentTypes['MatchGroupByTotalKillsType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgTowerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalKills?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchGroupByTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchGroupByType'] = ResolversParentTypes['MatchGroupByType']> = {
  __resolveType: TypeResolveFn<'MatchGroupByAssistsType' | 'MatchGroupByAwardType' | 'MatchGroupByClusterType' | 'MatchGroupByDateDayHeroType' | 'MatchGroupByDateDayType' | 'MatchGroupByDeathsType' | 'MatchGroupByDurationMinutesType' | 'MatchGroupByFactionType' | 'MatchGroupByGameModeType' | 'MatchGroupByGameVersionType' | 'MatchGroupByGoldPerMinuteType' | 'MatchGroupByHeroPerformanceType' | 'MatchGroupByHeroType' | 'MatchGroupByHourType' | 'MatchGroupByIsIntentionalFeedingType' | 'MatchGroupByIsLeagueType' | 'MatchGroupByIsLeaverType' | 'MatchGroupByIsPartyType' | 'MatchGroupByIsRandomType' | 'MatchGroupByIsSeriesType' | 'MatchGroupByIsStatsType' | 'MatchGroupByIsVictoryType' | 'MatchGroupByKillsType' | 'MatchGroupByLaneType' | 'MatchGroupByLeagueIdType' | 'MatchGroupByLevelType' | 'MatchGroupByLobbyTypeType' | 'MatchGroupByPositionType' | 'MatchGroupByRegionType' | 'MatchGroupByRoamLaneType' | 'MatchGroupByRoleType' | 'MatchGroupBySteamAccountIdAgainstTeamType' | 'MatchGroupBySteamAccountIdHeroIdAgainstTeamType' | 'MatchGroupBySteamAccountIdHeroIdType' | 'MatchGroupBySteamAccountIdHeroIdWithTeamType' | 'MatchGroupBySteamAccountIdType' | 'MatchGroupBySteamAccountIdWithTeamType' | 'MatchGroupByTeamType' | 'MatchGroupByTotalKillsType', ParentType, ContextType>;
};

export type MatchLiveBuildingDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLiveBuildingDetailType'] = ResolversParentTypes['MatchLiveBuildingDetailType']> = {
  indexId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isAlive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  npcId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['BuildingType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLiveInsightTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLiveInsightType'] = ResolversParentTypes['MatchLiveInsightType']> = {
  lastSeries?: Resolver<Maybe<Array<Maybe<ResolversTypes['SeriesType']>>>, ParentType, ContextType>;
  teamOneLeagueMatchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamOneLeagueWinCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamOneVsWinCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamTwoLeagueMatchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamTwoLeagueWinCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamTwoVsWinCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePickBanTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePickBanType'] = ResolversParentTypes['MatchLivePickBanType']> = {
  adjustedWinRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bannedHeroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  baseWinRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  durationValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isPick?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  letter?: Resolver<Maybe<ResolversTypes['PlusLetterType']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  positionValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  winRateValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlaybackDataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlaybackDataType'] = ResolversParentTypes['MatchLivePlaybackDataType']> = {
  buildingEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLiveBuildingDetailType']>>>, ParentType, ContextType>;
  direScore?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLiveTeamScoreDetailType']>>>, ParentType, ContextType>;
  pickBans?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePickBanType']>>>, ParentType, ContextType>;
  radiantScore?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLiveTeamScoreDetailType']>>>, ParentType, ContextType>;
  roshanEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLiveRoshanDetailType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerAssistDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerAssistDetailType'] = ResolversParentTypes['MatchLivePlayerAssistDetailType']> = {
  positionX?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionY?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerDeathDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerDeathDetailType'] = ResolversParentTypes['MatchLivePlayerDeathDetailType']> = {
  positionX?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionY?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerDenyDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerDenyDetailType'] = ResolversParentTypes['MatchLivePlayerDenyDetailType']> = {
  positionX?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionY?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerExperienceDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerExperienceDetailType'] = ResolversParentTypes['MatchLivePlayerExperienceDetailType']> = {
  expPerMinute?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerGoldDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerGoldDetailType'] = ResolversParentTypes['MatchLivePlayerGoldDetailType']> = {
  gold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  goldPerMinute?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  networth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  networthDifference?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerImpDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerImpDetailType'] = ResolversParentTypes['MatchLivePlayerImpDetailType']> = {
  imp?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerInventoryDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerInventoryDetailType'] = ResolversParentTypes['MatchLivePlayerInventoryDetailType']> = {
  backpackId0?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpackId1?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpackId2?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId0?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId1?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId2?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId3?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId4?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId5?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerKillDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerKillDetailType'] = ResolversParentTypes['MatchLivePlayerKillDetailType']> = {
  positionX?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionY?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerLastHitDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerLastHitDetailType'] = ResolversParentTypes['MatchLivePlayerLastHitDetailType']> = {
  positionX?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionY?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerLevelDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerLevelDetailType'] = ResolversParentTypes['MatchLivePlayerLevelDetailType']> = {
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerPositionDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerPositionDetailType'] = ResolversParentTypes['MatchLivePlayerPositionDetailType']> = {
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  x?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLivePlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLivePlayerType'] = ResolversParentTypes['MatchLivePlayerType']> = {
  backpackId0?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpackId1?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpackId2?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  baseWinRateValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  experiencePerMinute?: Resolver<Maybe<ResolversTypes['UShort']>, ParentType, ContextType>;
  gameVersionId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goldPerMinute?: Resolver<Maybe<ResolversTypes['UShort']>, ParentType, ContextType>;
  goldSpent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType>;
  heroDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  impPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerImpDetailType']>>>, ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  itemId0?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId1?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId2?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId3?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId4?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  itemId5?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  leaverStatus?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  networth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  numAssists?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  numDeaths?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  numDenies?: Resolver<Maybe<ResolversTypes['UShort']>, ParentType, ContextType>;
  numKills?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  numLastHits?: Resolver<Maybe<ResolversTypes['UShort']>, ParentType, ContextType>;
  playbackData?: Resolver<Maybe<ResolversTypes['MatchPlayerLivePlaybackDataType']>, ParentType, ContextType>;
  playerSlot?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  respawnTimer?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  towerDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ultimateCooldown?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  ultimateState?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLiveRoshanDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLiveRoshanDetailType'] = ResolversParentTypes['MatchLiveRoshanDetailType']> = {
  isAlive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  respawnTimer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLiveTeamScoreDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLiveTeamScoreDetailType'] = ResolversParentTypes['MatchLiveTeamScoreDetailType']> = {
  score?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLiveTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLiveType'] = ResolversParentTypes['MatchLiveType']> = {
  averageRank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  buildingState?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  completed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  delay?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  direScore?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  direTeam?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  direTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durationValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  gameMinute?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  gameMode?: Resolver<Maybe<ResolversTypes['GameModeEnumType']>, ParentType, ContextType>;
  gameState?: Resolver<Maybe<ResolversTypes['MatchLiveGameState']>, ParentType, ContextType>;
  gameTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  insight?: Resolver<Maybe<ResolversTypes['MatchLiveInsightType']>, ParentType, ContextType>;
  isParsing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isUpdating?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  league?: Resolver<Maybe<ResolversTypes['LeagueType']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  liveWinRateValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLiveWinRateDetailType']>>>, ParentType, ContextType>;
  lobbyId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lobbyType?: Resolver<Maybe<ResolversTypes['LobbyTypeEnum']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  modifiedDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  numHumanPlayers?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  parseBeginGameTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playbackData?: Resolver<Maybe<ResolversTypes['MatchLivePlaybackDataType']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerType']>>>, ParentType, ContextType>;
  radiantLead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  radiantScore?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  radiantTeam?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  radiantTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  serverSteamId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  spectators?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winRateValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchLiveWinRateDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchLiveWinRateDetailType'] = ResolversParentTypes['MatchLiveWinRateDetailType']> = {
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPickBanGroupByTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPickBanGroupByType'] = ResolversParentTypes['MatchPickBanGroupByType']> = {
  banCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pickCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlaybackDataBuildingEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlaybackDataBuildingEventType'] = ResolversParentTypes['MatchPlaybackDataBuildingEventType']> = {
  didShrineActivate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  indexId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  maxHp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  npcId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['BuildingType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlaybackDataCourierEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlaybackDataCourierEventType'] = ResolversParentTypes['MatchPlaybackDataCourierEventType']> = {
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchplaybackDataCourierEventObjectType']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ownerHero?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlaybackDataRoshanEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlaybackDataRoshanEventType'] = ResolversParentTypes['MatchPlaybackDataRoshanEventType']> = {
  createTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item0?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item4?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item5?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxHp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalDamageTaken?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  x?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  y?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlaybackDataRuneEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlaybackDataRuneEventType'] = ResolversParentTypes['MatchPlaybackDataRuneEventType']> = {
  action?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionX?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionY?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rune?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlaybackDataTowerDeathEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlaybackDataTowerDeathEventType'] = ResolversParentTypes['MatchPlaybackDataTowerDeathEventType']> = {
  dire?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  radiant?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlaybackDataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlaybackDataType'] = ResolversParentTypes['MatchPlaybackDataType']> = {
  buildingEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlaybackDataBuildingEventType']>>>, ParentType, ContextType>;
  courierEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlaybackDataCourierEventType']>>>, ParentType, ContextType>;
  direCaptainHeroId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  radiantCaptainHeroId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  roshanEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlaybackDataRoshanEventType']>>>, ParentType, ContextType>;
  runeEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlaybackDataRuneEventType']>>>, ParentType, ContextType>;
  towerDeathEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlaybackDataTowerDeathEventType']>>>, ParentType, ContextType>;
  wardEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlaybackDataWardEventType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlaybackDataWardEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlaybackDataWardEventType'] = ResolversParentTypes['MatchPlaybackDataWardEventType']> = {
  action?: Resolver<Maybe<ResolversTypes['SpawnActionType']>, ParentType, ContextType>;
  fromPlayer?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  indexId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  playerDestroyed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionX?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionY?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wardType?: Resolver<Maybe<ResolversTypes['WardType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerAdditionalUnitTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerAdditionalUnitType'] = ResolversParentTypes['MatchPlayerAdditionalUnitType']> = {
  backpack0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpack1Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpack2Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item1Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item2Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item3Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item4Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item5Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  neutral0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerHeroDamageSourceAbilityReportObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerHeroDamageSourceAbilityReportObjectType'] = ResolversParentTypes['MatchPlayerHeroDamageSourceAbilityReportObjectType']> = {
  abilityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerHeroDamageSourceItemReportObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerHeroDamageSourceItemReportObjectType'] = ResolversParentTypes['MatchPlayerHeroDamageSourceItemReportObjectType']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerHeroDamageTargetReportObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerHeroDamageTargetReportObjectType'] = ResolversParentTypes['MatchPlayerHeroDamageTargetReportObjectType']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerHeroDamageTotalRecievedReportObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerHeroDamageTotalRecievedReportObjectType'] = ResolversParentTypes['MatchPlayerHeroDamageTotalRecievedReportObjectType']> = {
  disableCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  disableDuration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  heal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  magicalDamage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  physicalDamage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pureDamage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slowDuration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stunCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stunDuration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerHeroDamageTotalReportObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerHeroDamageTotalReportObjectType'] = ResolversParentTypes['MatchPlayerHeroDamageTotalReportObjectType']> = {
  allyHeal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  disableCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  disableDuration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  magicalDamage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  physicalDamage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pureDamage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  selfHeal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slowDuration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stunCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stunDuration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerInventoryObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerInventoryObjectType'] = ResolversParentTypes['MatchPlayerInventoryObjectType']> = {
  charges?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  secondaryCharges?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerInventoryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerInventoryType'] = ResolversParentTypes['MatchPlayerInventoryType']> = {
  backPack0?: Resolver<Maybe<ResolversTypes['MatchPlayerInventoryObjectType']>, ParentType, ContextType>;
  backPack1?: Resolver<Maybe<ResolversTypes['MatchPlayerInventoryObjectType']>, ParentType, ContextType>;
  backPack2?: Resolver<Maybe<ResolversTypes['MatchPlayerInventoryObjectType']>, ParentType, ContextType>;
  item0?: Resolver<Maybe<ResolversTypes['MatchPlayerInventoryObjectType']>, ParentType, ContextType>;
  item1?: Resolver<Maybe<ResolversTypes['MatchPlayerInventoryObjectType']>, ParentType, ContextType>;
  item2?: Resolver<Maybe<ResolversTypes['MatchPlayerInventoryObjectType']>, ParentType, ContextType>;
  item3?: Resolver<Maybe<ResolversTypes['MatchPlayerInventoryObjectType']>, ParentType, ContextType>;
  item4?: Resolver<Maybe<ResolversTypes['MatchPlayerInventoryObjectType']>, ParentType, ContextType>;
  item5?: Resolver<Maybe<ResolversTypes['MatchPlayerInventoryObjectType']>, ParentType, ContextType>;
  neutral0?: Resolver<Maybe<ResolversTypes['MatchPlayerInventoryObjectType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerItemPurchaseEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerItemPurchaseEventType'] = ResolversParentTypes['MatchPlayerItemPurchaseEventType']> = {
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerLivePlaybackDataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerLivePlaybackDataType'] = ResolversParentTypes['MatchPlayerLivePlaybackDataType']> = {
  assistEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerAssistDetailType']>>>, ParentType, ContextType>;
  csEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerLastHitDetailType']>>>, ParentType, ContextType>;
  deathEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerDeathDetailType']>>>, ParentType, ContextType>;
  denyEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerDenyDetailType']>>>, ParentType, ContextType>;
  experienceEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerExperienceDetailType']>>>, ParentType, ContextType>;
  goldEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerGoldDetailType']>>>, ParentType, ContextType>;
  inventoryEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerInventoryDetailType']>>>, ParentType, ContextType>;
  killEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerKillDetailType']>>>, ParentType, ContextType>;
  levelEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerLevelDetailType']>>>, ParentType, ContextType>;
  positionEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchLivePlayerPositionDetailType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerPlaybackDataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerPlaybackDataType'] = ResolversParentTypes['MatchPlayerPlaybackDataType']> = {
  abilityActiveLists?: Resolver<Maybe<Array<Maybe<ResolversTypes['AbilityActiveListType']>>>, ParentType, ContextType>;
  abilityLearnEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['AbilityLearnEventsType']>>>, ParentType, ContextType>;
  abilityUsedEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['AbilityUsedEventsType']>>>, ParentType, ContextType>;
  assistEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['AssistDetailType']>>>, ParentType, ContextType>;
  buyBackEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['BuyBackDetailType']>>>, ParentType, ContextType>;
  csEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['LastHitDetailType']>>>, ParentType, ContextType>;
  deathEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeathDetailType']>>>, ParentType, ContextType>;
  experienceEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExperienceDetailType']>>>, ParentType, ContextType>;
  goldEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['GoldDetailType']>>>, ParentType, ContextType>;
  healEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealDetailType']>>>, ParentType, ContextType>;
  heroDamageEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroDamageDetailType']>>>, ParentType, ContextType>;
  inventoryEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['InventoryType']>>>, ParentType, ContextType>;
  itemUsedEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemUsedEventType']>>>, ParentType, ContextType>;
  killEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['KillDetailType']>>>, ParentType, ContextType>;
  playerUpdateAttributeEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerUpdateAttributeDetailType']>>>, ParentType, ContextType>;
  playerUpdateBattleEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerUpdateBattleDetailType']>>>, ParentType, ContextType>;
  playerUpdateGoldEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerUpdateGoldDetailType']>>>, ParentType, ContextType>;
  playerUpdateHealthEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerUpdateHealthDetailType']>>>, ParentType, ContextType>;
  playerUpdateLevelEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerUpdateLevelDetailType']>>>, ParentType, ContextType>;
  playerUpdatePositionEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerUpdatePositionDetailType']>>>, ParentType, ContextType>;
  purchaseEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemPurchaseType']>>>, ParentType, ContextType>;
  runeEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerRuneDetailType']>>>, ParentType, ContextType>;
  spiritBearInventoryEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['SpiritBearInventoryType']>>>, ParentType, ContextType>;
  streakEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['StreakEventType']>>>, ParentType, ContextType>;
  towerDamageEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['TowerDamageDetailType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerSpectatorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerSpectatorType'] = ResolversParentTypes['MatchPlayerSpectatorType']> = {
  isRadiantCoach?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isVictory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  steamId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerSpiritBearInventoryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerSpiritBearInventoryType'] = ResolversParentTypes['MatchPlayerSpiritBearInventoryType']> = {
  backPack0Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  backPack1Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  backPack2Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item0Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item1Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item2Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item3Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item4Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item5Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  neutral0Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsAbilityCastObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsAbilityCastObjectType'] = ResolversParentTypes['MatchPlayerStatsAbilityCastObjectType']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsAbilityCastReportTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsAbilityCastReportType'] = ResolversParentTypes['MatchPlayerStatsAbilityCastReportType']> = {
  abilityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targets?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsAbilityCastObjectType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsActionReportTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsActionReportType'] = ResolversParentTypes['MatchPlayerStatsActionReportType']> = {
  attackPosition?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  attackTarget?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  castNoTarget?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  castPosition?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  castTarget?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  glyphCast?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  heldPosition?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  moveToPosition?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  moveToTarget?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pingUsed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scanUsed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsAllTalkEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsAllTalkEventType'] = ResolversParentTypes['MatchPlayerStatsAllTalkEventType']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pausedTick?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsAssistEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsAssistEventType'] = ResolversParentTypes['MatchPlayerStatsAssistEventType']> = {
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsBuffEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsBuffEventType'] = ResolversParentTypes['MatchPlayerStatsBuffEventType']> = {
  abilityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stackCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsChatWheelEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsChatWheelEventType'] = ResolversParentTypes['MatchPlayerStatsChatWheelEventType']> = {
  chatWheelId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  pauseTick?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsCourierKillEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsCourierKillEventType'] = ResolversParentTypes['MatchPlayerStatsCourierKillEventType']> = {
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsDeathEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsDeathEventType'] = ResolversParentTypes['MatchPlayerStatsDeathEventType']> = {
  assist?: Resolver<Maybe<Array<ResolversTypes['Short']>>, ParentType, ContextType>;
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byAbility?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  byItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goldFed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goldLost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hasHealAvailable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isAttemptTpOut?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isBurst?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDieBack?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isEngagedOnDeath?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTracked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isWardWalkThrough?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timeDead?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  xpFed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsFarmDistributionObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsFarmDistributionObjectType'] = ResolversParentTypes['MatchPlayerStatsFarmDistributionObjectType']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsFarmDistributionReportTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsFarmDistributionReportType'] = ResolversParentTypes['MatchPlayerStatsFarmDistributionReportType']> = {
  abandonGold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ancientLocation?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsFarmDistributionObjectType']>>>, ParentType, ContextType>;
  bountyGold?: Resolver<Maybe<ResolversTypes['MatchPlayerStatsFarmDistributionObjectType']>, ParentType, ContextType>;
  buildings?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsFarmDistributionObjectType']>>>, ParentType, ContextType>;
  buyBackGold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creepLocation?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsFarmDistributionObjectType']>>>, ParentType, ContextType>;
  creepType?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsFarmDistributionObjectType']>>>, ParentType, ContextType>;
  neutralLocation?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsFarmDistributionObjectType']>>>, ParentType, ContextType>;
  other?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsFarmDistributionObjectType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsHeroDamageReportTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsHeroDamageReportType'] = ResolversParentTypes['MatchPlayerStatsHeroDamageReportType']> = {
  dealtSourceAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerHeroDamageSourceAbilityReportObjectType']>>>, ParentType, ContextType>;
  dealtSourceItem?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerHeroDamageSourceItemReportObjectType']>>>, ParentType, ContextType>;
  dealtTargets?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerHeroDamageTargetReportObjectType']>>>, ParentType, ContextType>;
  dealtTotal?: Resolver<Maybe<ResolversTypes['MatchPlayerHeroDamageTotalReportObjectType']>, ParentType, ContextType>;
  receivedSourceAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerHeroDamageSourceAbilityReportObjectType']>>>, ParentType, ContextType>;
  receivedSourceItem?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerHeroDamageSourceItemReportObjectType']>>>, ParentType, ContextType>;
  receivedTargets?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerHeroDamageTargetReportObjectType']>>>, ParentType, ContextType>;
  receivedTotal?: Resolver<Maybe<ResolversTypes['MatchPlayerHeroDamageTotalRecievedReportObjectType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsItemUsedEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsItemUsedEventType'] = ResolversParentTypes['MatchPlayerStatsItemUsedEventType']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsKillEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsKillEventType'] = ResolversParentTypes['MatchPlayerStatsKillEventType']> = {
  assist?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  byAbility?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  byItem?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isGank?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isInvisible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSmoke?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSolo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTpRecently?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsLocationReportTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsLocationReportType'] = ResolversParentTypes['MatchPlayerStatsLocationReportType']> = {
  positionX?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionY?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsRuneEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsRuneEventType'] = ResolversParentTypes['MatchPlayerStatsRuneEventType']> = {
  action?: Resolver<Maybe<ResolversTypes['RuneAction']>, ParentType, ContextType>;
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rune?: Resolver<Maybe<ResolversTypes['RuneEnums']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsTowerDamageReportTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsTowerDamageReportType'] = ResolversParentTypes['MatchPlayerStatsTowerDamageReportType']> = {
  damage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damageCreeps?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damageFromAbility?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  npcId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsType'] = ResolversParentTypes['MatchPlayerStatsType']> = {
  abilityCastReport?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsAbilityCastReportType']>>>, ParentType, ContextType>;
  actionReport?: Resolver<Maybe<ResolversTypes['MatchPlayerStatsActionReportType']>, ParentType, ContextType>;
  actionsPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  allTalks?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsAllTalkEventType']>>>, ParentType, ContextType>;
  assistEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsAssistEventType']>>>, ParentType, ContextType>;
  campStack?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  chatWheels?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsChatWheelEventType']>>>, ParentType, ContextType>;
  courierKills?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsCourierKillEventType']>>>, ParentType, ContextType>;
  deathEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsDeathEventType']>>>, ParentType, ContextType>;
  deniesPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  experiencePerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  farmDistributionReport?: Resolver<Maybe<ResolversTypes['MatchPlayerStatsFarmDistributionReportType']>, ParentType, ContextType>;
  gameVersionId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  goldPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  healPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  heroDamagePerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  heroDamageReceivedPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  heroDamageReport?: Resolver<Maybe<ResolversTypes['MatchPlayerStatsHeroDamageReportType']>, ParentType, ContextType>;
  impPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  inventoryReport?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerInventoryType']>>>, ParentType, ContextType>;
  itemPurchases?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerItemPurchaseEventType']>>>, ParentType, ContextType>;
  itemUsed?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsItemUsedEventType']>>>, ParentType, ContextType>;
  killEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsKillEventType']>>>, ParentType, ContextType>;
  lastHitsPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  level?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  locationReport?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsLocationReportType']>>>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchPlayerBuffEvent?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsBuffEventType']>>>, ParentType, ContextType>;
  networthPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  runes?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsRuneEventType']>>>, ParentType, ContextType>;
  spiritBearInventoryReport?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerSpiritBearInventoryType']>>>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  towerDamagePerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  towerDamageReport?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsTowerDamageReportType']>>>, ParentType, ContextType>;
  tripsFountainPerMinute?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  wardDestruction?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerWardDestuctionObjectType']>>>, ParentType, ContextType>;
  wards?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerStatsWardEventType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerStatsWardEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerStatsWardEventType'] = ResolversParentTypes['MatchPlayerStatsWardEventType']> = {
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerType'] = ResolversParentTypes['MatchPlayerType']> = {
  abilities?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerAbilityType']>>>, ParentType, ContextType, Partial<MatchPlayerTypeAbilitiesArgs>>;
  additionalUnit?: Resolver<Maybe<ResolversTypes['MatchPlayerAdditionalUnitType']>, ParentType, ContextType>;
  assists?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  award?: Resolver<Maybe<ResolversTypes['MatchPlayerAward']>, ParentType, ContextType>;
  backpack0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpack1Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpack2Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  behavior?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  dotaPlus?: Resolver<Maybe<ResolversTypes['HeroDotaPlusLeaderboardRankType']>, ParentType, ContextType>;
  dotaPlusHeroXp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  experiencePerMinute?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  gameVersionId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goldPerMinute?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  goldSpent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType>;
  heroAverage?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroPositionTimeDetailType']>>>, ParentType, ContextType>;
  heroDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroHealing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  intentionalFeeding?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  invisibleSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRandom?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isVictory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  item0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item1Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item2Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item3Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item4Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item5Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  lane?: Resolver<Maybe<ResolversTypes['MatchLaneType']>, ParentType, ContextType>;
  leaverStatus?: Resolver<Maybe<ResolversTypes['LeaverStatusEnum']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  networth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  neutral0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  numDenies?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  numLastHits?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  partyId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  playbackData?: Resolver<Maybe<ResolversTypes['MatchPlayerPlaybackDataType']>, ParentType, ContextType>;
  playerSlot?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['MatchPlayerRoleType']>, ParentType, ContextType>;
  roleBasic?: Resolver<Maybe<ResolversTypes['MatchPlayerRoleType']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['MatchPlayerStatsType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  streakPrediction?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  towerDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchPlayerWardDestuctionObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchPlayerWardDestuctionObjectType'] = ResolversParentTypes['MatchPlayerWardDestuctionObjectType']> = {
  experience?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isWard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchReplayUploadHeroDuoSummaryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReplayUploadHeroDuoSummaryType'] = ResolversParentTypes['MatchReplayUploadHeroDuoSummaryType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCountAgainst?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchCountWith?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCountAgainst?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCountWith?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchReplayUploadHeroSummaryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReplayUploadHeroSummaryType'] = ResolversParentTypes['MatchReplayUploadHeroSummaryType']> = {
  banCountAgainst?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  banCountWith?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  duos?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchReplayUploadHeroDuoSummaryType']>>>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCountAgainst?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchCountWith?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCountAgainst?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCountWith?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchReplayUploadMatchTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReplayUploadMatchType'] = ResolversParentTypes['MatchReplayUploadMatchType']> = {
  didRadiantWin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  direKills?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  direTeam?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  direTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durationMinutes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  durationSeconds?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  endDateTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gameMode?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  gameVersionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRadiantFirstPick?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isValidated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  league?: Resolver<Maybe<ResolversTypes['LeagueType']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lobbyType?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  matchUploadTeamId?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numHumanPlayers?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  numHumanSpectators?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  pickBans?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchReplayUploadPickBanType']>>>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchReplayUploadPlayerType']>>>, ParentType, ContextType>;
  radiantKills?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  radiantTeam?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  radiantTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  seriesId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  spectators?: Resolver<Maybe<Array<Maybe<ResolversTypes['Long']>>>, ParentType, ContextType>;
  startDateTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  uploaderCaptainJackIdentityId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchReplayUploadOverviewTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReplayUploadOverviewType'] = ResolversParentTypes['MatchReplayUploadOverviewType']> = {
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchReplayUploadMatchType']>>>, ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchReplayUploadPickBanTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReplayUploadPickBanType'] = ResolversParentTypes['MatchReplayUploadPickBanType']> = {
  bannedHeroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isPick?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  playerSlot?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  wasBannedSuccessfully?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchReplayUploadPlayerStatsItemsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReplayUploadPlayerStatsItemsType'] = ResolversParentTypes['MatchReplayUploadPlayerStatsItemsType']> = {
  backpack0IdList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Byte']>>>, ParentType, ContextType>;
  backpack1IdList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Byte']>>>, ParentType, ContextType>;
  backpack2IdList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Byte']>>>, ParentType, ContextType>;
  item0IdList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Byte']>>>, ParentType, ContextType>;
  item1IdList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Byte']>>>, ParentType, ContextType>;
  item2IdList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Byte']>>>, ParentType, ContextType>;
  item3IdList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Byte']>>>, ParentType, ContextType>;
  item4IdList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Byte']>>>, ParentType, ContextType>;
  item5IdList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Byte']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchReplayUploadPlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReplayUploadPlayerType'] = ResolversParentTypes['MatchReplayUploadPlayerType']> = {
  agilityTotalList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  assists?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  assistsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  backpack0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpack1Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  backpack2Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  bkbChargesUsedList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  campStackList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  claimedDenyCountList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  claimedMissCountList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  commandsIssuedList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  creepKillGoldList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  creepStackList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  damageBonusList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  damageMaxList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  damageMinList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  deathsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  denies?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  denyCountList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  experiencePerMinute?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  goldLostToDeathList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  goldPerMinute?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  goldSpentOnBuybacks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goldSpentOnBuybacksList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  goldSpentOnConsumables?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goldSpentOnConsumablesList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  goldSpentOnItems?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goldSpentOnItemsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  goldSpentOnSupport?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  goldSpentOnSupportList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  heroDamage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  heroDamageList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  heroHealing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  heroHealingList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  heroKillGoldList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  incomeGoldList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  intellectTotalList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  isDire?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRadiant?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isVictory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  item0Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item1Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item2Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item3Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item4Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  item5Id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  items?: Resolver<Maybe<ResolversTypes['MatchReplayUploadPlayerStatsItemsType']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  killsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  lane?: Resolver<Maybe<ResolversTypes['MatchLaneType']>, ParentType, ContextType>;
  lastHitCountList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  lastHitMultiKillList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  lastHitStreakList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  lastHits?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  levelList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchUploadTeamId?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  maxHealthList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  maxManaList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  missCountList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  nearbyCreepDeathCountList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  networth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  networthList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  observerWardsPlacedList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  pickOrder?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  playerSlot?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  reliableGoldList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['MatchPlayerRoleType']>, ParentType, ContextType>;
  roshanKillsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  runePicksupList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  sentryWardsPlacedList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  sharedGoldList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  streakList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  strengthTotalList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  stunsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  teamPickOrder?: Resolver<Maybe<ResolversTypes['MatchPlayerTeamPickOrderType']>, ParentType, ContextType>;
  teamSlot?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  totalEarnedGoldList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  totalEarnedXpList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  totalGoldSpent?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  towerDamage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  towerDamageList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  towerKills?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  towerKillsList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  unreliableGoldList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  wardsDestroyedList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  wardsPurchasedList?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchReplayUploadTeamMemberTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReplayUploadTeamMemberType'] = ResolversParentTypes['MatchReplayUploadTeamMemberType']> = {
  captainJackIdentityId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDefaultTeam?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  matchUploadTeamId?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchReplayUploadTeamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchReplayUploadTeamType'] = ResolversParentTypes['MatchReplayUploadTeamType']> = {
  creatorCaptainJackIdentityId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  isDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchReplayUploadTeamMemberType']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchStatsChatEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchStatsChatEventType'] = ResolversParentTypes['MatchStatsChatEventType']> = {
  fromHeroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pausedTick?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  toHeroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchStatsLaneReportFactionLaneObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchStatsLaneReportFactionLaneObject'] = ResolversParentTypes['MatchStatsLaneReportFactionLaneObject']> = {
  denyCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  meleeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  neutralCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rangeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  siegeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchStatsLaneReportFactionObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchStatsLaneReportFactionObjectType'] = ResolversParentTypes['MatchStatsLaneReportFactionObjectType']> = {
  midLane?: Resolver<Maybe<ResolversTypes['MatchStatsLaneReportFactionLaneObject']>, ParentType, ContextType>;
  offLane?: Resolver<Maybe<ResolversTypes['MatchStatsLaneReportFactionLaneObject']>, ParentType, ContextType>;
  safeLane?: Resolver<Maybe<ResolversTypes['MatchStatsLaneReportFactionLaneObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchStatsLaneReportTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchStatsLaneReportType'] = ResolversParentTypes['MatchStatsLaneReportType']> = {
  dire?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchStatsLaneReportFactionObjectType']>>>, ParentType, ContextType>;
  radiant?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchStatsLaneReportFactionObjectType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchStatsOutpostReportObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchStatsOutpostReportObjectType'] = ResolversParentTypes['MatchStatsOutpostReportObjectType']> = {
  isControlledByRadiant?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRadiantSide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  npcId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchStatsPickBanTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchStatsPickBanType'] = ResolversParentTypes['MatchStatsPickBanType']> = {
  adjustedWinRate?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  bannedHeroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  baseWinRate?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isCaptain?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPick?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  letter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  playerIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wasBannedSuccessfully?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchStatsTowerDeathTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchStatsTowerDeathType'] = ResolversParentTypes['MatchStatsTowerDeathType']> = {
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isRadiant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  npcId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchStatsTowerReportObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchStatsTowerReportObjectType'] = ResolversParentTypes['MatchStatsTowerReportObjectType']> = {
  hp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  npcId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchStatsTowerReportTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchStatsTowerReportType'] = ResolversParentTypes['MatchStatsTowerReportType']> = {
  outposts?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchStatsOutpostReportObjectType']>>>, ParentType, ContextType>;
  towers?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchStatsTowerReportObjectType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchType'] = ResolversParentTypes['MatchType']> = {
  actualRank?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  analysisOutcome?: Resolver<Maybe<ResolversTypes['MatchAnalysisOutcomeType']>, ParentType, ContextType>;
  averageImp?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  averageRank?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  barracksStatusDire?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  barracksStatusRadiant?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  bottomLaneOutcome?: Resolver<Maybe<ResolversTypes['LaneOutcomeEnums']>, ParentType, ContextType>;
  bracket?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  chatEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchStatsChatEventType']>>>, ParentType, ContextType>;
  clusterId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  didRadiantWin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  didRequestDownload?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  direKills?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  direTeam?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  direTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durationSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  endDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  firstBloodTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gameMode?: Resolver<Maybe<ResolversTypes['GameModeEnumType']>, ParentType, ContextType>;
  gameVersionId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isStats?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  laneReport?: Resolver<Maybe<ResolversTypes['MatchStatsLaneReportType']>, ParentType, ContextType>;
  league?: Resolver<Maybe<ResolversTypes['LeagueType']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lobbyType?: Resolver<Maybe<ResolversTypes['LobbyTypeEnum']>, ParentType, ContextType>;
  midLaneOutcome?: Resolver<Maybe<ResolversTypes['LaneOutcomeEnums']>, ParentType, ContextType>;
  numHumanPlayers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parsedDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  pickBans?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchStatsPickBanType']>>>, ParentType, ContextType>;
  playbackData?: Resolver<Maybe<ResolversTypes['MatchPlaybackDataType']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerType']>>>, ParentType, ContextType, Partial<MatchTypePlayersArgs>>;
  predictedOutcomeWeight?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  predictedWinRates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Decimal']>>>, ParentType, ContextType>;
  radiantExperienceLeads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  radiantKills?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  radiantNetworthLeads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  radiantTeam?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  radiantTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  regionId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  replaySalt?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  sequenceNum?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  series?: Resolver<Maybe<ResolversTypes['SeriesType']>, ParentType, ContextType>;
  seriesId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  spectators?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPlayerSpectatorType']>>>, ParentType, ContextType>;
  startDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  statsDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  topLaneOutcome?: Resolver<Maybe<ResolversTypes['LaneOutcomeEnums']>, ParentType, ContextType>;
  tournamentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tournamentRound?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  towerDeaths?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchStatsTowerDeathType']>>>, ParentType, ContextType>;
  towerStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchStatsTowerReportType']>>>, ParentType, ContextType>;
  towerStatusDire?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  towerStatusRadiant?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winRates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Decimal']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchesDayTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchesDayType'] = ResolversParentTypes['MatchesDayType']> = {
  day?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchesGameVersionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchesGameVersionType'] = ResolversParentTypes['MatchesGameVersionType']> = {
  gameVersionId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchesHourTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchesHourType'] = ResolversParentTypes['MatchesHourType']> = {
  hour?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchesMonthTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchesMonthType'] = ResolversParentTypes['MatchesMonthType']> = {
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchesWeekTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchesWeekType'] = ResolversParentTypes['MatchesWeekType']> = {
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchmakingStatsTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchmakingStatsType'] = ResolversParentTypes['MatchmakingStatsType']> = {
  australia?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  austria?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  brazil?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  chile?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dubai?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  europe?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  india?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  japan?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perfectWorldTelecom?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perfectWorldTelecomGuangdong?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perfectWorldTelecomWuhan?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perfectWorldTelecomZhejiang?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perfectWorldUnicom?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perfectWorldUnicomTianjin?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  peru?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  singapore?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  southAfrica?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stockholm?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  taiwan?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  uSEast?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uSWest?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchplaybackDataCourierEventObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MatchplaybackDataCourierEventObjectType'] = ResolversParentTypes['MatchplaybackDataCourierEventObjectType']> = {
  didCastBoost?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isFlying?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  item0Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item1Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item2Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item3Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item4Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  item5Id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  respawnTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModifierTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModifierType'] = ResolversParentTypes['ModifierType']> = {
  buffDuration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isArmorReduce?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isAttackReduce?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isAttackSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isBanished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isBlind?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isBreak?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isCyclone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDamageAmplified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDisarm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isEthereal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isHex?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isInvisible?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isItem?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isKnockback?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isMovementDebuff?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isMovementSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isMute?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRoot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isShackle?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSilence?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSleep?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isStun?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isTaunt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isWeaken?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NewsItemTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NewsItemType'] = ResolversParentTypes['NewsItemType']> = {
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contents?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  feedLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  feedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NpcStatTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NpcStatType'] = ResolversParentTypes['NpcStatType']> = {
  attackAnimationPoint?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackDamageMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackDamageMin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackDesire?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackRange?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackRangeBuffer?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attackRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  autoAttacksByDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  canBeDominated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  combatClassAttack?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  combatClassDefend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dayTimeVision?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hasInventory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isAncient?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isNeutralUnitType?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  movementSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  movementTurnRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  nightTimeVision?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  projectileSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusHealth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusHealthRegen?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusMana?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusManaRegen?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  teamName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitRelationshipClass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wakesNeutrals?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NpcTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['NpcType'] = ResolversParentTypes['NpcType']> = {
  id?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stat?: Resolver<Maybe<ResolversTypes['NpcStatType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageAghanimQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageAghanimQuery'] = ResolversParentTypes['PageAghanimQuery']> = {
  heroAbility?: Resolver<Maybe<Array<Maybe<ResolversTypes['AghanimLabHeroAbilityType']>>>, ParentType, ContextType, RequireFields<PageAghanimQueryHeroAbilityArgs, 'difficulty'>>;
  heroComposition?: Resolver<Maybe<ResolversTypes['AghanimLabHeroCompositionType']>, ParentType, ContextType, RequireFields<PageAghanimQueryHeroCompositionArgs, 'difficulty' | 'heroIds'>>;
  heroCompositions?: Resolver<Maybe<Array<Maybe<ResolversTypes['AghanimLabHeroCompositionType']>>>, ParentType, ContextType, RequireFields<PageAghanimQueryHeroCompositionsArgs, 'request'>>;
  match?: Resolver<Maybe<ResolversTypes['AghanimLabMatchType']>, ParentType, ContextType, RequireFields<PageAghanimQueryMatchArgs, 'id'>>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['AghanimLabMatchType']>>>, ParentType, ContextType, Partial<PageAghanimQueryMatchesArgs>>;
  room?: Resolver<Maybe<Array<Maybe<ResolversTypes['AghanimLabRoomType']>>>, ParentType, ContextType, RequireFields<PageAghanimQueryRoomArgs, 'difficulty'>>;
  roomModifier?: Resolver<Maybe<Array<Maybe<ResolversTypes['TI2020CustomGameRoomModifierType']>>>, ParentType, ContextType, RequireFields<PageAghanimQueryRoomModifierArgs, 'difficulty'>>;
  winRate?: Resolver<Maybe<ResolversTypes['AghanimLabHeroWinRateType']>, ParentType, ContextType, RequireFields<PageAghanimQueryWinRateArgs, 'difficulty'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageBattlepassQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageBattlepassQuery'] = ResolversParentTypes['PageBattlepassQuery']> = {
  predictionsHero?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionHeroType']>>>, ParentType, ContextType, RequireFields<PageBattlepassQueryPredictionsHeroArgs, 'leagueIds'>>;
  predictionsPlayers?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionPlayerType']>>>, ParentType, ContextType, RequireFields<PageBattlepassQueryPredictionsPlayersArgs, 'leagueIds' | 'teamIds'>>;
  predictionsTeams?: Resolver<Maybe<Array<Maybe<ResolversTypes['BattlepassPredictionTeamType']>>>, ParentType, ContextType, RequireFields<PageBattlepassQueryPredictionsTeamsArgs, 'leagueIds' | 'teamIds'>>;
  predictionsTournament?: Resolver<Maybe<ResolversTypes['BattlepassPredictionTournamentType']>, ParentType, ContextType, RequireFields<PageBattlepassQueryPredictionsTournamentArgs, 'leagueIds' | 'teamIds'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageDireTideQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageDireTideQuery'] = ResolversParentTypes['PageDireTideQuery']> = {
  match?: Resolver<Maybe<ResolversTypes['DireTideCustomGameMatchType']>, ParentType, ContextType, RequireFields<PageDireTideQueryMatchArgs, 'id'>>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['DireTideCustomGameMatchType']>>>, ParentType, ContextType, RequireFields<PageDireTideQueryMatchesArgs, 'request'>>;
  winDay?: Resolver<Maybe<Array<Maybe<ResolversTypes['DireTideCustomGameHeroWinDayType']>>>, ParentType, ContextType, Partial<PageDireTideQueryWinDayArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageLeaguesQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageLeaguesQuery'] = ResolversParentTypes['PageLeaguesQuery']> = {
  dpcPositionStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueDpcPositionStatObjectType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageMatchesQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageMatchesQuery'] = ResolversParentTypes['PageMatchesQuery']> = {
  matchesStatsDay?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchesDayType']>>>, ParentType, ContextType, Partial<PageMatchesQueryMatchesStatsDayArgs>>;
  matchesStatsGameVersion?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchesGameVersionType']>>>, ParentType, ContextType, Partial<PageMatchesQueryMatchesStatsGameVersionArgs>>;
  matchesStatsHour?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchesHourType']>>>, ParentType, ContextType, Partial<PageMatchesQueryMatchesStatsHourArgs>>;
  matchesStatsMonth?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchesMonthType']>>>, ParentType, ContextType, Partial<PageMatchesQueryMatchesStatsMonthArgs>>;
  matchesStatsWeek?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchesWeekType']>>>, ParentType, ContextType, Partial<PageMatchesQueryMatchesStatsWeekArgs>>;
  matchmakingStats?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchmakingStatsType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagePlayerQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagePlayerQuery'] = ResolversParentTypes['PagePlayerQuery']> = {
  breakdown?: Resolver<Maybe<ResolversTypes['PlayerBreakdownType']>, ParentType, ContextType, RequireFields<PagePlayerQueryBreakdownArgs, 'request'>>;
  conduct?: Resolver<Maybe<ResolversTypes['PlayerConductResponseType']>, ParentType, ContextType>;
  heroPerformance?: Resolver<Maybe<ResolversTypes['PlayerPerformanceType']>, ParentType, ContextType, RequireFields<PagePlayerQueryHeroPerformanceArgs, 'heroId' | 'request'>>;
  heroesPerformance?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerHeroesPerformanceType']>>>, ParentType, ContextType, Partial<PagePlayerQueryHeroesPerformanceArgs>>;
  peers?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerTeammateType']>>>, ParentType, ContextType, RequireFields<PagePlayerQueryPeersArgs, 'request'>>;
  performance?: Resolver<Maybe<ResolversTypes['PlayerPerformanceType']>, ParentType, ContextType, RequireFields<PagePlayerQueryPerformanceArgs, 'request'>>;
  playedWithPro?: Resolver<Maybe<ResolversTypes['PlayerPlayedWithProType']>, ParentType, ContextType>;
  simpleSummary?: Resolver<Maybe<ResolversTypes['PlayerCardHoverType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PagePlayersQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PagePlayersQuery'] = ResolversParentTypes['PagePlayersQuery']> = {
  steamAccountByRank?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountByRankType']>>>, ParentType, ContextType, Partial<PagePlayersQuerySteamAccountByRankArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageQuery'] = ResolversParentTypes['PageQuery']> = {
  aghanim?: Resolver<Maybe<ResolversTypes['PageAghanimQuery']>, ParentType, ContextType>;
  battlePass?: Resolver<Maybe<ResolversTypes['PageBattlepassQuery']>, ParentType, ContextType>;
  direTide?: Resolver<Maybe<ResolversTypes['PageDireTideQuery']>, ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['ImpQuery']>, ParentType, ContextType>;
  leagues?: Resolver<Maybe<ResolversTypes['PageLeaguesQuery']>, ParentType, ContextType>;
  matches?: Resolver<Maybe<ResolversTypes['PageMatchesQuery']>, ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['PagePlayerQuery']>, ParentType, ContextType, RequireFields<PageQueryPlayerArgs, 'steamAccountId'>>;
  players?: Resolver<Maybe<ResolversTypes['PagePlayersQuery']>, ParentType, ContextType>;
  rosh?: Resolver<Maybe<ResolversTypes['RoshQuery']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PatchNoteLanguageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PatchNoteLanguageType'] = ResolversParentTypes['PatchNoteLanguageType']> = {
  abilityId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  gameVersionId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  generalId?: Resolver<Maybe<ResolversTypes['PatchNoteType']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  languageId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerAbilityTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerAbilityType'] = ResolversParentTypes['PlayerAbilityType']> = {
  abilityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  abilityType?: Resolver<Maybe<ResolversTypes['AbilityType']>, ParentType, ContextType, Partial<PlayerAbilityTypeAbilityTypeArgs>>;
  gameVersionId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  isTalent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerActivitySummaryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerActivitySummaryType'] = ResolversParentTypes['PlayerActivitySummaryType']> = {
  activity?: Resolver<Maybe<ResolversTypes['PlayerBehaviorActivity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerBadgeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerBadgeType'] = ResolversParentTypes['PlayerBadgeType']> = {
  badgeId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  createdDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  slot?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerBattlePassGroupByTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerBattlePassGroupByType'] = ResolversParentTypes['PlayerBattlePassGroupByType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  playerCountAt?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  sumLevels?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerBattlePassResponseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerBattlePassResponseType'] = ResolversParentTypes['PlayerBattlePassResponseType']> = {
  levels?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBattlePassType']>>>, ParentType, ContextType, Partial<PlayerBattlePassResponseTypePlayersArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerBattlePassTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerBattlePassType'] = ResolversParentTypes['PlayerBattlePassType']> = {
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerBreakdownObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerBreakdownObjectType'] = ResolversParentTypes['PlayerBreakdownObjectType']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastSeenDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  win?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerBreakdownTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerBreakdownType'] = ResolversParentTypes['PlayerBreakdownType']> = {
  dayOfWeekMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  durationMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  factionMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  gameModeMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  heroAttributeMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  impMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  isStatsMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  laneMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  lobbyMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  matches?: Resolver<Maybe<ResolversTypes['PlayerBreakdownObjectType']>, ParentType, ContextType>;
  partyMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  rankMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  regionMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  roleMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  timeOfDayMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  weekEndMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBreakdownObjectType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerCardHoverHeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerCardHoverHeroType'] = ResolversParentTypes['PlayerCardHoverHeroType']> = {
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lossCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerCardHoverTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerCardHoverType'] = ResolversParentTypes['PlayerCardHoverType']> = {
  activity?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  coreCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerCardHoverHeroType']>>>, ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastUpdateDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  supportCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerCoachingLeaderboardResponseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerCoachingLeaderboardResponseType'] = ResolversParentTypes['PlayerCoachingLeaderboardResponseType']> = {
  levels?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerCoachingLeaderboardType']>>>, ParentType, ContextType, Partial<PlayerCoachingLeaderboardResponseTypePlayersArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerCoachingLeaderboardTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerCoachingLeaderboardType'] = ResolversParentTypes['PlayerCoachingLeaderboardType']> = {
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerConductResponseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerConductResponseType'] = ResolversParentTypes['PlayerConductResponseType']> = {
  behaviorScore?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  lastIncidentDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastIncidentMatchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  recentMatchIncidents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Short']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerDraftHeroHighlightTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerDraftHeroHighlightType'] = ResolversParentTypes['PlayerDraftHeroHighlightType']> = {
  impAllTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  impLastMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  impLastSixMonths?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastPlayed?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCountLastMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCountLastSixMonths?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mvpCountLastMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  topCoreCountLastMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  topSupportCountLastMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCountLastMonth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCountLastSixMonths?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerHeroDotaPlusLeaderboardRankResponseTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerHeroDotaPlusLeaderboardRankResponseType'] = ResolversParentTypes['PlayerHeroDotaPlusLeaderboardRankResponseType']> = {
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroDotaPlusLeaderboardRankType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerHeroPerformanceLongestStreakTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerHeroPerformanceLongestStreakType'] = ResolversParentTypes['PlayerHeroPerformanceLongestStreakType']> = {
  currentStreak?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  longestStreak?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerHeroesPerformanceScoreTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerHeroesPerformanceScoreType'] = ResolversParentTypes['PlayerHeroesPerformanceScoreType']> = {
  id?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerHeroesPerformanceTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerHeroesPerformanceType'] = ResolversParentTypes['PlayerHeroesPerformanceType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  best?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  experiencePerMinute?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  goldPerMinute?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hero?: Resolver<Maybe<ResolversTypes['HeroType']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastPlayedDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  positionScore?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerHeroesPerformanceScoreType']>>>, ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerLeaderBoardByHeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerLeaderBoardByHeroType'] = ResolversParentTypes['PlayerLeaderBoardByHeroType']> = {
  changeInRanking?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  createdDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  impAverage?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  losses?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  regionId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  seasonBracket?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winStreak?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  wins?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerPerformanceCompositionHeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerPerformanceCompositionHeroType'] = ResolversParentTypes['PlayerPerformanceCompositionHeroType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerPerformanceCompositionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerPerformanceCompositionType'] = ResolversParentTypes['PlayerPerformanceCompositionType']> = {
  allies?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerPerformanceCompositionHeroType']>>>, ParentType, ContextType>;
  foes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerPerformanceCompositionHeroType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerPerformancePositionObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerPerformancePositionObjectType'] = ResolversParentTypes['PlayerPerformancePositionObjectType']> = {
  laneMatchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  laneType?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  laneWinCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerPerformancePositionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerPerformancePositionType'] = ResolversParentTypes['PlayerPerformancePositionType']> = {
  lanes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerPerformancePositionObjectType']>>>, ParentType, ContextType>;
  roleMatchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roleType?: Resolver<Maybe<ResolversTypes['MatchPlayerRoleType']>, ParentType, ContextType>;
  roleWinCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerPerformanceTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerPerformanceType'] = ResolversParentTypes['PlayerPerformanceType']> = {
  assists?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  assistsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  awardMatchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  composition?: Resolver<Maybe<ResolversTypes['PlayerPerformanceCompositionType']>, ParentType, ContextType>;
  cs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  csAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deathsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  gpm?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gpmAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Short']>>>, ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  killsAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxStreak?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mmrBracket?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mmrTier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mvpCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pickOrder?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerPerformancePositionType']>>>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  streak?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  topCoreCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  topSupportCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  xpm?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  xpmAverage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerPlayedWithProPlayerMatchTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerPlayedWithProPlayerMatchType'] = ResolversParentTypes['PlayerPlayedWithProPlayerMatchType']> = {
  match?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerPlayedWithProPlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerPlayedWithProPlayerType'] = ResolversParentTypes['PlayerPlayedWithProPlayerType']> = {
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  vs?: Resolver<Maybe<ResolversTypes['PlayerPlayedWithProPlayerMatchType']>, ParentType, ContextType>;
  with?: Resolver<Maybe<ResolversTypes['PlayerPlayedWithProPlayerMatchType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerPlayedWithProTeamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerPlayedWithProTeamType'] = ResolversParentTypes['PlayerPlayedWithProTeamType']> = {
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerPlayedWithProPlayerType']>>>, ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamLogo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teamName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerPlayedWithProTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerPlayedWithProType'] = ResolversParentTypes['PlayerPlayedWithProType']> = {
  casters?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerPlayedWithProPlayerType']>>>, ParentType, ContextType>;
  internationalWinners?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerPlayedWithProTeamType']>>>, ParentType, ContextType>;
  playedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerPlayedWithProTeamType']>>>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerRuneDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerRuneDetailType'] = ResolversParentTypes['PlayerRuneDetailType']> = {
  action?: Resolver<Maybe<ResolversTypes['RuneAction']>, ParentType, ContextType>;
  gold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionX?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  positionY?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rune?: Resolver<Maybe<ResolversTypes['RuneEnums']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerTeammateTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerTeammateType'] = ResolversParentTypes['PlayerTeammateType']> = {
  avgAssists?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgDeaths?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgExperiencePerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgGoldPerMinute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgImp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avgKDA?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avgKills?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerType'] = ResolversParentTypes['PlayerType']> = {
  activity?: Resolver<Maybe<ResolversTypes['PlayerActivitySummaryType']>, ParentType, ContextType>;
  badges?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerBadgeType']>>>, ParentType, ContextType>;
  behaviorScore?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  dotaPlus?: Resolver<Maybe<Array<Maybe<ResolversTypes['HeroDotaPlusLeaderboardRankType']>>>, ParentType, ContextType>;
  feats?: Resolver<Maybe<Array<Maybe<ResolversTypes['FeatType']>>>, ParentType, ContextType, Partial<PlayerTypeFeatsArgs>>;
  firstMatchDate?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  guildMember?: Resolver<Maybe<ResolversTypes['GuildMemberType']>, ParentType, ContextType>;
  heroPerformance?: Resolver<Maybe<ResolversTypes['PlayerPerformanceType']>, ParentType, ContextType, RequireFields<PlayerTypeHeroPerformanceArgs, 'heroId' | 'request'>>;
  heroStreaks?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerHeroPerformanceLongestStreakType']>>>, ParentType, ContextType, Partial<PlayerTypeHeroStreaksArgs>>;
  heroesPerformance?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerHeroesPerformanceType']>>>, ParentType, ContextType, Partial<PlayerTypeHeroesPerformanceArgs>>;
  identity?: Resolver<Maybe<ResolversTypes['CaptainJackIdentityPublicProfileType']>, ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isFollowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDate?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchRegionId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  leaderboardRanks?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountSeasonLeaderBoardRankType']>>>, ParentType, ContextType, Partial<PlayerTypeLeaderboardRanksArgs>>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchType']>>>, ParentType, ContextType, RequireFields<PlayerTypeMatchesArgs, 'request'>>;
  matchesGroupBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchGroupByType']>>>, ParentType, ContextType, RequireFields<PlayerTypeMatchesGroupByArgs, 'request'>>;
  names?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountNameType']>>>, ParentType, ContextType, Partial<PlayerTypeNamesArgs>>;
  performance?: Resolver<Maybe<ResolversTypes['PlayerPerformanceType']>, ParentType, ContextType>;
  ranks?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountSeasonRankType']>>>, ParentType, ContextType, Partial<PlayerTypeRanksArgs>>;
  simpleSummary?: Resolver<Maybe<ResolversTypes['PlayerCardHoverType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['SteamAccountTeamMemberType']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerUpdateAttributeDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerUpdateAttributeDetailType'] = ResolversParentTypes['PlayerUpdateAttributeDetailType']> = {
  agi?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  int?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  str?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerUpdateBattleDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerUpdateBattleDetailType'] = ResolversParentTypes['PlayerUpdateBattleDetailType']> = {
  damageBonus?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  damageMinMax?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hpRegen?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mpRegen?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerUpdateGoldDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerUpdateGoldDetailType'] = ResolversParentTypes['PlayerUpdateGoldDetailType']> = {
  gold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  networth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  networthDifference?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unreliableGold?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerUpdateHealthDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerUpdateHealthDetailType'] = ResolversParentTypes['PlayerUpdateHealthDetailType']> = {
  hp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxHp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxMp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerUpdateLevelDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerUpdateLevelDetailType'] = ResolversParentTypes['PlayerUpdateLevelDetailType']> = {
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerUpdatePositionDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerUpdatePositionDetailType'] = ResolversParentTypes['PlayerUpdatePositionDetailType']> = {
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  x?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusDraftPlayerHeroObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusDraftPlayerHeroObjectType'] = ResolversParentTypes['PlusDraftPlayerHeroObjectType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  letter?: Resolver<Maybe<ResolversTypes['PlusLetterType']>, ParentType, ContextType>;
  pickValue?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  winValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Decimal']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusDraftPlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusDraftPlayerType'] = ResolversParentTypes['PlusDraftPlayerType']> = {
  heroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlusDraftPlayerHeroObjectType']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  positionValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Decimal']>>>, ParentType, ContextType>;
  slot?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusDraftTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusDraftType'] = ResolversParentTypes['PlusDraftType']> = {
  durationValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Decimal']>>>, ParentType, ContextType>;
  midOutcome?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  offOutcome?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlusDraftPlayerType']>>>, ParentType, ContextType>;
  safeOutcome?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  winValues?: Resolver<Maybe<Array<Maybe<ResolversTypes['Decimal']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusHeroTeamStatusAveragesTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusHeroTeamStatusAveragesType'] = ResolversParentTypes['PlusHeroTeamStatusAveragesType']> = {
  cs?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  disableCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  disableDuration?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  healingAllies?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  magicalDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  magicalDamageReceived?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  physicalDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  physicalDamageReceived?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  pureDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  pureDamageReceived?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  purgeModifiers?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  slowCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  slowDuration?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  stunCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  stunDuration?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  towerDamage?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  weakenCount?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  weakenDuration?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusHeroTeamStatusDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusHeroTeamStatusDetailType'] = ResolversParentTypes['PlusHeroTeamStatusDetailType']> = {
  averages?: Resolver<Maybe<ResolversTypes['PlusHeroTeamStatusAveragesType']>, ParentType, ContextType>;
  basicBracket?: Resolver<Maybe<ResolversTypes['RankBracketBasicEnum']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusHoverBanTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusHoverBanType'] = ResolversParentTypes['PlusHoverBanType']> = {
  flags?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusHoverTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusHoverType'] = ResolversParentTypes['PlusHoverType']> = {
  bans?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlusHoverBanType']>>>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlusPlayerHoverType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusPlayerHoverHeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusPlayerHoverHeroType'] = ResolversParentTypes['PlusPlayerHoverHeroType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  lossCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusPlayerHoverPlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusPlayerHoverPlayerType'] = ResolversParentTypes['PlusPlayerHoverPlayerType']> = {
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusPlayerHoverTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusPlayerHoverType'] = ResolversParentTypes['PlusPlayerHoverType']> = {
  activity?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  behaviorScore?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  coreCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  enemies?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlusPlayerHoverPlayerType']>>>, ParentType, ContextType>;
  friends?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlusPlayerHoverPlayerType']>>>, ParentType, ContextType>;
  heroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlusPlayerHoverHeroType']>>>, ParentType, ContextType>;
  heroesExperience?: Resolver<Maybe<Array<Maybe<ResolversTypes['Short']>>>, ParentType, ContextType>;
  imp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  languageCode?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  supportCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlusQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlusQuery'] = ResolversParentTypes['PlusQuery']> = {
  draft?: Resolver<Maybe<ResolversTypes['PlusDraftType']>, ParentType, ContextType, RequireFields<PlusQueryDraftArgs, 'request'>>;
  draftMissingLetter?: Resolver<Maybe<ResolversTypes['PlusLetterType']>, ParentType, ContextType, RequireFields<PlusQueryDraftMissingLetterArgs, 'request'>>;
  playerHeroHighlight?: Resolver<Maybe<ResolversTypes['PlayerDraftHeroHighlightType']>, ParentType, ContextType, RequireFields<PlusQueryPlayerHeroHighlightArgs, 'heroId' | 'steamAccountId'>>;
  playerMatchHistory?: Resolver<Maybe<ResolversTypes['PlusHoverType']>, ParentType, ContextType, RequireFields<PlusQueryPlayerMatchHistoryArgs, 'request'>>;
  teamHeroStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlusHeroTeamStatusDetailType']>>>, ParentType, ContextType, RequireFields<PlusQueryTeamHeroStatusArgs, 'rankBracket'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProPlayerFollowTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProPlayerFollowType'] = ResolversParentTypes['ProPlayerFollowType']> = {
  activity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProSteamAccountTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProSteamAccountType'] = ResolversParentTypes['ProSteamAccountType']> = {
  aliases?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  facebookLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fantasyRole?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  instagramLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isLocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPro?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  realName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  romanizedRealName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  signatureHeroes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  sponsor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statuses?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalEarnings?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  twitchLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitterLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vkLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weiboLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youTubeLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoshCaptainJackIdentityStatDifficultyTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ROSHCaptainJackIdentityStatDifficultyType'] = ResolversParentTypes['ROSHCaptainJackIdentityStatDifficultyType']> = {
  difficulty?: Resolver<Maybe<ResolversTypes['ROSHDifficultyEnum']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoshGlobalStatTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ROSHGlobalStatType'] = ResolversParentTypes['ROSHGlobalStatType']> = {
  difficulty?: Resolver<Maybe<ResolversTypes['ROSHDifficultyEnum']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxScore?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoshMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ROSHMutation'] = ResolversParentTypes['ROSHMutation']> = {
  create?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType, RequireFields<RoshMutationCreateArgs, 'bracket' | 'difficulty' | 'isRadiantFirstPick' | 'isUserRadiant'>>;
  update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RoshMutationUpdateArgs, 'didUserWin' | 'matchId' | 'score'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RabbitDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RabbitDetailType'] = ResolversParentTypes['RabbitDetailType']> = {
  isOnline?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastUpdated?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchDetail?: Resolver<Maybe<ResolversTypes['RabbitQueueDetailType']>, ParentType, ContextType>;
  matchDetailDelay?: Resolver<Maybe<ResolversTypes['RabbitQueueDetailType']>, ParentType, ContextType>;
  matchHistory?: Resolver<Maybe<ResolversTypes['RabbitQueueDetailType']>, ParentType, ContextType>;
  matchLive?: Resolver<Maybe<ResolversTypes['RabbitQueueDetailType']>, ParentType, ContextType>;
  matchStats?: Resolver<Maybe<ResolversTypes['RabbitQueueDetailType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['RabbitQueueDetailType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RabbitQueueDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RabbitQueueDetailType'] = ResolversParentTypes['RabbitQueueDetailType']> = {
  queueCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  queueInRate?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  queueOutRate?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegionType'] = ResolversParentTypes['RegionType']> = {
  clientName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  langKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  leaderboardDivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  matchGroup?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weekendTourneyDivision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoleType'] = ResolversParentTypes['RoleType']> = {
  langKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoshQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoshQuery'] = ResolversParentTypes['RoshQuery']> = {
  stats?: Resolver<Maybe<Array<Maybe<ResolversTypes['ROSHGlobalStatType']>>>, ParentType, ContextType, Partial<RoshQueryStatsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchType'] = ResolversParentTypes['SearchType']> = {
  casters?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountType']>>>, ParentType, ContextType>;
  direTideMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['DireTideCustomGameMatchType']>>>, ParentType, ContextType>;
  guild?: Resolver<Maybe<ResolversTypes['GuildType']>, ParentType, ContextType>;
  leagues?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueType']>>>, ParentType, ContextType>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchType']>>>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountType']>>>, ParentType, ContextType>;
  proPlayers?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountType']>>>, ParentType, ContextType>;
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeriesTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeriesType'] = ResolversParentTypes['SeriesType']> = {
  id?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  league?: Resolver<Maybe<ResolversTypes['LeagueType']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchType']>>>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['LeagueNodeType']>, ParentType, ContextType>;
  teamOne?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamOneId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamOneWinCount?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  teamTwo?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamTwoId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamTwoWinCount?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Series']>, ParentType, ContextType>;
  winningTeamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServerStatusTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServerStatusType'] = ResolversParentTypes['ServerStatusType']> = {
  isRedisOnline?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rabbitDetail?: Resolver<Maybe<ResolversTypes['RabbitDetailType']>, ParentType, ContextType>;
  steamApiDetail?: Resolver<Maybe<ResolversTypes['SteamApiDetailType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ShortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Short'], any> {
  name: 'Short';
}

export type SpiritBearInventoryObjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpiritBearInventoryObjectType'] = ResolversParentTypes['SpiritBearInventoryObjectType']> = {
  itemId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpiritBearInventoryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpiritBearInventoryType'] = ResolversParentTypes['SpiritBearInventoryType']> = {
  backPack0?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  backPack1?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  backPack2?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  item0?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  item1?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  item2?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  item3?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  item4?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  item5?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  neutral0?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  teleport0?: Resolver<Maybe<ResolversTypes['SpiritBearInventoryObjectType']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountBattlePassTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountBattlePassType'] = ResolversParentTypes['SteamAccountBattlePassType']> = {
  eventId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountByRankTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountByRankType'] = ResolversParentTypes['SteamAccountByRankType']> = {
  playerCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountNameTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountNameType'] = ResolversParentTypes['SteamAccountNameType']> = {
  lastSeenDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountSeasonActiveLeaderboardCountryDataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountSeasonActiveLeaderboardCountryDataType'] = ResolversParentTypes['SteamAccountSeasonActiveLeaderboardCountryDataType']> = {
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  playerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountSeasonActiveLeaderboardPositionDataTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountSeasonActiveLeaderboardPositionDataType'] = ResolversParentTypes['SteamAccountSeasonActiveLeaderboardPositionDataType']> = {
  playerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountSeasonActiveLeaderboardRankTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountSeasonActiveLeaderboardRankType'] = ResolversParentTypes['SteamAccountSeasonActiveLeaderboardRankType']> = {
  avgImp?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  divisionId?: Resolver<Maybe<ResolversTypes['LeaderboardDivision']>, ParentType, ContextType>;
  lastUpdateDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  positionValue?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  rankShift?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  topHeroOne?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  topHeroThree?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  topHeroTwo?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  winRate?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountSeasonActiveLeaderboardTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountSeasonActiveLeaderboardType'] = ResolversParentTypes['SteamAccountSeasonActiveLeaderboardType']> = {
  countryData?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountSeasonActiveLeaderboardCountryDataType']>>>, ParentType, ContextType>;
  playerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountSeasonActiveLeaderboardRankType']>>>, ParentType, ContextType, Partial<SteamAccountSeasonActiveLeaderboardTypePlayersArgs>>;
  positionData?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountSeasonActiveLeaderboardPositionDataType']>>>, ParentType, ContextType>;
  teamData?: Resolver<Maybe<Array<Maybe<ResolversTypes['TeamType']>>>, ParentType, ContextType>;
  teamIdData?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountSeasonLeaderBoardRankTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountSeasonLeaderBoardRankType'] = ResolversParentTypes['SteamAccountSeasonLeaderBoardRankType']> = {
  asOfDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  seasonLeaderBoardDivisionId?: Resolver<Maybe<ResolversTypes['LeaderboardDivision']>, ParentType, ContextType>;
  seasonRankId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountSeasonRankTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountSeasonRankType'] = ResolversParentTypes['SteamAccountSeasonRankType']> = {
  asOfDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isCore?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  seasonRankId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountTeamMemberTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountTeamMemberType'] = ResolversParentTypes['SteamAccountTeamMemberType']> = {
  firstMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  firstMatchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  player?: Resolver<Maybe<ResolversTypes['PlayerType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  steamAccountId?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamAccountTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamAccountType'] = ResolversParentTypes['SteamAccountType']> = {
  activity?: Resolver<Maybe<ResolversTypes['PlayerActivitySummaryType']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  battlepass?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountBattlePassType']>>>, ParentType, ContextType>;
  cityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  communityVisibleState?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dotaAccountLevel?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  guild?: Resolver<Maybe<ResolversTypes['GuildMemberType']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  isAnonymous?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isCaster?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDotaPlusSubscriber?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isStratzPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastLogOff?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  lastMatchRegionId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryClanId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  proSteamAccount?: Resolver<Maybe<ResolversTypes['ProSteamAccountType']>, ParentType, ContextType>;
  profileUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rankShift?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  realName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  seasonLeaderboardDivisionId?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  seasonLeaderboardRank?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  seasonRank?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  smurfFlag?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  stateCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeCreated?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamApiDetailOutageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamApiDetailOutageType'] = ResolversParentTypes['SteamApiDetailOutageType']> = {
  dateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  secondsOffline?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SteamApiDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SteamApiDetailType'] = ResolversParentTypes['SteamApiDetailType']> = {
  isOnline?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  outages?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamApiDetailOutageType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StratzQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['StratzQuery'] = ResolversParentTypes['StratzQuery']> = {
  admin?: Resolver<Maybe<ResolversTypes['AdminQuery']>, ParentType, ContextType>;
  blogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogType']>>>, ParentType, ContextType, Partial<StratzQueryBlogsArgs>>;
  languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['LanguageType']>>>, ParentType, ContextType>;
  matchRetry?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<StratzQueryMatchRetryArgs, 'id'>>;
  news?: Resolver<Maybe<Array<Maybe<ResolversTypes['NewsItemType']>>>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['PageQuery']>, ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['SearchType']>, ParentType, ContextType, Partial<StratzQuerySearchArgs>>;
  status?: Resolver<Maybe<ResolversTypes['ServerStatusType']>, ParentType, ContextType>;
  ticker?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserQuery']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StreakEventTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['StreakEventType'] = ResolversParentTypes['StreakEventType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Streak']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Ti2020CustomGameRoomModifierTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TI2020CustomGameRoomModifierType'] = ResolversParentTypes['TI2020CustomGameRoomModifierType']> = {
  deathCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  difficulty?: Resolver<Maybe<ResolversTypes['AghanimLabMatchDifficultyEnum']>, ParentType, ContextType>;
  eliteDeathCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eliteMatchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  eliteWinCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  modifierId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamPrizeTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamPrizeType'] = ResolversParentTypes['TeamPrizeType']> = {
  league?: Resolver<Maybe<ResolversTypes['LeagueType']>, ParentType, ContextType>;
  leagueId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prizeAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  standing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['TeamType']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TeamType'] = ResolversParentTypes['TeamType']> = {
  bannerLogo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseLogo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coachSteamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  coachSteamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroPickBan?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchPickBanGroupByType']>>>, ParentType, ContextType, RequireFields<TeamTypeHeroPickBanArgs, 'request'>>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isLocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPro?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastMatchDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  leagues?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueType']>>>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lossCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchType']>>>, ParentType, ContextType, RequireFields<TeamTypeMatchesArgs, 'request'>>;
  matchesGroupBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchGroupByType']>>>, ParentType, ContextType, RequireFields<TeamTypeMatchesGroupByArgs, 'request'>>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['SteamAccountTeamMemberType']>>>, ParentType, ContextType, Partial<TeamTypeMembersArgs>>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  series?: Resolver<Maybe<Array<Maybe<ResolversTypes['SeriesType']>>>, ParentType, ContextType, RequireFields<TeamTypeSeriesArgs, 'request'>>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  winCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TopPlayersByHeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TopPlayersByHeroType'] = ResolversParentTypes['TopPlayersByHeroType']> = {
  heroId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  players?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlayerLeaderBoardByHeroType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalMatchCountTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalMatchCountType'] = ResolversParentTypes['TotalMatchCountType']> = {
  matchCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TotalPlayerCountTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TotalPlayerCountType'] = ResolversParentTypes['TotalPlayerCountType']> = {
  playerCount?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TowerDamageDetailTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TowerDamageDetailType'] = ResolversParentTypes['TowerDamageDetailType']> = {
  attacker?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byAbility?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  byItem?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  damage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fromNpc?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  npcId?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  time?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TwitchTrackerPlayerHeroTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwitchTrackerPlayerHeroType'] = ResolversParentTypes['TwitchTrackerPlayerHeroType']> = {
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matchCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TwitchTrackerPlayerMatchTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwitchTrackerPlayerMatchType'] = ResolversParentTypes['TwitchTrackerPlayerMatchType']> = {
  assistCount?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  award?: Resolver<Maybe<ResolversTypes['Byte']>, ParentType, ContextType>;
  deathCount?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  endDateTime?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  heroId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isVictory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  killCount?: Resolver<Maybe<ResolversTypes['Short']>, ParentType, ContextType>;
  lane?: Resolver<Maybe<ResolversTypes['MatchLaneType']>, ParentType, ContextType>;
  matchId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MatchPlayerPositionType']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['MatchPlayerRoleType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TwitchTrackerPlayerTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TwitchTrackerPlayerType'] = ResolversParentTypes['TwitchTrackerPlayerType']> = {
  activity?: Resolver<Maybe<ResolversTypes['PlayerBehaviorActivity']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coreCountLast100?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  leaderboardRank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  matchCountLast100?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['TwitchTrackerPlayerMatchType']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proPlayerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  steamAccountId?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType>;
  topHeroLast100?: Resolver<Maybe<Array<Maybe<ResolversTypes['TwitchTrackerPlayerHeroType']>>>, ParentType, ContextType>;
  uniqueHeroLast100?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  winCountLast100?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UShortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UShort'], any> {
  name: 'UShort';
}

export type UserHomepageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserHomepageType'] = ResolversParentTypes['UserHomepageType']> = {
  activeLeagueGames?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomepageHeroSynergyType']>>>, ParentType, ContextType, Partial<UserHomepageTypeActiveLeagueGamesArgs>>;
  blogs?: Resolver<Maybe<Array<Maybe<ResolversTypes['BlogType']>>>, ParentType, ContextType, Partial<UserHomepageTypeBlogsArgs>>;
  inProgressLeagues?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueType']>>>, ParentType, ContextType, Partial<UserHomepageTypeInProgressLeaguesArgs>>;
  leagueMetas?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueMetaType']>>>, ParentType, ContextType, Partial<UserHomepageTypeLeagueMetasArgs>>;
  matchAwards?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomepageHeroSynergyType']>>>, ParentType, ContextType, Partial<UserHomepageTypeMatchAwardsArgs>>;
  recentHighImps?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomepageHeroSynergyType']>>>, ParentType, ContextType, Partial<UserHomepageTypeRecentHighImpsArgs>>;
  recentMatches?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomepageHeroSynergyType']>>>, ParentType, ContextType, Partial<UserHomepageTypeRecentMatchesArgs>>;
  recentRampages?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomepageHeroSynergyType']>>>, ParentType, ContextType, Partial<UserHomepageTypeRecentRampagesArgs>>;
  recentWinStreaks?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomepageHeroSynergyType']>>>, ParentType, ContextType, Partial<UserHomepageTypeRecentWinStreaksArgs>>;
  topLiveGames?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomepageHeroSynergyType']>>>, ParentType, ContextType, Partial<UserHomepageTypeTopLiveGamesArgs>>;
  topPlayersByHeroType?: Resolver<Maybe<Array<Maybe<ResolversTypes['TopPlayersByHeroType']>>>, ParentType, ContextType, Partial<UserHomepageTypeTopPlayersByHeroTypeArgs>>;
  topProPlayers?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProPlayerFollowType']>>>, ParentType, ContextType, Partial<UserHomepageTypeTopProPlayersArgs>>;
  topSynergiesByHero?: Resolver<Maybe<Array<Maybe<ResolversTypes['HomepageHeroSynergyType']>>>, ParentType, ContextType, Partial<UserHomepageTypeTopSynergiesByHeroArgs>>;
  totalComponents?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  upcomingLeagues?: Resolver<Maybe<Array<Maybe<ResolversTypes['LeagueType']>>>, ParentType, ContextType, Partial<UserHomepageTypeUpcomingLeaguesArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserQuery'] = ResolversParentTypes['UserQuery']> = {
  feed?: Resolver<Maybe<ResolversTypes['FeedResponseType']>, ParentType, ContextType, Partial<UserQueryFeedArgs>>;
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['FollowerType']>>>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<Maybe<ResolversTypes['FollowerType']>>>, ParentType, ContextType>;
  homepage?: Resolver<Maybe<ResolversTypes['UserHomepageType']>, ParentType, ContextType, RequireFields<UserQueryHomepageArgs, 'take'>>;
  profile?: Resolver<Maybe<ResolversTypes['UserType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserType'] = ResolversParentTypes['UserType']> = {
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  followingCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  followingLeagueCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  followingTeamCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['CaptainJackIdentityPrivateProfileType']>, ParentType, ContextType>;
  recentMatch?: Resolver<Maybe<ResolversTypes['MatchType']>, ParentType, ContextType>;
  steamAccount?: Resolver<Maybe<ResolversTypes['SteamAccountType']>, ParentType, ContextType>;
  stratzApiApplications?: Resolver<Maybe<Array<Maybe<ResolversTypes['CaptainJackIdentityApiApplicationType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VendorQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['VendorQuery'] = ResolversParentTypes['VendorQuery']> = {
  dotaNext?: Resolver<Maybe<ResolversTypes['DotaNextQuery']>, ParentType, ContextType>;
  twitchTracker?: Resolver<Maybe<ResolversTypes['TwitchTrackerPlayerType']>, ParentType, ContextType, RequireFields<VendorQueryTwitchTrackerArgs, 'steamAccountId'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YogurtMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['YogurtMutation'] = ResolversParentTypes['YogurtMutation']> = {
  addTeamMember?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationAddTeamMemberArgs, 'matchReplayUploadTeamId' | 'steamAccountId'>>;
  createTeam?: Resolver<Maybe<ResolversTypes['MatchReplayUploadTeamType']>, ParentType, ContextType, RequireFields<YogurtMutationCreateTeamArgs, 'emailAddress' | 'matchReplayUploadTeamName' | 'teamId'>>;
  delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationDeleteArgs, 'matchId' | 'matchReplayUploadTeamId'>>;
  importMatch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationImportMatchArgs, 'matchId' | 'matchReplayUploadTeamId'>>;
  importPickBans?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationImportPickBansArgs, 'matchId' | 'matchReplayUploadTeamId' | 'pickBans'>>;
  invalidate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationInvalidateArgs, 'matchId' | 'matchReplayUploadTeamId'>>;
  linkSeriesId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationLinkSeriesIdArgs, 'matchIds' | 'matchReplayUploadTeamId'>>;
  removeSeriesId?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationRemoveSeriesIdArgs, 'matchIds' | 'matchReplayUploadTeamId'>>;
  removeTeamMember?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationRemoveTeamMemberArgs, 'captainJackIdentityId' | 'matchReplayUploadTeamId'>>;
  setTeamMemberDefaultTeam?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationSetTeamMemberDefaultTeamArgs, 'captainJackIdentityId' | 'matchReplayUploadTeamId'>>;
  update?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationUpdateArgs, 'updateMatchReplayUploadObject'>>;
  updateTeam?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationUpdateTeamArgs, 'matchReplayUploadTeamId'>>;
  updateTeamMember?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationUpdateTeamMemberArgs, 'captainJackIdentityId' | 'isAdmin' | 'matchReplayUploadTeamId'>>;
  validate?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<YogurtMutationValidateArgs, 'matchId' | 'matchReplayUploadTeamId'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YogurtQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['YogurtQuery'] = ResolversParentTypes['YogurtQuery']> = {
  defaultTeam?: Resolver<Maybe<ResolversTypes['MatchReplayUploadTeamType']>, ParentType, ContextType>;
  heroSummary?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchReplayUploadHeroSummaryType']>>>, ParentType, ContextType, RequireFields<YogurtQueryHeroSummaryArgs, 'matchReplayUploadTeamId'>>;
  overview?: Resolver<Maybe<ResolversTypes['MatchReplayUploadOverviewType']>, ParentType, ContextType, RequireFields<YogurtQueryOverviewArgs, 'matchReplayUploadTeamId'>>;
  team?: Resolver<Maybe<ResolversTypes['MatchReplayUploadTeamType']>, ParentType, ContextType, RequireFields<YogurtQueryTeamArgs, 'matchReplayUploadTeamId'>>;
  teamMembers?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchReplayUploadTeamMemberType']>>>, ParentType, ContextType, RequireFields<YogurtQueryTeamMembersArgs, 'matchReplayUploadTeamId'>>;
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchReplayUploadTeamType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AbilityActiveListType?: AbilityActiveListTypeResolvers<ContextType>;
  AbilityAttributeType?: AbilityAttributeTypeResolvers<ContextType>;
  AbilityCustomGameLanguageType?: AbilityCustomGameLanguageTypeResolvers<ContextType>;
  AbilityCustomGameType?: AbilityCustomGameTypeResolvers<ContextType>;
  AbilityLanguageType?: AbilityLanguageTypeResolvers<ContextType>;
  AbilityLearnEventsType?: AbilityLearnEventsTypeResolvers<ContextType>;
  AbilityStatType?: AbilityStatTypeResolvers<ContextType>;
  AbilityType?: AbilityTypeResolvers<ContextType>;
  AbilityUsedEventsType?: AbilityUsedEventsTypeResolvers<ContextType>;
  AdminMutation?: AdminMutationResolvers<ContextType>;
  AdminQuery?: AdminQueryResolvers<ContextType>;
  AghanimLabDepthListAscensionAbilitiesObjectType?: AghanimLabDepthListAscensionAbilitiesObjectTypeResolvers<ContextType>;
  AghanimLabHeroAbilityType?: AghanimLabHeroAbilityTypeResolvers<ContextType>;
  AghanimLabHeroCompositionType?: AghanimLabHeroCompositionTypeResolvers<ContextType>;
  AghanimLabHeroWinRateType?: AghanimLabHeroWinRateTypeResolvers<ContextType>;
  AghanimLabMatchDepthListType?: AghanimLabMatchDepthListTypeResolvers<ContextType>;
  AghanimLabMatchType?: AghanimLabMatchTypeResolvers<ContextType>;
  AghanimLabPlayerBlessingObjectType?: AghanimLabPlayerBlessingObjectTypeResolvers<ContextType>;
  AghanimLabPlayerDepthListType?: AghanimLabPlayerDepthListTypeResolvers<ContextType>;
  AghanimLabPlayerSeasonOneType?: AghanimLabPlayerSeasonOneTypeResolvers<ContextType>;
  AghanimLabRoomType?: AghanimLabRoomTypeResolvers<ContextType>;
  AssistDetailType?: AssistDetailTypeResolvers<ContextType>;
  BattlepassPredictionHeroType?: BattlepassPredictionHeroTypeResolvers<ContextType>;
  BattlepassPredictionIdValueType?: BattlepassPredictionIdValueTypeResolvers<ContextType>;
  BattlepassPredictionPlayerType?: BattlepassPredictionPlayerTypeResolvers<ContextType>;
  BattlepassPredictionTeamType?: BattlepassPredictionTeamTypeResolvers<ContextType>;
  BattlepassPredictionTournamentType?: BattlepassPredictionTournamentTypeResolvers<ContextType>;
  BlogType?: BlogTypeResolvers<ContextType>;
  BuyBackDetailType?: BuyBackDetailTypeResolvers<ContextType>;
  Byte?: GraphQLScalarType;
  CaptainJackIdentityApiApplicationType?: CaptainJackIdentityApiApplicationTypeResolvers<ContextType>;
  CaptainJackIdentityPrivateProfileType?: CaptainJackIdentityPrivateProfileTypeResolvers<ContextType>;
  CaptainJackIdentityPublicProfileType?: CaptainJackIdentityPublicProfileTypeResolvers<ContextType>;
  ClusterType?: ClusterTypeResolvers<ContextType>;
  ConstantQuery?: ConstantQueryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeathDetailType?: DeathDetailTypeResolvers<ContextType>;
  Decimal?: GraphQLScalarType;
  DireTideCustomGameHeroWinDayType?: DireTideCustomGameHeroWinDayTypeResolvers<ContextType>;
  DireTideCustomGameMatchType?: DireTideCustomGameMatchTypeResolvers<ContextType>;
  DireTideCustomGamePlayerType?: DireTideCustomGamePlayerTypeResolvers<ContextType>;
  DotaMutation?: DotaMutationResolvers<ContextType>;
  DotaNextQuery?: DotaNextQueryResolvers<ContextType>;
  DotaNextWithAllyType?: DotaNextWithAllyTypeResolvers<ContextType>;
  DotaPlusWeekType?: DotaPlusWeekTypeResolvers<ContextType>;
  DotaQuery?: DotaQueryResolvers<ContextType>;
  DotaSubscription?: DotaSubscriptionResolvers<ContextType>;
  DotaUserMutation?: DotaUserMutationResolvers<ContextType>;
  ExperienceDetailType?: ExperienceDetailTypeResolvers<ContextType>;
  FeatType?: FeatTypeResolvers<ContextType>;
  FeedResponseType?: FeedResponseTypeResolvers<ContextType>;
  FeedType?: FeedTypeResolvers<ContextType>;
  FollowerType?: FollowerTypeResolvers<ContextType>;
  GameModeType?: GameModeTypeResolvers<ContextType>;
  GameVersionType?: GameVersionTypeResolvers<ContextType>;
  GoldDetailType?: GoldDetailTypeResolvers<ContextType>;
  Guid?: GraphQLScalarType;
  GuildMemberType?: GuildMemberTypeResolvers<ContextType>;
  GuildType?: GuildTypeResolvers<ContextType>;
  HealDetailType?: HealDetailTypeResolvers<ContextType>;
  HeroAbilityMaxType?: HeroAbilityMaxTypeResolvers<ContextType>;
  HeroAbilityMinType?: HeroAbilityMinTypeResolvers<ContextType>;
  HeroAbilityTalentType?: HeroAbilityTalentTypeResolvers<ContextType>;
  HeroAbilityType?: HeroAbilityTypeResolvers<ContextType>;
  HeroBanType?: HeroBanTypeResolvers<ContextType>;
  HeroDamageDetailType?: HeroDamageDetailTypeResolvers<ContextType>;
  HeroDotaPlusLeaderboardRankTopType?: HeroDotaPlusLeaderboardRankTopTypeResolvers<ContextType>;
  HeroDotaPlusLeaderboardRankType?: HeroDotaPlusLeaderboardRankTypeResolvers<ContextType>;
  HeroDryadType?: HeroDryadTypeResolvers<ContextType>;
  HeroGuideListType?: HeroGuideListTypeResolvers<ContextType>;
  HeroGuideType?: HeroGuideTypeResolvers<ContextType>;
  HeroItemBootPurchaseType?: HeroItemBootPurchaseTypeResolvers<ContextType>;
  HeroItemPurchaseType?: HeroItemPurchaseTypeResolvers<ContextType>;
  HeroItemStartingPurchaseType?: HeroItemStartingPurchaseTypeResolvers<ContextType>;
  HeroLaneOutcomeType?: HeroLaneOutcomeTypeResolvers<ContextType>;
  HeroLanguageType?: HeroLanguageTypeResolvers<ContextType>;
  HeroMatchupType?: HeroMatchupTypeResolvers<ContextType>;
  HeroNeutralItemType?: HeroNeutralItemTypeResolvers<ContextType>;
  HeroPositionTimeDetailType?: HeroPositionTimeDetailTypeResolvers<ContextType>;
  HeroRampageObjectType?: HeroRampageObjectTypeResolvers<ContextType>;
  HeroRoleType?: HeroRoleTypeResolvers<ContextType>;
  HeroStatType?: HeroStatTypeResolvers<ContextType>;
  HeroStatsHeroDryadType?: HeroStatsHeroDryadTypeResolvers<ContextType>;
  HeroStatsQuery?: HeroStatsQueryResolvers<ContextType>;
  HeroTalentType?: HeroTalentTypeResolvers<ContextType>;
  HeroType?: HeroTypeResolvers<ContextType>;
  HeroWinDayType?: HeroWinDayTypeResolvers<ContextType>;
  HeroWinGameVersionType?: HeroWinGameVersionTypeResolvers<ContextType>;
  HeroWinHourType?: HeroWinHourTypeResolvers<ContextType>;
  HeroWinMonthType?: HeroWinMonthTypeResolvers<ContextType>;
  HeroWinWeekType?: HeroWinWeekTypeResolvers<ContextType>;
  HomepageHeroDryadType?: HomepageHeroDryadTypeResolvers<ContextType>;
  HomepageHeroSynergyType?: HomepageHeroSynergyTypeResolvers<ContextType>;
  ImpGeneratorMatchPlayerType?: ImpGeneratorMatchPlayerTypeResolvers<ContextType>;
  ImpGeneratorPlayerEventType?: ImpGeneratorPlayerEventTypeResolvers<ContextType>;
  ImpGeneratorPlayerType?: ImpGeneratorPlayerTypeResolvers<ContextType>;
  ImpQuery?: ImpQueryResolvers<ContextType>;
  InventoryObjectType?: InventoryObjectTypeResolvers<ContextType>;
  InventoryType?: InventoryTypeResolvers<ContextType>;
  ItemAttributeType?: ItemAttributeTypeResolvers<ContextType>;
  ItemComponentType?: ItemComponentTypeResolvers<ContextType>;
  ItemLanguageType?: ItemLanguageTypeResolvers<ContextType>;
  ItemPurchaseType?: ItemPurchaseTypeResolvers<ContextType>;
  ItemStatType?: ItemStatTypeResolvers<ContextType>;
  ItemType?: ItemTypeResolvers<ContextType>;
  ItemUsedEventType?: ItemUsedEventTypeResolvers<ContextType>;
  KillDetailType?: KillDetailTypeResolvers<ContextType>;
  LanguageType?: LanguageTypeResolvers<ContextType>;
  LastHitDetailType?: LastHitDetailTypeResolvers<ContextType>;
  LeaderboardQuery?: LeaderboardQueryResolvers<ContextType>;
  LeagueBattlePassType?: LeagueBattlePassTypeResolvers<ContextType>;
  LeagueDpcPositionStatObjectType?: LeagueDpcPositionStatObjectTypeResolvers<ContextType>;
  LeagueMetaDetailType?: LeagueMetaDetailTypeResolvers<ContextType>;
  LeagueMetaType?: LeagueMetaTypeResolvers<ContextType>;
  LeagueNodeGroupType?: LeagueNodeGroupTypeResolvers<ContextType>;
  LeagueNodeType?: LeagueNodeTypeResolvers<ContextType>;
  LeaguePrizePoolPercentageType?: LeaguePrizePoolPercentageTypeResolvers<ContextType>;
  LeagueRegisteredPlayerType?: LeagueRegisteredPlayerTypeResolvers<ContextType>;
  LeagueStatType?: LeagueStatTypeResolvers<ContextType>;
  LeagueStreamType?: LeagueStreamTypeResolvers<ContextType>;
  LeagueTableHeroLanesObjectType?: LeagueTableHeroLanesObjectTypeResolvers<ContextType>;
  LeagueTableHeroOverviewType?: LeagueTableHeroOverviewTypeResolvers<ContextType>;
  LeagueTableHeroPlayersObjectType?: LeagueTableHeroPlayersObjectTypeResolvers<ContextType>;
  LeagueTableHeroStatsType?: LeagueTableHeroStatsTypeResolvers<ContextType>;
  LeagueTableHeroType?: LeagueTableHeroTypeResolvers<ContextType>;
  LeagueTablePlayerHeroesObjectType?: LeagueTablePlayerHeroesObjectTypeResolvers<ContextType>;
  LeagueTablePlayerLanesObjectType?: LeagueTablePlayerLanesObjectTypeResolvers<ContextType>;
  LeagueTablePlayerOverviewType?: LeagueTablePlayerOverviewTypeResolvers<ContextType>;
  LeagueTablePlayerStatsType?: LeagueTablePlayerStatsTypeResolvers<ContextType>;
  LeagueTablePlayerType?: LeagueTablePlayerTypeResolvers<ContextType>;
  LeagueTableTeamHeroesObjectType?: LeagueTableTeamHeroesObjectTypeResolvers<ContextType>;
  LeagueTableTeamLanesObjectType?: LeagueTableTeamLanesObjectTypeResolvers<ContextType>;
  LeagueTableTeamOverviewType?: LeagueTableTeamOverviewTypeResolvers<ContextType>;
  LeagueTableTeamStatsType?: LeagueTableTeamStatsTypeResolvers<ContextType>;
  LeagueTableTeamType?: LeagueTableTeamTypeResolvers<ContextType>;
  LeagueTableType?: LeagueTableTypeResolvers<ContextType>;
  LeagueType?: LeagueTypeResolvers<ContextType>;
  LiveEventMatchDireTideStompType?: LiveEventMatchDireTideStompTypeResolvers<ContextType>;
  LiveEventPlayerDireTideCandyScoredType?: LiveEventPlayerDireTideCandyScoredTypeResolvers<ContextType>;
  LiveEventPlayerHeroAssistsType?: LiveEventPlayerHeroAssistsTypeResolvers<ContextType>;
  LiveEventPlayerHeroBuildingDamageType?: LiveEventPlayerHeroBuildingDamageTypeResolvers<ContextType>;
  LiveEventPlayerHeroDewardType?: LiveEventPlayerHeroDewardTypeResolvers<ContextType>;
  LiveEventPlayerHeroDotaPlusLevelType?: LiveEventPlayerHeroDotaPlusLevelTypeResolvers<ContextType>;
  LiveEventPlayerHeroExpPerMinuteType?: LiveEventPlayerHeroExpPerMinuteTypeResolvers<ContextType>;
  LiveEventPlayerHeroGoldPerMinuteType?: LiveEventPlayerHeroGoldPerMinuteTypeResolvers<ContextType>;
  LiveEventPlayerHeroHealingType?: LiveEventPlayerHeroHealingTypeResolvers<ContextType>;
  LiveEventPlayerHeroHeroDamageType?: LiveEventPlayerHeroHeroDamageTypeResolvers<ContextType>;
  LiveEventPlayerHeroHighImpType?: LiveEventPlayerHeroHighImpTypeResolvers<ContextType>;
  LiveEventPlayerHeroItemPurchaseType?: LiveEventPlayerHeroItemPurchaseTypeResolvers<ContextType>;
  LiveEventPlayerHeroKillsType?: LiveEventPlayerHeroKillsTypeResolvers<ContextType>;
  LiveEventPlayerHeroWinStreakType?: LiveEventPlayerHeroWinStreakTypeResolvers<ContextType>;
  LiveEventPlayerRampageType?: LiveEventPlayerRampageTypeResolvers<ContextType>;
  LiveEventPlayerRankUpType?: LiveEventPlayerRankUpTypeResolvers<ContextType>;
  LiveEventPlayerWinStreakType?: LiveEventPlayerWinStreakTypeResolvers<ContextType>;
  LiveEventProPlayerLiveType?: LiveEventProPlayerLiveTypeResolvers<ContextType>;
  LiveEventType?: LiveEventTypeResolvers<ContextType>;
  LiveQuery?: LiveQueryResolvers<ContextType>;
  LobbyTypeType?: LobbyTypeTypeResolvers<ContextType>;
  Long?: GraphQLScalarType;
  MatchGroupByAssistsType?: MatchGroupByAssistsTypeResolvers<ContextType>;
  MatchGroupByAwardType?: MatchGroupByAwardTypeResolvers<ContextType>;
  MatchGroupByClusterType?: MatchGroupByClusterTypeResolvers<ContextType>;
  MatchGroupByDateDayHeroType?: MatchGroupByDateDayHeroTypeResolvers<ContextType>;
  MatchGroupByDateDayType?: MatchGroupByDateDayTypeResolvers<ContextType>;
  MatchGroupByDeathsType?: MatchGroupByDeathsTypeResolvers<ContextType>;
  MatchGroupByDurationMinutesType?: MatchGroupByDurationMinutesTypeResolvers<ContextType>;
  MatchGroupByFactionType?: MatchGroupByFactionTypeResolvers<ContextType>;
  MatchGroupByGameModeType?: MatchGroupByGameModeTypeResolvers<ContextType>;
  MatchGroupByGameVersionType?: MatchGroupByGameVersionTypeResolvers<ContextType>;
  MatchGroupByGoldPerMinuteType?: MatchGroupByGoldPerMinuteTypeResolvers<ContextType>;
  MatchGroupByHeroPerformanceType?: MatchGroupByHeroPerformanceTypeResolvers<ContextType>;
  MatchGroupByHeroType?: MatchGroupByHeroTypeResolvers<ContextType>;
  MatchGroupByHourType?: MatchGroupByHourTypeResolvers<ContextType>;
  MatchGroupByIsIntentionalFeedingType?: MatchGroupByIsIntentionalFeedingTypeResolvers<ContextType>;
  MatchGroupByIsLeagueType?: MatchGroupByIsLeagueTypeResolvers<ContextType>;
  MatchGroupByIsLeaverType?: MatchGroupByIsLeaverTypeResolvers<ContextType>;
  MatchGroupByIsPartyType?: MatchGroupByIsPartyTypeResolvers<ContextType>;
  MatchGroupByIsRandomType?: MatchGroupByIsRandomTypeResolvers<ContextType>;
  MatchGroupByIsSeriesType?: MatchGroupByIsSeriesTypeResolvers<ContextType>;
  MatchGroupByIsStatsType?: MatchGroupByIsStatsTypeResolvers<ContextType>;
  MatchGroupByIsVictoryType?: MatchGroupByIsVictoryTypeResolvers<ContextType>;
  MatchGroupByKillsType?: MatchGroupByKillsTypeResolvers<ContextType>;
  MatchGroupByLaneType?: MatchGroupByLaneTypeResolvers<ContextType>;
  MatchGroupByLeagueIdType?: MatchGroupByLeagueIdTypeResolvers<ContextType>;
  MatchGroupByLevelType?: MatchGroupByLevelTypeResolvers<ContextType>;
  MatchGroupByLobbyTypeType?: MatchGroupByLobbyTypeTypeResolvers<ContextType>;
  MatchGroupByPositionType?: MatchGroupByPositionTypeResolvers<ContextType>;
  MatchGroupByRegionType?: MatchGroupByRegionTypeResolvers<ContextType>;
  MatchGroupByRoamLaneType?: MatchGroupByRoamLaneTypeResolvers<ContextType>;
  MatchGroupByRoleType?: MatchGroupByRoleTypeResolvers<ContextType>;
  MatchGroupBySteamAccountIdAgainstTeamType?: MatchGroupBySteamAccountIdAgainstTeamTypeResolvers<ContextType>;
  MatchGroupBySteamAccountIdHeroIdAgainstTeamType?: MatchGroupBySteamAccountIdHeroIdAgainstTeamTypeResolvers<ContextType>;
  MatchGroupBySteamAccountIdHeroIdType?: MatchGroupBySteamAccountIdHeroIdTypeResolvers<ContextType>;
  MatchGroupBySteamAccountIdHeroIdWithTeamType?: MatchGroupBySteamAccountIdHeroIdWithTeamTypeResolvers<ContextType>;
  MatchGroupBySteamAccountIdType?: MatchGroupBySteamAccountIdTypeResolvers<ContextType>;
  MatchGroupBySteamAccountIdWithTeamType?: MatchGroupBySteamAccountIdWithTeamTypeResolvers<ContextType>;
  MatchGroupByTeamType?: MatchGroupByTeamTypeResolvers<ContextType>;
  MatchGroupByTotalKillsType?: MatchGroupByTotalKillsTypeResolvers<ContextType>;
  MatchGroupByType?: MatchGroupByTypeResolvers<ContextType>;
  MatchLiveBuildingDetailType?: MatchLiveBuildingDetailTypeResolvers<ContextType>;
  MatchLiveInsightType?: MatchLiveInsightTypeResolvers<ContextType>;
  MatchLivePickBanType?: MatchLivePickBanTypeResolvers<ContextType>;
  MatchLivePlaybackDataType?: MatchLivePlaybackDataTypeResolvers<ContextType>;
  MatchLivePlayerAssistDetailType?: MatchLivePlayerAssistDetailTypeResolvers<ContextType>;
  MatchLivePlayerDeathDetailType?: MatchLivePlayerDeathDetailTypeResolvers<ContextType>;
  MatchLivePlayerDenyDetailType?: MatchLivePlayerDenyDetailTypeResolvers<ContextType>;
  MatchLivePlayerExperienceDetailType?: MatchLivePlayerExperienceDetailTypeResolvers<ContextType>;
  MatchLivePlayerGoldDetailType?: MatchLivePlayerGoldDetailTypeResolvers<ContextType>;
  MatchLivePlayerImpDetailType?: MatchLivePlayerImpDetailTypeResolvers<ContextType>;
  MatchLivePlayerInventoryDetailType?: MatchLivePlayerInventoryDetailTypeResolvers<ContextType>;
  MatchLivePlayerKillDetailType?: MatchLivePlayerKillDetailTypeResolvers<ContextType>;
  MatchLivePlayerLastHitDetailType?: MatchLivePlayerLastHitDetailTypeResolvers<ContextType>;
  MatchLivePlayerLevelDetailType?: MatchLivePlayerLevelDetailTypeResolvers<ContextType>;
  MatchLivePlayerPositionDetailType?: MatchLivePlayerPositionDetailTypeResolvers<ContextType>;
  MatchLivePlayerType?: MatchLivePlayerTypeResolvers<ContextType>;
  MatchLiveRoshanDetailType?: MatchLiveRoshanDetailTypeResolvers<ContextType>;
  MatchLiveTeamScoreDetailType?: MatchLiveTeamScoreDetailTypeResolvers<ContextType>;
  MatchLiveType?: MatchLiveTypeResolvers<ContextType>;
  MatchLiveWinRateDetailType?: MatchLiveWinRateDetailTypeResolvers<ContextType>;
  MatchPickBanGroupByType?: MatchPickBanGroupByTypeResolvers<ContextType>;
  MatchPlaybackDataBuildingEventType?: MatchPlaybackDataBuildingEventTypeResolvers<ContextType>;
  MatchPlaybackDataCourierEventType?: MatchPlaybackDataCourierEventTypeResolvers<ContextType>;
  MatchPlaybackDataRoshanEventType?: MatchPlaybackDataRoshanEventTypeResolvers<ContextType>;
  MatchPlaybackDataRuneEventType?: MatchPlaybackDataRuneEventTypeResolvers<ContextType>;
  MatchPlaybackDataTowerDeathEventType?: MatchPlaybackDataTowerDeathEventTypeResolvers<ContextType>;
  MatchPlaybackDataType?: MatchPlaybackDataTypeResolvers<ContextType>;
  MatchPlaybackDataWardEventType?: MatchPlaybackDataWardEventTypeResolvers<ContextType>;
  MatchPlayerAdditionalUnitType?: MatchPlayerAdditionalUnitTypeResolvers<ContextType>;
  MatchPlayerHeroDamageSourceAbilityReportObjectType?: MatchPlayerHeroDamageSourceAbilityReportObjectTypeResolvers<ContextType>;
  MatchPlayerHeroDamageSourceItemReportObjectType?: MatchPlayerHeroDamageSourceItemReportObjectTypeResolvers<ContextType>;
  MatchPlayerHeroDamageTargetReportObjectType?: MatchPlayerHeroDamageTargetReportObjectTypeResolvers<ContextType>;
  MatchPlayerHeroDamageTotalRecievedReportObjectType?: MatchPlayerHeroDamageTotalRecievedReportObjectTypeResolvers<ContextType>;
  MatchPlayerHeroDamageTotalReportObjectType?: MatchPlayerHeroDamageTotalReportObjectTypeResolvers<ContextType>;
  MatchPlayerInventoryObjectType?: MatchPlayerInventoryObjectTypeResolvers<ContextType>;
  MatchPlayerInventoryType?: MatchPlayerInventoryTypeResolvers<ContextType>;
  MatchPlayerItemPurchaseEventType?: MatchPlayerItemPurchaseEventTypeResolvers<ContextType>;
  MatchPlayerLivePlaybackDataType?: MatchPlayerLivePlaybackDataTypeResolvers<ContextType>;
  MatchPlayerPlaybackDataType?: MatchPlayerPlaybackDataTypeResolvers<ContextType>;
  MatchPlayerSpectatorType?: MatchPlayerSpectatorTypeResolvers<ContextType>;
  MatchPlayerSpiritBearInventoryType?: MatchPlayerSpiritBearInventoryTypeResolvers<ContextType>;
  MatchPlayerStatsAbilityCastObjectType?: MatchPlayerStatsAbilityCastObjectTypeResolvers<ContextType>;
  MatchPlayerStatsAbilityCastReportType?: MatchPlayerStatsAbilityCastReportTypeResolvers<ContextType>;
  MatchPlayerStatsActionReportType?: MatchPlayerStatsActionReportTypeResolvers<ContextType>;
  MatchPlayerStatsAllTalkEventType?: MatchPlayerStatsAllTalkEventTypeResolvers<ContextType>;
  MatchPlayerStatsAssistEventType?: MatchPlayerStatsAssistEventTypeResolvers<ContextType>;
  MatchPlayerStatsBuffEventType?: MatchPlayerStatsBuffEventTypeResolvers<ContextType>;
  MatchPlayerStatsChatWheelEventType?: MatchPlayerStatsChatWheelEventTypeResolvers<ContextType>;
  MatchPlayerStatsCourierKillEventType?: MatchPlayerStatsCourierKillEventTypeResolvers<ContextType>;
  MatchPlayerStatsDeathEventType?: MatchPlayerStatsDeathEventTypeResolvers<ContextType>;
  MatchPlayerStatsFarmDistributionObjectType?: MatchPlayerStatsFarmDistributionObjectTypeResolvers<ContextType>;
  MatchPlayerStatsFarmDistributionReportType?: MatchPlayerStatsFarmDistributionReportTypeResolvers<ContextType>;
  MatchPlayerStatsHeroDamageReportType?: MatchPlayerStatsHeroDamageReportTypeResolvers<ContextType>;
  MatchPlayerStatsItemUsedEventType?: MatchPlayerStatsItemUsedEventTypeResolvers<ContextType>;
  MatchPlayerStatsKillEventType?: MatchPlayerStatsKillEventTypeResolvers<ContextType>;
  MatchPlayerStatsLocationReportType?: MatchPlayerStatsLocationReportTypeResolvers<ContextType>;
  MatchPlayerStatsRuneEventType?: MatchPlayerStatsRuneEventTypeResolvers<ContextType>;
  MatchPlayerStatsTowerDamageReportType?: MatchPlayerStatsTowerDamageReportTypeResolvers<ContextType>;
  MatchPlayerStatsType?: MatchPlayerStatsTypeResolvers<ContextType>;
  MatchPlayerStatsWardEventType?: MatchPlayerStatsWardEventTypeResolvers<ContextType>;
  MatchPlayerType?: MatchPlayerTypeResolvers<ContextType>;
  MatchPlayerWardDestuctionObjectType?: MatchPlayerWardDestuctionObjectTypeResolvers<ContextType>;
  MatchReplayUploadHeroDuoSummaryType?: MatchReplayUploadHeroDuoSummaryTypeResolvers<ContextType>;
  MatchReplayUploadHeroSummaryType?: MatchReplayUploadHeroSummaryTypeResolvers<ContextType>;
  MatchReplayUploadMatchType?: MatchReplayUploadMatchTypeResolvers<ContextType>;
  MatchReplayUploadOverviewType?: MatchReplayUploadOverviewTypeResolvers<ContextType>;
  MatchReplayUploadPickBanType?: MatchReplayUploadPickBanTypeResolvers<ContextType>;
  MatchReplayUploadPlayerStatsItemsType?: MatchReplayUploadPlayerStatsItemsTypeResolvers<ContextType>;
  MatchReplayUploadPlayerType?: MatchReplayUploadPlayerTypeResolvers<ContextType>;
  MatchReplayUploadTeamMemberType?: MatchReplayUploadTeamMemberTypeResolvers<ContextType>;
  MatchReplayUploadTeamType?: MatchReplayUploadTeamTypeResolvers<ContextType>;
  MatchStatsChatEventType?: MatchStatsChatEventTypeResolvers<ContextType>;
  MatchStatsLaneReportFactionLaneObject?: MatchStatsLaneReportFactionLaneObjectResolvers<ContextType>;
  MatchStatsLaneReportFactionObjectType?: MatchStatsLaneReportFactionObjectTypeResolvers<ContextType>;
  MatchStatsLaneReportType?: MatchStatsLaneReportTypeResolvers<ContextType>;
  MatchStatsOutpostReportObjectType?: MatchStatsOutpostReportObjectTypeResolvers<ContextType>;
  MatchStatsPickBanType?: MatchStatsPickBanTypeResolvers<ContextType>;
  MatchStatsTowerDeathType?: MatchStatsTowerDeathTypeResolvers<ContextType>;
  MatchStatsTowerReportObjectType?: MatchStatsTowerReportObjectTypeResolvers<ContextType>;
  MatchStatsTowerReportType?: MatchStatsTowerReportTypeResolvers<ContextType>;
  MatchType?: MatchTypeResolvers<ContextType>;
  MatchesDayType?: MatchesDayTypeResolvers<ContextType>;
  MatchesGameVersionType?: MatchesGameVersionTypeResolvers<ContextType>;
  MatchesHourType?: MatchesHourTypeResolvers<ContextType>;
  MatchesMonthType?: MatchesMonthTypeResolvers<ContextType>;
  MatchesWeekType?: MatchesWeekTypeResolvers<ContextType>;
  MatchmakingStatsType?: MatchmakingStatsTypeResolvers<ContextType>;
  MatchplaybackDataCourierEventObjectType?: MatchplaybackDataCourierEventObjectTypeResolvers<ContextType>;
  ModifierType?: ModifierTypeResolvers<ContextType>;
  NewsItemType?: NewsItemTypeResolvers<ContextType>;
  NpcStatType?: NpcStatTypeResolvers<ContextType>;
  NpcType?: NpcTypeResolvers<ContextType>;
  PageAghanimQuery?: PageAghanimQueryResolvers<ContextType>;
  PageBattlepassQuery?: PageBattlepassQueryResolvers<ContextType>;
  PageDireTideQuery?: PageDireTideQueryResolvers<ContextType>;
  PageLeaguesQuery?: PageLeaguesQueryResolvers<ContextType>;
  PageMatchesQuery?: PageMatchesQueryResolvers<ContextType>;
  PagePlayerQuery?: PagePlayerQueryResolvers<ContextType>;
  PagePlayersQuery?: PagePlayersQueryResolvers<ContextType>;
  PageQuery?: PageQueryResolvers<ContextType>;
  PatchNoteLanguageType?: PatchNoteLanguageTypeResolvers<ContextType>;
  PlayerAbilityType?: PlayerAbilityTypeResolvers<ContextType>;
  PlayerActivitySummaryType?: PlayerActivitySummaryTypeResolvers<ContextType>;
  PlayerBadgeType?: PlayerBadgeTypeResolvers<ContextType>;
  PlayerBattlePassGroupByType?: PlayerBattlePassGroupByTypeResolvers<ContextType>;
  PlayerBattlePassResponseType?: PlayerBattlePassResponseTypeResolvers<ContextType>;
  PlayerBattlePassType?: PlayerBattlePassTypeResolvers<ContextType>;
  PlayerBreakdownObjectType?: PlayerBreakdownObjectTypeResolvers<ContextType>;
  PlayerBreakdownType?: PlayerBreakdownTypeResolvers<ContextType>;
  PlayerCardHoverHeroType?: PlayerCardHoverHeroTypeResolvers<ContextType>;
  PlayerCardHoverType?: PlayerCardHoverTypeResolvers<ContextType>;
  PlayerCoachingLeaderboardResponseType?: PlayerCoachingLeaderboardResponseTypeResolvers<ContextType>;
  PlayerCoachingLeaderboardType?: PlayerCoachingLeaderboardTypeResolvers<ContextType>;
  PlayerConductResponseType?: PlayerConductResponseTypeResolvers<ContextType>;
  PlayerDraftHeroHighlightType?: PlayerDraftHeroHighlightTypeResolvers<ContextType>;
  PlayerHeroDotaPlusLeaderboardRankResponseType?: PlayerHeroDotaPlusLeaderboardRankResponseTypeResolvers<ContextType>;
  PlayerHeroPerformanceLongestStreakType?: PlayerHeroPerformanceLongestStreakTypeResolvers<ContextType>;
  PlayerHeroesPerformanceScoreType?: PlayerHeroesPerformanceScoreTypeResolvers<ContextType>;
  PlayerHeroesPerformanceType?: PlayerHeroesPerformanceTypeResolvers<ContextType>;
  PlayerLeaderBoardByHeroType?: PlayerLeaderBoardByHeroTypeResolvers<ContextType>;
  PlayerPerformanceCompositionHeroType?: PlayerPerformanceCompositionHeroTypeResolvers<ContextType>;
  PlayerPerformanceCompositionType?: PlayerPerformanceCompositionTypeResolvers<ContextType>;
  PlayerPerformancePositionObjectType?: PlayerPerformancePositionObjectTypeResolvers<ContextType>;
  PlayerPerformancePositionType?: PlayerPerformancePositionTypeResolvers<ContextType>;
  PlayerPerformanceType?: PlayerPerformanceTypeResolvers<ContextType>;
  PlayerPlayedWithProPlayerMatchType?: PlayerPlayedWithProPlayerMatchTypeResolvers<ContextType>;
  PlayerPlayedWithProPlayerType?: PlayerPlayedWithProPlayerTypeResolvers<ContextType>;
  PlayerPlayedWithProTeamType?: PlayerPlayedWithProTeamTypeResolvers<ContextType>;
  PlayerPlayedWithProType?: PlayerPlayedWithProTypeResolvers<ContextType>;
  PlayerRuneDetailType?: PlayerRuneDetailTypeResolvers<ContextType>;
  PlayerTeammateType?: PlayerTeammateTypeResolvers<ContextType>;
  PlayerType?: PlayerTypeResolvers<ContextType>;
  PlayerUpdateAttributeDetailType?: PlayerUpdateAttributeDetailTypeResolvers<ContextType>;
  PlayerUpdateBattleDetailType?: PlayerUpdateBattleDetailTypeResolvers<ContextType>;
  PlayerUpdateGoldDetailType?: PlayerUpdateGoldDetailTypeResolvers<ContextType>;
  PlayerUpdateHealthDetailType?: PlayerUpdateHealthDetailTypeResolvers<ContextType>;
  PlayerUpdateLevelDetailType?: PlayerUpdateLevelDetailTypeResolvers<ContextType>;
  PlayerUpdatePositionDetailType?: PlayerUpdatePositionDetailTypeResolvers<ContextType>;
  PlusDraftPlayerHeroObjectType?: PlusDraftPlayerHeroObjectTypeResolvers<ContextType>;
  PlusDraftPlayerType?: PlusDraftPlayerTypeResolvers<ContextType>;
  PlusDraftType?: PlusDraftTypeResolvers<ContextType>;
  PlusHeroTeamStatusAveragesType?: PlusHeroTeamStatusAveragesTypeResolvers<ContextType>;
  PlusHeroTeamStatusDetailType?: PlusHeroTeamStatusDetailTypeResolvers<ContextType>;
  PlusHoverBanType?: PlusHoverBanTypeResolvers<ContextType>;
  PlusHoverType?: PlusHoverTypeResolvers<ContextType>;
  PlusPlayerHoverHeroType?: PlusPlayerHoverHeroTypeResolvers<ContextType>;
  PlusPlayerHoverPlayerType?: PlusPlayerHoverPlayerTypeResolvers<ContextType>;
  PlusPlayerHoverType?: PlusPlayerHoverTypeResolvers<ContextType>;
  PlusQuery?: PlusQueryResolvers<ContextType>;
  ProPlayerFollowType?: ProPlayerFollowTypeResolvers<ContextType>;
  ProSteamAccountType?: ProSteamAccountTypeResolvers<ContextType>;
  ROSHCaptainJackIdentityStatDifficultyType?: RoshCaptainJackIdentityStatDifficultyTypeResolvers<ContextType>;
  ROSHGlobalStatType?: RoshGlobalStatTypeResolvers<ContextType>;
  ROSHMutation?: RoshMutationResolvers<ContextType>;
  RabbitDetailType?: RabbitDetailTypeResolvers<ContextType>;
  RabbitQueueDetailType?: RabbitQueueDetailTypeResolvers<ContextType>;
  RegionType?: RegionTypeResolvers<ContextType>;
  RoleType?: RoleTypeResolvers<ContextType>;
  RoshQuery?: RoshQueryResolvers<ContextType>;
  SearchType?: SearchTypeResolvers<ContextType>;
  SeriesType?: SeriesTypeResolvers<ContextType>;
  ServerStatusType?: ServerStatusTypeResolvers<ContextType>;
  Short?: GraphQLScalarType;
  SpiritBearInventoryObjectType?: SpiritBearInventoryObjectTypeResolvers<ContextType>;
  SpiritBearInventoryType?: SpiritBearInventoryTypeResolvers<ContextType>;
  SteamAccountBattlePassType?: SteamAccountBattlePassTypeResolvers<ContextType>;
  SteamAccountByRankType?: SteamAccountByRankTypeResolvers<ContextType>;
  SteamAccountNameType?: SteamAccountNameTypeResolvers<ContextType>;
  SteamAccountSeasonActiveLeaderboardCountryDataType?: SteamAccountSeasonActiveLeaderboardCountryDataTypeResolvers<ContextType>;
  SteamAccountSeasonActiveLeaderboardPositionDataType?: SteamAccountSeasonActiveLeaderboardPositionDataTypeResolvers<ContextType>;
  SteamAccountSeasonActiveLeaderboardRankType?: SteamAccountSeasonActiveLeaderboardRankTypeResolvers<ContextType>;
  SteamAccountSeasonActiveLeaderboardType?: SteamAccountSeasonActiveLeaderboardTypeResolvers<ContextType>;
  SteamAccountSeasonLeaderBoardRankType?: SteamAccountSeasonLeaderBoardRankTypeResolvers<ContextType>;
  SteamAccountSeasonRankType?: SteamAccountSeasonRankTypeResolvers<ContextType>;
  SteamAccountTeamMemberType?: SteamAccountTeamMemberTypeResolvers<ContextType>;
  SteamAccountType?: SteamAccountTypeResolvers<ContextType>;
  SteamApiDetailOutageType?: SteamApiDetailOutageTypeResolvers<ContextType>;
  SteamApiDetailType?: SteamApiDetailTypeResolvers<ContextType>;
  StratzQuery?: StratzQueryResolvers<ContextType>;
  StreakEventType?: StreakEventTypeResolvers<ContextType>;
  TI2020CustomGameRoomModifierType?: Ti2020CustomGameRoomModifierTypeResolvers<ContextType>;
  TeamPrizeType?: TeamPrizeTypeResolvers<ContextType>;
  TeamType?: TeamTypeResolvers<ContextType>;
  TopPlayersByHeroType?: TopPlayersByHeroTypeResolvers<ContextType>;
  TotalMatchCountType?: TotalMatchCountTypeResolvers<ContextType>;
  TotalPlayerCountType?: TotalPlayerCountTypeResolvers<ContextType>;
  TowerDamageDetailType?: TowerDamageDetailTypeResolvers<ContextType>;
  TwitchTrackerPlayerHeroType?: TwitchTrackerPlayerHeroTypeResolvers<ContextType>;
  TwitchTrackerPlayerMatchType?: TwitchTrackerPlayerMatchTypeResolvers<ContextType>;
  TwitchTrackerPlayerType?: TwitchTrackerPlayerTypeResolvers<ContextType>;
  UShort?: GraphQLScalarType;
  UserHomepageType?: UserHomepageTypeResolvers<ContextType>;
  UserQuery?: UserQueryResolvers<ContextType>;
  UserType?: UserTypeResolvers<ContextType>;
  VendorQuery?: VendorQueryResolvers<ContextType>;
  YogurtMutation?: YogurtMutationResolvers<ContextType>;
  YogurtQuery?: YogurtQueryResolvers<ContextType>;
};

