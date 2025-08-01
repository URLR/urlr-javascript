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


import * as runtime from '../runtime';
import type {
  GetFolders200Response,
  GetLink401Response,
  GetLink404Response,
  GetLink422Response,
} from '../models/index';
import {
    GetFolders200ResponseFromJSON,
    GetFolders200ResponseToJSON,
    GetLink401ResponseFromJSON,
    GetLink401ResponseToJSON,
    GetLink404ResponseFromJSON,
    GetLink404ResponseToJSON,
    GetLink422ResponseFromJSON,
    GetLink422ResponseToJSON,
} from '../models/index';

export interface GetFoldersRequest {
    teamId: string;
}

/**
 * 
 */
export class FoldersApi extends runtime.BaseAPI {

    /**
     * Get folders of workspace
     */
    async getFoldersRaw(requestParameters: GetFoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetFolders200Response>> {
        if (requestParameters['teamId'] == null) {
            throw new runtime.RequiredError(
                'teamId',
                'Required parameter "teamId" was null or undefined when calling getFolders().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/folders/{team_id}`;
        urlPath = urlPath.replace(`{${"team_id"}}`, encodeURIComponent(String(requestParameters['teamId'])));

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetFolders200ResponseFromJSON(jsonValue));
    }

    /**
     * Get folders of workspace
     */
    async getFolders(requestParameters: GetFoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetFolders200Response> {
        const response = await this.getFoldersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
