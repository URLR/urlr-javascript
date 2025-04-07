/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.7
 * Contact: contact@urlr.me
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { CreateQrCodeRequestOneOf } from './CreateQrCodeRequestOneOf';
import {
    instanceOfCreateQrCodeRequestOneOf,
    CreateQrCodeRequestOneOfFromJSON,
    CreateQrCodeRequestOneOfFromJSONTyped,
    CreateQrCodeRequestOneOfToJSON,
} from './CreateQrCodeRequestOneOf';
import type { CreateQrCodeRequestOneOf1 } from './CreateQrCodeRequestOneOf1';
import {
    instanceOfCreateQrCodeRequestOneOf1,
    CreateQrCodeRequestOneOf1FromJSON,
    CreateQrCodeRequestOneOf1FromJSONTyped,
    CreateQrCodeRequestOneOf1ToJSON,
} from './CreateQrCodeRequestOneOf1';

/**
 * @type CreateQrCodeRequest
 * 
 * @export
 */
export type CreateQrCodeRequest = CreateQrCodeRequestOneOf | CreateQrCodeRequestOneOf1;

export function CreateQrCodeRequestFromJSON(json: any): CreateQrCodeRequest {
    return CreateQrCodeRequestFromJSONTyped(json, false);
}

export function CreateQrCodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateQrCodeRequest {
    if (json == null) {
        return json;
    }
    if (instanceOfCreateQrCodeRequestOneOf(json)) {
        return CreateQrCodeRequestOneOfFromJSONTyped(json, true);
    }
    if (instanceOfCreateQrCodeRequestOneOf1(json)) {
        return CreateQrCodeRequestOneOf1FromJSONTyped(json, true);
    }

    return {} as any;
}

export function CreateQrCodeRequestToJSON(json: any): any {
    return CreateQrCodeRequestToJSONTyped(json, false);
}

export function CreateQrCodeRequestToJSONTyped(value?: CreateQrCodeRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    if (instanceOfCreateQrCodeRequestOneOf(value)) {
        return CreateQrCodeRequestOneOfToJSON(value as CreateQrCodeRequestOneOf);
    }
    if (instanceOfCreateQrCodeRequestOneOf1(value)) {
        return CreateQrCodeRequestOneOf1ToJSON(value as CreateQrCodeRequestOneOf1);
    }

    return {};
}

