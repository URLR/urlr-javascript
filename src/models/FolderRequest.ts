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
 * @interface FolderRequest
 */
export interface FolderRequest {
    /**
     * Team ID (displayed on dashboard)
     * @type {number}
     * @memberof FolderRequest
     */
    team: number;
}

/**
 * Check if a given object implements the FolderRequest interface.
 */
export function instanceOfFolderRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "team" in value;

    return isInstance;
}

export function FolderRequestFromJSON(json: any): FolderRequest {
    return FolderRequestFromJSONTyped(json, false);
}

export function FolderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolderRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'team': json['team'],
    };
}

export function FolderRequestToJSON(value?: FolderRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'team': value.team,
    };
}

