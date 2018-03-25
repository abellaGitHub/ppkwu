const readline = require('readline');
const request = require('request');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var options = {
	url: 'http://localhost:8080/api/validate',
	body: '',
	method: 'POST',
	json: true
};

rl.question('Email:', (email) => {
	rl.question('NIP:', (nip) => {
		rl.question('PESEL:', (pesel) => {
			rl.question('REGON:', (regon) => {		
				rl.question('Kod pocztowy:', (kod) => {
					var data = {
						email: email,
						nip: nip,
						pesel: pesel,
						regon: regon,
						kod: kod
					};
					options.body = data;
					request.post(options, (err, res, body) => {
						
						if(body.email_v) {
							console.log('Email is valid');
						} else {
							console.log('Email is invalid');
						}
						
						if(body.nip_v) {
							console.log('NIP is valid');
						} else {
							console.log('NIP is invalid');
						}
						
						if(body.pesel_v) {
							console.log('PESEL is valid');
						} else {
							console.log('PESEL is invalid');
						}
						
						if(body.regon_v) {
							console.log('REGON is valid');
						} else {
							console.log('REGON is invalid');
						}
						
						if(body.kod_v) {
							console.log('Kod is valid');
						} else {
							console.log('Kod is invalid');
						}
											
						rl.close();
					});
				});		
			});			
		});		
	});
});