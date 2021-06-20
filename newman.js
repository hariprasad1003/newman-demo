var newman = require('newman');

newman.run({
    collection: require('./Postman Collection.postman_collection.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});