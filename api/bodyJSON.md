# Body - JSON

Returns the raw data, in JSON format, passed in the request body.

- **URL**

`/queryParams?someKey=someValue`

- **Method**

`POST`

- **Body**

`{"someKey":"someValue"}`

- **Expected Responses**
    - Success
      - Code: `200`
      - Body: `{"someKey":"someValue"}`

- **Sample Call**
```
curl --location
--request GET 'URL/bodyJSON'
--header 'Content-Type: application/json'
--data-raw '{"someKey":"someValue"}'
```
