//const db =
const { db, Vegetable, Gardener, Plot } = require('./models');

/*
const vegSeed =

console.log('VEG --->', vegSeed) */

db.sync({ force: true })
  .then(() => {
    return Vegetable.bulkCreate([
      { name: 'potato', color: 'brown', planted_on: new Date() },
      { name: 'corn', color: 'yellow', planted_on: new Date() },
      { name: 'tomato', color: 'red', planted_on: new Date() },
      { name: 'leeks', color: 'green', planted_on: new Date() },
    ]);
  })
  .then(() => {
    return Gardener.bulkCreate([
      //   {
      //     name: 'Joe',
      //     age: '20',
      //     favoriteVegetableId: { targetKey: Vegetable.id },
      //   },
      { name: 'Sam', age: '20' , {include: [{association: Gardener.favoriteVegetableId, include: [Vegetable.id]}]},
      { name: 'Joe', age: '20', favoriteVegetableId: Vegetable.id },
      { name: 'Joe', age: '20', favoriteVegetableId: Vegetable.id },
    ]);
  })
  .catch(err => {
    console.log(err);
    db.close();
  });
