/**
 * A TeamColor object contains a hexadecimal
 * color with it's rgb representation as an 
 * array of RGB values
 */
export interface TeamColor {
    hex: string;
    rgb: [number, number, number];
  }
  
  /**
   * A TeamColors object is a list of 
   * TeamColors, each containing a hexadecimal 
   * string and an array of RGB values
   */
  export interface TeamColors {
    [colorName: string]: TeamColor;
  }
  
  /**
   * A Color object contain's an Overwatch League
   * team's full name, primaryColor, and a list 
   * of associated hex colors
   */
  export interface Colors {
    [teamAbbreviation: string]: {
      fullName: string;
      primaryColor: string;
      colors: TeamColors;
    };
  }
  
/**
 * Returns all Overwatch League Colors
 * @returns {Object} returns an Object containing all
 * Overwatch League teams color data.
 */
  export function getAllColors(): Colors;


/**
 * Returns a team's primary color
 * @param {string} teamAbbreviation an Overwatch League team
 * abbreviation (lowercase or uppercase)
 * @returns {TeamColor} An object containing the team's
 * primary color's Hexadecimal color code and RGB color code.
 */
  export function getPrimaryColor(teamAbbreviation: string): TeamColor;

/**
 * Returns a team's secondary color
 * @param {string} teamAbbreviation an Overwatch League team
 * abbreviation (lowercase or uppercase)
 * @returns {TeamColor} An object containing the team's
 * secondary color's Hexadecimal color code and RGB color code.
 */
  export function getSecondaryColor(teamAbbreviation: string): TeamColor;

/**
 * Returns a team's tertiary color
 * @param {string} teamAbbreviation an Overwatch League team
 * abbreviation (lowercase or uppercase)
 * @returns {TeamColor} An object containing the team's
 * tertiary color's Hexadecimal color code and RGB color code.
 */
  export function getTertiaryColor(teamAbbreviation: string): TeamColor;

/**
 * Returns all colors for a specific Overwatch League Team
 * @param {string} teamAbbreviation Overwatch League team abbreviation
 * @returns {TeamColors} a list of hexadecimal color code and RGB color code
 * for the specified team.
 */
  export function getColors(teamAbbreviation: string): TeamColors;

/**
 * Returns the full team name of a specified
 * Overwatch League Team
 * @param {string} teamAbbreviation Overwatch League team abbreviation
 * @returns {string} an Overwatch League team name
 */
  export function getTeamName(teamAbbreviation: string): string;

/**
 * Returns the color list for the specified team
 * @param {string} teamAbbreviation Overwatch League team abbreviation
 * @returns {string[]} an array of Overwatch League team colors.
 */
  export function getColorList(teamAbbreviation: string): string[];