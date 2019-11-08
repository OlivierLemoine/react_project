let cp = require('child_process');

let react = cp.exec('npm run start', { cwd: "./front/", }, (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
});
react.stdout.on('data', data => console.log(data));
react.stderr.on('data', data => console.error(data));

let ts = cp.exec('npm run watch', { cwd: "./server/", }, (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
});
ts.stdout.on('data', data => console.log(data));
ts.stderr.on('data', data => console.error(data));

let serv = cp.exec('npm start', { cwd: "./server/", }, (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
});
serv.stdout.on('data', data => console.log(data));
serv.stderr.on('data', data => console.error(data));