/* tslint:disable */
/* eslint-disable */
/**
 * Developer API - URLR
 * API powering the features of URLR.
 *
 * The version of the OpenAPI document: 0.3
 * Contact: contact@urlr.me
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ReduceLink200Response
 */
export interface ReduceLink200Response {
    /**
     * Original URL
     * @type {string}
     * @memberof ReduceLink200Response
     */
    url?: string;
    /**
     * Expiration date
     * @type {string}
     * @memberof ReduceLink200Response
     */
    expiredAt?: string;
    /**
     * Team ID (displayed on dashboard)
     * @type {number}
     * @memberof ReduceLink200Response
     */
    team?: number;
    /**
     * Folder ID (displayed on dashboard)
     * @type {number}
     * @memberof ReduceLink200Response
     */
    folder?: number;
    /**
     * Short code
     * @type {string}
     * @memberof ReduceLink200Response
     */
    urlCode?: string;
    /**
     * Domain
     * @type {string}
     * @memberof ReduceLink200Response
     */
    domain?: string;
    /**
     * HTTP status code
     * @type {number}
     * @memberof ReduceLink200Response
     */
    code?: number;
}

/**
 * Check if a given object implements the ReduceLink200Response interface.
 */
export function instanceOfReduceLink200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReduceLink200ResponseFromJSON(json: any): ReduceLink200Response {
    return ReduceLink200ResponseFromJSONTyped(json, false);
}

export function ReduceLink200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReduceLink200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'expiredAt': !exists(json, 'expired_at') ? undefined : json['expired_at'],
        'team': !exists(json, 'team') ? undefined : json['team'],
        'folder': !exists(json, 'folder') ? undefined : json['folder'],
        'urlCode': !exists(json, 'url_code') ? undefined : json['url_code'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function ReduceLink200ResponseToJSON(value?: ReduceLink200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'expired_at': value.expiredAt,
        'team': value.team,
        'folder': value.folder,
        'url_code': value.urlCode,
        'domain': value.domain,
        'code': value.code,
    };
}

