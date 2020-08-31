# Query Parameters

Returns the query parameters passed in the URL.

- **URL**

`/queryParams?someKey=someValue`

- **Method**

`GET`

- **Query Params**

`someKey = someValue`

*whatever and as many as you want in the format

- **Expected Responses**
    - Success
      - Code: `200`
      - Body: `{"someKey":"someValue"}`

- **Sample Call**
```
curl --location
--request GET 'URL/queryParams?someKey=someValue'
```
