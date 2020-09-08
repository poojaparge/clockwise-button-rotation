function initialise() {
	// Create Main Buttons Div
	var newDiv = document.createElement("div");
	newDiv.setAttribute("id", "btns");
	
	// Creating 9 Buttons
	for (var i = 1; i < 10 ; i++) {
		var btn = document.createElement("button");
		btn.setAttribute("id", "btn" + i);
		btn.innerHTML = i;
		if (i == 5)
			btn.addEventListener("click", clockwise);
		newDiv.appendChild(btn);
	}
	document.body.appendChild(newDiv);
}

function clockwise() {
	var btnArr = [1, 2, 3, 6, 9, 8, 7, 4];
	var temp = null, temp2 = null;
	
	btnArr.forEach( function (i) {
		var btn = document.getElementById("btn" + i);
		if (temp == null) {
			temp = btn.innerHTML;
			var nextBtn = document.getElementById("btn" + btnArr[7]);
			btn.innerHTML = nextBtn.innerHTML;
		} else {
			temp2 = btn.innerHTML;
			btn.innerHTML = temp;
			temp = temp2;
		}
	}, this);
}

initialise();
