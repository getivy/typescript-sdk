// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Redeliver extends APIResource {
  /**
   * Triggers a fresh delivery attempt of the event to the same webhook subscription.
   */
  create(id: string, options?: RequestOptions): APIPromise<RedeliverCreateResponse> {
    return this._client.post(path`/v1/webhook_deliveries/${id}/redeliver`, options);
  }
}

export interface RedeliverCreateResponse {
  /**
   * Unique identifier of the webhook delivery.
   */
  id: string;

  /**
   * Ordered list of HTTP delivery attempts for this delivery.
   */
  attempts: Array<RedeliverCreateResponse.Attempt>;

  /**
   * ISO 8601 UTC timestamp when the delivery was created.
   */
  created_at: string;

  /**
   * Identifier of the event this delivery was for.
   */
  event_id: string;

  /**
   * Current status of the delivery.
   */
  status: 'pending' | 'delivered' | 'failed' | 'processing' | 'ignored';

  /**
   * Identifier of the webhook subscription this delivery targeted.
   */
  subscription_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_delivery';

  /**
   * ISO 8601 UTC timestamp when the delivery was last updated.
   */
  updated_at: string;
}

export namespace RedeliverCreateResponse {
  export interface Attempt {
    /**
     * ISO 8601 UTC timestamp when this attempt resolved.
     */
    attempted_at: string;

    /**
     * Current status of the delivery.
     */
    status: 'pending' | 'delivered' | 'failed' | 'processing' | 'ignored';

    /**
     * HTTP status code returned by the receiver for this attempt.
     */
    status_code: number;
  }
}

export declare namespace Redeliver {
  export { type RedeliverCreateResponse as RedeliverCreateResponse };
}
