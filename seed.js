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
            { name: 'leeks', color: 'green', planted_on: new Date() }
        ])
    })
    .catch(err => {
        console.log(err);
        db.close();
    });


