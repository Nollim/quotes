console.log('ici');
const dotenv = require('dotenv')({ path: '../' });
const result = dotenv.config()
 
if (result.error) {
  throw result.error
}  
   
module.exports = {
  mode: result.env.MODE,
  mysql_host: result.env.MYSQL_HOST
};