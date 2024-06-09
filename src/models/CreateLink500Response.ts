/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.1
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
 * @interface CreateLink500Response
 */
export interface CreateLink500Response {
    /**
     * 
     * @type {string}
     * @memberof CreateLink500Response
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateLink500Response
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateLink500Response
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateLink500Response
     */
    detail?: string;
}

/**
 * Check if a given object implements the CreateLink500Response interface.
 */
export function instanceOfCreateLink500Response(value: object): value is CreateLink500Response {
    return true;
}

export function CreateLink500ResponseFromJSON(json: any): CreateLink500Response {
    return CreateLink500ResponseFromJSONTyped(json, false);
}

export function CreateLink500ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLink500Response {
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

export function CreateLink500ResponseToJSON(value?: CreateLink500Response | null): any {
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

