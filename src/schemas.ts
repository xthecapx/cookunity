import Joi from 'joi';

export const schemas = {
    tracesPOST: Joi.object().keys({
        ip: Joi.string().ip({
            version: [
                'ipv4',
            ],
        }).required()
    }),
};
