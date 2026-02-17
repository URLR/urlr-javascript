
# GetStatistics200Response


## Properties

Name | Type
------------ | -------------
`linkId` | string
`clicks` | number
`uniqueClicks` | number

## Example

```typescript
import type { GetStatistics200Response } from 'urlr-js'

// TODO: Update the object below with actual values
const example = {
  "linkId": null,
  "clicks": 51,
  "uniqueClicks": 32,
} satisfies GetStatistics200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatistics200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


