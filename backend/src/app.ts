import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { router as messageRouter } from './routes/message';

const app = express();

app.use(bodyParser.json());
app.use(
	cors({
		origin: '*',
	})
);

app.use(messageRouter);

const PORT: number | string = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Running on port ' + PORT));
