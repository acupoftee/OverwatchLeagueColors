import Joi from 'joi';
import {
  mainSchema, colorSchema,
} from './schema';
import {
  getAllColors, getPrimaryColor, getSecondaryColor,
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
  });
});
