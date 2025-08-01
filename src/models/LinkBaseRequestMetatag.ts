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
 * Custom metadata for social previews
 * @export
 * @interface LinkBaseRequestMetatag
 */
export interface LinkBaseRequestMetatag {
    /**
     * Title for the link
     * @type {string}
     * @memberof LinkBaseRequestMetatag
     */
    title?: string;
    /**
     * Description for the link
     * @type {string}
     * @memberof LinkBaseRequestMetatag
     */
    description?: string;
    /**
     * Image URL for the link. Recommended: 1200X630px<br>Maximum size: 3Mb - Formats: PNG, JPEG, WebP and GIF.
     * @type {string}
     * @memberof LinkBaseRequestMetatag
     */
    image?: string;
}

/**
 * Check if a given object implements the LinkBaseRequestMetatag interface.
 */
export function instanceOfLinkBaseRequestMetatag(value: object): value is LinkBaseRequestMetatag {
    return true;
}

export function LinkBaseRequestMetatagFromJSON(json: any): LinkBaseRequestMetatag {
    return LinkBaseRequestMetatagFromJSONTyped(json, false);
}

export function LinkBaseRequestMetatagFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkBaseRequestMetatag {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'image': json['image'] == null ? undefined : json['image'],
    };
}

export function LinkBaseRequestMetatagToJSON(json: any): LinkBaseRequestMetatag {
    return LinkBaseRequestMetatagToJSONTyped(json, false);
}

export function LinkBaseRequestMetatagToJSONTyped(value?: LinkBaseRequestMetatag | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'description': value['description'],
        'image': value['image'],
    };
}

