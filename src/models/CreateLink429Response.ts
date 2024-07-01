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
 * 
 * @export
 * @interface CreateLink429Response
 */
export interface CreateLink429Response {
    /**
     * 
     * @type {string}
     * @memberof CreateLink429Response
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateLink429Response
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateLink429Response
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateLink429Response
     */
    detail?: string;
}

/**
 * Check if a given object implements the CreateLink429Response interface.
 */
export function instanceOfCreateLink429Response(value: object): value is CreateLink429Response {
    return true;
}

export function CreateLink429ResponseFromJSON(json: any): CreateLink429Response {
    return CreateLink429ResponseFromJSONTyped(json, false);
}

export function CreateLink429ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateLink429Response {
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

export function CreateLink429ResponseToJSON(value?: CreateLink429Response | null): any {
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

