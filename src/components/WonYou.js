const WonYou = ({handleRestart}) => {
    return (
        <>
            <h1 className='youwon'>
                You Won!
            </h1>
            <button className='btn-youwon' onClick={handleRestart}>
                Play Again
            </button>
        </>
    )
}

export default WonYou