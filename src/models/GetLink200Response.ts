/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface GetLink200Response
 */
export interface GetLink200Response {
    /**
     * Link API ID
     * @type {string}
     * @memberof GetLink200Response
     */
    id?: string;
}

/**
 * Check if a given object implements the GetLink200Response interface.
 */
export function instanceOfGetLink200Response(value: object): value is GetLink200Response {
    return true;
}

export function GetLink200ResponseFromJSON(json: any): GetLink200Response {
    return GetLink200ResponseFromJSONTyped(json, false);
}

export function GetLink200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLink200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function GetLink200ResponseToJSON(value?: GetLink200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
    };
}
