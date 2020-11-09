
## 前言
前创阳光酒店订餐小程序，作者Rolsy。

## 交流
微信:rolsy586，欢迎交流。
				  
## 素材

## 开始使用

`App.vue` 引入关键Css `main.css` `icon.css`
```
<style>
    @import "colorui/main.css";
	@import "colorui/icon.css";
	@import "app.css"; /* 你的项目css */
	....
</style>
```

------

## 使用自定义导航栏
导航栏作为常用组件有做简单封装，当然你也可以直接复制代码结构自己修改，达到个性化目的。

`App.vue` 获得系统信息
```
onLaunch: function() {
	uni.getSystemInfo({
		success: function(e) {
			// #ifndef MP
			Vue.prototype.StatusBar = e.statusBarHeight;
			if (e.platform == 'android') {
				Vue.prototype.CustomBar = e.statusBarHeight + 50;
			} else {
				Vue.prototype.CustomBar = e.statusBarHeight + 45;
			};
			// #endif
			// #ifdef MP-WEIXIN
			Vue.prototype.StatusBar = e.statusBarHeight;
			let custom = wx.getMenuButtonBoundingClientRect();
			Vue.prototype.Custom = custom;
			Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
			// #endif		
			// #ifdef MP-ALIPAY
			Vue.prototype.StatusBar = e.statusBarHeight;
			Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
			// #endif
		}
	})
},
```

`pages.json` 配置取消系统导航栏
```
"globalStyle": {
	"navigationStyle": "custom"
},
```
复制代码结构可以直接使用，注意全局变量的获取。

使用封装,在`main.js` 引入 `cu-custom` 组件。
```
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
```

`page.vue` 页面可以直接调用了
```
<cu-custom bgColor="bg-gradual-blue" :isBack="true">
	<block slot="backText">返回</block>
	<block slot="content">导航栏</block>
</cu-custom>
```
| 参数       | 作用   |类型    |  默认值 |
| --------   | -----:  |-----:  | :----:  |
| bgColor    | 背景颜色类名 |String  |   ''    |
| isBack     | 是否开启返回 | Boolean |   false |
| bgImage    | 背景图片路径 | String  |  ''     |

| slot块       | 作用   |
| --------   | -----:  |
| backText    | 返回时的文字 | 
| content     | 中间区域 | 
| right    | 右侧区域(小程序端可使用范围很窄！)  | 


------

# sunshineHotel
