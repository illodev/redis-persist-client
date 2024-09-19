# Redis Persist Client Monorepo

This repository contains multiple packages related to Redis persistence, focusing on creating asynchronous storage for **TanStack Query (React Query)**. The caching mechanism works both **server-side** and **client-side**, leveraging **server actions** in client environments for optimal performance and data persistence.

## Table of Contents

1. [Introduction](#introduction)
2. [Packages](#packages)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)

---

## Introduction

This monorepo provides packages aimed at leveraging Redis for async storage solutions, particularly for **React Query (TanStack Query)** persistence.

The main package included is:

- **@illodev/next-redis-persist-client**: Redis Async Storage for React Query.

---

## Packages

| Package                           | Version | Description                  |
|------------------------------------|---------|------------------------------|
| `@illodev/next-redis-persist-client` | npm     | Redis Async Storage           |

---

## Installation

You can install the package using your preferred package manager:

```bash
# Using npm
npm i @illodev/next-redis-persist-client

# Using pnpm
pnpm add @illodev/next-redis-persist-client

# Using yarn
yarn add @illodev/next-redis-persist-client

# Using bun
bun add @illodev/next-redis-persist-client
```

## Usage

Here’s an example of how to integrate Redis async storage with TanStack Query:

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

### Key Configuration Options

  - Redis Socket Configuration:
    - **host**: Specify the Redis server hostname (e.g., "redis").
    - **port**: Port number where Redis is running (default: 6379).
    - **tls**: Set to true for TLS-enabled Redis connections, otherwise false.

## Contributing

Please read our [Contributing Guide](./CONTRIBUTING.md) before submitting a Pull Request to the project.

## License

MIT
