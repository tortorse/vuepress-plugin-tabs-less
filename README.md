# [vuepress-plugin-element-tabs-less](https://github.com/tortorse/vuepress-plugin-tabs)

<a href="https://www.npmjs.com/package/vuepress-plugin-element-tabs-less"><img src="https://img.shields.io/npm/v/vuepress-plugin-element-tabs-less.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vuepress-plugin-element-tabs-less"><img src="https://img.shields.io/npm/l/vuepress-plugin-element-tabs-less.svg" alt="License"></a>
<a href="https://app.fossa.com/projects/git%2Bgithub.com%2Ftortorse%2Fvuepress-plugin-tabs-less?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftortorse%2Fvuepress-plugin-tabs-less.svg?type=shield"/></a>
<img src="https://img.shields.io/badge/thanks-element-brightgreen.svg"/>
<img src="https://img.shields.io/badge/thanks-vuepress--plugin--tabs-brightgreen"/>

This is another version of [vuepress-plugin-tabs](https://github.com/tortorse/vuepress-plugin-tabs) that replace the css preprocessor  to LESS.This plugin just for `Vue 2.x` and `VuePress 1.x`

If you don't want install python (node-sass need it), you can install this plugin.

Vuepress plugin - markdown custom container to display content in tabs from [Element UI](https://github.com/ElemeFE/element)

## Docs
> https://tortorse.github.io/vuepress-plugin-tabs-less/

## Install
> This plugin requires VuePress >= 1.0.0, for now you can try it via yarn add vuepress@next -D 

```shell
yarn add vuepress-plugin-element-tabs-less -D
```

```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    'vuepress-plugin-element-tabs-less'
  ]
}
```

## Usage

~~~ md
:::: tabs

::: tab title
__markdown content__
:::


::: tab javascript
``` javascript
() => {
  console.log('Javascript code example')
}
```
:::

::::

~~~

## Documents
> Accepted Value Like That
~~~md
:::: tabs type:board-card
::: tab title lazy
__markdown content__
:::
::::
~~~

### Tabs Attributes
|Attribute|Description|Type|Accepted Values|Default|
|:--|:--|:--|:--|:--|
|type|type of Tab|String|card/border-card|border-card|
|tab-position|position of tabs|String|top/right/bottom/left|top|
|stretch|whether width of tab automatically fits its container|Boolean|-|false|


### Tab Attributes
|Attribute|Description|Type|Accepted Values|Default|
|:--|:--|:--|:--|:--|
|label|title of the tab|String|-|-|
|lazy|whether Tab is lazily rendered|Boolean|-|false|

### License

[MIT](./LICENSE)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftortorse%2Fvuepress-plugin-tabs-less.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftortorse%2Fvuepress-plugin-tabs-less?ref=badge_large)