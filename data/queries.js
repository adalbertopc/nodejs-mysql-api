const queries = {
	getAllPeople: 'select * from people',
	createPeople: 'call createPeople(?,?,?,?,?,?,?)',
	deletePeople: 'call deletePeople(?)',
	updatePeople: 'call updatePeople(?,?,?,?,?,?,?,?)',
};

module.exports = queries;
