/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { DataCenter } from './dataCenter';
import { MerchantLinks } from './merchantLinks';

export class Merchant {
    '_links'?: MerchantLinks;
    /**
    * The [capture delay](https://docs.adyen.com/online-payments/capture#capture-delay) set for the merchant account.  Possible values: * **Immediate** * **Manual** * Number of days from **1** to **29**
    */
    'captureDelay'?: string;
    /**
    * The unique identifier of the company account this merchant belongs to
    */
    'companyId'?: string;
    /**
    * List of available data centers.  Adyen has several data centers around the world.In the URL that you use for making API requests, we recommend you use the live URL prefix from the data center closest to your shoppers.
    */
    'dataCenters'?: Array<DataCenter>;
    /**
    * The default [`shopperInteraction`](https://docs.adyen.com/api-explorer/#/CheckoutService/v68/post/payments__reqParam_shopperInteraction) value used when processing payments through this merchant account.
    */
    'defaultShopperInteraction'?: string;
    /**
    * Your description for the merchant account, maximum 300 characters
    */
    'description'?: string;
    /**
    * The unique identifier of the merchant account.
    */
    'id'?: string;
    /**
    * The city where the legal entity of this merchant account is registered.
    */
    'merchantCity'?: string;
    /**
    * The name of the legal entity associated with the merchant account.
    */
    'name'?: string;
    /**
    * Only applies to merchant accounts managed by Adyen\'s partners. The name of the pricing plan assigned to the merchant account.
    */
    'pricingPlan'?: string;
    /**
    * The currency of the country where the legal entity of this merchant account is registered. Format: [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). For example, a legal entity based in the United States has USD as the primary settlement currency.
    */
    'primarySettlementCurrency'?: string;
    /**
    * Reference of the merchant account.
    */
    'reference'?: string;
    /**
    * The URL for the ecommerce website used with this merchant account.
    */
    'shopWebAddress'?: string;
    /**
    * The status of the merchant account.  Possible values:  * **PreActive**: The merchant account has been created. Users cannot access the merchant account in the Customer Area. The account cannot process payments. * **Active**: Users can access the merchant account in the Customer Area. If the company account is also **Active**, then payment processing and payouts are enabled. * **InactiveWithModifications**: Users can access the merchant account in the Customer Area. You cannot process new payments but you can still modify payments, for example issue refunds. You can still receive payouts. * **Inactive**: Users can access the merchant account in the Customer Area. Payment processing and payouts are disabled. * **Closed**: The account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled.
    */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "_links",
            "baseName": "_links",
            "type": "MerchantLinks"
        },
        {
            "name": "captureDelay",
            "baseName": "captureDelay",
            "type": "string"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "dataCenters",
            "baseName": "dataCenters",
            "type": "Array<DataCenter>"
        },
        {
            "name": "defaultShopperInteraction",
            "baseName": "defaultShopperInteraction",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantCity",
            "baseName": "merchantCity",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "pricingPlan",
            "baseName": "pricingPlan",
            "type": "string"
        },
        {
            "name": "primarySettlementCurrency",
            "baseName": "primarySettlementCurrency",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "shopWebAddress",
            "baseName": "shopWebAddress",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Merchant.attributeTypeMap;
    }
}

