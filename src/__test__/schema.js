import Joi from 'joi';

const hexReg = /^#[a-zA-Z0-9]{6}$/;

const colorSchema = Joi.object().keys({
    hex: Joi.string()
        .regex(hexReg)
        .required(),
    rgb: Joi.array()
        .items(Joi.number())
        .length(3)
        .required(),
});

const colorsSchema = Joi.object()
    .pattern(/[a-zA-Z]/, colorSchema)
    .required();

const mainSchema = Joi.object()
    .length(20)
    .pattern(/[A-Z]{3}/,
    Joi.object().keys({
        fullName: Joi.string().required(),
        primaryColor: Joi.string().required(),
        secondaryColor: Joi.string().required(),
        tertiaryColor: Joi.string().required(),
        colors: colorSchema
    })
);

const colorsListSchema = Joi.array().items(Joi.string().required());

export { colorSchema, colorsSchema, mainSchema, colorsListSchema };