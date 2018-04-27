# claudia_serverless

用claudia.js 及 lambda試做serverless express服務  

### Pre-required

+ AWS account
+ Full access to IAM, Lambda, API Gateway services
+ Add credentials with aws-cli or build manually

### Install dependencies  

```powershell
$ npm install
```

### Deploy to AWS Lambda service

```shell
$ npm run deploy
 # or
$ claudia create --handler lambda.handler --deploy-proxy-api --region {YOUR-PREFER-REGION}
```

After deploy you will see information like follows:
```json
{
  "lambda": {
    "role": "serverless-executor",
    "name": "serverless",
    "region": "YOUR-PREFER-REGION"
  },
  "api": {
    "id": "CREATED_ID",
    "url": "https://CREATED_ID.execute-api.YOUR-PREFER-REGION.amazonaws.com/latest"
  }
}
```
You could test your serverless express web via above url address and append query string, like:

```https://CREATED_ID.execute-api.YOUR-PREFER-REGION.amazonaws.com/latest?name=Tea```

Then refresh page, you'll see the page content has been changed.

### Update after you modified your code

```shell
$ claudia update
```

### Terminate (also remove IAM role and lambda handler)

```shell
$ claudia destroy
```

### app.js

```javascript
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    // Put query string into response
    res.send(`Hello, ${req.query.name}`)
})
module.exports = app
```

### References

<https://claudiajs.com/tutorials/serverless-express.html>
