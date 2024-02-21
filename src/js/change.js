const player = document.querySelector("#landing-player");
const playerOther = document.querySelector("#landing-player-other");

const basePath = "/uaap-86-second-semester-primer"

let i = 0;
let nextView = false;
function change() {
	i = (i + 1) % 11;

	if (nextView) {
		player.src =`${basePath}/landing/${i}.png`;
		playerOther.style.opacity = 0;
		setTimeout(() => {
			player.style.opacity = 1;
		}, 200)

	} else {
		playerOther.src =`${basePath}/landing/${i}.png`;
		player.style.opacity = 0;
		setTimeout(() => {
			playerOther.style.opacity = 1;
		}, 200)
	}

	nextView = !nextView
}

setInterval(change, 2000);
