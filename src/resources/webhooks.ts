// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  unwrap(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): UnwrapWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookKey : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as UnwrapWebhookEvent;
  }
}

export interface PayoutCreatedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: PayoutCreatedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'payout.created';
}

export namespace PayoutCreatedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
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
    destination: Payload.UnionMember0 | Payload.UnionMember1 | Payload.UnionMember2;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

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

  export namespace Payload {
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

export interface PayoutInitiatedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: PayoutInitiatedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'payout.initiated';
}

export namespace PayoutInitiatedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
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
    destination: Payload.UnionMember0 | Payload.UnionMember1 | Payload.UnionMember2;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

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

  export namespace Payload {
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

export interface PayoutPaidWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: PayoutPaidWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'payout.paid';
}

export namespace PayoutPaidWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
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
    destination: Payload.UnionMember0 | Payload.UnionMember1 | Payload.UnionMember2;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

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

  export namespace Payload {
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

export interface PayoutFailedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: PayoutFailedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'payout.failed';
}

export namespace PayoutFailedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
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
    destination: Payload.UnionMember0 | Payload.UnionMember1 | Payload.UnionMember2;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

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

  export namespace Payload {
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

export type UnwrapWebhookEvent =
  | PayoutCreatedWebhookEvent
  | PayoutInitiatedWebhookEvent
  | PayoutPaidWebhookEvent
  | PayoutFailedWebhookEvent;

export declare namespace Webhooks {
  export {
    type PayoutCreatedWebhookEvent as PayoutCreatedWebhookEvent,
    type PayoutInitiatedWebhookEvent as PayoutInitiatedWebhookEvent,
    type PayoutPaidWebhookEvent as PayoutPaidWebhookEvent,
    type PayoutFailedWebhookEvent as PayoutFailedWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
