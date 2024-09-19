/*************************************

项目名称：公考雷达
更新日期：2024-09-18
脚本作者：GangPeter

**************************************

[rewrite_local]
^https:\/\/api\.gongkaoleida\.com\/api\/(.*?)*$ url script-response-body https://raw.githubusercontent.com/GangPeter/Vip-Hook-QX/main/GkldVipHook.js

[mitm]
hostname = api.gongkaoleida.com

*************************************/

const url = $request.url;
var body = $response.body;
var bodyJson = JSON.parse(body);

// 启动广告
if (url.indexOf("/ad/info") != -1) {
	bodyJson.data.list = [];
}

// 我的页面SVIP
if (url.indexOf("/user/resume") != -1) {
	// VIP等级
	bodyJson.data.userInfo.vipGrade = 2;
	// VIP标识
	bodyJson.data.userInfo.isVip = 1;
	// VIP到期时间
	const nowTime = Date.parse(new Date()) / 1000;
	const vipExpire = Date.parse("2099/1/1 00:00:00") / 1000;
	bodyJson.data.userInfo.vipExpire = vipExpire;
	for (let index = 0; index < bodyJson.data.userInfo.vipGradeList.length; index++) {
		bodyJson.data.userInfo.vipGradeList[index].isVip = 1;
		bodyJson.data.userInfo.vipGradeList[index].vipExpire = vipExpire;
		bodyJson.data.userInfo.vipGradeList[index].remainDays = (vipExpire - nowTime) / (1 * 24 * 60 * 60 * 1000);
	}
}
// 我的页面VIP横幅
if (url.indexOf("/my/vipCardInfo") != -1) {
	// 横幅字符串
	bodyJson.data.greetingMsg = "破解完成";
	// 底部类型
	bodyJson.data.bottomType = 2;
	// 底部优惠字符串
	bodyJson.data.couponInfo.title = "限时优惠券";
	// 底部优惠倒计时
	bodyJson.data.couponInfo.endTime = Date.parse("2099/1/1 00:00:00") / 1000;
	// 底部优惠转跳链接
	bodyJson.data.couponInfo.schemeUrl = "https://github.com/GangPeter";
	// 底部优惠价格
	bodyJson.data.couponInfo.couponPrice = "GangPeter";
	// 按钮字符串
	bodyJson.data.btnText = "Github";
	// 按钮转跳链接
	bodyJson.data.btnScheme = "https://github.com/GangPeter";
}

if (url.indexOf("/my/index") != -1) {
}
if (url.indexOf("/simulated/selection") != -1) {
	if (bodyJson.message == "没有权限") {
		bodyJson.message = "success";
		bodyJson.code = 1;
	}
}
console.log("已操作成功🎉🎉🎉");

body = JSON.stringify(bodyJson);
$done({ body });
