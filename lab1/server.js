const express = require('express');

const app = express();

const PORT = 8080;

app.get('/api/reverse', (req, res) => {
	res.end(req.query.string.split('').reverse().join(''));
});

app.listen(PORT, () => {
	console.log('Server is listening on', PORT);
});