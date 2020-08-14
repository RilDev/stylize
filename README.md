# Minimal CSS

*Make your prototypes look good with a standard minimal css stylesheet!*

## Demo

[https://rildev.github.io/minimal-css/](https://rildev.github.io/minimal-css/)

## Usage

### Link stylesheet

Simply add this link to your index.html file:

```
<link rel="stylesheet" href="https://rildev.github.io/minimal-css/style.min.css" />
```

Or add this link to your style.css file:

```
@import url("https://rildev.github.io/minimal-css/style.min.css");
```

### NPM Package

Download the NPM Package:

```
npm install @rildev/minimal-css
```

Include the minified CSS in your index file:

```
<link
  rel="stylesheet"
  href="node_modules/@rildev/minimal-css/style.css"
/>
```

Or you can directly import it in your JS file:

```
import '@rildev/minimal-css/style.css';
```

## Develop

The `index.html` file holds all the structure and the `style.css` file has all the styling.

### Install the project and install it's dependencies:

```
git clone git@github.com:RilDev/minimal-css.git && cd $_
npm i
```
### Start project

```
git start
```

### Update minified CSS file

There is a `pre-commit hook` on the `master branch` that will update and commit the style.min.css file if the style.css file has been modified.

In case you need to manually minify the `style.css` file, you can run the minify script

```
npm run minify
```

### Publish package

Publish a patch

```
npm run package
```

Publish a minor update

```
VERSION=minor npm run package
```

Publish a major update

```
VERSION=major npm run package
```

## Todo

- [ ] add Demo section
- [x] add style form > select
- [x] add style nav
- [x] add style GDPR card
- [x] add style color
- [x] update buttons style

## Acknowledgement

- Thanks to [Jeremy Thomas](https://jgthms.com/) and his [Web Design in 4 Minutes](https://jgthms.com/web-design-in-4-minutes/)!
- Thanks to [Chris McCormick](https://github.com/chr15m) for his [Minimal Stylesheet](https://github.com/chr15m/minimal-stylesheet)!
- Thanks to [murmurs](https://github.com/mrmrs) for his [Colors](https://clrs.cc/)!


## Copyright

UNLICENSED
