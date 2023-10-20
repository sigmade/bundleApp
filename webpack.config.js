const path = require('path');
 
const conf = {
   entry: './src/index.js',
   output: {
       path: path.resolve(__dirname, 'dist'),
       filename : 'main.js'
   }
}
 
module.exports = conf;