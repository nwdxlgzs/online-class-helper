﻿function auto_click() {
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    debug.log("运行中。  时间戳：" + h + "点" + m + "分" + s + "秒");
    var aEle = document.getElementsByClassName('layui-m-layerbtn')[0];
    if (aEle != null || aEle != undefined) {
        var spanbtn = getFirstChildNode(aEle);
        debug.log("程序发现<" + spanbtn.innerHTML + ">按钮。  时间戳：" + h + "点" + m + "分" + s + "秒");
        if (spanbtn.innerHTML == "请完成签到") {
            spanbtn.click();
            debug.log("程序进行自动点击签到。  时间戳：" + h + "点" + m + "分" + s + "秒");
        };
    };
    click_btn = setTimeout(auto_click, 30000);
};
window.onload = function () {
    auto_click();
    debug.success("函数正在执行，30秒一次！当你进去新页面而没有看见本弹窗，说明函数未执行，这时你要想办法解决，也就是重进，这是概率性的。事情一般是在返回和之后出现。因为那种情况一般不涉及这个函数的触发。刷新一般无效，要退出页面重进，你也可以尝试点强制载入JS尝试。也不要尝试多次强制载入，后果自负。还有，当日志可以连续打印时，说明函数运行正常，如果出现红色字体，说明出现错误。");
};

function getFirstChildNode(box) {
    if (box.firstChild.nodeType != 1) {
        return
        box.firstChild.nextSibling;
    } else {
        return box.firstChild;
    }
};


//这个是debug.min.js，是上拉栏样式显示的，比较适合手机测试
var __bind=function(fn,me){return function(){return fn.apply(me,arguments)}};(function(WIN,DOC){"use strict";var CLICK,DANGER,Debug,ERROR,LOG,NULL,SUCCESS,UNDEFINED,WARN,bind,dom,entry,errListener,exports,getBody,isArray,isNull,isObejct,isTouch,noop,toString,unbind;UNDEFINED=void 0;NULL=null;LOG="log";DANGER="danger";WARN="warn";SUCCESS="success";ERROR="error";CLICK="click";isTouch="ontouchend"in WIN;noop=function(){};dom=DOC.querySelectorAll;toString={}.toString;bind=function(el,evt,callback){return el.addEventListener(evt,callback,false)};unbind=function(el,evt,fn){return el.removeEventListener(evt,fn,false)};isNull=function(val){return val===NULL};isArray=Array.isArray||function(val){return val&&"[object Array]"===toString.call(val)};isObejct=function(val){return typeof val==="object"&&!isArray(val)&&!isNull(val)};getBody=function(){var _ref,_ref1;return DOC["body"]||((_ref=dom("body"))!=null?_ref[0]:void 0)||((_ref1=dom("html"))!=null?_ref1[0]:void 0)};Debug=function(){var childCss,debugMap,fn,joinCss,parentBottom,parentCss,publicCss,render,translate;debugMap={log:"0074cc",danger:"da4f49",warn:"faa732",success:"5bb75b",error:"bd362f"};render=function(msg){var arr,item,text,_i,_len;text="";arr=[];if(isArray(msg)){for(_i=0,_len=msg.length;_i<_len;_i++){item=msg[_i];arr.push(""+item)}text="["+arr.join(",")+"]"}else if(isObejct(msg)){for(item in msg){arr.push(""+item+": "+msg[item])}text="{"+arr.join(",")+"}"}else{text=String(msg)}return text};translate=function(el,y){el.style.webkitTransform="translate3d(0,"+y+",0)";return el.style.transform="translate3d(0,"+y+",0)"};joinCss=function(css){return css.join(";")};parentBottom=6;publicCss=["-webkit-transition: all .3s ease","transition: all .3s ease"];childCss=["margin-top:-1px","padding:.5em","border-top:1px solid rgba(255,255,255,.1)","margin:0"].concat(publicCss);parentCss=["-webkit-overflow-scrolling:touch","overflow:auto","line-height:1.5","z-index:5000","position:fixed","left:0","top:0","font-size:11px","background:rgba(0,0,0,.8)","color:#fff","width:100%","padding-bottom:"+parentBottom+"px"].concat(publicCss);function Debug(){this.toggle=__bind(this.toggle,this);this.isInit=this.isHide=false;this.msg=this.fn=this.color="";this.el=NULL}Debug.prototype.init=function(){var body,el;el=this.el=DOC.createElement("div");el.setAttribute("style",joinCss(parentCss));body=getBody();body.appendChild(el);translate(el,0);bind(el,CLICK,function(_this){return function(){return _this.toggle()}}(this));this.isInit=true;return this};Debug.prototype.print=function(){var child,css;if(!this.isInit){this.init()}css=childCss.concat(["color:#"+this.color]);child=DOC.createElement("p");child.setAttribute("style",joinCss(css));child.innerHTML=this.msg;this.el.appendChild(child);return this};Debug.prototype.toggle=function(event){return(this.isHide?this.show:this.hide).call(this,event)};Debug.prototype.show=function(event){translate(this.el,0);this.isHide=false;return this};Debug.prototype.hide=function(event){translate(this.el,"-"+(this.el.offsetHeight-parentBottom)+"px");this.isHide=true;return this};for(fn in debugMap){Debug.prototype[fn]=function(fn){return function(msg){this.fn=fn;this.msg=render(msg);this.color=debugMap[fn];return this.print()}}(fn)}return Debug}();entry=new Debug;errListener=function(error){var msg;msg=["Error:","filename: "+error.filename,"lineno: "+error.lineno,"message: "+error.message,"type: "+error.type];return entry.error(msg.join("<br/>"))};bind(WIN,ERROR,errListener);entry.guai=function(){return unbind(WIN,ERROR,errListener)};if(typeof exports!=="undefined"&&module.exports){return module.exports=exports=entry}else if(typeof define==="function"){return define(function(require,exports,module){return module.exports=exports=entry})}else if(typeof angular==="object"){return angular.module("binnng/debug",[]).factory("$debug",function(){return entry})}else{return WIN["debug"]=entry}})(window,document);
