const dotenv = require('dotenv');
const connectToDataBase = require('./src/database/connect');

dotenv.config();
connectToDataBase();

require('./modules/express');