export default function sortingUnitsList(array) {
	return array.sort((less, more) => more.health - less.health);
}