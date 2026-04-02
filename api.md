# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">PayoutCreateResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutListResponse</a></code>

Methods:

- <code title="post /v1/payouts">client.payouts.<a href="./src/resources/payouts.ts">create</a>({ ...params }) -> PayoutCreateResponse</code>
- <code title="get /v1/payouts/{id}">client.payouts.<a href="./src/resources/payouts.ts">retrieve</a>(id) -> PayoutRetrieveResponse</code>
- <code title="get /v1/payouts">client.payouts.<a href="./src/resources/payouts.ts">list</a>({ ...params }) -> PayoutListResponse</code>

# Conversions

Types:

- <code><a href="./src/resources/conversions.ts">ConversionCreateResponse</a></code>
- <code><a href="./src/resources/conversions.ts">ConversionRetrieveResponse</a></code>
- <code><a href="./src/resources/conversions.ts">ConversionListResponse</a></code>

Methods:

- <code title="post /v1/conversions">client.conversions.<a href="./src/resources/conversions.ts">create</a>({ ...params }) -> ConversionCreateResponse</code>
- <code title="get /v1/conversions/{id}">client.conversions.<a href="./src/resources/conversions.ts">retrieve</a>(id) -> ConversionRetrieveResponse</code>
- <code title="get /v1/conversions">client.conversions.<a href="./src/resources/conversions.ts">list</a>({ ...params }) -> ConversionListResponse</code>

# Quotes

Types:

- <code><a href="./src/resources/quotes.ts">QuoteRetrieveResponse</a></code>
- <code><a href="./src/resources/quotes.ts">QuoteRetrieveIndicativeResponse</a></code>

Methods:

- <code title="get /v1/quotes/{id}">client.quotes.<a href="./src/resources/quotes.ts">retrieve</a>(id) -> QuoteRetrieveResponse</code>
- <code title="get /v1/quotes/indicative">client.quotes.<a href="./src/resources/quotes.ts">retrieveIndicative</a>({ ...params }) -> QuoteRetrieveIndicativeResponse</code>
