/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.3
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
 * @interface CreateAccessTokenRequest
 */
export interface CreateAccessTokenRequest {
    /**
     * Email
     * @type {string}
     * @memberof CreateAccessTokenRequest
     */
    username: string;
    /**
     * Password
     * @type {string}
     * @memberof CreateAccessTokenRequest
     */
    password: string;
}

/**
 * Check if a given object implements the CreateAccessTokenRequest interface.
 */
export function instanceOfCreateAccessTokenRequest(value: object): value is CreateAccessTokenRequest {
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    return true;
}

export function CreateAccessTokenRequestFromJSON(json: any): CreateAccessTokenRequest {
    return CreateAccessTokenRequestFromJSONTyped(json, false);
}

export function CreateAccessTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAccessTokenRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'],
        'password': json['password'],
    };
}

export function CreateAccessTokenRequestToJSON(value?: CreateAccessTokenRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'username': value['username'],
        'password': value['password'],
    };
}

