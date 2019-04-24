# stylelint-config-ecss

🚧WIP🚧

A stylelint config based on [ECSS](http://ecss.io/)

# Usage

Install `stylelint` and `stylelint-config-ecss`

```bash
yarn add stylelint stylelint-config-ecss -D
```

Create `stylelint.config.js`

```javascript
"use strict";

module.exports = {
  extends: ["stylelint-config-ecss"]
};
```

# Adopted rules

### Possible errors

#### Color

- [`color-no-invalid-hex`](https://stylelint.io/user-guide/rules/color-no-invalid-hex)

#### Function

- [`function-linear-gradient-no-nonstandard-direction`](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction)

#### Declaration block

- [`declaration-block-no-duplicate-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties)
- [`declaration-block-trailing-semicolon`](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon)
- [`declaration-block-no-shorthand-property-overrides`](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides)

#### Block

- [`block-no-empty`](https://stylelint.io/user-guide/rules/block-no-empty)

### Limit language features

#### Value

- [`property-blacklist`](https://stylelint.io/user-guide/rules/property-blacklist)
- [`value-no-vendor-prefix`](https://stylelint.io/user-guide/rules/value-no-vendor-prefix)

#### Property

- [`property-no-vendor-prefix`](https://stylelint.io/user-guide/rules/property-no-vendor-prefix)

#### Selector

- [`selector-class-pattern`](https://stylelint.io/user-guide/rules/selector-class-pattern)
- [`selector-max-specificity`](https://stylelint.io/user-guide/rules/selector-max-specificity)
- [`selector-max-id`](https://stylelint.io/user-guide/rules/selector-max-id)

#### At-rule

- [`at-rule-blacklist`](https://stylelint.io/user-guide/rules/at-rule-blacklist)

### Stylistic issues

#### Function

- [`function-comma-space-after`](https://stylelint.io/user-guide/rules/function-comma-space-after)
- [`function-url-quotes`](https://stylelint.io/user-guide/rules/function-url-quotes)

#### Number

- [`number-leading-zero`](https://stylelint.io/user-guide/rules/number-leading-zero)
- [`number-no-trailing-zeros`](https://stylelint.io/user-guide/rules/number-no-trailing-zeros)

#### String

- [`string-quotes`](https://stylelint.io/user-guide/rules/string-quotes)

#### Declaration

- [`declaration-colon-space-after`](https://stylelint.io/user-guide/rules/declaration-colon-space-after)
- [`declaration-colon-space-before`](https://stylelint.io/user-guide/rules/declaration-colon-space-before)

#### Media feature

- [`media-feature-colon-space-after`](https://stylelint.io/user-guide/rules/media-feature-colon-space-after)
- [`media-feature-colon-space-before`](https://stylelint.io/user-guide/rules/media-feature-colon-space-before)
- [`media-feature-name-no-vendor-prefix`](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix)

#### Selector list

- [`selector-list-comma-newline-after`](https://stylelint.io/user-guide/rules/selector-list-comma-newline-after)

#### General / Sheet

- [`indentation`](https://stylelint.io/user-guide/rules/indentation)
- [`max-empty-lines`](https://stylelint.io/user-guide/rules/max-empty-lines)

### plugin ecss

- [`ecss/comment-check-prefix-browser-hacks`](https://github.com/tyankatsu0105/stylelint-plugin-ecss/tree/master/lib/rules/comment-check-prefix-browser-hacks)
- [`ecss/declaration-comment-magic-numbers-before`](https://github.com/tyankatsu0105/stylelint-plugin-ecss/tree/master/lib/rules/declaration-comment-magic-numbers-before)
- [`ecss/background-no-base64`](https://github.com/tyankatsu0105/stylelint-plugin-ecss/tree/master/lib/rules/background-no-base64)

# License

MIT

# Roadmap for v1.0

- [x] Include [introduced rules](http://ecss.io/chapter9.html#stylelint)
- [x] Add new rules
- [x] Create [stylelint plugin ecss](https://github.com/tyankatsu0105/stylelint-plugin-ecss)
- [x] Include plugin rules
- [ ] Include [stylelint-declaration-strict-value](https://github.com/AndyOGo/stylelint-declaration-strict-value)
