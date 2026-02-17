# AccessTokensApi

All URIs are relative to *https://urlr.me/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAccessToken**](AccessTokensApi.md#createaccesstokenoperation) | **POST** /access_tokens/create | Get an access token |
| [**refreshAccessToken**](AccessTokensApi.md#refreshaccesstokenoperation) | **POST** /access_tokens/refresh | Refresh an access token |



## createAccessToken

> CreateAccessToken200Response createAccessToken(createAccessTokenRequest)

Get an access token

### Example

```ts
import {
  Configuration,
  AccessTokensApi,
} from 'urlr-js';
import type { CreateAccessTokenOperationRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const api = new AccessTokensApi();

  const body = {
    // CreateAccessTokenRequest | You can use this endpoint to get an access token to access the API. (optional)
    createAccessTokenRequest: ...,
  } satisfies CreateAccessTokenOperationRequest;

  try {
    const data = await api.createAccessToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createAccessTokenRequest** | [CreateAccessTokenRequest](CreateAccessTokenRequest.md) | You can use this endpoint to get an access token to access the API. | [Optional] |

### Return type

[**CreateAccessToken200Response**](CreateAccessToken200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Access token |  -  |
| **401** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refreshAccessToken

> CreateAccessToken200Response refreshAccessToken(refreshAccessTokenRequest)

Refresh an access token

### Example

```ts
import {
  Configuration,
  AccessTokensApi,
} from 'urlr-js';
import type { RefreshAccessTokenOperationRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const api = new AccessTokensApi();

  const body = {
    // RefreshAccessTokenRequest | You can use this endpoint to refresh your access token without credentials. (optional)
    refreshAccessTokenRequest: ...,
  } satisfies RefreshAccessTokenOperationRequest;

  try {
    const data = await api.refreshAccessToken(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **refreshAccessTokenRequest** | [RefreshAccessTokenRequest](RefreshAccessTokenRequest.md) | You can use this endpoint to refresh your access token without credentials. | [Optional] |

### Return type

[**CreateAccessToken200Response**](CreateAccessToken200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Refreshed access token |  -  |
| **401** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

