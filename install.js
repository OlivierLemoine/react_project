let cp = require('child_process');

cp.exec('cd front && npm install && cd ../server && npm install', (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
}).on('message', (msg) => console.log(msg));