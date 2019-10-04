import { Equipment }  from "../Profile";
import { LicenseByName } from "../../data/Licenses";

const l = LicenseByName;

const Weapon: Equipment[] = [
	{ name: "Unarmed", damageType: "unarmed", animationType: "unarmed", attack: 12, chargeTime: 26, combo: 5, },

	{ name: "Mythril Sword", damageType: "sword", animationType: "sword", attack: 14, chargeTime: 30, combo: 5, },
	{ name: "Broadsword", l: l("Swords 1"), damageType: "sword", animationType: "sword", attack: 14, chargeTime: 32, combo: 5, },
	{ name: "Longsword", l: l("Swords 2"), damageType: "sword", animationType: "sword", attack: 20, chargeTime: 32, combo: 5, },
	{ name: "Iron Sword", l: l("Swords 2"), damageType: "sword", animationType: "sword", attack: 25, chargeTime: 32, combo: 5, },
	{ name: "Mythril Blade", damageType: "sword", animationType: "sword", attack: 23, chargeTime: 30, combo: 5, },
	{ name: "Zwill Blade", l: l("Swords 3"), damageType: "sword", animationType: "sword", attack: 30, chargeTime: 32, combo: 5, },
	{ name: "Ancient Sword", l: l("Swords 3"), damageType: "sword", animationType: "sword", attack: 35, chargeTime: 32, combo: 5, },
	{ name: "Blood Sword", l: l("Blood Sword"), damageType: "sword", animationType: "sword", attack: 38, chargeTime: 32, combo: 5, },
	{ name: "Lohengrin", l: l("Swords 4"), damageType: "sword", animationType: "sword", attack: 40, chargeTime: 32, combo: 5, },
	{ name: "Flametongue", l: l("Swords 4"), damageType: "sword", animationType: "sword", attack: 45, chargeTime: 32, combo: 5, elementDamgage: { fire: true }, },
	{ name: "Demonsbane", l: l("Swords 5"), damageType: "sword", animationType: "sword", attack: 51, chargeTime: 32, combo: 5, },
	{ name: "Icebrand", l: l("Swords 5"), damageType: "sword", animationType: "sword", attack: 55, chargeTime: 32, combo: 5, elementDamgage: { ice: true }, },
	{ name: "Platinum Sword", l: l("Swords 6"), damageType: "sword", animationType: "sword", attack: 61, chargeTime: 32, combo: 5, },
	{ name: "Bastard Sword", l: l("Swords 6"), damageType: "sword", animationType: "sword", attack: 67, chargeTime: 32, combo: 5, },
	{ name: "Diamond Sword", l: l("Swords 7"), damageType: "sword", animationType: "sword", attack: 73, chargeTime: 32, combo: 5, },
	{ name: "Runeblade", l: l("Swords 7"), damageType: "sword", animationType: "sword", attack: 78, chargeTime: 32, combo: 5, },
	{ name: "Deathbringer", l: l("Swords 8"), damageType: "sword", animationType: "sword", attack: 83, chargeTime: 32, combo: 5, },
	{ name: "Stoneblade", l: l("Swords 8"), damageType: "sword", animationType: "sword", attack: 95, chargeTime: 32, combo: 5, },
	{ name: "Durandal", l: l("Swords 9"), damageType: "sword", animationType: "sword", attack: 99, chargeTime: 32, combo: 5, },
	{ name: "Great Trango", damageType: "sword", animationType: "sword", attack: 153, chargeTime: 25, combo: 30, },
	{ name: "Karkata", l: l("Karkata"), damageType: "sword", animationType: "sword", attack: 92, chargeTime: 32, combo: 7, },
	{ name: "Simha", l: l("Swords 9"), damageType: "sword", animationType: "sword", attack: 103, chargeTime: 32, combo: 10, },

	{ name: "Dagger", l: l("Daggers 1"), damageType: "dagger", animationType: "dagger", attack: 14, chargeTime: 21, combo: 12, },
	{ name: "Mage Masher", l: l("Daggers 2"), damageType: "dagger", animationType: "dagger", attack: 18, chargeTime: 21, combo: 12, },
	{ name: "Assassin's Dagger", l: l("Daggers 2"), damageType: "dagger", animationType: "dagger", attack: 31, chargeTime: 21, combo: 12, },
	{ name: "Chopper", l: l("Daggers 3"), damageType: "dagger", animationType: "dagger", attack: 40, chargeTime: 21, combo: 12, },
	{ name: "Main Gauche", l: l("Daggers 3"), damageType: "dagger", animationType: "dagger", attack: 46, chargeTime: 21, combo: 5, },
	{ name: "Gladius", l: l("Daggers 4"), damageType: "dagger", animationType: "dagger", attack: 56, chargeTime: 21, combo: 12, elementDamgage: { wind: true }, },
	{ name: "Avenger", l: l("Daggers 4"), damageType: "dagger", animationType: "dagger", attack: 66, chargeTime: 21, combo: 12, },
	{ name: "Orichalcum Dirk", l: l("Daggers 5"), damageType: "dagger", animationType: "dagger", attack: 79, chargeTime: 21, combo: 12, },
	{ name: "Platinum Dagger", l: l("Daggers 5"), damageType: "dagger", animationType: "dagger", attack: 83, chargeTime: 21, combo: 12, },
	{ name: "Zwill Crossblade", l: l("Daggers 6"), damageType: "dagger", animationType: "dagger", attack: 87, chargeTime: 21, combo: 12, elementDamgage: { wind: true }, },
	{ name: "Shikari Nagasa", l: l("Shikari Nagasa & Mina"), damageType: "dagger", animationType: "dagger", attack: 90, chargeTime: 21, combo: 12, },
	{ name: "Mina", l: l("Shikari Nagasa & Mina"), damageType: "dagger", animationType: "dagger", attack: 104, chargeTime: 21, combo: 15, },

	{ name: "Handaxe", l: l("Axes & Hammers 1"), damageType: "hammer", animationType: "hammer", attack: 17, chargeTime: 29, combo: 6, },
	{ name: "Broadaxe", l: l("Axes & Hammers 2"), damageType: "hammer", animationType: "hammer", attack: 36, chargeTime: 29, combo: 6, },
	{ name: "Slasher", l: l("Axes & Hammers 3"), damageType: "hammer", animationType: "hammer", attack: 54, chargeTime: 29, combo: 6, },
	{ name: "Hammerhead", l: l("Axes & Hammers 4"), damageType: "hammer", animationType: "hammer", attack: 81, chargeTime: 29, combo: 6, },
	{ name: "Francisca", l: l("Axes & Hammers 5"), damageType: "hammer", animationType: "hammer", attack: 88, chargeTime: 29, combo: 6, },
	{ name: "Greataxe", l: l("Axes & Hammers 6"), damageType: "hammer", animationType: "hammer", attack: 110, chargeTime: 29, combo: 6, },
	{ name: "Golden Axe", l: l("Axes & Hammers 6"), damageType: "hammer", animationType: "hammer", attack: 120, chargeTime: 29, combo: 6, },

	{ name: "Iron Hammer", l: l("Axes & Hammers 2"), damageType: "hammer", animationType: "hammer", attack: 24, chargeTime: 32, combo: 8, },
	{ name: "War Hammer", l: l("Axes & Hammers 3"), damageType: "hammer", animationType: "hammer", attack: 42, chargeTime: 32, combo: 8, },
	{ name: "Sledgehammer", l: l("Axes & Hammers 4"), damageType: "hammer", animationType: "hammer", attack: 66, chargeTime: 32, combo: 8, },
	{ name: "Morning Star", l: l("Axes & Hammers 5"), damageType: "hammer", animationType: "hammer", attack: 100, chargeTime: 32, combo: 8, },
	{ name: "Scorpion Tail", l: l("Axes & Hammers 7"), damageType: "hammer", animationType: "hammer", attack: 124, chargeTime: 32, combo: 8, },
	{ name: "Vrscika", l: l("Vrscika"), damageType: "hammer", animationType: "hammer", attack: 133, chargeTime: 32, combo: 20, },

	{ name: "Mace", l: l("Maces 1"), damageType: "mace", animationType: "mace", attack: 17, chargeTime: 30, combo: 5, },
	{ name: "Bronze Mace", l: l("Maces 1"), damageType: "mace", animationType: "mace", attack: 24, chargeTime: 30, combo: 5, },
	{ name: "Bhuj", l: l("Maces 2"), damageType: "mace", animationType: "mace", attack: 34, chargeTime: 30, combo: 5, },
	{ name: "Miter", l: l("Maces 2"), damageType: "mace", animationType: "mace", attack: 42, chargeTime: 30, combo: 5, elementDamgage: { water: true }, },
	{ name: "Thorned Mace", l: l("Maces 3"), damageType: "mace", animationType: "mace", attack: 53, chargeTime: 30, combo: 5, },
	{ name: "Chaos Mace", l: l("Maces 3"), damageType: "mace", animationType: "mace", attack: 69, chargeTime: 30, combo: 5, },
	{ name: "Doom Mace", l: l("Maces 4"), damageType: "mace", animationType: "mace", attack: 75, chargeTime: 30, combo: 5, },
	{ name: "Zeus Mace", l: l("Maces 4"), damageType: "mace", animationType: "mace", attack: 81, chargeTime: 30, combo: 5, elementBonus: { dark: true }, },
	{ name: "Grand Mace", l: l("Maces 5"), damageType: "mace", animationType: "mace", attack: 88, chargeTime: 30, combo: 5, },
	{ name: "Bonebreaker", damageType: "gun", animationType: "mace", attack: 10, chargeTime: 30, combo: 10, },
	{ name: "Bone of Byblos", l: l("Maces 5"), damageType: "mace", animationType: "mace", attack: 100, chargeTime: 30, combo: 5, },

	{ name: "Gilt Measure", l: l("Measures 1"), damageType: "gun", animationType: "measure", attack: 5, chargeTime: 32, combo: 0, },
	{ name: "Arc Scale", l: l("Measures 2"), damageType: "gun", animationType: "measure", attack: 10, chargeTime: 32, combo: 0, },
	{ name: "Multiscale", l: l("Measures 2"), damageType: "gun", animationType: "measure", attack: 13, chargeTime: 32, combo: 0, elementDamgage: { fire: true }, },
	{ name: "Cross Scale", l: l("Measures 3"), damageType: "gun", animationType: "measure", attack: 16, chargeTime: 32, combo: 0, elementDamgage: { lightning: true }, },
	{ name: "Caliper", l: l("Measures 3"), damageType: "gun", animationType: "measure", attack: 19, chargeTime: 32, combo: 0, elementDamgage: { wind: true }, },
	{ name: "Euclid's Sextant", l: l("Measures 4"), damageType: "gun", animationType: "measure", attack: 24, chargeTime: 32, combo: 0, elementDamgage: { holy: true }, },

	{ name: "Claymore", l: l("Greatswords 1"), damageType: "sword", animationType: "bigsword", attack: 83, chargeTime: 35, combo: 8, },
	{ name: "Defender", l: l("Greatswords 2"), damageType: "sword", animationType: "bigsword", attack: 90, chargeTime: 35, combo: 5, },
	{ name: "Save the Queen", l: l("Greatswords 2"), damageType: "sword", animationType: "bigsword", attack: 92, chargeTime: 35, combo: 8, },
	{ name: "Ultima Blade", l: l("Greatswords 3"), damageType: "sword", animationType: "bigsword", attack: 109, chargeTime: 35, combo: 8, },
	{ name: "Ragnarok", l: l("Greatswords 4"), damageType: "sword", animationType: "bigsword", attack: 117, chargeTime: 35, combo: 8, },
	{ name: "Excalibur", l: l("Excalibur"), damageType: "sword", animationType: "bigsword", attack: 127, chargeTime: 35, combo: 8, elementDamgage: { holy: true }, },
	{ name: "Tournesol", l: l("Tournesol"), damageType: "sword", animationType: "bigsword", attack: 138, chargeTime: 35, combo: 10, },
	{ name: "Wyrmhero Blade", damageType: "sword", animationType: "bigsword", attack: 131, chargeTime: 99, combo: 80, elementDamgage: { holy: true }, },
	{ name: "Excalipur", l: l("Excalipur"), damageType: "gun", animationType: "bigsword", attack: 1, chargeTime: 20, combo: 20, },
	{ name: "Treaty-Blade", damageType: "sword", animationType: "bigsword", attack: 67, chargeTime: 30, combo: 25, },
	{ name: "Sword of Kings", damageType: "sword", animationType: "bigsword", attack: 53, chargeTime: 30, combo: 20, },

	{ name: "Kumbha", l: l("Kumbha"), damageType: "sword", animationType: "sword", attack: 117, chargeTime: 31, combo: 35, },
	{ name: "Kotetsu", l: l("Katana 1"), damageType: "katana", animationType: "katana", attack: 16, chargeTime: 41, combo: 20, },
	{ name: "Osafune", l: l("Katana 1"), damageType: "katana", animationType: "katana", attack: 26, chargeTime: 31, combo: 20, },
	{ name: "Kogarasumaru", l: l("Katana 2"), damageType: "katana", animationType: "katana", attack: 40, chargeTime: 31, combo: 20, },
	{ name: "Magoroku", l: l("Katana 2"), damageType: "katana", animationType: "katana", attack: 50, chargeTime: 31, combo: 20, },
	{ name: "Murasame", l: l("Katana 3"), damageType: "katana", animationType: "katana", attack: 62, chargeTime: 31, combo: 20, elementDamgage: { water: true }, },
	{ name: "Kiku-ichimonji", l: l("Katana 3"), damageType: "katana", animationType: "katana", attack: 71, chargeTime: 31, combo: 20, },
	{ name: "Yakei", l: l("Katana 4"), damageType: "katana", animationType: "katana", attack: 83, chargeTime: 31, combo: 20, },
	{ name: "Ame-no-Murakumo", l: l("Katana 4"), damageType: "katana", animationType: "katana", attack: 96, chargeTime: 31, combo: 20, elementDamgage: { wind: true }, },
	{ name: "Muramasa", l: l("Katana 4"), damageType: "katana", animationType: "katana", attack: 104, chargeTime: 31, combo: 20, },
	{ name: "Masamune", l: l("Masamune"), damageType: "katana", animationType: "katana", attack: 111, chargeTime: 31, combo: 30, },

	{ name: "Ashura", l: l("Ninja Swords 1"), damageType: "dagger", animationType: "ninja", attack: 72, chargeTime: 22, combo: 12, },
	{ name: "Sakura-saezuri", l: l("Ninja Swords 1"), damageType: "dagger", animationType: "ninja", attack: 77, chargeTime: 22, combo: 15, },
	{ name: "Kagenui", l: l("Ninja Swords 1"), damageType: "dagger", animationType: "ninja", attack: 81, chargeTime: 22, combo: 18, },
	{ name: "Koga Blade", l: l("Ninja Swords 3"), damageType: "dagger", animationType: "ninja", attack: 87, chargeTime: 22, combo: 22, elementDamgage: { earth: true }, },
	{ name: "Iga Blade", l: l("Ninja Swords 2"), damageType: "dagger", animationType: "ninja", attack: 87, chargeTime: 22, combo: 22, elementDamgage: { water: true }, },
	{ name: "Orochi", l: l("Ninja Swords 1"), damageType: "dagger", animationType: "ninja", attack: 94, chargeTime: 22, combo: 25, },
	{ name: "Yagyu Darkblade", l: l("Yagyu Darkblade & Mesa"), damageType: "dagger", animationType: "ninja", attack: 98, chargeTime: 24, combo: 28, elementDamgage: { dark: true }, },
	{ name: "Mesa", l: l("Yagyu Darkblade & Mesa"), damageType: "dagger", animationType: "ninja", attack: 102, chargeTime: 22, combo: 32, },

	{ name: "Javelin", l: l("Spears 1"), damageType: "sword", animationType: "spear", attack: 16, chargeTime: 28, combo: 4, },
	{ name: "Spear", l: l("Spears 1"), damageType: "sword", animationType: "spear", attack: 26, chargeTime: 28, combo: 4, },
	{ name: "Partisan", l: l("Spears 2"), damageType: "sword", animationType: "spear", attack: 34, chargeTime: 28, combo: 4, },
	{ name: "Heavy Lance", l: l("Spears 2"), damageType: "sword", animationType: "spear", attack: 42, chargeTime: 28, combo: 4, },
	{ name: "Storm Spear", l: l("Spears 3"), damageType: "sword", animationType: "spear", attack: 53, chargeTime: 28, combo: 4, elementDamgage: { lightning: true }, },
	{ name: "Obelisk", l: l("Spears 3"), damageType: "sword", animationType: "spear", attack: 68, chargeTime: 28, combo: 4, },
	{ name: "Halberd", l: l("Spears 4"), damageType: "sword", animationType: "spear", attack: 75, chargeTime: 28, combo: 4, },
	{ name: "Trident", l: l("Spears 4"), damageType: "sword", animationType: "spear", attack: 85, chargeTime: 28, combo: 4, elementDamgage: { ice: true }, },
	{ name: "Holy Lance", l: l("Spears 5"), damageType: "sword", animationType: "spear", attack: 91, chargeTime: 28, combo: 4, elementDamgage: { holy: true }, },
	{ name: "Gungnir", l: l("Spears 5"), damageType: "sword", animationType: "spear", attack: 95, chargeTime: 28, combo: 4, elementDamgage: { fire: true }, },
	{ name: "Dragon Whisker", l: l("Dragon Whisker"), damageType: "sword", animationType: "spear", attack: 100, chargeTime: 28, combo: 4, },
	{ name: "Vrsabha", l: l("Vrsabha"), damageType: "sword", animationType: "spear", attack: 108, chargeTime: 28, combo: 10, },
	{ name: "Zodiac Spear", l: l("Zodiac Spear"), damageType: "sword", animationType: "spear", attack: 141, chargeTime: 28, combo: 4, },

	{ name: "Oaken Pole", l: l("Poles 1"), damageType: "pole", animationType: "pole", attack: 15, chargeTime: 25, combo: 15, },
	{ name: "Cypress Pole", l: l("Poles 2"), damageType: "pole", animationType: "pole", attack: 22, chargeTime: 25, combo: 15, elementDamgage: { earth: true }, },
	{ name: "Battle Bamboo", l: l("Poles 2"), damageType: "pole", animationType: "pole", attack: 34, chargeTime: 25, combo: 15, },
	{ name: "Musk Stick", l: l("Poles 3"), damageType: "pole", animationType: "pole", attack: 39, chargeTime: 25, combo: 15, },
	{ name: "Iron Pole", l: l("Poles 3"), damageType: "pole", animationType: "pole", attack: 46, chargeTime: 25, combo: 15, },
	{ name: "Six-fluted Pole", l: l("Poles 4"), damageType: "pole", animationType: "pole", attack: 59, chargeTime: 25, combo: 15, elementBonus: { water: true }, },
	{ name: "Gokuu Pole", l: l("Poles 4"), damageType: "pole", animationType: "pole", attack: 72, chargeTime: 25, combo: 15, },
	{ name: "Zephyr Pole", l: l("Poles 5"), damageType: "pole", animationType: "pole", attack: 77, chargeTime: 25, combo: 15, elementDamgage: { wind: true }, },
	{ name: "Ivory Pole", l: l("Poles 5"), damageType: "pole", animationType: "pole", attack: 83, chargeTime: 25, combo: 15, },
	{ name: "Sweep", l: l("Poles 6"), damageType: "pole", animationType: "pole", attack: 88, chargeTime: 25, combo: 15, },
	{ name: "Eight-fluted Pole", l: l("Poles 6"), damageType: "pole", animationType: "pole", attack: 91, chargeTime: 25, combo: 15, },
	{ name: "Whale Whisker", l: l("Whale Whisker"), damageType: "pole", animationType: "pole", attack: 108, chargeTime: 25, combo: 15, },
	{ name: "Kanya", l: l("Kanya"), damageType: "pole", animationType: "pole", attack: 112, chargeTime: 25, combo: 35, },

	{ name: "Rod", l: l("Rods 1"), damageType: "sword", animationType: "rod", attack: 16, chargeTime: 33, mag: +2, },
	{ name: "Serpent Rod", l: l("Rods 1"), damageType: "sword", animationType: "rod", attack: 25, chargeTime: 33, mag: +2, elementDamgage: { ice: true }, },
	{ name: "Healing Rod", l: l("Rods 2"), damageType: "gun", animationType: "rod", attack: 7, chargeTime: 33, mag: +2, },
	{ name: "Gaia Rod", l: l("Rods 2"), damageType: "sword", animationType: "rod", attack: 43, chargeTime: 33, mag: +2, elementDamgage: { earth: true }, },
	{ name: "Power Rod", l: l("Rods 3"), damageType: "sword", animationType: "rod", attack: 56, chargeTime: 33, mag: +3, },
	{ name: "Empyrean Rod", l: l("Rods 3"), damageType: "sword", animationType: "rod", attack: 60, chargeTime: 33, mag: +2, },
	{ name: "Holy Rod", l: l("Rods 4"), damageType: "sword", animationType: "rod", attack: 63, chargeTime: 33, mag: +4, elementDamgage: { holy: true }, elementBonus: { holy: true }, },
	{ name: "Rod of Faith", l: l("Rod of Faith"), damageType: "gun", animationType: "rod", attack: 21, chargeTime: 33, mag: +6, },

	{ name: "Oak Staff", l: l("Staves 1"), damageType: "sword", animationType: "staff", attack: 15, chargeTime: 34, mag: +2, },
	{ name: "Cherry Staff", l: l("Staves 2"), damageType: "sword", animationType: "staff", attack: 20, chargeTime: 34, mag: +3, elementBonus: { wind: true }, },
	{ name: "Wizard's Staff", l: l("Staves 2"), damageType: "sword", animationType: "staff", attack: 26, chargeTime: 34, mag: +4, },
	{ name: "Flame Staff", l: l("Staves 3"), damageType: "sword", animationType: "staff", attack: 34, chargeTime: 34, mag: +4, elementBonus: { fire: true }, },
	{ name: "Storm Staff", l: l("Staves 3"), damageType: "sword", animationType: "staff", attack: 36, chargeTime: 34, mag: +4, elementBonus: { lightning: true }, },
	{ name: "Glacial Staff", l: l("Staves 4"), damageType: "sword", animationType: "staff", attack: 38, chargeTime: 34, mag: +5, elementBonus: { ice: true }, },
	{ name: "Golden Staff", l: l("Staves 4"), damageType: "sword", animationType: "staff", attack: 42, chargeTime: 34, mag: +6, },
	{ name: "Judicer's Staff", l: l("Staves 5"), damageType: "sword", animationType: "staff", attack: 48, chargeTime: 34, mag: +7, },
	{ name: "Cloud Staff", l: l("Staves 5"), damageType: "sword", animationType: "staff", attack: 49, chargeTime: 34, mag: +7, elementBonus: { lightning: true, wind: true, water: true }, },
	{ name: "Staff of the Magi", l: l("Staff of the Magi"), damageType: "sword", animationType: "staff", attack: 53, chargeTime: 34, mag: +8, elementBonus: { ice: true, wind: true, holy: true }, },

	{ name: "Shortbow", l: l("Bows 1"), damageType: "dagger", animationType: "bow", attack: 15, chargeTime: 36, combo: 5, },
	{ name: "Silver Bow", l: l("Bows 2"), damageType: "dagger", animationType: "bow", attack: 19, chargeTime: 36, combo: 5, },
	{ name: "Aevis Killer", l: l("Bows 2"), damageType: "dagger", animationType: "bow", attack: 25, chargeTime: 36, combo: 5, },
	{ name: "Killer Bow", l: l("Bows 3"), damageType: "dagger", animationType: "bow", attack: 36, chargeTime: 36, combo: 5, },
	{ name: "Longbow", l: l("Bows 3"), damageType: "dagger", animationType: "bow", attack: 48, chargeTime: 36, combo: 0, },
	{ name: "Elfin Bow", l: l("Bows 4"), damageType: "dagger", animationType: "bow", attack: 54, chargeTime: 36, combo: 5, },
	{ name: "Loxley Bow", l: l("Bows 4"), damageType: "dagger", animationType: "bow", attack: 60, chargeTime: 36, combo: 5, },
	{ name: "Giant Stonebow", l: l("Bows 5"), damageType: "dagger", animationType: "bow", attack: 73, chargeTime: 36, combo: 5, },
	{ name: "Burning Bow", l: l("Bows 5"), damageType: "dagger", animationType: "bow", attack: 77, chargeTime: 36, combo: 5, elementBonus: { fire: true }, },
	{ name: "Traitor's Bow", l: l("Bows 6"), damageType: "dagger", animationType: "bow", attack: 82, chargeTime: 36, combo: 5, },
	{ name: "Yoichi Bow", l: l("Bows 6"), damageType: "dagger", animationType: "bow", attack: 89, chargeTime: 36, combo: 5, },
	{ name: "Perseus Bow", l: l("Bows 7"), damageType: "dagger", animationType: "bow", attack: 92, chargeTime: 36, combo: 5, },
	{ name: "Artemis Bow", l: l("Bows 7"), damageType: "dagger", animationType: "bow", attack: 94, chargeTime: 36, combo: 5, },
	{ name: "Sagittarius", l: l("Sagittarius"), damageType: "dagger", animationType: "bow", attack: 97, chargeTime: 36, combo: 5, },
	{ name: "Dhanusha", l: l("Dhanusha"), damageType: "dagger", animationType: "bow", attack: 109, chargeTime: 36, combo: 20, },
	{ name: "Seitengrat", damageType: "dagger", animationType: "bow", attack: 224, chargeTime: 10, combo: 25, },

	{ name: "Bowgun", l: l("Crossbows 1"), damageType: "sword", animationType: "xbow", attack: 21, chargeTime: 24, combo: 7, },
	{ name: "Crossbow", l: l("Crossbows 1"), damageType: "sword", animationType: "xbow", attack: 31, chargeTime: 24, combo: 7, },
	{ name: "Paramina Crossbow", l: l("Crossbows 2"), damageType: "sword", animationType: "xbow", attack: 42, chargeTime: 24, combo: 7, },
	{ name: "Recurve Crossbow", l: l("Crossbows 2"), damageType: "sword", animationType: "xbow", attack: 57, chargeTime: 24, combo: 7, },
	{ name: "Hunting Crossbow", l: l("Crossbows 3"), damageType: "sword", animationType: "xbow", attack: 70, chargeTime: 24, combo: 7, },
	{ name: "Penetrator Crossbow", l: l("Crossbows 3"), damageType: "sword", animationType: "xbow", attack: 79, chargeTime: 24, combo: 7, },
	{ name: "Gastrophetes", l: l("Crossbows 4"), damageType: "sword", animationType: "xbow", attack: 84, chargeTime: 24, combo: 7, },
	{ name: "Tula", l: l("Crossbows 4"), damageType: "sword", animationType: "xbow", attack: 91, chargeTime: 24, combo: 7, },

	{ name: "Altair", l: l("Guns 1"), damageType: "gun", animationType: "gun", attack: 6, chargeTime: 50, combo: 5, },
	{ name: "Capella", l: l("Guns 2"), damageType: "gun", animationType: "gun", attack: 8, chargeTime: 50, combo: 5, },
	{ name: "Vega", l: l("Guns 2"), damageType: "gun", animationType: "gun", attack: 13, chargeTime: 50, combo: 5, },
	{ name: "Sirius", l: l("Guns 3"), damageType: "gun", animationType: "gun", attack: 17, chargeTime: 50, combo: 5, },
	{ name: "Betelgeuse", l: l("Guns 3"), damageType: "gun", animationType: "gun", attack: 22, chargeTime: 50, combo: 5, },
	{ name: "Ras Algethi", l: l("Guns 4"), damageType: "gun", animationType: "gun", attack: 29, chargeTime: 50, combo: 5, },
	{ name: "Aldebaran", l: l("Guns 4"), damageType: "gun", animationType: "gun", attack: 33, chargeTime: 50, combo: 5, },
	{ name: "Spica", l: l("Guns 5"), damageType: "gun", animationType: "gun", attack: 38, chargeTime: 50, combo: 5, },
	{ name: "Antares", l: l("Guns 5"), damageType: "gun", animationType: "gun", attack: 41, chargeTime: 50, combo: 5, },
	{ name: "Arcturus", l: l("Guns 6"), damageType: "gun", animationType: "gun", attack: 45, chargeTime: 50, combo: 5, },
	{ name: "Fomalhaut", l: l("Guns 6"), damageType: "gun", animationType: "gun", attack: 52, chargeTime: 50, combo: 5, },
	{ name: "Mithuna", l: l("Mithuna"), damageType: "gun", animationType: "gun", attack: 66, chargeTime: 50, combo: 10, },

	{ name: "Hornito", l: l("Hand-bombs 1"), damageType: "hammer", animationType: "handbomb", attack: 66, chargeTime: 33, },
	{ name: "Fumarole", l: l("Hand-bombs 2"), damageType: "hammer", animationType: "handbomb", attack: 71, chargeTime: 33, elementBonus: { water: true }, },
	{ name: "Tumulus", l: l("Hand-bombs 2"), damageType: "hammer", animationType: "handbomb", attack: 76, chargeTime: 33, },
	{ name: "Caldera", l: l("Hand-bombs 3"), damageType: "hammer", animationType: "handbomb", attack: 83, chargeTime: 33, },
	{ name: "Volcano", l: l("Hand-bombs 3"), damageType: "hammer", animationType: "handbomb", attack: 90, chargeTime: 33, },
	{ name: "Makara", l: l("Makara"), damageType: "hammer", animationType: "handbomb", attack: 96, chargeTime: 33, },
];

export default Weapon;
/*
(() => {
	const elts = [...document.querySelectorAll("tbody")];
	let s = "";
	d(0, "unarmed", "unarmed");
	d(1, "sword", "sword");
	d(2, "dagger", "dagger");
	d(3, "hammer", "hammer");
	d(4, "hammer", "hammer");
	d(5, "mace", "mace");
	d(6, "gun", "measure");
	d(7, "sword", "bigsword");
	d(8, "katana", "katana");
	d(9, "dagger", "ninja");
	d(10, "sword", "spear");
	d(11, "pole", "pole");
	d(12, "sword", "rod");
	d(13, "sword", "staff");
	d(14, "dagger", "bow");
	d(15, "sword", "xbow");
	d(16, "gun", "gun");
	d(17, "hammer", "handbomb");

	
	function d(index, dmg, anim) {
		const tbody = elts[index];
		const rows = [...tbody.querySelectorAll("tr")];
		const headers = [...rows[0].children].map(c => c.textContent.trim());

		const ati = headers.indexOf("Atk");
		const cti = headers.indexOf("CT");
		let cbi = headers.indexOf("Cmb.");
		if (cbi < 0) {
			cbi = headers.indexOf("Crt.");
		}
		const mag = headers.indexOf("Mgk Pwr");
		for (let i = 1; i < rows.length;) {
			const cells = [...rows[i].children];

			let name = cells[0].querySelector("a").textContent;
			let licelt = cells[cells.length - 1].querySelector("a");

			let ss = `\t{ name: "${name}", `;
			if (licelt) {
				ss += `l: l("${licelt.textContent}"), `;
			}
			ss += `damageType: "${dmg}", `;
			ss += `animationType: "${anim}", `;
			ss += `attack: ${cells[ati].textContent.trim()}, `;
			ss += `chargeTime: ${cells[cti].textContent.trim()}, `;
			if (cbi >= 0) {
				ss += `combo: ${cells[cbi].textContent.trim().split("%")[0]}, `;
			}
			if (mag >= 0) {
				ss += `mag: ${cells[mag].textContent.trim()}, `;
			}
			ss += "},\r\n";
			s += ss;
			i += Number(cells[0].getAttribute("rowspan"));
		}
		s += "\r\n";
	}

	copy(s);
})();
*/
