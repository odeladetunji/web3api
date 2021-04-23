const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
require('dotenv').config();
const payloads = require('./data/slacksPayloads');
const model = require('./data/model');
// const fetchAllUsers = require('./routes/fetchAllChats');


var allowCrossDomain = function(req, res, next) {
    
	if('GET' == req.method){ 
		res.set({
			'Access-Control-Allow-Origin': 'http://beloveddais.com'
		});
	}

	if('POST' == req.method){ 
		res.set({
			'Access-Control-Allow-Origin': 'http://beloveddais.com'
		});
	}
	 
	if('OPTIONS' == req.method){ 
		res.set({
			'Access-Control-Allow-Origin': 'http://beloveddias.com',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
		});
		
		res.sendStatus(200); 
	}

   next();

};

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: false })); // urlencoded form parser
app.use(bodyParser.json())  // json parser
app.use('*',cors());

app.use('/web3', web);

server.listen(9000, function(){
	console.log('web3 api is running');
});

