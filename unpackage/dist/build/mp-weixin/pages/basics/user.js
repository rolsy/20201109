(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/user"],{"0136":function(e,t,n){"use strict";n.r(t);var a=n("5af7"),o=n("9b66");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("25aa");var s,u=n("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=c.exports},"25aa":function(e,t,n){"use strict";var a=n("438b"),o=n.n(a);o.a},"438b":function(e,t,n){},"5af7":function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))},"691e":function(e,t,n){"use strict";(function(e){n("698e");a(n("66fd"));var t=a(n("0136"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"862d":function(e,t,n){"use strict";(function(e){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"user",data:function(){var t;return t={F_EnabledMark:"",image:"",title:Object,yonghuwx:[],modalName:null,menu:[],avatarUrl:"",nickName:"",openid:"",rolsyF_SortCode:""},n(t,"avatarUrl",e.getStorageSync("avatarUrl")),n(t,"nickName",e.getStorageSync("nickName")),t},onLoad:function(){var t=this;console.log("记录===============",this.menu);var n=this;wx.login({success:function(a){a.code?(t.jsCode=a.code,e.request({url:"https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetCode",data:{json_code:a.code},header:{"content-type":"application/x-www-form-urlencoded"},method:"GET",dataType:"json",success:function(t){console.log("json_code",t);var a=JSON.parse(t.data.data);console.log(a.openid),e.setStorage({key:"openid",data:a.openid}),e.request({url:"https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetUserList",data:{OpenId:a.openid},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",dataType:"json",success:function(e){var t=e.data[0].F_SortCode;n.rolsyF_SortCode=t.toString()}})}})):console.log("登录失败！"+a.errMsg)}});var a={avatarUrl:e.getStorageSync("avatarUrl"),nickName:e.getStorageSync("nickName"),openid:e.getStorageSync("openid")};e.request({url:"https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/SetUserList",data:{data:JSON.stringify(a)},method:"POST",dataType:"json",success:function(e){console.log(e)}}),e.request({url:"https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetUserList",data:{OpenId:e.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",dataType:"json",success:function(e){var t=e.data[0].F_SortCode;n.rolsyF_SortCode=t.toString()}}),e.request({url:"https://www.sunnyhotel.net:8089/LR_Desktop/IMenu/GetOrderList",data:{OpenId:e.getStorageSync("openid")},header:{"content-type":"application/x-www-form-urlencoded"},method:"POST",dataType:"json",success:function(e){n.menu=e.data,n.F_EnabledMark=e.data[2].F_EnabledMark,console.log("查询订单数据====================",n.menu)}})},methods:{NoticePage:function(){e.navigateTo({url:"/pages/basics/notice"})},HomePage:function(){e.navigateTo({url:"/pages/basics/home?id=HomePage"})},showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null},AddressPage:function(){e.navigateTo({url:"/pages/basics/address"})}}};t.default=a}).call(this,n("543d")["default"])},"9b66":function(e,t,n){"use strict";n.r(t);var a=n("862d"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a}},[["691e","common/runtime","common/vendor"]]]);