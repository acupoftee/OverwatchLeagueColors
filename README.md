<p align=center>
<img src="https://acupoftee.github.io/images/logos.jpg" height="300">
</p>
<h1 align=center>Overwatch League Colors</h1>
<p align=center>🎨Retrieves Overwatch League team colors!</p>

[![Build Status](https://travis-ci.org/acupoftee/overwatch-league-colors.svg?branch=master)](https://travis-ci.org/acupoftee/overwatch-league-colors)

## About
This module retrieves the official RGB and hexadecimal color codes for all Overwatch League teams. Each team has a primary color, secondary color, and tertiary color used for their official branding. This is a useful module to use for building visual Overwatch League projects.
## Example Usage
```js
// We'll use chalk for displaying color on the console
const chalk = require('chalk');
const { getPrimaryColor, getTeamName } = require('owl-colors');

// Uses the official team abbreviation for 
// Boston Uprising to get the primary hex color
const bostonUprising = 'BOS';
const {hex: uprisingColors} = getPrimaryColor(bostonUprising);

// finds Boston Uprising's official team name
// and displays it on the console
const name = getTeamName(bostonUprising);
console.log(chalk.bgHex(uprisingColors).bold(name));
```
#### Results: 
<img src="https://acupoftee.github.io/images/example.png">

### Example Usage with Node Canvas
Here's an example images used to generate 
these banners similar to those found on https://overwatchleague.com during live matches.

Lets recreate the promotional banner for the match between Paris Eternal and Atlanta Reign (logo code omitted):
```js
const { createCanvas, loadImage} = require('canvas');
const { getPrimaryColor, getSecondaryColor } = require('owl-colors');

// We'll initialize our canvas variables here
const canvas = createCanvas(500, 250);
const ctx = canvas.getContext('2d');
let width = 150, height = 150;
let side1 = 20, side2 = 20;

// gets the primary and secondary 
// hex colors for Paris Eternal
const parisPrimary = getPrimaryColor('PAR').hex;
const parisSecondary = getSecondaryColor('PAR').hex;

// same thing for Atlanta Reign
const atlPrimary = getPrimaryColor('ATL').hex;
const atlSecondary = getSecondaryColor('ATL').hex;

// We'll draw our canvas here.
// NOTE: logo code is ommitted here for relevance
ctx.fillStyle = parisPrimary;
ctx.fillRect(0, 0, 250, 250);

ctx.fillStyle = atlPrimary;
ctx.fillRect(250, 0, 250, 250);

// we add our secondary collor
// accents here on the sides of the banner
ctx.fillStyle = parisSecondary;
ctx.fillRect(0, 0, side1, 250);

ctx.fillStyle = atlSecondary;
ctx.fillRect(canvas.width - side2, 0, side2, 250);
```
#### Results: 
<img src="https://acupoftee.github.io/images/banner-1.png">
