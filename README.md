<p align=center>
<img src="https://acupoftee.github.io/images/logos.jpg" height="300">
</p>
<h1 align=center>Overwatch League Colors</h1>
<p align=center>🎨 Retrieves Overwatch League team colors.</p>

## Example Usage
```js
// Used for displaying color on console
const chalk = require('chalk');
const {getPrimaryColor, getTeamName} = require('owl-colors');

// Uses the official team abbreviation for 
// Boston Uprising to get the primary hex color
const bostonUprising = 'BOS';
const {hex: uprisingColors} = getPrimaryColor(bostonUprising);

// finds Boston Uprising's official team name
// and displays it on the console
const name = getTeamName(bostonUprising);
console.log(chalk.bgHex(uprisingColors).bold(name));
```
#### Example Results: 
<img src="https://acupoftee.github.io/images/example.png">
