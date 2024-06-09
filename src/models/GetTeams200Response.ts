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
import type { GetTeams200ResponseTeamsInner } from './GetTeams200ResponseTeamsInner';
import {
    GetTeams200ResponseTeamsInnerFromJSON,
    GetTeams200ResponseTeamsInnerFromJSONTyped,
    GetTeams200ResponseTeamsInnerToJSON,
} from './GetTeams200ResponseTeamsInner';

/**
 * 
 * @export
 * @interface GetTeams200Response
 */
export interface GetTeams200Response {
    /**
     * 
     * @type {Array<GetTeams200ResponseTeamsInner>}
     * @memberof GetTeams200Response
     */
    teams?: Array<GetTeams200ResponseTeamsInner>;
}

/**
 * Check if a given object implements the GetTeams200Response interface.
 */
export function instanceOfGetTeams200Response(value: object): value is GetTeams200Response {
    return true;
}

export function GetTeams200ResponseFromJSON(json: any): GetTeams200Response {
    return GetTeams200ResponseFromJSONTyped(json, false);
}

export function GetTeams200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTeams200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'teams': json['teams'] == null ? undefined : ((json['teams'] as Array<any>).map(GetTeams200ResponseTeamsInnerFromJSON)),
    };
}

export function GetTeams200ResponseToJSON(value?: GetTeams200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'teams': value['teams'] == null ? undefined : ((value['teams'] as Array<any>).map(GetTeams200ResponseTeamsInnerToJSON)),
    };
}

