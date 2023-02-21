var body = $response.body
	//无感支付
	//.replaceAll("authpost\":0", "authpost\":0")
	//金额
	.replaceAll("accmoneyr\":", "accmoneyr\":100000")
	//赠送金额
	.replaceAll("accmoneyg\":", "accmoneyg\":100000")
	//orderid
	//.replaceAll("orderid\":-2", "orderid\":31243")
	//MQTTSend
	//.replaceAll("xfcmd\":\"\"", "xfcmd\":\"06001C8A5867AF3D9D8A5762E73C9B950F62E75E9C4C89C5DAB0B48A5762E74E\"")
	//.replaceAll("rsncmd\":\"\"", "rsncmd\":\"0700088A5867AF63A86CDB88\"")
	//错误代码
	//.replaceAll("error_code\":-2", "error_code\":0")
	//.replaceAll("error_code\":\"-2\"", "error_code\":\"0\"")
$done({ body });
