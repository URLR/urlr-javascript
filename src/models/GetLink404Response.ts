/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.10
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
 * @interface GetLink404Response
 */
export interface GetLink404Response {
    /**
     * 
     * @type {string}
     * @memberof GetLink404Response
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof GetLink404Response
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof GetLink404Response
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof GetLink404Response
     */
    detail?: string;
}

/**
 * Check if a given object implements the GetLink404Response interface.
 */
export function instanceOfGetLink404Response(value: object): value is GetLink404Response {
    return true;
}

export function GetLink404ResponseFromJSON(json: any): GetLink404Response {
    return GetLink404ResponseFromJSONTyped(json, false);
}

export function GetLink404ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLink404Response {
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

export function GetLink404ResponseToJSON(json: any): GetLink404Response {
    return GetLink404ResponseToJSONTyped(json, false);
}

export function GetLink404ResponseToJSONTyped(value?: GetLink404Response | null, ignoreDiscriminator: boolean = false): any {
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

