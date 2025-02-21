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


import * as runtime from '../runtime';
import type {
  CreateAccessToken200Response,
  CreateAccessToken401Response,
  CreateAccessTokenRequest,
  RefreshAccessToken401Response,
  RefreshAccessTokenRequest,
} from '../models/index';
import {
    CreateAccessToken200ResponseFromJSON,
    CreateAccessToken200ResponseToJSON,
    CreateAccessToken401ResponseFromJSON,
    CreateAccessToken401ResponseToJSON,
    CreateAccessTokenRequestFromJSON,
    CreateAccessTokenRequestToJSON,
    RefreshAccessToken401ResponseFromJSON,
    RefreshAccessToken401ResponseToJSON,
    RefreshAccessTokenRequestFromJSON,
    RefreshAccessTokenRequestToJSON,
} from '../models/index';

export interface CreateAccessTokenOperationRequest {
    createAccessTokenRequest?: CreateAccessTokenRequest;
}

export interface RefreshAccessTokenOperationRequest {
    refreshAccessTokenRequest?: RefreshAccessTokenRequest;
}

/**
 * 
 */
export class AccessTokensApi extends runtime.BaseAPI {

    /**
     * Get an access token
     */
    async createAccessTokenRaw(requestParameters: CreateAccessTokenOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateAccessToken200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/access_tokens/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAccessTokenRequestToJSON(requestParameters['createAccessTokenRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateAccessToken200ResponseFromJSON(jsonValue));
    }

    /**
     * Get an access token
     */
    async createAccessToken(requestParameters: CreateAccessTokenOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateAccessToken200Response> {
        const response = await this.createAccessTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Refresh an access token
     */
    async refreshAccessTokenRaw(requestParameters: RefreshAccessTokenOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateAccessToken200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/access_tokens/refresh`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RefreshAccessTokenRequestToJSON(requestParameters['refreshAccessTokenRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateAccessToken200ResponseFromJSON(jsonValue));
    }

    /**
     * Refresh an access token
     */
    async refreshAccessToken(requestParameters: RefreshAccessTokenOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateAccessToken200Response> {
        const response = await this.refreshAccessTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
