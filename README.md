# typedoc-md-theme
A simple markdown theme for typedoc.

## Credits
This theme is based on a similar theme by kimamula:
[typedoc-markdown-theme](https://github.com/kimamula/typedoc-markdown-theme)
I only developed this one because the original seems to be a bit out of date, and because 
I want to customize it for my own needs.

## Usage
```
npm install --save-dev typedoc
bin/typedoc --options typedoc.json --source src
```
Note that `bin/typedoc` its not the typedoc cli itself, but a node script wrapper that leverages the 
typedoc api. This is a workaround for modifying typedoc's theming code in order to get correct md
extensions and link urls.