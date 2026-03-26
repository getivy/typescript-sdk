// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Payouts extends APIResource {
  /**
   * Creates a new payout.
   */
  create(params: PayoutCreateParams, options?: RequestOptions): APIPromise<PayoutCreateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/v1/payouts', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a payout by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PayoutRetrieveResponse> {
    return this._client.get(path`/v1/payouts/${id}`, options);
  }

  /**
   * Lists payouts for the merchant with cursor-based pagination.
   */
  list(
    query: PayoutListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PayoutListResponse> {
    return this._client.get('/v1/payouts', { query, ...options });
  }
}

export interface PayoutCreateResponse {
  /**
   * Unique identifier of the payout.
   */
  id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ISO 8601 UTC timestamp when the payout was created.
   */
  created_at: string;

  /**
   * ISO 4217 currency code.
   */
  currency: string;

  /**
   * Bank account or crypto wallet the payout was sent to.
   */
  destination:
    | PayoutCreateResponse.UnionMember0
    | PayoutCreateResponse.UnionMember1
    | PayoutCreateResponse.UnionMember2;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutCreateResponse.Failure | null;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment reference.
   */
  reference: string;

  /**
   * ID of the account that was debited.
   */
  source_account_id: string;

  /**
   * Current status of the payout.
   */
  status: 'pending' | 'paid' | 'failed' | 'returned';

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * ISO 8601 UTC timestamp when the payout was last updated.
   */
  updated_at: string;
}

export namespace PayoutCreateResponse {
  export interface UnionMember0 {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Bank Identifier Code, or null if not provided.
     */
    bic: string | null;

    /**
     * International Bank Account Number.
     */
    iban: string;

    /**
     * Discriminator for IBAN destination.
     */
    type: 'iban';
  }

  export interface UnionMember1 {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * UK account number (8 digits).
     */
    account_number: string;

    /**
     * UK sort code (6 digits).
     */
    sort_code: string;

    /**
     * Discriminator for UK sort code destination.
     */
    type: 'sort_code';
  }

  export interface UnionMember2 {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain: 'ethereum' | 'solana' | 'polygon';

    /**
     * Discriminator for crypto wallet destination.
     */
    type: 'crypto_wallet';
  }

  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Failure code.
     */
    code:
      | 'account_closed'
      | 'account_blocked'
      | 'insufficient_funds'
      | 'invalid_account_format'
      | 'invalid_instruction'
      | 'invalid_amount'
      | 'invalid_time'
      | 'duplicate_transaction'
      | 'payee_verification_failed'
      | 'system_error'
      | 'provider_system_error'
      | 'rejected_by_correspondent_bank'
      | 'blocked_by_review'
      | 'unknown';

    /**
     * Human-readable description of the failure.
     */
    message: string;

    /**
     * Whether the payout can be retried.
     */
    retry: boolean;
  }
}

export interface PayoutRetrieveResponse {
  /**
   * Unique identifier of the payout.
   */
  id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ISO 8601 UTC timestamp when the payout was created.
   */
  created_at: string;

  /**
   * ISO 4217 currency code.
   */
  currency: string;

  /**
   * Bank account or crypto wallet the payout was sent to.
   */
  destination:
    | PayoutRetrieveResponse.UnionMember0
    | PayoutRetrieveResponse.UnionMember1
    | PayoutRetrieveResponse.UnionMember2;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutRetrieveResponse.Failure | null;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment reference.
   */
  reference: string;

  /**
   * ID of the account that was debited.
   */
  source_account_id: string;

  /**
   * Current status of the payout.
   */
  status: 'pending' | 'paid' | 'failed' | 'returned';

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * ISO 8601 UTC timestamp when the payout was last updated.
   */
  updated_at: string;
}

export namespace PayoutRetrieveResponse {
  export interface UnionMember0 {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Bank Identifier Code, or null if not provided.
     */
    bic: string | null;

    /**
     * International Bank Account Number.
     */
    iban: string;

    /**
     * Discriminator for IBAN destination.
     */
    type: 'iban';
  }

  export interface UnionMember1 {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * UK account number (8 digits).
     */
    account_number: string;

    /**
     * UK sort code (6 digits).
     */
    sort_code: string;

    /**
     * Discriminator for UK sort code destination.
     */
    type: 'sort_code';
  }

  export interface UnionMember2 {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain: 'ethereum' | 'solana' | 'polygon';

    /**
     * Discriminator for crypto wallet destination.
     */
    type: 'crypto_wallet';
  }

  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Failure code.
     */
    code:
      | 'account_closed'
      | 'account_blocked'
      | 'insufficient_funds'
      | 'invalid_account_format'
      | 'invalid_instruction'
      | 'invalid_amount'
      | 'invalid_time'
      | 'duplicate_transaction'
      | 'payee_verification_failed'
      | 'system_error'
      | 'provider_system_error'
      | 'rejected_by_correspondent_bank'
      | 'blocked_by_review'
      | 'unknown';

    /**
     * Human-readable description of the failure.
     */
    message: string;

    /**
     * Whether the payout can be retried.
     */
    retry: boolean;
  }
}

export interface PayoutListResponse {
  data: Array<PayoutListResponse.Data>;

  has_more: boolean;

  next_cursor: string | null;
}

export namespace PayoutListResponse {
  export interface Data {
    /**
     * Unique identifier of the payout.
     */
    id: string;

    /**
     * Amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 8601 UTC timestamp when the payout was created.
     */
    created_at: string;

    /**
     * ISO 4217 currency code.
     */
    currency: string;

    /**
     * Bank account or crypto wallet the payout was sent to.
     */
    destination: Data.UnionMember0 | Data.UnionMember1 | Data.UnionMember2;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Data.Failure | null;

    /**
     * Key-value pairs stored with the payout.
     */
    metadata: { [key: string]: string };

    /**
     * Payment reference.
     */
    reference: string;

    /**
     * ID of the account that was debited.
     */
    source_account_id: string;

    /**
     * Current status of the payout.
     */
    status: 'pending' | 'paid' | 'failed' | 'returned';

    /**
     * Resource type discriminator.
     */
    type: 'payout';

    /**
     * ISO 8601 UTC timestamp when the payout was last updated.
     */
    updated_at: string;
  }

  export namespace Data {
    export interface UnionMember0 {
      /**
       * Name of the account holder.
       */
      account_holder_name: string;

      /**
       * Bank Identifier Code, or null if not provided.
       */
      bic: string | null;

      /**
       * International Bank Account Number.
       */
      iban: string;

      /**
       * Discriminator for IBAN destination.
       */
      type: 'iban';
    }

    export interface UnionMember1 {
      /**
       * Name of the account holder.
       */
      account_holder_name: string;

      /**
       * UK account number (8 digits).
       */
      account_number: string;

      /**
       * UK sort code (6 digits).
       */
      sort_code: string;

      /**
       * Discriminator for UK sort code destination.
       */
      type: 'sort_code';
    }

    export interface UnionMember2 {
      /**
       * Wallet address on the specified blockchain.
       */
      address: string;

      /**
       * Blockchain network for the crypto wallet.
       */
      blockchain: 'ethereum' | 'solana' | 'polygon';

      /**
       * Discriminator for crypto wallet destination.
       */
      type: 'crypto_wallet';
    }

    /**
     * Failure details when status is failed, otherwise null.
     */
    export interface Failure {
      /**
       * Failure code.
       */
      code:
        | 'account_closed'
        | 'account_blocked'
        | 'insufficient_funds'
        | 'invalid_account_format'
        | 'invalid_instruction'
        | 'invalid_amount'
        | 'invalid_time'
        | 'duplicate_transaction'
        | 'payee_verification_failed'
        | 'system_error'
        | 'provider_system_error'
        | 'rejected_by_correspondent_bank'
        | 'blocked_by_review'
        | 'unknown';

      /**
       * Human-readable description of the failure.
       */
      message: string;

      /**
       * Whether the payout can be retried.
       */
      retry: boolean;
    }
  }
}

export interface PayoutCreateParams {
  /**
   * Body param: Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * Body param: ISO 4217 currency code for the payout amount.
   */
  currency: 'EUR' | 'GBP' | 'USDC';

  /**
   * Body param: Bank account or crypto wallet to send funds to.
   */
  destination:
    | PayoutCreateParams.UnionMember0
    | PayoutCreateParams.UnionMember1
    | PayoutCreateParams.UnionMember2;

  /**
   * Body param: Payment reference.
   */
  reference: string;

  /**
   * Body param: ID of the account to debit.
   */
  source_account_id: string;

  /**
   * Body param: Key-value pairs stored with the payout.
   */
  metadata?: { [key: string]: string };

  /**
   * Body param: Payment rail. It is enforced when provided, otherwise auto-selected.
   */
  rail?: 'sepa_instant' | 'sepa' | 'faster_payments';

  /**
   * Header param: Idempotency key for safe retries. Reusing a key with an identical
   * request body returns the cached response. Reusing a key with a different body
   * returns 409.
   */
  'Idempotency-Key'?: string;
}

export namespace PayoutCreateParams {
  export interface UnionMember0 {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * International Bank Account Number.
     */
    iban: string;

    /**
     * Discriminator for IBAN destination.
     */
    type: 'iban';

    /**
     * Bank Identifier Code.
     */
    bic?: string;
  }

  export interface UnionMember1 {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * UK account number (8 digits).
     */
    account_number: string;

    /**
     * UK sort code (6 digits).
     */
    sort_code: string;

    /**
     * Discriminator for UK sort code destination.
     */
    type: 'sort_code';
  }

  export interface UnionMember2 {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain: 'ethereum' | 'solana' | 'polygon';

    /**
     * Discriminator for crypto wallet destination.
     */
    type: 'crypto_wallet';
  }
}

export interface PayoutListParams {
  created_at?: PayoutListParams.CreatedAt;

  /**
   * Opaque cursor from a previous next_cursor.
   */
  cursor?: string;

  /**
   * Number of results per page (1-100). Defaults to 10.
   */
  limit?: number;

  /**
   * Filter by payout status.
   */
  status?: 'pending' | 'paid' | 'failed';
}

export namespace PayoutListParams {
  export interface CreatedAt {
    /**
     * Filter payouts created after this ISO 8601 timestamp.
     */
    after?: string;

    /**
     * Filter payouts created before this ISO 8601 timestamp.
     */
    before?: string;
  }
}

export declare namespace Payouts {
  export {
    type PayoutCreateResponse as PayoutCreateResponse,
    type PayoutRetrieveResponse as PayoutRetrieveResponse,
    type PayoutListResponse as PayoutListResponse,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutListParams as PayoutListParams,
  };
}
