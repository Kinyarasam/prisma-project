#!/usr/bin/env node

import redis from 'redis';

class RedisClient {
  constructor () {
    this.client = redis.createClient()

    /** Display any errors on the console. */
    this.client.on('error', (err) => {
      console.log(err)
    })

    /**  */
    this.client.on('connect', () => console.log('Redis Connection successful'));
  }

  isAlive() {
    return this.client.connected;
  }
}

const redisClient = new RedisClient();

export default redisClient;
