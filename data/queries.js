const queries = {
	getAllPeople: 'select * from people',
	createPeople: 'call createPeople(?,?,?,?,?,?,?)',
	deletePeople: 'call deletePeople(?)',
	updatePeople: 'call updatePeople(?,?,?,?,?,?,?,?)',
	getPeopleById: 'call getPeopleById(?)',
	getPeopleByName: 'call getPeopleByName(?)',
	getPeopleByGender: 'call getPeopleByGender(?)',
};

module.exports = queries;
