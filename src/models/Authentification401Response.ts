/* tslint:disable */
/* eslint-disable */
/**
 * Developer API - URLR
 * API powering the features of URLR.
 *
 * The version of the OpenAPI document: 0.2
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
 * @interface Authentification401Response
 */
export interface Authentification401Response {
    /**
     * 
     * @type {number}
     * @memberof Authentification401Response
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof Authentification401Response
     */
    message?: string;
}

/**
 * Check if a given object implements the Authentification401Response interface.
 */
export function instanceOfAuthentification401Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Authentification401ResponseFromJSON(json: any): Authentification401Response {
    return Authentification401ResponseFromJSONTyped(json, false);
}

export function Authentification401ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Authentification401Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function Authentification401ResponseToJSON(value?: Authentification401Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
    };
}

