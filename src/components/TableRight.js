import ShipImg from './ShipImg';

const TableRight = ({cellsRight, hit2, tableSize, handleClickMove, message}) => {	

    const tableWidth = tableSize;
    const tableHeight = tableSize;

    const renderTable = (rows, columns) => {

        const shipsImgs =  {
            hit: {id: 2, pic: './images/picHit.png', alt: 'hit'},
            miss: {id: 3, pic: './images/picMiss.png', alt: 'miss'},
            empty: {id: 4, pic: './images/picShadow.png', alt: 'shadow'},
        }

        let result = [];
        for(let i = 0; i < rows; i++) {
            let c = [];
            for(let j = 0; j < columns; j++) {
                const numPlay = i * columns + j
                c.push(
                    <td key={numPlay} onClick={ handleClickMove(numPlay) }>
                            <ShipImg el={shipsImgs[cellsRight[numPlay]]} />
                    </td>
                );
            }
            result.push(<tr key={'tr' + i}>{c}</tr>);
        }
        return result;
    };
            
    return (
        <div className='container'>
            {message === null ? <p className='score'>{hit2} {hit2 === 1 ? 'Hit' : 'Hits'}</p>
            : null}
            <table className='style2'>
                <tbody>
                    {renderTable(tableWidth, tableHeight)}
                </tbody>
            </table>
        </div>
    );
};

export default TableRight