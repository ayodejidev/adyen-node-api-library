/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class VerificationDeadline {
    /**
    * The list of capabilities that will be disallowed if information is not reviewed by the time of the deadline
    */
    'capabilities': Array<VerificationDeadline.CapabilitiesEnum>;
    /**
    * The unique identifiers of the legal entity or supporting entities that the deadline applies to
    */
    'entityIds'?: Array<string>;
    /**
    * The date that verification is due by before capabilities are disallowed.
    */
    'expiresAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "Array<VerificationDeadline.CapabilitiesEnum>"
        },
        {
            "name": "entityIds",
            "baseName": "entityIds",
            "type": "Array<string>"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return VerificationDeadline.attributeTypeMap;
    }
}

export namespace VerificationDeadline {
    export enum CapabilitiesEnum {
        AcceptExternalFunding = 'acceptExternalFunding',
        AcceptPspFunding = 'acceptPspFunding',
        AcceptTransactionInRestrictedCountries = 'acceptTransactionInRestrictedCountries',
        AcceptTransactionInRestrictedCountriesCommercial = 'acceptTransactionInRestrictedCountriesCommercial',
        AcceptTransactionInRestrictedCountriesConsumer = 'acceptTransactionInRestrictedCountriesConsumer',
        AcceptTransactionInRestrictedIndustries = 'acceptTransactionInRestrictedIndustries',
        AcceptTransactionInRestrictedIndustriesCommercial = 'acceptTransactionInRestrictedIndustriesCommercial',
        AcceptTransactionInRestrictedIndustriesConsumer = 'acceptTransactionInRestrictedIndustriesConsumer',
        Acquiring = 'acquiring',
        AtmWithdrawal = 'atmWithdrawal',
        AtmWithdrawalCommercial = 'atmWithdrawalCommercial',
        AtmWithdrawalConsumer = 'atmWithdrawalConsumer',
        AtmWithdrawalInRestrictedCountries = 'atmWithdrawalInRestrictedCountries',
        AtmWithdrawalInRestrictedCountriesCommercial = 'atmWithdrawalInRestrictedCountriesCommercial',
        AtmWithdrawalInRestrictedCountriesConsumer = 'atmWithdrawalInRestrictedCountriesConsumer',
        AuthorisedPaymentInstrumentUser = 'authorisedPaymentInstrumentUser',
        GetGrantOffers = 'getGrantOffers',
        IssueBankAccount = 'issueBankAccount',
        IssueCard = 'issueCard',
        IssueCardCommercial = 'issueCardCommercial',
        IssueCardConsumer = 'issueCardConsumer',
        IssueChargeCard = 'issueChargeCard',
        IssueChargeCardCommercial = 'issueChargeCardCommercial',
        IssueCreditLimit = 'issueCreditLimit',
        LocalAcceptance = 'localAcceptance',
        Payout = 'payout',
        PayoutToTransferInstrument = 'payoutToTransferInstrument',
        Processing = 'processing',
        ReceiveFromBalanceAccount = 'receiveFromBalanceAccount',
        ReceiveFromPlatformPayments = 'receiveFromPlatformPayments',
        ReceiveFromThirdParty = 'receiveFromThirdParty',
        ReceiveFromTransferInstrument = 'receiveFromTransferInstrument',
        ReceiveGrants = 'receiveGrants',
        ReceivePayments = 'receivePayments',
        SendToBalanceAccount = 'sendToBalanceAccount',
        SendToThirdParty = 'sendToThirdParty',
        SendToTransferInstrument = 'sendToTransferInstrument',
        ThirdPartyFunding = 'thirdPartyFunding',
        UseCard = 'useCard',
        UseCardCommercial = 'useCardCommercial',
        UseCardConsumer = 'useCardConsumer',
        UseCardInRestrictedCountries = 'useCardInRestrictedCountries',
        UseCardInRestrictedCountriesCommercial = 'useCardInRestrictedCountriesCommercial',
        UseCardInRestrictedCountriesConsumer = 'useCardInRestrictedCountriesConsumer',
        UseCardInRestrictedIndustries = 'useCardInRestrictedIndustries',
        UseCardInRestrictedIndustriesCommercial = 'useCardInRestrictedIndustriesCommercial',
        UseCardInRestrictedIndustriesConsumer = 'useCardInRestrictedIndustriesConsumer',
        UseChargeCard = 'useChargeCard',
        UseChargeCardCommercial = 'useChargeCardCommercial',
        WithdrawFromAtm = 'withdrawFromAtm',
        WithdrawFromAtmCommercial = 'withdrawFromAtmCommercial',
        WithdrawFromAtmConsumer = 'withdrawFromAtmConsumer',
        WithdrawFromAtmInRestrictedCountries = 'withdrawFromAtmInRestrictedCountries',
        WithdrawFromAtmInRestrictedCountriesCommercial = 'withdrawFromAtmInRestrictedCountriesCommercial',
        WithdrawFromAtmInRestrictedCountriesConsumer = 'withdrawFromAtmInRestrictedCountriesConsumer'
    }
}
