import { createClient, RedisClientOptions } from "redis";

import { RedisClient, StorageOptions } from "@/types";

let client: RedisClient | undefined = undefined;

/**
 * Creates a Redis client and connects it if not already connected.
 *
 * @param options - The options to configure the Redis client.
 * @returns The Redis client instance.
 */
const createClientAndConnect = (options: RedisClientOptions): RedisClient => {
  if (!client) {
    client = createClient(options);
  }

  if (!client.isOpen) {
    client.connect();
  }

  return client;
};

/**
 * Sets an item in the Redis storage.
 *
 * @param options - The options for configuring the Redis client.
 * @param storageOptions - The options for storage configuration.
 * @param key - The key under which the value will be stored.
 * @param value - The value to be stored.
 * @returns A promise that resolves when the item has been set.
 */
export const setItem = async (
  options: RedisClientOptions,
  storageOptions: StorageOptions,
  key: string,
  value: string
) => {
  const client = createClientAndConnect(options);
  if (storageOptions.enableLogger) {
    console.log("Setting key", key);
  }
  await client.set(key, value);
};

/**
 * Retrieves an item from the Redis storage.
 *
 * @param options - The options for configuring the Redis client.
 * @param storageOptions - The options for storage, including logging preferences.
 * @param key - The key of the item to retrieve from Redis.
 * @returns A promise that resolves to the value associated with the specified key.
 */
export const getItem = async (
  options: RedisClientOptions,
  storageOptions: StorageOptions,
  key: string
) => {
  const client = createClientAndConnect(options);
  if (storageOptions.enableLogger) {
    console.log("Getting key", key);
  }
  return client.get(key);
};

/**
 * Removes an item from the Redis storage.
 *
 * @param options - The options for the Redis client.
 * @param storageOptions - The storage options, including logger settings.
 * @param key - The key of the item to be removed.
 * @returns A promise that resolves when the item is removed.
 */
export const removeItem = async (
  options: RedisClientOptions,
  storageOptions: StorageOptions,
  key: string
) => {
  const client = createClientAndConnect(options);
  if (storageOptions.enableLogger) {
    console.log("Removing key", key);
  }
  await client.del(key);
};
