/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ApplicationInfo } from './applicationInfo';

export class PaymentCancelRequest {
    'applicationInfo'?: ApplicationInfo;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * Your reference for the cancel request. Maximum length: 80 characters.
    */
    'reference'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applicationInfo",
            "baseName": "applicationInfo",
            "type": "ApplicationInfo"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentCancelRequest.attributeTypeMap;
    }
}

