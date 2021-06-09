//第三方 swiper需要相关js的设置
//var 是js中定义变量的标识符
var mySwiper = new Swiper(".swiper-container", {
	//开启循环轮播
	loop:true,
	//自动滚动
	autoplay:{
		//在用户操作swiper之后,是否禁用自动滚动. 默认是禁用,我们写false 将禁用取消!
		disableOnInteraction:false
	},
	
	//切换左右图片的按钮
	navigation:{
		nextEl:".swiper-button-next",
		prevEl:".swiper-button-prev"
	}	
})
