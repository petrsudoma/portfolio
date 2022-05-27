import { Schema } from 'express-validator';

export const postMessageSchema: Schema = {
	email: {
		in: ['body'],
		isEmail: true,
	},
	message: {
		in: ['body'],
		isString: true,
		notEmpty: true,
	},
};
