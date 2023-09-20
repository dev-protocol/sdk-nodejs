/**
 * Mercado Pago Payment Update.
 *
 * @see {@link https://www.mercadopago.com/developers/en/reference/payments/_payments_id/put Documentation }.
 */


import MercadoPago, { Payments } from '@src/index';

const client = new MercadoPago({ accessToken: '<ACCESS_TOKEN>', options: { timeout: 5000 } });

const payment = new Payments(client);

payment.get({
	id: '<PAYMENT_ID>',
}).then(console.log).catch(console.log);

