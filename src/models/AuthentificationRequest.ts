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
 * @interface AuthentificationRequest
 */
export interface AuthentificationRequest {
    /**
     * Email
     * @type {string}
     * @memberof AuthentificationRequest
     */
    username?: string;
    /**
     * Password
     * @type {string}
     * @memberof AuthentificationRequest
     */
    password?: string;
}

/**
 * Check if a given object implements the AuthentificationRequest interface.
 */
export function instanceOfAuthentificationRequest(value: object): boolean {
    return true;
}

export function AuthentificationRequestFromJSON(json: any): AuthentificationRequest {
    return AuthentificationRequestFromJSONTyped(json, false);
}

export function AuthentificationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthentificationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'] == null ? undefined : json['username'],
        'password': json['password'] == null ? undefined : json['password'],
    };
}

export function AuthentificationRequestToJSON(value?: AuthentificationRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'username': value['username'],
        'password': value['password'],
    };
}

