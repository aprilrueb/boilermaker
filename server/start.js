const { db } = require('./db/models/index.js');
const app = require('./index.js');
const port = process.env.PORT || 3000;

console.log('YESSSSS: ', db.models);

db.sync()
  .then(function(){
    app.listen(port, function () {
      console.log('Knock, knock');
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
    });
  });

