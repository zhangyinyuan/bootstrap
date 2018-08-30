
layui.use(['layer'], function(){
	var layer = layui.layer;
});

$("#img_preview img").click(function(){
	
	layer.open({
	  type: 2,
	  title: '',
	  shadeClose: false,
	  shade: 0.8,
	  area: ['80%', '90%'],
	  content: 'picture.html', //iframe的url
	  skin:'demo-class'
	});
	
})

