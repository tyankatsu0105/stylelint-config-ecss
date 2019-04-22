"use strict";

module.exports = {
  plugins: ["stylelint-plugin-ecss"],
  rules: {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "function-comma-space-after": "always",
    "function-url-quotes": "always",
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-no-vendor-prefix": true,
    "max-empty-lines": 2,
    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-trailing-semicolon": "always",
    "selector-list-comma-newline-after": "always-multi-line",
    "string-quotes": "double",
    "value-no-vendor-prefix": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "declaration-block-no-shorthand-property-overrides": true,
    indentation: 4,

    "selector-max-specificity": [
      "0,2,0",
      {
        message: "Thou shalt not nest"
      }
    ],
    "at-rule-blacklist": [
      "extend",
      {
        message: "Avoid @extend"
      }
    ],
    "selector-max-id": [
      0,
      {
        message: "Thou shalt not use ID selectors"
      }
    ],
    "property-no-vendor-prefix": [
      true,
      {
        message:
          "Thou shalt not write vendor prefixes in the authoring style sheets"
      }
    ],
    "property-blacklist": [
      "max-width",
      {
        severity: "warning",
        message: "Thou shalt always write rules mobile first"
      }
    ],
    "selector-class-pattern": [
      "^[a-z][a-z0-9]*(-[A-Z][a-zA-Z0-9]*(_[A-Z][a-zA-Z0-9]*(-[a-z][a-z0-9]*)?)?)?$",
      {
        resolveNestedSelectors: true,
        message: "ECSS selectors is 'nsp-Component_ChildNode-variant'"
      }
    ],
    "ecss/comment-check-prefix-browser-hacks": true,
    "ecss/declaration-comment-magic-numbers-before": true,
    "ecss/background-no-base64": true
  }
};
