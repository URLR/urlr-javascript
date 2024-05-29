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
 * @interface GetLink422Response
 */
export interface GetLink422Response {
    /**
     * 
     * @type {string}
     * @memberof GetLink422Response
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof GetLink422Response
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof GetLink422Response
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof GetLink422Response
     */
    detail?: string;
}

/**
 * Check if a given object implements the GetLink422Response interface.
 */
export function instanceOfGetLink422Response(value: object): value is GetLink422Response {
    return true;
}

export function GetLink422ResponseFromJSON(json: any): GetLink422Response {
    return GetLink422ResponseFromJSONTyped(json, false);
}

export function GetLink422ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLink422Response {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'title': json['title'] == null ? undefined : json['title'],
        'status': json['status'] == null ? undefined : json['status'],
        'detail': json['detail'] == null ? undefined : json['detail'],
    };
}

export function GetLink422ResponseToJSON(value?: GetLink422Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'title': value['title'],
        'status': value['status'],
        'detail': value['detail'],
    };
}

