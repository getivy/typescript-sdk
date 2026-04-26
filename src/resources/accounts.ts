// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Retrieves an account by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/v1/accounts/${id}`, options);
  }

  /**
   * Returns a paginated list of accounts.
   */
  list(query: AccountListParams | null | undefined = {}, options?: RequestOptions): PagePromise<AccountListResponsesCursorPage, AccountListResponse> {
    return this._client.getAPIList('/v1/accounts', CursorPage<AccountListResponse>, { query, ...options });
  }
}

export type AccountListResponsesCursorPage = CursorPage<AccountListResponse>

export interface AccountRetrieveResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Type of the account.
   */
  account_type: 'payment_account' | 'virtual_account';

  /**
   * Asset type of the account, either fiat or crypto currency.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * ISO 4217 currency code for the account.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<AccountRetrieveResponse.UnionMember0 | AccountRetrieveResponse.UnionMember1 | AccountRetrieveResponse.UnionMember2>;

  /**
   * Human-readable label for the account.
   */
  label: string;

  /**
   * Current status of the account.
   */
  status: 'pending' | 'active' | 'frozen' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account';

  /**
   * ISO 8601 UTC timestamp when the account was last updated.
   */
  updated_at: string;
}

export namespace AccountRetrieveResponse {
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
     * Discriminator for IBAN financial address.
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
     * Discriminator for UK sort code financial address.
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
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }
}

export interface AccountListResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Type of the account.
   */
  account_type: 'payment_account' | 'virtual_account';

  /**
   * Asset type of the account, either fiat or crypto currency.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * ISO 4217 currency code for the account.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<AccountListResponse.UnionMember0 | AccountListResponse.UnionMember1 | AccountListResponse.UnionMember2>;

  /**
   * Human-readable label for the account.
   */
  label: string;

  /**
   * Current status of the account.
   */
  status: 'pending' | 'active' | 'frozen' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account';

  /**
   * ISO 8601 UTC timestamp when the account was last updated.
   */
  updated_at: string;
}

export namespace AccountListResponse {
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
     * Discriminator for IBAN financial address.
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
     * Discriminator for UK sort code financial address.
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
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }
}

export interface AccountListParams extends CursorPageParams {
}

export declare namespace Accounts {
  export {
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountListResponsesCursorPage as AccountListResponsesCursorPage,
    type AccountListParams as AccountListParams
  };
}
