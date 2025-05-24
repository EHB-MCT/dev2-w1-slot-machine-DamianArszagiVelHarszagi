import { slotMachine } from "./slotMachine.js";

document.addEventListener("DOMContentLoaded", () => {
	const lever = document.getElementById("button");
	const resultDiv = document.getElementById("result");
	const statusP = document.getElementById("status");

	lever.addEventListener("click", () => {
		slotMachine.spin();
		showReels();
		showGameResult();
	});

	function showReels() {
		resultDiv.innerHTML = "";
		for (let i = 0; i < slotMachine.reels.length; i++) {
			let span = document.createElement("span");
			span.className = slotMachine.reels[i];
			span.textContent = slotMachine.reels[i];
			resultDiv.appendChild(span);
			resultDiv.appendChild(document.createTextNode(" "));
		}
	}

	function showGameResult() {
		statusP.textContent = slotMachine.win ? "You win! 🎉" : "Try again! ❌";
	}
});
