import Joi from 'joi';
import {
  mainSchema,
} from './schema';
import {
  getAllColors,
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
});
