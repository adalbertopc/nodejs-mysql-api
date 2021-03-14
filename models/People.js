class People {
	constructor({ id, firstName, lastName, age, gender, preferences, description, image }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.preferences = preferences;
		this.description = description;
		this.image = image;
	}

	getId() {
		return this.id;
	}

	getFirstName() {
		return this.firstName;
	}

	getLastName() {
		return this.lastName;
	}

	getAge() {
		return this.age;
	}

	getGender() {
		return this.gender;
	}

	getPreferences() {
		return this.preferences;
	}

	getDescription() {
		return this.description;
	}

	getImage() {
		return this.image;
	}
}

module.exports = People;
