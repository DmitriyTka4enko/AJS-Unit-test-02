import sort from '../units';

test ('sorting units by health', () => {
	const players = [
		{ name: 'мечник', health: 10 },
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
	];
	const result = sort(players);
	const expected = [
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
		{ name: 'мечник', health: 10 },
	];

	expect(result).toEqual(expected)
})
