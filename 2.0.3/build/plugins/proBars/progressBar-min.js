/*!build time : 2015-03-04 10:05:50 AM*/
KISSY.add("kg/uploader/2.0.3/plugins/proBars/progressBar",function(a,b,c){function d(b,c){var e=this;c=a.merge({wrapper:f(b)},c),d.superclass.constructor.call(e,c)}var e="",f=b.all,g="progressbar",h="role",i="aria-valuemin",j="aria-valuemax",k="aria-valuenow",l="data-value";return a.mix(d,{tpl:{DEFAULT:'<div class="ks-progress-bar-value" data-value="{value}"></div>'},cls:{PROGRESS_BAR:"ks-progress-bar",VALUE:"ks-progress-bar-value"},event:{RENDER:"render",CHANGE:"change",SHOW:"show",HIDE:"hide"}}),a.extend(d,c,{render:function(){var a=this,b=a.get("wrapper"),c=a.get("width");return b.length?("auto"==c&&(c=b.parent().width()),b.width(c),b.addClass(d.cls.PROGRESS_BAR),a._addAttr(),!a.get("visible")&&a.hide(),a.set("bar",a._create()),void a.fire(d.event.RENDER)):!1},show:function(){var a=this,b=a.get("wrapper");b.fadeIn(a.get("duration"),function(){a.set("visible",!0),a.fire(d.event.SHOW,{visible:!0})})},hide:function(){var a=this,b=a.get("wrapper");b.fadeOut(a.get("duration"),function(){a.set("visible",!1),a.fire(d.event.HIDE,{visible:!1})})},_create:function(){var b=this,c=b.get("wrapper"),d=b.get("value"),e=b.get("tpl"),g=a.substitute(e,{value:d});return c.html(""),f(g).appendTo(c)},_addAttr:function(){var a=this,b=a.get("wrapper"),c=a.get("value");return b.attr(h,g),b.attr(i,0),b.attr(j,100),b.attr(k,c),a}},{ATTRS:{wrapper:{value:e},bar:{value:e},width:{value:"auto"},value:{value:0,setter:function(a){var b,c=this,e=c.get("wrapper"),f=c.get("bar"),g=c.get("speed");return a>100&&(a=100),0>a&&(a=0),b=Math.ceil(e.width()*(a/100)),f.stop().animate({width:b+"px"},g,"none",function(){e.attr(k,a),f.attr(l,a),c.fire(d.event.CHANGE,{value:a,width:b})}),a}},visible:{value:!0},duration:{value:.3},tpl:{value:d.tpl.DEFAULT},speed:{value:.2}}}),d},{requires:["node","base"]});