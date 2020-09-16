fahrenheit = document.querySelector("#fahrenheit-ip");
celsius = document.querySelector("#celsius-ip");
tempConvert = document.querySelector("#temp-conv-btn");

centimeter = document.querySelector("#centimeter-ip");
meter = document.querySelector("#meter-ip");
kilometer = document.querySelector("#kilometer-ip");
lengthConvert = document.querySelector("#length-conv-btn");

tempConvert.addEventListener
(
	"click",
	() =>
	{
		if(celsius.value != "")
			fahrenheit.value = (parseInt(celsius.value) * 1.8) + 32;

		else if(fahrenheit.value != "")
			celsius.value = (parseInt(fahrenheit.value) - 32) / 1.8;
	}
);

lengthConvert.addEventListener
(
	"click",
	() =>
	{
		if(centimeter.value != "")
		{
			meter.value = parseInt(centimeter.value) / 100;
			kilometer.value = parseInt(centimeter.value) / 100000;
		}

		else if(meter.value != "")
		{
			centimeter.value = parseInt(meter.value) * 100;
			kilometer.value = parseInt(meter.value) / 1000;
		}
		
		else if(kilometer.value != "")
		{
			centimeter.value = parseInt(kilometer.value) * 100000;
			meter.value = parseInt(kilometer.value) * 1000;
		}
	}
);