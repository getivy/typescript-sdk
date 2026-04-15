# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">PayoutCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PayoutInitiatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PayoutPaidWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PayoutFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReturnInitiatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReturnPaidWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReturnFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReturnReturnedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(body) -> void</code>

# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">PayoutCreateResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutListResponse</a></code>

Methods:

- <code title="post /v1/payouts">client.payouts.<a href="./src/resources/payouts.ts">create</a>({ ...params }) -> PayoutCreateResponse</code>
- <code title="get /v1/payouts/{id}">client.payouts.<a href="./src/resources/payouts.ts">retrieve</a>(id) -> PayoutRetrieveResponse</code>
- <code title="get /v1/payouts">client.payouts.<a href="./src/resources/payouts.ts">list</a>({ ...params }) -> PayoutListResponsesCursorPage</code>

# Deposits

Types:

- <code><a href="./src/resources/deposits.ts">DepositRetrieveResponse</a></code>

Methods:

- <code title="get /v1/deposits/{id}">client.deposits.<a href="./src/resources/deposits.ts">retrieve</a>(id) -> DepositRetrieveResponse</code>

# Conversions

Types:

- <code><a href="./src/resources/conversions.ts">ConversionCreateResponse</a></code>
- <code><a href="./src/resources/conversions.ts">ConversionRetrieveResponse</a></code>
- <code><a href="./src/resources/conversions.ts">ConversionListResponse</a></code>

Methods:

- <code title="post /v1/conversions">client.conversions.<a href="./src/resources/conversions.ts">create</a>({ ...params }) -> ConversionCreateResponse</code>
- <code title="get /v1/conversions/{id}">client.conversions.<a href="./src/resources/conversions.ts">retrieve</a>(id) -> ConversionRetrieveResponse</code>
- <code title="get /v1/conversions">client.conversions.<a href="./src/resources/conversions.ts">list</a>({ ...params }) -> ConversionListResponsesCursorPage</code>

# Quotes

Types:

- <code><a href="./src/resources/quotes/quotes.ts">QuoteRetrieveResponse</a></code>

Methods:

- <code title="get /v1/quotes/{id}">client.quotes.<a href="./src/resources/quotes/quotes.ts">retrieve</a>(id) -> QuoteRetrieveResponse</code>

## Indicative

Types:

- <code><a href="./src/resources/quotes/indicative.ts">IndicativeRetrieveResponse</a></code>

Methods:

- <code title="get /v1/quotes/indicative">client.quotes.indicative.<a href="./src/resources/quotes/indicative.ts">retrieve</a>({ ...params }) -> IndicativeRetrieveResponse</code>

# Returns

Types:

- <code><a href="./src/resources/returns.ts">ReturnRetrieveResponse</a></code>

Methods:

- <code title="get /v1/returns/{id}">client.returns.<a href="./src/resources/returns.ts">retrieve</a>(id) -> ReturnRetrieveResponse</code>

# WebhookSubscriptions

Types:

- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionRetrieveResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionListResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /v1/webhook_subscriptions">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">create</a>({ ...params }) -> WebhookSubscriptionCreateResponse</code>
- <code title="get /v1/webhook_subscriptions/{id}">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">retrieve</a>(id) -> WebhookSubscriptionRetrieveResponse</code>
- <code title="post /v1/webhook_subscriptions/{id}">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">update</a>(id, { ...params }) -> WebhookSubscriptionUpdateResponse</code>
- <code title="get /v1/webhook_subscriptions">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">list</a>({ ...params }) -> WebhookSubscriptionListResponsesCursorPage</code>
- <code title="delete /v1/webhook_subscriptions/{id}">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">delete</a>(id) -> WebhookSubscriptionDeleteResponse</code>
