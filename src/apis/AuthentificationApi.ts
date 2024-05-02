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


import * as runtime from '../runtime';
import type {
  Authentification200Response,
  Authentification401Response,
  AuthentificationRequest,
} from '../models/index';
import {
    Authentification200ResponseFromJSON,
    Authentification200ResponseToJSON,
    Authentification401ResponseFromJSON,
    Authentification401ResponseToJSON,
    AuthentificationRequestFromJSON,
    AuthentificationRequestToJSON,
} from '../models/index';

export interface AuthentificationOperationRequest {
    authentificationRequest?: AuthentificationRequest;
}

/**
 * 
 */
export class AuthentificationApi extends runtime.BaseAPI {

    /**
     * Get an access token
     */
    async authentificationRaw(requestParameters: AuthentificationOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Authentification200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/login_check`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthentificationRequestToJSON(requestParameters['authentificationRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Authentification200ResponseFromJSON(jsonValue));
    }

    /**
     * Get an access token
     */
    async authentification(requestParameters: AuthentificationOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Authentification200Response> {
        const response = await this.authentificationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
