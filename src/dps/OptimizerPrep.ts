import { Magick } from "./ability/Magick";
import { Technick } from "./ability/Technick";
import { AllElements, Environment, Equipment, Profile } from "./Profile";

/** Given a profile and an environment, determine what stats could be beneficial */
export function getOptimizerKeys(p: Profile, e: Environment) {
	const { ability } = p;
	if (ability.alg === "attack") {
		// Assumes a single weapon has been chosen already!
		return getOptimizerKeysForAttack(p, e);
	} else if (ability.alg === "magick") {
		return getOptimizerKeysForMagick(ability, p, e);
	} else {
		return getOptimizerKeysForTechnick(ability, e);
	}
}

function getOptimizerKeysForTechnick(t: Technick, e: Environment) {
	const ret = new Set<keyof Profile>([
		"spd", // always needed for csmod
	]);

	if (t.name === "Telekinesis") {
		ret.add("attack");
		ret.add("animationType");
	} else if (t.name === "Souleater") {
		ret.add("attack");
		ret.add("str");
	}

	// if we already have these buffs, then the accessories with them won't be relevant
	if (!e.haste) {
		ret.add("haste");
	}
	return ret;
}

function getOptimizerKeysForMagick(m: Magick, p: Profile, e: Environment) {
	const ret = new Set<keyof Profile>([
		"mag",
		"spd", // always needed for csmod
	]);

	for (const element of AllElements) {
		if (m[`${element}Damage` as const]) {
			ret.add(`${element}Bonus` as const);
			break;
		}
	}

	if (e.weather !== "other" || e.terrain !== "other") {
		ret.add("agateRing");
	}

	// if we already have these buffs, then the accessories with them won't be relevant
	for (const k of ["haste", "faith"] as const) {
		if (!e[k]) {
			ret.add(k);
		}
	}
	// if we already have these licenses, then the accessories with them won't be relevant
	for (const k of ["serenity", "spellbreaker"] as const) {
		if (!p[k]) {
			ret.add(k);
		}
	}

	return ret;
}

function getOptimizerKeysForAttack(p: Profile, e: Environment) {
	// can leave out any key that's only found on weapons, or is not relevant to this weapon
	const ret = new Set<keyof Profile>([
		"attack",
		"spd", // always needed for csmod

		// Depending on what other things are potentially available and the environment, some elemental
		// possibilities can be eliminated sometimes.  Let's not worry about that right now?
		"fireDamage",
		"iceDamage",
		"lightningDamage",
		"waterDamage",
		"windDamage",
		"earthDamage",
		"darkDamage",
		"holyDamage",

		// Only bonuses found off of weapons
		"holyBonus",
		"darkBonus",

		"focus",
		"adrenaline",
	]);

	if (p.combo > 0) {
		ret.add("genjiGloves");
	}
	if (e.parry 
		|| e.block > 0
		|| (e.weather === "windy" || e.weather === "windy and rainy") && (p.animationType === "bow" || p.animationType === "xbow")
	) {
		ret.add("cameoBelt");
	}
	if (e.weather !== "other" || e.terrain !== "other") {
		ret.add("agateRing");
	}

	// if we already have these buffs, then the accessories with them won't be relevant
	for (const k of ["berserk", "haste", "bravery"] as const) {
		if (!e[k]) {
			ret.add(k);
		}
	}
	// if we already have these licenses, then the accessories with them won't be relevant
	for (const k of ["focus", "adrenaline"] as const) {
		if (!p[k]) {
			ret.add(k);
		}
	}

	switch (p.damageType) {
		case "unarmed":
			ret.add("str");
			if (!p.brawler) {
				ret.add("brawler");
			}
			break;
		case "sword":
		case "pole":
		case "dagger":
			ret.add("str");
			break;
		case "hammer":
			ret.add("str");
			ret.add("vit");
			break;
		case "mace":
			ret.add("mag");
			break;
		case "katana":
			ret.add("str");
			ret.add("mag");
			break;
		default:
			break;
	}

	return ret;
}

/** Keys that can be found on non-weapons (or for magick/technick, any slot) that potentially have negative results. */
const hazardKeys = new Set<keyof Profile>([
	// TODO: Does it make sense to use the environment to choose these?
	"fireDamage",
	"iceDamage",
	"lightningDamage",
	"waterDamage",
	"windDamage",
	"earthDamage",
	"darkDamage",
	"holyDamage", // Can't actually be found on non-weapons, but less confusing to leave it here
	"agateRing",
	"animationType", // Telekinesis
]);

/** Given a set of potential optimizerKeys, eliminate equipment that has no relevantkeys or is always worse than other equipment. */
export function filterEquippables<T extends Equipment>(eqs: T[], keys: Set<keyof Profile>, allowEmpty: boolean) {
	// Eliminate any item that has no possible value, and then any item that is pareto inferor to another.

	const ret: Equipment[] = [];
	/** hazardKeys make an item uncomparable */
	const haz: Equipment[] = [];

	next_eq:
	for (const eq of eqs) {
		for (const k in eq) {
			if (keys.has(k as keyof Profile)) {
				// Will have some effect.  Add to either haz or ret.
				for (const k2 in eq) {
					if (keys.has(k2 as keyof Profile) && hazardKeys.has(k2 as keyof Profile)) {
						haz.push(eq);
						continue next_eq;
					}
				}
				ret.push(eq);
				continue next_eq;
			}
		}
	}

	for (let i = 0; i < ret.length; i++) {
		inner_eq:
		for (let j = 0; j < ret.length; j++) {
			if (i === j) {
				continue;
			}
			const x = ret[i];
			const y = ret[j];

			for (const _k in x) {
				const k = _k as keyof Profile;
				if (!keys.has(k)) {
					continue;
				}
				if (!(k in y)) {
					continue inner_eq;
				}
				const vx = +x[k]!;
				const vy = +y[k]!;
				if (vx > vy) {
					continue inner_eq;
				}
			}
			// x is pareto inferior to y
			ret.splice(i--, 1);
			break;
		}
	}
	ret.push(...haz);
	const realRet = ret as (T | undefined)[];
	if (!realRet.length) {
		realRet.push(allowEmpty ? undefined : eqs[0]);
	}
	return realRet;
}
