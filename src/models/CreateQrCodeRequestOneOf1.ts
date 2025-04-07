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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateQrCodeRequestOneOf1
 */
export interface CreateQrCodeRequestOneOf1 {
    /**
     * Link API ID of the QR Code
     * @type {string}
     * @memberof CreateQrCodeRequestOneOf1
     */
    linkId: string;
}

/**
 * Check if a given object implements the CreateQrCodeRequestOneOf1 interface.
 */
export function instanceOfCreateQrCodeRequestOneOf1(value: object): value is CreateQrCodeRequestOneOf1 {
    if (!('linkId' in value) || value['linkId'] === undefined) return false;
    return true;
}

export function CreateQrCodeRequestOneOf1FromJSON(json: any): CreateQrCodeRequestOneOf1 {
    return CreateQrCodeRequestOneOf1FromJSONTyped(json, false);
}

export function CreateQrCodeRequestOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateQrCodeRequestOneOf1 {
    if (json == null) {
        return json;
    }
    return {
        
        'linkId': json['link_id'],
    };
}

export function CreateQrCodeRequestOneOf1ToJSON(json: any): CreateQrCodeRequestOneOf1 {
    return CreateQrCodeRequestOneOf1ToJSONTyped(json, false);
}

export function CreateQrCodeRequestOneOf1ToJSONTyped(value?: CreateQrCodeRequestOneOf1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'link_id': value['linkId'],
    };
}

