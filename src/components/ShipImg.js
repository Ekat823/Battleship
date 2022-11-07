const ShipImg = ({el}) => {
    if(!el) {
        return null;
    }
    return <img key={el.id} src={el.pic} alt={el.alt}/>;
}

export default ShipImg