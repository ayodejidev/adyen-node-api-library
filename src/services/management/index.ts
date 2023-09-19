/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { APICredentialsCompanyLevelApi } from "./aPICredentialsCompanyLevelApi";
import { APICredentialsMerchantLevelApi } from "./aPICredentialsMerchantLevelApi";
import { APIKeyCompanyLevelApi } from "./aPIKeyCompanyLevelApi";
import { APIKeyMerchantLevelApi } from "./aPIKeyMerchantLevelApi";
import { AccountCompanyLevelApi } from "./accountCompanyLevelApi";
import { AccountMerchantLevelApi } from "./accountMerchantLevelApi";
import { AccountStoreLevelApi } from "./accountStoreLevelApi";
import { AllowedOriginsCompanyLevelApi } from "./allowedOriginsCompanyLevelApi";
import { AllowedOriginsMerchantLevelApi } from "./allowedOriginsMerchantLevelApi";
import { AndroidFilesCompanyLevelApi } from "./androidFilesCompanyLevelApi";
import { ClientKeyCompanyLevelApi } from "./clientKeyCompanyLevelApi";
import { ClientKeyMerchantLevelApi } from "./clientKeyMerchantLevelApi";
import { MyAPICredentialApi } from "./myAPICredentialApi";
import { PaymentMethodsMerchantLevelApi } from "./paymentMethodsMerchantLevelApi";
import { PayoutSettingsMerchantLevelApi } from "./payoutSettingsMerchantLevelApi";
import { SplitConfigurationMerchantLevelApi } from "./splitConfigurationMerchantLevelApi";
import { TerminalActionsCompanyLevelApi } from "./terminalActionsCompanyLevelApi";
import { TerminalActionsTerminalLevelApi } from "./terminalActionsTerminalLevelApi";
import { TerminalOrdersCompanyLevelApi } from "./terminalOrdersCompanyLevelApi";
import { TerminalOrdersMerchantLevelApi } from "./terminalOrdersMerchantLevelApi";
import { TerminalSettingsCompanyLevelApi } from "./terminalSettingsCompanyLevelApi";
import { TerminalSettingsMerchantLevelApi } from "./terminalSettingsMerchantLevelApi";
import { TerminalSettingsStoreLevelApi } from "./terminalSettingsStoreLevelApi";
import { TerminalSettingsTerminalLevelApi } from "./terminalSettingsTerminalLevelApi";
import { TerminalsTerminalLevelApi } from "./terminalsTerminalLevelApi";
import { UsersCompanyLevelApi } from "./usersCompanyLevelApi";
import { UsersMerchantLevelApi } from "./usersMerchantLevelApi";
import { WebhooksCompanyLevelApi } from "./webhooksCompanyLevelApi";
import { WebhooksMerchantLevelApi } from "./webhooksMerchantLevelApi";

import Service from "../../service";
import Client from "../../client";

export default class ManagementAPI extends Service {
    
    public constructor(client: Client) {
        super(client);
    }

    public get APICredentialsCompanyLevelApi() {
        return new APICredentialsCompanyLevelApi(this.client);
    }

    public get APICredentialsMerchantLevelApi() {
        return new APICredentialsMerchantLevelApi(this.client);
    }

    public get APIKeyCompanyLevelApi() {
        return new APIKeyCompanyLevelApi(this.client);
    }

    public get APIKeyMerchantLevelApi() {
        return new APIKeyMerchantLevelApi(this.client);
    }

    public get AccountCompanyLevelApi() {
        return new AccountCompanyLevelApi(this.client);
    }

    public get AccountMerchantLevelApi() {
        return new AccountMerchantLevelApi(this.client);
    }

    public get AccountStoreLevelApi() {
        return new AccountStoreLevelApi(this.client);
    }

    public get AllowedOriginsCompanyLevelApi() {
        return new AllowedOriginsCompanyLevelApi(this.client);
    }

    public get AllowedOriginsMerchantLevelApi() {
        return new AllowedOriginsMerchantLevelApi(this.client);
    }

    public get AndroidFilesCompanyLevelApi() {
        return new AndroidFilesCompanyLevelApi(this.client);
    }

    public get ClientKeyCompanyLevelApi() {
        return new ClientKeyCompanyLevelApi(this.client);
    }

    public get ClientKeyMerchantLevelApi() {
        return new ClientKeyMerchantLevelApi(this.client);
    }

    public get MyAPICredentialApi() {
        return new MyAPICredentialApi(this.client);
    }

    public get PaymentMethodsMerchantLevelApi() {
        return new PaymentMethodsMerchantLevelApi(this.client);
    }

    public get PayoutSettingsMerchantLevelApi() {
        return new PayoutSettingsMerchantLevelApi(this.client);
    }

    public get SplitConfigurationMerchantLevelApi() {
        return new SplitConfigurationMerchantLevelApi(this.client);
    }

    public get TerminalActionsCompanyLevelApi() {
        return new TerminalActionsCompanyLevelApi(this.client);
    }

    public get TerminalActionsTerminalLevelApi() {
        return new TerminalActionsTerminalLevelApi(this.client);
    }

    public get TerminalOrdersCompanyLevelApi() {
        return new TerminalOrdersCompanyLevelApi(this.client);
    }

    public get TerminalOrdersMerchantLevelApi() {
        return new TerminalOrdersMerchantLevelApi(this.client);
    }

    public get TerminalSettingsCompanyLevelApi() {
        return new TerminalSettingsCompanyLevelApi(this.client);
    }

    public get TerminalSettingsMerchantLevelApi() {
        return new TerminalSettingsMerchantLevelApi(this.client);
    }

    public get TerminalSettingsStoreLevelApi() {
        return new TerminalSettingsStoreLevelApi(this.client);
    }

    public get TerminalSettingsTerminalLevelApi() {
        return new TerminalSettingsTerminalLevelApi(this.client);
    }

    public get TerminalsTerminalLevelApi() {
        return new TerminalsTerminalLevelApi(this.client);
    }

    public get UsersCompanyLevelApi() {
        return new UsersCompanyLevelApi(this.client);
    }

    public get UsersMerchantLevelApi() {
        return new UsersMerchantLevelApi(this.client);
    }

    public get WebhooksCompanyLevelApi() {
        return new WebhooksCompanyLevelApi(this.client);
    }

    public get WebhooksMerchantLevelApi() {
        return new WebhooksMerchantLevelApi(this.client);
    }
}
