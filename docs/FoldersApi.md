# FoldersApi

All URIs are relative to *https://urlr.me/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFolder**](FoldersApi.md#createfolderoperation) | **POST** /folders/create | Create a folder |
| [**getFolders**](FoldersApi.md#getfolders) | **GET** /folders/{team_id} | Get folders of workspace |



## createFolder

> CreateFolder200Response createFolder(createFolderRequest)

Create a folder

### Example

```ts
import {
  Configuration,
  FoldersApi,
} from 'urlr-js';
import type { CreateFolderOperationRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const api = new FoldersApi();

  const body = {
    // CreateFolderRequest | You can use this endpoint to add a folder to URLR. (optional)
    createFolderRequest: ...,
  } satisfies CreateFolderOperationRequest;

  try {
    const data = await api.createFolder(body);
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
| **createFolderRequest** | [CreateFolderRequest](CreateFolderRequest.md) | You can use this endpoint to add a folder to URLR. | [Optional] |

### Return type

[**CreateFolder200Response**](CreateFolder200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Folder |  -  |
| **401** | Unauthorized |  -  |
| **429** | Limits Exceeded |  -  |
| **409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getFolders

> GetFolders200Response getFolders(teamId)

Get folders of workspace

### Example

```ts
import {
  Configuration,
  FoldersApi,
} from 'urlr-js';
import type { GetFoldersRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new FoldersApi(config);

  const body = {
    // string | Workspace API ID
    teamId: ffefc6c4-d970-4373-a867-2a69c8be2c89,
  } satisfies GetFoldersRequest;

  try {
    const data = await api.getFolders(body);
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
| **teamId** | `string` | Workspace API ID | [Defaults to `undefined`] |

### Return type

[**GetFolders200Response**](GetFolders200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Folders of workspace |  -  |
| **404** | Not Found |  -  |
| **401** | Unauthorized |  -  |
| **422** | Validation Failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

