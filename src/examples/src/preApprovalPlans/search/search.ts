import MercadoPago, { PreApprovalPlan } from '@src/index';

/**
 * Mercado Pago Pre Approval Plan.
 *
 * @see {@link https://www.mercadopago.com/developers/en/reference/subscriptions/_preapproval_plan_search/get Documentation }.
 */

const client = new MercadoPago({ accessToken: 'access_token', options: { timeout: 9000 } });

const preApprovalPlan = new PreApprovalPlan(client);

preApprovalPlan.search({
	status: 'active',
	q: 'reason=Yoga',
}).then((result) => console.log(result))
	.catch((error) => console.log(error));
