#!/usr/bin/env node

import express from 'express';
import AppController from '../controller/appController';

const router = express.Router();

router
  .get('/stats', AppController.getStats)

export default router;
