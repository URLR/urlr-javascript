
# ListLinks200Response


## Properties

Name | Type
------------ | -------------
`links` | [Array&lt;Link&gt;](Link.md)
`total` | number
`limit` | number
`pages` | number
`page` | number

## Example

```typescript
import type { ListLinks200Response } from 'urlr-js'

// TODO: Update the object below with actual values
const example = {
  "links": null,
  "total": null,
  "limit": null,
  "pages": null,
  "page": null,
} satisfies ListLinks200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListLinks200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


