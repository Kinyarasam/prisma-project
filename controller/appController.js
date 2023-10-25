#!/usr/bin/env node

import redisClient from "../utils/redis";

class AppController {
  static getStats(req, res) {
    return res.status(200).json({ redis: redisClient.isAlive() })
  }
}

export default AppController;
