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


import * as runtime from '../runtime';
import type {
  ReduceLink200Response,
  ReduceLink400Response,
  ReduceLinkRequest,
} from '../models/index';
import {
    ReduceLink200ResponseFromJSON,
    ReduceLink200ResponseToJSON,
    ReduceLink400ResponseFromJSON,
    ReduceLink400ResponseToJSON,
    ReduceLinkRequestFromJSON,
    ReduceLinkRequestToJSON,
} from '../models/index';

export interface ReduceLinkOperationRequest {
    reduceLinkRequest?: ReduceLinkRequest;
}

/**
 * 
 */
export class LinkApi extends runtime.BaseAPI {

    /**
     * Reduce a link
     */
    async reduceLinkRaw(requestParameters: ReduceLinkOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReduceLink200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/reduce-link`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ReduceLinkRequestToJSON(requestParameters.reduceLinkRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReduceLink200ResponseFromJSON(jsonValue));
    }

    /**
     * Reduce a link
     */
    async reduceLink(requestParameters: ReduceLinkOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReduceLink200Response> {
        const response = await this.reduceLinkRaw(requestParameters, initOverrides);
        return await response.value();
    }

}