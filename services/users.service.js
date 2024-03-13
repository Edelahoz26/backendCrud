const { faker } = require('@faker-js/faker');

class userService {
  constructor() {
    this.user = [],
    this.generate()
  }

  generate(){
    const limitUSers = 100;
    for (let index = 0; index < limitUSers; index++) {
      this.user.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
      });
    }
  }
  create() {

  }
  find() {
    return this.user;
  }

  findOne(id) {
    return this.user.find((item) => item.id === id);
  }

  update() {}

  remove() {}
}

module.exports = userService;
