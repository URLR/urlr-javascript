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
 * @interface GetStatistics200Response
 */
export interface GetStatistics200Response {
    /**
     * Link API ID
     * @type {string}
     * @memberof GetStatistics200Response
     */
    linkId?: string;
    /**
     * Clicks
     * @type {number}
     * @memberof GetStatistics200Response
     */
    clicks?: number;
    /**
     * Unique clicks
     * @type {number}
     * @memberof GetStatistics200Response
     */
    uniqueClicks?: number;
}

/**
 * Check if a given object implements the GetStatistics200Response interface.
 */
export function instanceOfGetStatistics200Response(value: object): value is GetStatistics200Response {
    return true;
}

export function GetStatistics200ResponseFromJSON(json: any): GetStatistics200Response {
    return GetStatistics200ResponseFromJSONTyped(json, false);
}

export function GetStatistics200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStatistics200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'linkId': json['link_id'] == null ? undefined : json['link_id'],
        'clicks': json['clicks'] == null ? undefined : json['clicks'],
        'uniqueClicks': json['unique_clicks'] == null ? undefined : json['unique_clicks'],
    };
}

export function GetStatistics200ResponseToJSON(value?: GetStatistics200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link_id': value['linkId'],
        'clicks': value['clicks'],
        'unique_clicks': value['uniqueClicks'],
    };
}

