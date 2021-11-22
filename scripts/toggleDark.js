let makeDark = document.getElementById("buttonDarkMode");
let moon = document.getElementById("buttonDarkModeMoon");
let sun = document.getElementById("buttonDarkModeSun");
let logo = document.getElementById("logo");
let glider = document.getElementById("productos");
let buttonVerMasContainer = document.getElementById("buttonVerMasContainer");
let main = document.getElementById("destacados");
let cards = document.getElementsByClassName("main__destacados__cardbox");
let buttonVerMas = document.getElementById("buttonVerMas");
let change = true;
let menuButton2 = document.getElementById("menuButton2");

let header = document.getElementById("header");
let headerResponsive = document.getElementById("menuResponsive");
let headerLi = document.getElementsByClassName("header__ul__li__a");
let headerLiResponsive = document.getElementsByClassName(
	"header__ul__responsive__li__link"
);

makeDark.addEventListener("click", () => {
	moon.classList.toggle("hide");
	sun.classList.toggle("show");
	header.classList.toggle("makeDark");
	headerResponsive.classList.toggle("makeDark");
	glider.classList.toggle("makeDark");
	buttonVerMasContainer.classList.toggle("makeDark");
	main.classList.toggle("makeDark");
	buttonVerMas.classList.toggle("makeDark");
	menuButton2.classList.toggle("menuIcon__span");

	if (change) {
		logo.setAttribute(
			"src",
			"https://i.ibb.co/JqJV7pw/marca-de-agua-blanco.png"
		);
		buttonVerMas.style.border = "3px solid white";

		change = !change;
	} else {
		logo.setAttribute("src", "https://i.ibb.co/8KPgndf/logo.png");
		buttonVerMas.style.border = "3px solid black";

		change = !change;
	}

	for (let i = 0; i < headerLi.length; i++) {
		headerLi[i].classList.toggle("makeDark");
		headerLi[i].classList.toggle("makeDarkBgWhite");
	}
	for (let i = 0; i < headerLiResponsive.length; i++) {
		headerLiResponsive[i].classList.toggle("makeDark");
		headerLiResponsive[i].classList.toggle("makeDarkBgWhite");
	}
	for (let i = 0; i < cards.length; i++) {
		cards[i].classList.toggle("makeDarkBorder");
	}
});
