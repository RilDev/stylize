# Minimal CSS

*Make your prototypes look good with a standard minimal css stylesheet (< 1Kb)!*

## Demo

[https://rildev.github.io/minimal-css/](https://rildev.github.io/minimal-css/)

## Usage

### Link stylesheet

Simply add this link to your index file:

```
<link rel="stylesheet" href="https://rildev.github.io/minimal-css/style.min.css" />
```

### NPM Package

Download the NPM Package:

```
npm install @rildev/minimal-css@1.0.0
```

Include it minified CSS in your index file:

```
<link
  rel="stylesheet"
  href="node_modules/@rildev/minimal-css/style.min.css"
/>
```

Or you can directly import it in your JS file:

```
import from '@rildev/minimal-css/style.min.css';
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

```
git run build
```

Note: there is a `pre-commit hook` that will run this command every time the project is committed.


## Todo

- [x] add `npm run build` to run `uglifycss style.css > style.min.css`
- [x] add `pre-commit` hook to run `npm run build && git add style.min.css`
- [x] add `<header>` and `<footer>` styling
- [x] add `<ul>` styling
- [x] add tag for v1
- [x] publish package on npm!
- [ ] fix the `.full-width` class
- [ ] fix mobile display

## Acknowledgement

- Thanks to [Jeremy Thomas](https://jgthms.com/) and his [Web Design in 4 Minutes](https://jgthms.com/web-design-in-4-minutes/)!
- Thanks to [Chris McCormick](https://github.com/chr15m) for his [Minimal Stylesheet](https://github.com/chr15m/minimal-stylesheet)!


## Copyright

UNLICENSED
