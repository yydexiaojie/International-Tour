$(document).ready(function() {

	//form valide
	var form = $("body").find('form');
	if(form){
		form.Validform({
			tiptype:3,
			label:".label",
			showAllError:false,
			ajaxPost:false,
			datatype:{
				"username": function(gets,obj,curform,regxp){
					var reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"); 
				    if(reg.test(gets)){return "لا تحتوى أحرف خاصة."}
				    if(!reg.test(gets) && gets.length > 20){return false}
				    if(!reg.test(gets) && gets.length < 1){return false}
				    if(!reg.test(gets) && 20 > gets.length > 0 ){return true}
				},
				"userpassword": function(gets, obj){
					$(obj[0]).attr('placeholder', '');
					var reg = new RegExp("^[a-z A-Z 0-9 _ -]");
					if(!reg.test(gets)){
						return "كلمة المرور ليست صحيحة.";
						$(obj[0]).attr('placeholder', '');
					}else{
						if(gets.length > 16 || gets.length < 6){
							return false;
							$(obj[0]).attr('placeholder', '');
						}else{
							return true;
						}
					}
				}
			}
		});
	}else{
		console.log("不需要加载验证");
	}

	//banner swiper

	//lazylaod

	//iseroll

	//oneself

});