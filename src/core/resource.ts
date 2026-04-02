// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { AugustusNew } from '../client';

export abstract class APIResource {
  protected _client: AugustusNew;

  constructor(client: AugustusNew) {
    this._client = client;
  }
}
