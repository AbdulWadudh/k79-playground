# TURBOREPO

Welcome to Turborepo! Let's get you set up with a new codebase.

Created a new Turborepo with the following:

apps

- apps/docs
- apps/web

packages

- packages/eslint-config-custom
- packages/tsconfig
- packages/ui

## Inside that directory, you can run several commands:

Build all apps and packages

```
bun run build
```

Develop all apps and packages

```
bun run dev
```

Lint all apps and packages

```
bun run lint
```

Turborepo will cache locally by default. For an additional speed boost, enable Remote Caching with Vercel by entering the following command:

```
bunx turbo login
```

## Remote Caching

Remote Caching shares your cached Turborepo task outputs and logs across

all your team’s Vercel projects. It also can share outputs
with other services that enable Remote Caching, like CI/CD systems.
This results in faster build times and deployments for your team.
For more info, see https://turbo.build/repo/docs/core-concepts/remote-caching

Success! Turborepo CLI authorized for Mohammed Abdul Wadudh Samdani

#### To disable Remote Caching, run:

```
npx turbo unlink
```

---
