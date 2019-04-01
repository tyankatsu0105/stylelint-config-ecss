# stylelint-config-ecss

🚧WIP🚧

A stylelint config based on [ECSS](http://ecss.io/)

# ECSS naming convention

```json
"selector-class-pattern": [
  "^[a-z][a-zA-Z0-9]*(-[A-Z][a-zA-Z0-9]*(_[A-Z][a-zA-Z0-9]*(-[a-z][a-zA-Z0-9]*))?)?",
  {
    message: "ECSS selectors is 'nsp-Component_ChildNode-variant'"
  }
]
```

# The Ten Commandments of Sane Style Sheets

| Commandments | stylelint Rule |
| :----------- | :------------- |


|Thou shalt have a single source of truth for all key selectors
|🛠|
|Thou shalt not nest|🛠|
|Thou shalt not use ID selectors|selector-max-id|
|Thou shalt not write vendor prefixes in the authoring style sheets|property-no-vendor-prefix|
|Thou shalt use variables for sizing, colours and z-index|🛠|
|Thou shalt always write rules mobile first|🛠|
|Use mixins sparingly|🛠|
|Thou shalt comment all magic numbers and browser hacks|🛠|
|Thou shalt not inline images|🛠|
|Thou shalt not write complicated CSS when simple CSS will work just as well
|🛠|
