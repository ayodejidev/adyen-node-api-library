/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionRule } from './transactionRule';

export class TransactionRuleResponse {
    'transactionRule'?: TransactionRule;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionRule",
            "baseName": "transactionRule",
            "type": "TransactionRule"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRuleResponse.attributeTypeMap;
    }
}

