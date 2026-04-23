// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WebhookDeliveries extends APIResource {
  /**
   * Retrieves a webhook delivery by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WebhookDeliveryRetrieveResponse> {
    return this._client.get(path`/v1/webhook_deliveries/${id}`, options);
  }

  /**
   * Lists webhook deliveries for the merchant with cursor-based pagination.
   * Deliveries are retained for 30 days.
   */
  list(
    query: WebhookDeliveryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhookDeliveryListResponsesCursorPage, WebhookDeliveryListResponse> {
    return this._client.getAPIList('/v1/webhook_deliveries', CursorPage<WebhookDeliveryListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Triggers a fresh delivery attempt of the event to the same webhook subscription.
   */
  redeliver(id: string, options?: RequestOptions): APIPromise<WebhookDeliveryRedeliverResponse> {
    return this._client.post(path`/v1/webhook_deliveries/${id}/redeliver`, options);
  }
}

export type WebhookDeliveryListResponsesCursorPage = CursorPage<WebhookDeliveryListResponse>;

export interface WebhookDeliveryRetrieveResponse {
  /**
   * Unique identifier of the webhook delivery.
   */
  id: string;

  /**
   * Ordered list of HTTP delivery attempts for this delivery.
   */
  attempts: Array<WebhookDeliveryRetrieveResponse.Attempt>;

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

export namespace WebhookDeliveryRetrieveResponse {
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

export interface WebhookDeliveryListResponse {
  /**
   * Unique identifier of the webhook delivery.
   */
  id: string;

  /**
   * Ordered list of HTTP delivery attempts for this delivery.
   */
  attempts: Array<WebhookDeliveryListResponse.Attempt>;

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

export namespace WebhookDeliveryListResponse {
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

export interface WebhookDeliveryRedeliverResponse {
  /**
   * Unique identifier of the webhook delivery.
   */
  id: string;

  /**
   * Ordered list of HTTP delivery attempts for this delivery.
   */
  attempts: Array<WebhookDeliveryRedeliverResponse.Attempt>;

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

export namespace WebhookDeliveryRedeliverResponse {
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

export interface WebhookDeliveryListParams extends CursorPageParams {
  created_at?: WebhookDeliveryListParams.CreatedAt;

  /**
   * Filter by event ID.
   */
  event_id?: string;

  /**
   * Filter by delivery status.
   */
  status?: 'pending' | 'delivered' | 'failed' | 'processing' | 'ignored';

  /**
   * Filter by webhook subscription ID.
   */
  subscription_id?: string;
}

export namespace WebhookDeliveryListParams {
  export interface CreatedAt {
    /**
     * Include deliveries whose created_at is greater than or equal to this ISO 8601
     * timestamp.
     */
    gte?: string;

    /**
     * Include deliveries whose created_at is less than or equal to this ISO 8601
     * timestamp.
     */
    lte?: string;
  }
}

export declare namespace WebhookDeliveries {
  export {
    type WebhookDeliveryRetrieveResponse as WebhookDeliveryRetrieveResponse,
    type WebhookDeliveryListResponse as WebhookDeliveryListResponse,
    type WebhookDeliveryRedeliverResponse as WebhookDeliveryRedeliverResponse,
    type WebhookDeliveryListResponsesCursorPage as WebhookDeliveryListResponsesCursorPage,
    type WebhookDeliveryListParams as WebhookDeliveryListParams,
  };
}
