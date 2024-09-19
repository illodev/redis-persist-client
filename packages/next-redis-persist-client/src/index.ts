import { RedisClientOptions } from "redis";

import { getClientItem, removeClientItem, setClientItem } from "@/client";
import { getServerItem, removeServerItem, setServerItem } from "@/server";
import { StorageOptions } from "@/types";

const isServer = typeof window === "undefined";

export const createRedisAsyncStorage = (
  options: RedisClientOptions,
  storageOptions: StorageOptions | undefined = {
    enableLogger: false,
  }
) => {
  return {
    getItem: async (key: string) => {
      const resolvFunc = isServer ? getServerItem : getClientItem;
      return resolvFunc(options, storageOptions, key);
    },
    setItem: async (key: string, value: string) => {
      const resolvFunc = isServer ? setServerItem : setClientItem;
      return resolvFunc(options, storageOptions, key, value);
    },
    removeItem: async (key: string) => {
      const resolvFunc = isServer ? removeServerItem : removeClientItem;
      return resolvFunc(options, storageOptions, key);
    },
  };
};
