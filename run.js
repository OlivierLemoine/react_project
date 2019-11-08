let cp = require('child_process');

cp.exec('cd front && npm run watch');
cp.exec('cd server && npm run watch');
cp.exec('cd server && npm run start');