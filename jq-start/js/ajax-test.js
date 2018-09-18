// function get() {
// 	console.info("start");
// 	$.ajax({
// 		url: 'http://localhost:18082/pcs-retail-service/orderSett/selectSettIncomeOrder?settStatus=3&completeTimeStart=2017/04/22 16:14:54&completeTimeEnd=2017/04/23 16:15:56&currentPage=0&eachPageSize=1',
// 		dataType: "json",
// 		type: "get",
// 		error: function() {
// 			console.log("error");
// 		},
// 		success: function(data, textStatus) {
// 			console.info(data);
// 			console.info(textStatus);
// 		}
// 	});
// }

function get() {
	console.info("start");
	$.ajax({
		url: 'http://localhost:18082/pcs-retail-service/orderSett/selectSettIncomeOrder',
		type: "get",
		dataType: "json",
		data: {
			"settStatus": 3
		},
		error: function() {
			console.log("error");
		},
		success: function(data, textStatus) {
			console.info(data);
			console.info(textStatus);
		}
	});
}
