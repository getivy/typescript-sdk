// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Augustus } from './index';

export abstract class APIResource {
  protected _client: Augustus;

  constructor(client: Augustus) {
    this._client = client;
  }
}
