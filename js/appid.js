// 接口octopus-apiid
(function($) {

    $.appid={
		getId:function(urlName){
			var appid={
                childrenList:"47482831-0f58-4b19-80e9-6f09f5a6dd00",//获取儿童列表
				jzjlList:"341abe04-a98a-4276-a73f-d414a99e05d2",//获取接种记录
				addChildren:"db2563db-c513-44c4-b409-5ccf75592f0f", //绑定儿童
				getChildrenInfo:"60f229df-ceee-4742-9c45-9de3af60fe70",//获取绑定儿童信息
				addChildrenCard:"9b42bf35-44a3-45a9-94e1-21535f7547ca",//绑定儿童社保卡
            }
			return appid[urlName];
		}
    }
    
// 服务地址
    $.getServiceUrl={
		getUrl:function(urlName){
			var obj={
				token:"http://test.jktz.gov.cn:8083/clientgateway/huidaoocauth/app/token",//获取token
				url: "http://test.jktz.gov.cn:8083/clientgateway/", //获取接口
				ymfa:"http://test.jktz.gov.cn:8083/ignore/queryJzjh.service",
				ymfaDetail:"http://test.jktz.gov.cn:8083/ignore/queryYmxq.service",
				// token:"apis/clientgateway/huidaoocauth/app/token",//获取token
				// url: "apis/clientgateway/", //获取接口
				// ymfa:"api/ignore/queryJzjh.service",
				// ymfaDetail:"api/ignore/queryYmxq.service",
			}
			return obj[urlName];
		}
	}

	$.getUrlParma={
		getparma:function(name){
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
			var r = window.location.search.substr(1).match(reg); //匹配目标参数
			if (r != null) return unescape(r[2]); return null; //返回参数值
			}
	}

	$.getNumber={
		random:function(){
			var rand = "";
			for(var i = 0; i < 6; i++){
				var r = Math.floor(Math.random() * 10);
				rand += r;
			}
			return rand;
		}
	}

})(jQuery);