import {
  compose,
  keys,
  prop,
  propOr,
  path,
  ifElse,
  isEmpty,
  identity,
  toUpper,
  __,
} from 'ramda';

import OwlColors from './colors';

/**
 * Returns all Overwatch League color keys
 */
const getColorKeys = compose(keys, prop('colors'));

/**
 * Checks if a property is empty
 * @returns {boolean}
 */
const checkEmpty = ifElse(isEmpty(), () => undefined, identity());

/**
 * Returns a hex color given by a color key
 * @param {string} key a color key
 */
const getColorByKey = key => compose(
  team => {
    const colorKey = prop(key, team);
    return path(['colors', colorKey], team);
  },
  propOr({}, __, OwlColors),
  toUpper,
);

/**
 * Returns all Overwatch League Colors
 * @returns {Object} returns an Object containing all
 * Overwatch League teams color data.
 */
export const getAllColors = () => OwlColors;

/**
 * Returns a team's primary color
 * @param {string} abbreviatedName an Overwatch League team
 * abbreviation (lowercase or uppercase)
 * @returns {Object} An object containing the team's
 * primary color's Hexadecimal color code and RGB color code.
 */
export const getPrimaryColor = getColorByKey('primaryColor');

/**
 * Returns a team's secondary color
 * @param {string} abbreviatedName an Overwatch League team
 * abbreviation (lowercase or uppercase)
 * @returns {Object} An object containing the team's
 * secondary color's Hexadecimal color code and RGB color code.
 */
export const getSecondaryColor = getColorByKey('secondaryColor');

/**
 * Returns a team's tertiary color
 * @param {string} abbreviatedName an Overwatch League team
 * abbreviation (lowercase or uppercase)
 * @returns {Object} An object containing the team's
 * tertiary color's Hexadecimal color code and RGB color code.
 */
export const getTertiaryColor = getColorByKey('tertiaryColor');

/**
 * Returns all colors for a specific Overwatch League Team
 * @param {string} an Overwatch League team abbreviation
 * @returns {Object} the hexadecimal color code and RGB color code
 * for the specified team.
 */
export const getColors = compose(
  prop('colors'),
  propOr({}, __, OwlColors),
  toUpper,
);

/**
 * Returns the full team name of a specified
 * Overwatch League Team
 * @param {string} abbreviatedName Overwatch League team abbreviation
 * @returns {string} an Overwatch League team name
 */
export const getTeamName = compose(
  prop('fullName'),
  propOr({}, __, OwlColors),
  toUpper,
);

/**
 * Returns the color list for the specified team
 * @param {string} abbreviatedName Overwatch League team abbreviation
 * @returns {string[]} an array of Overwatch League team colors.
 */
export const getColorList = compose(
  compose(checkEmpty, getColorKeys),
  propOr({}, __, OwlColors),
  toUpper,
);
