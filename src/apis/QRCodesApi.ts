/* tslint:disable */
/* eslint-disable */
/**
 * URLR API Reference
 * API powering the features of URLR.<br><br>Note that in order to facilitate integration, we provide SDKs for various languages at https://github.com/URLR.<br><br>Key API principles:<br>         <ul><li>All dates follow **ISO-8601** format</li><li>Most errors follow **RFC 9457** standard</li><li>All responses are delivered in English</li></ul>
 *
 * The version of the OpenAPI document: 1.7
 * Contact: contact@urlr.me
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateLink429Response,
  CreateLink500Response,
  CreateQrCodeRequest,
  GetLink401Response,
  GetLink422Response,
} from '../models/index';
import {
    CreateLink429ResponseFromJSON,
    CreateLink429ResponseToJSON,
    CreateLink500ResponseFromJSON,
    CreateLink500ResponseToJSON,
    CreateQrCodeRequestFromJSON,
    CreateQrCodeRequestToJSON,
    GetLink401ResponseFromJSON,
    GetLink401ResponseToJSON,
    GetLink422ResponseFromJSON,
    GetLink422ResponseToJSON,
} from '../models/index';

export interface CreateQrCodeOperationRequest {
    createQrCodeRequest?: CreateQrCodeRequest;
}

/**
 * 
 */
export class QRCodesApi extends runtime.BaseAPI {

    /**
     * Create a QR Code
     */
    async createQrCodeRaw(requestParameters: CreateQrCodeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
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
            path: `/qrcodes/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateQrCodeRequestToJSON(requestParameters['createQrCodeRequest']),
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Create a QR Code
     */
    async createQrCode(requestParameters: CreateQrCodeOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.createQrCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
