/*!build time : 2015-03-04 10:05:50 AM*/
KISSY.add("kg/uploader/2.0.3/themes/wankeUploader/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e=b.all;return a.extend(d,c,{_successHandler:function(a){var b=a.result,c="",d=e("#J_UploadGoodsPicList"),f=e(".J_LastUpload",d);c='<li class="dib J_LastUpload"><div class="img"><img src="'+b.url+'" /></div></li>',f.length?f.replaceWith(c):d.prepend(c),this.showTip("succ","\u6210\u529f\u5566",2e3)},_errorHandler:function(a){this.showTip("error",a.msg||a.result.msg||"\u7cfb\u7edf\u51fa\u9519\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5",2e3)},showTip:function(b,c,d,e,f){f||(f={node:null,points:["cc","cc"],offset:[0,0]});var g=this;g.t&&clearTimeout(g.t);var h="",i="";"succ"==b&&(h="succ",i="&#379;");var j=d||3e3,k="<p><span>"+c+"</span></p>";g.dialog?(g.dialog.hide(),g.dialog.align(f.node,f.points,f.offset),g.dialog.get("contentEl")[0].innerHTML=k,g.dialog.show(),g.t=setTimeout(function(){g.dialog.hide(),e&&a.isFunction(e)&&e()},j)):a.use("overlay",function(){g.dialog=new a.Overlay({prefixCls:"wanke-",align:f,effect:{effect:"fade",easing:"",duration:.3},closable:!1,zIndex:10002,content:k}),g.dialog.render(),g.dialog.show(),g.t=setTimeout(function(){g.dialog.hide(),e&&a.isFunction(e)&&e()},j)})}},{ATTRS:{name:{value:"wankeUploader"},fileTpl:{value:'<li id="queue-file-{id}" class="g-u" data-name="{name}"><div class="pic"><a href="javascript:void(0);"><img class="J_Pic_{id} preview-img" src="" /></a></div><div class=" J_Mask_{id} pic-mask"></div><div class="status-wrapper"><div class="status waiting-status"><p>\u7b49\u5f85\u4e0a\u4f20\uff0c\u8bf7\u7a0d\u5019</p></div><div class="status start-status progress-status success-status"><div class="J_ProgressBar_{id}"><s class="loading-icon"></s>\u4e0a\u4f20\u4e2d...</div></div><div class="status error-status"><p class="J_ErrorMsg_{id}">\u670d\u52a1\u5668\u6545\u969c\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5\uff01</p></div></div><a class="J_Del_{id} del-pic" href="#">\u5220\u9664</a></li>'},allowExts:{value:"jpg,png,gif,jpeg,bmp"},maxSize:{value:1e4},widthHeight:{value:function(a,b){return a>170&&b>170}},authMsg:{value:{maxSize:"\u56fe\u7247\u8d85\u8fc710M",allowExts:"\u4e0d\u652f\u6301{ext}\u683c\u5f0f\uff01",widthHeight:"\u8bf7\u4e0a\u4f20\u5927\u4e8e170*170\u5927\u5c0f\u7684\u56fe\u7247"}}}}),d},{requires:["node","kg/kg/uploader/2.0.3/2.0.1/theme"]});