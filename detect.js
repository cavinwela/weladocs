const os = require('os');

const platform = os.platform();

if (platform === 'win32') {
  console.log('windows');
} else if (platform === 'darwin') {
  console.log('mac');
} else {
  console.log('linux');
}
