/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.3
 * Contact: contact@urlr.me
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * QR Code associated to the short link
 * @export
 * @interface GetLink200ResponseQrcode
 */
export interface GetLink200ResponseQrcode {
    /**
     * QR Code Data URL
     * @type {string}
     * @memberof GetLink200ResponseQrcode
     */
    data?: string;
}

/**
 * Check if a given object implements the GetLink200ResponseQrcode interface.
 */
export function instanceOfGetLink200ResponseQrcode(value: object): value is GetLink200ResponseQrcode {
    return true;
}

export function GetLink200ResponseQrcodeFromJSON(json: any): GetLink200ResponseQrcode {
    return GetLink200ResponseQrcodeFromJSONTyped(json, false);
}

export function GetLink200ResponseQrcodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLink200ResponseQrcode {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : json['data'],
    };
}

export function GetLink200ResponseQrcodeToJSON(value?: GetLink200ResponseQrcode | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'],
    };
}

