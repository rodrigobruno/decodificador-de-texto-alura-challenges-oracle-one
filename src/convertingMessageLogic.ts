import { TMethod } from "./@types/TMethod";

export function convertingMessageLogic(message: string, method: TMethod): string {
	const dictionary = { 
		e: "enter",
		i: "imes",
		a: "ai",
		o: "ober",
		u: "ufat",
	};
	
	let textToEncript = message.toLowerCase();
	textToEncript = textToEncript.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	textToEncript = textToEncript.replace(/[^a-zA-Z0-9 !?]/g, "");
	
	for (const [key, value] of Object.entries(dictionary)) {
		const org = method === "encript" ? key : value;
		const mod = method === "encript" ? value : key;
		const regex = new RegExp(org, "g");

		textToEncript = textToEncript.replace(regex, mod);
	}
	
	return textToEncript;
}