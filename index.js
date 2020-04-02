const apiRoot = "https://##.at.baijiayun.com/openapi/"
const md5 = require('md5')
const request = require('request');

function Client(privateDomain, partnerId, partnerKey) {
    this.privateDomain = privateDomain.trim()
    this.partnerId = partnerId.trim()
    this.partnerKey = partnerKey.trim()
};

// 调用API
Client.prototype.call = async function (action, queryData) {
    var url = apiRoot.replace(/##/g, (g) => this.privateDomain) + action
    var queryString = this.thqs(queryData)
    var options = {
      url: `${url}`,
      method: 'POST',
      headers: {  
          'Content-Type': 'application/x-www-form-urlencoded'  
      },
      body: queryString
    }
    return await new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                reject(error)
            }
            resolve(body)
        })
    })
}

// 签名
Client.prototype.thqs = function (params) {
    params.partner_id = this.partnerId
    params.timestamp = Math.round(new Date().getTime() / 1000)
    var keys = Object.keys(params).sort()
    var qs = ''
    for (var key of keys) {
        if (params[key]) {
            qs += `${key}=${params[key]}&`
        }
    }
    sign = md5(qs + `partner_key=${this.partnerKey}`)
    qs += `sign=${sign}`
    return qs
}

exports.Client = Client;