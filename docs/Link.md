
# Link


## Properties

Name | Type
------------ | -------------
`id` | string
`url` | string
`teamId` | string
`folderId` | string
`domain` | string
`code` | string
`label` | string
`tags` | [Array&lt;LinkTagsInner&gt;](LinkTagsInner.md)
`password` | string
`qrcode` | [LinkQrcode](LinkQrcode.md)
`utm` | [LinkUtm](LinkUtm.md)
`metatag` | [LinkMetatag](LinkMetatag.md)
`geolinks` | [Array&lt;LinkGeolinksInner&gt;](LinkGeolinksInner.md)
`createdAt` | Date
`updatedAt` | Date
`deleteAt` | Date
`expiredAt` | Date
`expiredUrl` | string
`deleteAfterExpiration` | boolean

## Example

```typescript
import type { Link } from 'urlr-js'

// TODO: Update the object below with actual values
const example = {
  "id": 436b5d20-e174-4363-94e5-2b3dd4e74b5f,
  "url": null,
  "teamId": null,
  "folderId": null,
  "domain": urlr.me,
  "code": xxxxx,
  "label": null,
  "tags": null,
  "password": **********,
  "qrcode": null,
  "utm": null,
  "metatag": null,
  "geolinks": null,
  "createdAt": null,
  "updatedAt": null,
  "deleteAt": null,
  "expiredAt": null,
  "expiredUrl": null,
  "deleteAfterExpiration": null,
} satisfies Link

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Link
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


