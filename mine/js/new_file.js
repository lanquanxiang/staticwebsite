var lis = $("#head_img li");
var ibr = $("#ibrief_introduction")
var lisVal = ["#content_one","#content_two"];
for(var i=0;i<2;i++){
	lis.get(i).myval = lisVal[i];
	lis.get(i).onmouseover = function () {
		ibr.slideUp(500);
		$(this.myval).slideDown(500);
	}
//	lis.get(i).onmouseout = function () {
//		$(this.myval).slideUp(500);
//		ibr.slideDown(500);
//	}
}