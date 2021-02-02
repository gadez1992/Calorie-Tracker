class Tracker {
	constructor(
		circleDisplay,
		addButton,
		removeButton,
		resetButton,
		calories,
		total,
		goal
	) {
		this.circleDisplay = circleDisplay;
		this.addButton = addButton;
		this.removeButton = removeButton;
		this.resetButton = resetButton;
		this.circleDisplay = circleDisplay;
		this.calories = calories;
		this.total = total;
		this.goal = goal;

		this.addButton.addEventListener("click", this.incrementCalories);
		this.removeButton.addEventListener("click", this.removeCalories);
		this.resetButton.addEventListener("click", this.reset);
	}
	//RESTART
	reset = (e) => {
		e.preventDefault();
		this.total.textContent = 0;
		this.circleDisplay.textContent = "";
		this.calories.value = "";
		totalInputCalories = 0;
		this.circleAnimation();
	};

	//ADD BUTTON CALORIES
	incrementCalories = (e) => {
		calorieValue = Number(this.calories.value);
		totalCalories = Number(this.total.textContent);
		e.preventDefault();
		if (this.ValidaOnlyNumbers() || this.ValidateMinMaxCalories("+")) {
			return;
		} else {
			this.total.textContent = totalCalories + calorieValue;
			totalInputCalories += Number(this.calories.value);
			this.circleAnimation();
			actualPercent = parseInt(percent * 100);
			this.circleDisplay.textContent = `${actualPercent} %`;
			this.messageState();
			added = Number(this.calories.value);
			this.calories.value = "";
		}
	};
	//REMOVE BUTTON CALORIES
	removeCalories = (e) => {
		calorieValue = Number(this.calories.value);
		totalCalories = Number(this.total.textContent);
		e.preventDefault();
		if (this.ValidaOnlyNumbers() || this.ValidateMinMaxCalories("+")) {
			return;
		} else {
			totalInputCalories -= Number(this.calories.value);
			this.circleAnimation();
			this.total.textContent = totalCalories - calorieValue;
			let actualPercent = parseInt(percent * 100);
			this.circleDisplay.textContent = `${actualPercent} %`;
			this.messageState();
			added = Number(this.calories.value);
			this.calories.value = "";
		}
	};

	//VALIDATION FUNCTIONS
	ValidaOnlyNumbers = () => {
		if (isNaN(calorieValue)) {
			return Materialize.toast("Please input a number", 4000);
		}
	};

	ValidateMinMaxCalories = (operator) => {
		if (operator === "+") {
			if (totalCalories + calorieValue < 0) {
				return Materialize.toast("Calories consumed can be less than 0", 4000);
			} else if (totalCalories + calorieValue > Number(this.goal.value) + 500) {
				return Materialize.toast(
					"You are over 500 calories over your goal, try again tomorrow :)",
					4000
				);
			} else if (totalCalories + calorieValue > Number(this.goal.value)) {
				 Materialize.toast(
					"You have met your goal",
					4000
				);
			}
		} else if (operator === "-") {
			if (totalCalories - calorieValue < 0) {
				return Materialize.toast("Calories consumed can be less than 0", 4000);
			}
		}
	};

	//CIRCLE ANIMATION
	circleAnimation = () => {
		percent = totalInputCalories / Number(this.goal.value);
		console.log(totalInputCalories);
		offset = 0;
		offset += -(perimeter * percent);
		circle.setAttribute("stroke-dashoffset", offset);
	};

	//MESSAGE AFTER CALORIE GOAL IS MET
	messageState = () => {
		if (this.total.textContent > Number(this.goal.value)) {
			this.circleDisplay.textContent = `You have met your goal!`;
			this.circleDisplay.style.fontSize = "3rem";
		}
		if (this.total.textContent > Number(this.goal.value) + 200) {
			this.circleDisplay.textContent = `More than 200 calories over your goal!`;
			this.circleDisplay.style.fontSize = "2rem";
			// this.circleDisplay.style.color = "#fb7813";
		}
	};
}

const circleDisplay = document.querySelector("#circleDisplay");
const addButton = document.querySelector("#addButton");
const removeButton = document.querySelector("#removeButton");
const resetButton = document.querySelector("#resetButton");
const calories = document.querySelector("#caloriesInput");
const total = document.querySelector("#total");
const goal = document.querySelector("#goal");
const circle = document.querySelector("#dial1");
let offset = 0;
let calorieValue = 0; // calories input
let totalCalories = 0; // total calories consumed
let percent = 0; //percnet for circleAnimation
let actualPercent = 0; //percent*100 for display
let added = 0;
let totalInputCalories = 0; // used in chart()
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

const tracker = new Tracker(
	circleDisplay,
	addButton,
	removeButton,
	resetButton,
	calories,
	total,
	goal
);

