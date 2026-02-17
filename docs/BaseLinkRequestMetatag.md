
# BaseLinkRequestMetatag

Custom metadata for social previews

## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`image` | string

## Example

```typescript
import type { BaseLinkRequestMetatag } from 'urlr-js'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "description": null,
  "image": null,
} satisfies BaseLinkRequestMetatag

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BaseLinkRequestMetatag
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


