# TansTack query registry pattern

This repo demonstrates how typescript can be used to maintain a registry that is typesafe.

When the registry is touched or misconfigured, TS will throw an error on build.

> The composition of the component is a simple pattern that ensures tight coupling
> and validation between the query layer and the component layer.

### Fixture pattern

Fixtures can be combined using `./mongo/makemongo.js`.
They can then be served using `./mongo/servemongo.js`.

```shell
npm run makemongo
npm run servemongo
npm run dev
```