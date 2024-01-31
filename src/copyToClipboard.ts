export function copyToClipboard(id: string): void {
	const btn = <HTMLButtonElement>document.querySelector(id)!;
	
	async function copy() {
		const textToCopy = <HTMLParagraphElement>document.getElementById("message-result");
		btn.setAttribute("disabled", "");
		btn.classList.remove("btn-secondary");

		try {
			await navigator.clipboard.writeText(textToCopy?.textContent ?? "");
			btn.textContent = "Copiado";
			btn.classList.add("btn-success");
		} catch (erro) {
			btn.textContent = "Falha ao copiar";
			btn.classList.add("btn-danger");
		}

		setTimeout(() => {
			btn.textContent = "Copiar";
			btn.classList.add("btn-secondary");
			btn.classList.remove("btn-success");
			btn.classList.remove("btn-danger");
			btn.removeAttribute("disabled");
		}, 4000);
	}

	btn.addEventListener("click", copy);

}