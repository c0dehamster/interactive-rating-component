const buttons = document.querySelectorAll(".rate")
const submitButton = document.querySelector(".submit")
const userChoice = document.querySelector(".user-choice")
const ratingState = document.querySelector(".rating-state")
const thankYouState = document.querySelector(".thank-you-state")
let rateValue = 0

for (const button of buttons) {
	button.addEventListener("click", e => {
		// Clear the previous choice if there was one

		const previousSelected = document.querySelector('[data-selected="true"]')

		if (previousSelected) {
			previousSelected.dataset.selected = false
		}

		// Store the new user's choice

		rateValue = e.target.dataset.value
		e.target.dataset.selected = true
	})
}

submitButton.addEventListener("click", () => {
	userChoice.textContent = `You selected ${rateValue} out of 5`
	ratingState.dataset.display = "hidden"
	thankYouState.dataset.display = "visible"
})
