/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.5
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
 * @interface CreateAccessToken401Response
 */
export interface CreateAccessToken401Response {
    /**
     * 
     * @type {number}
     * @memberof CreateAccessToken401Response
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateAccessToken401Response
     */
    message?: string;
}

/**
 * Check if a given object implements the CreateAccessToken401Response interface.
 */
export function instanceOfCreateAccessToken401Response(value: object): value is CreateAccessToken401Response {
    return true;
}

export function CreateAccessToken401ResponseFromJSON(json: any): CreateAccessToken401Response {
    return CreateAccessToken401ResponseFromJSONTyped(json, false);
}

export function CreateAccessToken401ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAccessToken401Response {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'] == null ? undefined : json['code'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function CreateAccessToken401ResponseToJSON(json: any): CreateAccessToken401Response {
    return CreateAccessToken401ResponseToJSONTyped(json, false);
}

export function CreateAccessToken401ResponseToJSONTyped(value?: CreateAccessToken401Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'message': value['message'],
    };
}

