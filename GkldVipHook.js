/*************************************

项目名称：公考雷达解锁
更新日期：2024-09-18
脚本作者：GangPeter

**************************************

[rewrite_local]
^https:\/\/api\.gongkaoleida\.com\/api\/(v\d+_\d+_\d+)\/user\/resume\/?(.*?)*$ url script-response-body https://raw.githubusercontent.com/GangPeter/Vip-Hook-QX/main/GkldVipHook.js

[mitm]
hostname = api.gongkaoleida.com

*************************************/

const newResp = {};
const headers = $request.headers;
const respBody = JSON.parse(typeof $response != "undefined" && $response.body || null);


if (respBody && respBody.data) {
    // VIP等级
    respBody.data.userInfo.vipGrade = 2;
    // VIP标识
    respBody.data.userInfo.isVip = 1;
    // VIP到期时间
    const nowTime = Date.parse(new Date());
    const vipExpire = Date.parse("2099/1/1 00:00:00");
    respBody.data.userInfo.vipExpire = vipExpire;
    for (let index = 0; index < array.length; index++) {
        respBody.data.userInfo.vipGradeList[index].isVip = 1;
        respBody.data.userInfo.vipGradeList[index].vipExpire = vipExpire;
        respBody.data.userInfo.vipGradeList[index].remainDays = (vipExpire - nowTime) / (1 * 24 * 60 * 60 * 1000);
    }
    newResp.body = JSON.stringify(respBody);
    console.log('已操作成功🎉🎉🎉');
}

$done(newResp);