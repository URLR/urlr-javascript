# WorkspacesApi

All URIs are relative to *https://urlr.me/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTeams**](WorkspacesApi.md#getteams) | **GET** /teams | Get workspaces of user |



## getTeams

> GetTeams200Response getTeams()

Get workspaces of user

### Example

```ts
import {
  Configuration,
  WorkspacesApi,
} from 'urlr-js';
import type { GetTeamsRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkspacesApi(config);

  try {
    const data = await api.getTeams();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetTeams200Response**](GetTeams200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Workspaces of user |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

