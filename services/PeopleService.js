const connection = require('../data/Connection');
const queries = require('../data/queries');
const People = require('../models/People');
class PeopleService {
	getAllPeople = (req, res) => {
		connection.query('select * from people;', async (err, rows, fields) => {
			if (!err) {
				await res.json(rows);
			} else {
				console.log(err);
			}
		});
	};

	createPeople = (req, res) => {
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
	};
}

module.exports = PeopleService;
