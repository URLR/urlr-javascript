# StatisticsApi

All URIs are relative to *https://urlr.me/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getStatistics**](StatisticsApi.md#getstatisticsoperation) | **POST** /statistics | Get statistics of a link |



## getStatistics

> GetStatistics200Response getStatistics(getStatisticsRequest)

Get statistics of a link

### Example

```ts
import {
  Configuration,
  StatisticsApi,
} from 'urlr-js';
import type { GetStatisticsOperationRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new StatisticsApi(config);

  const body = {
    // GetStatisticsRequest | Infos to provide to get statistics of a link (optional)
    getStatisticsRequest: ...,
  } satisfies GetStatisticsOperationRequest;

  try {
    const data = await api.getStatistics(body);
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
| **getStatisticsRequest** | [GetStatisticsRequest](GetStatisticsRequest.md) | Infos to provide to get statistics of a link | [Optional] |

### Return type

[**GetStatistics200Response**](GetStatistics200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Statistics of the link |  -  |
| **404** | Not Found |  -  |
| **401** | Unauthorized |  -  |
| **422** | Validation Failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

