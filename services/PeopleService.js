const connection = require('../data/Connection');
const queries = require('../data/queries');
const People = require('../models/People');
class PeopleService {
	getAllPeople(req, res) {
		connection.query(queries.getAllPeople, async (err, rows, fields) => {
			if (!err) {
				await res.json(rows);
			} else {
				console.log(err);
			}
		});
	}

	getPeopleByName(req, res) {
		console.log(req.query.name);
	}

	createPeople(req, res) {
		const newPeople = new People(req.body);
		connection.query(
			queries.createPeople,
			[
				newPeople.getFirstName(),
				newPeople.getLastName(),
				newPeople.getAge(),
				newPeople.getGender(),
				newPeople.getPreferences(),
				newPeople.getDescription(),
				newPeople.getImage(),
			],
			(err, rows, fields) => {
				if (!err) {
					res.json({ status: 'people creado' });
				} else {
					console.log(err);
					res.json({ status: 'error al crear intente de nuevo' });
				}
			}
		);
	}

	deletePeople(req, res) {
		connection.query(queries.deletePeople, [req.params.id], (err, rows, fields) => {
			if (!err) {
				res.json({ status: 'people creado' });
			} else {
				console.log(err);
				res.json({ status: 'error al crear intente de nuevo' });
			}
		});
	}

	updatePeople(req, res) {
		const updatedPeople = new People(req.body);
		connection.query(
			queries.updatePeople,
			[
				req.params.id,
				updatedPeople.getFirstName(),
				updatedPeople.getLastName(),
				updatedPeople.getAge(),
				updatedPeople.getGender(),
				updatedPeople.getPreferences(),
				updatedPeople.getDescription(),
				updatedPeople.getImage(),
			],
			(err, rows, fields) => {
				if (!err) {
					res.json({ status: 'people UPDATED' });
				} else {
					console.log(err);
					res.json({ status: 'error al MODIFICAR intente de nuevo' });
				}
			}
		);
	}
}

module.exports = PeopleService;
