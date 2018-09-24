const db = require('./models');

db.sync({ force: true })
  .then(instance => {
    db.close();
  })
  .catch(err => {
    console.log(err);
    db.close();
  });
