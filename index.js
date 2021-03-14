const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.set('port', process.env.PORT || 3500);
app.use(cors());

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/people'));

app.listen(app.get('port'), () => {
	console.log('server listo', app.get('port'));
});
