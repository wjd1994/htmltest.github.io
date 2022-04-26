(function(){"use strict";var t={834:function(t,e,s){s.d(e,{Y:function(){return A}});var n=s(8935),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view"),s("h1",[t._v("hello vue")])],1)},i=[],r={name:"App",components:{},created(){this.$axios.interceptors.request.use((function(t){return alert("request "),t}),(function(t){return alert("request error"),Promise.reject(t)}))}},a=r,u=s(1001),c=(0,u.Z)(a,o,i,!1,null,null,null),l=c.exports,p=s(4549),h=s.n(p),d=s(2809),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"popupwindow"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:!t.btn1show,expression:"!btn1show"}]},[t._v("隐藏按钮 "+t._s(t.btn1timeshow)+"s后出现")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.btn1show,expression:"btn1show"}],attrs:{type:"primary",id:"btn1"},on:{click:t.openalert}},[t._v("隐藏按钮 3s后出现")]),n("br"),n("p",{directives:[{name:"show",rawName:"v-show",value:!t.btn2show,expression:"!btn2show"}]},[t._v("未生成的按钮 "+t._s(t.btn2timeshow)+"s后才生成")]),t.btn2show?n("el-button",{attrs:{type:"success",id:"btn2"},on:{click:t.openalert}},[t._v("未生成的按钮 6s后才生成")]):t._e(),n("br"),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.btn3show,expression:"btn3show"}],attrs:{type:"success",id:"btn3"},on:{click:t.openalert}},[t._v(t._s(t.btn3timeshow)+"s后消失按钮")])],1),n("img",{attrs:{id:"cat",src:s(6350)}})])},f=[],v={name:"PopupWindow",data(){return{msg:"",count:0,promptshow:!1,confirmshow:!1,word_count:0,words:"abcdefghijklmnopk",Timer:null,btn1show:!1,btn2show:!1,btn3show:!0,btn1timeshow:3,btn2timeshow:6,btn3timeshow:9}},created(){this.delayshow()},mounted(){this.Timer=setInterval(this.showtext,1e3)},methods:{getdatatest(){var t=this;this.$axios.get("http://127.0.0.1:8082/hello",{}).then((function(e){alert(e.data),console.log(e),t.msg+=e.data})).catch((t=>{console.log(t)}))},delayshow(){setTimeout((()=>{this.btn1show=!0}),3e3),setTimeout((()=>{this.btn2show=!0}),6e3),setTimeout((()=>{this.btn3show=!1}),9e3)},showtext(){console.log("showtext"),setTimeout((()=>{0!=this.btn1timeshow&&(this.btn1timeshow-=1)}),10),setTimeout((()=>{0!=this.btn2timeshow&&(this.btn2timeshow-=1)}),10),setTimeout((()=>{0!=this.btn3timeshow&&(this.btn3timeshow-=1)}),10)},openalert(){alert("alert测试弹窗"),this.count+=1,this.msg+="<p>"+this.count+".已确定alert弹窗</p>"},openconfirm(){var t=confirm("确定提交");1==t?(this.count+=1,this.msg+="<p>"+this.count+".confirm弹窗已确定提交</p>"):(this.count+=1,this.msg+="<p>"+this.count+".confirm弹窗已取消提交</p>")},openprompt(){var t=prompt("请输入内容");t?(this.count+=1,this.msg+="<p>"+this.count+".promt弹窗输入的内容是："+t+"</p>"):""===t?(this.count+=1,this.msg+="<p>"+this.count+".prompt弹窗已输入为空</p>"):(this.count+=1,this.msg+="<p>"+this.count+".prompt弹窗已取消输入</p>")},openmessage(){this.$alert("这是一个特殊的弹窗","标题名称",{confirmButtonText:"确定",callback:t=>{this.$message({type:"info",message:`action: ${t}`}),"confirm"==t?(this.count+=1,this.msg+="<p>"+this.count+".特殊弹窗已确认</p>"):(this.count+=1,this.msg+="<p>"+this.count+".特殊弹窗已取消</p>")}})}}},w=v,b=(0,u.Z)(w,m,f,!1,null,"be725d5a",null),g=b.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"test1"}},[s("div",{staticClass:"testdiv"},[s("el-button",{staticClass:"class1",attrs:{id:"id1"},on:{click:t.changebutton1}},[t._v("id元素 按钮1")]),s("p",{staticClass:"result"},[t._v(t._s(t.msg1))])],1),s("div",{staticClass:"testdiv"},[s("el-button",{staticClass:"class1",attrs:{id:"id2"},on:{click:t.changebutton2}},[t._v("class元素 按钮2")]),s("p",{staticClass:"result"},[t._v(t._s(t.msg2))])],1),t._m(0),t._m(1),t._m(2),s("div",{staticClass:"testdiv"},[s("input",{staticClass:"class1",attrs:{placeholder:"敲回车"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.keyenter.apply(null,arguments)}}}),s("p",{staticClass:"result"},[t._v(t._s(t.msg3))])]),s("div",{staticClass:"testdiv",attrs:{id:"popupwindow"}},[s("PopupWindow")],1),s("div",{staticClass:"testdiv"},[s("el-button",{staticClass:"class1",attrs:{id:"id2"},nativeOn:{dblclick:function(e){return t.doublelog.apply(null,arguments)}}},[t._v("双击")]),s("p",{staticClass:"result"},[t._v(t._s(t.msg4))])],1)])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"testdiv"},[s("input",{staticClass:"class1",attrs:{id:"file",type:"file"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"testdiv"},[s("p",[t._v("请选择选项3")]),s("select",{staticClass:"class1",attrs:{id:"selectid"}},[s("option",{attrs:{value:"选项1"}},[t._v("选项1")]),s("option",{attrs:{value:"选项2"}},[t._v("选项2")]),s("option",{attrs:{value:"选项3"}},[t._v("选项3")]),s("option",{attrs:{value:"选项4"}},[t._v("选项4")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"testdiv"},[s("a",{staticClass:"class1",attrs:{id:"aid",href:"/#/test1"}},[t._v("悬停变色")])])}],x={name:"TestPage1",components:{PopupWindow:g},data(){return{msg1:"未点击",msg2:"未点击",msg3:"未敲回车",msg4:"未双击"}},methods:{changebutton1(){this.msg1="按钮1已被点击"},changebutton2(){this.msg2="按钮2已被点击"},keyenter(){this.msg3="已敲回车"},doublelog(){this.msg4="双击成功"}}},k=x,C=(0,u.Z)(k,_,y,!1,null,"9d63b3a4",null),T=C.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"popupwindow"}},[s("el-button",{attrs:{type:"text",id:"alertwindow2"},on:{click:t.openalert}},[t._v("点击打开 第二个alert弹窗")])],1)},$=[],j={name:"IframeTest",data(){return{msg:"",iframcount:0}},methods:{openalert(){alert("第二个alert测试弹窗"),this.iframeount+=1,A.$emit("brotherSaid",this.iframcount)}}},E=j,P=(0,u.Z)(E,O,$,!1,null,"a2f402e8",null),S=P.exports;const Z=[{path:"/popupwindow",component:g},{path:"/test1",component:T},{path:"/iframetest",component:S}];var N=Z;n["default"].use(d.Z);const q=new d.Z({routes:N});var M=q,W=s(6166),I=s.n(W);n["default"].config.productionTip=!1,n["default"].use(h());const A=new n["default"];n["default"].prototype.$axios=I(),new n["default"]({axios:I(),router:M,render:t=>t(l)}).$mount("#app")},6350:function(t,e,s){t.exports=s.p+"img/cat.ab8f4862.gif"}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,o,i){if(!n){var r=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],i=t[l][2];for(var a=!0,u=0;u<n.length;u++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[u])}))?n.splice(u--,1):(a=!1,i<r&&(r=i));if(a){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,o,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,r=n[0],a=n[1],u=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(u)var l=u(s)}for(e&&e(n);c<r.length;c++)i=r[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(l)},n=self["webpackChunktest"]=self["webpackChunktest"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(834)}));n=s.O(n)})();
//# sourceMappingURL=app.a08d76c3.js.map