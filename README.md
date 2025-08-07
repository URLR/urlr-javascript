# urlr-js@2.11.1

![NPM Version](https://img.shields.io/npm/v/urlr-js) ![NPM Downloads](https://img.shields.io/npm/dm/urlr-js) ![NPM License](https://img.shields.io/npm/l/urlr-js)

TypeScript/JavaScript client for URLR, the GDPR-compliant all-in-one platform for link shortening.

This SDK is automatically generated with the [OpenAPI Generator](https://openapi-generator.tech) project.

- API version: 1.10
- Package version: 2.11.1
- Build package: urlr-js

For more information, please visit [https://urlr.me/en](https://urlr.me/en)

This generator creates TypeScript/JavaScript client that utilizes [Fetch API](https://fetch.spec.whatwg.org/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript.

## Building

To build and compile the TypeScript sources to JavaScript use:
```
npm install
npm run build
```

## Installation

Navigate to the folder of your project and run one of the following commands:

### NPM

```
npm install urlr-js@2.11.1
```

### Yarn

```
yarn install urlr-js@2.11.1
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

```javascript
import { Configuration, AccessTokensApi, LinksApi, StatisticsApi, WorkspacesApi } from "urlr-js"

const username = process.env.URLR_API_USERNAME; // to be defined on your side
const password = process.env.URLR_API_PASSWORD; // to be defined on your side

// Access Tokens

let configuration = new Configuration();

const accessTokensApi = new AccessTokensApi(configuration);
accessTokensApi.createAccessToken({
  createAccessTokenRequest: {
    username: username,
    password: password,
  }
}).then(function (data) {
  configuration = new Configuration({
    accessToken: data.token,
    basePath: baseUrl
  });

  // Create a link

  const linksApi = new LinksApi(configuration);
  linksApi.createLink({
    createLinkRequest: {
      url: '',
      teamId: '',
    }
  }).then(function (link) {
      console.log(link);
  }).catch((error) => console.error(error));
}).catch((error) => console.error(error));
```

A complete example is [available here](examples/example1.js).

## API Endpoints

All URIs are relative to *https://urlr.me/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccessTokensApi* | **createAccessToken** | **POST** /access_tokens/create | Get an access token
*AccessTokensApi* | **refreshAccessToken** | **POST** /access_tokens/refresh | Refresh an access token
*DomainsApi* | **createDomain** | **POST** /domains/create | Create a domain
*FoldersApi* | **getFolders** | **GET** /folders/{team_id} | Get folders of workspace
*LinksApi* | **createLink** | **POST** /links/create | Create a link
*LinksApi* | **editLink** | **PATCH** /links/{link_id} | Edit a link
*LinksApi* | **getLink** | **GET** /links/{link_id} | Get a link
*QRCodesApi* | **createQrCode** | **POST** /qrcodes/create | Create a QR Code
*StatisticsApi* | **getStatistics** | **POST** /statistics | Get statistics of a link
*WorkspacesApi* | **getTeams** | **GET** /teams | Get workspaces of user


## Authorization


### bearerAuth

- **Type**: Bearer authentication (JWT)


## Get help / support

Please contact [contact@urlr.me](mailto:contact@urlr.me?subject=[GitHub]%urlr-javascript) and we can take more direct action toward finding a solution.
