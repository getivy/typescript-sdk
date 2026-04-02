// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Quotes extends APIResource {
  /**
   * Retrieves a persisted quote by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<QuoteRetrieveResponse> {
    return this._client.get(path`/v1/quotes/${id}`, options);
  }

  /**
   * Returns an indicative quote for a currency pair. Not persisted or holdable.
   */
  retrieveIndicative(
    query: QuoteRetrieveIndicativeParams,
    options?: RequestOptions,
  ): APIPromise<QuoteRetrieveIndicativeResponse> {
    return this._client.get('/v1/quotes/indicative', { query, ...options });
  }
}

export interface QuoteRetrieveResponse {
  /**
   * Unique identifier of the quote.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the quote was created.
   */
  created_at: string;

  /**
   * Exchange rate applied.
   */
  exchange_rate: string;

  /**
   * ISO 8601 UTC timestamp when the quote expires.
   */
  expires_at: string;

  /**
   * Current funding status of the quote.
   */
  funding_status: 'pending' | 'sent' | 'completed' | 'failed' | 'on_hold';

  /**
   * Source amount as a string decimal.
   */
  source_amount: string;

  /**
   * Source currency code.
   */
  source_currency: string;

  /**
   * Current status of the quote.
   */
  status:
    | 'pending'
    | 'quote_accepted'
    | 'order_pending'
    | 'order_failed'
    | 'order_completed'
    | 'withdrawal_pending'
    | 'withdrawal_failed'
    | 'withdrawal_completed'
    | 'completed'
    | 'failed';

  /**
   * Target amount as a string decimal.
   */
  target_amount: string;

  /**
   * Target currency code.
   */
  target_currency: string;

  /**
   * Resource type discriminator.
   */
  type: 'quote';

  /**
   * ISO 8601 UTC timestamp when the quote was last updated.
   */
  updated_at: string;

  /**
   * Execution venue (e.g. "kraken").
   */
  venue: string;
}

export interface QuoteRetrieveIndicativeResponse {
  /**
   * Conversion fee, or null if no fee applies.
   */
  fee: QuoteRetrieveIndicativeResponse.Fee | null;

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

export namespace QuoteRetrieveIndicativeResponse {
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

export interface QuoteRetrieveIndicativeParams {
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

export declare namespace Quotes {
  export {
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteRetrieveIndicativeResponse as QuoteRetrieveIndicativeResponse,
    type QuoteRetrieveIndicativeParams as QuoteRetrieveIndicativeParams,
  };
}
