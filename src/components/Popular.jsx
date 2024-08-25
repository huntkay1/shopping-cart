import '../styles/popular.css'

function Popular() {
    return (
        <section className='popular'>
            <div className='popular-cta'>
                <h2>What's Popular</h2>
                <p>Saepe, cum dolores laborum voluptate voluptas excepturi qui minus ad.</p>
                <button>See More</button>
            </div>
            <div className='popular-images'>
                <div className='container-1'>
                    <div className='popular-1'></div>
                </div>
                <div className='container-2'>
                    <div className='popular-2'></div>
                </div>
            </div>
        </section>
    )
}

export default Popular