import MercadoPago, { Point } from '@src/index';

/**
 * Mercado Pago Get Devices.
 *
 * @see {@link https://www.mercadopago.com.br/developers/en/reference/integrations_api/_point_integration-api_devices/get Documentation }.
 */
const client = new MercadoPago({
	accessToken: 'access_token',
	options: { timeout: 5000 },
});

const point = new Point(client);

const request = {
	filters: {
		store_id: '123456789',
		pos_id: '123456789',
		limit: 10,
		offset: 0,
	},
};

point
	.getDevices(request)
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
