let cp = require('child_process');

cp.exec('npm run watch', { cwd: "./front/", }, (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
});
cp.exec('npm run watch', { cwd: "./server/", }, (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
});
let serv = cp.exec('npm start', { cwd: "./server/", }, (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
});
serv.stdout.on('data', data => console.log(data));
serv.stderr.on('data', data => console.error(data));