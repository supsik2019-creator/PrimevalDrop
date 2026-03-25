
const STORAGE_KEY = "primeval-drop-state-v3";
const HISTORY_STATS_RESET_VERSION = 1;
const PROFILE_WIPE_VERSION = 1;
const NAV_ITEMS = [
  { id: "home", label: "Главная", icon: "🏕" },
  { id: "cases", label: "Кейсы", icon: "🥚" },
  { id: "roulette", label: "Колесо / Апгрейд", icon: "🎯" },
  { id: "inventory", label: "Инвентарь", icon: "🎒" },
  { id: "profile", label: "Профиль", icon: "🦕" }
];

const MUSIC_TRACKS = [
  { title: "Spotify / Track 01", file: "./assets/music/kai-angel-01.mp3" },
  { title: "Spotify / Track 02", file: "./assets/music/kai-angel-02.mp3" },
  { title: "Spotify / Track 03", file: "./assets/music/kai-angel-03.mp3" }
];

const UI_TEXT = {
  ru: {
    "nav.home": "Главная",
    "nav.cases": "Кейсы",
    "nav.roulette": "Колесо / Апгрейд",
    "nav.inventory": "Инвентарь",
    "nav.profile": "Профиль",
    "page.home": "Главная",
    "page.cases": "Кейсы",
    "page.roulette": "Колесо / Апгрейд",
    "page.inventory": "Инвентарь",
    "page.profile": "Профиль",
    "state.on": "ON",
    "state.off": "OFF",
    "header.sound": "Звук: {state}",
    "header.music": "Музыка: {state}",
    "header.nextTrack": "Следующий трек",
    "header.spotify": "Spotify",
    "profile.identityEyebrow": "Jurassic identity",
    "profile.title": "Профиль динолаба",
    "profile.copy": "Настрой яйцо-аватар, собирай витрину трофеев и держи вечный рекорд под рукой.",
    "profile.record": "Вечный рекорд",
    "profile.balance": "Баланс",
    "profile.activity": "Активность",
    "profile.openEggs": "Открыть яйца",
    "profile.inventory": "Инвентарь",
    "profile.currentAvatar": "Текущий аватар",
    "profile.bestEyebrow": "Best drop forever",
    "profile.noRecord": "Нет рекорда",
    "profile.bestHint": "Первый мощный дроп навсегда закрепится здесь.",
    "profile.recordValue": "Стоимость рекорда",
    "profile.economyEyebrow": "Economy",
    "profile.economyTitle": "Экономика профиля",
    "profile.sales": "Продажи",
    "profile.stored": "Предметов на складе",
    "profile.freeEggs": "Бонусные яйца",
    "profile.freshEyebrow": "Fresh stats",
    "profile.freshTitle": "Статистика после очистки",
    "profile.openedEggs": "Открыто яиц",
    "profile.spins": "Прокруток колеса",
    "profile.upgrades": "Апгрейдов",
    "profile.upgradesWon": "Успешных апгрейдов",
    "profile.trophyEyebrow": "Trophy shelf",
    "profile.trophyTitle": "Лучшие предметы склада",
    "profile.trophyEmpty": "Инвентарь пока пуст. Выбери яйцо и собери первые трофеи.",
    "profile.avatarEyebrow": "Avatar vault",
    "profile.avatarTitle": "Смена аватарки",
    "profile.avatarCopy": "Выбери любое яйцо и поставь его на пьедестал профиля.",
    "profile.languageEyebrow": "Language",
    "profile.languageTitle": "Язык интерфейса",
    "profile.languageCopy": "Переключай язык между русским и английским прямо из профиля.",
    "profile.langRu": "Русский",
    "profile.langEn": "English",
    "profile.historyEyebrow": "Recent activity",
    "profile.historyTitle": "История действий",
    "profile.historyEmpty": "История очищена. Новые действия начнут заполнять ленту заново.",
    "history.case": "Открытие",
    "history.roulette": "Колесо",
    "history.upgrade": "Апгрейд",
    "history.sell": "Продажа",
    "history.bonus": "Бонус"
  },
  en: {
    "nav.home": "Home",
    "nav.cases": "Cases",
    "nav.roulette": "Wheel / Upgrade",
    "nav.inventory": "Inventory",
    "nav.profile": "Profile",
    "page.home": "Home",
    "page.cases": "Cases",
    "page.roulette": "Wheel / Upgrade",
    "page.inventory": "Inventory",
    "page.profile": "Profile",
    "state.on": "ON",
    "state.off": "OFF",
    "header.sound": "Sound: {state}",
    "header.music": "Music: {state}",
    "header.nextTrack": "Next Track",
    "header.spotify": "Spotify",
    "profile.identityEyebrow": "Jurassic identity",
    "profile.title": "Dino lab profile",
    "profile.copy": "Set your egg avatar, build a trophy display, and keep the all-time record close.",
    "profile.record": "Eternal record",
    "profile.balance": "Balance",
    "profile.activity": "Activity",
    "profile.openEggs": "Open eggs",
    "profile.inventory": "Inventory",
    "profile.currentAvatar": "Current avatar",
    "profile.bestEyebrow": "Best drop forever",
    "profile.noRecord": "No record yet",
    "profile.bestHint": "Your first big drop will be pinned here forever.",
    "profile.recordValue": "Record value",
    "profile.economyEyebrow": "Economy",
    "profile.economyTitle": "Profile economy",
    "profile.sales": "Sales",
    "profile.stored": "Stored items",
    "profile.freeEggs": "Bonus eggs",
    "profile.freshEyebrow": "Fresh stats",
    "profile.freshTitle": "Stats after reset",
    "profile.openedEggs": "Eggs opened",
    "profile.spins": "Wheel spins",
    "profile.upgrades": "Upgrades",
    "profile.upgradesWon": "Successful upgrades",
    "profile.trophyEyebrow": "Trophy shelf",
    "profile.trophyTitle": "Best inventory items",
    "profile.trophyEmpty": "Inventory is empty. Pick an egg and build your first trophy shelf.",
    "profile.avatarEyebrow": "Avatar vault",
    "profile.avatarTitle": "Avatar switch",
    "profile.avatarCopy": "Pick any egg and place it on your profile pedestal.",
    "profile.languageEyebrow": "Language",
    "profile.languageTitle": "Interface language",
    "profile.languageCopy": "Switch the UI between Russian and English directly from profile.",
    "profile.langRu": "Russian",
    "profile.langEn": "English",
    "profile.historyEyebrow": "Recent activity",
    "profile.historyTitle": "Activity history",
    "profile.historyEmpty": "History is clean. New actions will start filling the feed again.",
    "history.case": "Case open",
    "history.roulette": "Wheel",
    "history.upgrade": "Upgrade",
    "history.sell": "Sale",
    "history.bonus": "Bonus"
  }
};

const ROULETTE_SPIN_COST = 2;
const FREE_SPIN_COOLDOWN_MS = 10 * 60 * 1000;

const RARITY_META = {
  Common: { color: "#c3d3be", weight: 60 },
  Rare: { color: "#6ec1ff", weight: 25 },
  Epic: { color: "#c15cff", weight: 10 },
  Legendary: { color: "#ffb54a", weight: 5 }
};

const ROULETTE_SEGMENTS = [
  { label: "€0.60", value: 0.6, chance: 22, color: "#6d4a2d" },
  { label: "€1.20", value: 1.2, chance: 19, color: "#3f6b38" },
  { label: "Fern Egg", type: "case", caseId: "fern-hush", chance: 18, color: "#5a7f41" },
  { label: "€1.80", value: 1.8, chance: 14, color: "#9c7a43" },
  { label: "Tar Egg", type: "case", caseId: "tar-shell", chance: 12, color: "#6b4a35" },
  { label: "€2.50", value: 2.5, chance: 8, color: "#5e3f6e" },
  { label: "Amber Egg", type: "case", caseId: "amber-clutch", chance: 5, color: "#879578" },
  { label: "€3.50", value: 3.5, chance: 2, color: "#926239" }
];

const CASES = [
  {
    id: "fern-hush",
    name: "Fern Hush",
    title: "Папоротниковое Яйцо",
    icon: "🌿",
    iconTint: "#84ff88",
    shell: "linear-gradient(180deg, rgba(48,78,40,.92), rgba(33,23,12,.96))",
    price: 2,
    description: "Самое дешёвое яйцо с тихим зелёным пулом. Часто почти без минуса и иногда отдаёт приятный плюс.",
    loot: [
      { name: "Dual Berettas | Shred", collection: "Fracture", rarity: "Common", wear: "Field-Tested", chance: 18, price: 0.65, art: skinArt("dual-berettas-shred") },
      { name: "CZ75-Auto | Pole Position", collection: "Shadow", rarity: "Common", wear: "Factory New", chance: 15, price: 0.84, art: skinArt("cz75-auto-pole-position") },
      { name: "MP9 | Capillary", collection: "Clutch", rarity: "Common", wear: "Minimal Wear", chance: 13, price: 1.05, art: skinArt("mp9-capillary") },
      { name: "Nova | Wild Six", collection: "Clutch", rarity: "Rare", wear: "Field-Tested", chance: 11, price: 1.38, art: skinArt("nova-wild-six") },
      { name: "MAG-7 | Monster Call", collection: "Dreams & Nightmares", rarity: "Rare", wear: "Field-Tested", chance: 10, price: 1.72, art: skinArt("mag-7-monster-call") },
      { name: "Sawed-Off | Kiss Love", collection: "Revolution", rarity: "Rare", wear: "Field-Tested", chance: 9, price: 2.05, art: skinArt("sawed-off-kiss-love") },
      { name: "MP5-SD | Kitbash", collection: "Fracture", rarity: "Rare", wear: "Minimal Wear", chance: 8, price: 2.4, art: skinArt("mp5-sd-kitbash") },
      { name: "P2000 | Lifted Spirits", collection: "Dreams & Nightmares", rarity: "Epic", wear: "Field-Tested", chance: 7, price: 2.95, art: skinArt("p2000-lifted-spirits") },
      { name: "Galil AR | Signal", collection: "Danger Zone", rarity: "Epic", wear: "Minimal Wear", chance: 5, price: 3.6, art: skinArt("galil-ar-signal") },
      { name: "SCAR-20 | Bloodsport", collection: "Spectrum", rarity: "Legendary", wear: "Field-Tested", chance: 3, price: 5.1, art: skinArt("scar-20-bloodsport") },
      { name: "Tec-9 | Decimator", collection: "Spectrum", rarity: "Legendary", wear: "Field-Tested", chance: 1, price: 7.4, art: skinArt("tec-9-decimator") }
    ]
  },
  {
    id: "tar-shell",
    name: "Tar Shell",
    title: "Смоляное Яйцо",
    icon: "🪨",
    iconTint: "#ffc878",
    shell: "linear-gradient(180deg, rgba(80,56,34,.95), rgba(24,18,16,.98))",
    price: 4,
    description: "Тёмное бюджетное яйцо с более жирным верхом. Уже может окупать заметно чаще обычного лоу-тира.",
    loot: [
      { name: "M249 | Downtown", collection: "Train", rarity: "Common", wear: "Factory New", chance: 18, price: 1.1, art: skinArt("m249-downtown") },
      { name: "R8 Revolver | Junk Yard", collection: "Revolver", rarity: "Common", wear: "Factory New", chance: 15, price: 1.45, art: skinArt("r8-revolver-junk-yard") },
      { name: "MP7 | Akoben", collection: "Spectrum 2", rarity: "Common", wear: "Field-Tested", chance: 13, price: 1.95, art: skinArt("mp7-akoben") },
      { name: "SG 553 | Dragon Tech", collection: "Revolution", rarity: "Rare", wear: "Field-Tested", chance: 11, price: 2.5, art: skinArt("sg-553-dragon-tech") },
      { name: "P250 | Supernova", collection: "Arms Deal 2", rarity: "Rare", wear: "Factory New", chance: 10, price: 3.15, art: skinArt("p250-supernova") },
      { name: "UMP-45 | Moonrise", collection: "Clutch", rarity: "Rare", wear: "Minimal Wear", chance: 9, price: 4.1, art: skinArt("ump-45-moonrise") },
      { name: "G3SG1 | Keeping Tabs", collection: "Snakebite", rarity: "Rare", wear: "Field-Tested", chance: 8, price: 4.9, art: skinArt("g3sg1-keeping-tabs") },
      { name: "M4A4 | Magnesium", collection: "Danger Zone", rarity: "Epic", wear: "Minimal Wear", chance: 7, price: 5.8, art: skinArt("m4a4-magnesium") },
      { name: "USP-S | Flashback", collection: "Danger Zone", rarity: "Epic", wear: "Factory New", chance: 5, price: 7.6, art: skinArt("usp-s-flashback") },
      { name: "AK-47 | Elite Build", collection: "Chroma 2", rarity: "Legendary", wear: "Field-Tested", chance: 3, price: 9.9, art: skinArt("ak-47-elite-build") },
      { name: "Desert Eagle | Naga", collection: "Chroma", rarity: "Legendary", wear: "Factory New", chance: 1, price: 13.4, art: skinArt("desert-eagle-naga") }
    ]
  },
  {
    id: "amber-clutch",
    name: "Amber Clutch",
    title: "Яйцо Янтарного Клада",
    icon: "🦖",
    iconTint: "#95ff71",
    shell: "linear-gradient(180deg, rgba(70,90,42,.88), rgba(58,31,15,.94))",
    price: 5,
    description: "Стартовое яйцо уже с реальным плюсом. Здесь чаще выходишь в ноль или выше, чем просто сливаешь баланс.",
    loot: [
      { name: "USP-S | Ticket to Hell", collection: "Dreams & Nightmares", rarity: "Common", wear: "Factory New", chance: 12, price: 1.4, art: skinArt("usp-s-ticket-to-hell") },
      { name: "Glock-18 | Candy Apple", collection: "Militia", rarity: "Common", wear: "Factory New", chance: 11, price: 2.1, art: skinArt("glock-18-candy-apple") },
      { name: "P250 | Visions", collection: "Recoil", rarity: "Common", wear: "Field-Tested", chance: 10, price: 3.0, art: skinArt("p250-visions") },
      { name: "Five-SeveN | Monkey Business", collection: "Chroma 2", rarity: "Rare", wear: "Field-Tested", chance: 10, price: 4.0, art: skinArt("five-seven-monkey-business") },
      { name: "MAC-10 | Disco Tech", collection: "Prisma 2", rarity: "Rare", wear: "Field-Tested", chance: 10, price: 4.8, art: skinArt("mac-10-disco-tech") },
      { name: "FAMAS | Pulse", collection: "eSports 2013", rarity: "Rare", wear: "Factory New", chance: 10, price: 5.7, art: skinArt("famas-pulse") },
      { name: "M4A4 | Griffin", collection: "Chroma 2", rarity: "Rare", wear: "Minimal Wear", chance: 9, price: 6.8, art: skinArt("m4a4-griffin") },
      { name: "AWP | Atheris", collection: "Prisma", rarity: "Epic", wear: "Field-Tested", chance: 9, price: 8.9, art: skinArt("awp-atheris") },
      { name: "AK-47 | Slate", collection: "Snakebite", rarity: "Epic", wear: "Field-Tested", chance: 8, price: 12.4, art: skinArt("ak-47-slate") },
      { name: "M4A1-S | Nightmare", collection: "Horizon", rarity: "Epic", wear: "Field-Tested", chance: 7, price: 18.6, art: skinArt("m4a1-s-nightmare") },
      { name: "AK-47 | The Empress", collection: "Spectrum 2", rarity: "Legendary", wear: "Well-Worn", chance: 4, price: 29.0, art: skinArt("ak-47-the-empress") }
    ]
  },
  {
    id: "raptor-nest",
    name: "Raptor Nest",
    title: "Гнездо Раптора",
    icon: "🦴",
    iconTint: "#f1f3ff",
    shell: "linear-gradient(180deg, rgba(56,76,45,.94), rgba(34,22,16,.95))",
    price: 18,
    description: "Среднее яйцо с более агрессивным профилем: неровные минусы, но без тотально мёртвого низа.",
    loot: [
      { name: "P90 | Grim", collection: "Gamma", rarity: "Common", wear: "Minimal Wear", chance: 15, price: 6.5, art: skinArt("p90-grim") },
      { name: "AUG | Death by Puppy", collection: "Prisma 2", rarity: "Common", wear: "Field-Tested", chance: 13, price: 8.9, art: skinArt("aug-death-by-puppy") },
      { name: "Desert Eagle | Conspiracy", collection: "Breakout", rarity: "Rare", wear: "Factory New", chance: 12, price: 12.2, art: skinArt("desert-eagle-conspiracy") },
      { name: "USP-S | Cortex", collection: "Clutch", rarity: "Rare", wear: "Field-Tested", chance: 11, price: 15.0, art: skinArt("usp-s-cortex") },
      { name: "UMP-45 | Primal Saber", collection: "Chroma 3", rarity: "Rare", wear: "Field-Tested", chance: 10, price: 18.8, art: skinArt("ump-45-primal-saber") },
      { name: "Glock-18 | Vogue", collection: "Fracture", rarity: "Rare", wear: "Field-Tested", chance: 10, price: 22.0, art: skinArt("glock-18-vogue") },
      { name: "MP7 | Bloodsport", collection: "Spectrum", rarity: "Epic", wear: "Minimal Wear", chance: 9, price: 27.0, art: skinArt("mp7-bloodsport") },
      { name: "AWP | Fever Dream", collection: "Spectrum 2", rarity: "Epic", wear: "Field-Tested", chance: 8, price: 34.0, art: skinArt("awp-fever-dream") },
      { name: "M4A1-S | Player Two", collection: "Prisma 2", rarity: "Epic", wear: "Field-Tested", chance: 6, price: 43.0, art: skinArt("m4a1-s-player-two") },
      { name: "FAMAS | Commemoration", collection: "CS20", rarity: "Legendary", wear: "Minimal Wear", chance: 4, price: 63.0, art: skinArt("famas-commemoration") },
      { name: "AK-47 | Neon Rider", collection: "Horizon", rarity: "Legendary", wear: "Field-Tested", chance: 2, price: 87.0, art: skinArt("ak-47-neon-rider") }
    ]
  },
  {
    id: "fossil-lagoon",
    name: "Fossil Lagoon",
    title: "Лагуна Окаменелостей",
    icon: "🌊",
    iconTint: "#5bbcff",
    shell: "linear-gradient(180deg, rgba(44,104,104,.92), rgba(23,40,37,.96))",
    price: 42,
    description: "Холодное морское яйцо: заметный объём mid-tier с нормальным шансом отбиться и редким printstream-апсайдом.",
    loot: [
      { name: "AUG | Arctic Wolf", collection: "Shattered Web", rarity: "Common", wear: "Factory New", chance: 18, price: 12.0, art: skinArt("aug-arctic-wolf") },
      { name: "Galil AR | Crimson Tsunami", collection: "Spectrum 2", rarity: "Common", wear: "Minimal Wear", chance: 14, price: 17.0, art: skinArt("galil-ar-crimson-tsunami") },
      { name: "AWP | Mortis", collection: "Clutch", rarity: "Rare", wear: "Field-Tested", chance: 12, price: 24.0, art: skinArt("awp-mortis") },
      { name: "USP-S | Monster Mashup", collection: "Operation Riptide", rarity: "Rare", wear: "Field-Tested", chance: 11, price: 31.0, art: skinArt("usp-s-monster-mashup") },
      { name: "Five-SeveN | Angry Mob", collection: "Prisma", rarity: "Rare", wear: "Field-Tested", chance: 10, price: 39.0, art: skinArt("five-seven-angry-mob") },
      { name: "Desert Eagle | Printstream", collection: "Fracture", rarity: "Epic", wear: "Field-Tested", chance: 9, price: 46.0, art: skinArt("desert-eagle-printstream") },
      { name: "AK-47 | Head Shot", collection: "Revolution", rarity: "Epic", wear: "Field-Tested", chance: 8, price: 58.0, art: skinArt("ak-47-head-shot") },
      { name: "M4A4 | Temukau", collection: "Revolution", rarity: "Epic", wear: "Field-Tested", chance: 7, price: 72.0, art: skinArt("m4a4-temukau") },
      { name: "M4A4 | In Living Color", collection: "Snakebite", rarity: "Epic", wear: "Field-Tested", chance: 5, price: 91.0, art: skinArt("m4a4-in-living-color") },
      { name: "M4A1-S | Printstream", collection: "Operation Broken Fang", rarity: "Legendary", wear: "Field-Tested", chance: 4, price: 128.0, art: skinArt("m4a1-s-printstream") },
      { name: "Glock-18 | Neo-Noir", collection: "Operation Broken Fang", rarity: "Legendary", wear: "Minimal Wear", chance: 2, price: 176.0, art: skinArt("glock-18-neo-noir") }
    ]
  },
  {
    id: "jungle-crown",
    name: "Jungle Crown",
    title: "Корона Джунглей",
    icon: "👑",
    iconTint: "#ffcd48",
    shell: "linear-gradient(180deg, rgba(96,86,32,.95), rgba(40,34,18,.97))",
    price: 95,
    description: "Премиальное яйцо с плотным премиум-пулом: не про частый плюс, а про дорогие перевороты и мощный верх.",
    loot: [
      { name: "XM1014 | Entombed", collection: "Fracture", rarity: "Common", wear: "Field-Tested", chance: 16, price: 24.0, art: skinArt("xm1014-entombed") },
      { name: "SSG 08 | Dragonfire", collection: "Glove", rarity: "Rare", wear: "Field-Tested", chance: 14, price: 33.0, art: skinArt("ssg-08-dragonfire") },
      { name: "AK-47 | Ice Coaled", collection: "Recoil", rarity: "Rare", wear: "Minimal Wear", chance: 12, price: 47.0, art: skinArt("ak-47-ice-coaled") },
      { name: "M4A1-S | Nightmare", collection: "Horizon", rarity: "Rare", wear: "Minimal Wear", chance: 10, price: 63.0, art: skinArt("m4a1-s-nightmare") },
      { name: "Desert Eagle | Golden Koi", collection: "Winter Offensive", rarity: "Epic", wear: "Factory New", chance: 9, price: 78.0, art: skinArt("desert-eagle-golden-koi") },
      { name: "AWP | Wildfire", collection: "CS20", rarity: "Epic", wear: "Minimal Wear", chance: 8, price: 95.0, art: skinArt("awp-wildfire") },
      { name: "USP-S | The Traitor", collection: "Broken Fang", rarity: "Epic", wear: "Field-Tested", chance: 8, price: 112.0, art: skinArt("usp-s-the-traitor") },
      { name: "M4A4 | In Living Color", collection: "Snakebite", rarity: "Epic", wear: "Minimal Wear", chance: 7, price: 138.0, art: skinArt("m4a4-in-living-color") },
      { name: "M4A1-S | Hyper Beast", collection: "Falchion", rarity: "Legendary", wear: "Field-Tested", chance: 6, price: 176.0, art: skinArt("m4a1-s-hyper-beast") },
      { name: "AWP | Neo-Noir", collection: "Danger Zone", rarity: "Legendary", wear: "Field-Tested", chance: 5, price: 244.0, art: skinArt("awp-neo-noir") },
      { name: "AK-47 | Asiimov", collection: "Danger Zone", rarity: "Legendary", wear: "Battle-Scarred", chance: 5, price: 338.0, art: skinArt("ak-47-asiimov") }
    ]
  },
  {
    id: "meteor-fang",
    name: "Meteor Fang",
    title: "Метеоритный Клык",
    icon: "☄️",
    iconTint: "#ff7b76",
    shell: "linear-gradient(180deg, rgba(91,62,37,.96), rgba(20,18,18,.98))",
    price: 220,
    description: "Люкс-яйцо поздней игры: высокий риск, тяжёлый минусовой низ и очень дорогой верх для сильных окупов.",
    loot: [
      { name: "AK-47 | Legion of Anubis", collection: "Fracture", rarity: "Rare", wear: "Field-Tested", chance: 15, price: 52.0, art: skinArt("ak-47-legion-of-anubis") },
      { name: "Desert Eagle | Printstream", collection: "Fracture", rarity: "Rare", wear: "Minimal Wear", chance: 13, price: 78.0, art: skinArt("desert-eagle-printstream") },
      { name: "M4A1-S | Mecha Industries", collection: "Gamma 2", rarity: "Epic", wear: "Field-Tested", chance: 11, price: 104.0, art: skinArt("m4a1-s-mecha-industries") },
      { name: "AWP | Chromatic Aberration", collection: "Recoil", rarity: "Epic", wear: "Minimal Wear", chance: 10, price: 136.0, art: skinArt("awp-chromatic-aberration") },
      { name: "USP-S | Kill Confirmed", collection: "Shadow", rarity: "Epic", wear: "Field-Tested", chance: 9, price: 178.0, art: skinArt("usp-s-kill-confirmed") },
      { name: "AWP | Neo-Noir", collection: "Danger Zone", rarity: "Epic", wear: "Field-Tested", chance: 9, price: 214.0, art: skinArt("awp-neo-noir") },
      { name: "AK-47 | Bloodsport", collection: "Spectrum", rarity: "Legendary", wear: "Field-Tested", chance: 8, price: 252.0, art: skinArt("ak-47-bloodsport") },
      { name: "Desert Eagle | Code Red", collection: "Horizon", rarity: "Legendary", wear: "Field-Tested", chance: 8, price: 318.0, art: skinArt("desert-eagle-code-red") },
      { name: "AK-47 | Vulcan", collection: "Huntsman", rarity: "Legendary", wear: "Field-Tested", chance: 7, price: 410.0, art: skinArt("ak-47-vulcan") },
      { name: "AK-47 | Fuel Injector", collection: "Operation Wildfire", rarity: "Legendary", wear: "Field-Tested", chance: 5, price: 575.0, art: skinArt("ak-47-fuel-injector") },
      { name: "AWP | Graphite", collection: "Bravo", rarity: "Legendary", wear: "Factory New", chance: 5, price: 860.0, art: skinArt("awp-graphite") }
    ]
  }
];

const DEFAULT_STATE = {
  balance: 260,
  inventory: [],
  history: [],
  freeCaseCredits: {},
  freeSpinReadyAt: 0,
  settings: { soundEnabled: true, musicEnabled: false, musicTrackIndex: 0, musicVolume: 35, language: "ru" },
  stats: { openedCases: 0, rouletteSpins: 0, upgradesAttempted: 0, upgradesWon: 0, totalSold: 0, biggestDrop: 0 },
  bestDropRecord: null,
  profile: { avatarCaseId: "amber-clutch" },
  meta: { historyStatsResetVersion: HISTORY_STATS_RESET_VERSION, profileWipeVersion: PROFILE_WIPE_VERSION },
  activePage: "home",
  selectedCaseId: "fern-hush",
  selectedInventoryId: null,
  selectedUpgradeTarget: null
};

let state = loadState();
let toastTimer = null;
let audioContext = null;
let pendingDropContext = null;
let musicPlayer = null;
let musicErrorShown = false;
let freeSpinTicker = null;
let rouletteSpinActive = false;
persistState();

const pageRoot = document.querySelector("#page-root");
const pageTitle = document.querySelector("#page-title");
const navRoot = document.querySelector("#main-nav");
const balanceValue = document.querySelector("#balance-value");
const inventoryCount = document.querySelector("#inventory-count");
const openedCount = document.querySelector("#opened-count");
const freeCasesCount = document.querySelector("#free-cases-count");
const modal = document.querySelector("#drop-modal");
const modalContent = document.querySelector("#drop-modal-content");
const weaponTemplate = document.querySelector("#weapon-card-template");
const soundToggleButton = document.querySelector("#sound-toggle-button");
const musicToggleButton = document.querySelector("#music-toggle-button");
const musicNextButton = document.querySelector("#music-next-button");
const musicTrackLabel = document.querySelector("#music-track-label");
const musicVolumeSlider = document.querySelector("#music-volume-slider");
const musicVolumeValue = document.querySelector("#music-volume-value");
soundToggleButton.addEventListener("click", () => {
  state.settings.soundEnabled = !state.settings.soundEnabled;
  persistAndRender();
  if (state.settings.soundEnabled) playSound("bonus");
});
musicToggleButton.addEventListener("click", toggleMusic);
musicNextButton.addEventListener("click", () => advanceMusicTrack(false));
musicVolumeSlider?.addEventListener("input", (event) => setMusicVolume(event.target.value));
document.querySelector("#close-drop-modal").addEventListener("click", dismissDropModal);
modal.addEventListener("click", (event) => {
  if (event.target.dataset.closeModal === "true") dismissDropModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) dismissDropModal();
});

initMusicPlayer();
renderApp();

function renderApp() {
  renderNav();
  renderHeader();
  renderPage();
}

function renderNav() {
  navRoot.innerHTML = "";
  NAV_ITEMS.forEach((item) => {
    const button = document.createElement("button");
    button.className = `nav-button${state.activePage === item.id ? " active" : ""}`;
    button.innerHTML = `
      <span class="nav-button__label">
        <span class="nav-button__icon">${item.icon}</span>
        <span>${t(`nav.${item.id}`)}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      state.activePage = item.id;
      persistAndRender();
    });
    navRoot.appendChild(button);
  });
}

function renderHeader() {
  document.documentElement.lang = currentLang();
  const titles = { home: t("page.home"), cases: t("page.cases"), upgrade: t("page.roulette"), roulette: t("page.roulette"), inventory: t("page.inventory"), profile: t("page.profile") };
  pageTitle.textContent = titles[state.activePage];
  balanceValue.textContent = money(state.balance);
  inventoryCount.textContent = String(state.inventory.length);
  openedCount.textContent = String(state.stats.openedCases);
  freeCasesCount.textContent = String(totalFreeCases());
  soundToggleButton.textContent = t("header.sound", { state: t(state.settings.soundEnabled ? "state.on" : "state.off") });
  syncMusicUi();
}

function renderPage() {
  const renderers = { home: renderHomePage, cases: renderCasesPage, upgrade: renderRoulettePage, roulette: renderRoulettePage, inventory: renderInventoryPage, profile: renderProfilePage };
  pageRoot.innerHTML = "";
  stopFreeSpinTicker();
  renderers[state.activePage]();
}

function renderHomePage() {
  const bestDrop = getLifetimeBestDrop();
  pageRoot.innerHTML = `
    <section class="hero-grid">
      <article class="hero-card">
        <p class="eyebrow">Cretaceous jackpot</p>
        <h3>Открывай яйца, выбивай CS2-скины и крути доисторическое колесо удачи.</h3>
        <p>Primeval Drop объединяет кейсы, рулетку, апгрейд и склад инвентаря в одном статическом прототипе. Теперь бонусные яйца действительно выдаются бесплатно, а звуки можно включать и выключать без внешних файлов.</p>
        <div class="hero-actions">
          <button class="action-button primary" data-go-page="cases">Открыть кейс</button>
          <button class="action-button secondary" data-go-page="roulette">Крутить колесо</button>
        </div>
        <div class="hero-eggs">${CASES.slice(0, 5).map((item) => `
          <div class="egg-token" style="background:${item.shell}">
            <em class="egg-shell__icon egg-shell__icon--case" style="color:${item.iconTint}">${item.icon}</em>
            <div class="egg-display egg-display--mini">
              <div class="egg-display__glow" style="--glow:${item.iconTint}"></div>
              <div class="egg-display__character" style="--accent:${item.iconTint}">
                <span>${item.icon}</span>
              </div>
              <div class="egg-display__shell egg-display__shell--top"></div>
              <div class="egg-display__shell egg-display__shell--bottom"></div>
              <div class="egg-display__foliage"></div>
              <div class="egg-display__pedestal"></div>
            </div>
            <span>${item.name}</span>
          </div>
        `).join("")}</div>
      </article>
      <article class="hero-card">
        <p class="eyebrow">Live expedition</p>
        <h3>Охота за лучшим дропом</h3>
        <div class="profile-line"><span>Текущий баланс</span><strong>${money(state.balance)}</strong></div>
        <div class="profile-line"><span>Предметов в инвентаре</span><strong>${state.inventory.length}</strong></div>
        <div class="profile-line"><span>Бонусные яйца</span><strong>${totalFreeCases()}</strong></div>
        <div class="profile-line"><span>Лучшая находка</span><strong>${bestDrop ? bestDrop.name : "Пока пусто"}</strong></div>
        <div class="profile-line"><span>Вечный рекорд</span><strong>${bestDrop ? money(bestDrop.price) : "€0.00"}</strong></div>
      </article>
    </section>
    <section class="stats-grid">
      <article><p class="eyebrow">Cases</p><strong>${state.stats.openedCases}</strong><span class="muted">Разбитых яиц</span></article>
      <article><p class="eyebrow">Roulette</p><strong>${state.stats.rouletteSpins}</strong><span class="muted">Прокруток колеса</span></article>
      <article><p class="eyebrow">Upgrade</p><strong>${state.stats.upgradesWon}</strong><span class="muted">Успешных апгрейдов</span></article>
    </section>
    <section>
      <div class="section-title"><div><p class="eyebrow">Featured nests</p><h3>Яйца сезона</h3></div></div>
      <div class="case-grid">${CASES.map(renderCaseCardMarkup).join("")}</div>
    </section>
    <section>
      <div class="section-title"><div><p class="eyebrow">Armory preview</p><h3>Последние находки</h3></div></div>
      <div class="inventory-grid">${state.inventory.length ? state.inventory.slice(0, 4).map(renderInventoryCardMarkup).join("") : `<div class="empty-state">Инвентарь пока пуст. Открой первое яйцо или попробуй рулетку.</div>`}</div>
    </section>
  `;
  bindCommonActions();
  bindInventoryActions();
}

function renderCasesPage() {
  const selectedCase = getSelectedCase();
  const freeCount = getFreeCaseCount(selectedCase.id);
  const singleQuote = getCaseOpenQuote(selectedCase.id, 1);
  const tripleQuote = getCaseOpenQuote(selectedCase.id, 3);
  const fiveQuote = getCaseOpenQuote(selectedCase.id, 5);
  const lootByChance = [...selectedCase.loot].sort((a, b) => b.chance - a.chance);
  pageRoot.innerHTML = `
    <section class="cases-layout">
      <div class="panel" style="padding: 20px; border-radius: 28px;">
        <div class="section-title"><div><p class="eyebrow">Nest selection</p><h3>Доступные яйца</h3></div></div>
        <div class="case-grid">${CASES.map(renderCaseCardMarkup).join("")}</div>
      </div>
      <aside class="case-detail">
        <div class="case-detail__header">
          <p class="eyebrow">${selectedCase.name}</p>
          <h3>${selectedCase.icon} ${selectedCase.title}</h3>
          <p>${selectedCase.description}</p>
        </div>
        <div class="case-egg case-egg--featured" style="background:${selectedCase.shell}">
          <em class="egg-shell__icon egg-shell__icon--case" style="color:${selectedCase.iconTint}">${selectedCase.icon}</em>
          <div class="egg-display egg-display--featured">
            <div class="egg-display__glow" style="--glow:${selectedCase.iconTint}"></div>
            <div class="egg-display__character" style="--accent:${selectedCase.iconTint}"><span>${selectedCase.icon}</span></div>
            <div class="egg-display__shell egg-display__shell--top"></div>
            <div class="egg-display__shell egg-display__shell--bottom"></div>
            <div class="egg-display__foliage"></div>
            <div class="egg-display__pedestal"></div>
          </div>
          <div class="crack-lines"></div>
        </div>
        <div class="stack-row" style="margin: 18px 0 8px;"><strong class="case-price">${freeCount ? "Есть бонусы" : money(selectedCase.price)}</strong><span class="muted">${freeCount ? `Бонусов: ${freeCount}` : `Цена за 1: ${money(selectedCase.price)}`}</span></div>
        <div class="case-actions case-actions--multi">
          <button class="action-button primary" data-open-case="${selectedCase.id}" data-open-count="1" ${singleQuote.canOpen ? "" : "disabled"}>${formatCaseOpenButton(singleQuote)}</button>
          <button class="action-button" data-open-case="${selectedCase.id}" data-open-count="3" ${tripleQuote.canOpen ? "" : "disabled"}>${formatCaseOpenButton(tripleQuote)}</button>
          <button class="action-button secondary" data-open-case="${selectedCase.id}" data-open-count="5" ${fiveQuote.canOpen ? "" : "disabled"}>${formatCaseOpenButton(fiveQuote)}</button>
        </div>
        <div class="case-actions" style="margin-top:12px;">
          <button class="action-button secondary" data-go-page="inventory">Смотреть склад</button>
        </div>
        <div class="empty-state">Содержимое яйца скрыто. Редкость и цена откроются только после реального выпадения.</div>
      </aside>
    </section>
    <section class="panel" style="padding: 20px; border-radius: 28px;">
      <div class="section-title"><div><p class="eyebrow">Case loot</p><h3>11 скрытых предметов</h3></div></div>
      <div class="weapon-grid" id="case-loot-grid"></div>
    </section>
  `;
  const lootGrid = document.querySelector("#case-loot-grid");
  selectedCase.loot.forEach((item) => lootGrid.appendChild(createWeaponCard(item)));
  bindCommonActions();
}
function renderRoulettePage() {
  const selectedItem = state.inventory.find((item) => item.id === state.selectedInventoryId) || null;
  const targets = getUpgradeTargets(selectedItem);
  const selectedTarget = targets.find((item) => item.uid === state.selectedUpgradeTarget) || targets[0] || null;
  const chance = selectedItem && selectedTarget ? calcUpgradeChance(selectedItem.price, selectedTarget.price) : 0;
  const spinDisabled = state.balance < ROULETTE_SPIN_COST;
  pageRoot.innerHTML = `
    <section class="wheel-lab-layout">
      <article class="roulette-panel roulette-panel--stage">
        <p class="eyebrow">Jurassic roulette</p>
        <h3>🎯 Колесо динолаборатории</h3>
        <div class="dino-wheel-stage">
          <div class="roulette-guardian" aria-hidden="true">
            <span class="roulette-guardian__glow"></span>
            <span class="roulette-guardian__head">🦖</span>
            <span class="roulette-guardian__claw roulette-guardian__claw--left"></span>
            <span class="roulette-guardian__claw roulette-guardian__claw--right"></span>
          </div>
          <div class="roulette-pointer"></div>
          <div class="roulette-wheel" id="roulette-wheel" style="background:${buildRouletteGradient()}"></div>
        </div>
        <div class="quick-actions quick-actions--wheel">
          <button class="action-button primary" id="spin-roulette-button" ${spinDisabled ? "disabled" : ""}>Крутить за ${money(ROULETTE_SPIN_COST)}</button>
          <button class="action-button secondary" id="free-spin-button" ${canUseFreeSpin() ? "" : "disabled"}>Бесплатный спин</button>
        </div>
        <div class="roulette-hint" id="free-spin-note"></div>
      </article>
      <article class="roulette-panel">
        <p class="eyebrow">Wheel prizes</p>
        <h3>🪙 Сектора и награды</h3>
        <div class="roulette-legend">${ROULETTE_SEGMENTS.map(renderRouletteSegmentMarkup).join("")}</div>
        <div class="roulette-result" id="roulette-result" style="margin-top:18px;"><p>Обычное колесо стоит ${money(ROULETTE_SPIN_COST)}. Если баланс ниже этой суммы, открывается бесплатный аварийный спин раз в 10 минут.</p></div>
      </article>
    </section>
    <section class="upgrade-lab-layout">
      <article class="upgrade-panel">
        <div class="section-title"><div><p class="eyebrow">Source item</p><h3>Выбери предмет для апгрейда</h3></div></div>
        <div class="upgrade-selector">${state.inventory.length ? state.inventory.map((item) => renderUpgradeInventoryMarkup(item, item.id === state.selectedInventoryId)).join("") : `<div class="empty-state">Для апгрейда нужен хотя бы один предмет из инвентаря.</div>`}</div>
      </article>
      <article class="upgrade-panel">
        <div class="section-title"><div><p class="eyebrow">Target pool</p><h3>⚗️ Куда апгрейдить</h3></div></div>
        <div class="upgrade-targets">${selectedItem ? (targets.length ? targets.map(renderUpgradeTargetMarkup).join("") : `<div class="empty-state">Для этого предмета нет целей дороже.</div>`) : `<div class="empty-state">Сначала выбери исходный предмет.</div>`}</div>
      </article>
      <article class="upgrade-panel upgrade-panel--wheel">
        <p class="eyebrow">Mutation wheel</p>
        <h3>🧬 Колесо апгрейда</h3>
        ${selectedItem ? `
          <div class="upgrade-comparison">
            ${renderUpgradeSummaryMarkup(selectedItem, "Исходник")}
            ${selectedTarget ? `<span class="upgrade-comparison__arrow">→</span>${renderUpgradeSummaryMarkup(selectedTarget, "Цель")}` : ""}
          </div>
          <div class="profile-line"><span>Его стоимость</span><strong>${money(selectedItem.price)}</strong></div>
          ${selectedTarget ? `
            <div class="profile-line"><span>Новая стоимость</span><strong>${money(selectedTarget.price)}</strong></div>
            <div class="chance-bar"><span style="width:${chance}%"></span></div>
            <div class="upgrade-result"><span>Риск апгрейда</span><strong>${upgradeRiskLabel(chance)}</strong></div>
            <div class="upgrade-wheel-stage">
              <div class="upgrade-pointer"></div>
              <div class="upgrade-wheel" id="upgrade-wheel" style="background:${buildUpgradeWheelGradient(chance)}"></div>
              <div class="upgrade-wheel__center"><strong>${upgradeRiskLabel(chance)}</strong><span>upgrade</span></div>
            </div>
            <div class="roulette-result" id="upgrade-wheel-result"><p>Запусти колесо, и стрелка решит, превращается ли ${selectedItem.name} в ${selectedTarget.name}.</p></div>
            <div class="upgrade-actions" style="margin-top:16px;"><button class="action-button primary" id="run-upgrade-button">Крутить апгрейд</button></div>
          ` : `<div class="empty-state">Нет доступных целей дороже выбранного предмета.</div>`}
        ` : `<div class="empty-state">Выбери предмет слева, чтобы открыть колесо апгрейда.</div>`}
      </article>
    </section>
  `;
  document.querySelector("#spin-roulette-button")?.addEventListener("click", () => spinRoulette(false));
  document.querySelector("#free-spin-button")?.addEventListener("click", () => spinRoulette(true));
  document.querySelectorAll("[data-upgrade-source]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedInventoryId = button.dataset.upgradeSource;
      state.selectedUpgradeTarget = null;
      persistAndRender();
    });
  });
  document.querySelectorAll("[data-upgrade-target]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedUpgradeTarget = button.dataset.upgradeTarget;
      persistAndRender();
    });
  });
  const upgradeButton = document.querySelector("#run-upgrade-button");
  if (upgradeButton && selectedItem && selectedTarget) upgradeButton.addEventListener("click", () => runUpgrade(selectedItem, selectedTarget, chance));
  startFreeSpinTicker();
}

function renderUpgradePage() {
  renderRoulettePage();
}

function renderInventoryPage() {
  pageRoot.innerHTML = `
    <section class="panel" style="padding: 20px; border-radius: 28px;">
      <div class="section-title">
        <div><p class="eyebrow">Storage vault</p><h3>🎒 Инвентарь</h3><p>Здесь хранятся все выпавшие предметы. Их можно продать или использовать в апгрейде.</p></div>
        ${state.inventory.length ? `<button class="action-button" data-sell-all>Продать всё за ${money(sumInventoryValue())}</button>` : ""}
      </div>
      <div class="inventory-grid">${state.inventory.length ? state.inventory.map(renderInventoryCardMarkup).join("") : `<div class="empty-state">Инвентарь пуст. Самое время разбить пару яиц.</div>`}</div>
    </section>
  `;
  bindInventoryActions();
}

function renderProfilePage() {
  const recentHistory = state.history.slice(0, 8);
  const bestDrop = getLifetimeBestDrop();
  const avatarCase = getProfileAvatarCase();
  const topInventory = [...state.inventory].sort((a, b) => b.price - a.price).slice(0, 3);
  const activityCount = state.stats.openedCases + state.stats.rouletteSpins + state.stats.upgradesAttempted;
  pageRoot.innerHTML = `
    <section class="profile-layout profile-layout--enhanced">
      <div class="profile-main">
        <article class="panel profile-hero-panel">
          <div class="profile-hero-copy">
            <p class="eyebrow">${t("profile.identityEyebrow")}</p>
            <h3>${avatarCase.icon} ${t("profile.title")}</h3>
            <p>${t("profile.copy")}</p>
            <div class="profile-ribbon-row">
              <div class="profile-ribbon"><span>${t("profile.record")}</span><strong>${bestDrop ? money(bestDrop.price) : "€0.00"}</strong></div>
              <div class="profile-ribbon"><span>${t("profile.balance")}</span><strong>${money(state.balance)}</strong></div>
              <div class="profile-ribbon"><span>${t("profile.activity")}</span><strong>${activityCount}</strong></div>
            </div>
            <div class="hero-actions">
              <button class="action-button primary" data-go-page="cases">${t("profile.openEggs")}</button>
              <button class="action-button secondary" data-go-page="inventory">${t("profile.inventory")}</button>
            </div>
          </div>
          <div class="profile-hero-stage">
            <span class="profile-hero-stage__glow" style="--accent:${avatarCase.iconTint}"></span>
            <div class="case-egg case-egg--profile" style="background:${avatarCase.shell}">
              <em class="egg-shell__icon egg-shell__icon--case" style="color:${avatarCase.iconTint}">${avatarCase.icon}</em>
              <div class="egg-display egg-display--featured">
                <div class="egg-display__glow" style="--glow:${avatarCase.iconTint}"></div>
                <div class="egg-display__character" style="--accent:${avatarCase.iconTint}"><span>${avatarCase.icon}</span></div>
                <div class="egg-display__shell egg-display__shell--top"></div>
                <div class="egg-display__shell egg-display__shell--bottom"></div>
                <div class="egg-display__foliage"></div>
                <div class="egg-display__pedestal"></div>
              </div>
              <div class="crack-lines"></div>
            </div>
            <div class="profile-stage-plate">
              <strong>${avatarCase.title}</strong>
              <span>${t("profile.currentAvatar")}</span>
            </div>
          </div>
        </article>

        <div class="profile-stats profile-stats--enhanced">
          <article class="profile-badge profile-record-card">
            <p class="eyebrow">${t("profile.bestEyebrow")}</p>
            <h3>${bestDrop ? bestDrop.name : t("profile.noRecord")}</h3>
            <p>${bestDrop ? `${bestDrop.rarity} • ${bestDrop.collection}` : t("profile.bestHint")}</p>
            <div class="profile-record-card__media">
              ${bestDrop ? `<div class="profile-record-card__art" style="background-image:url('${bestDrop.art}')"></div>` : `<div class="empty-state">${t("profile.bestHint")}</div>`}
            </div>
            <div class="profile-line"><span>${t("profile.recordValue")}</span><strong>${bestDrop ? money(bestDrop.price) : "€0.00"}</strong></div>
          </article>

          <article class="profile-badge">
            <p class="eyebrow">${t("profile.economyEyebrow")}</p>
            <h3>${t("profile.economyTitle")}</h3>
            <div class="profile-line"><span>${t("profile.balance")}</span><strong>${money(state.balance)}</strong></div>
            <div class="profile-line"><span>${t("profile.sales")}</span><strong>${money(state.stats.totalSold)}</strong></div>
            <div class="profile-line"><span>${t("profile.stored")}</span><strong>${state.inventory.length}</strong></div>
            <div class="profile-line"><span>${t("profile.freeEggs")}</span><strong>${totalFreeCases()}</strong></div>
          </article>

          <article class="profile-badge">
            <p class="eyebrow">${t("profile.freshEyebrow")}</p>
            <h3>${t("profile.freshTitle")}</h3>
            <div class="profile-line"><span>${t("profile.openedEggs")}</span><strong>${state.stats.openedCases}</strong></div>
            <div class="profile-line"><span>${t("profile.spins")}</span><strong>${state.stats.rouletteSpins}</strong></div>
            <div class="profile-line"><span>${t("profile.upgrades")}</span><strong>${state.stats.upgradesAttempted}</strong></div>
            <div class="profile-line"><span>${t("profile.upgradesWon")}</span><strong>${state.stats.upgradesWon}</strong></div>
          </article>

          <article class="profile-badge profile-trophy-card">
            <p class="eyebrow">${t("profile.trophyEyebrow")}</p>
            <h3>${t("profile.trophyTitle")}</h3>
            <div class="profile-shelf">
              ${topInventory.length ? topInventory.map((item) => `
                <article class="profile-shelf-item">
                  <div class="profile-shelf-item__art" style="background-image:url('${item.art}')"></div>
                  <strong>${item.name}</strong>
                  <span>${money(item.price)}</span>
                </article>
              `).join("") : `<div class="empty-state">${t("profile.trophyEmpty")}</div>`}
            </div>
          </article>
        </div>
      </div>

      <aside class="profile-side">
        <article class="profile-badge profile-avatar-vault">
          <p class="eyebrow">${t("profile.avatarEyebrow")}</p>
          <h3>${t("profile.avatarTitle")}</h3>
          <p>${t("profile.avatarCopy")}</p>
          <div class="avatar-picker">
            ${CASES.map((item) => `
              <button class="avatar-chip${state.profile.avatarCaseId === item.id ? " active" : ""}" data-avatar-case="${item.id}">
                <span class="avatar-chip__egg" style="--shell:${item.shell}; --accent:${item.iconTint}">
                  <span>${item.icon}</span>
                </span>
                <strong>${item.name}</strong>
              </button>
            `).join("")}
          </div>
        </article>

        <article class="profile-badge profile-language-card">
          <p class="eyebrow">${t("profile.languageEyebrow")}</p>
          <h3>${t("profile.languageTitle")}</h3>
          <p>${t("profile.languageCopy")}</p>
          <div class="language-switcher">
            <button class="language-chip${currentLang() === "ru" ? " active" : ""}" data-language="ru">${t("profile.langRu")}</button>
            <button class="language-chip${currentLang() === "en" ? " active" : ""}" data-language="en">${t("profile.langEn")}</button>
          </div>
        </article>

        <article class="profile-badge profile-history-card">
          <p class="eyebrow">${t("profile.historyEyebrow")}</p>
          <h3>${t("profile.historyTitle")}</h3>
          <div class="history-list">
            ${recentHistory.length ? recentHistory.map((event) => `
              <article>
                <p class="eyebrow">${formatHistoryType(event.type)}</p>
                <strong>${event.title}</strong>
                <p style="margin-top:8px;">${event.timestamp}</p>
              </article>
            `).join("") : `<div class="empty-state">${t("profile.historyEmpty")}</div>`}
          </div>
        </article>
      </aside>
    </section>
  `;
  bindCommonActions();
  bindProfileActions();
}

function bindCommonActions() {
  document.querySelectorAll("[data-go-page]").forEach((button) => {
    button.addEventListener("click", () => { state.activePage = button.dataset.goPage; persistAndRender(); });
  });
  document.querySelectorAll("[data-open-case]").forEach((button) => {
    button.addEventListener("click", () => openCase(button.dataset.openCase, Number(button.dataset.openCount || 1)));
  });
  document.querySelectorAll("[data-select-case]").forEach((button) => {
    button.addEventListener("click", () => { state.selectedCaseId = button.dataset.selectCase; state.activePage = "cases"; persistAndRender(); });
  });
}

function bindInventoryActions() {
  document.querySelectorAll("[data-sell-item]").forEach((button) => {
    button.addEventListener("click", () => sellItem(button.dataset.sellItem));
  });
  document.querySelectorAll("[data-use-upgrade]").forEach((button) => {
    button.addEventListener("click", () => { state.selectedInventoryId = button.dataset.useUpgrade; state.activePage = "roulette"; persistAndRender(); });
  });
  document.querySelectorAll("[data-sell-all]").forEach((button) => {
    button.addEventListener("click", sellAllItems);
  });
}

function bindProfileActions() {
  document.querySelectorAll("[data-avatar-case]").forEach((button) => {
    button.addEventListener("click", () => {
      state.profile.avatarCaseId = button.dataset.avatarCase;
      persistAndRender();
    });
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      state.settings.language = button.dataset.language;
      persistAndRender();
    });
  });
}
function renderCaseCardMarkup(item) {
  const legendary = [...item.loot].sort((a, b) => b.price - a.price)[0];
  const freeCount = getFreeCaseCount(item.id);
  const singleQuote = getCaseOpenQuote(item.id, 1);
  const tripleQuote = getCaseOpenQuote(item.id, 3);
  return `
    <article class="case-card">
      <div class="case-egg case-egg--card" style="background:${item.shell}">
        <em class="egg-shell__icon egg-shell__icon--case" style="color:${item.iconTint}">${item.icon}</em>
        <div class="egg-display egg-display--card">
          <div class="egg-display__glow" style="--glow:${item.iconTint}"></div>
          <div class="egg-display__character" style="--accent:${item.iconTint}">
            <span>${item.icon}</span>
          </div>
          <div class="egg-display__shell egg-display__shell--top"></div>
          <div class="egg-display__shell egg-display__shell--bottom"></div>
          <div class="egg-display__foliage"></div>
          <div class="egg-display__pedestal"></div>
        </div>
        <div class="crack-lines"></div>
        <div class="case-card__headline">
          <strong>${item.name}</strong>
        </div>
      </div>
      <p class="eyebrow">${item.name}</p>
      <h3>${item.title}</h3>
      <p class="muted">${item.description}</p>
      <div class="profile-line" style="margin: 14px 0;"><strong class="case-price">${money(item.price)}</strong><span class="muted">Топ дроп: ${legendary ? legendary.name : "n/a"}</span></div>
      ${freeCount ? `<span class="rarity-pill" style="color:#b8ff57; margin-bottom:12px;">Бонус x${freeCount}</span>` : ""}
      <div class="case-actions case-actions--multi case-actions--compact">
        <button class="action-button primary" data-open-case="${item.id}" data-open-count="1" ${singleQuote.canOpen ? "" : "disabled"}>${formatCaseOpenButton(singleQuote)}</button>
        <button class="action-button" data-open-case="${item.id}" data-open-count="3" ${tripleQuote.canOpen ? "" : "disabled"}>${formatCaseOpenButton(tripleQuote)}</button>
        <button class="action-button secondary" data-select-case="${item.id}">Состав</button>
      </div>
    </article>
  `;
}

function renderInventoryCardMarkup(item) {
  return `
    <article class="inventory-slot ${item.id === state.selectedInventoryId ? "selected" : ""}">
      <div class="weapon-card__media">
        <div class="weapon-card__glow" style="background:${RARITY_META[item.rarity].color}"></div>
        <div class="weapon-card__weapon" style="background-image:url('${item.art}')"></div>
      </div>
      <div class="weapon-card__meta">
        <span class="rarity-pill" style="color:${RARITY_META[item.rarity].color}">${item.rarity}</span>
        <h3>${item.name}</h3>
        <p>${item.collection}</p>
        <div class="inventory-slot__footer"><strong>${money(item.price)}</strong><span>${item.wear}</span></div>
        <div class="inventory-actions" style="margin-top:14px;">
          <button class="action-button secondary" data-use-upgrade="${item.id}">В апгрейд</button>
          <button class="action-button" data-sell-item="${item.id}">Продать</button>
        </div>
      </div>
    </article>
  `;
}

function renderUpgradeInventoryMarkup(item, selected) {
  return `
    <button class="upgrade-target ${selected ? "active" : ""}" data-upgrade-source="${item.id}">
      <span class="upgrade-target__thumb" style="background-image:url('${item.art}')"></span>
      <span class="upgrade-target__body">
        <span class="profile-line"><strong>${item.name}</strong><span style="color:${RARITY_META[item.rarity].color}">${item.rarity}</span></span>
        <span class="profile-line" style="margin-top:8px;"><span>${item.collection}</span><strong>${money(item.price)}</strong></span>
      </span>
    </button>
  `;
}

function renderUpgradeTargetMarkup(item) {
  return `
    <button class="upgrade-target ${item.uid === state.selectedUpgradeTarget ? "active" : ""}" data-upgrade-target="${item.uid}">
      <span class="upgrade-target__thumb" style="background-image:url('${item.art}')"></span>
      <span class="upgrade-target__body">
        <span class="profile-line"><strong>${item.name}</strong><span style="color:${RARITY_META[item.rarity].color}">${item.rarity}</span></span>
        <span class="profile-line" style="margin-top:8px;"><span>${item.collection}</span><strong>${money(item.price)}</strong></span>
      </span>
    </button>
  `;
}

function renderUpgradeSummaryMarkup(item, label) {
  return `
    <article class="upgrade-item-chip">
      <span class="upgrade-item-chip__thumb" style="background-image:url('${item.art}')"></span>
      <span class="upgrade-item-chip__body">
        <em>${label}</em>
        <strong>${item.name}</strong>
        <span>${money(item.price)}</span>
      </span>
    </article>
  `;
}

function renderRouletteSegmentMarkup(segment) {
  const bonusCase = segment.type === "case" ? CASES.find((item) => item.id === segment.caseId) : null;
  const previewItem = bonusCase ? [...bonusCase.loot].sort((a, b) => b.price - a.price)[0] : null;
  return `
    <div class="legend-row ${bonusCase ? "legend-row--case" : ""}">
      <div class="legend-label">
        <span class="legend-color" style="background:${segment.color}"></span>
        <span class="legend-icon" style="color:${bonusCase ? bonusCase.iconTint : "#ffd66b"}">${bonusCase ? bonusCase.icon : "🪙"}</span>
        <div class="legend-stack">
          <strong>${segment.label}</strong>
          <span class="legend-preview">
            ${previewItem ? `<span class="legend-preview__art" style="background-image:url('${previewItem.art}')"></span><span>${previewItem.name}</span>` : `<span class="legend-preview__cash">€</span><span>Прямая выплата на баланс</span>`}
          </span>
        </div>
      </div>
      <span class="muted">${bonusCase ? "Яйцо" : "Баланс"}</span>
    </div>
  `;
}

function createWeaponCard(item) {
  const fragment = weaponTemplate.content.cloneNode(true);
  fragment.querySelector(".rarity-pill").remove();
  fragment.querySelector("h3").textContent = item.name;
  fragment.querySelector(".weapon-card__collection").textContent = item.collection;
  fragment.querySelector(".weapon-card__footer").innerHTML = `<span>Редкость и цена скрыты до выпадения</span>`;
  fragment.querySelector(".weapon-card__glow").style.background = RARITY_META[item.rarity].color;
  fragment.querySelector(".weapon-card__weapon").style.backgroundImage = `url('${item.art}')`;
  return fragment;
}

function getCaseOpenQuote(caseId, count) {
  const selectedCase = CASES.find((item) => item.id === caseId);
  if (!selectedCase) return { canOpen: false, count, totalCost: 0, freeUsed: 0, paidUsed: 0, selectedCase: null };
  const freeUsed = Math.min(getFreeCaseCount(caseId), count);
  const paidUsed = count - freeUsed;
  const totalCost = paidUsed * selectedCase.price;
  const canOpen = getFreeCaseCount(caseId) + Math.floor(state.balance / selectedCase.price) >= count;
  return { canOpen, count, totalCost, freeUsed, paidUsed, selectedCase };
}

function formatCaseOpenButton(quote) {
  if (!quote.selectedCase) return `x${quote.count}`;
  const costLabel = quote.totalCost > 0 ? money(quote.totalCost) : "free";
  return `x${quote.count} · ${costLabel}`;
}

function describeOpenMix(freeUsed, paidUsed) {
  if (freeUsed && paidUsed) return `${freeUsed} бонус / ${paidUsed} платно`;
  if (freeUsed) return `Бонусно x${freeUsed}`;
  return `Платно x${paidUsed}`;
}

function openCase(caseId, count = 1) {
  const quote = getCaseOpenQuote(caseId, count);
  const selectedCase = quote.selectedCase;
  if (!selectedCase || !quote.canOpen) {
    showToast("Недостаточно баланса или бонусных открытий.");
    return;
  }

  state.freeCaseCredits[caseId] = Math.max(0, getFreeCaseCount(caseId) - quote.freeUsed);
  state.balance -= quote.totalCost;
  const droppedItems = Array.from({ length: count }, () => ({ ...rollCaseDrop(selectedCase), id: createId() }));
  state.stats.openedCases += count;
  updateBestDropRecord(droppedItems);

  if (count === 1) {
    pendingDropContext = { mode: "single", selectedCase, freeOpened: quote.freeUsed === 1, freeOpenedCount: quote.freeUsed, paidOpenedCount: quote.paidUsed, item: droppedItems[0] };
    persistState();
    initMusicPlayer();
    renderApp();
    showDropModal(selectedCase, droppedItems[0], quote.freeUsed === 1);
    return;
  }

  pendingDropContext = { mode: "batch", selectedCase, items: droppedItems, freeOpenedCount: quote.freeUsed, paidOpenedCount: quote.paidUsed };
  persistState();
  initMusicPlayer();
  renderApp();
  showBatchDropModal(selectedCase, droppedItems, quote.freeUsed, quote.paidUsed);
}

function rollCaseDrop(selectedCase) {
  return clone(weightedRoll(selectedCase.loot));
}

function showBatchDropModal(selectedCase, items, freeOpenedCount, paidOpenedCount) {
  const totalValue = items.reduce((sum, item) => sum + item.price, 0);
  const bestItem = [...items].sort((a, b) => b.price - a.price)[0];
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  modalContent.innerHTML = `
    <div class="drop-reveal">
      <p class="eyebrow">${selectedCase.title}</p>
      <h3>Пакетное открытие x${items.length}</h3>
      <div class="batch-summary">
        <div class="profile-line"><span>Режим открытия</span><strong>${describeOpenMix(freeOpenedCount, paidOpenedCount)}</strong></div>
        <div class="profile-line"><span>Суммарная стоимость дропа</span><strong>${money(totalValue)}</strong></div>
        <div class="profile-line"><span>Лучший предмет</span><strong>${bestItem ? bestItem.name : "-"}</strong></div>
      </div>
      <div class="batch-drop-grid">${items.map(renderBatchDropCard).join("")}</div>
      <p id="drop-result-copy">Все предметы можно разом забрать в инвентарь или сразу продать. Закрытие по крестику сохранит весь пакет.</p>
      <div class="case-actions drop-actions" id="drop-actions">
        <button class="action-button primary" data-claim-drop="keep">Забрать всё</button>
        <button class="action-button" data-claim-drop="sell">Продать всё за ${money(totalValue)}</button>
      </div>
    </div>
  `;
  document.querySelectorAll("[data-claim-drop]").forEach((button) => {
    button.addEventListener("click", () => claimPendingDrop(button.dataset.claimDrop));
  });
  playSound("case");
}

function renderBatchDropCard(item) {
  return `
    <article class="batch-drop-card">
      <div class="batch-drop-card__media">
        <div class="batch-drop-card__glow" style="background:${RARITY_META[item.rarity].color}"></div>
        <div class="batch-drop-card__weapon" style="background-image:url('${item.art}')"></div>
      </div>
      <div class="batch-drop-card__meta">
        <span class="rarity-pill" style="color:${RARITY_META[item.rarity].color}">${item.rarity}</span>
        <strong>${item.name}</strong>
        <span>${money(item.price)}</span>
      </div>
    </article>
  `;
}

function showDropModal(selectedCase, item, freeOpened) {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");

  const rollMarkup = buildDropRollMarkup(selectedCase, item);
  modalContent.innerHTML = `
    <div class="drop-reveal">
      <p class="eyebrow">${selectedCase.title}</p>
      <h3 id="drop-result-title">Яйцо вскрывается...</h3>
      <div class="drop-egg-scene">
        <div class="drop-egg" id="modal-drop-egg"></div>
        <div class="drop-roll" id="modal-drop-roll">
          <div class="drop-roll__viewport" id="modal-drop-viewport">
            <div class="drop-roll__pointer"></div>
            <div class="drop-roll__track" id="modal-drop-track">${rollMarkup}</div>
          </div>
        </div>
        <div class="drop-weapon" id="modal-drop-weapon"><div class="drop-weapon-art" style="background-image:url('${item.art}')"></div></div>
      </div>
      <div class="profile-line drop-result-meta" id="drop-result-meta" aria-live="polite">
        <span class="rarity-pill" id="drop-result-rarity"></span>
        <strong id="drop-result-price"></strong>
      </div>
      <p id="drop-result-copy">${freeOpened ? "Бонусное яйцо" : "Яйцо"} прокручивает только свой собственный пул. Конкретный дроп появится только после полной остановки ленты.</p>
      <div class="case-actions drop-actions" id="drop-actions" style="opacity:.45; pointer-events:none;">
        <button class="action-button primary" data-claim-drop="keep">Забрать</button>
        <button class="action-button" data-claim-drop="sell" id="drop-sell-button">Продать</button>
        <button class="action-button secondary" data-claim-drop="upgrade">В апгрейд</button>
      </div>
    </div>
  `;

  document.querySelectorAll("[data-claim-drop]").forEach((button) => {
    button.addEventListener("click", () => claimPendingDrop(button.dataset.claimDrop));
  });

  requestAnimationFrame(() => animateDropRoll(selectedCase, item, freeOpened));
}

function buildDropRollMarkup(selectedCase, winner) {
  const sequence = buildDropSequence(selectedCase, winner);
  return sequence.map((entry) => renderDropRollCard(entry)).join("");
}

function buildDropSequence(selectedCase, winner) {
  const sequence = [];
  const winnerIndex = 18;
  for (let i = 0; i < 28; i += 1) {
    const source = i === winnerIndex ? winner : selectedCase.loot[randomInt(0, selectedCase.loot.length - 1)];
    sequence.push({ ...source, _winner: i === winnerIndex });
  }
  return sequence;
}

function renderDropRollCard(item) {
  return `
    <article class="drop-roll-card ${item._winner ? "winner" : ""}">
      <div class="drop-roll-card__media">
        <div class="drop-roll-card__glow" style="background:${RARITY_META[item.rarity].color}"></div>
        <div class="drop-roll-card__weapon" style="background-image:url('${item.art}')"></div>
      </div>
      <div class="drop-roll-card__meta">
        <strong>${item.name}</strong>
        <span>Скрытая редкость до стопа</span>
      </div>
    </article>
  `;
}

function animateDropRoll(selectedCase, item, freeOpened) {
  const egg = document.querySelector("#modal-drop-egg");
  const viewport = document.querySelector("#modal-drop-viewport");
  const track = document.querySelector("#modal-drop-track");
  const winnerCard = track?.querySelector(".drop-roll-card.winner");
  const finalWeapon = document.querySelector("#modal-drop-weapon");
  const actions = document.querySelector("#drop-actions");
  const title = document.querySelector("#drop-result-title");
  const meta = document.querySelector("#drop-result-meta");
  const rarity = document.querySelector("#drop-result-rarity");
  const price = document.querySelector("#drop-result-price");
  const sellButton = document.querySelector("#drop-sell-button");
  const copy = document.querySelector("#drop-result-copy");
  if (!egg || !viewport || !track || !winnerCard || !finalWeapon) return;

  setTimeout(() => egg.classList.add("cracked"), 120);
  setTimeout(() => {
    const target = winnerCard.offsetLeft - (viewport.clientWidth / 2) + (winnerCard.clientWidth / 2);
    track.style.transform = `translateX(${-target}px)`;
    playSound("case");
  }, 450);
  setTimeout(() => {
    finalWeapon.classList.add("visible");
    if (title) title.textContent = item.name;
    if (rarity) {
      rarity.textContent = item.rarity;
      rarity.style.color = RARITY_META[item.rarity].color;
    }
    if (price) price.textContent = money(item.price);
    if (sellButton) sellButton.textContent = `Продать за ${money(item.price)}`;
    if (copy) {
      copy.textContent = `${freeOpened ? "Бонусное яйцо" : "Яйцо"} остановилось на ${item.name}. Теперь можно сохранить предмет, продать его или сразу отправить в апгрейд.`;
    }
    if (meta) meta.classList.add("visible");
  }, 4200);
  setTimeout(() => {
    if (actions) {
      actions.style.opacity = "1";
      actions.style.pointerEvents = "auto";
    }
  }, 4300);
}
function claimPendingDrop(action) {
  if (!pendingDropContext) {
    closeModal(true);
    return;
  }

  if (pendingDropContext.mode === "batch") {
    const { selectedCase, items, freeOpenedCount, paidOpenedCount } = pendingDropContext;
    const totalValue = items.reduce((sum, item) => sum + item.price, 0);
    const bestItem = [...items].sort((a, b) => b.price - a.price)[0];
    if (action === "sell") {
      state.balance += totalValue;
      state.stats.totalSold += totalValue;
      addHistory("case", `${describeOpenMix(freeOpenedCount, paidOpenedCount)} открыто ${selectedCase.title} x${items.length}: весь пакет продан за ${money(totalValue)}.`);
      playSound("sell");
      showToast(`Продан весь пакет за ${money(totalValue)}.`);
    } else {
      state.inventory = [...items, ...state.inventory];
      state.selectedInventoryId = items[0]?.id || null;
      addHistory("case", `${describeOpenMix(freeOpenedCount, paidOpenedCount)} открыто ${selectedCase.title} x${items.length}: сохранён пакет, лучший дроп ${bestItem ? bestItem.name : "-"}.`);
      showToast(`${items.length} предметов добавлено в инвентарь.`);
    }
    pendingDropContext = null;
    persistAndRender();
    closeModal(true);
    return;
  }

  const { selectedCase, item, freeOpened } = pendingDropContext;
  if (action === "sell") {
    state.balance += item.price;
    state.stats.totalSold += item.price;
    addHistory("case", `${freeOpened ? "Бонусно" : "Платно"} открыто ${selectedCase.title}: ${item.name} сразу продан за ${money(item.price)}.`);
    playSound("sell");
    showToast(`${item.name} продан.`);
  } else {
    state.inventory.unshift(item);
    state.selectedInventoryId = item.id;
    addHistory("case", `${freeOpened ? "Бонусно" : "Платно"} открыто ${selectedCase.title}: сохранён ${item.name} за ${money(item.price)}.`);
    if (action === "upgrade") {
      state.activePage = "roulette";
      playSound("upgradeWin");
      showToast(`${item.name} отправлен в колесо апгрейда.`);
    } else {
      showToast(`${item.name} добавлен в инвентарь.`);
    }
  }

  pendingDropContext = null;
  persistAndRender();
  closeModal(true);
}
function dismissDropModal() {
  if (pendingDropContext) {
    claimPendingDrop("keep");
    return;
  }
  closeModal(true);
}
function closeModal(force = false) {
  if (pendingDropContext && !force) {
    claimPendingDrop("keep");
    return;
  }
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  modalContent.innerHTML = "";
}
function spinRoulette(useFreeSpin = false) {
  const wheel = document.querySelector("#roulette-wheel");
  const resultBox = document.querySelector("#roulette-result");
  const paidButton = document.querySelector("#spin-roulette-button");
  const freeButton = document.querySelector("#free-spin-button");
  if (!wheel || !resultBox || !paidButton) return;
  if (useFreeSpin) {
    if (!canUseFreeSpin()) {
      syncFreeSpinUi();
      showToast(isBrokeForRoulette() ? `Бесплатный спин будет готов через ${formatCountdown(getFreeSpinRemainingMs())}.` : `Бесплатный спин откроется, когда баланс упадёт ниже ${money(ROULETTE_SPIN_COST)}.`);
      return;
    }
    state.freeSpinReadyAt = Date.now() + FREE_SPIN_COOLDOWN_MS;
  } else {
    if (state.balance < ROULETTE_SPIN_COST) {
      syncFreeSpinUi();
      showToast(`Для обычного колеса нужно ${money(ROULETTE_SPIN_COST)}.`);
      return;
    }
    state.balance -= ROULETTE_SPIN_COST;
  }

  rouletteSpinActive = true;
  paidButton.disabled = true;
  if (freeButton) freeButton.disabled = true;
  resultBox.innerHTML = `<p>${useFreeSpin ? "Запущен бесплатный аварийный спин." : `Колесо запущено за ${money(ROULETTE_SPIN_COST)}.`} Результат фиксируется только после полной остановки.</p>`;

  const result = weightedRoll(ROULETTE_SEGMENTS);
  const startAngle = rouletteStartAngle(result);
  const endAngle = startAngle + (result.chance / 100) * 360;
  const targetAngle = 360 - ((startAngle + endAngle) / 2);
  wheel.style.transform = `rotate(${360 * 6 + targetAngle}deg)`;
  state.stats.rouletteSpins += 1;

  setTimeout(() => {
    if (result.type === "case") {
      const bonusCase = CASES.find((item) => item.id === result.caseId);
      const topDrop = bonusCase ? [...bonusCase.loot].sort((a, b) => b.price - a.price)[0] : null;
      state.freeCaseCredits[result.caseId] = getFreeCaseCount(result.caseId) + 1;
      resultBox.innerHTML = `<p><strong>${bonusCase.icon} ${bonusCase.title}</strong> добавлено как бесплатное открытие. ${topDrop ? `Топ-предмет этого яйца: ${topDrop.name}.` : ""}</p>`;
      addHistory("roulette", `${useFreeSpin ? "Бесплатное" : "Платное"} колесо выдало бонусный кейс ${bonusCase.title}.`);
      state.selectedCaseId = bonusCase.id;
      showToast(`Получено бесплатное яйцо ${bonusCase.title}.`);
    } else {
      state.balance += result.value;
      resultBox.innerHTML = `<p>Колесо принесло <strong>${money(result.value)}</strong>. Сумма уже зачислена на баланс.</p>`;
      addHistory("roulette", `${useFreeSpin ? "Бесплатное" : "Платное"} колесо принесло ${money(result.value)}.`);
      showToast(`Получено ${money(result.value)}.`);
    }
    rouletteSpinActive = false;
    playSound("roulette");
    persistAndRender();
  }, 5000);
}

function runUpgrade(sourceItem, targetItem, chance) {
  const wheel = document.querySelector("#upgrade-wheel");
  const resultBox = document.querySelector("#upgrade-wheel-result");
  const button = document.querySelector("#run-upgrade-button");
  if (!wheel || !resultBox || !button || button.disabled) return;
  button.disabled = true;

  state.stats.upgradesAttempted += 1;
  const success = Math.random() * 100 <= chance;
  const successAngle = (chance / 100) * 360;
  const landingAngle = success ? randomBetween(3, Math.max(6, successAngle - 3)) : randomBetween(Math.min(357, successAngle + 3), 357);
  const targetAngle = 360 - landingAngle;
  wheel.style.transform = `rotate(${360 * 5 + targetAngle}deg)`;
  resultBox.innerHTML = `<p>Колесо раскручивается. Стрелка должна попасть в сектор успеха для апгрейда.</p>`;

  setTimeout(() => {
    state.inventory = state.inventory.filter((item) => item.id !== sourceItem.id);
    if (success) {
      const reward = { ...targetItem, id: createId() };
      delete reward.uid;
      state.inventory.unshift(reward);
      state.stats.upgradesWon += 1;
      updateBestDropRecord(reward);
      state.selectedInventoryId = reward.id;
      addHistory("upgrade", `Апгрейд успешен: ${sourceItem.name} превращён в ${reward.name}.`);
      showToast(`Успех: ${reward.name}.`);
      playSound("upgradeWin");
    } else {
      state.selectedInventoryId = null;
      addHistory("upgrade", `Апгрейд провален: ${sourceItem.name} исчез в инкубаторе.`);
      showToast(`Провал: ${sourceItem.name} потерян.`);
      playSound("upgradeLose");
    }
    state.selectedUpgradeTarget = null;
    persistAndRender();
  }, 4600);
}

function sellItem(itemId) {
  const item = state.inventory.find((entry) => entry.id === itemId);
  if (!item) return;
  state.balance += item.price;
  state.stats.totalSold += item.price;
  state.inventory = state.inventory.filter((entry) => entry.id !== itemId);
  if (state.selectedInventoryId === itemId) state.selectedInventoryId = null;
  addHistory("sell", `Продан ${item.name} за ${money(item.price)}.`);
  persistAndRender();
  playSound("sell");
  showToast(`${item.name} продан.`);
}

function sellAllItems() {
  if (!state.inventory.length) return;
  const totalValue = sumInventoryValue();
  const soldCount = state.inventory.length;
  state.balance += totalValue;
  state.stats.totalSold += totalValue;
  state.inventory = [];
  state.selectedInventoryId = null;
  addHistory("sell", `Продан весь инвентарь: ${soldCount} предметов на ${money(totalValue)}.`);
  persistAndRender();
  playSound("sell");
  showToast(`Продано ${soldCount} предметов за ${money(totalValue)}.`);
}

function getUpgradeTargets(sourceItem) {
  if (!sourceItem) return [];
  const seen = new Set();
  return CASES.flatMap((item) => item.loot)
    .filter((item) => item.price > sourceItem.price)
    .filter((item) => {
      const key = `${item.name}-${item.price}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.price - b.price)
    .slice(0, 12)
    .map((item, index) => ({ ...item, uid: `target-${index}-${item.name}` }));
}

function calcUpgradeChance(sourcePrice, targetPrice) {
  return Math.max(5, Math.min(85, Math.round((sourcePrice / targetPrice) * 100)));
}

function upgradeRiskLabel(chance) {
  if (chance >= 65) return "High";
  if (chance >= 38) return "Medium";
  return "Low";
}

function buildUpgradeWheelGradient(chance) {
  const safeChance = Math.max(5, Math.min(85, chance));
  const successDegrees = (safeChance / 100) * 360;
  return `conic-gradient(#9cff63 0deg ${successDegrees}deg, #6f3a32 ${successDegrees}deg 360deg)`;
}
function buildRouletteGradient() {
  let cursor = 0;
  const segments = ROULETTE_SEGMENTS.map((segment) => {
    const start = cursor;
    const end = cursor + (segment.chance / 100) * 360;
    cursor = end;
    return `${segment.color} ${start}deg ${end}deg`;
  });
  return `conic-gradient(${segments.join(", ")})`;
}

function rouletteStartAngle(target) {
  let cursor = 0;
  for (const segment of ROULETTE_SEGMENTS) {
    if (segment.label === target.label && segment.chance === target.chance) return cursor;
    cursor += (segment.chance / 100) * 360;
  }
  return 0;
}

function weightedRoll(items) {
  const total = items.reduce((sum, item) => sum + item.chance, 0);
  let threshold = Math.random() * total;
  for (const item of items) {
    threshold -= item.chance;
    if (threshold <= 0) return item;
  }
  return items[items.length - 1];
}

function getSelectedCase() { return CASES.find((item) => item.id === state.selectedCaseId) || CASES[0]; }
function getBestInventoryItem() { return [...state.inventory].sort((a, b) => b.price - a.price)[0] || null; }
function getProfileAvatarCase() { return CASES.find((item) => item.id === state.profile.avatarCaseId) || CASES.find((item) => item.id === "amber-clutch") || CASES[0]; }
function getLifetimeBestDrop() { return state.bestDropRecord && state.bestDropRecord.name ? state.bestDropRecord : null; }
function createBestDropRecord(item) {
  if (!item) return null;
  return {
    name: item.name,
    price: item.price,
    rarity: item.rarity,
    art: item.art,
    collection: item.collection,
    wear: item.wear
  };
}
function updateBestDropRecord(items) {
  const candidates = (Array.isArray(items) ? items : [items]).filter(Boolean);
  if (!candidates.length) return;
  const bestCandidate = [...candidates].sort((a, b) => b.price - a.price)[0];
  const currentBest = getLifetimeBestDrop();
  if (!currentBest || Number(bestCandidate.price || 0) > Number(currentBest.price || 0)) {
    state.bestDropRecord = createBestDropRecord(bestCandidate);
  }
}
function getFreeCaseCount(caseId) { return Number(state.freeCaseCredits[caseId] || 0); }
function totalFreeCases() { return Object.values(state.freeCaseCredits).reduce((sum, count) => sum + Number(count || 0), 0); }
function sumInventoryValue() { return state.inventory.reduce((sum, item) => sum + item.price, 0); }
function isBrokeForRoulette() { return state.balance < ROULETTE_SPIN_COST; }
function canUseFreeSpin() { return isBrokeForRoulette() && Date.now() >= Number(state.freeSpinReadyAt || 0); }
function getFreeSpinRemainingMs() { return Math.max(0, Number(state.freeSpinReadyAt || 0) - Date.now()); }
function formatCountdown(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}
function syncFreeSpinUi() {
  const freeButton = document.querySelector("#free-spin-button");
  const freeNote = document.querySelector("#free-spin-note");
  const paidButton = document.querySelector("#spin-roulette-button");
  if (paidButton) paidButton.disabled = rouletteSpinActive || state.balance < ROULETTE_SPIN_COST;
  if (!freeButton || !freeNote) return;
  if (rouletteSpinActive) {
    freeButton.disabled = true;
    freeButton.textContent = "Колесо крутится";
    freeNote.textContent = "Дождись полной остановки колеса, после этого кнопки снова станут активны.";
    return;
  }
  if (!isBrokeForRoulette()) {
    freeButton.disabled = true;
    freeButton.textContent = "Бесплатный спин";
    freeNote.textContent = `Экстренный спин открывается, когда баланс падает ниже ${money(ROULETTE_SPIN_COST)}.`;
    return;
  }
  if (canUseFreeSpin()) {
    freeButton.disabled = false;
    freeButton.textContent = "Бесплатный спин готов";
    freeNote.textContent = "Баланс просел. Один бесплатный спин уже доступен, следующий откатится через 10 минут после запуска.";
    return;
  }
  freeButton.disabled = true;
  freeButton.textContent = `Бесплатный спин через ${formatCountdown(getFreeSpinRemainingMs())}`;
  freeNote.textContent = `Баланс ниже порога. До следующего бесплатного спина осталось ${formatCountdown(getFreeSpinRemainingMs())}.`;
}
function startFreeSpinTicker() {
  stopFreeSpinTicker();
  syncFreeSpinUi();
  freeSpinTicker = window.setInterval(() => {
    if (!document.querySelector("#free-spin-button")) {
      stopFreeSpinTicker();
      return;
    }
    syncFreeSpinUi();
  }, 1000);
}
function stopFreeSpinTicker() {
  if (freeSpinTicker) {
    window.clearInterval(freeSpinTicker);
    freeSpinTicker = null;
  }
}

function addHistory(type, title) {
  state.history.unshift({ type, title, timestamp: new Date().toLocaleString(currentLang() === "en" ? "en-US" : "ru-RU") });
  state.history = state.history.slice(0, 30);
}

function formatHistoryType(type) {
  const labels = { case: t("history.case"), roulette: t("history.roulette"), upgrade: t("history.upgrade"), sell: t("history.sell"), bonus: t("history.bonus") };
  return labels[type] || type;
}

function currentLang() { return state?.settings?.language === "en" ? "en" : "ru"; }
function t(key, vars = {}) {
  const lang = currentLang();
  let text = UI_TEXT[lang]?.[key] || UI_TEXT.ru[key] || key;
  for (const [name, value] of Object.entries(vars)) text = text.replaceAll(`{${name}}`, String(value));
  return text;
}
function money(value) { return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(value); }
function upgradeWinRate() { return state.stats.upgradesAttempted ? Math.round((state.stats.upgradesWon / state.stats.upgradesAttempted) * 100) : 0; }
function persistAndRender() { persistState(); initMusicPlayer(); renderApp(); }
function persistState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return migrateLoadedState(clone(DEFAULT_STATE));
    const parsed = JSON.parse(raw);
    const merged = {
      ...clone(DEFAULT_STATE),
      ...parsed,
      freeCaseCredits: parsed.freeCaseCredits && typeof parsed.freeCaseCredits === "object" ? parsed.freeCaseCredits : {},
      settings: { ...clone(DEFAULT_STATE).settings, ...(parsed.settings || {}) },
      stats: { ...clone(DEFAULT_STATE).stats, ...(parsed.stats || {}) },
      profile: { ...clone(DEFAULT_STATE).profile, ...(parsed.profile || {}) },
      meta: { ...clone(DEFAULT_STATE).meta, ...(parsed.meta || {}) },
      bestDropRecord: parsed.bestDropRecord && typeof parsed.bestDropRecord === "object" ? parsed.bestDropRecord : null,
      inventory: Array.isArray(parsed.inventory) ? parsed.inventory : [],
      history: Array.isArray(parsed.history) ? parsed.history : []
    };
    return migrateLoadedState(merged);
  } catch {
    return migrateLoadedState(clone(DEFAULT_STATE));
  }
}

function migrateLoadedState(nextState) {
  const migrated = {
    ...clone(DEFAULT_STATE),
    ...nextState,
    freeCaseCredits: nextState.freeCaseCredits && typeof nextState.freeCaseCredits === "object" ? nextState.freeCaseCredits : {},
    profile: { ...clone(DEFAULT_STATE).profile, ...(nextState.profile || {}) },
    meta: { ...clone(DEFAULT_STATE).meta, ...(nextState.meta || {}) },
    inventory: Array.isArray(nextState.inventory) ? nextState.inventory : [],
    history: Array.isArray(nextState.history) ? nextState.history : []
  };

  if (!migrated.bestDropRecord || !migrated.bestDropRecord.name) {
    const inventoryBest = [...migrated.inventory].sort((a, b) => b.price - a.price)[0] || null;
    migrated.bestDropRecord = createBestDropRecord(inventoryBest);
  }

  if (Number(migrated.meta.historyStatsResetVersion || 0) < HISTORY_STATS_RESET_VERSION) {
    migrated.history = [];
    migrated.stats = clone(DEFAULT_STATE).stats;
    migrated.meta.historyStatsResetVersion = HISTORY_STATS_RESET_VERSION;
  }

  if (Number(migrated.meta.profileWipeVersion || 0) < PROFILE_WIPE_VERSION) {
    migrated.balance = 0;
    migrated.inventory = [];
    migrated.history = [];
    migrated.freeCaseCredits = {};
    migrated.freeSpinReadyAt = 0;
    migrated.stats = clone(DEFAULT_STATE).stats;
    migrated.selectedInventoryId = null;
    migrated.selectedUpgradeTarget = null;
    migrated.meta.profileWipeVersion = PROFILE_WIPE_VERSION;
    migrated.meta.historyStatsResetVersion = HISTORY_STATS_RESET_VERSION;
  }

  return migrated;
}

function initMusicPlayer() {
  if (!musicPlayer) {
    musicPlayer = new Audio();
    musicPlayer.preload = "none";
    musicPlayer.volume = getMusicVolume();
    musicPlayer.addEventListener("ended", () => advanceMusicTrack(true));
    musicPlayer.addEventListener("error", handleMusicError);
  }
  musicPlayer.volume = getMusicVolume();
  syncMusicSource();
  if (state.settings.musicEnabled) tryStartMusic();
  else pauseMusic();
}

function getCurrentMusicTrack() {
  const index = Number(state.settings.musicTrackIndex || 0);
  if (!MUSIC_TRACKS.length) return null;
  return MUSIC_TRACKS[(index + MUSIC_TRACKS.length) % MUSIC_TRACKS.length];
}

function syncMusicSource() {
  if (!musicPlayer) return;
  const track = getCurrentMusicTrack();
  if (!track) return;
  if (!musicPlayer.src || !musicPlayer.src.endsWith(track.file.replace("./", ""))) {
    musicPlayer.src = track.file;
    musicPlayer.load();
  }
}

function syncMusicUi() {
  const track = getCurrentMusicTrack();
  const volumePercent = Math.round(getMusicVolume() * 100);
  if (musicToggleButton) musicToggleButton.textContent = t("header.music", { state: t(state.settings.musicEnabled ? "state.on" : "state.off") });
  if (musicTrackLabel) musicTrackLabel.textContent = t("header.spotify");
  if (musicNextButton) musicNextButton.textContent = t("header.nextTrack");
  if (musicVolumeSlider) musicVolumeSlider.value = String(volumePercent);
  if (musicVolumeValue) musicVolumeValue.textContent = `${volumePercent}%`;
  if (musicNextButton) musicNextButton.disabled = !track;
}

function toggleMusic() {
  state.settings.musicEnabled = !state.settings.musicEnabled;
  musicErrorShown = false;
  if (state.settings.musicEnabled) {
    tryStartMusic();
  } else {
    pauseMusic();
  }
  persistState();
  syncMusicUi();
}

function advanceMusicTrack(fromEnded) {
  if (!MUSIC_TRACKS.length) return;
  state.settings.musicTrackIndex = (Number(state.settings.musicTrackIndex || 0) + 1) % MUSIC_TRACKS.length;
  musicErrorShown = false;
  syncMusicSource();
  if (state.settings.musicEnabled) tryStartMusic();
  persistState();
  syncMusicUi();
  if (!fromEnded) showToast(`Spotify: ${getCurrentMusicTrack().title.replace("Spotify / ", "")}`);
}

function tryStartMusic() {
  if (!musicPlayer) initMusicPlayer();
  syncMusicSource();
  const playAttempt = musicPlayer.play();
  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {
      state.settings.musicEnabled = false;
      persistState();
      syncMusicUi();
      showToast("Браузер заблокировал автозапуск. Нажми кнопку музыки ещё раз.");
    });
  }
}

function getMusicVolume() {
  return Math.max(0, Math.min(1, Number(state.settings.musicVolume ?? 35) / 100));
}

function setMusicVolume(value) {
  state.settings.musicVolume = Number(value);
  if (musicPlayer) musicPlayer.volume = getMusicVolume();
  syncMusicUi();
  persistState();
}

function pauseMusic() {
  if (!musicPlayer) return;
  musicPlayer.pause();
}

function handleMusicError() {
  if (musicErrorShown) return;
  musicErrorShown = true;
  state.settings.musicEnabled = false;
  persistState();
  syncMusicUi();
  showToast("Добавь mp3 в assets/music: kai-angel-01, 02 и 03.");
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  if (toastTimer) clearTimeout(toastTimer);
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  toastTimer = setTimeout(() => toast.remove(), 2400);
}

function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function randomBetween(min, max) { if (max <= min) return min; return min + Math.random() * (max - min); }
function createId() { return `id-${Date.now()}-${Math.random().toString(16).slice(2, 9)}`; }
function clone(value) { return JSON.parse(JSON.stringify(value)); }
function playSound(type) {
  if (!state.settings.soundEnabled) return;
  try {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume();
    const patterns = {
      case: [[0, 180, "triangle", 0.05], [90, 280, "sine", 0.04], [180, 420, "triangle", 0.03]],
      roulette: [[0, 220, "square", 0.04], [140, 330, "triangle", 0.04], [280, 520, "sine", 0.03]],
      upgradeWin: [[0, 240, "triangle", 0.05], [100, 360, "triangle", 0.04], [200, 520, "sine", 0.03]],
      upgradeLose: [[0, 220, "sawtooth", 0.05], [120, 180, "square", 0.03]],
      sell: [[0, 260, "sine", 0.03], [80, 390, "triangle", 0.02]],
      bonus: [[0, 320, "triangle", 0.04], [140, 560, "sine", 0.03]]
    };
    (patterns[type] || []).forEach(([delay, freq, wave, gain]) => {
      const now = audioContext.currentTime + delay / 1000;
      const osc = audioContext.createOscillator();
      const amp = audioContext.createGain();
      osc.type = wave;
      osc.frequency.setValueAtTime(freq, now);
      amp.gain.setValueAtTime(0.0001, now);
      amp.gain.exponentialRampToValueAtTime(gain, now + 0.02);
      amp.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
      osc.connect(amp).connect(audioContext.destination);
      osc.start(now);
      osc.stop(now + 0.24);
    });
  } catch {
    state.settings.soundEnabled = false;
    persistState();
  }
}

function skinArt(slug, type, primary, secondary) {
  const remote = `https://cdn.csgoskins.gg/public/images/galleries/v4/${slug}/inspecting.png`;
  return remote;
}
function weaponArt(type, primary, secondary) {
  const shapes = {
    pistol: `<rect x="140" y="40" width="210" height="36" rx="12" fill="${primary}" /><rect x="290" y="44" width="72" height="22" rx="10" fill="${secondary}" /><path d="M210 70 L250 70 L238 132 L196 132 Z" fill="${secondary}" /><rect x="128" y="48" width="28" height="18" rx="6" fill="${secondary}" />`,
    smg: `<rect x="104" y="48" width="248" height="30" rx="14" fill="${primary}" /><rect x="300" y="38" width="84" height="16" rx="8" fill="${secondary}" /><rect x="132" y="82" width="52" height="14" rx="7" fill="${secondary}" /><path d="M208 76 L246 76 L234 138 L194 138 Z" fill="${secondary}" /><rect x="84" y="52" width="24" height="18" rx="6" fill="${secondary}" />`,
    shotgun: `<rect x="64" y="54" width="308" height="18" rx="9" fill="${secondary}" /><rect x="136" y="40" width="118" height="38" rx="14" fill="${primary}" /><path d="M244 76 L290 76 L278 138 L230 138 Z" fill="${primary}" /><rect x="54" y="58" width="22" height="10" rx="4" fill="${primary}" />`,
    rifle: `<rect x="90" y="48" width="278" height="28" rx="14" fill="${primary}" /><rect x="260" y="34" width="78" height="14" rx="7" fill="${secondary}" /><path d="M188 76 L228 76 L216 142 L174 142 Z" fill="${secondary}" /><rect x="122" y="78" width="74" height="14" rx="7" fill="${secondary}" /><path d="M368 48 L396 58 L368 74 Z" fill="${secondary}" /><rect x="70" y="54" width="22" height="14" rx="6" fill="${secondary}" />`,
    sniper: `<rect x="56" y="52" width="332" height="18" rx="9" fill="${primary}" /><rect x="186" y="38" width="112" height="12" rx="6" fill="${secondary}" /><rect x="98" y="40" width="70" height="14" rx="7" fill="${secondary}" /><path d="M214 70 L254 70 L242 142 L200 142 Z" fill="${secondary}" /><path d="M388 54 L414 61 L388 68 Z" fill="${secondary}" /><rect x="44" y="56" width="18" height="10" rx="5" fill="${secondary}" />`
  };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 180"><rect width="460" height="180" rx="26" fill="rgba(255,255,255,0.03)" />${shapes[type] || shapes.rifle}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}























































































