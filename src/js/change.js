const player = document.querySelector("#landing-player");

let i = 0;
function change() {
	i = (i + 1) % 11;
	player.src =`/landing/${i}.png`;
}

function fade() {
	player.style.opacity = 0;
	setTimeout(function t() {
		change()
		player.style.opacity = 1;
	}, 800);
}

setInterval(fade, 4000);
