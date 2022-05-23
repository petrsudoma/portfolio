import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { putMessage } from '../db/message';

export const postMessage = async (req: Request, res: Response) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		await putMessage(req.body);
	} catch (err) {
		return res.status(500).json({ error: err });
	}

	res.status(201).json({ message: 'Message created' });
};
