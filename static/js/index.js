//首页轮播
var current = 0;
//初始化数据
var timer = null;
var pre = null;
var nex = null;
$(document).ready(function() {
	11
	var li_v = $('.slideshow ul li');
	var i_v = $('.ra-show i');
	//设置自动播放
	function mover() {
		li_v.hide();
		i_v.removeClass("active");
		current = (current + 1) % (li_v.length);
		i_v.mouseover(function() {
			current = $(this).index();
		});
		li_v.eq(current).fadeIn(1000);
		i_v.eq(current).addClass("active");
	};
	timer = setInterval(mover, 2000);
	li_v.mouseover(function() {
		clearInterval(timer);
	});
	li_v.mouseout(function() {
		timer = setInterval(mover, 2000);
	});
	$(".last-img").click(function() {
		clearInterval(timer);
		clearInterval(pre);

		function last_v() {
			li_v.hide();
			i_v.removeClass("active");
			current = (current - 1 + li_v.length) % (li_v.length);
			li_v.eq(current).fadeIn(1000);
			i_v.eq(current).addClass("active");
		};
		pre = setTimeout(last_v, 10);
		timer = setInterval(mover, 2000);
		57
	});
	$(".next-img").click(function() {
		clearInterval(timer);
		clearInterval(nex);
		nex = setTimeout(mover, 10);
		timer = setInterval(mover, 2000);
	});
	i_v.mouseover(function() {
		clearInterval(timer);
		i_v.removeClass("active");
		li_v.hide();
		li_v.eq($(this).index()).fadeIn(1000);
		$(this).addClass("active");
		//console.log($(this).index());

	});
	
	/*sz 隐藏显示*/
	$("#con_one_1 .seritem").each(function(i,v){
		$(this).children(".sercontent").not(":eq(0)").hide();
	});
	$(document).on("click",".seritem .sername .switch",function(){
		$(this).parent(".sername").siblings(".sercontent").not(":eq(0)").toggle();
	});
	
	/*end*/
});
//选择商品的修改
$(function() {
	$(".edit").click(function(e) {
		// console.log(e)
		// alert($('edit').index());
		$(this).attr('style', 'display:none');
		$('.num').attr('style', 'display:none');
		$('.save').attr('style', 'display:block');
		$('.showreplace').attr('style', 'display:block');
	})

	$('.editgoods').click(function() {
		alert('1111')
		window.location.href = './replacegoods.html'
	})

})
//卡包的tab标签
function setTab(name, cursel) {
	cursel_0 = cursel;
	for (var i = 1; i <= links_len; i++) {
		var menu = document.getElementById(name + i);
		var menudiv = document.getElementById("con_" + name + "_" + i);
		if (i == cursel) {
			menu.className = "off";
			menudiv.style.display = "block";
		}else {
			menu.className = '';
			menudiv.style.display = "none";
		}
	}
}
function Next() {
	cursel_0++;
	if (cursel_0 > links_len) cursel_0 = 1
	setTab(name_0, cursel_0);
}
// var name_0 = 'one';
// var cursel_0 = 1;
// var ScrollTime = 3000; //循环周期（毫秒）
var links_len, iIntervalId;
onload = function() {
	var links = document.getElementById("tab1").getElementsByTagName('li')
	links_len = links.length;
	// for (var i = 0; i < links_len; i++) {
	// 	links[i].onmouseover = function() {
	// 		clearInterval(iIntervalId);
	// 		this.onmouseout = function() {
	// 			iIntervalId = setInterval(Next, ScrollTime);;
	// 		}
	// 	}
	// }
	// document.getElementById("con_" + name_0 + "_" + links_len).parentNode.onmouseover = function() {
	// 	clearInterval(iIntervalId);
	// 	// this.onmouseout = function() {
	// 	// 	iIntervalId = setInterval(Next, ScrollTime);;
	// 	// }
	// }
	// setTab(name_0, cursel_0);
	// iIntervalId = setInterval(Next, ScrollTime);
}
