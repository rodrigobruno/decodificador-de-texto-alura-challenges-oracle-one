type TTheme = "light" | "dark"

export function themeSelect(): void {
	const btns = document.querySelectorAll<HTMLButtonElement>(".btn-theme");
	const body = document.body;
	const darkThemeSystem = window.matchMedia("(prefers-color-scheme: dark)");

	function setTheme(theme: TTheme) {
		body.removeAttribute("class");

		if (theme === "dark") {
			body.classList.add(theme);
		}
	}

	darkThemeSystem.addEventListener("change", e => {
		if (e.matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	});
	
	btns.forEach(btn => {
		btn.addEventListener("click", () => {
			const theme = btn.getAttribute("data-theme") as TTheme;
			setTheme(theme);
		});
	});

}