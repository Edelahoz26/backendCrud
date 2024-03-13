const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  //Logica del negocio con faker (lib)
  generate() {
    const limitProduct = 100;
    for (let index = 0; index < limitProduct; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        img: faker.image.url(),
      });
    }
  }

  create() {}

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update() {}

  delete() {}
}

module.exports = ProductsService;
