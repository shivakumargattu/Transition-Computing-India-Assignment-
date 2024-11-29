const express = require('express');
const router = express.Router();
const { fetchData } = require('../services/apiService');
const rules = require('../config/rules');

router.get('/evaluate', async (req, res) => {
  try {
    const data = await fetchData();
    const results = rules.map(rule => ({
      description: rule.description,
      status: rule.condition(data) ? 'Passed' : 'Failed'
    }));
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Error evaluating rules' });
  }
});

module.exports = router;
