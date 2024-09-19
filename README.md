# Redis Persist Client

Welcome to the Redis Persist Client Monorepo. This repository contains multiple packages related to Redis persistence. Focus in create async storage for TanStack Query (React Query).

## Table of Contents

- [Introduction](#introduction)
- [Packages](#packages)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This monorepo contains the following packages:

- [@illodev/next-redis-persist-client](./packages/next-redis-persist-client): Redis Async Storage

## Packages

| Package | Version | Description |
| --- | --- | --- |
| [@illodev/next-redis-persist-client](./packages/next-redis-persist-client) | [![npm](https://img.shields.io/npm/v/@illodev/next-redis-persist-client)](https://www.npmjs.com/package/@illodev/next-redis-persist-client) | Redis Async Storage |

## Installation

```bash
npm i @illodev/next-redis-persist-client
```

or

```bash
pnpm add @illodev/next-redis-persist-client
```

or

```bash
yarn add @illodev/next-redis-persist-client
```

or

```bash
bun add @illodev/next-redis-persist-client
```

## Usage

``` tsx
import { createRedisAsyncStorage } from '@illodev/next-redis-persist-client'
import { QueryClient } from '@tanstack/react-query'
import { experimental_createPersister } from '@tanstack/query-persist-client-core'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 30, // 30 seconds
      persister: experimental_createPersister({
        storage: createRedisAsyncStorage({
            socket: {
                host: "redis",
                port: 6379,
                tls: false
            }
        }),
        maxAge: 1000 * 60 * 60 * 12, // 12 hours
      }),
    },
  },
})
```

## Contributing

Please read our [Contributing Guide](./CONTRIBUTING.md) before submitting a Pull Request to the project.

## License

MIT
