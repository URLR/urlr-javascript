# urlr-js@2.0.0

![NPM Version](https://img.shields.io/npm/v/urlr-js) ![NPM Downloads](https://img.shields.io/npm/dm/urlr-js) ![NPM License](https://img.shields.io/npm/l/urlr-js)

TypeScript/JavaScript client for URLR, the GDPR-compliant all-in-one platform for link shortening.

This SDK is automatically generated with the [OpenAPI Generator](https://openapi-generator.tech) project.

- API version: 1.0
- Package version: 2.0.0
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
npm install urlr-js@2.0.0
```

### Yarn

```
yarn install urlr-js@2.0.0
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

```javascript
import { Configuration, AccessTokensApi, LinksApi } from "urlr-js"

// Access Tokens

const accessTokensApi = new AccessTokensApi();
accessTokensApi.createAccessToken({
  accessTokensRequest: {
    username: '',
    password: ''
  }
}).then(function (data) {
  const configuration = new Configuration({ accessToken: data.token });

  // Link shortening

  const linksApi = new LinksApi(configuration);
  linksApi.createLink({
    createLinkRequest: {
      url: '',
      team_id: ''
    }
  }).then(function (data) {
    console.log(data)
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
*FoldersApi* | **getFolders** | **GET** /folders/{team_id} | Get folders of team
*LinksApi* | **createLink** | **POST** /links/create | Create a link
*LinksApi* | **getLink** | **GET** /links/{link_id} | Get a link
*StatisticsApi* | **getStatistics** | **POST** /statistics | Get statistics of a link
*TeamsApi* | **getTeams** | **GET** /teams | Get teams of user


## Authorization


### bearerAuth

- **Type**: Bearer authentication (JWT)


## Get help / support

Please contact [contact@urlr.me](mailto:contact@urlr.me?subject=[GitHub]%urlr-javascript) and we can take more direct action toward finding a solution.
