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
import type { Team200ResponseTeamsInner } from './Team200ResponseTeamsInner';
import {
    Team200ResponseTeamsInnerFromJSON,
    Team200ResponseTeamsInnerFromJSONTyped,
    Team200ResponseTeamsInnerToJSON,
} from './Team200ResponseTeamsInner';

/**
 * 
 * @export
 * @interface Team200Response
 */
export interface Team200Response {
    /**
     * 
     * @type {Array<Team200ResponseTeamsInner>}
     * @memberof Team200Response
     */
    teams?: Array<Team200ResponseTeamsInner>;
}

/**
 * Check if a given object implements the Team200Response interface.
 */
export function instanceOfTeam200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Team200ResponseFromJSON(json: any): Team200Response {
    return Team200ResponseFromJSONTyped(json, false);
}

export function Team200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Team200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teams': !exists(json, 'teams') ? undefined : ((json['teams'] as Array<any>).map(Team200ResponseTeamsInnerFromJSON)),
    };
}

export function Team200ResponseToJSON(value?: Team200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'teams': value.teams === undefined ? undefined : ((value.teams as Array<any>).map(Team200ResponseTeamsInnerToJSON)),
    };
}

