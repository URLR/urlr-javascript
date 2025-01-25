/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.4
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
 * @interface GetTeams200ResponseTeamsInner
 */
export interface GetTeams200ResponseTeamsInner {
    /**
     * Team API ID
     * @type {string}
     * @memberof GetTeams200ResponseTeamsInner
     */
    id?: string;
    /**
     * Team name
     * @type {string}
     * @memberof GetTeams200ResponseTeamsInner
     */
    name?: string;
}

/**
 * Check if a given object implements the GetTeams200ResponseTeamsInner interface.
 */
export function instanceOfGetTeams200ResponseTeamsInner(value: object): value is GetTeams200ResponseTeamsInner {
    return true;
}

export function GetTeams200ResponseTeamsInnerFromJSON(json: any): GetTeams200ResponseTeamsInner {
    return GetTeams200ResponseTeamsInnerFromJSONTyped(json, false);
}

export function GetTeams200ResponseTeamsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTeams200ResponseTeamsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function GetTeams200ResponseTeamsInnerToJSON(json: any): GetTeams200ResponseTeamsInner {
    return GetTeams200ResponseTeamsInnerToJSONTyped(json, false);
}

export function GetTeams200ResponseTeamsInnerToJSONTyped(value?: GetTeams200ResponseTeamsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

