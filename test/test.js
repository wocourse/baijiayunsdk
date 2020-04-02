const BaijiayunSDK = require('../../baijiayunsdk')
const config = require('../config/config.default.js')
const baijiayunClient = new BaijiayunSDK.Client(config.baijiayun.privateDomain, config.baijiayun.partnerId, config.baijiayun.partnerKey)

var demo = async () => {
    // 创建直播间
    var start = new Date().getTime() + 1000 * 60
    var end = new Date().getTime() + 1000 * 90
    var result = await baijiayunClient.call("room/create", {
        title: '测试直播间',
        start_time: Math.round(start / 1000),
        end_time: Math.round(end / 1000)
    })
    console.log(result)
}

demo()