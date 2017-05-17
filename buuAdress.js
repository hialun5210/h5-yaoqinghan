$(function(){
 //选择所在区域
    wechatCommon.FloatShow({
        floatid: "#adress_area",
        zIndex: 102,
        closeid: "#adress_areaBack,#adress_area_list li a",
        clickid: "#add_area",
        clickcall: function () {            
		   $("#adress_area_list").on("click", "li a", function () {
             var $this = $(this);
             $("#add_area").val($this.data("text"));
			 $("#add_area").data("val",$this.data("val"));
                    })
        },
        closecall: ""
    });
	
	

	

})


//微信页面公共方法
var wechatCommon = (function () {
    //点击浮动左边浮动出来
    function FloatShow(fopts) {

        var fopts = $.extend({ statusID: "",floatid: "", zIndex: 100, closeid: "", clickid: "", clickcall: "", closecall: "" }, fopts);

        var floatid = fopts.floatid, closeid = fopts.closeid, clickid = fopts.clickid, clickcall = fopts.clickcall, closecall = fopts.closecall;
		if(fopts.statusID!=""){			
		  	 floatid = $(fopts.statusID).val(); closeid = $(fopts.statusID).val()+"Back";	
		}
        var _wwidth = $(window).width(), _wheight = $(window).height();
        $(floatid).css({
            "width": _wwidth,
            "height": _wheight,
            "right": "-100%",
            "top": 0,
            "display": "none",
            "position": "absolute",
            "z-index": fopts.zIndex
        });
        $(window).resize(function () {
            var _wwidth = $(window).width(), _wheight = $(window).height();
            $(floatid).css({
                "width": _wwidth,
                "height": _wheight
            });
        });
        //点击		
        $(document).off("click", clickid).on("click", clickid, function () {	
			if(fopts.statusID!=""){			
		  	   floatid = $(fopts.statusID).val(); closeid = $(fopts.statusID).val()+"Back";		
				$(floatid).css({
					"width": _wwidth,
					"height": _wheight,
					"right": "-100%",
					"top": 0,
					"display": "none",
					"position": "fixed",
					"z-index": fopts.zIndex
				});	//关闭
        $(document).off("click", closeid).on("click", closeid, function () {
            CloseFloat(floatid);
            if (closecall != "" && typeof (closecall) == "function") {
                closecall();
            }
        });
			}
            $(floatid).stop(true, true).animate({ "opacity": "show", "right": 0 });
            if (clickcall != "" && typeof (clickcall) == "function") {
                clickcall();
            }
		
        });
        //关闭
        $(document).off("click", closeid).on("click", closeid, function () {
            CloseFloat(floatid);
            if (closecall != "" && typeof (closecall) == "function") {
                closecall();
            }
        });
    }

    //关闭浮动窗
    function CloseFloat(floatid) {
        $(floatid).stop(true, true).animate({ "opacity": "hide", "right": "-100%" });
    }

    return {
        FloatShow: function (fopts) {
            FloatShow(fopts);
        },
        CloseFloat: function (floatid) {
            CloseFloat(floatid);
        }
    }
})();

