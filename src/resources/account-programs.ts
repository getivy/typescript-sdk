// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountPrograms extends APIResource {
  /**
   * Retrieves an account program by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountProgramRetrieveResponse> {
    return this._client.get(path`/v1/account_programs/${id}`, options);
  }

  /**
   * Lists account programs for the merchant with cursor-based pagination.
   */
  list(
    query: AccountProgramListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountProgramListResponsesCursorPage, AccountProgramListResponse> {
    return this._client.getAPIList('/v1/account_programs', CursorPage<AccountProgramListResponse>, {
      query,
      ...options,
    });
  }
}

export type AccountProgramListResponsesCursorPage = CursorPage<AccountProgramListResponse>;

export interface AccountProgramRetrieveResponse {
  /**
   * Unique identifier of the account program.
   */
  id: string;

  /**
   * Which for-benefit-of (FBO) program model applies: `fbo_program` (merchant
   * program) or `fbo_sponsored` (sponsored program).
   */
  account_program_type: 'fbo_program' | 'fbo_sponsored';

  /**
   * ISO 8601 UTC timestamp when the account program was created.
   */
  created_at: string;

  /**
   * Human-readable label for the account program.
   */
  label: string;

  /**
   * Account program lifecycle status. Closed programs are not returned by this
   * endpoint.
   */
  status: 'active' | 'frozen';

  /**
   * Resource type discriminator.
   */
  type: 'account_program';

  /**
   * ISO 8601 UTC timestamp when the account program was last updated.
   */
  updated_at: string;
}

export interface AccountProgramListResponse {
  /**
   * Unique identifier of the account program.
   */
  id: string;

  /**
   * Which for-benefit-of (FBO) program model applies: `fbo_program` (merchant
   * program) or `fbo_sponsored` (sponsored program).
   */
  account_program_type: 'fbo_program' | 'fbo_sponsored';

  /**
   * ISO 8601 UTC timestamp when the account program was created.
   */
  created_at: string;

  /**
   * Human-readable label for the account program.
   */
  label: string;

  /**
   * Account program lifecycle status. Closed programs are not returned by this
   * endpoint.
   */
  status: 'active' | 'frozen';

  /**
   * Resource type discriminator.
   */
  type: 'account_program';

  /**
   * ISO 8601 UTC timestamp when the account program was last updated.
   */
  updated_at: string;
}

export interface AccountProgramListParams extends CursorPageParams {}

export declare namespace AccountPrograms {
  export {
    type AccountProgramRetrieveResponse as AccountProgramRetrieveResponse,
    type AccountProgramListResponse as AccountProgramListResponse,
    type AccountProgramListResponsesCursorPage as AccountProgramListResponsesCursorPage,
    type AccountProgramListParams as AccountProgramListParams,
  };
}
