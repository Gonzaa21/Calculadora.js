const display = document.getElementById("display");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
	boton.addEventListener("click", ()=>{
		const botonApretado = boton.textContent;
		let error = "Ha ocurrido un error."

		// ---- //

		if (boton.id === "c" || display.textContent === error) {
			display.textContent = "0";
			return;
		}

		// ---- //

		if (boton.id === "clean") {
			if (display.textContent.length === 1) {
				display.textContent = "0";
			} else {
				display.textContent = display.textContent.slice(0, -1);
			} return;
		}

		// ---- //

		if (boton.id === "equal") {
			try {
				display.textContent = eval(display.textContent);
				return;
			} catch {
				display.textContent = error;
				return;
			}
		} 

		// ---- //

		if (display.textContent === "0") {
			display.textContent = botonApretado;
		} else {
			display.textContent += botonApretado;
		}
	})
})