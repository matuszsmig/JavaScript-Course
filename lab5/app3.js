import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import mongodb from 'mongodb';
const { MongoClient } = mongodb;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.pretty = app.get('env') === 'development';

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/student', async function (req, res, next) {
  try {
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    const db = client.db('AGH');
    const collection = db.collection('collection');
    const students = await collection.find({}).toArray();
    res.render('index', { students });
  } catch (error) {
    console.error('Error retrieving data from MongoDB:', error);
    res.render('index', { students: [] });
  }
});

app.post('/', (req, res) => {
  const name = req.body.name;
  res.render('result', { name });
});

app.listen(8000, function () {
  console.log('The server was started on port 8000');
  console.log('To stop the server, press "CTRL + C"');
});
