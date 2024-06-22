# @bruhabruh/eslint-config

## Install

```
npm install --save-dev eslint @bruhabruh/eslint-config
```

## Usage

Add `.eslintrc` file in the project root with the following content:

```json
{
  "extends": "@bruhabruh/eslint-config",
  "root": true
}
```

Add client and server config files in corresponding directories:

```json
{
  "extends": "@bruhabruh/eslint-config/server"
}
```

```json
{
  "extends": "@bruhabruh/eslint-config/client"
}
```

### Prettier

If you are using Prettier, extend root config with the additional rules:

```json
{
  "extends": ["@bruhabruh/eslint-config", "@bruhabruh/eslint-config/prettier"],
  "root": true
}
```

### a11y

If you want to spot accessibility issues, extend root config with the additional rules:

```json
{
  "extends": ["@bruhabruh/eslint-config", "@bruhabruh/eslint-config/a11y"],
  "root": true
}
```

### Order

if you want to enforce a convention in module import order, extend root config with the additional rules:

```json
{
  "extends": [
    "@bruhabruh/eslint-config",
    "@bruhabruh/eslint-config/import-order"
  ],
  "root": true
}
```
