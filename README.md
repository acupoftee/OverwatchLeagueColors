

# Overwatch League Colors
> Retrieves Overwatch League team colors!

[![Build Status](https://travis-ci.org/acupoftee/OverwatchLeagueColors.svg?branch=master)](https://travis-ci.org/acupoftee/OverwatchLeagueColors)

<p align=center>
<img src="https://acupoftee.github.io/images/logos.jpg" height="300">
</p>

# About
This module retrieves the official RGB and hexadecimal color codes for all Overwatch League teams. Each team has a primary color, secondary color, and tertiary color used for their official branding. This is a useful module to use for building visual Overwatch League projects. 

# Installation
```
$ npm install owl-colors
```
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


# API

### getAllColors()
> Retrieves all Overwatch League Colors 
> 
> **Returns:** `Object` an Object containing all color data for all
> Overwatch League teams. All object keys use 3 letter team abbreviation

### getPrimaryColor(<span style="color:gray">abbreviatedName</span>)
> Retrieves a team's primary color.
>  
> **Parameter:** `string` an Overwatch League team name abbreviation (uppercase or lowercase)
>
> **Returns:** `Object` an Object containing primary color data for a
> specified Overwatch League Team. All object keys use 3 letter team abbreviation, 
> or `undefined` if passed an improper team abbreviation.

Example
```js
const { getPrimaryColor } = require('owl-colors');

// Los Angeles Valiant team abbreviation
console.log(getPrimaryColor('VAL'));  
```
Output
```js
{ hex: '#004438', rgb: [ 0, 68, 56 ] }
```

### getSecondaryColor(<span style="color:gray">abbreviatedName</span>)
> Retrieves a team's secondary color.
>  
> **Parameter:** `string` an Overwatch League team name abbreviation (uppercase or lowercase)
>
> **Returns:** `Object` an Object containing secondary color data for a
> specified Overwatch League Team. All object keys use 3 letter team abbreviation, 
> or `undefined` if passed an improper team abbreviation.

Example
```js
const { getSecondaryColor } = require('owl-colors');

// Paris Eternal team abbreviation
console.log(getSecondaryColor('PAR'));  
```
Output
```js
{ hex: '#8D042D', rgb: [ 141, 4, 45 ] }
```

### getTertiaryColor(<span style="color:gray">abbreviatedName</span>)
> Retrieves a team's tertiary color.
>  
> **Parameter:** `string` an Overwatch League team name abbreviation (uppercase or lowercase)
>
> **Returns:** `Object` an Object containing tertiary color data for a
> specified Overwatch League Team. All object keys use 3 letter team abbreviation, 
> or `undefined` if passed an improper team abbreviation.

Example
```js
const { getTertiaryColor } = require('owl-colors');

// Los Angeles Gladiators team abbreviation
console.log(getTertiaryColor('GLA'));  
```
Output
```js
{ hex: '#ffffff', rgb: [ 255, 255, 255 ] }
```

### getColors(<span style="color:gray">abbreviatedName</span>)
> Retrieves all colors from a specific Overwatch League team.
>  
> **Parameter:** `string` an Overwatch League team name abbreviation (uppercase or lowercase)
>
> **Returns:** `Object` an Object containing all hex and RGB color data for a specified Overwatch League Team. All object keys use 3 letter team abbreviation, or `undefined` if passed an improper team abbreviation.

Example
```js
const { getColors } = require('owl-colors');

// San Francisco Shock team abbreviation
console.log(getColors('SFS'));  
```
Output
```js
{ 
  gray: { hex: '#75787B', rgb: [ 117, 120, 123 ] },
  orange: { hex: '#FC4C02', rgb: [ 252, 76, 2 ] },
  gold: { hex: '#CAB64B', rgb: [ 202, 182, 75 ] } 
}
```
### getTeamName(<span style="color:gray">abbreviatedName</span>)
> Retrieves a team's full name.
>  
> **Parameter:** `string` an Overwatch League team name abbreviation (uppercase or lowercase)
>
> **Returns:** `string` an Overwatch League team's full name,
> or `undefined` if passed an improper team abbreviation.

Example
```js
const { getTeamName } = require('owl-colors');

// London Spitfire team abbreviation
console.log(getTeamName('LDN'));  
```
Output
```js
London Spitfire
```

### getColorList(<span style="color:gray">abbreviatedName</span>)
> Retrieves a list of a team's main branding colors
>  
> **Parameter:** `string` an Overwatch League team name abbreviation (uppercase or lowercase)
>
> **Returns:** `string[]` a list of an Overwatch League team's color names
> or `undefined` if passed an improper team abbreviation.

Example
```js
const { getColorList } = require('owl-colors');

// Shanghai Dragons team abbreviation
console.log(getColorList('SHD'));
```
Output
```js
[ 'red', 'black', 'yellow' ]
```
<!-- ***
*Inspired by [NBA-Color](https://www.npmjs.com/package/nba-color)*. -->