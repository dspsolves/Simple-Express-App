# Route Parameters

Returns the route parameter in the URL.

- **URL**

`/routeParams/:ping`

- **Method**

`GET`

- **URL Param**

`ping = whatever`

- **Expected Responses**
    - Success
      - Code: `200`
      - Body: `whatever`

- **Sample Call**
```
curl --location
--request GET 'URL/routeParams/pong'
```
