<<<<<<< HEAD
if(process.env.NODE_ENV === 'production') {
=======
if (process.env.NODE_ENV === 'production') {
>>>>>>> master
  module.exports = require('./keys_prod');
}
else {
  module.exports = require('./keys_dev');
}
