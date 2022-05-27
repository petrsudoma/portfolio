import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { v4 as uuid } from 'uuid';

import { dbDocClient } from '../utils/dbClient';

export const putMessage = async (data: { email: string; message: string }) => {
	await dbDocClient.send(
		new PutCommand({ TableName: 'portfolio-messages', Item: { ID: uuid(), ...data } })
	);
};
