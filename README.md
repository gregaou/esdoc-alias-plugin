# ESDoc Alias Plugin

[![Build Status](https://travis-ci.org/gregaou/esdoc-alias-plugin.svg?branch=master)](https://travis-ci.org/gregaou/esdoc-alias-plugin)

This is a plugin to convert import path inside the AST for using ESDoc with alias.
Tested only with ``babel-plugin-module-alias`` for the moment.
Would work with other systems, like ``webpack resolve.alias``.

For example, using babel-plugin-module-alias like that:

```json
{
  "presets": ["es2015", "stage-1"],
  "plugins": [
    ["module-alias", [
      { "src": "./src/app", "expose": "app"  },
      { "src": "./src/core", "expose": "core"  },
      { "src": "./src/locales", "expose": "locales"  },
      { "src": "./src/app/assets", "expose": "assets"  },
    ]]
  ]
}
```

Can be resolve with ``esdoc-alias-plugin`` with this configuration:

```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {
      "name": "esdoc-alias-plugin",
      "option": {
        "replaces": [
          {"from": "^app/", "to": "src/app/"},
          {"from": "^core/", "to": "src/core/"},
          {"from": "^locales/", "to": "src/locales/"},
          {"from": "^assets/", "to": "src/app/assets/"}
        ]
      }
    }
  ]
}
```

# Install and Usage
```sh
npm install esdoc-alias-plugin
```

setup ``plugin`` property in ``esdoc.json``

```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {
      "name": "esdoc-alias-plugin",
      "option": {
        "replaces": [
          {"from": "^core/", "to": "src/core/"}
        ]
      }
    }
  ]
}
```

execute ESDoc

```json
esdoc -c esdoc.json
```

# LICENSE
MIT

# Author
[Rit Grégoire@gregwarit](https://twitter.com/gregwarit)
