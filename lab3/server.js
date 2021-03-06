const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8080;

app.use(bodyParser.json());

app.post('/api/email', (req, res) => {
	var body = req.body;
	var email = body.email;
	
	if(email && email !== '' && email.indexOf('@') !== -1) {
		body.valid = true;
	} else {
		body.valid = false;
	}
	
	res.setHeader('content-type', 'application/json');
	res.end(JSON.stringify(req.body));
});

app.listen(PORT, () => {
	console.log('Server is listening on', PORT);
});