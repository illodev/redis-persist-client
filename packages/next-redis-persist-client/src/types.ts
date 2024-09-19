import {
  RedisClientType,
  RedisFunctions,
  RedisModules,
  RedisScripts,
} from "redis";

export type RedisClient = RedisClientType<
  RedisModules,
  RedisFunctions,
  RedisScripts
>;
export type StorageOptions = {
  enableLogger?: boolean;
};
