# TODO
- [] babel-react-optimize 在production中移除proptypes
- [] transform-class-properties / declare static defaultProps
- [] redux-immutable-state-invariant / 检查是否修改了state(仅dev mode)

```
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant')());
}

```


