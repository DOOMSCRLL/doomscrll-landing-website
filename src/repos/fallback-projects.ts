import type ProjectPreview from "models/project-preview"

export const PROJECTS_FALLBACK = [
  {
    name: "Terraria",
    author: "Re-Logic",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/hero_capsule.jpg",
  },
  {
    name: "Minecraft",
    author: "Mojang",
    imageUrl: "https://minecraft.wiki/images/thumb/Minecraft_Vertical.jpg/800px-Minecraft_Vertical.jpg?116fd",
  },
  {
    name: "Human: Fall Flat",
    author: "No Brake Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/477160/hero_capsule.jpg",
  },
  {
    name: "Stardew Valley",
    author: "ConcernedApe",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/hero_capsule.jpg",
  },
  {
    name: "Garry's Mod",
    author: "Facepunch Studios",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/hero_capsule.jpg",
  },
  {
    name: "Phasmophobia",
    author: "Kinetic Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/739630/hero_capsule.jpg",
  },
  {
    name: "Hollow Knight",
    author: "Team Cherry",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/hero_capsule.jpg",
  },
  {
    name: "Meccha Chameleon",
    author: "Lemorion_1124",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/hero_capsule.jpg",
  },
  {
    name: "Valheim",
    author: "Iron Gate Studios",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/hero_capsule.jpg",
  },
  {
    name: "Palworld",
    author: "Pocketpair",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/hero_capsule.jpg",
  },
  {
    name: "Lethal Company",
    author: "Zeekerss",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1966720/hero_capsule.jpg",
  },
  {
    name: "Dead Cells",
    author: "Motion Twin",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/hero_capsule.jpg",
  },
  {
    name: "No Man's Sky",
    author: "Hello Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/hero_capsule.jpg",
  },
  {
    name: "Ori and the Blind Forest",
    author: "Moon Studios",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/387290/hero_capsule.jpg",
  },
  {
    name: "Peak",
    author: "Aggro Crab",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3527290/hero_capsule.jpg",
  },
  {
    name: "Deep Rock Galactic",
    author: "Ghost Ship Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/548430/hero_capsule.jpg",
  },
  {
    name: "Hollow Knight: Silksong",
    author: "Team Cherry",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/hero_capsule.jpg",
  },
  {
    name: "Cuphead",
    author: "Studio MDHR",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/hero_capsule.jpg",
  },
  {
    name: "Subnautica",
    author: "Unknown Worlds Entertainment",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/hero_capsule.jpg",
  },
  {
    name: "Balatro",
    author: "LocalThunk",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2379780/hero_capsule.jpg",
  },
  {
    name: "The Binding of Isaac",
    author: "Edmund McMillen",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/hero_capsule.jpg",
  },
  {
    name: "Papers, Please",
    author: "3909 LLC",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/239030/hero_capsule.jpg",
  },
  {
    name: "Slime Rancher",
    author: "Monomi Park",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/433340/hero_capsule.jpg",
  },
  {
    name: "Enter the Gungeon",
    author: "Dodge Roll",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311690/hero_capsule.jpg",
  },
  {
    name: "Hotline Miami",
    author: "Dennaton Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/219150/hero_capsule.jpg",
  },
  {
    name: "Factorio",
    author: "Wube Software",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/427520/hero_capsule.jpg",
  },
  {
    name: "Astroneer",
    author: "System Era Softworks",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/361420/hero_capsule.jpg",
  },
  {
    name: "Cult of the Lamb",
    author: "Massive Monster",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1313140/hero_capsule.jpg",
  },
  {
    name: "Among Us",
    author: "Innersloth",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/hero_capsule.jpg",
  },
  {
    name: "Dave the Diver",
    author: "Mintrocket",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/hero_capsule.jpg",
  },
  {
    name: "Slay the Spire",
    author: "Mega Crit",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/hero_capsule.jpg",
  },
  {
    name: "Slay the Spire II",
    author: "Mega Crit",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2868840/hero_capsule.jpg",
  },
  {
    name: "Shovel Knight",
    author: "Yacht Club Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250760/hero_capsule.jpg",
  },
  {
    name: "Goat Simulator",
    author: "Coffee Stain Studios",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/265930/hero_capsule.jpg",
  },
  {
    name: "Darkest Dungeon",
    author: "Red Hook Studios",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/262060/hero_capsule.jpg",
  },
  {
    name: "Super Meat Boy",
    author: "Team Meat",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40800/hero_capsule.jpg",
  },
  {
    name: "Superhot",
    author: "Superhot Team",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/322500/hero_capsule.jpg",
  },
  {
    name: "Brotato",
    author: "Blobfish",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942280/hero_capsule.jpg",
  },
  {
    name: "Celeste",
    author: "Extremely OK Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/hero_capsule.jpg",
  },
  {
    name: "Core Keeper",
    author: "Pugstorm",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1621690/hero_capsule.jpg",
  },
  {
    name: "Doki Doki Literature Club Plus!",
    author: "Team Salvato",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1388880/hero_capsule.jpg",
  },
  {
    name: "Dredge",
    author: "Black Salt Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1562430/hero_capsule.jpg",
  },
  {
    name: "Dwarf Fortress",
    author: "Bay 12 Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/975370/hero_capsule.jpg",
  },
  {
    name: "Fez",
    author: "Polytron Corporation",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/224760/hero_capsule.jpg",
  },
  {
    name: "Hades",
    author: "Supergiant Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/hero_capsule.jpg",
  },
  {
    name: "Inscryption",
    author: "Daniel Mullins Games",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1092790/hero_capsule.jpg",
  },
  {
    name: "Loop Hero",
    author: "Four Quarters",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1292950/hero_capsule.jpg",
  },
  {
    name: "Spelunky",
    author: "Mossmouth",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/239350/hero_capsule.jpg",
  },
  {
    name: "Stanley Parable",
    author: "Mike Bithell",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1703340/hero_capsule.jpg",
  },
  {
    name: "Undertale",
    author: "Toby Fox",
    imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/hero_capsule.jpg",
  },
] satisfies Array<ProjectPreview>

function getRandomValuesBetween(min: number, max: number, count: number): number[] {
  const values = new Set<number>()
  while (values.size < count) values.add(Math.floor(Math.random() * (max - min + 1)) + min)
  return Array.from(values)
}

export function getFallbackProjects(count = 7): Array<ProjectPreview> {
  return getRandomValuesBetween(0, PROJECTS_FALLBACK.length - 1, count).map(
    (i) => PROJECTS_FALLBACK[i] as ProjectPreview,
  )
}
