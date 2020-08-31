# Path Variables

Returns the path variables in the URL.

- **URL**

`/pathVars/:ping`

- **Method**

`GET`

- **Path Variable**

`ping = whatever`

- **Expected Responses**
    - Success
      - Code: `200`
      - Body: `whatever`

- **Sample Call**
```
curl --location
--request GET 'URL/pathVars/pong'
```
