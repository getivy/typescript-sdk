// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Conversions extends APIResource {
  /**
   * Creates and executes a conversion.
   */
  create(params: ConversionCreateParams, options?: RequestOptions): APIPromise<ConversionCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/v1/conversions', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a conversion by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ConversionRetrieveResponse> {
    return this._client.get(path`/v1/conversions/${id}`, options);
  }

  /**
   * Returns a paginated list of conversions.
   */
  list(
    query: ConversionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversionListResponse> {
    return this._client.get('/v1/conversions', { query, ...options });
  }
}

export interface ConversionCreateResponse {
  /**
   * Unique identifier of the conversion.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the conversion completed, or null.
   */
  completed_at: string | null;

  /**
   * ISO 8601 UTC timestamp when the conversion was created.
   */
  created_at: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ConversionCreateResponse.Failure | null;

  /**
   * Key-value pairs stored with the conversion.
   */
  metadata: { [key: string]: string };

  /**
   * ID of the associated quote, or null.
   */
  quote_id: string | null;

  /**
   * ID of the source account, or null.
   */
  source_account_id: string | null;

  /**
   * Source amount as a string decimal.
   */
  source_amount: string;

  /**
   * Source currency code.
   */
  source_currency: string;

  /**
   * Current status of the conversion.
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * ID of the target account, or null.
   */
  target_account_id: string | null;

  /**
   * Target currency code.
   */
  target_currency: string;

  /**
   * Resource type discriminator.
   */
  type: 'conversion';

  /**
   * ISO 8601 UTC timestamp when the conversion was last updated.
   */
  updated_at: string;
}

export namespace ConversionCreateResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Human-readable description of the failure.
     */
    message: string;
  }
}

export interface ConversionRetrieveResponse {
  /**
   * Unique identifier of the conversion.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the conversion completed, or null.
   */
  completed_at: string | null;

  /**
   * ISO 8601 UTC timestamp when the conversion was created.
   */
  created_at: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ConversionRetrieveResponse.Failure | null;

  /**
   * Key-value pairs stored with the conversion.
   */
  metadata: { [key: string]: string };

  /**
   * ID of the associated quote, or null.
   */
  quote_id: string | null;

  /**
   * ID of the source account, or null.
   */
  source_account_id: string | null;

  /**
   * Source amount as a string decimal.
   */
  source_amount: string;

  /**
   * Source currency code.
   */
  source_currency: string;

  /**
   * Current status of the conversion.
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * ID of the target account, or null.
   */
  target_account_id: string | null;

  /**
   * Target currency code.
   */
  target_currency: string;

  /**
   * Resource type discriminator.
   */
  type: 'conversion';

  /**
   * ISO 8601 UTC timestamp when the conversion was last updated.
   */
  updated_at: string;
}

export namespace ConversionRetrieveResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Human-readable description of the failure.
     */
    message: string;
  }
}

export interface ConversionListResponse {
  data: Array<ConversionListResponse.Data>;

  has_more: boolean;

  next_cursor: string | null;
}

export namespace ConversionListResponse {
  export interface Data {
    /**
     * Unique identifier of the conversion.
     */
    id: string;

    /**
     * ISO 8601 UTC timestamp when the conversion completed, or null.
     */
    completed_at: string | null;

    /**
     * ISO 8601 UTC timestamp when the conversion was created.
     */
    created_at: string;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Data.Failure | null;

    /**
     * Key-value pairs stored with the conversion.
     */
    metadata: { [key: string]: string };

    /**
     * ID of the associated quote, or null.
     */
    quote_id: string | null;

    /**
     * ID of the source account, or null.
     */
    source_account_id: string | null;

    /**
     * Source amount as a string decimal.
     */
    source_amount: string;

    /**
     * Source currency code.
     */
    source_currency: string;

    /**
     * Current status of the conversion.
     */
    status: 'pending' | 'completed' | 'failed';

    /**
     * ID of the target account, or null.
     */
    target_account_id: string | null;

    /**
     * Target currency code.
     */
    target_currency: string;

    /**
     * Resource type discriminator.
     */
    type: 'conversion';

    /**
     * ISO 8601 UTC timestamp when the conversion was last updated.
     */
    updated_at: string;
  }

  export namespace Data {
    /**
     * Failure details when status is failed, otherwise null.
     */
    export interface Failure {
      /**
       * Human-readable description of the failure.
       */
      message: string;
    }
  }
}

export interface ConversionCreateParams {
  /**
   * Body param: ID of the source account to debit.
   */
  source_account_id: string;

  /**
   * Body param: Amount to convert as a string decimal (e.g. "100.50").
   */
  source_amount: string;

  /**
   * Body param: ID of the target account to credit.
   */
  target_account_id: string;

  /**
   * Body param: Key-value pairs stored with the conversion.
   */
  metadata?: { [key: string]: string };

  /**
   * Header param: Idempotency key for safe retries. Reusing a key with an identical
   * request body returns the cached response. Reusing a key with a different body
   * returns 409.
   */
  'Idempotency-Key'?: string;
}

export interface ConversionListParams {
  /**
   * Opaque cursor from a previous next_cursor.
   */
  cursor?: string;

  /**
   * Number of results per page (1-100). Defaults to 10.
   */
  limit?: number;

  /**
   * Filter by source currency code.
   */
  source_currency?: string;

  /**
   * Filter by conversion status.
   */
  status?: 'pending' | 'completed' | 'failed';

  /**
   * Filter by target currency code.
   */
  target_currency?: string;
}

export declare namespace Conversions {
  export {
    type ConversionCreateResponse as ConversionCreateResponse,
    type ConversionRetrieveResponse as ConversionRetrieveResponse,
    type ConversionListResponse as ConversionListResponse,
    type ConversionCreateParams as ConversionCreateParams,
    type ConversionListParams as ConversionListParams,
  };
}
