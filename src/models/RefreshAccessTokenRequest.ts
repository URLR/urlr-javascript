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
 * @interface RefreshAccessTokenRequest
 */
export interface RefreshAccessTokenRequest {
    /**
     * Refresh token
     * @type {string}
     * @memberof RefreshAccessTokenRequest
     */
    refreshToken: string;
}

/**
 * Check if a given object implements the RefreshAccessTokenRequest interface.
 */
export function instanceOfRefreshAccessTokenRequest(value: object): value is RefreshAccessTokenRequest {
    if (!('refreshToken' in value) || value['refreshToken'] === undefined) return false;
    return true;
}

export function RefreshAccessTokenRequestFromJSON(json: any): RefreshAccessTokenRequest {
    return RefreshAccessTokenRequestFromJSONTyped(json, false);
}

export function RefreshAccessTokenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefreshAccessTokenRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'refreshToken': json['refresh_token'],
    };
}

  export function RefreshAccessTokenRequestToJSON(json: any): RefreshAccessTokenRequest {
      return RefreshAccessTokenRequestToJSONTyped(json, false);
  }

  export function RefreshAccessTokenRequestToJSONTyped(value?: RefreshAccessTokenRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'refresh_token': value['refreshToken'],
    };
}

