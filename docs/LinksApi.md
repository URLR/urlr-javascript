# LinksApi

All URIs are relative to *https://urlr.me/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createLink**](LinksApi.md#createlinkoperation) | **POST** /links/create | Create a link |
| [**editLink**](LinksApi.md#editlinkoperation) | **PATCH** /links/{link_id} | Edit a link |
| [**getLink**](LinksApi.md#getlink) | **GET** /links/{link_id} | Get a link |
| [**listLinks**](LinksApi.md#listlinks) | **GET** /links | List links |



## createLink

> Link createLink(createLinkRequest)

Create a link

### Example

```ts
import {
  Configuration,
  LinksApi,
} from 'urlr-js';
import type { CreateLinkOperationRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LinksApi(config);

  const body = {
    // CreateLinkRequest | Info of the link to create (optional)
    createLinkRequest: ...,
  } satisfies CreateLinkOperationRequest;

  try {
    const data = await api.createLink(body);
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
| **createLinkRequest** | [CreateLinkRequest](CreateLinkRequest.md) | Info of the link to create | [Optional] |

### Return type

[**Link**](Link.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Link |  -  |
| **401** | Unauthorized |  -  |
| **422** | Validation Failed |  -  |
| **429** | Limits Exceeded |  -  |
| **500** | Internal Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## editLink

> Link editLink(linkId, editLinkRequest)

Edit a link

### Example

```ts
import {
  Configuration,
  LinksApi,
} from 'urlr-js';
import type { EditLinkOperationRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LinksApi(config);

  const body = {
    // string | Link API ID
    linkId: ffefc6c4-d970-4373-a867-2a69c8be2c89,
    // EditLinkRequest | Info of the link to edit (optional)
    editLinkRequest: ...,
  } satisfies EditLinkOperationRequest;

  try {
    const data = await api.editLink(body);
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
| **linkId** | `string` | Link API ID | [Defaults to `undefined`] |
| **editLinkRequest** | [EditLinkRequest](EditLinkRequest.md) | Info of the link to edit | [Optional] |

### Return type

[**Link**](Link.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Link |  -  |
| **401** | Unauthorized |  -  |
| **422** | Validation Failed |  -  |
| **500** | Internal Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLink

> Link getLink(linkId)

Get a link

### Example

```ts
import {
  Configuration,
  LinksApi,
} from 'urlr-js';
import type { GetLinkRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LinksApi(config);

  const body = {
    // string | Link API ID
    linkId: ffefc6c4-d970-4373-a867-2a69c8be2c89,
  } satisfies GetLinkRequest;

  try {
    const data = await api.getLink(body);
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
| **linkId** | `string` | Link API ID | [Defaults to `undefined`] |

### Return type

[**Link**](Link.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Link |  -  |
| **404** | Not Found |  -  |
| **401** | Unauthorized |  -  |
| **422** | Validation Failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listLinks

> ListLinks200Response listLinks(teamId, folderId, tagId, limit, page)

List links

### Example

```ts
import {
  Configuration,
  LinksApi,
} from 'urlr-js';
import type { ListLinksRequest } from 'urlr-js';

async function example() {
  console.log("🚀 Testing urlr-js SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new LinksApi(config);

  const body = {
    // string | Filter by Workspace API ID (optional)
    teamId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Filter by Folder API ID (optional)
    folderId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Filter by Tag API ID (optional)
    tagId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // number | Number of items per page (optional)
    limit: 56,
    // number | Page number (optional)
    page: 56,
  } satisfies ListLinksRequest;

  try {
    const data = await api.listLinks(body);
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
| **teamId** | `string` | Filter by Workspace API ID | [Optional] [Defaults to `undefined`] |
| **folderId** | `string` | Filter by Folder API ID | [Optional] [Defaults to `undefined`] |
| **tagId** | `string` | Filter by Tag API ID | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items per page | [Optional] [Defaults to `10`] |
| **page** | `number` | Page number | [Optional] [Defaults to `1`] |

### Return type

[**ListLinks200Response**](ListLinks200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `application/problem+json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of links |  -  |
| **422** | Validation Failed |  -  |
| **404** | Not Found |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

