

### Login
In order to access protected endpoints for creation, deletion or resource updating user need to be authorized.   
There is already created user in DB which credentials can be used in order to login.    
Auth endpoint
```
POST http://localhost:3333/login
```
Request Payload
```
{
  "email": "dev@dev.com",
  "password": "developer"
}
```   
Successful login response 
```
{
  "accessToken": "ey...Yc"
}
```

Token needs to be sent as header for each http request sent to API.
```
  { Authorization: 'Bearer <USER ACCESS TOKEN>' }
```
### Additional info

Application data is in `db/db.json` file.
