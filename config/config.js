#!/usr/bin/env node
import dotenv from 'dotenv';

/** Load the environment varibles */
dotenv.config({ path: 'config/config.env' });

export const Config = {
  PORT: process.env.PORT,
};