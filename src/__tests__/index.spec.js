import Joi from 'joi';
import {
  mainSchema, colorSchema, colorsSchema,
} from './schema';
import {
  getAllColors, getPrimaryColor, getSecondaryColor, getTertiaryColor, getColors,
} from '..';

describe('OwlColor', () => {
  describe('getAllColors', () => {
    it('should exist', () => {
      expect(getAllColors).toBeDefined();
    });

    it('should match schema', () => {
      const allColors = getAllColors();
      const validateResult = Joi.validate(allColors, mainSchema);

      expect(validateResult.error).toBe(null);
    });
  });

  describe('getPrimaryColor', () => {
    it('should exist', () => {
      expect(getPrimaryColor).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamPrimaryColor = getPrimaryColor('BB');
      expect(teamPrimaryColor).toBe(undefined);
    });

    it('should match colorSchema is pass includes uppercase abbreviation', () => {
      const teamPrimaryColor = getPrimaryColor('BOS');
      const validateResult = Joi.validate(teamPrimaryColor, colorSchema);
      expect(validateResult.error).toBe(null);
      expect(teamPrimaryColor).toEqual({
        hex: '#174B97',
        rgb: [23, 75, 151],
      });
    });

    it('should have a defined hex string if given a property value', () => {
      const hexColor = getPrimaryColor('BOS').hex;
      expect(hexColor).toEqual('#174B97');
    });
  });

  describe('getSecondaryColor', () => {
    it('should exist', () => {
      expect(getSecondaryColor).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamSecondaryColor = getSecondaryColor('AA');
      expect(teamSecondaryColor).toBe(undefined);
    });

    it('should match colorSchema is pass includes uppercase abbreviation', () => {
      const teamSecondaryColor = getSecondaryColor('BOS');
      const validateResult = Joi.validate(teamSecondaryColor, colorSchema);
      expect(validateResult.error).toBe(null);
      expect(teamSecondaryColor).toEqual({
        hex: '#EFDF00',
        rgb: [239, 223, 0],
      });
    });

    it('should have a defined hex string if given a property value', () => {
      const hexColor = getSecondaryColor('BOS').hex;
      expect(hexColor).toEqual('#EFDF00');
    });
  });

  describe('getTertiaryColor', () => {
    it('should exist', () => {
      expect(getTertiaryColor).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamTertiaryColor = getTertiaryColor('UWU');
      expect(teamTertiaryColor).toBe(undefined);
    });

    it('should match colorSchea if pass includes uppercase abbreviation', () => {
      const teamTertiaryColor = getTertiaryColor('BOS');
      const validateResult = Joi.validate(teamTertiaryColor, colorSchema);
      expect(validateResult.error).toBe(null);
      expect(teamTertiaryColor).toEqual({
        hex: '#000000',
        rgb: [0, 0, 0],
      });
    });

    it('should have a defined hex string if given a property value', () => {
      const hexColor = getTertiaryColor('BOS').hex;
      expect(hexColor).toEqual('#000000');
    });
  });

  describe('getColors', () => {
    it('should exist', () => {
      expect(getColors).toBeDefined();
    });

    it('should return undefined if passed an improper abbreviation', () => {
      const teamColors = getColors('OWO');
      expect(teamColors).toBe(undefined);
    });

    it('should match colorSchea if pass includes uppercase abbreviation', () => {
      const teamColors = getColors('DAL');
      const validateResult = Joi.validate(teamColors, colorsSchema);
      expect(validateResult.error).toBe(null);
      expect(teamColors).toEqual({
        darkBlue: {
          hex: '#032340',
          rgb: [3, 35, 64],
        },
        strongBlue: {
          hex: '#0072ce',
          rgb: [0, 114, 206],
        },
        gray: {
          hex: '#9EA2A2',
          rgb: [158, 162, 162],
        },
      });
    });

    it('should match colorSchea if pass includes lowercase abbreviation', () => {
      const teamColors = getColors('dal');
      const validateResult = Joi.validate(teamColors, colorsSchema);
      expect(validateResult.error).toBe(null);
      expect(teamColors).toEqual({
        darkBlue: {
          hex: '#032340',
          rgb: [3, 35, 64],
        },
        strongBlue: {
          hex: '#0072ce',
          rgb: [0, 114, 206],
        },
        gray: {
          hex: '#9EA2A2',
          rgb: [158, 162, 162],
        },
      });
    });
  });
});
