// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AugustusNew from 'augustus-new';

const client = new AugustusNew({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource quotes', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.quotes.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveIndicative: only required params', async () => {
    const responsePromise = client.quotes.retrieveIndicative({
      source_currency: 'source_currency',
      target_currency: 'target_currency',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveIndicative: required and optional params', async () => {
    const response = await client.quotes.retrieveIndicative({
      source_currency: 'source_currency',
      target_currency: 'target_currency',
      source_amount: '321669910225',
    });
  });
});
