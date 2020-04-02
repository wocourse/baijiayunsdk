# 百家云nodejs sdk

## 用法

```
const baijiayunsdk = require('./modules/baijiayunsdk')

// privateDomain: 百家云专属三级域名，如e12345678
// partnerId: 机构Partner_ID
// partnerKey: 机构Partner_Key
let baijiayunsdk = new BaijiayunSDK.Client(privateDomain, partnerId, partnerKey) 

// "https://${privateDomain}.at.baijiayun.com/openapi/`${action}`" -> POST url
// params: 请求参数{}（注意无需添加partner_id，timestamp和sign字段）
var result = await baijiayunsdk.call(action, params) 
console.log(result)
```

参考test.js样例

[百家云api](http://dev.baijiayun.com/wiki/detail/78)