export default function sort(units) {
	const result = units;
	result.sort((less, more) => parseFloat(more.health) - parseFloat(less.health));

	return result;
}