#!/usr/bin/env node

class AppController {
  static getStats(req, res) {
    return res.status(200).json({msg:'Working'})
  }
}

export default AppController;
