// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WebhookSubscriptions extends APIResource {
  /**
   * Creates a new webhook subscription.
   */
  create(
    body: WebhookSubscriptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookSubscriptionCreateResponse> {
    return this._client.post('/v1/webhook_subscriptions', { body, ...options });
  }

  /**
   * Retrieves a webhook subscription by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WebhookSubscriptionRetrieveResponse> {
    return this._client.get(path`/v1/webhook_subscriptions/${id}`, options);
  }

  /**
   * Updates the URL and/or subscribed events.
   */
  update(
    id: string,
    body: WebhookSubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookSubscriptionUpdateResponse> {
    return this._client.post(path`/v1/webhook_subscriptions/${id}`, { body, ...options });
  }

  /**
   * Lists webhook subscriptions for the merchant with cursor-based pagination.
   */
  list(
    query: WebhookSubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhookSubscriptionListResponsesCursorPage, WebhookSubscriptionListResponse> {
    return this._client.getAPIList('/v1/webhook_subscriptions', CursorPage<WebhookSubscriptionListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently deletes a webhook subscription. This cannot be undone.
   */
  delete(id: string, options?: RequestOptions): APIPromise<WebhookSubscriptionDeleteResponse> {
    return this._client.delete(path`/v1/webhook_subscriptions/${id}`, options);
  }
}

export type WebhookSubscriptionListResponsesCursorPage = CursorPage<WebhookSubscriptionListResponse>;

export interface WebhookSubscriptionCreateResponse {
  /**
   * Unique identifier of the webhook subscription.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the subscription was created.
   */
  created_at: string;

  /**
   * Event types this subscription receives.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
    | 'return.initiated'
    | 'return.paid'
    | 'return.failed'
    | 'return.returned'
  >;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_subscription';

  /**
   * ISO 8601 UTC timestamp when the subscription was last updated.
   */
  updated_at: string;

  /**
   * The HTTPS URL where webhook events are delivered.
   */
  url: string;
}

export interface WebhookSubscriptionRetrieveResponse {
  /**
   * Unique identifier of the webhook subscription.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the subscription was created.
   */
  created_at: string;

  /**
   * Event types this subscription receives.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
    | 'return.initiated'
    | 'return.paid'
    | 'return.failed'
    | 'return.returned'
  >;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_subscription';

  /**
   * ISO 8601 UTC timestamp when the subscription was last updated.
   */
  updated_at: string;

  /**
   * The HTTPS URL where webhook events are delivered.
   */
  url: string;
}

export interface WebhookSubscriptionUpdateResponse {
  /**
   * Unique identifier of the webhook subscription.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the subscription was created.
   */
  created_at: string;

  /**
   * Event types this subscription receives.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
    | 'return.initiated'
    | 'return.paid'
    | 'return.failed'
    | 'return.returned'
  >;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_subscription';

  /**
   * ISO 8601 UTC timestamp when the subscription was last updated.
   */
  updated_at: string;

  /**
   * The HTTPS URL where webhook events are delivered.
   */
  url: string;
}

export interface WebhookSubscriptionListResponse {
  /**
   * Unique identifier of the webhook subscription.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the subscription was created.
   */
  created_at: string;

  /**
   * Event types this subscription receives.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
    | 'return.initiated'
    | 'return.paid'
    | 'return.failed'
    | 'return.returned'
  >;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_subscription';

  /**
   * ISO 8601 UTC timestamp when the subscription was last updated.
   */
  updated_at: string;

  /**
   * The HTTPS URL where webhook events are delivered.
   */
  url: string;
}

export interface WebhookSubscriptionDeleteResponse {
  /**
   * Unique identifier of the webhook subscription.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the subscription was created.
   */
  created_at: string;

  /**
   * Event types this subscription receives.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
    | 'return.initiated'
    | 'return.paid'
    | 'return.failed'
    | 'return.returned'
  >;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_subscription';

  /**
   * ISO 8601 UTC timestamp when the subscription was last updated.
   */
  updated_at: string;

  /**
   * The HTTPS URL where webhook events are delivered.
   */
  url: string;
}

export interface WebhookSubscriptionCreateParams {
  /**
   * Event types to subscribe to. Use ["*"] for all events.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
    | 'return.initiated'
    | 'return.paid'
    | 'return.failed'
    | 'return.returned'
    | '*'
  >;

  /**
   * The HTTPS URL where webhook events will be delivered.
   */
  url: string;
}

export interface WebhookSubscriptionUpdateParams {
  /**
   * Event types to subscribe to. Use ["*"] for all events.
   */
  events?: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
    | 'return.initiated'
    | 'return.paid'
    | 'return.failed'
    | 'return.returned'
    | '*'
  >;

  /**
   * The HTTPS URL where webhook events will be delivered.
   */
  url?: string;
}

export interface WebhookSubscriptionListParams extends CursorPageParams {}

export declare namespace WebhookSubscriptions {
  export {
    type WebhookSubscriptionCreateResponse as WebhookSubscriptionCreateResponse,
    type WebhookSubscriptionRetrieveResponse as WebhookSubscriptionRetrieveResponse,
    type WebhookSubscriptionUpdateResponse as WebhookSubscriptionUpdateResponse,
    type WebhookSubscriptionListResponse as WebhookSubscriptionListResponse,
    type WebhookSubscriptionDeleteResponse as WebhookSubscriptionDeleteResponse,
    type WebhookSubscriptionListResponsesCursorPage as WebhookSubscriptionListResponsesCursorPage,
    type WebhookSubscriptionCreateParams as WebhookSubscriptionCreateParams,
    type WebhookSubscriptionUpdateParams as WebhookSubscriptionUpdateParams,
    type WebhookSubscriptionListParams as WebhookSubscriptionListParams,
  };
}
