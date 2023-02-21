var body = $response.body
    //替换无感支付
    /*.replaceAll("0==i.myUserInfo.authpost","0==1")
    .replaceAll("0!=this.myUserInfo.authpost","0!=1")
    .replaceAll("0!=t.myUserInfo.authpost","0!=1")
    .replaceAll("0==this.myUserInfo.authpost","0==1")
    .replaceAll("0==i.myUserInfo.authpost","0==1")*/
    //替换报错提醒
    .replaceAll("S!=w.iOrderID", "S!=S")
    //替换页面转跳
    .replaceAll("t.confirm?i.func_Apply():i.func_closewg()", "uni.navigateTo({url:\"../grxx/grxx\"})")
    //替换弹窗
    .replaceAll("then((function(o){", "then((function(o){Promise.reject(o),")
$done({ body });
