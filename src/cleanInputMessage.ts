export  function cleanInputMessage() {
	const btnMessageBackspace = <HTMLButtonElement>document.getElementById("btn-message-backspace")!;
	const inputMessage = <HTMLSpanElement>document.getElementById("input-message");

	const noMessagesFound = <HTMLDivElement>document.querySelector(".no-messages-found");
	const showMessageResult = <HTMLDivElement>document.querySelector(".show-message-result");

	inputMessage?.addEventListener("input", (event) => {
		const message = (event.target as HTMLInputElement)?.innerHTML;

		if (message.length > 0) {
			btnMessageBackspace.classList.remove("hide");
		} else {
			btnMessageBackspace.classList.add("hide");
		}
	});

	btnMessageBackspace.addEventListener("click", () => {
		inputMessage.innerText = "";
		noMessagesFound.classList.remove("hide");
		showMessageResult.classList.add("hide");
	});
}
