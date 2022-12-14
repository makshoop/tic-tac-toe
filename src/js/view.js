export const playerIndicatorWiew = {
	playerIndicator: document.querySelector(".player-indicator-container"),

	insertPlayer1() {
		this.playerIndicator.innerHTML = `
            <h1 class="player-1" id="pl1">
                Игрок 1 X
            </h1>
        `;
	},

	insertPlayer2() {
		this.playerIndicator.innerHTML = `
            <h1 class="player-2" id="pl2">
                Игрок 2 O</i>
        	</h1>
        `;
	},
};

export const ticTacToeFieldView = {
	cells: document.getElementsByClassName("grid-element"),

	insertSign1(cellIndex) {
		this.cells[cellIndex].innerHTML = `
            <div class="cross">
                X
            </div>
        `;
	},

	insertSign2(cellIndex) {
		this.cells[cellIndex].innerHTML = `
            <div class="circle">
                O
            </div>
        `;
	},

	resetAll() {
		// this.cells[0].innerHTML = ''
		// this.cells[1].innerHTML = ''
		// this.cells[2].innerHTML = ''
		// this.cells[3].innerHTML = ''
		// this.cells[4].innerHTML = ''
		// this.cells[5].innerHTML = ''
		// this.cells[6].innerHTML = ''
		// this.cells[7].innerHTML = ''
		// this.cells[8].innerHTML = ''

		for (let i = 0; i < 9; i++) {
			this.cells[i].innerHTML = "";
		}
	},
};
