# Stylized

_Make your prototypes look good with a stylish stylesheet!_

## Demo

[https://rildev.github.io/stylized/](https://rildev.github.io/stylized/)

## Usage

### CSS Only

With link tag:

```
<link rel="stylesheet" href="https://rildev.github.io/stylized/style.min.css" />
```

With import:

```
@import url("https://rildev.github.io/stylized/style.min.css");
```

### Optional: CSS & JS

The JS files are optional, they only add none essential functionalities such as a drag to scroll nav and a function to show/hide the GDPR card. These are for demonstration purposes and should be tailored to your specific needs.

With link & script tags:

```
<head>
  ...
  <link rel="stylesheet" href="https://rildev.github.io/stylized/style.min.css" />
</head>
<body>
  ...
  <!-- the following scripts are optional -->
  <!-- show/hide GDPR card -->
  <script src="./scripts/set-gdpr-card-visibility.js"></script>
  <!--  scrollable nav overflow -->
  <script src="https://unpkg.com/scrollbooster@2/dist/scrollbooster.min.js"></script>
  <script src="./scripts/init-scroll-booster.js"></script>
</body>
```

With imports:

```
@import url("https://rildev.github.io/stylized/style.min.css");
@import url("https://rildev.github.io/stylized/scripts/set-gdpr-card-visibility.js");
@import url("https://unpkg.com/scrollbooster@2/dist/scrollbooster.min.js");
@import url("https://rildev.github.io/stylized/scripts/init-scroll-booster.js");
```

### NPM Package

Download the NPM Package:

```
npm install @rildev/stylized
```

With `link` & `script` tags:

```
<head>
  ...
  <link
    rel="stylesheet"
    href="node_modules/@rildev/stylized/style.css"
  />
</head>
<body>
  ...
  <!-- the following scripts are optional -->
  <!-- show/hide GDPR card -->
  <script src="node_modules/@rildev/stylized/scripts/set-gdpr-card-visibility.js"></script>
  <!--  scrollable nav overflow -->
  <script src="node_modules/scrollbooster/dist/scrollbooster.min.js"></script>
  <script src="node_modules/@rildev/stylized/scripts/init-scroll-booster.js"></script>
</body>
```

With `import`:

```
import '@rildev/stylized/style.css';
import '@rildev/stylized/scripts/set-gdpr-card-visibility';
import ScrollBooster from 'scrollbooster';
import '@rildev/stylized/scripts/init-scroll-booster';
```

## Develop

The `index.html` file holds all the structure and the `style.css` file has all the styling.

### Install the project and install it's dependencies:

```
git clone git@github.com:RilDev/stylized.git && cd $_
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
- [ ] find a general fix to the `import from @rildev/stylized/scripts/init-scroll-booster` error
- [ ] refactor style.css
- [ ] change `em` color to #333;
- [ ] add `.color strong` and `.color em` for each color with hsl(x, y%, z - 13%)
- [ ] add `.code` class to highlight code
- [ ] full-width backgrounds add correct text colors on top

## Acknowledgement

- Thanks to [Jeremy Thomas](https://jgthms.com/) and his [Web Design in 4 Minutes](https://jgthms.com/web-design-in-4-minutes/)!
- Thanks to [Chris McCormick](https://github.com/chr15m) for his [Minimal Stylesheet](https://github.com/chr15m/minimal-stylesheet)!
- Thanks to [murmurs](https://github.com/mrmrs) for his [Colors](https://clrs.cc/)!
- Thanks to [Ilya Shubin](https://github.com/ilyashubin) for his [ScrollBooster](https://github.com/ilyashubin/scrollbooster) plugin!

## Copyright

UNLICENSED
