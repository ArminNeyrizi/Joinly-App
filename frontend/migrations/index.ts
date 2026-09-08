import * as migration_20260908_153939_init from './20260908_153939_init';

export const migrations = [
  {
    up: migration_20260908_153939_init.up,
    down: migration_20260908_153939_init.down,
    name: '20260908_153939_init'
  },
];
