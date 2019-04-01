module.exports = {
  plugins: ["stylelint-declaration-strict-value"],
  rules: {
    // Thou shalt not use ID selectors
    "selector-max-id": 0,
    // Thou shalt not write vendor prefixes in the authoring style sheets
    "property-no-vendor-prefix": true,
    // Thou shalt use variables for sizing, colours and z-index
    "scale-unlimited/declaration-strict-value": [
      ["/color/", "fill", "stroke", "z-index"],
      {
        ignoreKeywords: {
          "": ["currentColor", "inherit", "transparent"],
          "z-index": 0
        }
      }
    ],
    // ECSS selectors
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]*(-[A-Z][a-zA-Z0-9]*(_[A-Z][a-zA-Z0-9]*(-[a-z][a-zA-Z0-9]*))?)?",
      {
        message: "ECSS selectors is 'nsp-Component_ChildNode-variant'"
      }
    ]
  }
};
