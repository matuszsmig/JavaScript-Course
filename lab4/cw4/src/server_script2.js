
import http from 'node:http';
import { URL } from 'node:url';
import fs from 'fs-extra';

const counterFilePath = './counter.txt';

if (!fs.existsSync(counterFilePath)) {
  fs.writeFileSync(counterFilePath, '1');
}

let itr;

function read_sync() {
  let data = fs.readFileSync(counterFilePath, 'utf-8');
  itr = parseInt(data.trim()) + 1;
  saveCounter();
}

function read_async() {
  fs.readFile(counterFilePath, 'utf-8', (err, data) => {
    if (err) throw err;
    itr = parseInt(data.trim()) + 1;
    saveCounter();
  });
}

function saveCounter() {
  fs.writeFile(counterFilePath, itr.toString());
}

function requestListener(request, response) {
  console.log('--------------------------------------');
  console.log(`The relative URL of the current request: ${request.url}`);
  console.log(`Access method: ${request.method}`);
  console.log('--------------------------------------');
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (url.pathname === '/' && request.method === 'GET') {
    response.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Your first page</title>
        </head>
        <body>
          <main>
            <h1>First application</h1>
            <form method="GET" action="/submit">
              <select style="width: 200px;" name="option">
                <option value="">—</option>
                <option value="sync">sync</option>
                <option value="async">async</option>
              </select>
              <br>
              <br>
              <input type="text" id="cmd" name="command">
              <br>
              <br>
              <button type="submit" id="submitBtn">Submit</button>
            </form>
          </main>
        </body>
      </html>
    `);

        response.end(); 
    }
    else if (url.pathname === '/submit' && request.method === 'GET') {
        let option = url.searchParams.get('option');
        let command = url.searchParams.get('command');

        if (option === 'sync') {
          read_sync();
        } else if (option === 'async') {
          read_async();
        }

        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.write(`Liczba wywołań: ${itr}`);
        response.end(); 
    }
    else {
        response.writeHead(501, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.write('Error 501: Not implemented');
        response.end();
    }
}

const server = http.createServer(requestListener);
server.listen(8000);
console.log('The server was started on port 8000');
console.log('To stop the server, press "CTRL + C"');