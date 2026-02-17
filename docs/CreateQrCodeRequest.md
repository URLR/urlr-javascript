
# CreateQrCodeRequest


## Properties

Name | Type
------------ | -------------
`size` | number
`format` | string
`margin` | number
`backgroundColor` | string
`foregroundColor` | string
`url` | string
`teamId` | string
`linkId` | string

## Example

```typescript
import type { CreateQrCodeRequest } from 'urlr-js'

// TODO: Update the object below with actual values
const example = {
  "size": null,
  "format": null,
  "margin": null,
  "backgroundColor": null,
  "foregroundColor": null,
  "url": null,
  "teamId": null,
  "linkId": null,
} satisfies CreateQrCodeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateQrCodeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


