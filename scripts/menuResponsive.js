let menuButton = document.getElementById("menuButton2");
let menuResponsive = document.getElementById("menuResponsive");

menuButton.addEventListener("click", () => {
	//   menuResponsive.classList.add("menuResponsiveHide");
	menuResponsive.classList.toggle("header__ul__responsive__hide");
	menuButton.classList.toggle("active");
});

window.onscroll = () => {
	if (this.scrollY > 50) {
		menuResponsive.classList.remove("header__ul__responsive__hide");
		menuButton.classList.remove("active");
	}
};
