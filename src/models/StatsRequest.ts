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
 * @interface StatsRequest
 */
export interface StatsRequest {
    /**
     * The short code of the URL
     * @type {string}
     * @memberof StatsRequest
     */
    code: string;
    /**
     * Get stats from this date
     * @type {string}
     * @memberof StatsRequest
     */
    from?: string;
    /**
     * Get stats until this date
     * @type {string}
     * @memberof StatsRequest
     */
    to?: string;
    /**
     * Whether include bots or not in statistics
     * @type {boolean}
     * @memberof StatsRequest
     */
    includeBots?: boolean;
}

/**
 * Check if a given object implements the StatsRequest interface.
 */
export function instanceOfStatsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function StatsRequestFromJSON(json: any): StatsRequest {
    return StatsRequestFromJSONTyped(json, false);
}

export function StatsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'includeBots': !exists(json, 'includeBots') ? undefined : json['includeBots'],
    };
}

export function StatsRequestToJSON(value?: StatsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'from': value.from,
        'to': value.to,
        'includeBots': value.includeBots,
    };
}

