/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Authentication } from './authentication';
import { CardConfiguration } from './cardConfiguration';
import { DeliveryContact } from './deliveryContact';

export class CardInfo {
    'authentication'?: Authentication;
    /**
    * The brand of the payment instrument. Possible values: **visa**, **mc**.
    */
    'brand': string;
    /**
    * The brand variant of the payment instrument. >Contact your Adyen Implementation Manager to get the values that are relevant to your integration. Examples: **visadebit**, **mcprepaid**.
    */
    'brandVariant': string;
    /**
    * The name of the card holder.  Maximum length: 26 characters.
    */
    'cardholderName': string;
    'configuration'?: CardConfiguration;
    'deliveryContact'?: DeliveryContact;
    /**
    * The form factor of the card. Possible values: **virtual**, **physical**.
    */
    'formFactor': CardInfo.FormFactorEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authentication",
            "baseName": "authentication",
            "type": "Authentication"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "brandVariant",
            "baseName": "brandVariant",
            "type": "string"
        },
        {
            "name": "cardholderName",
            "baseName": "cardholderName",
            "type": "string"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "CardConfiguration"
        },
        {
            "name": "deliveryContact",
            "baseName": "deliveryContact",
            "type": "DeliveryContact"
        },
        {
            "name": "formFactor",
            "baseName": "formFactor",
            "type": "CardInfo.FormFactorEnum"
        }    ];

    static getAttributeTypeMap() {
        return CardInfo.attributeTypeMap;
    }
}

export namespace CardInfo {
    export enum FormFactorEnum {
        Physical = <any> 'physical',
        Unknown = <any> 'unknown',
        Virtual = <any> 'virtual'
    }
}
