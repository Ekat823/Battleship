const WonThey = ({handleRestart}) => {
    return (
        <>
            <h1 className='won'>
                Your Oponent Won
            </h1>
			<button className='btn-won' onClick={handleRestart}>
                Play Again
            </button>
        </>
    )
}
export default WonThey