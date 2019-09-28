##### This is a plugin for getting post request data in koa
- Introductions
```javascript
const koa = require("koa")
const parse = require("koa-parse-plugin")

const app = new koa()
app.use(parse())

app.listen(3000)
console.log("app is running at http://localhost:3000")
```