var fs = require('fs');
var exec = require('child_process').exec;

var dir = 'npm';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.createReadStream('src/sdk.js').pipe(fs.createWriteStream('npm/sdk.js'));

exec('babel src/sdk.js -o npm/sdk-min.js --minified', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
  }
  console.log(stdout);

  console.log('prebublish done');
});