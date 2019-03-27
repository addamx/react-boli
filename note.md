# TODO
- [] babel-react-optimize 在production中移除proptypes
- [] transform-class-properties / declare static defaultProps
- [] redux-immutable-state-invariant / 检查是否修改了state(仅dev mode)

```js
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant')());
}

```


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


// babel upgrade
// - https://juejin.im/post/5b87cab1e51d4538ac05dc54
npx babel-upgrade --write
// 或是安裝 babel-upgrade 在 global 並執行
npm install babel-upgrade -g
babel-upgrade --write


```


