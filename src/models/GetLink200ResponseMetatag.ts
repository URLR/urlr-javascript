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
 * Custom metadata for social previews
 * @export
 * @interface GetLink200ResponseMetatag
 */
export interface GetLink200ResponseMetatag {
    /**
     * Title of the link
     * @type {string}
     * @memberof GetLink200ResponseMetatag
     */
    title?: string;
    /**
     * Description of the link
     * @type {string}
     * @memberof GetLink200ResponseMetatag
     */
    description?: string;
    /**
     * Image URL of the link
     * @type {string}
     * @memberof GetLink200ResponseMetatag
     */
    image?: string;
}

/**
 * Check if a given object implements the GetLink200ResponseMetatag interface.
 */
export function instanceOfGetLink200ResponseMetatag(value: object): value is GetLink200ResponseMetatag {
    return true;
}

export function GetLink200ResponseMetatagFromJSON(json: any): GetLink200ResponseMetatag {
    return GetLink200ResponseMetatagFromJSONTyped(json, false);
}

export function GetLink200ResponseMetatagFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLink200ResponseMetatag {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'image': json['image'] == null ? undefined : json['image'],
    };
}

export function GetLink200ResponseMetatagToJSON(json: any): GetLink200ResponseMetatag {
    return GetLink200ResponseMetatagToJSONTyped(json, false);
}

export function GetLink200ResponseMetatagToJSONTyped(value?: GetLink200ResponseMetatag | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'description': value['description'],
        'image': value['image'],
    };
}

