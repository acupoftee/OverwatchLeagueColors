import Joi from 'joi';
import {
  mainSchema, colorSchema,
} from './schema';
import {
  getAllColors, getPrimaryColor, getSecondaryColor, getTertiaryColor,
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
  });

  describe('getTertiaryColor', () => {
    it('should exist', () => {
      expect(getTertiaryColor).toBeDefined();
    });

    it('should return undefined if pass excluded team abbreviation', () => {
      const teamTertiaryColor = getTertiaryColor('UWU');
      expect(teamTertiaryColor).toBe(undefined);
    });

    it('should match colorSchea if pass includs uppercase abbreviation', () => {
      const teamTertiaryColor = getTertiaryColor('BOS');
      const validateResult = Joi.validate(teamTertiaryColor, colorSchema);
      expect(validateResult.error).toBe(null);
      expect(teamTertiaryColor).toEqual({
        hex: '#000000',
        rgb: [0, 0, 0],
      });
    });
  });
});
