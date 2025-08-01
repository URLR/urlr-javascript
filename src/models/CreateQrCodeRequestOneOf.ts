/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.10
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
 * @interface CreateQrCodeRequestOneOf
 */
export interface CreateQrCodeRequestOneOf {
    /**
     * URL of the QR Code
     * @type {string}
     * @memberof CreateQrCodeRequestOneOf
     */
    url: string;
    /**
     * Workspace API ID
     * @type {string}
     * @memberof CreateQrCodeRequestOneOf
     */
    teamId: string;
}

/**
 * Check if a given object implements the CreateQrCodeRequestOneOf interface.
 */
export function instanceOfCreateQrCodeRequestOneOf(value: object): value is CreateQrCodeRequestOneOf {
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('teamId' in value) || value['teamId'] === undefined) return false;
    return true;
}

export function CreateQrCodeRequestOneOfFromJSON(json: any): CreateQrCodeRequestOneOf {
    return CreateQrCodeRequestOneOfFromJSONTyped(json, false);
}

export function CreateQrCodeRequestOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateQrCodeRequestOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
        'teamId': json['team_id'],
    };
}

export function CreateQrCodeRequestOneOfToJSON(json: any): CreateQrCodeRequestOneOf {
    return CreateQrCodeRequestOneOfToJSONTyped(json, false);
}

export function CreateQrCodeRequestOneOfToJSONTyped(value?: CreateQrCodeRequestOneOf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'url': value['url'],
        'team_id': value['teamId'],
    };
}

