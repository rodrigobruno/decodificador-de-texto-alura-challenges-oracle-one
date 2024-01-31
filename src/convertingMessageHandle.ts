import { TMethod } from "./@types/TMethod";
import { convertingMessageLogic } from "./convertingMessageLogic";

export function convertingMessageHandle(): void {
	const btns = document.querySelectorAll<HTMLButtonElement>(".btn-converting");

	const noMessagesFound = <HTMLDivElement>document.querySelector(".no-messages-found");
	const showMessageResult = <HTMLDivElement>document.querySelector(".show-message-result");

	const inputMessage = <HTMLSpanElement>document.getElementById("input-message");
	const messageResult = <HTMLParagraphElement>document.getElementById("message-result");

	let message = "";

	inputMessage?.addEventListener("input", (event) => {
		message = (event.target as HTMLInputElement)?.innerHTML;

		if (message.length > 0) {
			btns.forEach(btn => btn.removeAttribute("disabled"));
		} else {
			btns.forEach(btn => btn.setAttribute("disabled", ""));
			noMessagesFound.classList.remove("hide");
			showMessageResult.classList.add("hide");
		}
	});

	function handleResult(method: TMethod) {
		const convertedMessage = convertingMessageLogic(message, method);
		messageResult.textContent = convertedMessage;
		noMessagesFound.classList.add("hide");
		showMessageResult.classList.remove("hide");
	}

	inputMessage.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			if (message.length > 0) {
				handleResult("encript");
			}
		}
	});

	btns.forEach(btn => {
		btn.addEventListener("click", () => {
			const method = btn.getAttribute("data-method") as TMethod;
			handleResult(method);
		});
	});
}