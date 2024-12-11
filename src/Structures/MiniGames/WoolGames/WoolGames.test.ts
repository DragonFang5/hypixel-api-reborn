import CaptureTheWool from './CaptureTheWool.js';
import SheepWars from './SheepWars.js';
import WoolGames from './WoolGames.js';
import WoolWars from './WoolWars.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { WoolGamesPrivateGameConfig } from '../../../Types/Player.js';

test('WoolGames', () => {
  const data = new WoolGames({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(WoolGames);
  expectTypeOf(data).toEqualTypeOf<WoolGames>();
  expect(data.layers).toBeDefined();
  expect(data.layers).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.layers).toEqualTypeOf<number>();
  expect(data.xp).toBeDefined();
  expect(data.xp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.xp).toEqualTypeOf<number>();
  expect(data.exactLevel).toBeDefined();
  expect(data.exactLevel).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.exactLevel).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.coins).toBeDefined();
  expect(data.coins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.ownedCosmetics).toBeDefined();
  expectTypeOf(data.ownedCosmetics).toEqualTypeOf<string[]>();
  expect(data.privateGamesConfig).toBeDefined();
  expectTypeOf(data.privateGamesConfig).toEqualTypeOf<WoolGamesPrivateGameConfig>();
  expect(data.playtime).toBeDefined();
  expect(data.playtime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.playtime).toEqualTypeOf<number>();
  expect(data.woolWars).toBeDefined();
  expectTypeOf(data.woolWars).toEqualTypeOf<WoolWars>();
  expect(data.captureTheWool).toBeDefined();
  expectTypeOf(data.captureTheWool).toEqualTypeOf<CaptureTheWool>();
  expect(data.sheepWars).toBeDefined();
  expectTypeOf(data.sheepWars).toEqualTypeOf<SheepWars>();
});
