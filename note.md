# Upgrade package
```js
// 1. before install
yarn global add npm-check-updates
ncu -u -a
yarn install

// 2. before/after install by yarn
yarn global add syncyarnlock // install syncyarnlock globally
yarn upgrade // update dependencies, updates yarn.lock
syncyarnlock -s -k // updates package.json with versions installed from yarn.lock
yarn install // updates yarn.lock with current version constraint from package.json
```
