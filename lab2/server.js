const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8080;

app.use(bodyParser.json());

app.post('/api/validate', (req, res) => {
	var body = req.body;
	
	body.email_v = (body.email && body.email !== '') ? true : false;
	body.nip_v = (body.nip && body.nip !== '') ? true : false;
	body.pesel_v = (body.pesel && body.pesel !== '') ? true : false;
	body.regon_v = (body.regon && body.regon !== '') ? true : false;
	body.kod_v = (body.kod && body.kod !== '') ? true : false;
	
	res.setHeader('content-type', 'application/json');
	res.end(JSON.stringify(req.body));
});

app.listen(PORT, () => {
	console.log('Server is listening on', PORT);
});