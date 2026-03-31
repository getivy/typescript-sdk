// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Quote extends APIResource {
  /**
   * Returns an indicative quote for a currency pair. Not persisted or holdable.
   */
  retrieve(query: QuoteRetrieveParams, options?: RequestOptions): APIPromise<QuoteRetrieveResponse> {
    return this._client.get('/v1/conversions/quote', { query, ...options });
  }
}

export interface QuoteRetrieveResponse {
  /**
   * Conversion fee, or null if no fee applies.
   */
  fee: QuoteRetrieveResponse.Fee | null;

  /**
   * ISO 8601 UTC timestamp when the quote was fetched.
   */
  quoted_at: string;

  /**
   * Conversion rate applied.
   */
  rate: string;

  /**
   * Source amount as a string decimal.
   */
  source_amount: string;

  /**
   * Source currency code.
   */
  source_currency: string;

  /**
   * Target amount as a string decimal.
   */
  target_amount: string;

  /**
   * Target currency code.
   */
  target_currency: string;

  /**
   * Venue the quote was fetched from.
   */
  venue: string;
}

export namespace QuoteRetrieveResponse {
  /**
   * Conversion fee, or null if no fee applies.
   */
  export interface Fee {
    /**
     * Fee amount as a string decimal.
     */
    amount: string;

    /**
     * Fee currency code.
     */
    currency: string;
  }
}

export interface QuoteRetrieveParams {
  /**
   * Source currency code (e.g. EUR, USDC).
   */
  source_currency: string;

  /**
   * Target currency code (e.g. USDC, EUR).
   */
  target_currency: string;

  /**
   * Source amount as a string decimal. Defaults to 1 unit if omitted.
   */
  source_amount?: string;
}

export declare namespace Quote {
  export {
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteRetrieveParams as QuoteRetrieveParams,
  };
}
