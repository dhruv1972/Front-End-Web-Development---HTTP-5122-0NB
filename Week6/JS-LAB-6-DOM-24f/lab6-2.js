//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageWrapped;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageWrapped() {
	var mystery_Box = document.getElementById("mysteryBox");
	var button_Box = document.getElementById("buttonBox");
	mystery_Box.onmouseover = mystery_message;
	button_Box.onclick = box_switch;

	//GET DOM ELEMENTS WE'LL NEED


	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function mystery_message() {
		var result = confirm("Do you want to see something?");
		if (result === true) {
			mystery_Box.style.display = "none";
			button_Box.style.display = "block";
		}
	}

	//FUNCTION TO CHANGE buttonBox

	// When the Button Box is clicked

	function box_switch() {
		button_Box.style.width = "600px";
		button_Box.style.backgroundColor = "orange";
		button_Box.innerHTML = "<h2>SURPRISE!!</h2>";
	}
}
//SETUP LISTENERS

//END onload FUNCTION