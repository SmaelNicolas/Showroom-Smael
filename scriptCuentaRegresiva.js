let date;
const today = new Date();

const dayEtiquette = document.getElementById("daysNumber");
const hoursEtiquette = document.getElementById("hoursNumber");
const minutesEtiquette = document.getElementById("minutesNumber");
const secondsEtiquette = document.getElementById("secondsNumber");

const countDown = () => {
	const dateSelected = new Date(date);
	let currentDate = new Date();

	const totalTimeMiliseconds = dateSelected - currentDate;
	const totalTime = totalTimeMiliseconds / 1000;

	const days = Math.floor(totalTime / 3600 / 24);
	const hours = Math.floor(totalTime / 3600) % 24;
	const minutes = Math.floor(totalTime / 60) % 60;
	const seconds = Math.floor(totalTime % 60);

	addHTML(days, hours, minutes, seconds);
};

const addHTML = (d, h, m, s) => {
	dayEtiquette.innerHTML = d;
	hoursEtiquette.innerHTML = h;
	minutesEtiquette.innerHTML = m;
	secondsEtiquette.innerHTML = s;
};
const calculate = () => {
	let d = 30;
	let m = "may";
	let y = 2022;
	date = `${d} ${m} ${y}`;
	setInterval(countDown, 1000);
};
calculate();
