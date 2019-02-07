


function convertToFeet(inNum, inUn) {
	//converts anything to feet
	if (inUn == "Inches") {
		outFt = inNum / 12;
		return outFt;
	}
	else if (inUn == "Feet") {
		outFt = inNum;
		return outFt;
	}
	else if (inUn == "Miles") {
		outFt = inNum * 5280;
		return outFt;
	}
	else if (inUn == "Millimeters") {
		outFt = inNum / 304.8;
		return outFt;
	}
	else if (inUn == "Centimeters") {
		outFt = inNum / 30.48;
		return outFt;
	}
	else if (inUn == "Meters") {
		outFt = inNum / .3048;
		return outFt;
	}
	else if (inUn == "Kilometers") {
		outFt = inNum / .0003048;
		return outFt;
	}
}

function convertFromFeet(inFt, outUn) {
	//converts to outUnits
	if (outUn == "Inches") {
		outNum = inFt * 12;
		return outNum;
	}
	else if (outUn == "Feet") {
		outNum = inFt;
		return outNum;
	}
	else if (outUn == "Miles") {
		outNum = inFt / 5280;
		return outNum;
	}
	else if (outUn == "Millimeters") {
		outNum = inFt * 304.8;
		return outNum;
	}
	else if (outUn == "Centimeters") {
		outNum = inFt * 30.48;
		return outNum;
	}
	else if (outUn == "Meters") {
		outNum = inFt * .3048;
		return outNum;
	}
	else if (outUn == "Kilometers") {
		outNum = inFt * .0003048;
		return outNum;
	}
}

function totalConvert() {
	var inUnitsBox = document.getElementById("Input Units");
	var inUnits = inUnitsBox.options[inUnitsBox.selectedIndex].text;
	var outUnitsBox = document.getElementById("Output Units");
	var outUnits = outUnitsBox.options[outUnitsBox.selectedIndex].text;
	var inValue = document.getElementById("inputNum").value
	outFeet = convertToFeet(inValue, inUnits);
	outValue = convertFromFeet(outFeet, outUnits);

	document.write(inValue + " " + inUnits + " is equivalent to " + outValue + " " + outUnits);
}


