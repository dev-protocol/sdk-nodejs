import MercadoPago, { OAuth } from '@src/index';

const client = new MercadoPago({ accessToken: 'access_token', options: { timeout: 5000 } });

const oauth = new OAuth(client);

oauth.getAuthorizationURL({
	client_id: '<your-client-id>',
	state: '12345',
	redirect_uri: 'redirect-uri',
});
