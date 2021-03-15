const connection = require('../data/Connection');
const queries = require('../data/queries');
const People = require('../models/People');
class PeopleService {
	getAllPeople(req, res) {
		connection.query(queries.getAllPeople, async (err, rows, fields) => {
			if (!err) {
				if (rows.length) {
					await res.json({
						status: 200,
						message: 'Everything is ok',
						data: rows,
					});
				} else {
					await res.json({
						status: 204,
						message: 'Successfully request but empty data',
						data: rows,
					});
				}
			} else {
				console.log(err);
				await res.json({
					status: 500,
					message: 'Internal server error',
				});
			}
		});
	}
	getPeopleById(req, res) {
		connection.query(queries.getPeopleById, [req.params.id], async (err, rows, fields) => {
			if (!err) {
				if (rows[0].length) {
					await res.json({
						status: 200,
						message: 'Everything is ok',
						data: rows[0],
					});
				} else {
					await res.json({
						status: 404,
						message: `People with ID:${req.params.id} was not found`,
						data: rows[0],
					});
				}
			} else {
				console.log(err);
				await res.json({
					status: 500,
					message: 'Internal server error',
				});
			}
		});
	}

	getPeopleByName(req, res) {
		connection.query(
			queries.getPeopleByName,
			[req.query.firstName],
			async (err, rows, fields) => {
				if (!err) {
					if (rows[0].length) {
						await res.json({
							status: 200,
							message: 'Everything is ok',
							data: rows[0],
						});
					} else {
						await res.json({
							status: 404,
							message: `People with name:${req.query.firstName} was not found`,
							data: rows[0],
						});
					}
				} else {
					console.log(err);
					await res.json({
						status: 500,
						message: 'Internal server error',
					});
				}
			}
		);
	}

	getPeopleByGender(req, res) {
		connection.query(
			queries.getPeopleByGender,
			[req.query.gender],
			async (err, rows, fields) => {
				if (!err) {
					if (rows[0].length) {
						await res.json({
							status: 200,
							message: 'Everything is ok',
							data: rows[0],
						});
					} else {
						await res.json({
							status: 404,
							message: `People with gender:${req.query.firstName} was not found`,
							data: rows[0],
						});
					}
				} else {
					console.log(err);
					await res.json({
						status: 500,
						message: 'Internal server error',
					});
				}
			}
		);
	}

	createPeople(req, res) {
		console.log(req.body);
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
					res.json({
						status: 201,
						message: 'Resource created successfully',
						body: { ...req.body },
					});
				} else {
					console.log(err);
					res.json({ status: 500, message: 'Internal Server Error' });
				}
			}
		);
	}

	deletePeople(req, res) {
		connection.query(queries.deletePeople, [req.params.id], (err, rows, fields) => {
			if (!err) {
				res.json({ status: 200, message: 'Resource deleted successfully' });
			} else {
				console.log(err);
				res.json({ status: 500, message: 'Internal Server Error' });
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
					res.json({ status: 201, message: 'Resource updated successfully' });
				} else {
					console.log(err);
					res.json({ status: 500, message: 'Internal Server Error' });
				}
			}
		);
	}
}

module.exports = PeopleService;
