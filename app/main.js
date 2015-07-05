(function(){


	var currentDate;

	function getMomentFromTimestamp(timestamp) {
		return moment.unix(timestamp).tz('Europe/Dublin');
	}

	function updateDateTime() {
		var a = getMomentFromTimestamp(new Date().getTime()/1000);

		document.getElementById("irishTime").innerHTML= a.format("DD/MM/YYYY HH:MM:ss zz");

		currentDate = a;
	}

	function formatDate(date){
		return "Today";
	}

	function onDateChange() {
		var date = moment(document.getElementById("selectedDate").value, "DD/MM/YYYY HH:mm").tz('Europe/Dublin');
		document.getElementById("evaluationString").innerHTML = formatDate(date);
	}

	window.onload = function() {

		updateDateTime();

		setInterval(updateDateTime, 1000)

		document.getElementById("selectedDate").addEventListener("change", onDateChange);		

	}

})()