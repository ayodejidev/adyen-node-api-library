/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { PaymentResponse } from './paymentResponse';

export class DonationPaymentResponse {
    'amount'?: Amount;
    /**
    * The Adyen account name of your charity. We will provide you with this account name once your chosen charity has been [onboarded](https://docs.adyen.com/online-payments/donations#onboarding).
    */
    'donationAccount'?: string;
    /**
    * Your unique resource identifier.
    */
    'id'?: string;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount'?: string;
    'payment'?: PaymentResponse;
    /**
    * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    * The status of the donation transaction.  Possible values: * **completed** * **pending** * **refused**
    */
    'status'?: DonationPaymentResponse.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "donationAccount",
            "baseName": "donationAccount",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "payment",
            "baseName": "payment",
            "type": "PaymentResponse"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DonationPaymentResponse.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return DonationPaymentResponse.attributeTypeMap;
    }
}

export namespace DonationPaymentResponse {
    export enum StatusEnum {
        Completed = 'completed',
        Pending = 'pending',
        Refused = 'refused'
    }
}
