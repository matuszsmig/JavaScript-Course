const database = 'AGH';
const collection = 'students';

use(database);

// Create a new collection.
db.createCollection(collection);

db.students.insertMany(
    [
        { name: "Lukas", surname: "Podsiadlo", faculty: "IET"},
        { name: "Katarzyna", surname: "Katarzynska", faculty: "MS"},
        { name: "Kacper", surname: "Rudnicki", faculty: "IMR"},
        { name: "Geralt", surname: "Zrivi", faculty: "EAIB"},
        { name: "Robert", surname: "Lewandowski", faculty: "IET"}
    ]
 )

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
