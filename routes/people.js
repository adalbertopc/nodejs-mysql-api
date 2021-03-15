const express = require('express');
const router = express.Router();
const PeopleService = require('../services/PeopleService');
const ps = new PeopleService();

router.get('/people', (req, res) => {
	if (Object.keys(req.query).length) {
	} else {
		ps.getAllPeople(req, res);
	}
});

//router.get('/people', (req, res) => {});

router.post('/people', (req, res) => {
	ps.createPeople(req, res);
});

router.delete('/people/:id', (req, res) => {
	ps.deletePeople(req, res);
});

router.put('/people/:id', (req, res) => {
	ps.updatePeople(req, res);
});
module.exports = router;
