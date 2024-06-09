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
 * @interface GetLink200ResponseGeolinksInner
 */
export interface GetLink200ResponseGeolinksInner {
    /**
     * Type of the geographic link
     * @type {string}
     * @memberof GetLink200ResponseGeolinksInner
     */
    type?: string;
    /**
     * Value corresponding to the type of the geographic link
     * @type {string}
     * @memberof GetLink200ResponseGeolinksInner
     */
    value?: string;
    /**
     * URL of the geographic link
     * @type {string}
     * @memberof GetLink200ResponseGeolinksInner
     */
    url?: string;
}

/**
 * Check if a given object implements the GetLink200ResponseGeolinksInner interface.
 */
export function instanceOfGetLink200ResponseGeolinksInner(value: object): value is GetLink200ResponseGeolinksInner {
    return true;
}

export function GetLink200ResponseGeolinksInnerFromJSON(json: any): GetLink200ResponseGeolinksInner {
    return GetLink200ResponseGeolinksInnerFromJSONTyped(json, false);
}

export function GetLink200ResponseGeolinksInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetLink200ResponseGeolinksInner {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'value': json['value'] == null ? undefined : json['value'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function GetLink200ResponseGeolinksInnerToJSON(value?: GetLink200ResponseGeolinksInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'value': value['value'],
        'url': value['url'],
    };
}

