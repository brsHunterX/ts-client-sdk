# SDK Boilerplate

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A starter project that makes creating a SDK Boilerplate extremely easy.

### Usage

```bash
git clone https://github.com/USER/sdk-boilerplate.git YOURFOLDERNAME
cd YOURFOLDERNAME

# Run yarn install and write your library name when asked. That's all!
yarn install
yarn prepare
```

### Features

- **[RollupJS](https://rollupjs.org/)** for multiple optimized bundles following the [standard convention](http://2ality.com/2017/04/setting-up-multi-platform-packages.html) and [Tree-shaking](https://alexjoverm.github.io/2017/03/06/Tree-shaking-with-Webpack-2-TypeScript-and-Babel/)
- Tests, coverage and interactive watch mode using **[Jest](http://facebook.github.io/jest/)**
- **[Prettier](https://github.com/prettier/prettier)** and **[ESlint](https://palantir.github.io/tslint/)** for code formatting and consistency
- Automatic types `(*.d.ts)` file generation

### Yarn scripts

- `yarn test`: Run **[Jest](http://facebook.github.io/jest/)** tests suite
- `yarn build`: Run build SDK
- `yarn serve`: Run **[Browser-Sync](http://facebook.github.io/jest/)** development server
