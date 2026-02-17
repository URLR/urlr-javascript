# DomainsApi

All URIs are relative to *https://urlr.me/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDomain**](DomainsApi.md#createdomainoperation) | **POST** /domains/create | Create a domain |



## createDomain

> CreateDomain200Response createDomain(createDomainRequest)

Create a domain

### Example

```ts
import {
  Configuration,
  DomainsApi,
} from 'urlr-js';
import type { CreateDomainOperationRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const api = new DomainsApi();

  const body = {
    // CreateDomainRequest | You can use this endpoint to add a custom domain to URLR. (optional)
    createDomainRequest: ...,
  } satisfies CreateDomainOperationRequest;

  try {
    const data = await api.createDomain(body);
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
| **createDomainRequest** | [CreateDomainRequest](CreateDomainRequest.md) | You can use this endpoint to add a custom domain to URLR. | [Optional] |

### Return type

[**CreateDomain200Response**](CreateDomain200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Domain |  -  |
| **401** | Unauthorized |  -  |
| **429** | Limits Exceeded |  -  |
| **409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

