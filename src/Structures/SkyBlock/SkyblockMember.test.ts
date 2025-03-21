import SkyblockGarden from './SkyblockGarden.js';
import SkyblockMember from './SkyblockMember.js';
import SkyblockMemberStats from './SkyblockMemberStats.js';
import SkyblockMuseum from './SkyblockMuseum.js';
import SkyblockPet from './SkyblockPet.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  ChocolateFactoryData,
  CrimsonIsle,
  Dungeons,
  HOTM,
  JacobData,
  Skills,
  Slayer
} from '../../Types/Skyblock.js';

test('SkyblockMember', () => {
  const data = new SkyblockMember({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMember);
  expectTypeOf(data).toEqualTypeOf<SkyblockMember>();
  expect(data.uuid).toBeDefined();
  expectTypeOf(data.uuid).toEqualTypeOf<string>();
  expect(data.gameMode).toBeDefined();
  expectTypeOf(data.gameMode).toEqualTypeOf<string | null>();
  expect(data.selected).toBeDefined();
  expectTypeOf(data.selected).toEqualTypeOf<boolean>();
  expect(data.garden).toBeDefined();
  expect(data.garden).toBeNull();
  expectTypeOf(data.garden).toEqualTypeOf<SkyblockGarden | null>();
  expect(data.museum).toBeDefined();
  expect(data.museum).toBeNull();
  expectTypeOf(data.museum).toEqualTypeOf<SkyblockMuseum | null>();
  expect(data.profileName).toBeDefined();
  expectTypeOf(data.profileName).toEqualTypeOf<string>();
  expect(data.profileId).toBeDefined();
  expectTypeOf(data.profileId).toEqualTypeOf<string>();
  expect(data.firstJoinTimestamp).toBeDefined();
  expectTypeOf(data.firstJoinTimestamp).toEqualTypeOf<number | null>();
  expect(data.firstJoinAt).toBeDefined();
  expectTypeOf(data.firstJoinAt).toEqualTypeOf<Date | null>();
  expect(data.experience).toBeDefined();
  expect(data.experience).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.experience).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.hotm).toBeDefined();
  expectTypeOf(data.hotm).toEqualTypeOf<HOTM>();
  expect(data.highestMagicalPower).toBeDefined();
  expect(data.highestMagicalPower).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.highestMagicalPower).toEqualTypeOf<number>();
  expect(data.fairySouls).toBeDefined();
  expect(data.fairySouls).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fairySouls).toEqualTypeOf<number>();
  expect(data.fairyExchanges).toBeDefined();
  expect(data.fairyExchanges).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fairyExchanges).toEqualTypeOf<number>();
  expect(data.skills).toBeDefined();
  expectTypeOf(data.skills).toEqualTypeOf<Skills>();
  expect(data.bestiary).toBeDefined();
  expectTypeOf(data.bestiary).toEqualTypeOf<number>();
  expect(data.slayer).toBeDefined();
  expectTypeOf(data.slayer).toEqualTypeOf<Slayer | null>();
  expect(data.crimsonIsle).toBeDefined();
  expectTypeOf(data.crimsonIsle).toEqualTypeOf<CrimsonIsle>();
  expect(data.dungeons).toBeDefined();
  expectTypeOf(data.dungeons).toEqualTypeOf<Dungeons>();
  expect(data.collections).toBeDefined();
  expectTypeOf(data.collections).toEqualTypeOf<Record<string, number>>();
  expect(data.purse).toBeDefined();
  expect(data.purse).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.purse).toEqualTypeOf<number>();
  expect(data.stats).toBeDefined();
  expectTypeOf(data.stats).toEqualTypeOf<SkyblockMemberStats>();
  expect(data.pets).toBeDefined();
  expectTypeOf(data.pets).toEqualTypeOf<SkyblockPet[]>();
  expect(data.jacob).toBeDefined();
  expectTypeOf(data.jacob).toEqualTypeOf<JacobData>();
  expect(data.chocolate).toBeDefined();
  expectTypeOf(data.chocolate).toEqualTypeOf<ChocolateFactoryData>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.uuid);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
