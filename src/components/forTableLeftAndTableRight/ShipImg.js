const ShipImg = ({el}) => {
    if(!el) {
        return null;
    }
    return <img key={el.id} src={el.pic} alt={el.alt} style={{width: '2vw', height: '2vw'}}/>;
}

export default ShipImg