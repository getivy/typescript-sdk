// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Creates a new account
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.post('/v1/accounts', { body, ...options });
  }

  /**
   * Retrieves an account by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/v1/accounts/${id}`, options);
  }

  /**
   * Returns a paginated list of accounts.
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountListResponsesCursorPage, AccountListResponse> {
    return this._client.getAPIList('/v1/accounts', CursorPage<AccountListResponse>, { query, ...options });
  }
}

export type AccountListResponsesCursorPage = CursorPage<AccountListResponse>;

export interface AccountCreateResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Type of the account.
   */
  account_type: 'virtual_account' | 'payment_account';

  /**
   * Asset type of the account.
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
  financial_addresses: Array<
    | AccountCreateResponse.UnionMember0
    | AccountCreateResponse.UnionMember1
    | AccountCreateResponse.UnionMember2
  >;

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

export namespace AccountCreateResponse {
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

export interface AccountRetrieveResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Type of the account.
   */
  account_type: 'virtual_account' | 'payment_account';

  /**
   * Asset type of the account.
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
  financial_addresses: Array<
    | AccountRetrieveResponse.UnionMember0
    | AccountRetrieveResponse.UnionMember1
    | AccountRetrieveResponse.UnionMember2
  >;

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
  account_type: 'virtual_account' | 'payment_account';

  /**
   * Asset type of the account.
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
  financial_addresses: Array<
    AccountListResponse.UnionMember0 | AccountListResponse.UnionMember1 | AccountListResponse.UnionMember2
  >;

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

export interface AccountCreateParams {
  /**
   * ID of the account program to create the account under.
   */
  account_program_id: string;

  /**
   * Type of account. Currently only virtual account.
   */
  account_type: 'virtual_account';

  /**
   * Personal information of the account beneficiary.
   */
  beneficiary_data: AccountCreateParams.BeneficiaryData;
}

export namespace AccountCreateParams {
  /**
   * Personal information of the account beneficiary.
   */
  export interface BeneficiaryData {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Date of birth in YYYY-MM-DD (UTC) format.
     */
    date_of_birth: string;

    /**
     * Government-issued identification. Discriminated union with type: "id" (generic
     * ID), "ssn" (Social Security Number, format ###-##-####), or "itin" (Individual
     * Taxpayer ID, format 9##-##-####).
     */
    identification:
      | BeneficiaryData.UnionMember0
      | BeneficiaryData.UnionMember1
      | BeneficiaryData.UnionMember2;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address: BeneficiaryData.ResidentialAddress;
  }

  export namespace BeneficiaryData {
    export interface UnionMember0 {
      type: 'id';

      value: string;
    }

    export interface UnionMember1 {
      type: 'ssn';

      value: string;
    }

    export interface UnionMember2 {
      type: 'itin';

      value: string;
    }

    /**
     * Residential address of the account holder.
     */
    export interface ResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'US'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Two-letter state code.
       */
      state?: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }
  }
}

export interface AccountListParams extends CursorPageParams {
  /**
   * ID of the account program to list virtual accounts for.
   */
  parent_id?: string;
}

export declare namespace Accounts {
  export {
    type AccountCreateResponse as AccountCreateResponse,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountListResponsesCursorPage as AccountListResponsesCursorPage,
    type AccountCreateParams as AccountCreateParams,
    type AccountListParams as AccountListParams,
  };
}
