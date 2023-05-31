import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.locals.pretty = app.get('env') === 'development';

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public')); 
app.use(express.urlencoded({ extended: true }));

let students = [
    {
        fname: 'Jan',
        lname: 'Kowalski'
    },
    {
        fname: 'Anna',
        lname: 'Nowak'
    },
];

app.get('/', function (request, response) {
    response.render('index', { students });
});

app.post('/', (req, res) => {
    const name = req.body.name;
  
    res.render('result', { name });
});

app.listen(8000, function () {
    console.log('The server was started on port 8000');
    console.log('To stop the server, press "CTRL + C"');
});
