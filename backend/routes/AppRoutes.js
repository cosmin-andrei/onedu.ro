const express = require('express');
const AppService = require('../service/AppService');

const router = express.Router();
const appService = new AppService();

router.post('/donations', (req, res) => {
    try {
      const donationData = req.body;
      const newDonation = appService.addDonation(donationData);
      res.status(201).json(newDonation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  router.post('/newsletter', (req, res) => {
    try {
      const { first_name, email } = req.body;
    
      const newsletterData = { first_name, email };
      const response = appService.subscribeToNewsletter(newsletterData);
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

  module.exports = router;