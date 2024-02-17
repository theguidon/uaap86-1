const player = document.querySelector("#landing-player");

let i = 0;
function change() {
	i = (i + 1) % 11;
	player.src =`/landing/${i}.png`;
}

setInterval(change, 1500);
