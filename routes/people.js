const express = require('express');
const router = express.Router();
const PeopleService = require('../services/PeopleService');
const ps = new PeopleService();

router.get('/people', (req, res) => {
	ps.getAllPeople(req, res);
});

router.post('/people', (req, res) => {
	ps.createPeople(req, res);
});
module.exports = router;
