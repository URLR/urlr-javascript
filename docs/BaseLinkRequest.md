
# BaseLinkRequest


## Properties

Name | Type
------------ | -------------
`url` | string
`folderId` | string
`domain` | string
`code` | string
`label` | string
`tags` | Array&lt;string&gt;
`password` | string
`qrcode` | [BaseLinkRequestQrcode](BaseLinkRequestQrcode.md)
`utm` | [LinkUtm](LinkUtm.md)
`metatag` | [BaseLinkRequestMetatag](BaseLinkRequestMetatag.md)
`geolinks` | [Array&lt;LinkGeolinksInner&gt;](LinkGeolinksInner.md)
`deleteAt` | Date
`expiredAt` | Date
`expiredUrl` | string
`deleteAfterExpiration` | boolean

## Example

```typescript
import type { BaseLinkRequest } from 'urlr-js'

// TODO: Update the object below with actual values
const example = {
  "url": null,
  "folderId": null,
  "domain": mybrand.com,
  "code": xxxxx,
  "label": null,
  "tags": null,
  "password": null,
  "qrcode": null,
  "utm": null,
  "metatag": null,
  "geolinks": null,
  "deleteAt": null,
  "expiredAt": null,
  "expiredUrl": null,
  "deleteAfterExpiration": null,
} satisfies BaseLinkRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BaseLinkRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


