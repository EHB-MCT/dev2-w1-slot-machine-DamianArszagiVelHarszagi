export const slotMachine = {
	symbols: ["♠", "♥", "♣", "♦"],
	reels: [],
	reelAmount: 3,
	win: false,

	getRandomSymbol: function () {
		const index = Math.floor(Math.random() * this.symbols.length);
		return this.symbols[index];
	},

	spin: function () {
		this.reels = [];
		for (let i = 0; i < this.reelAmount; i++) {
			this.reels.push(this.getRandomSymbol());
		}
		this.calculateStatus();
	},

	calculateStatus: function () {
		this.win = this.reels.every((symbol) => symbol === this.reels[0]);
	},
};
