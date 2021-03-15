const express = require('express');
const router = express.Router();
const PeopleService = require('../services/PeopleService');
const ps = new PeopleService();

router.get('/people', (req, res) => {
	if (req.query.firstName) {
		ps.getPeopleByName(req, res);
	} else if (req.query.gender) {
		ps.getPeopleByGender(req, res);
	} else {
		ps.getAllPeople(req, res);
	}
});

router.get('/people/:id', (req, res) => {
	ps.getPeopleById(req, res);
});

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
