# QRCodesApi

All URIs are relative to *https://urlr.me/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createQrCode**](QRCodesApi.md#createqrcodeoperation) | **POST** /qrcodes/create | Create a QR Code |



## createQrCode

> Blob createQrCode(createQrCodeRequest)

Create a QR Code

### Example

```ts
import {
  Configuration,
  QRCodesApi,
} from 'urlr-js';
import type { CreateQrCodeOperationRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new QRCodesApi(config);

  const body = {
    // CreateQrCodeRequest | Info of the QR Code to create (optional)
    createQrCodeRequest: ...,
  } satisfies CreateQrCodeOperationRequest;

  try {
    const data = await api.createQrCode(body);
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
| **createQrCodeRequest** | [CreateQrCodeRequest](CreateQrCodeRequest.md) | Info of the QR Code to create | [Optional] |

### Return type

**Blob**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `image/png`, `image/webp`, `image/svg+xml`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | QR Code |  -  |
| **401** | Unauthorized |  -  |
| **422** | Validation Failed |  -  |
| **429** | Limits Exceeded |  -  |
| **500** | Internal Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

