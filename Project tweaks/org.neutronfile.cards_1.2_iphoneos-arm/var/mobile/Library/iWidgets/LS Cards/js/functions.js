$(document).ready(function() {
    //$(".set").css('color', isSet);
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
	var newDate = new Date();
    newDate.setDate(newDate.getDate());
    
	setInterval(function() {
		if (setClock == "24h") {
			var hours = new Date().getHours();
			$(".date span,.date2 span").html((hours < 10 ? "0" : "") + hours);
			var minutes = new Date().getMinutes();
			$(".month span,.month2 span").html((minutes < 10 ? "0" : "") + minutes);
		}
		if (setClock == "12h") {
			var date = new Date();
			var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
			var am_pm = date.getHours() >= 12 ? "PM" : "AM";
			hours = hours < 10 ? "0" + hours : hours;
			var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
			var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
			time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
			$(".date span,.date2 span").html(hours);
			$(".month span,.month2 span").html(minutes);
		}
		$(".hour").text(monthNames[newDate.getMonth()]);
		$(".minute").text(newDate.getDate());
		$(".day span,.day2 span").text(dayNames[newDate.getDay()]);
		$(".year span").html(newDate.getFullYear());
    }, 1000);
    
	$(".outer").on({
		touchstart: function() {
			$(".dribbble").css("opacity", "1");
		},
		touchend: function() {
			$(".dribbble").css("opacity", "0");
		}
	});
});

function mainUpdate(type){
    if(type == "weather"){
        $(".wthr").html(weather.temperature);
    }
    if(type == "battery"){
        $(".battery").html(batteryPercent);
    }
}