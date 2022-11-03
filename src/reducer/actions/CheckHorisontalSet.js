import getInitialState from "../../state/GetInitialState";

const CheckHorisontalSet = (index, shipSize, tableSize) => {
	if(index % tableSize === 0) {
		index = index + 1;
	}
	return (((index - 1) % tableSize) + 1) + shipSize <= tableSize;
}

export default CheckHorisontalSet 