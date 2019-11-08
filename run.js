let cp = require('child_process');

cp.exec('cd front && npm run watch', (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
});
cp.exec('cd server && npm run watch', (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
});
cp.exec('cd server && npm run start', (err, stdout, stderr) => {
    if (err) {
        throw err;
    }
}).on('message', (msg) => {
    console.log(msg);
});