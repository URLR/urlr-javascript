/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.5
 * Contact: contact@urlr.me
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { GetFolders200ResponseFoldersInner } from './GetFolders200ResponseFoldersInner';
import {
    GetFolders200ResponseFoldersInnerFromJSON,
    GetFolders200ResponseFoldersInnerFromJSONTyped,
    GetFolders200ResponseFoldersInnerToJSON,
    GetFolders200ResponseFoldersInnerToJSONTyped,
} from './GetFolders200ResponseFoldersInner';

/**
 * 
 * @export
 * @interface GetFolders200Response
 */
export interface GetFolders200Response {
    /**
     * 
     * @type {Array<GetFolders200ResponseFoldersInner>}
     * @memberof GetFolders200Response
     */
    folders?: Array<GetFolders200ResponseFoldersInner>;
}

/**
 * Check if a given object implements the GetFolders200Response interface.
 */
export function instanceOfGetFolders200Response(value: object): value is GetFolders200Response {
    return true;
}

export function GetFolders200ResponseFromJSON(json: any): GetFolders200Response {
    return GetFolders200ResponseFromJSONTyped(json, false);
}

export function GetFolders200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFolders200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'folders': json['folders'] == null ? undefined : ((json['folders'] as Array<any>).map(GetFolders200ResponseFoldersInnerFromJSON)),
    };
}

export function GetFolders200ResponseToJSON(json: any): GetFolders200Response {
    return GetFolders200ResponseToJSONTyped(json, false);
}

export function GetFolders200ResponseToJSONTyped(value?: GetFolders200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'folders': value['folders'] == null ? undefined : ((value['folders'] as Array<any>).map(GetFolders200ResponseFoldersInnerToJSON)),
    };
}

