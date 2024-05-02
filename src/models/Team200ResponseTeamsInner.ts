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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Team200ResponseTeamsInner
 */
export interface Team200ResponseTeamsInner {
    /**
     * Team ID
     * @type {number}
     * @memberof Team200ResponseTeamsInner
     */
    id?: number;
    /**
     * Team name
     * @type {string}
     * @memberof Team200ResponseTeamsInner
     */
    name?: string;
}

/**
 * Check if a given object implements the Team200ResponseTeamsInner interface.
 */
export function instanceOfTeam200ResponseTeamsInner(value: object): boolean {
    return true;
}

export function Team200ResponseTeamsInnerFromJSON(json: any): Team200ResponseTeamsInner {
    return Team200ResponseTeamsInnerFromJSONTyped(json, false);
}

export function Team200ResponseTeamsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Team200ResponseTeamsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function Team200ResponseTeamsInnerToJSON(value?: Team200ResponseTeamsInner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}
