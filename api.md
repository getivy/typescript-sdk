# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">PayoutCreateResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutListResponse</a></code>

Methods:

- <code title="post /v1/payouts">client.payouts.<a href="./src/resources/payouts.ts">create</a>({ ...params }) -> PayoutCreateResponse</code>
- <code title="get /v1/payouts/{id}">client.payouts.<a href="./src/resources/payouts.ts">retrieve</a>(id) -> PayoutRetrieveResponse</code>
- <code title="get /v1/payouts">client.payouts.<a href="./src/resources/payouts.ts">list</a>({ ...params }) -> PayoutListResponsesCursorPage</code>

# Conversions

Types:

- <code><a href="./src/resources/conversions/conversions.ts">ConversionCreateResponse</a></code>
- <code><a href="./src/resources/conversions/conversions.ts">ConversionRetrieveResponse</a></code>
- <code><a href="./src/resources/conversions/conversions.ts">ConversionListResponse</a></code>

Methods:

- <code title="post /v1/conversions">client.conversions.<a href="./src/resources/conversions/conversions.ts">create</a>({ ...params }) -> ConversionCreateResponse</code>
- <code title="get /v1/conversions/{id}">client.conversions.<a href="./src/resources/conversions/conversions.ts">retrieve</a>(id) -> ConversionRetrieveResponse</code>
- <code title="get /v1/conversions">client.conversions.<a href="./src/resources/conversions/conversions.ts">list</a>({ ...params }) -> ConversionListResponsesCursorPage</code>

## Quote

Types:

- <code><a href="./src/resources/conversions/quote.ts">QuoteRetrieveResponse</a></code>

Methods:

- <code title="get /v1/conversions/quote">client.conversions.quote.<a href="./src/resources/conversions/quote.ts">retrieve</a>({ ...params }) -> QuoteRetrieveResponse</code>
