var body = $response.body
    //替换无感支付
    .replaceAll("0==i.myUserInfo.authpost","0==1")
    .replaceAll("0!=this.myUserInfo.authpost","0!=1")
    .replaceAll("0!=t.myUserInfo.authpost","0!=1")
    .replaceAll("0==this.myUserInfo.authpost","0==1")
    .replaceAll("0==i.myUserInfo.authpost","0==1")
    //替换报错提醒
.replaceAll("enableDebug:!1", "enableDebug: 1")
    .replaceAll("enableDebug: !1", "enableDebug: 1")
    //替换页面转跳
    //.replaceAll("url:\"../cz/cz\"", "this.func_toast(uni.getStorageSync(\"ISPDATA\"))")
    //替换弹窗
    //.replaceAll("(console.log(\"接收数据：\",o)", "(console.log(\"接收数据：\",o),uni.showToast({title:\"设备4连接\"+o,icon:\"none\",duration:2e3}),")
$done({ body });
