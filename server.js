#!/usr/bin/env node

import express from 'express';
import morgan from 'morgan';
import { Config } from './config/config';
import router from './routes';

const app = express();

app.use(morgan('combined'));
app.use('/api', router);

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
  });
}

startServer(Config.PORT);
